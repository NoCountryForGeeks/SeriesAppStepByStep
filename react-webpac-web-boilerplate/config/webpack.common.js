const merge = require('webpack-merge');
const PATHS = require('./paths');
const { 
    htmlWebpackPlugin, 
    jsLoader, 
    imgLoader, 
    svgSpriteLoader,
    fontLoader,
    jsLinter,
    cssLinter
} = require('./webpack');


module.exports = merge([
    {
        output: {
            path: PATHS.outputFolder,
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },        
    },
    jsLinter(),
    cssLinter({ include: PATHS.appFolder }),
    jsLoader({ include: PATHS.appFolder, exclude: [/node_modules/] }),
    imgLoader({ exclude: /node_modules/ }),
    svgSpriteLoader({ spriteFilename: './svgSprite/images.svg' }),
    fontLoader(),
    htmlWebpackPlugin({ template: PATHS.indexTemplate }), 
]);
