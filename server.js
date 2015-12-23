
// create an app server
var express = require('express');
var app = express();

// set path to the views (template) directory
app.set('views', __dirname + '/views');

// set path to static files
app.use(express.static(__dirname + '/../public'));

// handle GET requests on /
// note the setting of variables which are injected when pages are rendered.
app.get('/page1', function(req, res){
	res.render('page1.jade', {title: 'Jade Demo', bodytext: 'This is text destined for the body of my page.'});
});

app.get('/page2', function(req, res){
	res.render('page2.jade', {title: 'Jade Demo', bodytext: 'This is text destined for the body of my page.'});
});

// listen on localhost:8080
console.log("Starting server on port 8080");
app.listen(8080);
