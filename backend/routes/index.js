const express = require('express')
const userRouter = require('./user')
const createFDRouter = require('./createFD')
const createFFDRouter = require('./createFFD')
const FileuploadRouter = require('./Fileupload')
const marketplace = require('./marketplace')
const account = require('./account')
const router = express.Router();

router.use("/user",userRouter)
router.use("/fd",createFDRouter)
router.use("/ffd",createFFDRouter)
router.use("/image",FileuploadRouter)
router.use("/marketplace",marketplace)
router.use("/account",account)

module.exports = router