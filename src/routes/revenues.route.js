const {
  Created,
  Delete,
  Update,
  Validate,
} = require("../controllers/revenues.controllers");
const authMiddleware = require("../middlewares/auth");

const route = require("express").Router();
route.get("/validate", authMiddleware, Validate);
route.post("/add", authMiddleware, Created);
route.delete("/delete/:id", authMiddleware, Delete);
route.put("/update/:id", authMiddleware, Update);

module.exports = route;
