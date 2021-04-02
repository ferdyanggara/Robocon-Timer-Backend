require('dotenv').config()
// var bodyParser = require('body-parser')
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const timerRouter = require('./router/TimerRouter')
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/timer', timerRouter)

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        })
        console.log('connected to MongoDB')
    } catch (err) {
        console.log('error: ', err.message)
    }
}

app.use((req, res, next) => {
    console.log('new request made')
    console.log('host:', req.hostname)
    next()
})
app.get('/', (req, res) => {
    res.send('hi')
})

connectToMongo()

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on 8080')
})
