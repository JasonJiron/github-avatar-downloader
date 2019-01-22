const request = require('request');
const token = require('./secrets');
console.log('Welcome to the GitHub Avatar Downloader!');


let getRepoContributors = (repoOwner, repoName, cb) => {
  let options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    }
  };


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});