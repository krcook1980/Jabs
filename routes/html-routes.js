// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const app = express();


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/admin");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/admin", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/statistics', (req, res) => {
    res.render('statistics')
  })
};
