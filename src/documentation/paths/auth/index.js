const register = require("./register");
const login = require("./login");
const UpdateProfile = require("./updateProfile");
const createdRevenues = require("./createdRevenues");
const deleteRevenues = require("./deleteRevenues");
const updateRevenues = require("./updateRevenues");
const createdDebts = require("./createDebts");
const deleteDebts = require("./deleteDebts");
const updateDebts = require("./updateDebts");
const createdGoals = require("./createGoals");
const deleteGoals = require("./deleteGoals");
const updateGoals = require("./updateGoals");

module.exports = {
  ...register,
  ...login,
  ...UpdateProfile,
  ...createdRevenues,
  ...deleteRevenues,
  ...updateRevenues,
  ...createdDebts,
  ...updateDebts,
  ...deleteDebts,
  ...createdGoals,
  ...deleteGoals,
  ...updateGoals,
};
