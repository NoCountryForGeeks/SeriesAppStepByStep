const path = require('path');

module.exports = {
    appFolder: path.join(__dirname, '../app'),
    outputFolder: path.join(__dirname, '../build'),
    indexTemplate: path.join(__dirname, '../index.template.html'),
    nodeModules: path.join(__dirname, '../node_modules'),
    cleanerPaths: [
        path.join(__dirname, '../build'),
    ]
}