const express = require("express");
const router = express.Router();
const controller = require("../controller/books");
const middleware = require("../middleware/functions");

//INDEX - SHOW ALL BOOKS
router.get("/", controller.get_book_list_page);

//CREATE - ADD NEW BOOK TO THE EXISTING COLLECTION
router.post("/", middleware.is_logged_in, controller.create_book);

//NEW - show form to creat new book
router.get("/new", middleware.is_logged_in, controller.new_book_page);

//SHOW - show more details about each book
router.get("/:id", controller.get_book_page);

// EDIT BOOK ROUTE
router.get(
  "/:id/edit",
  middleware.check_book_ownership,
  controller.edit_book_page
);

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.check_book_ownership, controller.update_book);

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.check_book_ownership, controller.delete_book);

module.exports = router;
