var requireHooks = require("@auex/utilities").env.requireHooks;

// Allows to require JSON5, ES2015+ and JSX files.
requireHooks.registerHooks(["babel"]);

module.exports = require("./make-webpack-config");
