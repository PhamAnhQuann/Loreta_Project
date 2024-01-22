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

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevCompiler.output.publicPath,
    writeToDisk: false
}));
app.use(webpackHotMiddleware(compiler));

// app.use(express.static(path.resolve(__dirname, 'app', 'images')))
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
    console.log(`Localhost: ${chalk.green(`http://${localhost}:${port}`)}`);
    console.log(path.resolve(__dirname, 'app', 'images'))
})