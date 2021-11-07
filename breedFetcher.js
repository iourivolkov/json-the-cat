
const request = require('request');
const args = process.argv;
// command line args to specify breed name --> array
const breedRequest = args.slice(2);
// breedname is an element of the breedRequest array
const breedName = breedRequest[0];
// assign url to variable
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
// request resource from the url
request(url, (error, response, body) => {
// if error occurs, function exits
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  // JSON parse returns empty array --> if no value provided
  if (data.length === 0) {
    console.log("This breed was not found.");
    return;
  }
  // print element of data array, key = description
  console.log(data[0]["description"]);
});






