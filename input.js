const keyMapping = require("./constants").keyMapping;
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const stdout = process.stdout;


const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (keyMapping.hasOwnProperty(key)) {
    connection.write(keyMapping[key])
  }
};
  
module.exports = setupInput
