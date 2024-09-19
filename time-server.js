const net = require("net");

const PORT = process.argv[2];
function getCurrentDateTime() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}`;
}

const server = net.createServer((socket) => {
  const getDateAndTime = getCurrentDateTime();
  socket.write(getDateAndTime + "\n");
  socket.end();
});

server.listen(PORT);
