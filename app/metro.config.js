const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Fix for Node.js standard libraries like 'os' being imported
defaultConfig.resolver = {
  ...defaultConfig.resolver,
  nodeModulesPaths: ["node_modules"], // Ensure Metro doesn’t try to resolve Node.js built-in modules
  extraNodeModules: {
    os: require.resolve("os-browserify/browser"),
  },
};

module.exports = defaultConfig;
