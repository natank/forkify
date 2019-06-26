const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const config = require('../config/webpack.config.js');
const compiler = webpack(config);

app.use(express.static('../dist'))

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000'));

app.get('/search', function (req, res) {

  // https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

  const keyword = req.query.searchString.replace(/ /g, '%20');
  const URL = `https://www.food2fork.com/api/search?key=a3aa0083a984cf4447b5b313af270582&q=${keyword}&page=2`;

  console.log(`URL=${URL}`);
  fetch(URL)
    .then(result => {
      return result.json()
    })
    .then(data => {
      console.log(data);
      res.send(data)
    })
    .catch(error => console.log(error));
});

app.get('/recipe', function (req, res) {
  const recipeId = req.query.recipeId;
  fetch(`https://www.food2fork.com/api/get?key=a3aa0083a984cf4447b5b313af270582&rId=${recipeId}`)
    .then(result => {
      return result.json()
    })
    .then(data => {
      res.send(data)
    })
    .catch(error => console.log(`unable to fetch data: ${error}`))
})