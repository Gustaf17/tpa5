const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const tugasROuter = require('./tugas.router')
const authRouter = require('./auth.router')

router.use("/user", userRouter)
router.use("/tugas", tugasROuter)
router.use("/auth",authRouter)

module.exports = router
