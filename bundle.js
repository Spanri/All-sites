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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/content.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src!./src/scss/content.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* Основная часть */\n#block-wrapper {\n  max-width: 2000px;\n  margin: 30px auto;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n/* Карточка */\n.item {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  min-width: 400px;\n  width: 40%;\n  margin: 30px 15px;\n  padding: 0;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(153, 153, 153, 0.479);\n  box-sizing: border-box;\n  color: #212424;\n  position: relative;\n  z-index: 3;\n}\n.item__header {\n  position: relative;\n  top: -15px;\n  left: 0;\n  z-index: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.item__link-wrapper, .item__index {\n  background: #30708d;\n  color: white;\n}\n.item__link-wrapper {\n  margin: 0 20px;\n  padding: 10px;\n  word-break: break-all;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 16px;\n}\n.item__link-wrapper:hover {\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #4099a9;\n}\n.item__index {\n  margin-left: 20px;\n  padding: 10px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.item__link, .item__code-link {\n  color: white;\n}\n.item__code-link {\n  word-break: break-all;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 16px;\n}\n.item__code-link-wrapper {\n  padding: 10px;\n  background: #74b382;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.item__code-link-wrapper:hover {\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: #4099a9;\n}\n.item__code {\n  margin-top: 25px;\n}\n.item__design-element {\n  background: #eaf4c7;\n  z-index: 2;\n}\n.item__description {\n  border-top: 2px #4699c0 solid;\n  padding: 20px;\n  width: calc(100% - 40px);\n  font-family: \"Lora\", serif;\n  font-size: 16px;\n  position: relative;\n  z-index: 3;\n}\n.item .block {\n  margin-bottom: 15px;\n}\n.item .block__label {\n  margin: 15px 6px 15px 0;\n}\n.item .block__value {\n  margin: 15px 0;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/header.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src!./src/scss/header.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* Градиент */\n#granim-canvas {\n  position: absolute;\n  width: 100%;\n  max-width: calc((100vw - 1350px) / 2 + 700px);\n  height: 300px;\n  z-index: -1;\n  background-size: cover;\n  top: -200px;\n  left: 0;\n}\n\n/* Вся верхняя часть */\n.top-block {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n/* Шапка в виде градиента и заголовка */\n.header {\n  border-top: 2px solid transparent;\n  margin: 30px 0 20px;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: calc((100vw - 1350px) / 2 + 670px);\n  font-family: \"Amatic SC\", cursive;\n  font-size: 40px;\n  text-align: center;\n}\n.header-wrapper {\n  width: 100%;\n}\n.header .header__text {\n  margin: 35px 15px 30px;\n  float: right;\n  width: 300px;\n  font-weight: bold;\n  text-align: right;\n  color: black;\n}\n\n/* Заметки от меня */\n.description {\n  font-family: \"Lora\", serif;\n}\n\n@media (max-width: 500px) {\n  #granim-canvas {\n    max-width: calc((100vw - 1350px) / 2 + 710px);\n  }\n\n  .header {\n    max-width: calc((100vw - 1350px) / 2 + 700px);\n  }\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Amatic+SC&display=swap);", ""]);
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.eot */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.eot"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.eot */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.woff2 */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff2"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.woff */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.ttf */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.ttf"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../fonts/roboto-slab-v9-cyrillic_latin-regular.svg */ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.svg") + "#RobotoSlab");
// Module
exports.push([module.i, "/* roboto-slab-regular - cyrillic_latin */\n@font-face {\n  font-family: \"Roboto Slab\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Slab Regular\"), local(\"RobotoSlab-Regular\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */\n}\nhtml {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0 20px;\n}\n\n::-moz-selection {\n  background: #4699c0;\n  color: white;\n}\n\n::selection {\n  background: #4699c0;\n  color: white;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_granim_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/granim.min.js */ "./src/js/granim.min.js");
/* harmony import */ var _js_granim_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_granim_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index.js */ "./src/js/index.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/header.scss */ "./src/scss/header.scss");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_content_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/content.scss */ "./src/scss/content.scss");
/* harmony import */ var _scss_content_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_content_scss__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.eot":
/*!*************************************************************!*\
  !*** ./src/fonts/roboto-slab-v9-cyrillic_latin-regular.eot ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-slab-v9-cyrillic_latin-regular.eot";

/***/ }),

/***/ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.svg":
/*!*************************************************************!*\
  !*** ./src/fonts/roboto-slab-v9-cyrillic_latin-regular.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-slab-v9-cyrillic_latin-regular.svg";

/***/ }),

/***/ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/roboto-slab-v9-cyrillic_latin-regular.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-slab-v9-cyrillic_latin-regular.ttf";

/***/ }),

/***/ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff":
/*!**************************************************************!*\
  !*** ./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-slab-v9-cyrillic_latin-regular.woff";

/***/ }),

/***/ "./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff2":
/*!***************************************************************!*\
  !*** ./src/fonts/roboto-slab-v9-cyrillic_latin-regular.woff2 ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-slab-v9-cyrillic_latin-regular.woff2";

/***/ }),

/***/ "./src/js/granim.min.js":
/*!******************************!*\
  !*** ./src/js/granim.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Granim v2.0.0 - https://sarcadass.github.io/granim.js */
