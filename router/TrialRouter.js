const express = require('express')
const router = express.Router()
const trialController = require('../controllers/trialController')

router.post('/setTrialId', trialController.setTrialId)
router.post('/resetTrialId', trialController.resetTrialId)

router.get('/getTrialId', trialController.getTrialId)
router.post('/addOne', trialController.addTrialId)

module.exports = router
