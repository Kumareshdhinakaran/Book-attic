// Set up mongoose connection
const mongoose = require("mongoose");

let mongoUrl = "mongodb://localhost:27017/book_attic";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("DB Connected Successfully");
    },
    (err) => {
      console.error("MongoDB connection error:", err);
    }
  );
