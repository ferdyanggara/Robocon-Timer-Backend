const mongoose = require('mongoose')
const Schema = mongoose.Schema

const regularTimerSchema = new Schema(
    {
        arrow: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        trial: {
            type: Number,
            required: true,
        },
        red: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true },
)

const RegularTimer = mongoose.model('RegularTimer', regularTimerSchema)

module.exports = RegularTimer
