//const mode = process.env.NODE_ENV || "development";

const util = require('util');
const path = require('path');


const HtmlWebpackPlugin = require("html-webpack-plugin");

const merge = require("webpack-merge");
const parts = require("./config/parts/");


// console.dir(parts);

const PATHS = {
  app: path.join(__dirname, "src"),
  dev: path.join(__dirname, "dist"),
  prod: path.join(__dirname, "prod"),
};


const commonConfig = merge(
    [{
            devtool: false,
            entry: {
                main: './src/js/index.js'
            },

            plugins: [
                new HtmlWebpackPlugin({
                    title: "Webpack demo",
                    template: 'src/index.html'
                }),
                new HtmlWebpackPlugin({
                    template: 'src/thank-you.html',
                    filename: 'thank-you.html',
                }),
            ],


        },


        parts.scss(),
        parts.fontsLoader(),
        /* 1 */
        parts.htmlLoader(),
        parts.svgLoader(),
        parts.javascriptLoader({
            include: PATHS.app,
            exclude: /(node_modules|bower_components)/,
        }),



    ]);

const developmentConfig = merge([

    {
        output: {
                filename: 'js/script.js',
                path: PATHS.dev
        }
    },

    parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),

   // parts.loadCSS(),
    parts.loadImages(),

    parts.extractCSS({
        use: ["css-loader"],
    }),

]);

const productionConfig = merge([
    {
        output: {
                filename: 'js/script.js',
                path: path.resolve(__dirname, 'prod')
        }
    },

    parts.extractCSS({
        use: ["css-loader"],
    }),

    
    /* 2 */
    parts.loadImages({
        options: {
            limit: 1024,// bas64 or copy to folder
            name: "[name].[ext]",
            outputPath:'./img/',
            publicPath:'./img/',
        },
    }),
    

]);

module.exports = (env, argv) => {
    let result = [];
    const mode = env.NODE_ENV || "development";

    //console.log("!!!!!!!!!!"+mode+"!!!!!!!!!!");

    if (mode === "production") {
        result = merge({ mode: mode }, commonConfig, productionConfig);
    } else {
        result = merge({ mode: mode }, commonConfig, developmentConfig);
    }

//    console.log("===============================================");
//    console.log(util.inspect(result, false, null, true /* enable colors */));
 //   console.log("===============================================");

  //  console.log("!!!!!!!!!!"+result.mode+"!!!!!!!!!!");

    return result;
};