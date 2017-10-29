var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static("public"));

var deckSchema = new Schema({
	"name":String,
	"card1":String,
	"card2":String,
	"card3":String,
	"card4":String,
	"deckName":String
});

app.post('/api/send/submissions', function (req, res) {
	var formSub = req.body.formSub; 
	console.log("Request recieved " + formSub);
	res.send("Recieved!")	
});

app.listen(port);