const express = require("express")
const zod = require("zod")
const { User, FDToken ,FFDToken} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const router = express.Router()

const signUpSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    fullName: zod.string()
})

router.post('/signup', async (req, res) => {
    try {
        const body = req.body;

        const { success } = signUpSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                message: "Email already Taken/Incorrect Inputs"
            })
        }

        const user = await User.findOne({
            username: body.username
        })

        if (user && user._id) {
            return res.status(400).json({
                message: "Email already Taken/Incorrect Inputs"
            })
        }

        const dbUser = await User.create(body)
        const userId = dbUser._id
        await FDToken.create({
            user: userId,
            FDTokens: [],
        })
        await FFDToken.create({
            user: userId,
            FFDTokens: [],
        })
        const token = jwt.sign({
            userId: dbUser._id
        }, JWT_SECRET)

        res.json({
            message: "user created successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
})

const signinBody = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    try {
        const { success } = signinBody.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                message: "Incorrect Inputs"
            })
        }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        })

        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET)

            return res.json({
                token
            })
        }

        res.status(401).json({
            message: "Error while logging in"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
})

router.get('/getUser', async (req, res) => {
    try {
        const username = req.query.username;

        if (!username) {
            return res.status(400).json({
            message: "Username is required"
            });
        }

        const user = await User.findOne({
            username: username,
        });

        if (!user) {
            return res.status(404).json({
            message: "User not found"
            });
        }

        res.json({
            fullName: user.fullName,
            userId : user._id,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
})

module.exports = router