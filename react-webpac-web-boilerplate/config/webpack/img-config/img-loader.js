module.exports = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'imgs/[name].[hash].[ext]'
                    }
                }
            }
        ]
    }
});
