const express = require('express');
const chalk = require('chalk');
const app = express();
const port = 9680;
const localhost = 'localhost';
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevCompiler = require('./webpack.dev.config.js');
const path = require('path');
const compiler = webpack(webpackDevCompiler);

app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevCompiler.output.publicPath
}));
app.use(express.static(path.resolve(__dirname, 'app', 'images')))
app.listen(port, () => {
    console.log(`Localhost: ${chalk.green(`http://${localhost}:${port}`)}`);
    console.log(path.resolve(__dirname, 'app', 'images'))
})