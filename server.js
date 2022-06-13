const express = require("express");

// create app instance
const app = express();

// define PORT
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// make the public folder static
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`The server is now active on port ${PORT}.`);
});
