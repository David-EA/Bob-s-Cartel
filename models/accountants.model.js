const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountantSchema = new Schema(
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
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHERS"],
      default: "OTHERS",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const accountant = mongoose.model("accountant", accountantSchema);

module.exports = accountant;
