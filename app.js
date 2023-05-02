// Imports
const http    = require('http');
const express = require('express');

// Instantiate the server
const app = express();

// Middleware
app.use(express.static(__dirname + '//public'));
app.use(express.static(__dirname + '//images'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Template engine
app.set('view engine', 'ejs');

// Routes
require('./app/routes.js')(app);

// Listen http
http.createServer(app).listen(8081, () => {
    console.log('Server listening on port 8081 !');
});