

var http = require('http');
var express = require('express');
var app = express();
var port = 1111;
var server = app.listen(app.get('port'), function(){
    console.log('server is listening.');
    console.log('Express server listening on port ' + server.address().port);
}).listen(1337, "127.0.0.1");

var expressHandlebars  = require('express-handlebars');
var path = require('path');
//var html = require('html');

//var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

app.engine('html', expressHandlebars({
    defaultLayout: 'main',
    extname: '.html',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views')
}));

app.use(express.static(__dirname + '/www/'));

app.use('/', require('./routes/root'));

module.exports = app;