const db = require("./models");
const { User } = require("./models");
const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/map", (req, res) => {
  const location = [36.991428, 30.479187];
  res.render("index", {
    location,
  });
});

app.post("/register", async (req, res) => {
  const { location } = req.body;
  try {
    const l = await User.create({
      location: location,
    });
    res.redirect("/map");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* app.post("/api/send-location", (req, res) => {
  const location = req.body.location;
  console.log("Received location from client:", location);
  res.json({ message: "Location received successfully." });
});
 */

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running");
  });
});
