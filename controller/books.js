const Book = require("../models/book");
const User = require("../models/user");
const Joi = require("joi");

/**
 * Method to get list of books
 * @param {*} request
 * @param {*} response
 */
const get_book_list_page = (req, res) => {
  User.findById(req.user.id)
    .populate("books")
    .exec(function (err, user) {
      res.render("homepage", {
        data: user.books,
      });
    });
  // Get all Books from DB
};

const new_book_page = function (req, res) {
  res.render("addbookpage");
};

const get_book_page = function (req, res) {
  //find the book with provided ID
  Book.findById(req.params.id, function (err, foundBook) {
    if (err) {
      console.log(err);
    } else {
      //render show template with that book
      res.render("bookdetails", {
        data: foundBook,
      });
    }
  });
};

const edit_book_page = function (req, res) {
  Book.findById(req.params.id, function (err, foundBook) {
    res.render("editbookdetails", {
      book: foundBook,
    });
  });
};

const create_book = function (req, res) {
  // get data from form and add to book array
  const { body } = req.body.book;

  const bookSchema = Joi.object().keys({
    author: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    title: Joi.string().required(),
    cost: Joi.string().required(),
    rating: Joi.string().required(),
    category: Joi.string().required(),
  });
  const { error } = Joi.validate(body, bookSchema);

  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    console.log("error", message);
    request.flash("error", message);
    response.redirect("/books");
  } else {
    var newBook = req.body.book;
    (newBook.reviews = [
      {
        title: "Amazing Book",
        author: "Natalie Jenner",
        text:
          "The book was really amazing. I recomment all buyers who loves reading to this one",
      },
      {
        title: "Amazing Book",
        author: "Natalie Jenner",
        text:
          "The book was really amazing. I recomment all buyers who loves reading to this one",
      },
    ]),
      // Create a new book and save to DB
      Book.create(newBook, function (err, newlyCreated) {
        if (err) {
          console.log(err);
        } else {
          //redirect back to book page
          req.user.books.push(newlyCreated);
          req.user.save();
          res.redirect("/books");
        }
      });
  }
};

const update_book = function (req, res) {
  // find and update the correct campground
  Book.findByIdAndUpdate(req.params.id, req.body.book, function (
    err,
    updatedBook
  ) {
    if (err) {
      response.redirect("/books");
    } else {
      //redirect somewhere(show page)
      res.redirect(`/books/${req.params.id}`);
    }
  });
};

const delete_book = function (req, res) {
  Book.findByIdAndRemove(req.params.id, function (err, deleted) {
    console.log(deleted);
    if (err) {
      console.log(err);
    }
    res.redirect("/books");
  });
};

module.exports = {
  get_book_list_page,
  create_book,
  new_book_page,
  get_book_page,
  edit_book_page,
  update_book,
  delete_book,
};
