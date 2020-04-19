var express = require('express');
var app = express();
var port = 5000;
var http = require('http');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var routes = require('./routes');

http.createServer(app).listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
