const path = require('path');
const fs = require('fs');

const scriptVersion = 'react-scripts';
const modulePath = path.join(
  require.resolve(`${scriptVersion}/package.json`),
  '..'
);

const paths = require(modulePath + '/config/paths');

module.exports = Object.assign({
  scriptVersion: modulePath,
}, paths);
