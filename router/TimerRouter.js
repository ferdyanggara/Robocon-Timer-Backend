const express = require('express')
const router = express.Router()
const timerController = require('../controllers/timerController')

router.post('/add-timer-red', timerController.addBestTimeRed)
router.post('/add-timer-blue', timerController.addBestTimeBlue)

router.get('/all-timer-red', timerController.allBestTimeRed)
router.get('/all-timer-blue', timerController.allBestTimeBlue)
router.get('/all-timer', timerController.allBestTime)

router.get('/delete-timer/:id', timerController.deleteTimeById)
router.get('/delete-all', timerController.deleteAll)

module.exports = router
