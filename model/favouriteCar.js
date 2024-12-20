const mongoose = require("mongoose")
const userFavouritCar = new mongoose.Schema({


    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: false,
        ref: 'user' 
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: false,
        ref: 'carData' 
    }
});
const favouritCars = mongoose.model("favourite",userFavouritCar);

module.exports = favouritCars;