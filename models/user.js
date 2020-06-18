const mongoose = require("mongoose");
const localPassportMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

UserSchema.plugin(localPassportMongoose);
module.exports = mongoose.model("User", UserSchema);
