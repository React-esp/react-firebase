const webpack = require('webpack'),
        path = require('path'),
        entryPath = path.join(__dirname,'./src/index.jsx'),
        publicPath = path.join(__dirname, './public'),
        templatePath = path.join(__dirname,'./src/assets/index.html')
        HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    entry: [ entryPath ],
    output: {
        filename: 'app.js',
        path: publicPath,
        publicPath: '/'
    },
    module:{
        rules: [
            {
            test: /(\.js|.jsx)$/,
            exclude: /(node_modules)/,
            use: ['babel-loader']
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: templatePath
        })
    ]
}