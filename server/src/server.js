const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = (route, controllers) => (request, response) => {
  const parsedUrl = url.parse(request.url);
  const query = querystring.parse(parsedUrl.path);
  route({ parsedUrl, query }, controllers, response);
};

exports.start = function (route, controllers) {
  return http.createServer(server(route, controllers)).listen(8000);
};

exports.close = function () {
  http.close();
};
