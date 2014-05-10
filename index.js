var fs = require('fs');

module.exports = function(file, fn) {
  fs.exists(file + '/.git', function(exists) {
    if (exists) return fn(exists);
    fs.exists(file + '/HEAD', function(exists) {
      fn(exists);
    });
  });
};
