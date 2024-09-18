const fs = require("fs");
const path = process.argv[2];

function main() {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }

    console.log(data.split("\n").length - 1);
  });
}
main();
