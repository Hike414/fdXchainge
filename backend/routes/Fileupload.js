const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { FFDToken ,FDToken} = require("../db");

const uploadDir = path.resolve(__dirname, "C:\\Users\\rahul\\OneDrive\\Desktop\\fdXchainge\\frontend\\public\\uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { path, filename } = req.file;
        const body = req.body;
        const date = new Date(body.dur);
        if (!body) {
            return res.status(400).json({ error: "Request body is required" });
        }
        const ffdtoken = await FFDToken.findOne({ user: body.UserId });
        if (!ffdtoken) {
            return res.status(404).json({ message: "FFD Token not found" });
        }
        ffdtoken.FFDTokens.push({
            FDTokenId: body.FDID,
            listed: false,
            amount: body.amount / body.volume,
            tokenName: body.tokenName,
            volume: body.volume,
            image: {
            filename: filename,
            path: path,
            },
            maturityDate: date,
            interestRate: body.int,
        });
        await ffdtoken.save(); 

        try {
            const updatedDocument = await FDToken.findOneAndUpdate(
            { user: body.UserId, "FDTokens.tokenID": body.FDID },
            { $set: { "FDTokens.$.fractionalised": true } },
            { new: true } 
            );

            if (!updatedDocument) {
            console.log("No matching document found.");
            return res.status(404).json({ message: "No matching document found." });
            }

            console.log("Updated document:", updatedDocument);
        } catch (error) {
            console.error("Error updating fractionalised field:", error);
            return res.status(500).json({ error: "Error updating fractionalised field" });
        }
        console.log("File uploaded successfully:", req.file);
        console.log(req.body);
        res.redirect("http://localhost:5173/tokensuccess");
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({
            error: "An error occurred while processing the request",
        });
    }
});

module.exports = router;