const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
      port: 3000,
    },
    output: {
      publicPath: 'http://localhost:3000/',
      chunkFilename: '[id].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.m?js$/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: [['@babel/transform-runtime']],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          sidebar: 'sidebar@http://localhost:3001/remoteEntry.js',
          footer: 'footer@http://localhost:3002/remoteEntry.js',
        },
        exposes: {
          './Service': './src/Service.js',
          './UserContext': './src/UserContext',
        },
        shared: [
          {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
          './src/UserContext',
        ],
      }),
    ],
  };
};
