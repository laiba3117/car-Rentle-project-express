const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  password: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
    unique: true,
  },
  otp: {
    required: false,
    type: Number,
  },
  postalCode: {
    type : String,
    required : false
   },
   address:{
    type : String,
    require : false
   },
   gender : {
    type : String,
    require : false
   },
   drivingLicence:{
    type: String,
    require : false
   },
   town: {
    type : String,
    required : false
   },
   time : {
    type : String,
    required : false
   },
   date:{
    type : Date,
    required: false
   },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },

});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
