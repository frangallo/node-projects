var net = require('net');
var port = 4000;
var conn;

var retryInterval = 3000;
var retriedTimes = 0;
var maxRetries = 10;
var quitting = false;


process.stdin.resume();

process.stdin.on('data', function(data) {
  if (data.toString().trim().toLowerCase() === 'quit') {
    quitting = true;
    console.log("quitting...")
    conn.end();
    process.stdin.pause();
  } else {
    conn.write(data);
  }
});

(function connect(){
  function reconnet() {
    if (retiredTimes >= maxRetries) {
      throw new Error('Max retries have been exceeded');
    }
    retiredTimes += 1;
    setTimeout(connect, retryInterval);
  }
  conn = net.createConnection(port);

  conn.on("connect", function(){
    retriedTimes = 0
    console.log('connected to server');
  });

  conn.on('error', function(err) {
    console.log('Error in connection:' + err);
  });

  conn.on('close', function() {
    if (!quitting){
      console.log('connection got closed, will try to reconnet');
      reconnect();
    }
  });

  conn.pipe(process.stdout, {end: false});
  process.stdin.pipe(conn);

}());
