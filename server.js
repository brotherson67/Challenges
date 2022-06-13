const express = require("express");
const path = require("path");

// create app instance
const app = express();

// define PORT
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: false }));
// parse information to JSON
app.use(express.json());
// make the public folder static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.listen(PORT, () => {
  console.log(`The server is now active on port ${PORT}.`);
});
