exports.api = require('./api');

exports.partials = function(req, res) {
  res.render('partials/' + req.param('name'));
};

exports.index = function(req, res) {
  console.log('index')
  res.render('index.html');
};
