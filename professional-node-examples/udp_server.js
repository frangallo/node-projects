var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var port = 4000;

server.on('message', function(message, rinfo) {
  server.send(message, 0, message.length, rinfo.port, rinfo.address);
});

server.bind(port);
