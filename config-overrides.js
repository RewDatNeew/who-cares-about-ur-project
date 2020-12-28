const { override } = require("customize-cra");
const { useBabelRc, addLessLoader } = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(
    useBabelRc(),
    addLessLoader()
);