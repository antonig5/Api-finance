const routes = require("express").Router();
const { Create, Delete, Update } = require("../controllers/goals.controllers");
const authMiddleware = require("../middlewares/auth");

routes.delete("/delete/:id", authMiddleware, Delete);
routes.put("/update/:id", authMiddleware, Update);
routes.post("/create", authMiddleware, Create);

module.exports = routes;
