const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("welcome to index");
});

app.listen(port, () => {
  console.log("server is listening on port 8800");
});

// OK
