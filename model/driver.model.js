const mongoose = require("mongoose")
const becomeDriver = new mongoose.Schema({
    
    email : {
        type : String,
        require : true
    }

});
const becomeADriver = mongoose.model("driver",becomeDriver);
module.exports = becomeADriver;