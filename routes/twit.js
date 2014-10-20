var express = require('express');
var Twit = require('twit');
var app = express.Router();

var T = new Twit({
  consumer_key: 'V5YYbhnFGWGwxSzfrNNhTwQnL',
  consumer_secret: 'D3WLey4aadWOfR7aOD1i049fVl0hT3VX3jXLlZZrDbWY37OX68',
  access_token: '2849326393-br6Jl3u3wH49Z6Xq4Kghn5XSztb80MLSdmf4oHf',
  access_token_secret: 'eQ5oDWV2Jt9AOdmonLxU6TU0918edL42hH0Ve7xL0WcvP'
});

// middleware specific to this app
app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
app.get('/users', function(req, res) {
  T.get('users/search', {
    q: req.param('query')
  }, function(err, data, response) {
    if (err) {
      throw err;
    }
    console.log(data);
    res.send({
      users: data
    });
  });
})
app.get('/tweets', function(req, res) {
  console.log(req)
  T.get('search/tweets', {
    q: req.param('query'),
    count: 100
  }, function(err, data, response) {
    console.log(data, err)
    res.send({
      tweets: data
    });
  })
})
app.post('/follow', function(req, res) {
  console.log(req.param('id'))
  T.post('friendships/create', {
    user_id: req.param('id')
  }, function(err, data, response) {
    if (err) {
      throw err;
    }
    console.log(err, data, response);
    res.send({
      follow: data
    });
  });
})
module.exports = app;
