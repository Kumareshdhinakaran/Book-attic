// Set up mongoose connection
const mongoose = require("mongoose");

let mongoUrl = process.env.DATABASE_URL;

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
