// var http = require('http');
// var options = {
//   host: "www.google.com",
//   post: 80,
//   path: "/upload",
//   method: "P0ST"
// };
//
// var request = http.request(options, function(response) {
//   console.log('STATUS:', response.statusCode);
//   console.log('HEADERS:', response.headers);
//   response.setEncoding('utf8');
//   response.on('data', function(chunk) {
//     console.log('BODY:'. chunk);
//   });
// });
//
// request.write('This is a piece of data.\n');
// request.write('This is another piece of data. \n');
// request.end();

//
// var request = require('request');
// var inspect = require('util').inspect;
//
// request( 'http://localhost:4001/abc/def', function(err, res, body) {
//   if (err) { throw err; }
//   console.log(inspect({err: err,
//                        res: {statusCode: res.statusCode },
//                        body: JSON.parse(body) }))
//  }
// );

var request = require('request');
var inspect = require('util').inspect;
request( 'http://localhost:4001/redirect', function(err, res, body) {
  if (err) { throw err; }
  console.log(inspect({err: err,
                       res: {statusCode: res.statusCode },
                       body: JSON.parse(body) }))
});
