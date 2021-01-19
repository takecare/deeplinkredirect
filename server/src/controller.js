function deeplink(query, response) {
  const target = query["/?target"] || query["target"];
  const location = target ? { Location: ensureHttps(target) } : {};
  response.writeHead(target ? 302 : 200, location);
  response.write(target ? `302 reditrected ${location}` : "200 ok");
  response.end();
}

// TODO maybe remove so we easily allow urls like "myapp://dostuff"
function ensureHttps(target) {
  if (target.startsWith("http://")) {
    return `https://${target.substring(7)}`;
  } else if (!target.startsWith("https://")) {
    return `https://${target}`;
  } else {
    return target;
  }
}

function root(query, response) {
  const random = "123456";
  const body = `
    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
      <h3>deeplink</h3>
      <p>your app should be configured to handle links like the following:</p>
      <a href="/deeplink?token=${random}">deeplink</a>
    </body>
    </html>
  `;
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(body);
}

const fs = require("fs");
const path = require("path");

function assetlinks(query, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  const filepath = path.join(
    __dirname,
    "..",
    "public",
    ".well-known",
    "assetlinks.json"
  );
  fs.readFile(filepath, "utf8", function (err, data) {
    if (err) {
      response.statusCode = 404;
      return response.end(
        '{"error": "File not found or you made an invalid request."}'
      );
    }
    response.end(data);
  });
}

// path -> controller
exports.controllers = {
  "/": root,
  "/deeplink": deeplink,
  "/.well-known/assetlinks.json": assetlinks,
};
