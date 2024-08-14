let path = require('path');

exports.devServer = ({ host, port } = {}) => ({

    devServer: {
    	contentBase: path.join(__dirname, '../../dist'),
        // Display only errors to reduce the amount of output.
        stats: "errors-only",
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        open: true, // Open the page in browser
        overlay: true, // show errors in browser
    }
});