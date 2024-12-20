const mongoose = require('mongoose');

const carDataSchema = new mongoose.Schema({
    carName:{type:String,
         required:false},
    carType:{type:String,
         required:false},
    carImg:[{type:String,
         required:false}],
    fuelCapacity:{type:Number,
         required:false},
    personCapacity:{type:Number,
         required:false},
    price:{type:Number,
         required:false},
    isFavourite:{type:Boolean,
        default:false},
    carModel:{type:String,
        required:false}})


    
const carData = mongoose.model('carData', carDataSchema);
module.exports = carData;