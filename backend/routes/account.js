const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get('/balance/:uid', async (req, res) => {
    try {
        const userId = req.params.uid;
        const account = await Account.findOne({ userId: userId });

        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        res.json({ balance: account.balance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/transfer/:to/:from/:amt", async (req, res) => {
    try {
        const amount = parseFloat(req.params.amt);
        const to = req.params.to;
        const from = req.params.from;

        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: "Invalid transfer amount" });
        }

        const account = await Account.findOne({ userId: to });
        if (!account) {
            return res.status(404).json({ error: "Recipient account not found" });
        }

        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } }
        );
        await Account.updateOne(
            { userId: from },
            { $inc: { balance: -amount } }
        );

        res.json({ message: "Transfer successful" });
    } catch (error) {
        console.error("Error processing transfer:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;