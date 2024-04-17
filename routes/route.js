const express = require('express') // import express
const mongoose = require('mongoose') // import mongoose
const { instructorSignup } = require('../controllers/instructorController')
const router = express.Router() // import router
// step1

router.post('/signupInstructor', instructorSignup)

module.exports = router