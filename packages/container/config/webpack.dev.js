const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("./../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 9080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:9081/remoteEntry.js",
        auth: "auth@http://localhost:9082/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
