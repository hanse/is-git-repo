# is-git-repo

Check if a given directory is a git repository.

```js
isGitRepo('/home/user/my-repo', function(git) {
  console.log(git) // boolean
});
```

Supports both regular and bare repositories.
