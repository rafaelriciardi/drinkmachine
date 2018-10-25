var express = require('express');
var path = require('path');
var app = express();
app.use('/', express.static('../'));

app.get('/', function (req, resp) {
	resp.sendFile('login.html', {root: '../'});
})
app.get('/signin', function (req, resp) {
	resp.sendFile('signin.html', {root: '../'});
})

app.post('/register', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.listen(8080, function(){
	console.log("Listening at port 8080");
})




