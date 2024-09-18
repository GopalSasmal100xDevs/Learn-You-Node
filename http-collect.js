const http = require("http");
const bl = require("bl");

function main() {
  const path = process.argv[2];

  http
    .get(path, (res) => {
      res.pipe(
        bl(function (err, data) {
          if (err) {
            console.log(err);
          }
          const result = data.toString();
          console.log(result.length);
          console.log(result);
        })
      );

      res.on("error", (err) => {
        console.log(err);
      });
    })
    .on("error", console.error);
}
main();
