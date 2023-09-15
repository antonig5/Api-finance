const app = require("./app");
const config = require("./src/config");
const { connectionDB } = require("./src/config/db");

const port = config.common.api.port;

Promise.resolve().then(async () => {
  await connectionDB();
  app.listen(port, () => {
    console.log(`App running in ${port}`);
  });
});
