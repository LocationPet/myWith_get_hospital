const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const jjHospital = require('./apis/JeonJuHospital')

dotenv.config({path: path.join(__dirname, '/.env')})

const app = express();
const PORT = process.env.PORT || 4000;

const SERVICE_KEY = process.env.SERVIC_EKEY;

app.get("/", (req, res, next) => {
  jjHospital();
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});