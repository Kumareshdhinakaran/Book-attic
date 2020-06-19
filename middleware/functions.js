var Book = require("../models/book");
const ERROR_MSG = require("../constants/error-message-constants");

/**
 * Method to check if post is owned by the requested user
 * @param {object} req
 * @param {object} res
 * @param {func} next
 */
const check_book_ownership = function (req, res, next) {
  if (req.isAuthenticated()) {
    Book.findById(req.params.id, function (err, foundBook) {
      if (err) {
        req.flash(ERROR_MSG.FLASH_ERROR_KEY, ERROR_MSG.BOOK.NOT_FOUND);
        res.redirect("back");
      } else {
        // does user own the campground?
        next();
      }
    });
  } else {
    req.flash(ERROR_MSG.FLASH_ERROR_KEY, ERROR_MSG.BOOK.UNAUTHENTICATED);
    res.redirect("/");
  }
};

const is_logged_in = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash(ERROR_MSG.FLASH_ERROR_KEY, ERROR_MSG.COMMON.UNAUTHENTICATED);
  res.redirect("/");
};

module.exports = {
  check_book_ownership,
  is_logged_in,
};
