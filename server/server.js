const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const fetch = require("node-fetch");

const app = express();
const config = require('../config/webpack.config.js');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000'));


app.get('/search', function (req, res) {
  // fetch('https://www.food2fork.com/api/get?key=a3aa0083a984cf4447b5b313af270582&rId=35382')
  // https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 

  console.log('GOT SEARCH REQUEST');
  const keyword = req.params.searchString.replace(/ /g, "%20");
  console.log(keyword);
  const URL = `https://www.food2fork.com/api/search?key=a3aa0083a984cf4447b5b313af270582&q=${keyword}&page=2`
  fetch(URL)
    .then(result => result.json())
    .then(json => res.json(json))
    .catch(error => console.log(error))
})