var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var account = require('./passwords.json')
var port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static("public"));
mongoose.connect("mongodb://"+account.username+":"+account.password+"@ds229435.mlab.com:29435/lrr-4");
connection = mongoose.connection;
var deckSchema = new Schema({
	"name":String,
	"card1":String,
	"card2":String,
	"card3":String,
	"card4":String,
	"deckName":String
});
var Deck = mongoose.model('Deck', deckSchema);

app.post('/api/send/submissions', function (req, res) {
	var formSub = req.body.formSub; 
	res.send("Recieved!");	
	console.log("Request recieved " + formSub);
	connection.collection("decks").remove({});
	data = JSON.parse(formSub);
	for(var key in data){
		if (data.hasOwnProperty(key)) {
			var sub = new Deck({
				name:data[key]["Name"],
				card1:data[key]["Card 1"],
				card2:data[key]["Card 2"],
				card3:data[key]["Card 3"],
				card4:data[key]["Card 4"],
				deckName:data[key]["Deck name"]
			});
			connection.collection("decks").insert(sub);
		}
	}
	
});
app.post('/api/delete/deck', function (req, res) {
	var user = req.params.user; 
	connection.collection("decks").remove({name:user});
	res.send("Recieved!");
	
	
	
});

app.listen(port);