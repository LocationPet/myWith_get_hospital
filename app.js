const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '/.env') })

const app = express();
const PORT = process.env.PORT || 4000;

const SERVICE_KEY = process.env.SERVIC_EKEY;

app.get("/", (req, res, next) => {
  console.log(SERVICE_KEY);
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});