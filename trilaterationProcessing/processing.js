const trilat = require("trilat");
const fs = require("fs");
const dataA = require("../raw_data/testA.js");
const dataB = require("../raw_data/testB.js");

// Make sure you specify the data you want to process

// Loop through, determine xy coordinates, append to final data
const finalData = dataA.testAData.map((i) => {
  return trilat(i);
});

// Create the file with xy coordinates
path = "final_data.py";
function writeFinalData(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

// Call write function
writeFinalData(finalData, path);
