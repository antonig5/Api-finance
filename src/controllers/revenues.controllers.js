const revenues = require("../models/revenues");
const Debts = require("../models/debts");
const jwt = require("jsonwebtoken");

exports.Created = async (req, res, next) => {
  try {
    const { date, description, amount } = req.body;

    if (amount <= 0) {
      res.status(400).json({ message: "El monto debe ser mayor a 0" });
      return;
    }

    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const idUser = decoded.userId;

    if (!idUser) {
      res.status(401).json({ message: "Token inválido" });
      return;
    }

    const NewRevenues = new revenues({
      date,
      description,
      amount,
      idUser,
    });

    await NewRevenues.save();

    res.status(200).json({ message: "Ingreso creado correctamente" });
  } catch (error) {
    next(error);
  }
};

exports.Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const RevenuesDelete = await revenues.findByIdAndRemove(id);
    if (!RevenuesDelete) {
      res.status(400).json({ message: "Ingreso no encontrado" });
    }
    res.status(200).json({ message: "eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
exports.Update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const revenuesUpdate = await revenues.findById(id);
    if (!revenuesUpdate) {
      res.status(400).json({ message: "Ingreso no encontrado" });
    }
    revenuesUpdate.set(req.body);
    revenuesUpdate.save();
    res.status(200).json({ message: "ingreso actualizado" });
  } catch (error) {
    next(error);
  }
};

exports.Validate = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const idUser = decoded.userId;

    if (!idUser) {
      res.status(401).json({ message: "Token inválido" });
      return;
    }

    const debts = await Debts.find({ idUser: idUser, paid: false });
    const revenue = await revenues.find({ idUser: idUser });

    const totalDebts = debts.reduce((acc, item) => acc + item.amount, 0);
    const totalRevenues = revenue.reduce((acc, item) => acc + item.amount, 0);

    if (totalDebts > totalRevenues) {
      res.status(400).json({ message: "No tienes suficientes ingresos" });
    } else {
      res.status(200).json({ message: "Tienes suficientes ingresos" });
    }
  } catch (error) {
    next(error);
  }
};
