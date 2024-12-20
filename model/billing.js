const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
name: {
    required: false,
    type: String,
  },
  phone:{
    required: false,
    type: String,
  },
  password:{
    required: false,
    type: String,
  },
  city:{
    type : String,
    required: false
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
    type : Date,
    required : false
   },
   location:{
    type : String,
    required: false
   },
   date:{
    type : Date,
    required: false
   },

   
});
const billingModel = mongoose.model("billing", billingSchema);
module.exports = billingModel;
