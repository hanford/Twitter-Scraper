var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// define the home page route
router.get('/birds', function(req, res) {
  console.log(res);
  res.send('Birds home page');
})

router.get('/follow', function(req, res) {
  console.log(req.param('id'))
  // https://api.twitter.com/1.1/friendships/create.json?user_id=1401881&follow=true
})

router.use('/search', require('./search'));

module.exports = router;
