const RegularTimer = require('../models/RegularTimerModel')

exports.getRedAverageTime = async (req, res) => {
    let currentArrowId  = 1;
    let redAvgData = []
    while(true && currentArrowId <= 20){
        const allArrowIdTime = await RegularTimer.find({red: true, arrow: currentArrowId});
        if(allArrowIdTime.length <= 0) {
            console.log("There no arrow with currentArrowId", currentArrowId);
            currentArrowId++; continue;
        }
        console.log(allArrowIdTime);
        let totalAverageTime = 0;
        allArrowIdTime.map( arrow => {
            totalAverageTime += arrow.time;
        })
        redAvgData.push({arrowId : currentArrowId, averageTime : (totalAverageTime/ allArrowIdTime.length)});
        currentArrowId++;
    }
    res.send(redAvgData);
}

exports.getBlueAverageTime = async (req, res) => {
    let currentArrowId  = 1;
    let blueAvgData = []
    while(true && currentArrowId <= 20){
        const allArrowIdTime = await RegularTimer.find({red: false, arrow: currentArrowId});
        if(allArrowIdTime.length <= 0) {
            console.log("There no arrow with currentArrowId", currentArrowId);
            currentArrowId++; continue;
        }
        console.log(allArrowIdTime);
        let totalAverageTime = 0;
        allArrowIdTime.map( arrow => {
            totalAverageTime += arrow.time;
        })
        blueAvgData.push({arrowId : currentArrowId, averageTime : (totalAverageTime/ allArrowIdTime.length)});
        currentArrowId++;
    }
    res.send(blueAvgData);
}