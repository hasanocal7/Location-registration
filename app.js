const express = require("express");
const config = require("./config");
const db = require("./models");

const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.googleMapsApiKey = config.googleMapsApiKey;
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

db.sequelize.sync().then(() => {
  app.listen(3000, () =>
    console.log("Server is running on http://localhost:3000")
  );
});