!function t(e, i, s) {
  function o(r, a) {
    if (!i[r]) {
      if (!e[r]) {
        var h = "function" == typeof require && require;
        if (!a && h) return require(r, !0);
        if (n) return n(r, !0);
        var c = new Error("Cannot find module '" + r + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      var l = i[r] = {
        exports: {}
      };
      e[r][0].call(l.exports, function (t) {
        var i = e[r][1][t];
        return o(i ? i : t);
      }, l, l.exports, t, e, i, s);
    }

    return i[r].exports;
  }

  for (var n = "function" == typeof require && require, r = 0; r < s.length; r++) {
    o(s[r]);
  }

  return o;
}({
  1: [function (t, e, i) {
    "use strict";

    function s(t) {
      this.getElement(t.element), this.x1 = 0, this.y1 = 0, this.name = t.name || !1, this.elToSetClassOn = t.elToSetClassOn || "body", this.direction = t.direction || "diagonal", this.customDirection = t.customDirection || {}, this.validateInput("direction"), this.isPausedWhenNotInView = t.isPausedWhenNotInView || !1, this.states = t.states, this.stateTransitionSpeed = t.stateTransitionSpeed || 1e3, this.previousTimeStamp = null, this.progress = 0, this.isPaused = !1, this.isCleared = !1, this.isPausedBecauseNotInView = !1, this.context = this.canvas.getContext("2d"), this.channels = {}, this.channelsIndex = 0, this.activeState = t.defaultStateName || "default-state", this.isChangingState = !1, this.currentColors = [], this.currentColorsPos = [], this.activetransitionSpeed = null, this.eventPolyfill(), this.scrollDebounceThreshold = t.scrollDebounceThreshold || 300, this.scrollDebounceTimeout = null, this.isImgLoaded = !1, this.isCanvasInWindowView = !1, this.firstScrollInit = !0, this.animating = !1, this.gradientLength = this.states[this.activeState].gradients[0].length, t.image && t.image.source && (this.image = {
        source: t.image.source,
        position: t.image.position || ["center", "center"],
        stretchMode: t.image.stretchMode || !1,
        blendingMode: t.image.blendingMode || !1
      }), this.events = {
        start: new CustomEvent("granim:start"),
        end: new CustomEvent("granim:end"),
        gradientChange: function gradientChange(t) {
          return new CustomEvent("granim:gradientChange", {
            detail: {
              isLooping: t.isLooping,
              colorsFrom: t.colorsFrom,
              colorsTo: t.colorsTo,
              activeState: t.activeState
            },
            bubbles: !1,
            cancelable: !1
          });
        }
      }, this.callbacks = {
        onStart: "function" == typeof t.onStart && t.onStart,
        onGradientChange: "function" == typeof t.onGradientChange && t.onGradientChange,
        onEnd: "function" == typeof t.onEnd && t.onEnd
      }, this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.setColors(), this.image && (this.validateInput("image"), this.prepareImage()), this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this), this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this), this.onResize(), this.isPausedWhenNotInView ? this.onScroll() : this.image || (this.refreshColorsAndPos(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0), this.callbacks.onStart && this.callbacks.onStart(), this.canvas.dispatchEvent(this.events.start);
    }

    s.prototype.animateColors = t("./animateColors.js"), s.prototype.changeBlendingMode = t("./changeBlendingMode.js"), s.prototype.changeDirection = t("./changeDirection.js"), s.prototype.changeState = t("./changeState.js"), s.prototype.clear = t("./clear.js"), s.prototype.convertColorToRgba = t("./convertColorToRgba.js"), s.prototype.destroy = t("./destroy.js"), s.prototype.eventPolyfill = t("./eventPolyfill.js"), s.prototype.getColor = t("./getColor.js"), s.prototype.getColorDiff = t("./getColorDiff.js"), s.prototype.getColorPos = t("./getColorPos.js"), s.prototype.getColorPosDiff = t("./getColorPosDiff.js"), s.prototype.getCurrentColors = t("./getCurrentColors.js"), s.prototype.getCurrentColorsPos = t("./getCurrentColorsPos.js"), s.prototype.getDimensions = t("./getDimensions.js"), s.prototype.getElement = t("./getElement.js"), s.prototype.getLightness = t("./getLightness.js"), s.prototype.makeGradient = t("./makeGradient.js"), s.prototype.onResize = t("./onResize.js"), s.prototype.onScroll = t("./onScroll.js"), s.prototype.pause = t("./pause.js"), s.prototype.pauseWhenNotInView = t("./pauseWhenNotInView.js"), s.prototype.play = t("./play.js"), s.prototype.prepareImage = t("./prepareImage.js"), s.prototype.refreshColorsAndPos = t("./refreshColorsAndPos.js"), s.prototype.setColors = t("./setColors.js"), s.prototype.setDirection = t("./setDirection.js"), s.prototype.setSizeAttributes = t("./setSizeAttributes.js"), s.prototype.triggerError = t("./triggerError.js"), s.prototype.validateInput = t("./validateInput.js"), e.exports = s;
  }, {
    "./animateColors.js": 2,
    "./changeBlendingMode.js": 3,
    "./changeDirection.js": 4,
    "./changeState.js": 5,
    "./clear.js": 6,
    "./convertColorToRgba.js": 7,
    "./destroy.js": 8,
    "./eventPolyfill.js": 9,
    "./getColor.js": 10,
    "./getColorDiff.js": 11,
    "./getColorPos.js": 12,
    "./getColorPosDiff.js": 13,
    "./getCurrentColors.js": 14,
    "./getCurrentColorsPos.js": 15,
    "./getDimensions.js": 16,
    "./getElement.js": 17,
    "./getLightness.js": 18,
    "./makeGradient.js": 19,
    "./onResize.js": 20,
    "./onScroll.js": 21,
    "./pause.js": 22,
    "./pauseWhenNotInView.js": 23,
    "./play.js": 24,
    "./prepareImage.js": 25,
    "./refreshColorsAndPos.js": 26,
    "./setColors.js": 27,
    "./setDirection.js": 28,
    "./setSizeAttributes.js": 29,
    "./triggerError.js": 30,
    "./validateInput.js": 31
  }],
  2: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e,
          i,
          s,
          o = t - this.previousTimeStamp > 100,
          n = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
      (null === this.previousTimeStamp || o) && (this.previousTimeStamp = t), this.progress = this.progress + (t - this.previousTimeStamp), e = (this.progress / this.activetransitionSpeed * 100).toFixed(2), this.previousTimeStamp = t, this.refreshColorsAndPos(e), e < 100 ? this.animation = requestAnimationFrame(this.animateColors.bind(this)) : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || n ? (this.isChangingState && (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, this.isChangingState = !1), this.previousTimeStamp = null, this.progress = 0, this.channelsIndex++, i = !1, this.channelsIndex === this.states[this.activeState].gradients.length - 1 ? i = !0 : this.channelsIndex === this.states[this.activeState].gradients.length && (this.channelsIndex = 0), s = void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1] ? this.states[this.activeState].gradients[0] : this.states[this.activeState].gradients[this.channelsIndex + 1], this.setColors(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onGradientChange && this.callbacks.onGradientChange({
        isLooping: i,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: s,
        activeState: this.activeState
      }), this.canvas.dispatchEvent(this.events.gradientChange({
        isLooping: i,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: s,
        activeState: this.activeState
      }))) : (cancelAnimationFrame(this.animation), this.callbacks.onEnd && this.callbacks.onEnd(), this.canvas.dispatchEvent(new CustomEvent("granim:end")));
    };
  }, {}],
  3: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.context.globalCompositeOperation = this.image.blendingMode = t, this.validateInput("blendingMode"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  4: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.direction = t, this.validateInput("direction"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  5: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = this;
      this.activeState !== t && (this.isPaused || (this.isPaused = !0, this.pause()), this.channelsIndex = -1, this.activetransitionSpeed = this.stateTransitionSpeed, this.activeColorsDiff = [], this.activeColorsPosDiff = [], this.activeColors = this.getCurrentColors(), this.activeColorsPos = this.getCurrentColorsPos(), this.progress = 0, this.previousTimeStamp = null, this.isChangingState = !0, this.states[t].gradients[0].forEach(function (t, i, s) {
        var o = e.convertColorToRgba(e.getColor(t)),
            n = e.getColorPos(t, i),
            r = e.getColorDiff(e.activeColors[i], o),
            a = e.getColorPosDiff(e.activeColorsPos[i], n);
        e.activeColorsDiff.push(r), e.activeColorsPosDiff.push(a);
      }), this.activeState = t, this.play());
    };
  }, {}],
  6: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.isPaused ? this.isPaused = !1 : cancelAnimationFrame(this.animation), this.isCleared = !0, this.context.clearRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  7: [function (t, e, i) {
    "use strict";

    function s(t) {
      var e = Object.keys(h),
          i = 0;

      for (i; i < e.length; i++) {
        if (a = h[e[i]].exec(t)) return e[i];
      }

      return !1;
    }

    function o(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      t = t.replace(e, function (t, e, i, s) {
        return e + e + i + i + s + s;
      });
      var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return i ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), 1] : null;
    }

    function n(t, e, i) {
      return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }

    function r(t, e, i, s) {
      var o, r, a, h, c;
      return 0 === e ? o = r = a = i : (h = i < .5 ? i * (1 + e) : i + e - i * e, c = 2 * i - h, o = n(c, h, t + 1 / 3), r = n(c, h, t), a = n(c, h, t - 1 / 3)), [Math.round(255 * o), Math.round(255 * r), Math.round(255 * a), s];
    }

    var a,
        h = {
      hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
      rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
      hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
      hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
    };

    e.exports = function (t) {
      switch (s(t)) {
        default:
          this.triggerError("colorType");

        case "hexa":
          return o(t);

        case "rgba":
          return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10), parseFloat(a[4])];

        case "rgb":
          return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10), 1];

        case "hsla":
          return r(parseInt(a[1], 10) / 360, parseInt(a[2], 10) / 100, parseInt(a[3], 10) / 100, parseFloat(a[4]));

        case "hsl":
          return r(parseInt(a[1], 10) / 360, parseInt(a[2], 10) / 100, parseInt(a[3], 10) / 100, 1);
      }
    };
  }, {}],
  8: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.onResize("removeListeners"), this.onScroll("removeListeners"), this.clear();
    };
  }, {}],
  9: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      function t(t, e) {
        e = e || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
      }

      "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t);
    };
  }, {}],
  10: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "string" == typeof t ? t : "object" == _typeof(t) && t.color ? t.color : void this.triggerError("gradient.color");
    };
  }, {}],
  11: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      var i = 0,
          s = [];

      for (i; i < 4; i++) {
        s.push(e[i] - t[i]);
      }

      return s;
    };
  }, {}],
  12: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      return "object" == _typeof(t) && t.pos ? t.pos : parseFloat(e ? (1 / (this.gradientLength - 1) * e).toFixed(2) : 0);
    };
  }, {}],
  13: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      return e - t;
    };
  }, {}],
  14: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i = [];

      for (t = 0; t < this.currentColors.length; t++) {
        for (i.push([]), e = 0; e < 4; e++) {
          i[t].push(this.currentColors[t][e]);
        }
      }

      return i;
    };
  }, {}],
  15: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e = [];

      for (t = 0; t < this.currentColorsPos.length; t++) {
        e.push(this.currentColorsPos[t]);
      }

      return e;
    };
  }, {}],
  16: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.x1 = this.canvas.offsetWidth, this.y1 = this.canvas.offsetHeight;
    };
  }, {}],
  17: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      if (t instanceof HTMLCanvasElement) this.canvas = t;else {
        if ("string" != typeof t) throw new Error("The element you used is neither a String, nor a HTMLCanvasElement");
        this.canvas = document.querySelector(t);
      }
      if (!this.canvas) throw new Error("`" + t + "` could not be found in the DOM");
    };
  }, {}],
  18: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i = this.getCurrentColors(),
          s = null,
          o = i.map(function (t) {
        return Math.max(t[0], t[1], t[2]);
      });

      for (e = 0; e < o.length; e++) {
        s = null === s ? o[e] : s + o[e], e === o.length - 1 && (t = Math.round(s / (e + 1)));
      }

      return t >= 128 ? "light" : "dark";
    };
  }, {}],
  19: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t = this.setDirection(),
          e = document.querySelector(this.elToSetClassOn).classList,
          i = 0;

      for (this.context.clearRect(0, 0, this.x1, this.y1), this.image && this.context.drawImage(this.imageNode, this.imagePosition.x, this.imagePosition.y, this.imagePosition.width, this.imagePosition.height), i; i < this.currentColors.length; i++) {
        t.addColorStop(this.currentColorsPos[i], "rgba(" + this.currentColors[i][0] + ", " + this.currentColors[i][1] + ", " + this.currentColors[i][2] + ", " + this.currentColors[i][3] + ")");
      }

      this.name && ("light" === this.getLightness() ? (e.remove(this.name + "-dark"), e.add(this.name + "-light")) : (e.remove(this.name + "-light"), e.add(this.name + "-dark"))), this.context.fillStyle = t, this.context.fillRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  20: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "removeListeners" === t ? void window.removeEventListener("resize", this.setSizeAttributesNameSpace) : void window.addEventListener("resize", this.setSizeAttributesNameSpace);
    };
  }, {}],
  21: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "removeListeners" === t ? void window.removeEventListener("scroll", this.pauseWhenNotInViewNameSpace) : (window.addEventListener("scroll", this.pauseWhenNotInViewNameSpace), void this.pauseWhenNotInViewNameSpace());
    };
  }, {}],
  22: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "isPausedBecauseNotInView" === t;
      this.isCleared || (e || (this.isPaused = !0), cancelAnimationFrame(this.animation), this.animating = !1);
    };
  }, {}],
  23: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t = this;
      this.scrollDebounceTimeout && clearTimeout(this.scrollDebounceTimeout), this.scrollDebounceTimeout = setTimeout(function () {
        var e = t.canvas.getBoundingClientRect();

        if (t.isCanvasInWindowView = !(e.bottom < 0 || e.right < 0 || e.left > window.innerWidth || e.top > window.innerHeight), t.isCanvasInWindowView) {
          if (!t.isPaused || t.firstScrollInit) {
            if (t.image && !t.isImgLoaded) return;
            t.isPausedBecauseNotInView = !1, t.play("isPlayedBecauseInView"), t.firstScrollInit = !1;
          }
        } else !t.image && t.firstScrollInit && (t.refreshColorsAndPos(), t.firstScrollInit = !1), t.isPaused || t.isPausedBecauseNotInView || (t.isPausedBecauseNotInView = !0, t.pause("isPausedBecauseNotInView"));
      }, this.scrollDebounceThreshold);
    };
  }, {}],
  24: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "isPlayedBecauseInView" === t;
      e || (this.isPaused = !1), this.isCleared = !1, this.animating || (this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0);
    };
  }, {}],
  25: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      function t() {
        function t(t) {
          var i,
              s = e[t + "1"],
              o = e["x" === t ? "imgOriginalWidth" : "imgOriginalHeight"],
              n = "x" === t ? e.image.position[0] : e.image.position[1];

          switch (n) {
            case "center":
              i = o > s ? -(o - s) / 2 : (s - o) / 2, e.imagePosition[t] = i, e.imagePosition["x" === t ? "width" : "height"] = o;
              break;

            case "top":
              e.imagePosition.y = 0, e.imagePosition.height = o;
              break;

            case "bottom":
              e.imagePosition.y = s - o, e.imagePosition.height = o;
              break;

            case "right":
              e.imagePosition.x = s - o, e.imagePosition.width = o;
              break;

            case "left":
              e.imagePosition.x = 0, e.imagePosition.width = o;
          }

          if (e.image.stretchMode) switch (n = "x" === t ? e.image.stretchMode[0] : e.image.stretchMode[1]) {
            case "none":
              break;

            case "stretch":
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
              break;

            case "stretch-if-bigger":
              if (o < s) break;
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
              break;

            case "stretch-if-smaller":
              if (o > s) break;
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
          }
        }

        var i, s;

        for (i = 0; i < 2; i++) {
          s = i ? "y" : "x", t(s);
        }
      }

      var e = this;
      return this.imagePosition || (this.imagePosition = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }), this.image.blendingMode && (this.context.globalCompositeOperation = this.image.blendingMode), this.imageNode ? void t() : (this.imageNode = new Image(), this.imageNode.onerror = function () {
        throw new Error("Granim: The image source is invalid.");
      }, this.imageNode.onload = function () {
        e.imgOriginalWidth = e.imageNode.width, e.imgOriginalHeight = e.imageNode.height, t(), e.refreshColorsAndPos(), e.isPausedWhenNotInView && !e.isCanvasInWindowView || (e.animation = requestAnimationFrame(e.animateColors.bind(e))), e.isImgLoaded = !0;
      }, void (this.imageNode.src = this.image.source));
    };
  }, {}],
  26: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e,
          i,
          s,
          o,
          n = this;

      for (s = 0; s < this.activeColors.length; s++) {
        for (o = 0; o < 4; o++) {
          e = n.activeColors[s][o] + (3 !== o ? Math.ceil(n.activeColorsDiff[s][o] / 100 * t) : Math.round(n.activeColorsDiff[s][o] / 100 * t * 100) / 100), e <= 255 && e >= 0 && (n.currentColors[s][o] = e);
        }

        i = parseFloat((n.activeColorsPos[s] + n.activeColorsPosDiff[s] / 100 * t).toFixed(4)), i <= 1 && i >= 0 && (n.currentColorsPos[s] = i);
      }

      this.makeGradient();
    };
  }, {}],
  27: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i,
          s,
          o = this;
      return this.channels[this.activeState] || (this.channels[this.activeState] = []), void 0 !== this.channels[this.activeState][this.channelsIndex] ? (this.activeColors = this.channels[this.activeState][this.channelsIndex].colors, this.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff, this.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos, void (this.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff)) : (this.channels[this.activeState].push([{}]), this.channels[this.activeState][this.channelsIndex].colors = [], this.channels[this.activeState][this.channelsIndex].colorsDiff = [], this.channels[this.activeState][this.channelsIndex].colorsPos = [], this.channels[this.activeState][this.channelsIndex].colorsPosDiff = [], this.activeColors = [], this.activeColorsDiff = [], this.activeColorsPos = [], this.activeColorsPosDiff = [], this.states[this.activeState].gradients[this.channelsIndex].forEach(function (n, r) {
        var a = o.getColorPos(n, r),
            n = o.getColor(n),
            h = o.convertColorToRgba(n),
            c = o.channels[o.activeState];
        c[o.channelsIndex].colors.push(h), o.activeColors.push(h), c[o.channelsIndex].colorsPos.push(a), o.activeColorsPos.push(a), o.isCurrentColorsSet || (o.currentColors.push(o.convertColorToRgba(n)), o.currentColorsPos.push(a)), o.channelsIndex === o.states[o.activeState].gradients.length - 1 ? (t = o.getColorDiff(c[o.channelsIndex].colors[r], c[0].colors[r]), e = o.getColorPosDiff(c[o.channelsIndex].colorsPos[r], c[0].colorsPos[r])) : (i = o.convertColorToRgba(o.getColor(o.states[o.activeState].gradients[o.channelsIndex + 1][r])), s = o.getColorPos(o.states[o.activeState].gradients[o.channelsIndex + 1][r], r), t = o.getColorDiff(c[o.channelsIndex].colors[r], i), e = o.getColorPosDiff(c[o.channelsIndex].colorsPos[r], s)), c[o.channelsIndex].colorsDiff.push(t), o.activeColorsDiff.push(t), c[o.channelsIndex].colorsPosDiff.push(e), o.activeColorsPosDiff.push(e);
      }), this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, void (this.isCurrentColorsSet = !0));
    };
  }, {}],
  28: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      return t.indexOf("%") > -1 ? e / 100 * parseInt(t.split("%")[0], 10) : parseInt(t.split("px")[0], 10);
    }

    e.exports = function () {
      var t = this.context;

      switch (this.direction) {
        case "diagonal":
          return t.createLinearGradient(0, 0, this.x1, this.y1);

        case "left-right":
          return t.createLinearGradient(0, 0, this.x1, 0);

        case "top-bottom":
          return t.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);

        case "radial":
          return t.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);

        case "custom":
          return t.createLinearGradient(s(this.customDirection.x0, this.x1), s(this.customDirection.y0, this.y1), s(this.customDirection.x1, this.x1), s(this.customDirection.y1, this.y1));
      }
    };
  }, {}],
  29: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.image && this.prepareImage(), this.refreshColorsAndPos();
    };
  }, {}],
  30: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "https://sarcadass.github.io/granim.js/api.html";
      throw new Error('Granim: Input error on "' + t + '" option.\nCheck the API ' + e + ".");
    };
  }, {}],
  31: [function (t, e, i) {
    "use strict";

    function s(t) {
      for (var e, i = !0, s = 0; i && s < t.length;) {
        if (e = t[s], "string" != typeof e) i = !1;else {
          var o = null,
              n = null;
          e.indexOf("px") !== -1 && (n = "px"), e.indexOf("%") !== -1 && (n = "%"), o = e.split(n).filter(function (t) {
            return t.length > 0;
          }), (!n || o.length > 2 || !o[0] || o[1] || !/^-?\d+\.?\d*$/.test(o[0])) && (i = !1);
        }
        s++;
      }

      return i;
    }

    e.exports = function (t) {
      var e = ["left", "center", "right"],
          i = ["top", "center", "bottom"],
          o = ["none", "stretch", "stretch-if-smaller", "stretch-if-bigger"],
          n = ["multiply", "screen", "normal", "overlay", "darken", "lighten", "lighter", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
          r = ["diagonal", "left-right", "top-bottom", "radial", "custom"];

      switch (t) {
        case "image":
          Array.isArray(this.image.position) && 2 === this.image.position.length && e.indexOf(this.image.position[0]) !== -1 && i.indexOf(this.image.position[1]) !== -1 || this.triggerError("image.position"), this.image.stretchMode && (Array.isArray(this.image.stretchMode) && 2 === this.image.stretchMode.length && o.indexOf(this.image.stretchMode[0]) !== -1 && o.indexOf(this.image.stretchMode[1]) !== -1 || this.triggerError("image.stretchMode"));
          break;

        case "blendingMode":
          n.indexOf(this.image.blendingMode) === -1 && (this.clear(), this.triggerError("blendingMode"));
          break;

        case "direction":
          r.indexOf(this.direction) === -1 ? this.triggerError("direction") : "custom" === this.direction && (s([this.customDirection.x0, this.customDirection.x1, this.customDirection.y0, this.customDirection.y1]) || this.triggerError("customDirection"));
      }
    };
  }, {}],
  32: [function (t, e, i) {
    window.Granim = t("./lib/Granim.js");
  }, {
    "./lib/Granim.js": 1
  }]
}, {}, [32]);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var granimInstance = new Granim({
  element: '#granim-canvas',
  name: 'granim',
  opacity: [1, 1],
  states: {
    "default-state": {
      gradients: [['#ffa2a2', '#fff9a2'], ['#4699c0', '#97c74b']]
    }
  }
});
var wrapper = document.getElementById("block-wrapper");
var items = [{
  link: 'https://spanri.gitlab.io/westb/',
  year: 2019,
  technologies: 'Vue.js',
  layout: 'дали макеты дизайна, адаптивный, кроссбраузерный (IE11+)',
  descriprtion: 'Сайт банка, только верстка. Вход и аутентификация пройдут при любых значениях (но минимальная валидация в регистрации все равно есть).<br><br>После входа/регистрации есть кнопки Онлайн-банк/Переводы, там прикольная анимация и еще в Переводах анимация переключения 1/2/3 неплохая! <br><br>Примечание: в гитлабе если обновить страницу не по корню, выдаст ошибку (то есть с vue-router не работает).'
}, {
  link: 'https://infallible-swartz-576d6c.netlify.com',
  year: 2019,
  technologies: 'Vue.js',
  layout: 'макет не мой, адаптивный, кроссбраузерный (IE11+)',
  descriprtion: 'Тестовое задание по верстке. (На нетлифай иногда страница не загружается, а через несколько минут загружается, как я поняла, оно выходит из сна)',
  code: 'https://github.com/Spanri/card-payment-page'
}, {
  link: 'https://spanri.github.io',
  year: 2019,
  technologies: 'нативный js, webpack',
  layout: 'свой дизайн, адаптивный, кроссбраузерный (IE11+)',
  descriprtion: 'Страничка, которую вы видите перед собой.',
  code: 'https://github.com/Spanri/Spanri.github.io'
}, {
  link: 'https://plastic-windows.herokuapp.com',
  year: 2019,
  technologies: 'Vue.js, Flask',
  layout: 'переделанный дизайн шаблона, адаптивный, не особо кроссбраузерный',
  descriprtion: 'Интернет-магазин пластиковых окон, который не закончен.',
  code: 'https://github.com/Spanri/windows'
}, {
  link: 'http://edms-mtuci.herokuapp.com',
  year: 2019,
  technologies: 'Vue.js, Django (DRF)',
  layout: 'свой дизайн, не адаптивный, не кроссбраузерный',
  descriprtion: "\n      \u0414\u0438\u043F\u043B\u043E\u043C, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430. \u041D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0432\u0441\u0451 \u043F\u043B\u043E\u0445\u043E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443\n      \u043D\u0430 \u0444\u0440\u043E\u043D\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.</p>\n      <p>\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 (\u043B\u043E\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u043E\u0432\u0435\u0441\u0442\u0438!):<br>\n      \u041B\u043E\u0433\u0438\u043D: opachki9v@mail.ru<br>\n      \u041F\u0430\u0440\u043E\u043B\u044C: CT8R3EAE",
  code: 'https://github.com/Spanri/CRM-diplom'
}, {
  link: 'https://spanri.github.io/bml/',
  year: '2019 (идея из 2017)',
  technologies: 'Nuxt.js',
  layout: 'свой дизайн, адаптивный, кроссбраузерный (IE11+)',
  descriprtion: 'Просто страничка я сама не знаю о чём.',
  code: 'https://github.com/Spanri/bml'
}, {
  link: 'https://spanri.github.io/react-landing/',
  year: 2019,
  technologies: 'React',
  layout: 'свой дизайн, адаптивный, не особо кроссбраузерный',
  descriprtion: 'Страничка для друга.',
  code: 'https://github.com/Spanri/react-landing'
}, {
  link: 'https://spanri.github.io/design/',
  year: 2018,
  technologies: 'без фреймворков и сборщиков',
  layout: 'свой дизайн, адаптивный, не кроссбраузерный',
  descriprtion: 'Страничка о том, почему мой брат - неудачник, но там почти ничего нет.',
  code: 'https://github.com/Spanri/design'
}, {
  link: 'http://pstype.herokuapp.com',
  year: 2018,
  technologies: 'Vue.js + Typescript, Node.js',
  layout: 'свой дизайн, не адаптивный, не кроссбраузерный',
  descriprtion: "\n      \u0421\u0435\u0440\u0432\u0435\u0440 \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u0440\u0443\u0433\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \n      \u043F\u0441\u0438\u0445\u043E\u0442\u0438\u043F\u0430 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F. \u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430, \n      \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u0443\u044E \u043D\u0430 Vue.js.<br><br>\u0422\u043E, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0431\u0435\u0437 TypeScript, \u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0435\u0449\u0435 \u043D\u0435 \u0434\u043E\u0434\u0435\u043B\u0430\u043D\u0430.</p>\n      <p>\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 (\u043B\u043E\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u043E\u0432\u0435\u0441\u0442\u0438!):<br>\n      \u041B\u043E\u0433\u0438\u043D: admin0<br>\n      \u041F\u0430\u0440\u043E\u043B\u044C: hardpassword",
  code: 'https://github.com/Spanri/PS-type'
}, {
  link: 'https://spanri.github.io/first-site/www/index.html',
  year: 2017,
  technologies: 'jquery, сборщик gulp',
  layout: 'свой дизайн, удивительно, но адаптивный, не кроссбраузерный',
  descriprtion: 'Самый первый мой сайт. Там всё плохо, но ностальгично.',
  code: 'https://github.com/Spanri/first-site'
}, {
  link: 'https://spanri.github.io/first-site/www/pers/pers.html',
  year: 2017,
  technologies: 'jquery, без сборщика',
  layout: 'свой дизайн, адаптивный, не кроссбраузерный',
  descriprtion: 'Страничка о моих персонажах (из рисования). Картинки для сайта так и не дорисовала.',
  code: 'https://github.com/Spanri/first-site'
}];
var html = '';

