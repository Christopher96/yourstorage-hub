

var remote = require('net').createConnection({host : "localhost", port : 34974},function () {
  console.log('> (clientB) connected to clientA!');

  c.on('data', function (data) {
    console.log(data.toString());
  });
});
