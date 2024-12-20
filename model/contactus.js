const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({

    firstName:
    {type:String,
     required:false},
    lastName:
    {type:String,
     required:false},
    email:
    {type:String,
         required:false},
    phone:{type:Number,
         required:false},
    messsage:{type:String,
         required:false}

});

const contactUs = mongoose.model('contactUs', contactUsSchema);
module.exports = contactUs;