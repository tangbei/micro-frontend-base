const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // 入口文件
  entry: path.join(__dirname, '../src/index.ts'),
  // target: 'web',
  // 打包文件出口
  output: {
    filename: 'js/[name].[hash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '' // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /.(jsx|tsx|js|ts)$/, // 匹配.ts, tsx文件
        exclude: /(node_modules|bower_components)/, // 文件夹中包含这个正则表达式的文件不会被编译
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              esModule: false,
              modules: {
                mode: 'local',
                exportGlobals: true, // 允许 css-loader 从全局类或 ID 导出名称
                localIdentName: '[local]--[hash:base64:5]',
              },
            }
          },
          'sass-loader'
        ],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 或 'async' 根据需要选择
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],// 不用添加后缀
    // alias这里读取了tsconfig.json中paths的映射关系。
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new Dotenv({
      path: `../build/.env.${process.env.NODE_ENV}`
    })
  ],
};