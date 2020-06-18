const Book = require("../models/book");
const Joi = require("joi");

/**
 * Method to get list of books
 * @param {*} request
 * @param {*} response
 */
const get_book_list_page = (request, response) => {
  // Get all Books from DB
  Book.find({}, function (err, allBooks) {
    if (err) {
      console.error(err);
    } else {
      console.log("In get_book_list_page: ", allBooks);
      response.render("homepage", {
        data: allBooks,
      });
    }
  });
};

const new_book_page = function (request, response) {
  response.render("addbookpage");
};

const get_book_page = function (request, response) {
  //find the book with provided ID
  Book.findById(request.params.id, function (err, foundBook) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundBook);
      //render show template with that campground
      response.render("bookdetails", {
        data: foundBook,
      });
    }
  });
};

const edit_book_page = function (request, response) {
  Book.findById(request.params.id, function (err, foundBook) {
    response.render("editbookdetails", {
      data: foundBook,
    });
  });
};

const create_book = function (request, response) {
  // get data from form and add to campgrounds array
  const { body } = request.body;

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
    var newBook = body.book;
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
      // Create a new campground and save to DB
      Book.create(newBook, function (err, newlyCreated) {
        if (err) {
          console.log(err);
        } else {
          //redirect back to campgrounds page
          console.log(newlyCreated);
          response.redirect("/books");
        }
      });
  }
};

const update_book = function (request, response) {
  // find and update the correct campground
  Campground.findByIdAndUpdate(request.params.id, request.body.book, function (
    err,
    updatedBook
  ) {
    if (err) {
      response.redirect("/books");
    } else {
      //redirect somewhere(show page)
      response.redirect(`books/${request.params.id}`);
    }
  });
};

const delete_book = function (request, response) {
  Book.findByIdAndRemove(request.params.id, function (err) {
    if (err) {
      console.log(err);
    }
    response.redirect("/books");
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
