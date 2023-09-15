const {
  Create,
  Updtate,
  Delete,
  Paid,
} = require("../controllers/debts.controllers");
const authMiddleware = require("../middlewares/auth");

const routes = require("express").Router();

routes.post("/", authMiddleware, Create);
routes.put("/:id", authMiddleware, Updtate);
routes.delete("/:id", authMiddleware, Delete);
routes.put("/paid/:id", authMiddleware, Paid);

module.exports = routes;
