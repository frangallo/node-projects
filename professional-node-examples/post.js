var request = require('request');
var inspect = require('util').inspect;
var options = {url: 'http://localhost:4001/abc/def', method: 'PUT'};

request.post(options, function(err, res, body) {
  if (err) { throw err; }
  console.log(inspect({err: err,
                       res: {statusCode: res.statusCode },
                       body: JSON.parse(body) }))
});
