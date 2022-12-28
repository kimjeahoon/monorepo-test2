const { babelInclude, override } = require("customize-cra");
const path = require("path");

module.exports = override(
  babelInclude([path.resolve("../../apps"), path.resolve("../../libs")])
);
