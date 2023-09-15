const mongoose = require("mongoose");

const debtsShema = new mongoose.Schema(
  {
    paid: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    is_periodic: {
      type: Boolean,
      default: false,
    },
    limit_to_day_pay: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      validate: {
        validator: function (v) {
          if (this.is_periodic) {
            return typeof v === "number";
          } else {
            return v instanceof Date;
          }
        },
        message: "Valor de dias invalido",
      },
    },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Debts", debtsShema);
