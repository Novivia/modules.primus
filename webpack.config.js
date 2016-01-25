var registerHooks = require("@auex/utilities").env.requireHooks.registerHooks;

// Allows to require JSON5, ES2015+ and JSX files.
registerHooks();

module.exports = require("./make-webpack-config");
