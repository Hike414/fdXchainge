const express = require("express")
const router = express.Router()
const {FDToken} = require("../db")


router.post('/create-fd',async (req,res)=>{
    const body = req.body;
    const fdtoken = await FDToken.create(body)
    res.json({
        message:"FD Token created successfully",
    })
})




module.exports = router