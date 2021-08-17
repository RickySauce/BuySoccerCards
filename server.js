const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

mongoose.connect("mongodb://localhost:27017/buysoccercardsdb", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

