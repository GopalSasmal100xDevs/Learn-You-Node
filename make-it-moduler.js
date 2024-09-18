const myModule = require("./mymodule");
const args = process.argv;
const path = args[2];
const filter = args[3];

function main() {
  myModule(path, filter, (err, data) => {
    data.forEach((element) => {
      console.log(element);
    });
  });
}
main();
