import {
  webpack
} from 'webpack';
import {
  webpackDevMiddleware
} from 'webpack-dev-middleware';
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express(),
  DIST_DIR = path.join(__dirname, '../dist'),
  HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.listen(process.env.PORT || 3000, () => {});

app.get('/search', function (req, res) {
  // https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

  const keyword = req.query.searchString.replace(/ /g, '%20');
  const URL = `https://www.food2fork.com/api/search?key=a3aa0083a984cf4447b5b313af270582&q=${keyword}&page=2`;

  fetch(URL)
    .then(result => {
      return result.json();
    })
    .then(data => {
      res.send(data);
    })
    .catch(error => {});
});

app.get('/recipe', function (req, res) {
  const recipeId = req.query.recipeId;
  const URL = `https://www.food2fork.com/api/get?key=a3aa0083a984cf4447b5b313af270582&rId=${recipeId}`;
  fetch(URL)
    .then(result => {
      return result.json();
    })
    .then(data => {
      res.send(data);
    })
    .catch(error => {});
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE)
})