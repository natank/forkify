/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.dev.config.js":
/*!**************************************!*\
  !*** ./config/webpack.dev.config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar UglifyJsPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nvar OptimizeCSSAssetsPlugin = __webpack_require__(/*! optimize-css-assets-webpack-plugin */ \"optimize-css-assets-webpack-plugin\");\n\nvar SVGSpritemapPlugin = __webpack_require__(/*! svg-spritemap-webpack-plugin */ \"svg-spritemap-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './app/main.js']\n  },\n  output: {\n    filename: '[name].js',\n    path: path.join(__dirname, '../dist'),\n    publicPath: '/'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  optimization: {\n    minimizer: [new UglifyJsPlugin({\n      cache: true,\n      parallel: true,\n      sourceMap: true\n    }), new OptimizeCSSAssetsPlugin({})]\n  },\n  module: {\n    rules: [{\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader', 'postcss-loader']\n    }, {\n      test: /\\.scss$/,\n      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader' // compiles Sass to CSS, using Node Sass by default\n      ]\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader',\n        options: {\n          attrs: ['img:src'],\n          minimize: true\n        }\n      }]\n    }, {\n      test: /\\.(jpg|gif|png|svg)$/,\n      use: [{\n        loader: 'file-loader',\n        options: {\n          name: 'images/[name]-[hash:8].[ext]',\n          context: path.resolve(__dirname, './app/view/img/')\n        }\n      }]\n    }, {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/,\n      use: ['file-loader']\n    }, {\n      test: /\\.m?js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        loader: 'babel-loader'\n      }\n    }, {\n      test: /\\.pug$/,\n      use: ['pug-loader']\n    }, {\n      test: /\\.svg$/,\n      loader: 'svg-inline-loader?classPrefix'\n    }]\n  },\n  plugins: [new HtmlWebpackPlugin({\n    template: './app/view/index.pug',\n    filename: './index.html',\n    excludeChunks: ['server'],\n    inject: 'head'\n  }), new SVGSpritemapPlugin('app/view/img/svg/*.svg', {\n    output: {\n      filename: 'images/spritemap.svg'\n    }\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./config/webpack.dev.config.js?");

/***/ }),

/***/ "./server/server-dev.js":
/*!******************************!*\
  !*** ./server/server-dev.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/webpack.dev.config.js */ \"./config/webpack.dev.config.js\");\n/* harmony import */ var _config_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()(),\n    DIST_DIR = path__WEBPACK_IMPORTED_MODULE_6___default.a.join(__dirname, '../dist'),\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_6___default.a.join(DIST_DIR, 'index.html'),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_config_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_3___default.a);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n  publicPath: _config_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a[\"static\"](DIST_DIR));\napp.listen(process.env.PORT || 3000, function () {\n  return console.log(\"Example app listening on port 3000. NODE_ENV = \".concat(\"development\", \" DIST_DIR = \").concat(__dirname, \" HTML_FILE = \").concat(HTML_FILE));\n});\napp.get('/search', function (req, res) {\n  // https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2\n  var keyword = req.query.searchString.replace(/ /g, '%20');\n  var URL = \"https://www.food2fork.com/api/search?key=a3aa0083a984cf4447b5b313af270582&q=\".concat(keyword, \"&page=2\"); //console.log(`URL=${URL}`);\n\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(URL).then(function (result) {\n    return result.json();\n  }).then(function (data) {\n    //console.log(data);\n    res.send(data);\n  })[\"catch\"](function (error) {\n    return console.log(error);\n  });\n});\napp.get('/recipe', function (req, res) {\n  var recipeId = req.query.recipeId; //consoleconsole.log(`req.query: ${JSON.stringify(req.query)}`);\n\n  var URL = \"https://www.food2fork.com/api/get?key=a3aa0083a984cf4447b5b313af270582&rId=\".concat(recipeId); // console.log(`req.url: ${req.url}`);\n  // console.log(`url: ${URL}`);\n\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(URL).then(function (result) {\n    return result.json();\n  }).then(function (data) {\n    // console.log(`data: ${JSON.stringify(data)}`);\n    res.send(data);\n  })[\"catch\"](function (error) {\n    return console.log(\"unable to fetch data: \".concat(error));\n  });\n});\napp.get('/', function (req, res) {\n  res.sendFile(HTML_FILE);\n});\n\n//# sourceURL=webpack:///./server/server-dev.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "optimize-css-assets-webpack-plugin":
/*!*****************************************************!*\
  !*** external "optimize-css-assets-webpack-plugin" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"optimize-css-assets-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22optimize-css-assets-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "svg-spritemap-webpack-plugin":
/*!***********************************************!*\
  !*** external "svg-spritemap-webpack-plugin" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"svg-spritemap-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22svg-spritemap-webpack-plugin%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });