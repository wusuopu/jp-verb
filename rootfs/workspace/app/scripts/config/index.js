const path = require('path');
const antdTheme = require('../../antd-theme');

module.exports = {
  babel: {
    include: [
      // 针对 workspace，若还需要将其他module也添加到 babel 所要处理的目录列表中
      // path.join(require.resolve('<module-name>/package.json'), '..'),
    ],
    options: {
      plugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],   // change importing css to less
      ],
    }
  },
  loaders: [
    {
      test: /\.less$/,
      exclude: /\.module\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: { importLoaders: 1, },
        },
        {
          // yarn add less-loader
          loader: require.resolve('less-loader'), // compiles Less to CSS
          options: {
            javascriptEnabled: true,
            modifyVars: antdTheme,
          }
        }
      ],
    },
  ],
};
