const fs = require("fs");

module.exports = function (dir, filter, cb) {
  fs.readdir(dir, "utf8", (err, files) => {
    if (err) {
      return cb(err);
    }

    const res = files.filter((file) => {
      return file.includes(`.${filter}`);
    });
    return cb(null, res);
  });
};
