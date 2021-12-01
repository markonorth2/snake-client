const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243" ,
    port: 50541
  });
  //Allows us to receive messages from the client
    conn.on('data', (data) => {
      console.log('Server says: ', data);
    });
  // Message shown on server when we connect
    conn.on('connect', () => {
      conn.write('Name: NHC');
    });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Move up as soon as we connect
    conn.on('connect', () => {
      conn.write('Move: up');
    });
    
    process.stdin.on('data', function(message){
      conn.write(message);
  });

    conn.on('end', function(){
      console.log('client disconnected from server');
    });
  return conn;


};

module.exports = connect