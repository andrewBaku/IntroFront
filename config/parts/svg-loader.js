exports.svgLoader = () => ({
    module: {
        rules: [{
                test: /\.(svg)$/,
                exclude: /fonts/,
                // dont want svg fonts from fonts folder to be included 
                use: [/*{
                        loader: 'svg-url-loader',
                        options: {
                            noquotes: true,
                        },
                    },*/
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/',
                            name: '[name].[ext]',
                        },
                    }
                ],
            },


            /*
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /images/,
                // dont want svg images from image folder to be included 
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name][hash].[ext]',
                    },
                }, ],
            }

            */
        ],
    },
});