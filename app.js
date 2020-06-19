var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  authRoutes = require("./routes/auth"),
  methodOverride = require("method-override"),
  bookRoutes = require("./routes/book");

//Database connectivity
require("./config/dbConnect");

// require("./config/data");

//body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(methodOverride("_method"));
//Passport Initialization
let passportInitialize = require("./config/passport");
passportInitialize(app);

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

app.use("/", authRoutes);
app.use("/books", bookRoutes);
app.use("*", function (req, res) {
  req.flash("error", "Sorry there is no such routes!!!");
  res.redirect("/");
});

//Server listening
app.listen(5000, function () {
  console.log("Server Started successfully");
});
