let User = require("../models/user"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  cookieParser = require("cookie-parser"),
  flash = require("connect-flash");

module.exports = (app) => {
  // PASSPORT CONFIGURATION
  app.use(
    require("express-session")({
      secret: "Once again Rusty wins cutest dog!",
      resave: false,
      saveUninitialized: false,
    })
  );

  //Cookieparser setup
  app.use(cookieParser("secret"));

  // Use Flash Middleware
  app.use(flash());

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
  });
};
