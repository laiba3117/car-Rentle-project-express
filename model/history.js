const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: false }, // Reference to User
  car: { type: mongoose.Schema.Types.ObjectId,
     ref: 'Car', required: false }, // Reference to Car
  time: { type: Date, 
    default: Date.now }, // Time when the user got the car
});

const carHistory = mongoose.model('History', historySchema);
 module.exports = carHistory;