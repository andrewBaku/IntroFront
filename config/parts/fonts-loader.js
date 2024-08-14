exports.fontsLoader = () => ({
    module: {
        rules: [            
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /img/,
                // dont want svg images from image folder to be included 
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './fonts/',
                        publicPath: './../fonts/',
                        name: '[name].[ext]',
                    },
                }, ],
            }

            
        ],
    },
});