const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const customConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: "single-spa-child",
      remotes: {
        MFApp: "MFApp@http://localhost:8081/remoteEntry.js"
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
        },
        "react-dom": {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dc",
    projectName: "single-spa-child",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, customConfig);
};
