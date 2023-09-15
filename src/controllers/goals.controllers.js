const Goals = require("../models/goals");
const jwt = require("jsonwebtoken");

exports.Create = async (req, res) => {
  try {
    const { description, price, estimated_date } = req.body;

    // Obtener el token de autorización de los headers de la solicitud
    const token = req.header("Authorization").replace("Bearer ", "");

    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Obtener el idUser del token decodificado
    const idUser = decoded.userId;

    const goal = await Goals.create({
      description,
      price,
      estimated_date,
      idUser, // Añadir el idUser a la creación de la meta
    });

    return res.status(201).json(goal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
exports.Delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Goals.findByIdAndDelete(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
exports.Update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, price, estimated_date } = req.body;
    const goal = await Goals.findByIdAndUpdate(
      id,
      {
        description,
        price,
        estimated_date,
      },
      { new: true }
    );
    return res.status(200).json(goal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
