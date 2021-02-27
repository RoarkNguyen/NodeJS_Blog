const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

// Connect to DB
db.connect();

//HTTP logger
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware
app.use(express.json()); // middleware library as fetch, axios, XMLHttpsRequest

app.use(morgan("combined"));
app.use(methodOverride("_method"));

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routing
route(app);

///////
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
