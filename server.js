var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override');
var path = require('path');

var port = 3006;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var burgersController = require("./controllers/burgers_controllers.js");
// var toysController = require("./controllers/toysController.js");

app.use("/burgers", burgersController);
// app.use("/toys", toysController);

app.listen(port);







