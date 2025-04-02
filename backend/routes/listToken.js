const express = require("express");
const router = express.Router();
const { listedToken } = require("../db");

router.post("/listToken", async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({ message: "Request body is required" });
        }

        const fdtoken = await listedToken.create(body);

        res.json({
            message: "Token Listed successfully",
        });
    } catch (error) {
        console.error("Error listing token:", error);
        res.status(500).json({
            message: "An error occurred while listing the token",
            error: error.message,
        });
    }
});

module.exports = router;