for (var i in items) {
  var codeLink = "<div class=\"item__code-link-wrapper\">\n      <a class=\"item__code-link\"\n        href=\"".concat(items[i].code, "\"\n        target=\"_blank\"\n      >\n        ").concat(items[i].code, "\n      </a>\n    </div>\n  ");
  html += "<div class=\"item\">\n    <div class=\"item__header\">\n      <div class=\"item__index\">".concat(+i + 1, "</div>\n      <div class=\"item__link-wrapper\">\n        <a class=\"item__link\" href=\"").concat(items[i].link, "\" target=\"_blank\">\n          ").concat(items[i].link, "\n        </a>\n      </div>\n    </div>\n    \n\n    <div class=\"item__description\">\n      <div class=\"item__design-element\">\n        <div class=\"block\">\n          <span class=\"block__label\">\u0413\u043E\u0434: </span>\n          <span class=\"block__value\">").concat(items[i].year, "</span>\n        </div>\n        <div class=\"block\">\n          <span class=\"block__label\">\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: </span>\n          <span class=\"block__value\">").concat(items[i].technologies, "</span>\n        </div>\n        <div class=\"block\">\n          <span class=\"block__label\">\u0412\u0435\u0440\u0441\u0442\u043A\u0430: </span>\n          <span class=\"block__value\">").concat(items[i].layout, "</span>\n        </div>\n      </div>\n\n      <div class=\"block\">\n        <span class=\"block__label\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: </span>\n        <span class=\"block__value\">").concat(items[i].descriprtion, "</span>\n      </div>\n      <div class=\"block item__code\">\n        <span class=\"block__label\">\u041A\u043E\u0434: </span>\n        <span class=\"block__value\">").concat(items[i].code ? codeLink : 'недоступен', "</span>\n      </div>\n    </div>\n  </div>");
}

wrapper.innerHTML = html;

/***/ }),

