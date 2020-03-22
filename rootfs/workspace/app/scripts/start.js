process.env.BABEL_ENV = process.env.BABEL_ENV || 'development';
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const utils = require("./utils");
const config = require("./config");
const webpackConfigPath = utils.paths.scriptVersion + "/config/webpack.config";

// for react-scripts 3.x
// load original configs
let webpackConfigFactory = require(webpackConfigPath);
const newWebpackConfigFactory = (webpackEnv) => {
  let webpackConfig = webpackConfigFactory(webpackEnv);
  webpackConfig = utils.addLoader(webpackConfig, config.loaders);
  webpackConfig = utils.addBabel(webpackConfig, config.babel);
  return webpackConfig;
}

// override config in memory
require.cache[require.resolve(webpackConfigPath)].exports = newWebpackConfigFactory;

const webpackDevServerConfigPath = utils.paths.scriptVersion + "/config/webpackDevServer.config.js";
let webpackDevServerConfigFactory = require(webpackDevServerConfigPath);
const newWebpackDevServerConfigFactory = (proxy, allowedHost) => {
  let webpackDevServerConfig = webpackDevServerConfigFactory(proxy, allowedHost)
  // 针对 typescript 需要启用 writeToDisk 才能监听变化自动刷新
  webpackDevServerConfig.writeToDisk = true
  return webpackDevServerConfig
}
require.cache[require.resolve(webpackDevServerConfigPath)].exports = newWebpackDevServerConfigFactory;

// run original script
if ((typeof require != 'undefined') && (require.main === module)) {
  require(utils.paths.scriptVersion + "/scripts/start");
}

module.exports = {
  utils,
  webpackConfigFactory: newWebpackConfigFactory,
}
