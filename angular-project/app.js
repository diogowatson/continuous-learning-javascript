/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: _Diogo Watson Manhaes de Andrade_ Student ID: _104176169 Date: April 12, 2018*
 ********************************************************************************/


var express = require("express");
var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8081;

// setup the static folder
app.use(express.static("public"));

// handle "404" errors
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Start the server
app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
});
