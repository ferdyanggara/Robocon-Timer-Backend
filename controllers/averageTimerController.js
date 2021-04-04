const RegularTimer = require('../models/RegularTimerModel')

exports.getRedAverageTime = async (req, res) => {
    let currentArrowId = 1
    let redAvgData = []
    while (true && currentArrowId <= 20) {
        const allArrowIdTime = await RegularTimer.find({
            red: true,
            arrow: currentArrowId,
        })
        if (allArrowIdTime.length <= 0) {
            console.log('There no arrow with currentArrowId', currentArrowId)
            currentArrowId++
            continue
        }
        console.log("CURRENT ARROW ID ", currentArrowId)
        console.log(allArrowIdTime)
        let totalAverageTime = 0
        allArrowIdTime.map((arrow) => {
            totalAverageTime += parseInt(arrow.time)
        })
        redAvgData.push({
            arrowId: currentArrowId.toString(),
            averageTime: Math.round(totalAverageTime / allArrowIdTime.length),
        })
        console.log("Total time", totalAverageTime);
        console.log("avg result", Math.round(totalAverageTime / allArrowIdTime.length));
        currentArrowId++
    }
    res.send(redAvgData)
}

exports.getBlueAverageTime = async (req, res) => {
    let currentArrowId = 1
    let blueAvgData = []
    while (true && currentArrowId <= 20) {
        const allArrowIdTime = await RegularTimer.find({
            red: false,
            arrow: currentArrowId,
        })
        if (allArrowIdTime.length <= 0) {
            console.log('There no arrow with currentArrowId', currentArrowId)
            currentArrowId++
            continue
        }
        console.log(allArrowIdTime)
        let totalAverageTime = 0
        allArrowIdTime.map((arrow) => {
            totalAverageTime += parseInt(arrow.time)
        })
        blueAvgData.push({
            arrowId: currentArrowId.toString(),
            averageTime: Math.round(totalAverageTime / allArrowIdTime.length),
        })
        currentArrowId++
    }
    console.log(blueAvgData)
    res.send(blueAvgData)
}
