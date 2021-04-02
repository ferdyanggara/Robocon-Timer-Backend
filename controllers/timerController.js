const Timer = require('../models/TimerModel')

exports.addBestTimeRed = async (req, res) => {
    // console.log('request: ', req.body)

    const check = await Timer.find({ arrow: req.body.arrow, red: true })

    console.log('check', check)
    if (check.length == 0) {
        const newBestTime = new Timer({
            arrow: req.body.arrow,
            bestTime: req.body.bestTime,
            red: true,
        })
        const result = await newBestTime.save()
        res.send(result)
    } else {
        const filter = { arrow: req.body.arrow, red: true }
        const update = { bestTime: req.body.bestTime }

        console.log('filter', filter)
        console.log('update', update)

        const result = await Timer.findOneAndUpdate(filter, update, {
            new: true,
        })
        res.send(result)
    }
}

exports.addBestTimeBlue = async (req, res) => {
    // console.log('request: ', req.body)

    const check = await Timer.find({ arrow: req.body.arrow, red: false })

    console.log('check', check)
    if (check.length == 0) {
        const newBestTime = new Timer({
            arrow: req.body.arrow,
            bestTime: req.body.bestTime,
            red: false,
        })
        const result = await newBestTime.save()
        res.send(result)
    } else {
        const filter = { arrow: req.body.arrow, red: false }
        const update = { bestTime: req.body.bestTime }

        console.log('filter', filter)
        console.log('update', update)

        const result = await Timer.findOneAndUpdate(filter, update, {
            new: true,
        })
        res.send(result)
    }
}

// exports.addBestTimeBlue = async (req, res) => {
//     const newBestTime = new Timer({
//         arrow: 1,
//         bestTime: 1,
//         red: false,
//     })
//     const result = await newBestTime.save()
//     res.send(result)
// }

exports.allBestTimeRed = async (req, res) => {
    const allBestTime = await Timer.find({ red: true })
    console.log('all best time: ', allBestTime)
    let processedBestTime = allBestTime.map((each) => {
        return { bestArrow: each.arrow, Besttime: each.bestTime }
    })
    processedBestTime.sort((a, b) => {
        return a.bestArrow - b.bestArrow
    })
    res.send(processedBestTime)
}

exports.allBestTime = async (req, res) => {
    const allBestTime = await Timer.find()
    console.log('all best time: ', allBestTime)
    let processedBestTime = allBestTime.map((each) => {
        return { bestArrow: each.arrow, Besttime: each.bestTime }
    })
    processedBestTime.sort((a, b) => {
        return a.bestArrow - b.bestArrow
    })
    res.send(processedBestTime)
}

exports.allBestTimeBlue = async (req, res) => {
    const allBestTime = await Timer.find({ red: false })
    console.log('all best time: ', allBestTime)
    let processedBestTime = allBestTime.map((each) => {
        return { bestArrow: each.arrow, Besttime: each.bestTime }
    })
    processedBestTime.sort((a, b) => {
        return a.bestArrow - b.bestArrow
    })
    res.send(processedBestTime)
}

exports.deleteTimeById = async (req, res) => {
    const deleteTimer = await Timer.findByIdAndDelete(req.params.id)
    res.send(deleteTimer)
}

exports.deleteAll = async (req, res) => {
    const result = await Timer.remove()
    res.send(result)
}
