const express = require("express");
// we have to install body parser to get the data which been entered from the user
const bodyParser = require("body-parser");
const { APPCENTER } = require("ci-info");
const app = express();
// body parser is a package works with express , it has  many modes chech online
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  console.log(req.body);
  res.send("thanks for posting this");
});

app.get("/", function (req, res) {
  console.log(req.body);
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation " + result);
});
app.listen(3000, function () {
  console.log("server working on port 3000");
});
