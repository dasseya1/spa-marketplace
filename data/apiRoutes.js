// Require our json file in data folder
var datastorage = require('./datastorage.js');

exports.items = function(req, res) {
  res.json(datastorage);
};

exports.item = function(req, res) {
  res.json(datastorage[req.param.itemId]);
};
