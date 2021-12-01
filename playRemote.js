//W2D3 Lighthouse Labs Compass
const connect = require('./clientRemote')
const net = require("net");
const setupInput = require('./input')

// establishes a connection with the game server


console.log("Connecting ...");
conn = connect()

// setup interface to handle user input from stdin



setupInput(conn);