const express = require("express");
const router = express.Router();
const { FFDToken } = require("../db");

router.post("/create-ffd", async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ error: "Request body is required" });
        }

        const ffdtoken = await FFDToken.create(body);
        res.json({
            message: "FFD Token created successfully",
            data: ffdtoken,
        });
    } catch (error) {
        console.error("Error creating FD Token:", error);
        res.status(500).json({
            error: "An error occurred while creating the FD Token",
        });
    }
});

router.get('/bulk/:id', async (req, res) => {
    try {
        const id  = req.params.id;  
        const ffdtoken = await FFDToken.findOne({ user: id });
        if (!ffdtoken) {
            return res.status(404).json({ message: "No FFD Token found" });
        }
        res.json({
            message: "Fetched FD Tokens successfully",
            FFDTokens: ffdtoken.FFDTokens,
        });
    } catch (error) {
        console.error("Error fetching FFD Tokens:", error.message);
        res.status(500).json({
            message: "An error occurred while fetching the FFD Tokens",
            error: error.message,
        });
    }
})

module.exports = router;