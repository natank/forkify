import '../styles/main.scss';
import './results.js';
import './shoppingList.js';


// include index.html in the bundle for hot reload
if (process.env.NODE_ENV === 'development') {
  var index = require('../index.pug');
}

var DOMResults = document.querySelector('.results');