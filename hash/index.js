const crypto = require("crypto");
const config = require("../config");

const hash = (str) => {
  const hmac = crypto.createHmac("sha512", config.get("hash.key"));
  const signed = hmac.update(str, "utf-8").digest("base64");
  return signed;
};

module.exports.hash = hash;
