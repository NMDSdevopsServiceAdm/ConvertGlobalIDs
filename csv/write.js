const fastcsv = require("fast-csv");
const fs = require("fs");

const saveCSV = (data, filename) => {
  const writeStream = fs.createWriteStream(filename);
  fastcsv.writeToStream(writeStream, data, {
    delimiter: "|",
    headers: true,
  });
};

module.exports.saveCSV = saveCSV;
