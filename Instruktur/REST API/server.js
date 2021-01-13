const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Encep Suryana application." });
});

// set port, listen for requests

require('./app/routes/customer.routes')(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});