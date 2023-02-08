const KalmanFilter = require("kalmanjs");
const kf = new KalmanFilter();
const fs = require("fs");
const trilat = require("trilat");

const RSSIObject = {};
const beaconList = ["06DD1C", "06E005", "06DFCC", "06E213"];

// Have to cycle through each beacon readings one by one because the kalman filter is biased towards the readings from the previous reading
// Go through one by one and add the readings in the created file to the key value pairs
// Use this setup for the other file
//
// RSSIObject = {
//      "06DD1C":
//      "06E005":
//      "06DFCC":
//      "06E213":
//               }

// Make sure to use the same beacon name when writing the file

RSSIObject["06DD1C"] = RSSIObject["06DD1C"].map((value) => {
  return kf.filter(value);
});
// RSSIObject["06E005"] = RSSIObject["06E005"].map((value) => {
//   return kf.filter(value);
// });
// RSSIObject["06DFCC"] = RSSIObject["06DFCC"].map((value) => {
//   return kf.filter(value);
// });
// RSSIObject["06E213"] = RSSIObject["06E213"].map((value) => {
//   return kf.filter(value);
// });

// Function to write the final results to a file
path = "kalman_filter_results.py";
function writeFinalData(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

// Call write function
writeFinalData(RSSIObject["06DD1C"], path);
