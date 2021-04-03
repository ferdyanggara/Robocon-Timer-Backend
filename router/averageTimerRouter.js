const express = require('express')
const router = express.Router()
const avgTimerController = require('../controllers/averageTimerController')

router.get('/get-avgTimer-red', avgTimerController.getRedAverageTime)
router.get('/get-avgTimer-blue', avgTimerController.getBlueAverageTime)

module.exports = router