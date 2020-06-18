const UNAUTHORIZED = "You don't have permission to do that";
const UNAUTHENTICATED = "You need to be logged in to do that";
module.exports = Object.freeze({
  FLASH_ERROR_KEY: "error",
  BOOK: {
    NOT_FOUND: "Book not found",
    UNAUTHORIZED,
    UNAUTHENTICATED,
  },
  COMMON: {
    UNAUTHENTICATED: UNAUTHENTICATED,
  },
});
