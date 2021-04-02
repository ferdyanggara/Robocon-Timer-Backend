const TrialModel = require('../models/TrialModel')

exports.setTrialId = async (req, res) => {
    const filter = { trialId: req.body.trialId }
    const update = { trialId: req.body.trialId + 1 }

    console.log('filter', filter)
    console.log('update', update)

    const result = await TrialModel.findOneAndUpdate(filter, update, {
        new: true,
    })
    res.send(result)
}

exports.resetTrialId = async (req, res) => {
    const filter = { trialId: req.body.trialId }
    const update = { trialId: 0 }

    console.log('filter', filter)
    console.log('update', update)

    const result = await TrialModel.findOneAndUpdate(filter, update, {
        new: true,
    })
    res.send(result)
}

exports.getTrialId = async (req, res) => {
    const allRegularTime = await TrialModel.find()
    res.send(allRegularTime)
}

exports.addTrialId = async (req, res) => {
    const newTrial = new TrialModel({
        trialId: 1,
    })
    const result = await newTrial.save()
    res.send(result)
}
