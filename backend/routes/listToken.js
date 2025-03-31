const express = require("express")
const router = express.Router()
const {listedToken} = require("../db")
router.post("/listToken",async (req,res)=>{
    const body = req.body;
    const fdtoken = await listedToken.create(body)
    res.json({
        message:"Token Listed created successfully",
    })
})

module.exports = router