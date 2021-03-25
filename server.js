
// Sets up the Express App
const express = require('express');
//Sets up handlebars
const exphbs = require('express-handlebars');

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up passport authenticator
var passport = require("./config/passport");
var session = require("express-session");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//establish local port
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Static directory
app.use(express.static('public'));


// Invoke routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//start the server and database connection
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT http://localhost:${PORT}`));
});