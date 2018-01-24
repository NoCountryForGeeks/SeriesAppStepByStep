const webpack = require('webpack');

module.exports = (configuration) => ({
    plugins: [
        new webpack.DefinePlugin(configuration),
    ]
})