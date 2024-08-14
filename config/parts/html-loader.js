exports.htmlLoader = () => ({
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'link:href']
                }
            }
        }, ],
    },
});