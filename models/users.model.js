const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    first_name: {
      required: true,
      type: String,
    },
    last_name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
      lowercase: true,
      dropDups: true,
      trim: true,
    //   match: /^\w ([.-]?\w )*@\w ([.-]?\w )*(\.\w{2,3}) $/,
    },
    phone_number: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["accountant", "admin", "super-user"],
      default: "",
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", usersSchema);

module.exports = user;
