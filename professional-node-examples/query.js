var connect = require('connect');
var app = connect();

app.use(connect.query());
app.use(function(req, res) {
  res.end(JSON.stringify(req.query));
});

app.listen(8080);
