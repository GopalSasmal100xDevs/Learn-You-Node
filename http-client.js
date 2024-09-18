const http = require("http");

function main() {
  const path = process.argv[2];
  http
    .get(path, (res) => {
      res.setEncoding("utf-8");

      res.on("data", console.log);
      res.on("error", (err) => {
        console.log(err);
      });
    })
    .on("error", console.error);
}

main();
