//Dependencies
var override = require ("method-override");
var hB = require('express-handlebars');
var bP = require ("body-parser");
var mysql = require("mysql");
var express = require("express");
var app = express();

// SQL connection
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: PORT,
	database: 'burger_db'
});

//POST Override (Do I actually need this??)
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

//Retrieve all burgers
app.get("/", function(request, response){
	connection.query("SELECT * FROM burgers", function(error, data){
		if (error){
			throw error;
		};

		response.render("burger", {
			burgers: data
		});
	});
});

//Add a burger
app.post("/order", function(request, response){
	connection.query("INSERT INTO burgers\
		(burger_name, description, devoured)\
		VALUES\
		(?, ?, false)",
		[request.body.name, request.body.description],
		function(error, data){
			if (error){
				throw error;
			};
			response.redirect("/");
		};
	);
});

//Eat a burger
app.put("/nomnom/:id", function(request, response){
	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [request.body.id], function(error, data){
		if (error){
			throw error
		};

		response.redirect("/");
	});
});








