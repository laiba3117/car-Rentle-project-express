const mongoose = require("mongoose");

const documentationSchema = new mongoose.Schema({
  make: {
    required: false,
    type: String,
  },
  model: {
    required: false,
    type: String,
  },
  registrationCity: {
    required: false,
    type: String,
  },
  carDocument: {
    required: false,
    type: String,
    unique: true,
  },
  transmission: {
    required: false,
    type: Number,
  },
  condition: {
    type: String,
    enum: ["NEW", "USED"],
    default: "NEW",
   },
});
const carDocumentation = mongoose.model("documentation", documentationSchema);
module.exports = carDocumentation;
