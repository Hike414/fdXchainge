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

router.put('/update-fd/:id', async (req, res) => {
    try {
        const id  = req.params.id;  
        const body = req.body;
        if (!body) {
            throw new Error("Request body is missing");
        }
        const fdtoken = await FDToken.findOne({ user: id });
        if (!fdtoken) {
            return res.status(404).json({ message: "FD Token not found" });
        }
        fdtoken.FDTokens.push(body); // Push new data into the FDTokens array
        await fdtoken.save(); // Save the updated document
        res.json({
            message: "FD Token updated successfully",
            fdtoken,
        });
    } catch (error) {
        console.error("Error updating FD Token:", error.message);
        res.status(500).json({
            message: "An error occurred while updating the FD Token",
            error: error.message,
        });
    }
});


router.get('/bulk/:id', async (req, res) => {
    try {
        const id  = req.params.id;  
        const fdtoken = await FDToken.findOne({ user: id });
        if (!fdtoken) {
            return res.status(404).json({ message: "No FD Token found" });
        }
        res.json({
            message: "Fetched FD Tokens successfully",
            FDTokens: fdtoken.FDTokens,
        });
    } catch (error) {
        console.error("Error fetching FD Tokens:", error.message);
        res.status(500).json({
            message: "An error occurred while fetching the FD Tokens",
            error: error.message,
        });
    }
})



module.exports = router;