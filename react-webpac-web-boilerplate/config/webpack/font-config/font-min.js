const FontminPlugin = require('fontmin-webpack')

module.exports = (glyphs = []) => ({
    plugins: [
        new FontminPlugin({
            autodetect: true,
            glyphs
        }) 
    ]
})