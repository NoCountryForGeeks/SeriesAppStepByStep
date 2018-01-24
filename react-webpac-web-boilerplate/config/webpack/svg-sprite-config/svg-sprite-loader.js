const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = ({ spriteFilename, include, exclude } = {}) =>({
   
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename
                }
            }
        ]
    },
    plugins: [
        new SpriteLoaderPlugin()
    ]
});