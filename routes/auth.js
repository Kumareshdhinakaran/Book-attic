var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// show register form
router.get("/register", function (req, res) {
  res.render("signuppage");
});

//handle sign up logic
router.post("/register", function (req, res) {
  var newUser = new User({
    username: req.body.username,
  });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log("Error in registeration: ", err);
      req.flash("error", err.message);
      return res.render("signuppage");
    }
    passport.authenticate("local")(req, res, function () {
      req.flash("success", "Welcome to Book Attic " + user.username);
      res.redirect("/books");
    });
  });
});

//show login form
router.get("/", function (req, res) {
  res.render("loginpage");
});

//handling login logic
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/books",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

// logout route
router.get("/logout", function (req, res) {
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/");
});

module.exports = router;
