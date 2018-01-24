module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[hash].[ext]'
                }
            }
        ]
    }
})

