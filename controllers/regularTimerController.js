const RegularTimer = require('../models/RegularTimerModel')

exports.addRegularTimeRed = async (req, res) => {
    // console.log('request: ', req.body)

    // const check = await RegularTimer.find({ arrow: req.body.arrow, red: true })

    // if (check.length == 0) {

    const newRegularTime = new RegularTimer({
        arrow: req.body.arrow,
        time: req.body.time,
        red: true,
        trial: req.body.trial,
    })
    const result = await newRegularTime.save()
    res.send(result)
}
// }

exports.addRegularTimeBlue = async (req, res) => {
    // console.log('request: ', req.body)

    // const check = await RegularTimer.find({ arrow: req.body.arrow, red: false })

    // console.log('check', check)
    // if (check.length == 0) {
    const newRegularTime = new RegularTimer({
        arrow: req.body.arrow,
        time: req.body.time,
        red: false,
        trial: req.body.trial,
    })
    const result = await newRegularTime.save()
    res.send(result)
    // }
    // else {
    //     const filter = { arrow: req.body.arrow, red: false }
    //     const update = { RegularTime: req.body.RegularTime }

    //     console.log('filter', filter)
    //     console.log('update', update)

    //     const result = await RegularTimer.findOneAndUpdate(filter, update, {
    //         new: true,
    //     })
    //     res.send(result)
    // }
}

// exports.addRegularTimeBlue = async (req, res) => {
//     const newRegularTime = new RegularTimer({
//         arrow: 1,
//         RegularTime: 1,
//         red: false,
//     })
//     const result = await newRegularTime.save()
//     res.send(result)
// }

exports.allRegularTimeRed = async (req, res) => {
    const allRegularTime = await RegularTimer.find({ red: true })
    console.log('all Regular time: ', allRegularTime)
    let processedRegularTime = allRegularTime.map((each) => {
        return { arrow: each.arrow, time: each.time }
    })
    processedRegularTime.sort((a, b) => {
        return a.arrow - b.arrow
    })
    res.send(processedRegularTime)
}

exports.allRegularTime = async (req, res) => {
    const allRegularTime = await RegularTimer.find()
    console.log('all Regular time: ', allRegularTime)
    // let processedRegularTime = allRegularTime.map((each) => {
    //     return { arrow: each.arrow, time: each.time }
    // })
    // processedRegularTime.sort((a, b) => {
    //     return a.arrow - b.arrow
    // })
    res.send(allRegularTime)
}

exports.allRegularTimeBlue = async (req, res) => {
    const allRegularTime = await RegularTimer.find({ red: false })
    console.log('all Regular time: ', allRegularTime)
    let processedRegularTime = allRegularTime.map((each) => {
        return { arrow: each.arrow, time: each.time }
    })
    processedRegularTime.sort((a, b) => {
        return a.arrow - b.arrow
    })
    res.send(processedRegularTime)
}

exports.deleteTimeById = async (req, res) => {
    const deleteTimer = await RegularTimer.findByIdAndDelete(req.params.id)
    res.send(deleteTimer)
}

exports.deleteAll = async (req, res) => {
    const result = await RegularTimer.remove()
    res.send(result)
}
