const server = require("./src/server");
const router = require("./src/router");
const controller = require("./src/controller");
const config = require("./config.json");

let running = server.start(router.route, controller.controllers, config);

process.on("uncaughtException", (error) => {
  console.log(`Uncaught Exception: ${error}`);
  running.close(() => process.exit(1));
  setTimeout(() => process.exit(1), 1000).unref();
});
