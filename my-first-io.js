const fs = require("fs");
const path = process.argv[2];
async function main() {
  const data = fs.readFileSync(path, "utf8");
  const inputLines = data.split("\n");
  console.log(inputLines.length - 1);
}

main();
