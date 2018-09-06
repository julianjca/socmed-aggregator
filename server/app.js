var express = require('express');
var app = express();
const github = require('./routes/github');
var cors = require('cors')

const port = 3000;
require('dotenv').config();
var request = require('request');
const mongoose   = require('mongoose');

//Connecting do Mongoose
const url = 'mongodb://localhost:27017/socmed-aggregator';
mongoose.connect(url,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected');
});

app.use(cors());


app.listen(port,()=>{
  console.log(`application is on port:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/github',github);





