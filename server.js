const express = require('express');
// const htmlRouter = require('./routes/html-routes.js');
// const authorRouter = require('./routes/author-api-routes.js');
// const apiRouter = require('./routes/post-api-routes.js');
// Sets up the Express App
var passport = require("./config/passport");
var session = require("express-session");
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 8080;
// Requiring our models for syncing
const db = require('./models');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));
// Invoke routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// htmlRouter(app);
// authorRouter(app);
// apiRouter(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});