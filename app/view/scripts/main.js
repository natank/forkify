import '../styles/main.scss';

// include index.html in the bundle for hot reload
if (process.env.NODE_ENV === 'development') {
  var index = require('../index.pug');
}