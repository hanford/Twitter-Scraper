var express = require('express');
var Twit = require('twit');
var router = express.Router();

// router.get('/api/tweets', function(req, res) {
//   return res.send({
//     tweets: [1, 2, 3, 4, 5]
//   })
// });

var T = new Twit({
  consumer_key: 'V5YYbhnFGWGwxSzfrNNhTwQnL',
  consumer_secret: 'D3WLey4aadWOfR7aOD1i049fVl0hT3VX3jXLlZZrDbWY37OX68',
  access_token: '2849326393-br6Jl3u3wH49Z6Xq4Kghn5XSztb80MLSdmf4oHf',
  access_token_secret: 'eQ5oDWV2Jt9AOdmonLxU6TU0918edL42hH0Ve7xL0WcvP'
})

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/users', function(req, res) {
  T.get('users/search', {
    q: req.param('query') || 'banana'
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
router.get('/tweets', function(req, res) {
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
module.exports = router;
