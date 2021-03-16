const { parseStream } = require("fast-csv");
const { hash } = require("../hash");
const { saveCSV } = require("./write");
const cloneDeep = require("lodash/cloneDeep");

const changeGlobalID = (row, results) => {
  if (row.wrkglbid) {
    row.wrkglbid = hash(row.wrkglbid);
  }
  results.push(row);
};

const saveNewFile = (rowCount, filename, results) => {
  console.log(`Parsed ${rowCount} rows`);
  saveCSV(results, filename);
};

const updateWorker = (stream, filename) => {
  const results = cloneDeep([]);
  parseStream(stream, {
    delimiter: "|",
    headers: true,
  })
    .on("error", (error) => console.error(error))
    .on("data", (row) => changeGlobalID(row, results))
    .on("end", (rowCount) => saveNewFile(rowCount, filename, results));
};

module.exports.updateWorker = updateWorker;
