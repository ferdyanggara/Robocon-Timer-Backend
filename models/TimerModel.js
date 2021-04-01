const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timerSchema = new Schema({
  arrow: {
    type: Number,
    required: true
  },
  bestTime: {
    type: Number,
    required: true
  }
}, {timestamps: true})

const Timer = mongoose.model('Timer', timerSchema)

module.exports = Timer