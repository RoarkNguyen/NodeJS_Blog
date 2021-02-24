const newRouter = require("./new");
const siteRouter = require("./site");
function route(app) {
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });
  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newRouter);
  app.use("/", siteRouter);

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });
}
module.exports = route;
