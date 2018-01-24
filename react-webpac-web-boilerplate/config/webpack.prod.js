const merge = require('webpack-merge');
const PATHS = require('./paths');
const glob = require('glob');
const path = require('path');

const { 
    bundleMonitor,
    sourceMap, 
    imgMinify, 
    fontMin, 
    cssExtract, 
    cssAutoprefix, 
    cssMinify,
    chunkSplitter,
    enviromentVariable,
    jsMinify,
    cleaner
 } = require('./webpack');

module.exports = merge([
    {
        entry: {
            app: PATHS.appFolder       
        }
    },
    sourceMap({ sourceMapType: 'source-map' }),
    cleaner(PATHS.cleanerPaths, {
        root: path.resolve(__dirname , '/'),
    }),
    enviromentVariable({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    chunkSplitter([
        {
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource)
        }
    ]),
    jsMinify(),
    imgMinify(),
    fontMin(),
    cssExtract({ use: [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: 'rw3_[hash:base64:4]'
            }
        },
        cssAutoprefix(),
        'sass-loader'
    ]}),
    cssMinify({ paths: glob.sync(`${PATHS.appFolder}/**/*.js`) }),
    bundleMonitor({ target: '../monitor/myStatsStore.json', launch: true})
]);