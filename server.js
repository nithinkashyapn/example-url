const express = require('express')
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb+srv://admin:admin@cluster0-xo3mt.mongodb.net/url?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Mongo connected sccessfully"))
.catch(err => console.log(err));

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)