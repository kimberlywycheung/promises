/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
const readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      const lines = data.split('\n');
      callback(null, lines[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, response) {
    if (err) {
      callback (err);
    } else {
      callback(null, response.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


