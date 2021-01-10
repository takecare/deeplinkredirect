const server = require("./src/server");
const router = require("./src/router");
const controller = require("./src/controller");
const config = require("./config.json");

server.start(router.route, controller.controllers, config);
