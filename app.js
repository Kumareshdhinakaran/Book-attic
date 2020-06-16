var express = require("express"),
  app = express(),
  Books = require("./data"),
  port = 5000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

//Home route
app.get("/", function (req, res) {
  res.render("loginpage");
});
app.get("/register", function (req, res) {
  res.render("signuppage");
});
app.get("/index", function (req, res) {
  res.render("homepage", { data: Books });
});
app.get("/index/new", function (req, res) {
  res.render("addbookpage");
});

//Server listening
app.listen(port, function () {
  console.log("Server Started successfully");
});
