var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  authRoutes = require("./routes/auth"),
  bookRoutes = require("./routes/book");

//Database connectivity
require("./config/dbConnect");

//body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Passport Initialization
let passportInitialize = require("./config/passport");
passportInitialize(app);

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

app.use("/", authRoutes);
app.use("/books", bookRoutes);

//Server listening
app.listen(5000, function () {
  console.log("Server Started successfully");
});
