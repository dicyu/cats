// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, finished) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");;
    if (!error) finished(data);
    else finished(undefined);
    
  });
};

module.exports = breedDetailsFromFile;