const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (pathsToClean, cleanOptions) => ({
    plugins: [
        new CleanWebpackPlugin(
            pathsToClean,
            cleanOptions
        )
    ]
})