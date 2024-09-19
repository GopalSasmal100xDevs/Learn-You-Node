const fs = require("fs");
const http = require("http");

const PORT = process.argv[2];
const path = process.argv[3];

const server = http.createServer(function (req, res) {
  const stream = fs.createReadStream(path, "utf-8");

  stream.pipe(res);

  stream.on("error", () => {});
});
server.listen(PORT || 8000);
