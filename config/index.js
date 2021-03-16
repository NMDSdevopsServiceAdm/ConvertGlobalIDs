const convict = require("convict");

const config = convict({
  hash: {
    key: {
      doc: "Key to increase security",
      format: "*",
      default: "unknown",
      env: "HASH_KEY",
    },
  },
});

// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
