const http = require("http");
const url = require("url");

// url.parse(string).query
//                                             |
//             url.parse(string).pathname      |
//                         |                   |
//                         |                   |
//                       ------ -------------------
//  http://localhost:8888/start?foo=bar&hello=world
//                                  ---       -----
//                                   |          |
//                                   |          |
//          querystring.parse(string)["foo"]    |
//                                              |
//                     querystring.parse(string)["hello"]

const server = (route, controllers) => (request, response) => {
  const parsedUrl = url.parse(request.url);
  route(parsedUrl, controllers, response);
};

exports.start = function (
  route,
  controllers,
  config = { url: "https://www.google.pt" }
) {
  http.createServer(server(route, controllers)).listen(8000);
};

// TODO serve html page
