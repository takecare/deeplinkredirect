exports.route = function (url, controllers, response) {
  const pathname = url.pathname;
  const controller = controllers[pathname];
  if (controller) {
    controllers[pathname](response);
  } else {
    console.error(`Unsupported path: ${pathname}`);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Not found");
    response.end();
  }
};
