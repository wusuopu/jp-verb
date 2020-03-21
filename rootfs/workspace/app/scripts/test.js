process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

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

// run original script
if ((typeof require != 'undefined') && (require.main === module)) {
  require(utils.paths.scriptVersion + "/scripts/test");
}

module.exports = {
  utils,
  webpackConfigFactory: newWebpackConfigFactory,
}
