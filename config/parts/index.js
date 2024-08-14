const merge = require("webpack-merge");
//=================
const devServer = require("./devServer.js");
const loadCSS = require("./css.js");
const scss = require("./scss.js");
const extractCss = require("./miniCss.js");
const loadImages = require("./images.js");
const htmlLoader = require("./html-loader.js");
const svgLoader = require("./svg-loader.js");
const fontsLoader = require("./fonts-loader.js");
const javascriptLoader = require("./javascript-loader");


//=================

 module.exports = merge([
 	devServer,
 	loadCSS,
 	scss,
      loadImages,
     htmlLoader,
     svgLoader,
     fontsLoader,
     javascriptLoader,
     extractCss,
 ]);
