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


router.put("/update-listed-token/:uid/:tid",async (req,res)=>{
    const uid = req.params.uid;
    const tid = req.params.tid;

    try {
        const updatedDocument = await listedToken.findOneAndUpdate(
            { tokenID: tid },
            { $set: { "sold": true, "owner": uid } },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).json({ message: "Token not found or could not be updated" });
        }

        res.json({
            message: "Token updated successfully",
            updatedDocument,
        });
    } catch (error) {
        console.error("Error updating token:", error);
        res.status(500).json({
            message: "An error occurred while updating the token",
            error: error.message,
        });
    }
})

router.get("/bulk", async (req, res) => {
    try {
        const tokens = await listedToken.find({});
        if (!tokens) {
            return res.status(404).json({ message: "No tokens found" });
        }
        res.json({
            message: "Fetched tokens successfully",
            data: tokens,
        });
    } catch (error) {
        console.error("Error fetching tokens:", error);
        res.status(500).json({
            error: "An error occurred while fetching the tokens",
        });
    }
})



module.exports = router