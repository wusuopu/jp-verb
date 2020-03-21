const _ = require('lodash');
const path = require('path');
const antdTheme = require('../antd-theme');


const loaderNameMatches = function(rule, loader_name) {
  return rule && rule.loader && typeof rule.loader === 'string' &&
    (rule.loader.indexOf(`${path.sep}${loader_name}${path.sep}`) !== -1 ||
    rule.loader.indexOf(`@${loader_name}${path.sep}`) !== -1);
};
const babelLoaderMatcher = function(rule) {
  return loaderNameMatches(rule, 'babel-loader');
};

const getLoader = function(rules, matcher) {
  let loader;

  _.some(rules, (rule) => {
    return (loader = matcher(rule)
      ? rule
      : getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher));
  });

  return loader;
};

const getBabelLoader = function(rules) {
  return getLoader(rules, babelLoaderMatcher);
};

module.exports = async ({ config }) => {
  let eslintLoader;
  _.some(config.module.rules, (rule) => {
    if (rule.enforce === 'pre' && _.includes(rule.use[0].loader, 'eslint-loader')) {
      eslintLoader = rule;
      return true;
    }
  });
  if (eslintLoader) {
    eslintLoader.use[0].options.baseConfig.extends.push(path.join(__dirname, 'eslint-config.js'));
  }

  const babelLoader = getBabelLoader(config.module.rules);
  if (!_.isArray(babelLoader.include)) {
    babelLoader.include = [babelLoader.include];
  }
  // 针对 workspace，若还需要将其他module也添加到 babel 所要处理的目录列表中
  // babelLoader.include.push(path.join(require.resolve('<module-name>/package.json'), '..'));

  config.module.rules.push({
    test: /\.less$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }, {
      loader: "less-loader",
      options: {
        modifyVars: antdTheme,
        javascriptEnabled: true
      }
    }]
  });
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  return config;
};
