const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  goals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goals",
    },
  ],
  revenues: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Revenues",
    },
  ],
  debts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Debts",
    },
  ],
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
