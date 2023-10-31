const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = 3000;

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}\index.html`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
