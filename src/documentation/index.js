const config = require("../config");
const schemas = require("./schemas");
const paths = require("./paths");

const port = config.common.api.port || 3000;

module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Finance",
    description: "Finances",
    contact: {
      name: "AntonioG",
      email: "giraldoantonio16@gmail.com",
    },
    license: {
      name: "MIT",
    },
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Local server",
    },
  ],
  paths,
  components: {
    schemas,
  },
};
