// TODO search for request.url in /public if no match from controllers[]

exports.route = function (url, controllers, response) {
  const { parsedUrl, query } = url;
  const pathname = parsedUrl.pathname;
  const controller = controllers[pathname];
  if (controller) {
    controllers[pathname](query, response);
  } else {
    console.error(`Unsupported path: ${pathname}`);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Not found");
    response.end();
  }
};
