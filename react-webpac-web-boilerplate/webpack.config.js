const merge = require('webpack-merge');
const commonConfiguration = require('./config/webpack.common');

module.exports = env => { 
    return merge(commonConfiguration, require(`./config/webpack.${env}`));
};