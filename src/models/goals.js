const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  estimated_date: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Goals", GoalsSchema);
