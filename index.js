var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/views', express.static(path.join(__dirname, '/views')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));
app.use('/images', express.static(path.join(__dirname, '/images')));




app.listen(8080);
