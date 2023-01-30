const trilat = require("trilat");
const fs = require("fs");
const data = require("../raw_data/testA.js");

// // Loop through, determine xy coordinates, append to final data
const finalData = data.testAData.map((i) => {
  return trilat(i);
});

// Create the file with xy coordinates
path = "final_data.py";
function writeFinalData(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

// Call write function
writeFinalData(finalData, path);
