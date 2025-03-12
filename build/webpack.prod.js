const path = require('path');
const commonConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'production', // 开发模式,打包更加快速,省了代码优化步骤
});