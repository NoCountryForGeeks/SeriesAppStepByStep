module.exports = ({host, port, stats, open} = {}) => {
    return {
        devServer: {
            host,
            port,
            stats,
            open,
            inline: true,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true,
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            watchOptions: {
                poll: true,
                ignored: [/node_modules/]
            }
        }
    }
}