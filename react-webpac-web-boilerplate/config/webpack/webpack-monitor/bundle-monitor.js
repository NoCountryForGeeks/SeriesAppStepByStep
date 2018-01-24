const WebpackMonitor = require('webpack-monitor')

module.exports = ({ target, launch, port = 3000}) => ({
    plugins: [
        new WebpackMonitor({
            capture: true,
            target,
            launch,
            port
        })
    ]
})