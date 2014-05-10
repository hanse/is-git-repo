var assert = require('assert');
var isGitRepo = require('../');

describe('is-git-repo', function() {
  it('should handle bare repos', function(done) {
    isGitRepo('./test/foo', function(git) {
      assert.equal(true, git);
      done();
    });
  });

  it('should handle regular repos', function(done) {
    isGitRepo('./test/bar', function(git) {
      assert.equal(true, git);
      done();
    });
  });

  it('should handle non-repos', function(done) {
    isGitRepo('./test/not-a-repo', function(git) {
      assert.equal(false, git);
      done();
    });
  })
})
