const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
const route = require("./routes");

//HTTP logger
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware
app.use(express.json()); // middleware library as fetch, axios, XMLHttpsRequest

// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routing
route(app);

///////
app.listen(port, () => {
  console.log(`Example app liste ning at http://localhost:${port}`);
});
