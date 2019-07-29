import helpers from './helpers';
import './controller/main';

// Needed for Hot ModuleReplacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept()
}