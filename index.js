const fs = require("fs");
const { updateWorker } = require("./csv/parse");

const dir = "./csvs";

const isFile = (file) => {
  fs.stat(file, (err, stat) => {
    if (stat.isDirectory()) {
      walk(file);
    } else if (file.includes(".csv")) {
      const stream = fs.createReadStream(file);
      updateWorker(stream, file);
    } else {
      console.warn("Not a CSV, skipping");
    }
  });
};

const walk = (currDir) =>
  fs.readdir(currDir, (err, files) => {
    files.forEach((file) => {
      isFile(`${currDir}/${file}`);
    });
  });

walk(dir);
