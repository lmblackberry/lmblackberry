const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    suite: {
      type: String,
      require: true,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
      max: 200,
    },
    premium: {
      type: String,
      default: "0",
      max: 50,
    },
    orders: {
      type: Array,
      default: [],
    },
    packages: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
      max: 50,
    },
    address2: {
      type: String,
      max: 50,
      default: "",
    },
    city: {
      type: String,
      max: 50,
      default: "",
      
    },
    state: {
      type: String,
      max: 50,
    },
    zipcode: {
      type: String,
      max: 50,
    },
    country: {
      type: String,
      max: 50,
    },
    paypal: {
      type: String,
      max: 50,
      default: "none",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);