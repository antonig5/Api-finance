const { View, createReport } = require("../controllers/report.controller");
const authMiddleware = require("../middlewares/auth");

const route = require("express").Router();

route.get("/", authMiddleware, View);
route.post("/", authMiddleware, createReport);

module.exports = route;
