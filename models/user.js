const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema(
  {
    admin: {
      type: Boolean,
      default: false,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    // username is basically email of user.
    username: {
      type: String,
      unique: [true, "Username should be unique."],
    },
    // token for verification purpose.
    token: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    jobtitle: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    industry: [String],
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
    orderId: {
      type: Number,
    },
    statusofPayment: {
      type: Boolean,
      default: false,
    },
    datetoregister: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
