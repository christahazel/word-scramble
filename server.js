var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = module.exports = express();
var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

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
var gameController = require("./controllers/game_controller.js");
var usersController = require("./controllers/users_controller.js");
var scoresController = require("./controllers/scores_controller.js");

app.use("/", gameController);
app.use("/users", usersController);
app.use("/scores", scoresController);


var port = process.env.PORT || 3306;
app.listen(port);
