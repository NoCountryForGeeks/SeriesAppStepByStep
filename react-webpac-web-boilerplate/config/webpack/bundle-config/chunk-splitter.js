const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

module.exports = chunks => ({
    plugins: chunks.map(chunk => {
        return new CommonsChunkPlugin(chunk);
    })
});