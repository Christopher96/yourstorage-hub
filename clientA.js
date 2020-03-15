
const local = true;

const remote_host = (local) ? "localhost" : "yourstorage.herokuapp.com";
const remote_port = (local) ? 9999 : 80;

const local_host = "localhost";
const local_port = 50555;

const remote = require('net').createConnection({host: remote_host, port: remote_port}, function () {
  console.log('> connected to public server via local endpoint:', remote.localAddress + ':' + remote.localPort);

  // do not end the connection, keep it open to the public server
  // and start a tcp server listening on the ip/port used to connected to server.js

  const server = require('net').createServer(function (socket) {
    console.log('> (clientA) someone connected, it\s:', socket.remoteAddress, socket.remotePort);
    socket.write("Hello there NAT traversal man, this is a message from a client behind a NAT!");
  }).listen(local_host, local_port, function (err) {
    if(err) return console.log(err);
    console.log('> (clientA) listening on:', remote.localAddress + ':' + remote.localPort);
  });
});
