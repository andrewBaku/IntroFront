exports.javascriptLoader = ({ include, exclude } = {}) => ({
    module: {
        rules: [{
            test: /\.m?js$/,
            include,
            exclude,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }],
    },
});