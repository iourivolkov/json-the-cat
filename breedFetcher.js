const request = require('request');

// const args = process.argv;
// const breedName = args.slice(2);


const fetchBreedDescription = function(breedName, callback) {
  // request resource from the url
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // if error occurs, function exits
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    // JSON parse returns empty array --> if no value provided
    if (data.length === 0) {
      callback("This breed was not found.", null);
      return;
    }
    // print element of data array, key = description
    callback(null, data[0]["description"]);
    return;
  });
};


module.exports = {fetchBreedDescription};









