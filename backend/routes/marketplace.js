const express= require("express")
const router= express.Router()
const { listedToken } = require("../db")

router.post("/list-token", async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ error: "Request body is required" });
        }
        
        const token = await listedToken.create(body);
        res.json({
            message: "Token listed successfully",
            data: token,
        });
    } catch (error) {
        console.error("Error listing token:", error);
        res.status(500).json({
            error: "An error occurred while listing the token",
        });
    }
});



module.exports = router