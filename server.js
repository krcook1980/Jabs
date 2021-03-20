const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes;

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
