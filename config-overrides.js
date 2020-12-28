const { override } = require("customize-cra");
const { addLessLoader } = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(addLessLoader());