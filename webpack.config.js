const path = require('path')

module.exports = (env) => ({
    entry: "./resources/js/main.js",
    watch: !!env.development,
    output:
        {
            path: path.resolve(__dirname, 'public'),
            filename: "bundle.js"
        }
    ,
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
})
