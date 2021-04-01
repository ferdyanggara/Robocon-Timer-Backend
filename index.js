require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const timerRouter = require('./router/TimerRouter')
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))
app.use('/timer',timerRouter)


var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const connectToMongo = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true})
    console.log('connected to MongoDB')
  } catch (err) {
    console.log('error: ', err.message);
  }
}

app.use((req,res,next) =>{
  console.log('new request made');
  console.log('host:', req.hostname)
  next();
})
app.get('/', (req,res) => {
  res.send('kontol')
})


connectToMongo();

app.listen(8080, ()=>{
  console.log('listening on 8080')
})

