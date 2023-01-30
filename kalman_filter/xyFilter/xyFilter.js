const KalmanFilter = require("kalmanjs");
const fs = require("fs");

const kf = new KalmanFilter();

// Put your x,y coordinate data in this array
const finalxy = [];

finalxy.forEach((i) => {
  i[0] = kf.filter(i[0]);
});

finalxy.forEach((i) => {
  i[1] = kf.filter(i[1]);
});

path = "filtered_xy.py";
function writeFinalData(data, path) {
  fs.writeFileSync(path, JSON.stringify(data));
}

writeFinalData(finalxy, path);
