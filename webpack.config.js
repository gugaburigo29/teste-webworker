const path = require('path')

module.exports = {
    entry: "./resources/js/main.js",
    watch: true,
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
}
