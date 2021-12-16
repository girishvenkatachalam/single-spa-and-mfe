const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies
const port = 8081;
module.exports = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.png'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MFApp',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'MFApp' },
      exposes: {
        './TestComponent': './src/TestComponent.jsx'
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['react-router-dom']
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    ]
  }
};