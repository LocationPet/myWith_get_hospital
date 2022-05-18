const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res, next) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});