/***/ "./src/scss/content.scss":
/*!*******************************!*\
  !*** ./src/scss/content.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-sass-loader/src!./content.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/content.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-sass-loader/src!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/header.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-sass-loader/src!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-sass-loader/src/index.js!./src/scss/index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY29udGVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyYW5pbS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NvbnRlbnQuc2Nzcz9hNjgxIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2hlYWRlci5zY3NzP2YxZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2Nzcz85MDY5Il0sIm5hbWVzIjpbInQiLCJlIiwiaSIsInMiLCJvIiwiciIsImEiLCJoIiwicmVxdWlyZSIsIm4iLCJjIiwiRXJyb3IiLCJjb2RlIiwibCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiZ2V0RWxlbWVudCIsImVsZW1lbnQiLCJ4MSIsInkxIiwibmFtZSIsImVsVG9TZXRDbGFzc09uIiwiZGlyZWN0aW9uIiwiY3VzdG9tRGlyZWN0aW9uIiwidmFsaWRhdGVJbnB1dCIsImlzUGF1c2VkV2hlbk5vdEluVmlldyIsInN0YXRlcyIsInN0YXRlVHJhbnNpdGlvblNwZWVkIiwicHJldmlvdXNUaW1lU3RhbXAiLCJwcm9ncmVzcyIsImlzUGF1c2VkIiwiaXNDbGVhcmVkIiwiaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3IiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJjaGFubmVscyIsImNoYW5uZWxzSW5kZXgiLCJhY3RpdmVTdGF0ZSIsImRlZmF1bHRTdGF0ZU5hbWUiLCJpc0NoYW5naW5nU3RhdGUiLCJjdXJyZW50Q29sb3JzIiwiY3VycmVudENvbG9yc1BvcyIsImFjdGl2ZXRyYW5zaXRpb25TcGVlZCIsImV2ZW50UG9seWZpbGwiLCJzY3JvbGxEZWJvdW5jZVRocmVzaG9sZCIsInNjcm9sbERlYm91bmNlVGltZW91dCIsImlzSW1nTG9hZGVkIiwiaXNDYW52YXNJbldpbmRvd1ZpZXciLCJmaXJzdFNjcm9sbEluaXQiLCJhbmltYXRpbmciLCJncmFkaWVudExlbmd0aCIsImdyYWRpZW50cyIsImltYWdlIiwic291cmNlIiwicG9zaXRpb24iLCJzdHJldGNoTW9kZSIsImJsZW5kaW5nTW9kZSIsImV2ZW50cyIsInN0YXJ0IiwiQ3VzdG9tRXZlbnQiLCJlbmQiLCJncmFkaWVudENoYW5nZSIsImRldGFpbCIsImlzTG9vcGluZyIsImNvbG9yc0Zyb20iLCJjb2xvcnNUbyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2FsbGJhY2tzIiwib25TdGFydCIsIm9uR3JhZGllbnRDaGFuZ2UiLCJvbkVuZCIsImdldERpbWVuc2lvbnMiLCJzZXRBdHRyaWJ1dGUiLCJzZXRDb2xvcnMiLCJwcmVwYXJlSW1hZ2UiLCJwYXVzZVdoZW5Ob3RJblZpZXdOYW1lU3BhY2UiLCJwYXVzZVdoZW5Ob3RJblZpZXciLCJiaW5kIiwic2V0U2l6ZUF0dHJpYnV0ZXNOYW1lU3BhY2UiLCJzZXRTaXplQXR0cmlidXRlcyIsIm9uUmVzaXplIiwib25TY3JvbGwiLCJyZWZyZXNoQ29sb3JzQW5kUG9zIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZUNvbG9ycyIsImRpc3BhdGNoRXZlbnQiLCJwcm90b3R5cGUiLCJjaGFuZ2VCbGVuZGluZ01vZGUiLCJjaGFuZ2VEaXJlY3Rpb24iLCJjaGFuZ2VTdGF0ZSIsImNsZWFyIiwiY29udmVydENvbG9yVG9SZ2JhIiwiZGVzdHJveSIsImdldENvbG9yIiwiZ2V0Q29sb3JEaWZmIiwiZ2V0Q29sb3JQb3MiLCJnZXRDb2xvclBvc0RpZmYiLCJnZXRDdXJyZW50Q29sb3JzIiwiZ2V0Q3VycmVudENvbG9yc1BvcyIsImdldExpZ2h0bmVzcyIsIm1ha2VHcmFkaWVudCIsInBhdXNlIiwicGxheSIsInNldERpcmVjdGlvbiIsInRyaWdnZXJFcnJvciIsImxvb3AiLCJ0b0ZpeGVkIiwidHJhbnNpdGlvblNwZWVkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhY3RpdmVDb2xvcnNEaWZmIiwiYWN0aXZlQ29sb3JzUG9zRGlmZiIsImFjdGl2ZUNvbG9ycyIsImFjdGl2ZUNvbG9yc1BvcyIsImZvckVhY2giLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImV4ZWMiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJNYXRoIiwicm91bmQiLCJoZXhhIiwicmdiYSIsInJnYiIsImhzbGEiLCJoc2wiLCJwYXJzZUZsb2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIndpbmRvdyIsIkV2ZW50IiwiY29sb3IiLCJwb3MiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIkhUTUxDYW52YXNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm1hcCIsIm1heCIsImNsYXNzTGlzdCIsImRyYXdJbWFnZSIsImltYWdlTm9kZSIsImltYWdlUG9zaXRpb24iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkQ29sb3JTdG9wIiwicmVtb3ZlIiwiYWRkIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJpbm5lcldpZHRoIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJvbmxvYWQiLCJpbWdPcmlnaW5hbFdpZHRoIiwiaW1nT3JpZ2luYWxIZWlnaHQiLCJzcmMiLCJjZWlsIiwiY29sb3JzIiwiY29sb3JzRGlmZiIsImNvbG9yc1BvcyIsImNvbG9yc1Bvc0RpZmYiLCJpc0N1cnJlbnRDb2xvcnNTZXQiLCJpbmRleE9mIiwic3BsaXQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwieDAiLCJ5MCIsImZpbHRlciIsInRlc3QiLCJBcnJheSIsImlzQXJyYXkiLCJHcmFuaW0iLCJncmFuaW1JbnN0YW5jZSIsIm9wYWNpdHkiLCJ3cmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpdGVtcyIsImxpbmsiLCJ5ZWFyIiwidGVjaG5vbG9naWVzIiwibGF5b3V0IiwiZGVzY3JpcHJ0aW9uIiwiaHRtbCIsImNvZGVMaW5rIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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YyxtQkFBTyxDQUFDLDJOQUFnSDs7QUFFdEk7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBLGNBQWMsbUJBQU8sQ0FBQyx5TkFBK0c7O0FBRXJJO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQSxjQUFjLG1CQUFPLENBQUMsdU5BQThHOztBQUVwSTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyog0J7RgdC90L7QstC90LDRjyDRh9Cw0YHRgtGMICovXFxuI2Jsb2NrLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAyMDAwcHg7XFxuICBtYXJnaW46IDMwcHggYXV0bztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLyog0JrQsNGA0YLQvtGH0LrQsCAqL1xcbi5pdGVtIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiAzMHB4IDE1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDc5KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzIxMjQyNDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5pdGVtX19oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaXRlbV9fbGluay13cmFwcGVyLCAuaXRlbV9faW5kZXgge1xcbiAgYmFja2dyb3VuZDogIzMwNzA4ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLml0ZW1fX2xpbmstd3JhcHBlciB7XFxuICBtYXJnaW46IDAgMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5pdGVtX19saW5rLXdyYXBwZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6ICM0MDk5YTk7XFxufVxcbi5pdGVtX19pbmRleCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaXRlbV9fbGluaywgLml0ZW1fX2NvZGUtbGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5pdGVtX19jb2RlLWxpbmsge1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uaXRlbV9fY29kZS1saW5rLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICM3NGIzODI7XFxuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4uaXRlbV9fY29kZS1saW5rLXdyYXBwZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQ6ICM0MDk5YTk7XFxufVxcbi5pdGVtX19jb2RlIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbi5pdGVtX19kZXNpZ24tZWxlbWVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZWFmNGM3O1xcbiAgei1pbmRleDogMjtcXG59XFxuLml0ZW1fX2Rlc2NyaXB0aW9uIHtcXG4gIGJvcmRlci10b3A6IDJweCAjNDY5OWMwIHNvbGlkO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuLml0ZW0gLmJsb2NrIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5pdGVtIC5ibG9ja19fbGFiZWwge1xcbiAgbWFyZ2luOiAxNXB4IDZweCAxNXB4IDA7XFxufVxcbi5pdGVtIC5ibG9ja19fdmFsdWUge1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxufVwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyog0JPRgNCw0LTQuNC10L3RgiAqL1xcbiNncmFuaW0tY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBjYWxjKCgxMDB2dyAtIDEzNTBweCkgLyAyICsgNzAwcHgpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHRvcDogLTIwMHB4O1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLyog0JLRgdGPINCy0LXRgNGF0L3Rj9GPINGH0LDRgdGC0YwgKi9cXG4udG9wLWJsb2NrIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4vKiDQqNCw0L/QutCwINCyINCy0LjQtNC1INCz0YDQsNC00LjQtdC90YLQsCDQuCDQt9Cw0LPQvtC70L7QstC60LAgKi9cXG4uaGVhZGVyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMzBweCAwIDIwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWF4LXdpZHRoOiBjYWxjKCgxMDB2dyAtIDEzNTBweCkgLyAyICsgNjcwcHgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbWF0aWMgU0NcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oZWFkZXIgLmhlYWRlcl9fdGV4dCB7XFxuICBtYXJnaW46IDM1cHggMTVweCAzMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyog0JfQsNC80LXRgtC60Lgg0L7RgiDQvNC10L3RjyAqL1xcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAjZ3JhbmltLWNhbnZhcyB7XFxuICAgIG1heC13aWR0aDogY2FsYygoMTAwdncgLSAxMzUwcHgpIC8gMiArIDcxMHB4KTtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTM1MHB4KSAvIDIgKyA3MDBweCk7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIuZW90XCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIuZW90XCIpICsgXCI/I2llZml4XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci53b2ZmMlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci50dGZcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci5zdmdcIikgKyBcIiNSb2JvdG9TbGFiXCIpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiByb2JvdG8tc2xhYi1yZWd1bGFyIC0gY3lyaWxsaWNfbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiBsb2NhbChcXFwiUm9ib3RvIFNsYWIgUmVndWxhclxcXCIpLCBsb2NhbChcXFwiUm9ib3RvU2xhYi1SZWd1bGFyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICAvKiBMZWdhY3kgaU9TICovXFxufVxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjNDY5OWMwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjNDY5OWMwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCAnLi9qcy9ncmFuaW0ubWluLmpzJztcbmltcG9ydCAnLi9qcy9pbmRleC5qcyc7XG5cbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvaGVhZGVyLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvY29udGVudC5zY3NzJzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmYyXCI7IiwiLyohIEdyYW5pbSB2Mi4wLjAgLSBodHRwczovL3NhcmNhZGFzcy5naXRodWIuaW8vZ3JhbmltLmpzICovXG4hZnVuY3Rpb24gdChlLGkscyl7ZnVuY3Rpb24gbyhyLGEpe2lmKCFpW3JdKXtpZighZVtyXSl7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighYSYmaClyZXR1cm4gaChyLCEwKTtpZihuKXJldHVybiBuKHIsITApO3ZhciBjPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcitcIidcIik7dGhyb3cgYy5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGN9dmFyIGw9aVtyXT17ZXhwb3J0czp7fSx9O2Vbcl1bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGk9ZVtyXVsxXVt0XTtyZXR1cm4gbyhpP2k6dCl9LGwsbC5leHBvcnRzLHQsZSxpLHMpfXJldHVybiBpW3JdLmV4cG9ydHN9Zm9yKHZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUscj0wO3I8cy5sZW5ndGg7cisrKW8oc1tyXSk7cmV0dXJuIG99KHsxOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyh0KXt0aGlzLmdldEVsZW1lbnQodC5lbGVtZW50KSx0aGlzLngxPTAsdGhpcy55MT0wLHRoaXMubmFtZT10Lm5hbWV8fCExLHRoaXMuZWxUb1NldENsYXNzT249dC5lbFRvU2V0Q2xhc3NPbnx8XCJib2R5XCIsdGhpcy5kaXJlY3Rpb249dC5kaXJlY3Rpb258fFwiZGlhZ29uYWxcIix0aGlzLmN1c3RvbURpcmVjdGlvbj10LmN1c3RvbURpcmVjdGlvbnx8e30sdGhpcy52YWxpZGF0ZUlucHV0KFwiZGlyZWN0aW9uXCIpLHRoaXMuaXNQYXVzZWRXaGVuTm90SW5WaWV3PXQuaXNQYXVzZWRXaGVuTm90SW5WaWV3fHwhMSx0aGlzLnN0YXRlcz10LnN0YXRlcyx0aGlzLnN0YXRlVHJhbnNpdGlvblNwZWVkPXQuc3RhdGVUcmFuc2l0aW9uU3BlZWR8fDFlMyx0aGlzLnByZXZpb3VzVGltZVN0YW1wPW51bGwsdGhpcy5wcm9ncmVzcz0wLHRoaXMuaXNQYXVzZWQ9ITEsdGhpcy5pc0NsZWFyZWQ9ITEsdGhpcy5pc1BhdXNlZEJlY2F1c2VOb3RJblZpZXc9ITEsdGhpcy5jb250ZXh0PXRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSx0aGlzLmNoYW5uZWxzPXt9LHRoaXMuY2hhbm5lbHNJbmRleD0wLHRoaXMuYWN0aXZlU3RhdGU9dC5kZWZhdWx0U3RhdGVOYW1lfHxcImRlZmF1bHQtc3RhdGVcIix0aGlzLmlzQ2hhbmdpbmdTdGF0ZT0hMSx0aGlzLmN1cnJlbnRDb2xvcnM9W10sdGhpcy5jdXJyZW50Q29sb3JzUG9zPVtdLHRoaXMuYWN0aXZldHJhbnNpdGlvblNwZWVkPW51bGwsdGhpcy5ldmVudFBvbHlmaWxsKCksdGhpcy5zY3JvbGxEZWJvdW5jZVRocmVzaG9sZD10LnNjcm9sbERlYm91bmNlVGhyZXNob2xkfHwzMDAsdGhpcy5zY3JvbGxEZWJvdW5jZVRpbWVvdXQ9bnVsbCx0aGlzLmlzSW1nTG9hZGVkPSExLHRoaXMuaXNDYW52YXNJbldpbmRvd1ZpZXc9ITEsdGhpcy5maXJzdFNjcm9sbEluaXQ9ITAsdGhpcy5hbmltYXRpbmc9ITEsdGhpcy5ncmFkaWVudExlbmd0aD10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbMF0ubGVuZ3RoLHQuaW1hZ2UmJnQuaW1hZ2Uuc291cmNlJiYodGhpcy5pbWFnZT17c291cmNlOnQuaW1hZ2Uuc291cmNlLHBvc2l0aW9uOnQuaW1hZ2UucG9zaXRpb258fFtcImNlbnRlclwiLFwiY2VudGVyXCIsXSxzdHJldGNoTW9kZTp0LmltYWdlLnN0cmV0Y2hNb2RlfHwhMSxibGVuZGluZ01vZGU6dC5pbWFnZS5ibGVuZGluZ01vZGV8fCExLH0pLHRoaXMuZXZlbnRzPXtzdGFydDpuZXcgQ3VzdG9tRXZlbnQoXCJncmFuaW06c3RhcnRcIiksZW5kOm5ldyBDdXN0b21FdmVudChcImdyYW5pbTplbmRcIiksZ3JhZGllbnRDaGFuZ2U6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBDdXN0b21FdmVudChcImdyYW5pbTpncmFkaWVudENoYW5nZVwiLHtkZXRhaWw6e2lzTG9vcGluZzp0LmlzTG9vcGluZyxjb2xvcnNGcm9tOnQuY29sb3JzRnJvbSxjb2xvcnNUbzp0LmNvbG9yc1RvLGFjdGl2ZVN0YXRlOnQuYWN0aXZlU3RhdGUsfSxidWJibGVzOiExLGNhbmNlbGFibGU6ITEsfSl9LH0sdGhpcy5jYWxsYmFja3M9e29uU3RhcnQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vblN0YXJ0JiZ0Lm9uU3RhcnQsb25HcmFkaWVudENoYW5nZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uR3JhZGllbnRDaGFuZ2UmJnQub25HcmFkaWVudENoYW5nZSxvbkVuZDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uRW5kJiZ0Lm9uRW5kLH0sdGhpcy5nZXREaW1lbnNpb25zKCksdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIix0aGlzLngxKSx0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIix0aGlzLnkxKSx0aGlzLnNldENvbG9ycygpLHRoaXMuaW1hZ2UmJih0aGlzLnZhbGlkYXRlSW5wdXQoXCJpbWFnZVwiKSx0aGlzLnByZXBhcmVJbWFnZSgpKSx0aGlzLnBhdXNlV2hlbk5vdEluVmlld05hbWVTcGFjZT10aGlzLnBhdXNlV2hlbk5vdEluVmlldy5iaW5kKHRoaXMpLHRoaXMuc2V0U2l6ZUF0dHJpYnV0ZXNOYW1lU3BhY2U9dGhpcy5zZXRTaXplQXR0cmlidXRlcy5iaW5kKHRoaXMpLHRoaXMub25SZXNpemUoKSx0aGlzLmlzUGF1c2VkV2hlbk5vdEluVmlldz90aGlzLm9uU2Nyb2xsKCk6dGhpcy5pbWFnZXx8KHRoaXMucmVmcmVzaENvbG9yc0FuZFBvcygpLHRoaXMuYW5pbWF0aW9uPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVDb2xvcnMuYmluZCh0aGlzKSksdGhpcy5hbmltYXRpbmc9ITApLHRoaXMuY2FsbGJhY2tzLm9uU3RhcnQmJnRoaXMuY2FsbGJhY2tzLm9uU3RhcnQoKSx0aGlzLmNhbnZhcy5kaXNwYXRjaEV2ZW50KHRoaXMuZXZlbnRzLnN0YXJ0KX1zLnByb3RvdHlwZS5hbmltYXRlQ29sb3JzPXQoXCIuL2FuaW1hdGVDb2xvcnMuanNcIikscy5wcm90b3R5cGUuY2hhbmdlQmxlbmRpbmdNb2RlPXQoXCIuL2NoYW5nZUJsZW5kaW5nTW9kZS5qc1wiKSxzLnByb3RvdHlwZS5jaGFuZ2VEaXJlY3Rpb249dChcIi4vY2hhbmdlRGlyZWN0aW9uLmpzXCIpLHMucHJvdG90eXBlLmNoYW5nZVN0YXRlPXQoXCIuL2NoYW5nZVN0YXRlLmpzXCIpLHMucHJvdG90eXBlLmNsZWFyPXQoXCIuL2NsZWFyLmpzXCIpLHMucHJvdG90eXBlLmNvbnZlcnRDb2xvclRvUmdiYT10KFwiLi9jb252ZXJ0Q29sb3JUb1JnYmEuanNcIikscy5wcm90b3R5cGUuZGVzdHJveT10KFwiLi9kZXN0cm95LmpzXCIpLHMucHJvdG90eXBlLmV2ZW50UG9seWZpbGw9dChcIi4vZXZlbnRQb2x5ZmlsbC5qc1wiKSxzLnByb3RvdHlwZS5nZXRDb2xvcj10KFwiLi9nZXRDb2xvci5qc1wiKSxzLnByb3RvdHlwZS5nZXRDb2xvckRpZmY9dChcIi4vZ2V0Q29sb3JEaWZmLmpzXCIpLHMucHJvdG90eXBlLmdldENvbG9yUG9zPXQoXCIuL2dldENvbG9yUG9zLmpzXCIpLHMucHJvdG90eXBlLmdldENvbG9yUG9zRGlmZj10KFwiLi9nZXRDb2xvclBvc0RpZmYuanNcIikscy5wcm90b3R5cGUuZ2V0Q3VycmVudENvbG9ycz10KFwiLi9nZXRDdXJyZW50Q29sb3JzLmpzXCIpLHMucHJvdG90eXBlLmdldEN1cnJlbnRDb2xvcnNQb3M9dChcIi4vZ2V0Q3VycmVudENvbG9yc1Bvcy5qc1wiKSxzLnByb3RvdHlwZS5nZXREaW1lbnNpb25zPXQoXCIuL2dldERpbWVuc2lvbnMuanNcIikscy5wcm90b3R5cGUuZ2V0RWxlbWVudD10KFwiLi9nZXRFbGVtZW50LmpzXCIpLHMucHJvdG90eXBlLmdldExpZ2h0bmVzcz10KFwiLi9nZXRMaWdodG5lc3MuanNcIikscy5wcm90b3R5cGUubWFrZUdyYWRpZW50PXQoXCIuL21ha2VHcmFkaWVudC5qc1wiKSxzLnByb3RvdHlwZS5vblJlc2l6ZT10KFwiLi9vblJlc2l6ZS5qc1wiKSxzLnByb3RvdHlwZS5vblNjcm9sbD10KFwiLi9vblNjcm9sbC5qc1wiKSxzLnByb3RvdHlwZS5wYXVzZT10KFwiLi9wYXVzZS5qc1wiKSxzLnByb3RvdHlwZS5wYXVzZVdoZW5Ob3RJblZpZXc9dChcIi4vcGF1c2VXaGVuTm90SW5WaWV3LmpzXCIpLHMucHJvdG90eXBlLnBsYXk9dChcIi4vcGxheS5qc1wiKSxzLnByb3RvdHlwZS5wcmVwYXJlSW1hZ2U9dChcIi4vcHJlcGFyZUltYWdlLmpzXCIpLHMucHJvdG90eXBlLnJlZnJlc2hDb2xvcnNBbmRQb3M9dChcIi4vcmVmcmVzaENvbG9yc0FuZFBvcy5qc1wiKSxzLnByb3RvdHlwZS5zZXRDb2xvcnM9dChcIi4vc2V0Q29sb3JzLmpzXCIpLHMucHJvdG90eXBlLnNldERpcmVjdGlvbj10KFwiLi9zZXREaXJlY3Rpb24uanNcIikscy5wcm90b3R5cGUuc2V0U2l6ZUF0dHJpYnV0ZXM9dChcIi4vc2V0U2l6ZUF0dHJpYnV0ZXMuanNcIikscy5wcm90b3R5cGUudHJpZ2dlckVycm9yPXQoXCIuL3RyaWdnZXJFcnJvci5qc1wiKSxzLnByb3RvdHlwZS52YWxpZGF0ZUlucHV0PXQoXCIuL3ZhbGlkYXRlSW5wdXQuanNcIiksZS5leHBvcnRzPXN9LHtcIi4vYW5pbWF0ZUNvbG9ycy5qc1wiOjIsXCIuL2NoYW5nZUJsZW5kaW5nTW9kZS5qc1wiOjMsXCIuL2NoYW5nZURpcmVjdGlvbi5qc1wiOjQsXCIuL2NoYW5nZVN0YXRlLmpzXCI6NSxcIi4vY2xlYXIuanNcIjo2LFwiLi9jb252ZXJ0Q29sb3JUb1JnYmEuanNcIjo3LFwiLi9kZXN0cm95LmpzXCI6OCxcIi4vZXZlbnRQb2x5ZmlsbC5qc1wiOjksXCIuL2dldENvbG9yLmpzXCI6MTAsXCIuL2dldENvbG9yRGlmZi5qc1wiOjExLFwiLi9nZXRDb2xvclBvcy5qc1wiOjEyLFwiLi9nZXRDb2xvclBvc0RpZmYuanNcIjoxMyxcIi4vZ2V0Q3VycmVudENvbG9ycy5qc1wiOjE0LFwiLi9nZXRDdXJyZW50Q29sb3JzUG9zLmpzXCI6MTUsXCIuL2dldERpbWVuc2lvbnMuanNcIjoxNixcIi4vZ2V0RWxlbWVudC5qc1wiOjE3LFwiLi9nZXRMaWdodG5lc3MuanNcIjoxOCxcIi4vbWFrZUdyYWRpZW50LmpzXCI6MTksXCIuL29uUmVzaXplLmpzXCI6MjAsXCIuL29uU2Nyb2xsLmpzXCI6MjEsXCIuL3BhdXNlLmpzXCI6MjIsXCIuL3BhdXNlV2hlbk5vdEluVmlldy5qc1wiOjIzLFwiLi9wbGF5LmpzXCI6MjQsXCIuL3ByZXBhcmVJbWFnZS5qc1wiOjI1LFwiLi9yZWZyZXNoQ29sb3JzQW5kUG9zLmpzXCI6MjYsXCIuL3NldENvbG9ycy5qc1wiOjI3LFwiLi9zZXREaXJlY3Rpb24uanNcIjoyOCxcIi4vc2V0U2l6ZUF0dHJpYnV0ZXMuanNcIjoyOSxcIi4vdHJpZ2dlckVycm9yLmpzXCI6MzAsXCIuL3ZhbGlkYXRlSW5wdXQuanNcIjozMSx9LF0sMjpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxpLHMsbz10LXRoaXMucHJldmlvdXNUaW1lU3RhbXA+MTAwLG49dm9pZCAwPT09dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0ubG9vcHx8dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0ubG9vcDsobnVsbD09PXRoaXMucHJldmlvdXNUaW1lU3RhbXB8fG8pJiYodGhpcy5wcmV2aW91c1RpbWVTdGFtcD10KSx0aGlzLnByb2dyZXNzPXRoaXMucHJvZ3Jlc3MrKHQtdGhpcy5wcmV2aW91c1RpbWVTdGFtcCksZT0odGhpcy5wcm9ncmVzcy90aGlzLmFjdGl2ZXRyYW5zaXRpb25TcGVlZCoxMDApLnRvRml4ZWQoMiksdGhpcy5wcmV2aW91c1RpbWVTdGFtcD10LHRoaXMucmVmcmVzaENvbG9yc0FuZFBvcyhlKSxlPDEwMD90aGlzLmFuaW1hdGlvbj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlQ29sb3JzLmJpbmQodGhpcykpOnRoaXMuY2hhbm5lbHNJbmRleDx0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHMubGVuZ3RoLTJ8fG4/KHRoaXMuaXNDaGFuZ2luZ1N0YXRlJiYodGhpcy5hY3RpdmV0cmFuc2l0aW9uU3BlZWQ9dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0udHJhbnNpdGlvblNwZWVkfHw1ZTMsdGhpcy5pc0NoYW5naW5nU3RhdGU9ITEpLHRoaXMucHJldmlvdXNUaW1lU3RhbXA9bnVsbCx0aGlzLnByb2dyZXNzPTAsdGhpcy5jaGFubmVsc0luZGV4KyssaT0hMSx0aGlzLmNoYW5uZWxzSW5kZXg9PT10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHMubGVuZ3RoLTE/aT0hMDp0aGlzLmNoYW5uZWxzSW5kZXg9PT10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHMubGVuZ3RoJiYodGhpcy5jaGFubmVsc0luZGV4PTApLHM9dm9pZCAwPT09dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0uZ3JhZGllbnRzW3RoaXMuY2hhbm5lbHNJbmRleCsxXT90aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbMF06dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0uZ3JhZGllbnRzW3RoaXMuY2hhbm5lbHNJbmRleCsxXSx0aGlzLnNldENvbG9ycygpLHRoaXMuYW5pbWF0aW9uPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVDb2xvcnMuYmluZCh0aGlzKSksdGhpcy5jYWxsYmFja3Mub25HcmFkaWVudENoYW5nZSYmdGhpcy5jYWxsYmFja3Mub25HcmFkaWVudENoYW5nZSh7aXNMb29waW5nOmksY29sb3JzRnJvbTp0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbdGhpcy5jaGFubmVsc0luZGV4XSxjb2xvcnNUbzpzLGFjdGl2ZVN0YXRlOnRoaXMuYWN0aXZlU3RhdGUsfSksdGhpcy5jYW52YXMuZGlzcGF0Y2hFdmVudCh0aGlzLmV2ZW50cy5ncmFkaWVudENoYW5nZSh7aXNMb29waW5nOmksY29sb3JzRnJvbTp0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbdGhpcy5jaGFubmVsc0luZGV4XSxjb2xvcnNUbzpzLGFjdGl2ZVN0YXRlOnRoaXMuYWN0aXZlU3RhdGUsfSkpKTooY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pLHRoaXMuY2FsbGJhY2tzLm9uRW5kJiZ0aGlzLmNhbGxiYWNrcy5vbkVuZCgpLHRoaXMuY2FudmFzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZ3JhbmltOmVuZFwiKSkpfX0se30sXSwzOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3RoaXMuY29udGV4dC5jbGVhclJlY3QoMCwwLHRoaXMueDEsdGhpcy55MSksdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj10aGlzLmltYWdlLmJsZW5kaW5nTW9kZT10LHRoaXMudmFsaWRhdGVJbnB1dChcImJsZW5kaW5nTW9kZVwiKSx0aGlzLmlzUGF1c2VkJiZ0aGlzLnJlZnJlc2hDb2xvcnNBbmRQb3MoKX19LHt9LF0sNDpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCx0aGlzLngxLHRoaXMueTEpLHRoaXMuZGlyZWN0aW9uPXQsdGhpcy52YWxpZGF0ZUlucHV0KFwiZGlyZWN0aW9uXCIpLHRoaXMuaXNQYXVzZWQmJnRoaXMucmVmcmVzaENvbG9yc0FuZFBvcygpfX0se30sXSw1OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5hY3RpdmVTdGF0ZSE9PXQmJih0aGlzLmlzUGF1c2VkfHwodGhpcy5pc1BhdXNlZD0hMCx0aGlzLnBhdXNlKCkpLHRoaXMuY2hhbm5lbHNJbmRleD0tMSx0aGlzLmFjdGl2ZXRyYW5zaXRpb25TcGVlZD10aGlzLnN0YXRlVHJhbnNpdGlvblNwZWVkLHRoaXMuYWN0aXZlQ29sb3JzRGlmZj1bXSx0aGlzLmFjdGl2ZUNvbG9yc1Bvc0RpZmY9W10sdGhpcy5hY3RpdmVDb2xvcnM9dGhpcy5nZXRDdXJyZW50Q29sb3JzKCksdGhpcy5hY3RpdmVDb2xvcnNQb3M9dGhpcy5nZXRDdXJyZW50Q29sb3JzUG9zKCksdGhpcy5wcm9ncmVzcz0wLHRoaXMucHJldmlvdXNUaW1lU3RhbXA9bnVsbCx0aGlzLmlzQ2hhbmdpbmdTdGF0ZT0hMCx0aGlzLnN0YXRlc1t0XS5ncmFkaWVudHNbMF0uZm9yRWFjaChmdW5jdGlvbih0LGkscyl7dmFyIG89ZS5jb252ZXJ0Q29sb3JUb1JnYmEoZS5nZXRDb2xvcih0KSksbj1lLmdldENvbG9yUG9zKHQsaSkscj1lLmdldENvbG9yRGlmZihlLmFjdGl2ZUNvbG9yc1tpXSxvKSxhPWUuZ2V0Q29sb3JQb3NEaWZmKGUuYWN0aXZlQ29sb3JzUG9zW2ldLG4pO2UuYWN0aXZlQ29sb3JzRGlmZi5wdXNoKHIpLGUuYWN0aXZlQ29sb3JzUG9zRGlmZi5wdXNoKGEpfSksdGhpcy5hY3RpdmVTdGF0ZT10LHRoaXMucGxheSgpKX19LHt9LF0sNjpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuaXNQYXVzZWQ/dGhpcy5pc1BhdXNlZD0hMTpjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbiksdGhpcy5pc0NsZWFyZWQ9ITAsdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy54MSx0aGlzLnkxKX19LHt9LF0sNzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCl7dmFyIGU9T2JqZWN0LmtleXMoaCksaT0wO2ZvcihpO2k8ZS5sZW5ndGg7aSsrKWlmKGE9aFtlW2ldXS5leGVjKHQpKXJldHVybiBlW2ldO3JldHVybiExfWZ1bmN0aW9uIG8odCl7dmFyIGU9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTt0PXQucmVwbGFjZShlLGZ1bmN0aW9uKHQsZSxpLHMpe3JldHVybiBlK2UraStpK3Mrc30pO3ZhciBpPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyh0KTtyZXR1cm4gaT9bcGFyc2VJbnQoaVsxXSwxNikscGFyc2VJbnQoaVsyXSwxNikscGFyc2VJbnQoaVszXSwxNiksMSxdOm51bGx9ZnVuY3Rpb24gbih0LGUsaSl7cmV0dXJuIGk8MCYmKGkrPTEpLGk+MSYmKGktPTEpLGk8MS82P3QrNiooZS10KSppOmk8LjU/ZTppPDIvMz90KyhlLXQpKigyLzMtaSkqNjp0fWZ1bmN0aW9uIHIodCxlLGkscyl7dmFyIG8scixhLGgsYztyZXR1cm4gMD09PWU/bz1yPWE9aTooaD1pPC41P2kqKDErZSk6aStlLWkqZSxjPTIqaS1oLG89bihjLGgsdCsxLzMpLHI9bihjLGgsdCksYT1uKGMsaCx0LTEvMykpLFtNYXRoLnJvdW5kKDI1NSpvKSxNYXRoLnJvdW5kKDI1NSpyKSxNYXRoLnJvdW5kKDI1NSphKSxzLF19dmFyIGEsaD17aGV4YTovXiMoPzpbMC05YS1mQS1GXXszfSl7MSwyfSQvLHJnYmE6L15yZ2JhXFwoKFxcZHsxLDN9KSwgPyhcXGR7MSwzfSksID8oXFxkezEsM30pLCA/KC4/XFxkezEsM30pXFwpJC8scmdiOi9ecmdiXFwoKFxcZHsxLDN9KSwgPyhcXGR7MSwzfSksID8oXFxkezEsM30pXFwpJC8saHNsYTovXmhzbGFcXCgoXFxkezEsM30pLCA/KFxcZHsxLDN9KSUsID8oXFxkezEsM30pJSwgPyguP1xcZHsxLDN9KVxcKSQvLGhzbDovXmhzbFxcKChcXGR7MSwzfSksID8oXFxkezEsM30pJSwgPyhcXGR7MSwzfSklXFwpJC8sfTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7c3dpdGNoKHModCkpe2RlZmF1bHQ6dGhpcy50cmlnZ2VyRXJyb3IoXCJjb2xvclR5cGVcIik7Y2FzZVwiaGV4YVwiOnJldHVybiBvKHQpO2Nhc2VcInJnYmFcIjpyZXR1cm5bcGFyc2VJbnQoYVsxXSwxMCkscGFyc2VJbnQoYVsyXSwxMCkscGFyc2VJbnQoYVszXSwxMCkscGFyc2VGbG9hdChhWzRdKSxdO2Nhc2VcInJnYlwiOnJldHVybltwYXJzZUludChhWzFdLDEwKSxwYXJzZUludChhWzJdLDEwKSxwYXJzZUludChhWzNdLDEwKSwxLF07Y2FzZVwiaHNsYVwiOnJldHVybiByKHBhcnNlSW50KGFbMV0sMTApLzM2MCxwYXJzZUludChhWzJdLDEwKS8xMDAscGFyc2VJbnQoYVszXSwxMCkvMTAwLHBhcnNlRmxvYXQoYVs0XSkpO2Nhc2VcImhzbFwiOnJldHVybiByKHBhcnNlSW50KGFbMV0sMTApLzM2MCxwYXJzZUludChhWzJdLDEwKS8xMDAscGFyc2VJbnQoYVszXSwxMCkvMTAwLDEpfX19LHt9LF0sODpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMub25SZXNpemUoXCJyZW1vdmVMaXN0ZW5lcnNcIiksdGhpcy5vblNjcm9sbChcInJlbW92ZUxpc3RlbmVyc1wiKSx0aGlzLmNsZWFyKCl9fSx7fSxdLDk6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7ZT1lfHx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDAsfTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBpLmluaXRDdXN0b21FdmVudCh0LGUuYnViYmxlcyxlLmNhbmNlbGFibGUsZS5kZXRhaWwpLGl9XCJmdW5jdGlvblwiIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiYodC5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9dCl9fSx7fSxdLDEwOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6XCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29sb3I/dC5jb2xvcjp2b2lkIHRoaXMudHJpZ2dlckVycm9yKFwiZ3JhZGllbnQuY29sb3JcIil9fSx7fSxdLDExOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGk9MCxzPVtdO2ZvcihpO2k8NDtpKyspcy5wdXNoKGVbaV0tdFtpXSk7cmV0dXJuIHN9fSx7fSxdLDEyOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJnQucG9zP3QucG9zOnBhcnNlRmxvYXQoZT8oMS8odGhpcy5ncmFkaWVudExlbmd0aC0xKSplKS50b0ZpeGVkKDIpOjApfX0se30sXSwxMzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBlLXR9fSx7fSxdLDE0OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQsZSxpPVtdO2Zvcih0PTA7dDx0aGlzLmN1cnJlbnRDb2xvcnMubGVuZ3RoO3QrKylmb3IoaS5wdXNoKFtdKSxlPTA7ZTw0O2UrKylpW3RdLnB1c2godGhpcy5jdXJyZW50Q29sb3JzW3RdW2VdKTtyZXR1cm4gaX19LHt9LF0sMTU6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxlPVtdO2Zvcih0PTA7dDx0aGlzLmN1cnJlbnRDb2xvcnNQb3MubGVuZ3RoO3QrKyllLnB1c2godGhpcy5jdXJyZW50Q29sb3JzUG9zW3RdKTtyZXR1cm4gZX19LHt9LF0sMTY6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLngxPXRoaXMuY2FudmFzLm9mZnNldFdpZHRoLHRoaXMueTE9dGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0fX0se30sXSwxNzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpdGhpcy5jYW52YXM9dDtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcihcIlRoZSBlbGVtZW50IHlvdSB1c2VkIGlzIG5laXRoZXIgYSBTdHJpbmcsIG5vciBhIEhUTUxDYW52YXNFbGVtZW50XCIpO3RoaXMuY2FudmFzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9aWYoIXRoaXMuY2FudmFzKXRocm93IG5ldyBFcnJvcihcImBcIit0K1wiYCBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIERPTVwiKX19LHt9LF0sMTg6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxlLGk9dGhpcy5nZXRDdXJyZW50Q29sb3JzKCkscz1udWxsLG89aS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgubWF4KHRbMF0sdFsxXSx0WzJdKX0pO2ZvcihlPTA7ZTxvLmxlbmd0aDtlKyspcz1udWxsPT09cz9vW2VdOnMrb1tlXSxlPT09by5sZW5ndGgtMSYmKHQ9TWF0aC5yb3VuZChzLyhlKzEpKSk7cmV0dXJuIHQ+PTEyOD9cImxpZ2h0XCI6XCJkYXJrXCJ9fSx7fSxdLDE5OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zZXREaXJlY3Rpb24oKSxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5lbFRvU2V0Q2xhc3NPbikuY2xhc3NMaXN0LGk9MDtmb3IodGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy54MSx0aGlzLnkxKSx0aGlzLmltYWdlJiZ0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VOb2RlLHRoaXMuaW1hZ2VQb3NpdGlvbi54LHRoaXMuaW1hZ2VQb3NpdGlvbi55LHRoaXMuaW1hZ2VQb3NpdGlvbi53aWR0aCx0aGlzLmltYWdlUG9zaXRpb24uaGVpZ2h0KSxpO2k8dGhpcy5jdXJyZW50Q29sb3JzLmxlbmd0aDtpKyspdC5hZGRDb2xvclN0b3AodGhpcy5jdXJyZW50Q29sb3JzUG9zW2ldLFwicmdiYShcIit0aGlzLmN1cnJlbnRDb2xvcnNbaV1bMF0rXCIsIFwiK3RoaXMuY3VycmVudENvbG9yc1tpXVsxXStcIiwgXCIrdGhpcy5jdXJyZW50Q29sb3JzW2ldWzJdK1wiLCBcIit0aGlzLmN1cnJlbnRDb2xvcnNbaV1bM10rXCIpXCIpO3RoaXMubmFtZSYmKFwibGlnaHRcIj09PXRoaXMuZ2V0TGlnaHRuZXNzKCk/KGUucmVtb3ZlKHRoaXMubmFtZStcIi1kYXJrXCIpLGUuYWRkKHRoaXMubmFtZStcIi1saWdodFwiKSk6KGUucmVtb3ZlKHRoaXMubmFtZStcIi1saWdodFwiKSxlLmFkZCh0aGlzLm5hbWUrXCItZGFya1wiKSkpLHRoaXMuY29udGV4dC5maWxsU3R5bGU9dCx0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwwLHRoaXMueDEsdGhpcy55MSl9fSx7fSxdLDIwOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwicmVtb3ZlTGlzdGVuZXJzXCI9PT10P3ZvaWQgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnNldFNpemVBdHRyaWJ1dGVzTmFtZVNwYWNlKTp2b2lkIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5zZXRTaXplQXR0cmlidXRlc05hbWVTcGFjZSl9fSx7fSxdLDIxOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwicmVtb3ZlTGlzdGVuZXJzXCI9PT10P3ZvaWQgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLnBhdXNlV2hlbk5vdEluVmlld05hbWVTcGFjZSk6KHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5wYXVzZVdoZW5Ob3RJblZpZXdOYW1lU3BhY2UpLHZvaWQgdGhpcy5wYXVzZVdoZW5Ob3RJblZpZXdOYW1lU3BhY2UoKSl9fSx7fSxdLDIyOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVwiaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3XCI9PT10O3RoaXMuaXNDbGVhcmVkfHwoZXx8KHRoaXMuaXNQYXVzZWQ9ITApLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKSx0aGlzLmFuaW1hdGluZz0hMSl9fSx7fSxdLDIzOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLnNjcm9sbERlYm91bmNlVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSx0aGlzLnNjcm9sbERlYm91bmNlVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGU9dC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYodC5pc0NhbnZhc0luV2luZG93Vmlldz0hKGUuYm90dG9tPDB8fGUucmlnaHQ8MHx8ZS5sZWZ0PndpbmRvdy5pbm5lcldpZHRofHxlLnRvcD53aW5kb3cuaW5uZXJIZWlnaHQpLHQuaXNDYW52YXNJbldpbmRvd1ZpZXcpe2lmKCF0LmlzUGF1c2VkfHx0LmZpcnN0U2Nyb2xsSW5pdCl7aWYodC5pbWFnZSYmIXQuaXNJbWdMb2FkZWQpcmV0dXJuO3QuaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3PSExLHQucGxheShcImlzUGxheWVkQmVjYXVzZUluVmlld1wiKSx0LmZpcnN0U2Nyb2xsSW5pdD0hMX19ZWxzZSF0LmltYWdlJiZ0LmZpcnN0U2Nyb2xsSW5pdCYmKHQucmVmcmVzaENvbG9yc0FuZFBvcygpLHQuZmlyc3RTY3JvbGxJbml0PSExKSx0LmlzUGF1c2VkfHx0LmlzUGF1c2VkQmVjYXVzZU5vdEluVmlld3x8KHQuaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3PSEwLHQucGF1c2UoXCJpc1BhdXNlZEJlY2F1c2VOb3RJblZpZXdcIikpfSx0aGlzLnNjcm9sbERlYm91bmNlVGhyZXNob2xkKX19LHt9LF0sMjQ6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJpc1BsYXllZEJlY2F1c2VJblZpZXdcIj09PXQ7ZXx8KHRoaXMuaXNQYXVzZWQ9ITEpLHRoaXMuaXNDbGVhcmVkPSExLHRoaXMuYW5pbWF0aW5nfHwodGhpcy5hbmltYXRpb249cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUNvbG9ycy5iaW5kKHRoaXMpKSx0aGlzLmFuaW1hdGluZz0hMCl9fSx7fSxdLDI1OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2Z1bmN0aW9uIHQodCl7dmFyIGkscz1lW3QrXCIxXCJdLG89ZVtcInhcIj09PXQ/XCJpbWdPcmlnaW5hbFdpZHRoXCI6XCJpbWdPcmlnaW5hbEhlaWdodFwiXSxuPVwieFwiPT09dD9lLmltYWdlLnBvc2l0aW9uWzBdOmUuaW1hZ2UucG9zaXRpb25bMV07c3dpdGNoKG4pe2Nhc2VcImNlbnRlclwiOmk9bz5zPy0oby1zKS8yOihzLW8pLzIsZS5pbWFnZVBvc2l0aW9uW3RdPWksZS5pbWFnZVBvc2l0aW9uW1wieFwiPT09dD9cIndpZHRoXCI6XCJoZWlnaHRcIl09bzticmVhaztjYXNlXCJ0b3BcIjplLmltYWdlUG9zaXRpb24ueT0wLGUuaW1hZ2VQb3NpdGlvbi5oZWlnaHQ9bzticmVhaztjYXNlXCJib3R0b21cIjplLmltYWdlUG9zaXRpb24ueT1zLW8sZS5pbWFnZVBvc2l0aW9uLmhlaWdodD1vO2JyZWFrO2Nhc2VcInJpZ2h0XCI6ZS5pbWFnZVBvc2l0aW9uLng9cy1vLGUuaW1hZ2VQb3NpdGlvbi53aWR0aD1vO2JyZWFrO2Nhc2VcImxlZnRcIjplLmltYWdlUG9zaXRpb24ueD0wLGUuaW1hZ2VQb3NpdGlvbi53aWR0aD1vfWlmKGUuaW1hZ2Uuc3RyZXRjaE1vZGUpc3dpdGNoKG49XCJ4XCI9PT10P2UuaW1hZ2Uuc3RyZXRjaE1vZGVbMF06ZS5pbWFnZS5zdHJldGNoTW9kZVsxXSl7Y2FzZVwibm9uZVwiOmJyZWFrO2Nhc2VcInN0cmV0Y2hcIjplLmltYWdlUG9zaXRpb25bdF09MCxlLmltYWdlUG9zaXRpb25bXCJ4XCI9PT10P1wid2lkdGhcIjpcImhlaWdodFwiXT1zO2JyZWFrO2Nhc2VcInN0cmV0Y2gtaWYtYmlnZ2VyXCI6aWYobzxzKWJyZWFrO2UuaW1hZ2VQb3NpdGlvblt0XT0wLGUuaW1hZ2VQb3NpdGlvbltcInhcIj09PXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPXM7YnJlYWs7Y2FzZVwic3RyZXRjaC1pZi1zbWFsbGVyXCI6aWYobz5zKWJyZWFrO2UuaW1hZ2VQb3NpdGlvblt0XT0wLGUuaW1hZ2VQb3NpdGlvbltcInhcIj09PXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPXN9fXZhciBpLHM7Zm9yKGk9MDtpPDI7aSsrKXM9aT9cInlcIjpcInhcIix0KHMpfXZhciBlPXRoaXM7cmV0dXJuIHRoaXMuaW1hZ2VQb3NpdGlvbnx8KHRoaXMuaW1hZ2VQb3NpdGlvbj17eDowLHk6MCx3aWR0aDowLGhlaWdodDowLH0pLHRoaXMuaW1hZ2UuYmxlbmRpbmdNb2RlJiYodGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj10aGlzLmltYWdlLmJsZW5kaW5nTW9kZSksdGhpcy5pbWFnZU5vZGU/dm9pZCB0KCk6KHRoaXMuaW1hZ2VOb2RlPW5ldyBJbWFnZSx0aGlzLmltYWdlTm9kZS5vbmVycm9yPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiR3JhbmltOiBUaGUgaW1hZ2Ugc291cmNlIGlzIGludmFsaWQuXCIpfSx0aGlzLmltYWdlTm9kZS5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmltZ09yaWdpbmFsV2lkdGg9ZS5pbWFnZU5vZGUud2lkdGgsZS5pbWdPcmlnaW5hbEhlaWdodD1lLmltYWdlTm9kZS5oZWlnaHQsdCgpLGUucmVmcmVzaENvbG9yc0FuZFBvcygpLGUuaXNQYXVzZWRXaGVuTm90SW5WaWV3JiYhZS5pc0NhbnZhc0luV2luZG93Vmlld3x8KGUuYW5pbWF0aW9uPXJlcXVlc3RBbmltYXRpb25GcmFtZShlLmFuaW1hdGVDb2xvcnMuYmluZChlKSkpLGUuaXNJbWdMb2FkZWQ9ITB9LHZvaWQodGhpcy5pbWFnZU5vZGUuc3JjPXRoaXMuaW1hZ2Uuc291cmNlKSl9fSx7fSxdLDI2OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLGkscyxvLG49dGhpcztmb3Iocz0wO3M8dGhpcy5hY3RpdmVDb2xvcnMubGVuZ3RoO3MrKyl7Zm9yKG89MDtvPDQ7bysrKWU9bi5hY3RpdmVDb2xvcnNbc11bb10rKDMhPT1vP01hdGguY2VpbChuLmFjdGl2ZUNvbG9yc0RpZmZbc11bb10vMTAwKnQpOk1hdGgucm91bmQobi5hY3RpdmVDb2xvcnNEaWZmW3NdW29dLzEwMCp0KjEwMCkvMTAwKSxlPD0yNTUmJmU+PTAmJihuLmN1cnJlbnRDb2xvcnNbc11bb109ZSk7aT1wYXJzZUZsb2F0KChuLmFjdGl2ZUNvbG9yc1Bvc1tzXStuLmFjdGl2ZUNvbG9yc1Bvc0RpZmZbc10vMTAwKnQpLnRvRml4ZWQoNCkpLGk8PTEmJmk+PTAmJihuLmN1cnJlbnRDb2xvcnNQb3Nbc109aSl9dGhpcy5tYWtlR3JhZGllbnQoKX19LHt9LF0sMjc6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxlLGkscyxvPXRoaXM7cmV0dXJuIHRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV18fCh0aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdPVtdKSx2b2lkIDAhPT10aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdW3RoaXMuY2hhbm5lbHNJbmRleF0/KHRoaXMuYWN0aXZlQ29sb3JzPXRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnMsdGhpcy5hY3RpdmVDb2xvcnNEaWZmPXRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnNEaWZmLHRoaXMuYWN0aXZlQ29sb3JzUG9zPXRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnNQb3Msdm9pZCh0aGlzLmFjdGl2ZUNvbG9yc1Bvc0RpZmY9dGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvc0RpZmYpKToodGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXS5wdXNoKFt7fSxdKSx0aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdW3RoaXMuY2hhbm5lbHNJbmRleF0uY29sb3JzPVtdLHRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnNEaWZmPVtdLHRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnNQb3M9W10sdGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvc0RpZmY9W10sdGhpcy5hY3RpdmVDb2xvcnM9W10sdGhpcy5hY3RpdmVDb2xvcnNEaWZmPVtdLHRoaXMuYWN0aXZlQ29sb3JzUG9zPVtdLHRoaXMuYWN0aXZlQ29sb3JzUG9zRGlmZj1bXSx0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbdGhpcy5jaGFubmVsc0luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKG4scil7dmFyIGE9by5nZXRDb2xvclBvcyhuLHIpLG49by5nZXRDb2xvcihuKSxoPW8uY29udmVydENvbG9yVG9SZ2JhKG4pLGM9by5jaGFubmVsc1tvLmFjdGl2ZVN0YXRlXTtjW28uY2hhbm5lbHNJbmRleF0uY29sb3JzLnB1c2goaCksby5hY3RpdmVDb2xvcnMucHVzaChoKSxjW28uY2hhbm5lbHNJbmRleF0uY29sb3JzUG9zLnB1c2goYSksby5hY3RpdmVDb2xvcnNQb3MucHVzaChhKSxvLmlzQ3VycmVudENvbG9yc1NldHx8KG8uY3VycmVudENvbG9ycy5wdXNoKG8uY29udmVydENvbG9yVG9SZ2JhKG4pKSxvLmN1cnJlbnRDb2xvcnNQb3MucHVzaChhKSksby5jaGFubmVsc0luZGV4PT09by5zdGF0ZXNbby5hY3RpdmVTdGF0ZV0uZ3JhZGllbnRzLmxlbmd0aC0xPyh0PW8uZ2V0Q29sb3JEaWZmKGNbby5jaGFubmVsc0luZGV4XS5jb2xvcnNbcl0sY1swXS5jb2xvcnNbcl0pLGU9by5nZXRDb2xvclBvc0RpZmYoY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvc1tyXSxjWzBdLmNvbG9yc1Bvc1tyXSkpOihpPW8uY29udmVydENvbG9yVG9SZ2JhKG8uZ2V0Q29sb3Ioby5zdGF0ZXNbby5hY3RpdmVTdGF0ZV0uZ3JhZGllbnRzW28uY2hhbm5lbHNJbmRleCsxXVtyXSkpLHM9by5nZXRDb2xvclBvcyhvLnN0YXRlc1tvLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbby5jaGFubmVsc0luZGV4KzFdW3JdLHIpLHQ9by5nZXRDb2xvckRpZmYoY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1tyXSxpKSxlPW8uZ2V0Q29sb3JQb3NEaWZmKGNbby5jaGFubmVsc0luZGV4XS5jb2xvcnNQb3Nbcl0scykpLGNbby5jaGFubmVsc0luZGV4XS5jb2xvcnNEaWZmLnB1c2godCksby5hY3RpdmVDb2xvcnNEaWZmLnB1c2godCksY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvc0RpZmYucHVzaChlKSxvLmFjdGl2ZUNvbG9yc1Bvc0RpZmYucHVzaChlKX0pLHRoaXMuYWN0aXZldHJhbnNpdGlvblNwZWVkPXRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLnRyYW5zaXRpb25TcGVlZHx8NWUzLHZvaWQodGhpcy5pc0N1cnJlbnRDb2xvcnNTZXQ9ITApKX19LHt9LF0sMjg6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKHQsZSl7cmV0dXJuIHQuaW5kZXhPZihcIiVcIik+LTE/ZS8xMDAqcGFyc2VJbnQodC5zcGxpdChcIiVcIilbMF0sMTApOnBhcnNlSW50KHQuc3BsaXQoXCJweFwiKVswXSwxMCl9ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jb250ZXh0O3N3aXRjaCh0aGlzLmRpcmVjdGlvbil7Y2FzZVwiZGlhZ29uYWxcIjpyZXR1cm4gdC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsdGhpcy54MSx0aGlzLnkxKTtjYXNlXCJsZWZ0LXJpZ2h0XCI6cmV0dXJuIHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLHRoaXMueDEsMCk7Y2FzZVwidG9wLWJvdHRvbVwiOnJldHVybiB0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHRoaXMueDEvMiwwLHRoaXMueDEvMix0aGlzLnkxKTtjYXNlXCJyYWRpYWxcIjpyZXR1cm4gdC5jcmVhdGVSYWRpYWxHcmFkaWVudCh0aGlzLngxLzIsdGhpcy55MS8yLHRoaXMueDEvMix0aGlzLngxLzIsdGhpcy55MS8yLDApO2Nhc2VcImN1c3RvbVwiOnJldHVybiB0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHModGhpcy5jdXN0b21EaXJlY3Rpb24ueDAsdGhpcy54MSkscyh0aGlzLmN1c3RvbURpcmVjdGlvbi55MCx0aGlzLnkxKSxzKHRoaXMuY3VzdG9tRGlyZWN0aW9uLngxLHRoaXMueDEpLHModGhpcy5jdXN0b21EaXJlY3Rpb24ueTEsdGhpcy55MSkpfX19LHt9LF0sMjk6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLmdldERpbWVuc2lvbnMoKSx0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHRoaXMueDEpLHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLHRoaXMueTEpLHRoaXMuaW1hZ2UmJnRoaXMucHJlcGFyZUltYWdlKCksdGhpcy5yZWZyZXNoQ29sb3JzQW5kUG9zKCl9fSx7fSxdLDMwOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVwiaHR0cHM6Ly9zYXJjYWRhc3MuZ2l0aHViLmlvL2dyYW5pbS5qcy9hcGkuaHRtbFwiO3Rocm93IG5ldyBFcnJvcignR3JhbmltOiBJbnB1dCBlcnJvciBvbiBcIicrdCsnXCIgb3B0aW9uLlxcbkNoZWNrIHRoZSBBUEkgJytlK1wiLlwiKX19LHt9LF0sMzE6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKHQpe2Zvcih2YXIgZSxpPSEwLHM9MDtpJiZzPHQubGVuZ3RoOyl7aWYoZT10W3NdLFwic3RyaW5nXCIhPXR5cGVvZiBlKWk9ITE7ZWxzZXt2YXIgbz1udWxsLG49bnVsbDtlLmluZGV4T2YoXCJweFwiKSE9PS0xJiYobj1cInB4XCIpLGUuaW5kZXhPZihcIiVcIikhPT0tMSYmKG49XCIlXCIpLG89ZS5zcGxpdChuKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RoPjB9KSwoIW58fG8ubGVuZ3RoPjJ8fCFvWzBdfHxvWzFdfHwhL14tP1xcZCtcXC4/XFxkKiQvLnRlc3Qob1swXSkpJiYoaT0hMSl9cysrfXJldHVybiBpfWUuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXCJsZWZ0XCIsXCJjZW50ZXJcIixcInJpZ2h0XCIsXSxpPVtcInRvcFwiLFwiY2VudGVyXCIsXCJib3R0b21cIixdLG89W1wibm9uZVwiLFwic3RyZXRjaFwiLFwic3RyZXRjaC1pZi1zbWFsbGVyXCIsXCJzdHJldGNoLWlmLWJpZ2dlclwiLF0sbj1bXCJtdWx0aXBseVwiLFwic2NyZWVuXCIsXCJub3JtYWxcIixcIm92ZXJsYXlcIixcImRhcmtlblwiLFwibGlnaHRlblwiLFwibGlnaHRlclwiLFwiY29sb3ItZG9kZ2VcIixcImNvbG9yLWJ1cm5cIixcImhhcmQtbGlnaHRcIixcInNvZnQtbGlnaHRcIixcImRpZmZlcmVuY2VcIixcImV4Y2x1c2lvblwiLFwiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJjb2xvclwiLFwibHVtaW5vc2l0eVwiLF0scj1bXCJkaWFnb25hbFwiLFwibGVmdC1yaWdodFwiLFwidG9wLWJvdHRvbVwiLFwicmFkaWFsXCIsXCJjdXN0b21cIixdO3N3aXRjaCh0KXtjYXNlXCJpbWFnZVwiOkFycmF5LmlzQXJyYXkodGhpcy5pbWFnZS5wb3NpdGlvbikmJjI9PT10aGlzLmltYWdlLnBvc2l0aW9uLmxlbmd0aCYmZS5pbmRleE9mKHRoaXMuaW1hZ2UucG9zaXRpb25bMF0pIT09LTEmJmkuaW5kZXhPZih0aGlzLmltYWdlLnBvc2l0aW9uWzFdKSE9PS0xfHx0aGlzLnRyaWdnZXJFcnJvcihcImltYWdlLnBvc2l0aW9uXCIpLHRoaXMuaW1hZ2Uuc3RyZXRjaE1vZGUmJihBcnJheS5pc0FycmF5KHRoaXMuaW1hZ2Uuc3RyZXRjaE1vZGUpJiYyPT09dGhpcy5pbWFnZS5zdHJldGNoTW9kZS5sZW5ndGgmJm8uaW5kZXhPZih0aGlzLmltYWdlLnN0cmV0Y2hNb2RlWzBdKSE9PS0xJiZvLmluZGV4T2YodGhpcy5pbWFnZS5zdHJldGNoTW9kZVsxXSkhPT0tMXx8dGhpcy50cmlnZ2VyRXJyb3IoXCJpbWFnZS5zdHJldGNoTW9kZVwiKSk7YnJlYWs7Y2FzZVwiYmxlbmRpbmdNb2RlXCI6bi5pbmRleE9mKHRoaXMuaW1hZ2UuYmxlbmRpbmdNb2RlKT09PS0xJiYodGhpcy5jbGVhcigpLHRoaXMudHJpZ2dlckVycm9yKFwiYmxlbmRpbmdNb2RlXCIpKTticmVhaztjYXNlXCJkaXJlY3Rpb25cIjpyLmluZGV4T2YodGhpcy5kaXJlY3Rpb24pPT09LTE/dGhpcy50cmlnZ2VyRXJyb3IoXCJkaXJlY3Rpb25cIik6XCJjdXN0b21cIj09PXRoaXMuZGlyZWN0aW9uJiYocyhbdGhpcy5jdXN0b21EaXJlY3Rpb24ueDAsdGhpcy5jdXN0b21EaXJlY3Rpb24ueDEsdGhpcy5jdXN0b21EaXJlY3Rpb24ueTAsdGhpcy5jdXN0b21EaXJlY3Rpb24ueTEsXSl8fHRoaXMudHJpZ2dlckVycm9yKFwiY3VzdG9tRGlyZWN0aW9uXCIpKX19fSx7fSxdLDMyOltmdW5jdGlvbih0LGUsaSl7d2luZG93LkdyYW5pbT10KFwiLi9saWIvR3JhbmltLmpzXCIpfSx7XCIuL2xpYi9HcmFuaW0uanNcIjoxLH0sXSx9LHt9LFszMixdKTsiLCJ2YXIgZ3JhbmltSW5zdGFuY2UgPSBuZXcgR3JhbmltKHtcbiAgZWxlbWVudDogJyNncmFuaW0tY2FudmFzJyxcbiAgbmFtZTogJ2dyYW5pbScsXG4gIG9wYWNpdHk6IFsxLCAxLF0sXG4gIHN0YXRlczoge1xuICAgIFwiZGVmYXVsdC1zdGF0ZVwiOiB7XG4gICAgICBncmFkaWVudHM6IFtcbiAgICAgICAgWycjZmZhMmEyJywgJyNmZmY5YTInLF0sXG4gICAgICAgIFsnIzQ2OTljMCcsICcjOTdjNzRiJyxdLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG5cbnZhciB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jay13cmFwcGVyXCIpO1xudmFyIGl0ZW1zID0gW1xuICB7XG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGxhYi5pby93ZXN0Yi8nLFxuICAgIHllYXI6IDIwMTksXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzJyxcbiAgICBsYXlvdXQ6ICfQtNCw0LvQuCDQvNCw0LrQtdGC0Ysg0LTQuNC30LDQudC90LAsINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXG4gICAgZGVzY3JpcHJ0aW9uOiAn0KHQsNC50YIg0LHQsNC90LrQsCwg0YLQvtC70YzQutC+INCy0LXRgNGB0YLQutCwLiDQktGF0L7QtCDQuCDQsNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNGPINC/0YDQvtC50LTRg9GCINC/0YDQuCDQu9GO0LHRi9GFINC30L3QsNGH0LXQvdC40Y/RhSAo0L3QviDQvNC40L3QuNC80LDQu9GM0L3QsNGPINCy0LDQu9C40LTQsNGG0LjRjyDQsiDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INCy0YHQtSDRgNCw0LLQvdC+INC10YHRgtGMKS48YnI+PGJyPtCf0L7RgdC70LUg0LLRhdC+0LTQsC/RgNC10LPQuNGB0YLRgNCw0YbQuNC4INC10YHRgtGMINC60L3QvtC/0LrQuCDQntC90LvQsNC50L0t0LHQsNC90Lov0J/QtdGA0LXQstC+0LTRiywg0YLQsNC8INC/0YDQuNC60L7Qu9GM0L3QsNGPINCw0L3QuNC80LDRhtC40Y8g0Lgg0LXRidC1INCyINCf0LXRgNC10LLQvtC00LDRhSDQsNC90LjQvNCw0YbQuNGPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyAxLzIvMyDQvdC10L/Qu9C+0YXQsNGPISA8YnI+PGJyPtCf0YDQuNC80LXRh9Cw0L3QuNC1OiDQsiDQs9C40YLQu9Cw0LHQtSDQtdGB0LvQuCDQvtCx0L3QvtCy0LjRgtGMINGB0YLRgNCw0L3QuNGG0YMg0L3QtSDQv9C+INC60L7RgNC90Y4sINCy0YvQtNCw0YHRgiDQvtGI0LjQsdC60YMgKNGC0L4g0LXRgdGC0Ywg0YEgdnVlLXJvdXRlciDQvdC1INGA0LDQsdC+0YLQsNC10YIpLicsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9pbmZhbGxpYmxlLXN3YXJ0ei01NzZkNmMubmV0bGlmeS5jb20nLFxuICAgIHllYXI6IDIwMTksXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzJyxcbiAgICBsYXlvdXQ6ICfQvNCw0LrQtdGCINC90LUg0LzQvtC5LCDQsNC00LDQv9GC0LjQstC90YvQuSwg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5IChJRTExKyknLFxuICAgIGRlc2NyaXBydGlvbjogJ9Ci0LXRgdGC0L7QstC+0LUg0LfQsNC00LDQvdC40LUg0L/QviDQstC10YDRgdGC0LrQtS4gKNCd0LAg0L3QtdGC0LvQuNGE0LDQuSDQuNC90L7Qs9C00LAg0YHRgtGA0LDQvdC40YbQsCDQvdC1INC30LDQs9GA0YPQttCw0LXRgtGB0Y8sINCwINGH0LXRgNC10Lcg0L3QtdGB0LrQvtC70YzQutC+INC80LjQvdGD0YIg0LfQsNCz0YDRg9C20LDQtdGC0YHRjywg0LrQsNC6INGPINC/0L7QvdGP0LvQsCwg0L7QvdC+INCy0YvRhdC+0LTQuNGCINC40Lcg0YHQvdCwKScsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvY2FyZC1wYXltZW50LXBhZ2UnLFxuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGh1Yi5pbycsXG4gICAgeWVhcjogMjAxOSxcbiAgICB0ZWNobm9sb2dpZXM6ICfQvdCw0YLQuNCy0L3Ri9C5IGpzLCB3ZWJwYWNrJyxcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXG4gICAgZGVzY3JpcHJ0aW9uOiAn0KHRgtGA0LDQvdC40YfQutCwLCDQutC+0YLQvtGA0YPRjiDQstGLINCy0LjQtNC40YLQtSDQv9C10YDQtdC0INGB0L7QsdC+0LkuJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL1NwYW5yaS9TcGFucmkuZ2l0aHViLmlvJyxcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL3BsYXN0aWMtd2luZG93cy5oZXJva3VhcHAuY29tJyxcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHRlY2hub2xvZ2llczogJ1Z1ZS5qcywgRmxhc2snLFxuICAgIGxheW91dDogJ9C/0LXRgNC10LTQtdC70LDQvdC90YvQuSDQtNC40LfQsNC50L0g0YjQsNCx0LvQvtC90LAsINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQvdC1INC+0YHQvtCx0L4g0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcbiAgICBkZXNjcmlwcnRpb246ICfQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9INC/0LvQsNGB0YLQuNC60L7QstGL0YUg0L7QutC+0L0sINC60L7RgtC+0YDRi9C5INC90LUg0LfQsNC60L7QvdGH0LXQvS4nLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vU3BhbnJpL3dpbmRvd3MnLFxuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHA6Ly9lZG1zLW10dWNpLmhlcm9rdWFwcC5jb20nLFxuICAgIHllYXI6IDIwMTksXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzLCBEamFuZ28gKERSRiknLFxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0L3QtSDQsNC00LDQv9GC0LjQstC90YvQuSwg0L3QtSDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LknLFxuICAgIGRlc2NyaXBydGlvbjogYFxuICAgICAg0JTQuNC/0LvQvtC8LCDRgdC40YHRgtC10LzQsCDRjdC70LXQutGC0YDQvtC90L3QvtCz0L4g0LTQvtC60YPQvNC10L3RgtC+0L7QsdC+0YDQvtGC0LAuINCd0LAg0YHQtdGA0LLQtdGA0LUg0LLRgdGRINC/0LvQvtGF0L4sINC/0L7RjdGC0L7QvNGDXG4gICAgICDQvdCwINGE0YDQvtC90YLQtSDQvdC10LrQvtGC0L7RgNGL0LUg0LrQvdC+0L/QutC4INGA0LDQsdC+0YLQsNGO0YIg0L3QtdC/0YDQsNCy0LjQu9GM0L3Qvi48L3A+XG4gICAgICA8cD7QlNCw0L3QvdGL0LUg0LTQu9GPINCy0YXQvtC00LAgKNC70L7QvNCw0L3QuNC1INC90LAg0LLQsNGI0LXQuSDRgdC+0LLQtdGB0YLQuCEpOjxicj5cbiAgICAgINCb0L7Qs9C40L06IG9wYWNoa2k5dkBtYWlsLnJ1PGJyPlxuICAgICAg0J/QsNGA0L7Qu9GMOiBDVDhSM0VBRWAsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvQ1JNLWRpcGxvbScsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9zcGFucmkuZ2l0aHViLmlvL2JtbC8nLFxuICAgIHllYXI6ICcyMDE5ICjQuNC00LXRjyDQuNC3IDIwMTcpJyxcbiAgICB0ZWNobm9sb2dpZXM6ICdOdXh0LmpzJyxcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXG4gICAgZGVzY3JpcHJ0aW9uOiAn0J/RgNC+0YHRgtC+INGB0YLRgNCw0L3QuNGH0LrQsCDRjyDRgdCw0LzQsCDQvdC1INC30L3QsNGOINC+INGH0ZHQvC4nLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vU3BhbnJpL2JtbCcsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9zcGFucmkuZ2l0aHViLmlvL3JlYWN0LWxhbmRpbmcvJyxcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHRlY2hub2xvZ2llczogJ1JlYWN0JyxcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQvdC1INC+0YHQvtCx0L4g0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcbiAgICBkZXNjcmlwcnRpb246ICfQodGC0YDQsNC90LjRh9C60LAg0LTQu9GPINC00YDRg9Cz0LAuJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL1NwYW5yaS9yZWFjdC1sYW5kaW5nJyxcbiAgfSxcbiAge1xuICAgIGxpbms6ICdodHRwczovL3NwYW5yaS5naXRodWIuaW8vZGVzaWduLycsXG4gICAgeWVhcjogMjAxOCxcbiAgICB0ZWNobm9sb2dpZXM6ICfQsdC10Lcg0YTRgNC10LnQvNCy0L7RgNC60L7QsiDQuCDRgdCx0L7RgNGJ0LjQutC+0LInLFxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcbiAgICBkZXNjcmlwcnRpb246ICfQodGC0YDQsNC90LjRh9C60LAg0L4g0YLQvtC8LCDQv9C+0YfQtdC80YMg0LzQvtC5INCx0YDQsNGCIC0g0L3QtdGD0LTQsNGH0L3QuNC6LCDQvdC+INGC0LDQvCDQv9C+0YfRgtC4INC90LjRh9C10LPQviDQvdC10YIuJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL1NwYW5yaS9kZXNpZ24nLFxuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHA6Ly9wc3R5cGUuaGVyb2t1YXBwLmNvbScsXG4gICAgeWVhcjogMjAxOCxcbiAgICB0ZWNobm9sb2dpZXM6ICdWdWUuanMgKyBUeXBlc2NyaXB0LCBOb2RlLmpzJyxcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINC90LUg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcbiAgICBkZXNjcmlwcnRpb246IGBcbiAgICAgINCh0LXRgNCy0LXRgCDQtNC70Y8g0LzQvtCx0LjQu9GM0L3QvtCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8g0L/QvtC00YDRg9Cz0Lgg0LTQu9GPINC+0L/RgNC10LTQtdC70LXQvdC40Y8gXG4gICAgICDQv9GB0LjRhdC+0YLQuNC/0LAg0LLQvtC00LjRgtC10LvRjy4g0JzQvtC20L3QviDQv9C+0YHQvNC+0YLRgNC10YLRjCDQv9Cw0L3QtdC70Ywg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDQsCwgXG4gICAgICDQvdCw0L/QuNGB0LDQvdC90YPRjiDQvdCwIFZ1ZS5qcy48YnI+PGJyPtCi0L4sINGH0YLQviDQvNC+0LbQvdC+INC/0L7RgdC80L7RgtGA0LXRgtGMLCDQvdCw0L/QuNGB0LDQvdC+INCx0LXQtyBUeXBlU2NyaXB0LCDQsCDQvdC+0LLQsNGPINCy0LXRgNGB0LjRjyDQtdGJ0LUg0L3QtSDQtNC+0LTQtdC70LDQvdCwLjwvcD5cbiAgICAgIDxwPtCU0LDQvdC90YvQtSDQtNC70Y8g0LLRhdC+0LTQsCAo0LvQvtC80LDQvdC40LUg0L3QsCDQstCw0YjQtdC5INGB0L7QstC10YHRgtC4ISk6PGJyPlxuICAgICAg0JvQvtCz0LjQvTogYWRtaW4wPGJyPlxuICAgICAg0J/QsNGA0L7Qu9GMOiBoYXJkcGFzc3dvcmRgLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vU3BhbnJpL1BTLXR5cGUnLFxuICB9LFxuICB7XG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGh1Yi5pby9maXJzdC1zaXRlL3d3dy9pbmRleC5odG1sJyxcbiAgICB5ZWFyOiAyMDE3LFxuICAgIHRlY2hub2xvZ2llczogJ2pxdWVyeSwg0YHQsdC+0YDRidC40LogZ3VscCcsXG4gICAgbGF5b3V0OiAn0YHQstC+0Lkg0LTQuNC30LDQudC9LCDRg9C00LjQstC40YLQtdC70YzQvdC+LCDQvdC+INCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQvdC1INC60YDQvtGB0YHQsdGA0LDRg9C30LXRgNC90YvQuScsXG4gICAgZGVzY3JpcHJ0aW9uOiAn0KHQsNC80YvQuSDQv9C10YDQstGL0Lkg0LzQvtC5INGB0LDQudGCLiDQotCw0Lwg0LLRgdGRINC/0LvQvtGF0L4sINC90L4g0L3QvtGB0YLQsNC70YzQs9C40YfQvdC+LicsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvZmlyc3Qtc2l0ZScsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9zcGFucmkuZ2l0aHViLmlvL2ZpcnN0LXNpdGUvd3d3L3BlcnMvcGVycy5odG1sJyxcbiAgICB5ZWFyOiAyMDE3LFxuICAgIHRlY2hub2xvZ2llczogJ2pxdWVyeSwg0LHQtdC3INGB0LHQvtGA0YnQuNC60LAnLFxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcbiAgICBkZXNjcmlwcnRpb246ICfQodGC0YDQsNC90LjRh9C60LAg0L4g0LzQvtC40YUg0L/QtdGA0YHQvtC90LDQttCw0YUgKNC40Lcg0YDQuNGB0L7QstCw0L3QuNGPKS4g0JrQsNGA0YLQuNC90LrQuCDQtNC70Y8g0YHQsNC50YLQsCDRgtCw0Log0Lgg0L3QtSDQtNC+0YDQuNGB0L7QstCw0LvQsC4nLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vU3BhbnJpL2ZpcnN0LXNpdGUnLFxuICB9LFxuXTtcblxudmFyIGh0bWwgPSAnJztcblxuZm9yKGxldCBpIGluIGl0ZW1zKSB7XG4gIGxldCBjb2RlTGluayA9IChcbiAgICBcbiAgYDxkaXYgY2xhc3M9XCJpdGVtX19jb2RlLWxpbmstd3JhcHBlclwiPlxuICAgICAgPGEgY2xhc3M9XCJpdGVtX19jb2RlLWxpbmtcIlxuICAgICAgICBocmVmPVwiJHtpdGVtc1tpXS5jb2RlfVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICA+XG4gICAgICAgICR7aXRlbXNbaV0uY29kZX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgYClcblxuICBodG1sICs9IChcbiAgYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2hlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fX2luZGV4XCI+JHsraSArIDF9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbV9fbGluay13cmFwcGVyXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiaXRlbV9fbGlua1wiIGhyZWY9XCIke2l0ZW1zW2ldLmxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgJHtpdGVtc1tpXS5saW5rfVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fX2Rlc2lnbi1lbGVtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tfX2xhYmVsXCI+0JPQvtC0OiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja19fdmFsdWVcIj4ke2l0ZW1zW2ldLnllYXJ9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja19fbGFiZWxcIj7QotC10YXQvdC+0LvQvtCz0LjQuDogPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tfX3ZhbHVlXCI+JHtpdGVtc1tpXS50ZWNobm9sb2dpZXN9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja19fbGFiZWxcIj7QktC10YDRgdGC0LrQsDogPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tfX3ZhbHVlXCI+JHtpdGVtc1tpXS5sYXlvdXR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja19fbGFiZWxcIj7QntC/0LjRgdCw0L3QuNC1OiA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tfX3ZhbHVlXCI+JHtpdGVtc1tpXS5kZXNjcmlwcnRpb259PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgaXRlbV9fY29kZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrX19sYWJlbFwiPtCa0L7QtDogPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrX192YWx1ZVwiPiR7aXRlbXNbaV0uY29kZSA/IGNvZGVMaW5rIDogJ9C90LXQtNC+0YHRgtGD0L/QtdC9J308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YCk7XG59XG5cbndyYXBwZXIuaW5uZXJIVE1MID0gaHRtbDsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLXNhc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLXNhc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2hlYWRlci5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3Mtc2Fzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9