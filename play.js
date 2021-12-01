const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243" ,
    port: 50541
  });
  //Allows us to receive messages from the client
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });

  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();