// Require our json file in data folder
var items = require('./datastorage.js');

exports.items = function(req, res) {
  res.json(items);
};

exports.item = function(req, res) {
  res.json(items[req.param.itemId]);
};
