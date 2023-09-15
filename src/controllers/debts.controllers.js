const Debt = require("../models/debts");
const jwt = require("jsonwebtoken");

exports.Create = async (req, res) => {
  const { description, amount, is_periodic, limit_to_day_pay } = req.body;

  // Obtener el token de autorización de los headers de la solicitud
  const token = req.header("Authorization").replace("Bearer ", "");

  // Verificar y decodificar el token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Obtener el idUser del token decodificado
  const idUser = decoded.userId;

  try {
    const newDebt = new Debt({
      description,
      amount,
      is_periodic,
      limit_to_day_pay,
      idUser,
    });

    const debtSaved = await newDebt.save();
    res.status(201).json(debtSaved);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.Updtate = async (req, res) => {
  const { id } = req.params;
  const { description, amount, is_periodic, limit_to_day_pay, idUser } =
    req.body;
  try {
    const debtUpdated = await Debt.findByIdAndUpdate(
      id,
      { description, amount, is_periodic, limit_to_day_pay, idUser },
      { new: true }
    );
    res.status(200).json(debtUpdated);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.Delete = async (req, res) => {
  const { id } = req.params;
  try {
    const debtDeleted = await Debt.findByIdAndDelete(id);
    res.status(200).json(debtDeleted);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.Paid = async (req, res) => {
  const { id } = req.params;
  try {
    const debtPaid = await Debt.findByIdAndUpdate(
      id,
      { paid: true },
      { new: true }
    );
    res.status(200).json(debtPaid);
  } catch (error) {
    res.status(400).json(error);
  }
};
