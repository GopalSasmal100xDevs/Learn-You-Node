const map = require("through2-map");
const http = require("http");

const PORT = process.argv[2];

const server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const upperCaseBody = body.toUpperCase();

      res.end(upperCaseBody);
    });
  }
});
server.listen(PORT || 8000);
