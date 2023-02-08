const KalmanFilter = require("kalmanjs");
const kf = new KalmanFilter();
const fs = require("fs");

const RSSIObject = {};

// Loop through and kalman filter the RSSI values for each beacon
for (const key in RSSIObject) {
  RSSIObject[key] = RSSIObject[key].map((value) => kf.filter(value));
}

// Visualize changes to object
for (const key in RSSIObject) {
  console.log(RSSIObject[key]);
  console.log(RSSIObject);
}

// Function to write the final results to a file
path = "kalman_filtered_RSSI_values.py";
function writeFinalData(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

// Call write function
writeFinalData(RSSIObject, path);
