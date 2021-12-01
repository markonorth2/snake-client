const connect = require('./client')
const net = require("net");
const setupInput = require('./input')

// establishes a connection with the game server


console.log("Connecting ...");
connect();


// setup interface to handle user input from stdin



setupInput();