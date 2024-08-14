
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');*/

const mode =  process.env.NODE_ENV || "development";

 // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: "./css/[name].css",
   // chunkFilename: "[id].css",
  });


exports.scss = ({ mode } = {}) => ({
    module: {
        rules: [{
            test: /\.scss$/,
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
               // "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
});