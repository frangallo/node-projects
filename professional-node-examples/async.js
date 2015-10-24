var async_ = require('async');
var request = require('request');
var results = {};

function done(err) {
  if(err) { throw err; }
  console.log('done! results: %j', results);
}

var collection = [1, 2, 3, 4];

function iterator(value, callback) {
  request.post({
                uri: 'http://localhost:8080',
                body: JSON.stringify(value)
              },
              function(err, res, body) {
                if (err) {
                  return callback(err);
                }
                results[value] = JSON.parse(body);

                console.log(callback.toString());
                callback();
              });
}

async_.forEach(collection, iterator, done);
