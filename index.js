var fs = require('fs');
var async = require('async');

module.exports = function(file, fn) {
  async.some([file + '/.git', file + '/HEAD'], fs.exists, function(exists) {
    fn(exists);
  });
};
