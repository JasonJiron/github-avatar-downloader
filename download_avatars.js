const request = require('request');
const token = require('./secrets');
console.log('hello');


let getRepoContributors = (repoOwner, repoName, cb) => {
  let options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      // 'Authorization': 'token ' + token
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  result.forEach((elem) => {
    console.log(elem.avatar_url)
  })
});
