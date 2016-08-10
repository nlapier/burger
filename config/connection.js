/*
Create a connection.js file inside config directory.

Inside the connection.js file, setup the code to connect Node to MySQL.

Export the connection.
*/
var express = require("express");
var override = require ("method-override");
var bp = require ("body-parser");
var mysql = require("mysql");


// Connection to mysql:
module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'burger_db'
});