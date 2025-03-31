const express = require("express");
const router = express.Router();
const { FDToken } = require("../db");

router.post('/create-fd', async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            throw new Error("Request body is missing");
        }

        const fdtoken = await FDToken.create(body);
        res.json({
            message: "FD Token created successfully",
        });
    } catch (error) {
        console.error("Error creating FD Token:", error.message);
        res.status(500).json({
            message: "An error occurred while creating the FD Token",
            error: error.message,
        });
    }
});

module.exports = router;