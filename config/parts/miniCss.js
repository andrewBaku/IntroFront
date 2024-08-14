const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const mode =  process.env.NODE_ENV || "development";

exports.extractCSS = ({ include, exclude, use = [] }) => {
 
 // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: "./css/style.css",
   // chunkFilename: "[id].css",
  });
  
  return {
      optimization: {
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
      plugins: [
         plugin,
      ],
      module: {
          rules: [
              {
                  test: /\.css$/,
                  use: [
                      {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                              publicPath: (resourcePath, context) => {
                                  // publicPath is the relative path of the resource to the context
                                  // e.g. for ./css/admin/main.css the publicPath will be ../../
                                  // while for ./css/main.css the publicPath will be ../
                                  return path.relative(path.dirname(resourcePath), context) + '/';
                              },
                          },
                      },
                      'css-loader',

                      {
                          loader: 'postcss-loader',
                          options: {
                              ident: 'postcss',
                              plugins: [
                                  require('autoprefixer')({}),

                              ]
                          }
                      },

                  ]/*.concat(use)*/,
              },
          ],
      },
  };
};