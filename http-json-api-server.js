const http = require("http");
const url = require("url");

const port = process.argv[2];

function parseTime(isoTime) {
  const date = new Date(isoTime);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixTime(isoTime) {
  const date = new Date(isoTime);
  return {
    unixtime: date.getTime(),
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const isoTime = parsedUrl.query.iso;

  if (pathname === "/api/parsetime" && isoTime) {
    const timeData = parseTime(isoTime);
    res.end(JSON.stringify(timeData));
  } else if (pathname === "/api/unixtime" && isoTime) {
    const timeData = unixTime(isoTime);
    res.end(JSON.stringify(timeData));
  } else {
    res.end("Invalid endpoint or missing iso parameter");
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
