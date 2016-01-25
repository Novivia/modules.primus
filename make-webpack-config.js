import {outputFileSync} from "fs-extra";
import {join as joinPath} from "path";
import {config, Primus} from "./index";
// import webpack from "webpack";

const primus = Primus.createServer({
  ...config,
  iknowhttpsisbetter: true,
  port: 8085,
});

const primusClientPath = joinPath(__dirname, "vendor", "primus.js");

outputFileSync(
  primusClientPath,
  primus.library(),
);

const webpackConfig = {
  // context: joinPath(__dirname, "vendor"),
  entry: primusClientPath,
  output: {
    path: joinPath(__dirname, "."),
    filename: "client.js",
    // chunkFilename: "client.[id].js",
    publicPath: publicPath,
    library: "Primus",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      // Primus
      {test: /primus\.js$/, loaders: ["exports?Primus", "script"]},
    ]
  },
};

export default webpackConfig;
