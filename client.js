// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants")

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("incoming data: " + data);
  });
  conn.on("connect", () => {
    console.log("Connection established.");
    conn.write("Name: LAW");
  });
  return conn;
};

console.log("Connecting ...");

module.exports = connect;