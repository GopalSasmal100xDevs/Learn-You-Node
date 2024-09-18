const fs = require("fs");

function main() {
  const args = process.argv;
  const path = args[2];
  const extenstion = args[3];

  fs.readdir(path, "utf8", (err, data) => {
    data.forEach((item) => {
      if (item.includes(`.${extenstion}`)) {
        console.log(item);
      }
    });
  });
}
main();
