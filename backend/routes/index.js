const express = require('express')
const userRouter = require('./user')
const createFDRouter = require('./createFD')
// const listTokens = require('./listToken')
const router = express.Router();

router.use("/user",userRouter)
router.use("/fd",createFDRouter)
// router.use("/marketplace",listTokens)

module.exports = router