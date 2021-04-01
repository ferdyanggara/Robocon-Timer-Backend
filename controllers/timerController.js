const Timer = require('../models/TimerModel')


exports.addBestTimeRed = async(req,res)=>{
  const newBestTime = new Timer({
    arrow: 1,
    bestTime : 180
  })
  const result = await newBestTime.save()
  res.send(result)
}

exports.addBestTimeBlue = async(req,res)=>{
  const newBestTime = new Timer({
    arrow: 1,
    bestTime : 1
  })
  const result = await newBestTime.save()
  res.send(result)
}

exports.allBestTime = async(req,res)=>{
  const allBestTime = await Timer.find()
  console.log('all best time: ', allBestTime)
  let processedBestTime = allBestTime.map((each) => {
    return (
  { bestArrow: each.arrow, Besttime: each.bestTime}
    )
  })
  res.send(processedBestTime)
}

exports.deleteTimeById = async(req,res)=>{
  const deleteTimer = await Timer.findByIdAndDelete(req.params.id)
  res.send(deleteTimer)
}

exports.deleteAll = async(req,res)=>{
  const result = await Timer.remove();
  res.send(result);
}
