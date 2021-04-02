const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trialSchema = new Schema(
    {
        trialId: {
            type: Number,
            required: true,
        },
    },
    // { timestamps: true },
)

const Trial = mongoose.model('Trial', trialSchema)

module.exports = Trial
