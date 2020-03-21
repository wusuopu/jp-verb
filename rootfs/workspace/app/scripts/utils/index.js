const path = require('path');
const _ = require('lodash');
const paths = require('./paths');

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

const getLoaderContainer = function (rules, loader) {
  for (let rule of rules) {
    if (loader === rule) {
      return rules;
    }
    let container = rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [];
    container = getLoaderContainer(container, loader)
    if (container) {
      return container;
    }
  }
}

const addLoader = function(config, loaders) {
  // 在 file-loader 之前添加自定义 loader
  let fileLoader = getLoader(config.module.rules, rule => loaderNameMatches(rule, 'file-loader'));
  let fileLoaderParent = getLoaderContainer(config.module.rules, fileLoader);
  let fileLoaderPos = fileLoaderParent.indexOf(fileLoader);

  let cutList = fileLoaderParent.splice(fileLoaderPos);
  for (let loader of loaders) {
    fileLoaderParent.push(loader);
  }
  for (let obj of cutList) {
    fileLoaderParent.push(obj);
  }
  return config;
}
const addBabel = function(config, injectBabel) {
  const loader = getBabelLoader(config.module.rules);
  if (!loader) {
    console.log('babel-loader not found');
    return config;
  }
  // Older versions of webpack have `plugins` on `loader.query` instead of `loader.options`.
  const options = loader.options || loader.query;
  injectBabel = injectBabel || {};
  let injectBabelOptions = injectBabel.options || {};
  if (!_.isEmpty(injectBabelOptions.presets)) {
    let presets = injectBabelOptions.presets;
    if (!_.isArray(presets)) {
      presets = [presets];
    }
    options.presets = options.presets.concat(presets);
  }
  if (!_.isEmpty(injectBabelOptions.plugins)) {
    let plugins = injectBabelOptions.plugins;
    if (!_.isArray(plugins)) {
      plugins = [plugins];
    }
    options.plugins =  plugins.concat(options.plugins || []);
  }
  if (!_.isEmpty(injectBabel.include)) {
    // 添加 babel 所要处理的目录列表
    if (!_.isArray(loader.include)) {
      loader.include = [loader.include]
    }
    let include = injectBabel.include;
    if (!_.isArray(include)) {
      include = [include];
    }
    loader.include = loader.include.concat(include);
  }
  return config;
}

// 设置静态资源的路径，默认是 static
const setStaticDir = function(config, dir) {
  if (_.isEmpty(dir)) {
    return config;
  }
  let replace = `${dir}/`;
  config.output.filename = config.output.filename.replace('static/', replace)
  config.output.chunkFilename = config.output.chunkFilename.replace('static/', replace)

  let loader = getLoader(config.module.rules, rule => loaderNameMatches(rule, 'url-loader'))
  if (_.get(loader, 'options.name')) {
    loader.options.name = loader.options.name.replace('static/', replace)
  }
  loader = getLoader(config.module.rules, rule => loaderNameMatches(rule, 'file-loader'))
  if (_.get(loader, 'options.name')) {
    loader.options.name = loader.options.name.replace('static/', replace)
  }

  return config;
}

module.exports = {
  getLoader,
  loaderNameMatches,
  getBabelLoader,
  addLoader,
  addBabel,
  setStaticDir,
  paths,
}
