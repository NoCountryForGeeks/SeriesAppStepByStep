module.exports = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.scss$/,
                enforce: 'pre',
                loader: 'postcss-loader',
                options: {
                    plugins: () => ([
                        require('stylelint')()
                    ])
                }
            }
        ]
    }
});
