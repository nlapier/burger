//Dependencies
var override = require ("method-override");
var hB = require('express-handlebars');
var bP = require ("body-parser");
var mysql = require("mysql");
var express = require("express");
var app = express();


// Connection to mysql:
module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'burger_db'
});

//POST Override
app.use(override("_method"));

//Set up Handlebars
app.engine("handlebars", hB({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Get static content from "public" directory
app.use(express.static(process.cwd() + "/public"));

//Set up body parser
app.use(bP.urlencoded({
	extended: false
}));