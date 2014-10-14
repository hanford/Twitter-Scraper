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

router.get('/test', function(req, res) {
  console.log('First Request')
})

router.use('/search', require('./search'));

module.exports = router;
