var tls = require('tls');
var fs = require('fs');
var port = 4001;

var serverOptions = {
  key: fs.readFileSync('./my_key.pem'),
  cert: fs.readFileSync('./my_certificate.pem')
};
var server = tls.createServer(serverOptions);
server.listen(port)

function secureConnectionListener(clientStream) {
  clientStream.on('data', function(data) {
    console.log('got some data from the client:', data);
  });
}
server.on('secureConnection', secureConnectionListener);

server.on('secureConnection', function(clientStream) { clientStream.write('Hey Hello!\n');
});

server.on('secureConnection', function(clientStream) { clientStream.on('data', function(data) {
if (data.toString().trim().toLowerCase() === 'quit') { clientStream.end('Bye bye!');
} });
});
