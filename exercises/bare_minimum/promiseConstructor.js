/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

let readFile = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  let promise = readFile(filePath);

  return promise
    .then((data) => {
      return data.split('\n');
    })
    .then((data) => {
      return data[0];
    })
    .catch((err) => {
      throw err;
    });
};

// This function should retrieve the status code of a GET request to `url`
let getStatusCode = (url) => new Promise ((resolve, reject) => {
  request.get(url, function(err, response) {
    if (err) {
      reject(err);
    } else {
      resolve(response);
    }
  })
});

var getStatusCodeAsync = function(url) {
  let statusPromise = getStatusCode(url);

  return statusPromise
    .then((response) => {
      return response.statusCode;
    })
    .catch ((err) => {
      throw err;
    })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
