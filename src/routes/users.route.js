const express = require("express");
const {
  register,
  getAllUsers,
  login,
  UpdateProfile,
} = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth");

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.get("/", authMiddleware, getAllUsers);
route.put("/profile/:id", authMiddleware, UpdateProfile);
module.exports = route;
