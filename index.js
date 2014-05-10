var fs = require('fs');
var async = require('async');

module.exports = function(file, fn) {
  async.filter([file + '/.git', file + '/HEAD'], fs.exists, function(exists) {
    fn(exists.length > 0);
  });
};
