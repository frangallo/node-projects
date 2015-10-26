var users = require('../data/users');
var notLoggedIn = require('./middleware/not_logged_in');

module.exports = function(app) {
  app.get('/users/new', function(req, res) {
    res.render('users/new', {title: "new User"});
  });

  app.get('/users/:name',function(req, res) {
    var user = users[req.params.name];
    if(user){
      res.render('users/profile', {title: 'User profile', user: user});
    } else {
      next();
    }
  });

  app.get('/users', function(req, res) {
    res.render('users/index', {title: 'Users', users: users});
  });

  app.post('/users', function(req, res) {
    if (users[req.body.username]) {
      res.send('Conflict', 409)
    } else {
      users[req.body.username] = req.body;
      res.redirect('/users');
    }
  });

  app.del('/users/:name', function(req,res,next){
    if (users[req.params.name]){
      delete users[req.params.name];
      res.redirect('/users');
    } else {
      next();
    }
  });




};
