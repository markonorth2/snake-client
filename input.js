let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on(
    "data", (keyPressed) => {
      handleUserInput(keyPressed);
    });
  return stdin;
};


const handleUserInput = function (keyPressed) {
  // \u0003 maps to ctrl+c input
  if (keyPressed === '\u0003' || keyPressed === "x") {
    process.exit();
  }
  if (keyPressed === 'w') {
    connection.write("Move: up")
  }
  if (keyPressed === "a") {
    connection.write("Move: left");
  }
  if (keyPressed === "s") {
    connection.write("Move: down");
  }
  if (keyPressed === "d") {
    connection.write("Move: right");
  }
  if (keyPressed === "f") {
    connection.write("Say: help!");
  }
  
  
};

module.exports = setupInput; 
