var express = require('express');
var app = express();
var port = 8000;

app.post('/api/send/submissions', function (req, res) {
	var formSub = req.param('formSub'); 
	console.log("Request recieved " + formSub);
	res.send("Recieved!")
	
})

app.listen(port);