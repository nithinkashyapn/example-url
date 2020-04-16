const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://admin:admin@cluster0-xo3mt.mongodb.net/url?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Mongo connected sccessfully"))
.catch(err => console.log(err));

let urlSchema = new mongoose.Schema({
  longURL: String,
  shortURL: String
});

let urls = mongoose.model('URLS', urlSchema);

app.get("/", function (req, res) {
  res.render('pages/url');
})

app.get('/:url', async function (req, res) {
  let url = new urls()
  url = await urls.findOne({shortURL: req.params.url})
  console.log(url)
  res.redirect(url.longURL)
})
 
app.post("/", async function (req, res) {
  let body = req.body;
  body = new urls({longURL: body.longURL, shortURL: Math.floor(Math.random() * (1000 - 1) + 1)})
  let result = await body.save() 
  console.log(result)
  res.send("Shortcode is " + result.shortURL);
})

app.listen(3000)