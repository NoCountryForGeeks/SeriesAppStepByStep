const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ({ include, exclude, use }) => {
    const plugin = new ExtractTextPlugin({
        filename: './styles/app.[contenthash:8].css',
    });

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include,
                    exclude,
                    use: plugin.extract({
                        use,
                        fallback: 'style-loader',
                    }),
                },
            ],
        },
        plugins: [ plugin ],
    };
};