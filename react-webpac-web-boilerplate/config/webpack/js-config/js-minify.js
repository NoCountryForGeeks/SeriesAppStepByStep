const webpack = require('webpack')

module.exports = ({ include, exclude} = {}) => ({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include,
            exclude,
            parallel: true,
            sourceMap: true
        })
    ]
})