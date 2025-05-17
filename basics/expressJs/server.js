const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Request successful", req.query.name);
});

app.get("/about", (req, res) => {
  return res.send("About", req.query.name);
});

app.listen(8000, () => console.log("Server started."));