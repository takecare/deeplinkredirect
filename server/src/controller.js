function root(query, response) {
  const target = query["/?target"] || query["target"];
  const location = target ? { Location: ensureHttps(target) } : {};
  console.log(location);
  response.writeHead(target ? 302 : 200, location);
  response.write(target ? `302 reditrected ${location}` : "200 ok");
  response.end();
}

function ensureHttps(target) {
  if (target.startsWith("http://")) {
    return `https://${target.substring(7)}`;
  } else if (!target.startsWith("https://")) {
    return `https://${target}`;
  } else {
    return target;
  }
}

function about(query, response) {
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
  response.write(body);
  response.end(body);
}

// path -> controller
exports.controllers = {
  "/": root,
  "/about": about,
};
