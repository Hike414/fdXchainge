const express = require("express")
const zod = require("zod")
const {User} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")
const router = express.Router()


const signUpSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    fullName : zod.string()
})

router.post('/signup',async (req,res)=>{
    const body = req.body;

    const {success} = signUpSchema.safeParse(req.body);

    if(!success){
        return res.json({
            message : "Email already Taken/Incorrect Inputs"
        })
    }
    
    const user = User.findOne({
        username : body.username
    })
    
    if(user._id){
        return res.json({
            message : "Email already Taken/Incorrect Inputs"
        })
    }
    const dbUser = await User.create(body)
    const userId = dbUser._id
    
    const token = jwt.sign({
        userId : dbUser._id
    },JWT_SECRET)
    
    res.json({
        message:"user created successfully",
        token : token
    })
})

const signinBody = zod.object({
    username : zod.string(),
    password: zod.string()
})

router.post('/signin',async (req,res)=>{
    const {success} = signinBody.safeParse(req.body);
    if(!success){
        return res.json({
            message : "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password,
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)

        return res.json({
            token
        })
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = router