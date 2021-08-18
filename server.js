require('dotenv').config()

const express = require('express');
const bodyParser = require("body-parser")
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL) 
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

