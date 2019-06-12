import '../styles/main.scss';
import num from './index';

// include index.html in the bundle for hot reload
if (process.env.NODE_ENV === 'development') {
    var index = require('../../index.pug');
  }

console.log(`Imported ${num} from index`);
