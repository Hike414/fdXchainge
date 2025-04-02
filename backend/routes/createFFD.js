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

router.put("/update-ffd/:uid/:fid/:tokens", async (req, res) => {
    try {
        const uid = req.params.uid;
        const fid = req.params.fid;
        const tokens = req.params.tokens;

        const ffdToken = await FFDToken.findOne({ user: uid, "FFDTokens._id": fid });
        if (!ffdToken) {
            return res.status(404).json({ message: "No matching document found." });
        }

        const currentVolume = ffdToken.FFDTokens.find(token => token._id.equals(fid))?.volume;
        if (currentVolume === undefined) {
            return res.status(404).json({ message: "Volume not found for the specified token." });
        }

        const updatedDocument = await FFDToken.findOneAndUpdate(
            { user: uid, "FFDTokens._id": fid },
            { $set: { "FFDTokens.$.volume": parseInt(currentVolume) - parseInt(tokens) } },
            { new: true }
        );

        if (!updatedDocument) {
        console.log("No matching document found.");
        return res.status(404).json({ message: "No matching document found." });
        }

        return res.json({ message: "FFD Token updated successfully", updatedDocument });
    } catch (error) {
        console.error("Error updating fractionalised field:", error);
        return res.status(500).json({ error: "Error updating fractionalised field"
        });
    }
})
router.put("/update-ffd/:uid/:fid", async (req, res) => {
    try {
        const uid = req.params.uid;
        const fid = req.params.fid;


        const updatedDocument = await FFDToken.findOneAndUpdate(
            { user: uid, "FFDTokens._id": fid },
            { $set: { "FFDTokens.$.listed": true} },
            { new: true }
        );

        if (!updatedDocument) {
        console.log("No matching document found.");
        return res.status(404).json({ message: "No matching document found." });
        }

        return res.json({ message: "FFD Token updated successfully", updatedDocument });
    } catch (error) {
        console.error("Error updating fractionalised field:", error);
        return res.status(500).json({ error: "Error updating fractionalised field"
        });
    }
})



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