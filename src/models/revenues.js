const mongoose = require("mongoose");
const revenuesShema = new mongoose.Schema({
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Revenues", revenuesShema);
