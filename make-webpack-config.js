import {outputFileSync} from "fs-extra";
import {join as joinPath} from "path";
import {config, Primus} from "./";

const primus = Primus.createServer({
  ...config,
  iknowhttpsisbetter: true,
  port: 8090,
});

const primusClientPath = joinPath(__dirname, "vendor", "primus.js");

outputFileSync(
  primusClientPath,
  primus.library(),
);

primus.destroy();

const webpackConfig = {
  entry: primusClientPath,
  output: {
    path: joinPath(__dirname, "."),
    filename: "client.js",
    library: "Primus",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      // Primus.
      {test: /primus\.js$/, loaders: ["exports?Primus", "script"]},
    ]
  },
};

export default webpackConfig;
