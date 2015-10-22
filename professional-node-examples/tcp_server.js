// require('net').createServer(function(socket){
//   socket.on('data', function(data){
//
//   });
//
//   socket.on('end', function(data){
//
//   });
//
//   socket.write('Some string');
// }).listen(4001);


var server = require('net').createServer();
var port = 4001;

server.on('listening', function(){
  console.log('Server is listening on port', port);
});

server.on('connection', function(socket) {
  console.log('Server has a new connection');
  socket.end();
  server.close();
})

server.on('close', function(){
  console.log('Server is now closed');
})

server.on('error', function() {
  console.log('Error occurred: ', err.message);
});

server.listen(port)
