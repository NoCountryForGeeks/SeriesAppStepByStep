const merge = require('webpack-merge');
const { devServer, hotModuleLoader, cssLoader, sourceMap } = require('./webpack');
const PATHS = require('./paths')

module.exports = merge([
    {
        entry: {
            app: [PATHS.appFolder ]       
        }
    },
    devServer({ stats: 'errors-only', open: true }),
    hotModuleLoader(),
    sourceMap({ sourceMapType: 'cheap-module-eval-source-map' }),
    cssLoader()
]);