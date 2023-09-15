const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Report = require("../models/report");
const Goals = require("../models/goals");
const Revenues = require("../models/revenues");
const Debts = require("../models/debts");

exports.View = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const report = await Report.findOne({ idUser: user._id });

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    const goals = await Goals.find({ idUser: user._id });
    const revenues = await Revenues.find({ idUser: user._id });
    const debts = await Debts.find({ idUser: user._id });

    report.goals = goals;
    report.revenues = revenues;
    report.debts = debts;

    return res.status(200).json(report);
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
exports.createReport = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const goals = await Goals.find({ idUser: user._id });
    const revenues = await Revenues.find({ idUser: user._id });
    const debts = await Debts.find({ idUser: user._id });

    const reportData = {
      idUser: user._id,
      goals,
      revenues,
      debts,
    };

    const report = await Report.create(reportData);

    return res.status(201).json(report);
  } catch (error) {
    next(error);
  }
};
