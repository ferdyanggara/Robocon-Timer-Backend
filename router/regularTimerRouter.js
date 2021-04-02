const express = require('express')
const router = express.Router()
const regTimerController = require('../controllers/regularTimerController')

router.post('/add-regTimer-red', regTimerController.addRegularTimeRed)
router.post('/add-regTimer-blue', regTimerController.addRegularTimeBlue)

router.get('/all-regTimer-red', regTimerController.allRegularTimeRed)
router.get('/all-regTimer-blue', regTimerController.allRegularTimeBlue)
router.get('/all-regTimer', regTimerController.allRegularTime)

router.get('/delete-regTimer/:id', regTimerController.deleteTimeById)
router.get('/delete-all', regTimerController.deleteAll)

module.exports = router
