const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv;
const breedRequest = args.slice(2);
// breed = first element of command line args array
const breed = breedRequest[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    // if error, print error details
    console.log('Error fetch details:', error);
  } else {
    // if no error, print description
    console.log(desc);
  }
});