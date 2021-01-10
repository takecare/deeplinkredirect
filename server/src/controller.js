function root(response) {
  response.writeHead(302, { Location: config.url });
  response.write("start");
  response.end();
}

function about(response) {
  const body = `
    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
      <p>about</p>
    </body>
    </html>
  `;
  response.writeHead(200, { "Content-Type": "text/html" });
  // response.write(body);
  response.end(body);
}

// path -> controller
exports.controllers = {
  "/": root,
  "/about": about,
};
