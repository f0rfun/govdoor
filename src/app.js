const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello to GovDoor!");
});

app.use((err, req, res) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
