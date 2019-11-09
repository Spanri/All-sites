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
exports.push([module.i, "@charset \"UTF-8\";\n/* Основная часть */\n.for-IE {\n  -webkit-column-width: 400px;\n     -moz-column-width: 400px;\n          column-width: 400px;\n  max-width: 1350px;\n  margin: 30px auto;\n}\n\n#block-wrapper {\n  -webkit-column-width: 400px;\n     -moz-column-width: 400px;\n          column-width: 400px;\n  max-width: 1350px;\n}\n\n/* Карточка */\n.item {\n  display: inline-block;\n  -webkit-column-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid-column;\n  page-break-inside: avoid;\n  page-break-before: avoid;\n  margin: 30px 15px;\n  padding: 0;\n  background-color: white;\n  box-shadow: 0 0 10px rgba(153, 153, 153, 0.479);\n  box-sizing: border-box;\n  color: #212424;\n  position: relative;\n  z-index: 3;\n}\n.item__design-element {\n  position: absolute;\n  width: 90%;\n  height: 200px;\n  background: #dddd8f;\n  z-index: 2;\n}\n.item__link {\n  margin: 0 30px;\n  padding: 0px;\n  position: relative;\n  top: -20px;\n  left: 0;\n  z-index: 3;\n  text-align: left;\n  color: white;\n}\n.item__link:hover {\n  cursor: pointer;\n  -webkit-transition: all ease-in 0.2s;\n  transition: all ease-in 0.2s;\n}\n.item__link-a, .item__description-a {\n  font-family: \"Amatic SC\", cursive;\n  font-weight: bold;\n  font-size: 28px;\n  color: white;\n  padding: 3px;\n}\n.item__link-a {\n  background: #30708d;\n}\n.item__description-a {\n  background: #74b382;\n}\n.item__link-a:hover, .item__description-a:hover {\n  cursor: pointer;\n  background: white;\n  color: #30708d;\n}\n.item__description {\n  border-top: 2px #4699c0 solid;\n  padding: 15px 0 15px 10%;\n  width: 80%;\n  font-family: \"Lora\", serif;\n  font-size: 20px;\n  text-align: right;\n  position: relative;\n  z-index: 3;\n}\n\n@media (max-width: 855px) {\n  .item {\n    width: calc(100% - 35px);\n  }\n}", ""]);


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
  var codeLink = "<a class=\"item__description-a\"\n      href=\"".concat(items[i].code, "\"\n      target=\"_blank\"\n    >\n      ").concat(items[i].code, "\n    </a>\n  ");
  html += "<div class=\"item\">\n    <div class=\"item__design-element\"></div>\n    <p class=\"item__link\">\n      <a\n        class=\"item__link-a\"\n        href=\"".concat(items[i].link, "\" \n        target=\"_blank\"\n      >\n        ").concat(items[i].link, "\n      </a>\n    </p>\n    <div class=\"item__description\">\n      <p>\u0413\u043E\u0434: ").concat(items[i].year, "</p>\n      <p>\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: ").concat(items[i].technologies, "</p>\n      <p>\u0412\u0435\u0440\u0441\u0442\u043A\u0430: ").concat(items[i].layout, "</p>\n      <p>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(items[i].descriprtion, "</p>    \n      <p>\u041A\u043E\u0434: ").concat(items[i].code ? codeLink : 'недоступен', "</p>\n    </div>\n  </div>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY29udGVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyYW5pbS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NvbnRlbnQuc2Nzcz9hNjgxIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2hlYWRlci5zY3NzP2YxZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2Nzcz85MDY5Il0sIm5hbWVzIjpbInQiLCJlIiwiaSIsInMiLCJvIiwiciIsImEiLCJoIiwicmVxdWlyZSIsIm4iLCJjIiwiRXJyb3IiLCJjb2RlIiwibCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiZ2V0RWxlbWVudCIsImVsZW1lbnQiLCJ4MSIsInkxIiwibmFtZSIsImVsVG9TZXRDbGFzc09uIiwiZGlyZWN0aW9uIiwiY3VzdG9tRGlyZWN0aW9uIiwidmFsaWRhdGVJbnB1dCIsImlzUGF1c2VkV2hlbk5vdEluVmlldyIsInN0YXRlcyIsInN0YXRlVHJhbnNpdGlvblNwZWVkIiwicHJldmlvdXNUaW1lU3RhbXAiLCJwcm9ncmVzcyIsImlzUGF1c2VkIiwiaXNDbGVhcmVkIiwiaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3IiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJjaGFubmVscyIsImNoYW5uZWxzSW5kZXgiLCJhY3RpdmVTdGF0ZSIsImRlZmF1bHRTdGF0ZU5hbWUiLCJpc0NoYW5naW5nU3RhdGUiLCJjdXJyZW50Q29sb3JzIiwiY3VycmVudENvbG9yc1BvcyIsImFjdGl2ZXRyYW5zaXRpb25TcGVlZCIsImV2ZW50UG9seWZpbGwiLCJzY3JvbGxEZWJvdW5jZVRocmVzaG9sZCIsInNjcm9sbERlYm91bmNlVGltZW91dCIsImlzSW1nTG9hZGVkIiwiaXNDYW52YXNJbldpbmRvd1ZpZXciLCJmaXJzdFNjcm9sbEluaXQiLCJhbmltYXRpbmciLCJncmFkaWVudExlbmd0aCIsImdyYWRpZW50cyIsImltYWdlIiwic291cmNlIiwicG9zaXRpb24iLCJzdHJldGNoTW9kZSIsImJsZW5kaW5nTW9kZSIsImV2ZW50cyIsInN0YXJ0IiwiQ3VzdG9tRXZlbnQiLCJlbmQiLCJncmFkaWVudENoYW5nZSIsImRldGFpbCIsImlzTG9vcGluZyIsImNvbG9yc0Zyb20iLCJjb2xvcnNUbyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2FsbGJhY2tzIiwib25TdGFydCIsIm9uR3JhZGllbnRDaGFuZ2UiLCJvbkVuZCIsImdldERpbWVuc2lvbnMiLCJzZXRBdHRyaWJ1dGUiLCJzZXRDb2xvcnMiLCJwcmVwYXJlSW1hZ2UiLCJwYXVzZVdoZW5Ob3RJblZpZXdOYW1lU3BhY2UiLCJwYXVzZVdoZW5Ob3RJblZpZXciLCJiaW5kIiwic2V0U2l6ZUF0dHJpYnV0ZXNOYW1lU3BhY2UiLCJzZXRTaXplQXR0cmlidXRlcyIsIm9uUmVzaXplIiwib25TY3JvbGwiLCJyZWZyZXNoQ29sb3JzQW5kUG9zIiwiYW5pbWF0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZUNvbG9ycyIsImRpc3BhdGNoRXZlbnQiLCJwcm90b3R5cGUiLCJjaGFuZ2VCbGVuZGluZ01vZGUiLCJjaGFuZ2VEaXJlY3Rpb24iLCJjaGFuZ2VTdGF0ZSIsImNsZWFyIiwiY29udmVydENvbG9yVG9SZ2JhIiwiZGVzdHJveSIsImdldENvbG9yIiwiZ2V0Q29sb3JEaWZmIiwiZ2V0Q29sb3JQb3MiLCJnZXRDb2xvclBvc0RpZmYiLCJnZXRDdXJyZW50Q29sb3JzIiwiZ2V0Q3VycmVudENvbG9yc1BvcyIsImdldExpZ2h0bmVzcyIsIm1ha2VHcmFkaWVudCIsInBhdXNlIiwicGxheSIsInNldERpcmVjdGlvbiIsInRyaWdnZXJFcnJvciIsImxvb3AiLCJ0b0ZpeGVkIiwidHJhbnNpdGlvblNwZWVkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhY3RpdmVDb2xvcnNEaWZmIiwiYWN0aXZlQ29sb3JzUG9zRGlmZiIsImFjdGl2ZUNvbG9ycyIsImFjdGl2ZUNvbG9yc1BvcyIsImZvckVhY2giLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImV4ZWMiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJNYXRoIiwicm91bmQiLCJoZXhhIiwicmdiYSIsInJnYiIsImhzbGEiLCJoc2wiLCJwYXJzZUZsb2F0IiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIndpbmRvdyIsIkV2ZW50IiwiY29sb3IiLCJwb3MiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIkhUTUxDYW52YXNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm1hcCIsIm1heCIsImNsYXNzTGlzdCIsImRyYXdJbWFnZSIsImltYWdlTm9kZSIsImltYWdlUG9zaXRpb24iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkQ29sb3JTdG9wIiwicmVtb3ZlIiwiYWRkIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJpbm5lcldpZHRoIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJvbmxvYWQiLCJpbWdPcmlnaW5hbFdpZHRoIiwiaW1nT3JpZ2luYWxIZWlnaHQiLCJzcmMiLCJjZWlsIiwiY29sb3JzIiwiY29sb3JzRGlmZiIsImNvbG9yc1BvcyIsImNvbG9yc1Bvc0RpZmYiLCJpc0N1cnJlbnRDb2xvcnNTZXQiLCJpbmRleE9mIiwic3BsaXQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwieDAiLCJ5MCIsImZpbHRlciIsInRlc3QiLCJBcnJheSIsImlzQXJyYXkiLCJHcmFuaW0iLCJncmFuaW1JbnN0YW5jZSIsIm9wYWNpdHkiLCJ3cmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpdGVtcyIsImxpbmsiLCJ5ZWFyIiwidGVjaG5vbG9naWVzIiwibGF5b3V0IiwiZGVzY3JpcHJ0aW9uIiwiaHRtbCIsImNvZGVMaW5rIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBLGNBQWMsbUJBQU8sQ0FBQyx1TkFBOEc7O0FBRXBJO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDQntGB0L3QvtCy0L3QsNGPINGH0LDRgdGC0YwgKi9cXG4uZm9yLUlFIHtcXG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gICAgIC1tb3otY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gICAgICAgICAgY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogMTM1MHB4O1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxufVxcblxcbiNibG9jay13cmFwcGVyIHtcXG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gICAgIC1tb3otY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gICAgICAgICAgY29sdW1uLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogMTM1MHB4O1xcbn1cXG5cXG4vKiDQmtCw0YDRgtC+0YfQutCwICovXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcXG4gIC1tb3otY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICAgICAgIGJyZWFrLWluc2lkZTogYXZvaWQtY29sdW1uO1xcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgcGFnZS1icmVhay1iZWZvcmU6IGF2b2lkO1xcbiAgbWFyZ2luOiAzMHB4IDE1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDc5KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzIxMjQyNDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5pdGVtX19kZXNpZ24tZWxlbWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNkZGRkOGY7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uaXRlbV9fbGluayB7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTIwcHg7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5pdGVtX19saW5rOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4ycztcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuMnM7XFxufVxcbi5pdGVtX19saW5rLWEsIC5pdGVtX19kZXNjcmlwdGlvbi1hIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW1hdGljIFNDXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4uaXRlbV9fbGluay1hIHtcXG4gIGJhY2tncm91bmQ6ICMzMDcwOGQ7XFxufVxcbi5pdGVtX19kZXNjcmlwdGlvbi1hIHtcXG4gIGJhY2tncm91bmQ6ICM3NGIzODI7XFxufVxcbi5pdGVtX19saW5rLWE6aG92ZXIsIC5pdGVtX19kZXNjcmlwdGlvbi1hOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6ICMzMDcwOGQ7XFxufVxcbi5pdGVtX19kZXNjcmlwdGlvbiB7XFxuICBib3JkZXItdG9wOiAycHggIzQ2OTljMCBzb2xpZDtcXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDEwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1NXB4KSB7XFxuICAuaXRlbSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDQk9GA0LDQtNC40LXQvdGCICovXFxuI2dyYW5pbS1jYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTM1MHB4KSAvIDIgKyA3MDBweCk7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdG9wOiAtMjAwcHg7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4vKiDQktGB0Y8g0LLQtdGA0YXQvdGP0Y8g0YfQsNGB0YLRjCAqL1xcbi50b3AtYmxvY2sge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi8qINCo0LDQv9C60LAg0LIg0LLQuNC00LUg0LPRgNCw0LTQuNC10L3RgtCwINC4INC30LDQs9C+0LvQvtCy0LrQsCAqL1xcbi5oZWFkZXIge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAzMHB4IDAgMjBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBtYXgtd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMTM1MHB4KSAvIDIgKyA2NzBweCk7XFxuICBmb250LWZhbWlseTogXFxcIkFtYXRpYyBTQ1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkZXItd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmhlYWRlciAuaGVhZGVyX190ZXh0IHtcXG4gIG1hcmdpbjogMzVweCAxNXB4IDMwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMzAwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiDQl9Cw0LzQtdGC0LrQuCDQvtGCINC80LXQvdGPICovXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICNncmFuaW0tY2FudmFzIHtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKCgxMDB2dyAtIDEzNTBweCkgLyAyICsgNzEwcHgpO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIG1heC13aWR0aDogY2FsYygoMTAwdncgLSAxMzUwcHgpIC8gMiArIDcwMHB4KTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWMrU0MmZGlzcGxheT1zd2FwKTtcIiwgXCJcIl0pO1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci5lb3RcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci5lb3RcIikgKyBcIj8jaWVmaXhcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmYyXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIud29mZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLnR0ZlwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLnN2Z1wiKSArIFwiI1JvYm90b1NsYWJcIik7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by1zbGFiLXJlZ3VsYXIgLSBjeXJpbGxpY19sYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IGxvY2FsKFxcXCJSb2JvdG8gU2xhYiBSZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJSb2JvdG9TbGFiLVJlZ3VsYXJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIC8qIExlZ2FjeSBpT1MgKi9cXG59XFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICM0Njk5YzA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICM0Njk5YzA7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0ICcuL2pzL2dyYW5pbS5taW4uanMnO1xyXG5pbXBvcnQgJy4vanMvaW5kZXguanMnO1xyXG5cclxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3NzL2hlYWRlci5zY3NzJztcclxuaW1wb3J0ICcuL3Njc3MvY29udGVudC5zY3NzJzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL3JvYm90by1zbGFiLXY5LWN5cmlsbGljX2xhdGluLXJlZ3VsYXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvcm9ib3RvLXNsYWItdjktY3lyaWxsaWNfbGF0aW4tcmVndWxhci50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9yb2JvdG8tc2xhYi12OS1jeXJpbGxpY19sYXRpbi1yZWd1bGFyLndvZmYyXCI7IiwiLyohIEdyYW5pbSB2Mi4wLjAgLSBodHRwczovL3NhcmNhZGFzcy5naXRodWIuaW8vZ3JhbmltLmpzICovXHJcbiFmdW5jdGlvbiB0KGUsaSxzKXtmdW5jdGlvbiBvKHIsYSl7aWYoIWlbcl0pe2lmKCFlW3JdKXt2YXIgaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFhJiZoKXJldHVybiBoKHIsITApO2lmKG4pcmV0dXJuIG4ociwhMCk7dmFyIGM9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBjLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsY312YXIgbD1pW3JdPXtleHBvcnRzOnt9LH07ZVtyXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbih0KXt2YXIgaT1lW3JdWzFdW3RdO3JldHVybiBvKGk/aTp0KX0sbCxsLmV4cG9ydHMsdCxlLGkscyl9cmV0dXJuIGlbcl0uZXhwb3J0c31mb3IodmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxyPTA7cjxzLmxlbmd0aDtyKyspbyhzW3JdKTtyZXR1cm4gb30oezE6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKHQpe3RoaXMuZ2V0RWxlbWVudCh0LmVsZW1lbnQpLHRoaXMueDE9MCx0aGlzLnkxPTAsdGhpcy5uYW1lPXQubmFtZXx8ITEsdGhpcy5lbFRvU2V0Q2xhc3NPbj10LmVsVG9TZXRDbGFzc09ufHxcImJvZHlcIix0aGlzLmRpcmVjdGlvbj10LmRpcmVjdGlvbnx8XCJkaWFnb25hbFwiLHRoaXMuY3VzdG9tRGlyZWN0aW9uPXQuY3VzdG9tRGlyZWN0aW9ufHx7fSx0aGlzLnZhbGlkYXRlSW5wdXQoXCJkaXJlY3Rpb25cIiksdGhpcy5pc1BhdXNlZFdoZW5Ob3RJblZpZXc9dC5pc1BhdXNlZFdoZW5Ob3RJblZpZXd8fCExLHRoaXMuc3RhdGVzPXQuc3RhdGVzLHRoaXMuc3RhdGVUcmFuc2l0aW9uU3BlZWQ9dC5zdGF0ZVRyYW5zaXRpb25TcGVlZHx8MWUzLHRoaXMucHJldmlvdXNUaW1lU3RhbXA9bnVsbCx0aGlzLnByb2dyZXNzPTAsdGhpcy5pc1BhdXNlZD0hMSx0aGlzLmlzQ2xlYXJlZD0hMSx0aGlzLmlzUGF1c2VkQmVjYXVzZU5vdEluVmlldz0hMSx0aGlzLmNvbnRleHQ9dGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLHRoaXMuY2hhbm5lbHM9e30sdGhpcy5jaGFubmVsc0luZGV4PTAsdGhpcy5hY3RpdmVTdGF0ZT10LmRlZmF1bHRTdGF0ZU5hbWV8fFwiZGVmYXVsdC1zdGF0ZVwiLHRoaXMuaXNDaGFuZ2luZ1N0YXRlPSExLHRoaXMuY3VycmVudENvbG9ycz1bXSx0aGlzLmN1cnJlbnRDb2xvcnNQb3M9W10sdGhpcy5hY3RpdmV0cmFuc2l0aW9uU3BlZWQ9bnVsbCx0aGlzLmV2ZW50UG9seWZpbGwoKSx0aGlzLnNjcm9sbERlYm91bmNlVGhyZXNob2xkPXQuc2Nyb2xsRGVib3VuY2VUaHJlc2hvbGR8fDMwMCx0aGlzLnNjcm9sbERlYm91bmNlVGltZW91dD1udWxsLHRoaXMuaXNJbWdMb2FkZWQ9ITEsdGhpcy5pc0NhbnZhc0luV2luZG93Vmlldz0hMSx0aGlzLmZpcnN0U2Nyb2xsSW5pdD0hMCx0aGlzLmFuaW1hdGluZz0hMSx0aGlzLmdyYWRpZW50TGVuZ3RoPXRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50c1swXS5sZW5ndGgsdC5pbWFnZSYmdC5pbWFnZS5zb3VyY2UmJih0aGlzLmltYWdlPXtzb3VyY2U6dC5pbWFnZS5zb3VyY2UscG9zaXRpb246dC5pbWFnZS5wb3NpdGlvbnx8W1wiY2VudGVyXCIsXCJjZW50ZXJcIixdLHN0cmV0Y2hNb2RlOnQuaW1hZ2Uuc3RyZXRjaE1vZGV8fCExLGJsZW5kaW5nTW9kZTp0LmltYWdlLmJsZW5kaW5nTW9kZXx8ITEsfSksdGhpcy5ldmVudHM9e3N0YXJ0Om5ldyBDdXN0b21FdmVudChcImdyYW5pbTpzdGFydFwiKSxlbmQ6bmV3IEN1c3RvbUV2ZW50KFwiZ3JhbmltOmVuZFwiKSxncmFkaWVudENoYW5nZTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KFwiZ3JhbmltOmdyYWRpZW50Q2hhbmdlXCIse2RldGFpbDp7aXNMb29waW5nOnQuaXNMb29waW5nLGNvbG9yc0Zyb206dC5jb2xvcnNGcm9tLGNvbG9yc1RvOnQuY29sb3JzVG8sYWN0aXZlU3RhdGU6dC5hY3RpdmVTdGF0ZSx9LGJ1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSx9KX0sfSx0aGlzLmNhbGxiYWNrcz17b25TdGFydDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9uU3RhcnQmJnQub25TdGFydCxvbkdyYWRpZW50Q2hhbmdlOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub25HcmFkaWVudENoYW5nZSYmdC5vbkdyYWRpZW50Q2hhbmdlLG9uRW5kOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQub25FbmQmJnQub25FbmQsfSx0aGlzLmdldERpbWVuc2lvbnMoKSx0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHRoaXMueDEpLHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLHRoaXMueTEpLHRoaXMuc2V0Q29sb3JzKCksdGhpcy5pbWFnZSYmKHRoaXMudmFsaWRhdGVJbnB1dChcImltYWdlXCIpLHRoaXMucHJlcGFyZUltYWdlKCkpLHRoaXMucGF1c2VXaGVuTm90SW5WaWV3TmFtZVNwYWNlPXRoaXMucGF1c2VXaGVuTm90SW5WaWV3LmJpbmQodGhpcyksdGhpcy5zZXRTaXplQXR0cmlidXRlc05hbWVTcGFjZT10aGlzLnNldFNpemVBdHRyaWJ1dGVzLmJpbmQodGhpcyksdGhpcy5vblJlc2l6ZSgpLHRoaXMuaXNQYXVzZWRXaGVuTm90SW5WaWV3P3RoaXMub25TY3JvbGwoKTp0aGlzLmltYWdlfHwodGhpcy5yZWZyZXNoQ29sb3JzQW5kUG9zKCksdGhpcy5hbmltYXRpb249cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUNvbG9ycy5iaW5kKHRoaXMpKSx0aGlzLmFuaW1hdGluZz0hMCksdGhpcy5jYWxsYmFja3Mub25TdGFydCYmdGhpcy5jYWxsYmFja3Mub25TdGFydCgpLHRoaXMuY2FudmFzLmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudHMuc3RhcnQpfXMucHJvdG90eXBlLmFuaW1hdGVDb2xvcnM9dChcIi4vYW5pbWF0ZUNvbG9ycy5qc1wiKSxzLnByb3RvdHlwZS5jaGFuZ2VCbGVuZGluZ01vZGU9dChcIi4vY2hhbmdlQmxlbmRpbmdNb2RlLmpzXCIpLHMucHJvdG90eXBlLmNoYW5nZURpcmVjdGlvbj10KFwiLi9jaGFuZ2VEaXJlY3Rpb24uanNcIikscy5wcm90b3R5cGUuY2hhbmdlU3RhdGU9dChcIi4vY2hhbmdlU3RhdGUuanNcIikscy5wcm90b3R5cGUuY2xlYXI9dChcIi4vY2xlYXIuanNcIikscy5wcm90b3R5cGUuY29udmVydENvbG9yVG9SZ2JhPXQoXCIuL2NvbnZlcnRDb2xvclRvUmdiYS5qc1wiKSxzLnByb3RvdHlwZS5kZXN0cm95PXQoXCIuL2Rlc3Ryb3kuanNcIikscy5wcm90b3R5cGUuZXZlbnRQb2x5ZmlsbD10KFwiLi9ldmVudFBvbHlmaWxsLmpzXCIpLHMucHJvdG90eXBlLmdldENvbG9yPXQoXCIuL2dldENvbG9yLmpzXCIpLHMucHJvdG90eXBlLmdldENvbG9yRGlmZj10KFwiLi9nZXRDb2xvckRpZmYuanNcIikscy5wcm90b3R5cGUuZ2V0Q29sb3JQb3M9dChcIi4vZ2V0Q29sb3JQb3MuanNcIikscy5wcm90b3R5cGUuZ2V0Q29sb3JQb3NEaWZmPXQoXCIuL2dldENvbG9yUG9zRGlmZi5qc1wiKSxzLnByb3RvdHlwZS5nZXRDdXJyZW50Q29sb3JzPXQoXCIuL2dldEN1cnJlbnRDb2xvcnMuanNcIikscy5wcm90b3R5cGUuZ2V0Q3VycmVudENvbG9yc1Bvcz10KFwiLi9nZXRDdXJyZW50Q29sb3JzUG9zLmpzXCIpLHMucHJvdG90eXBlLmdldERpbWVuc2lvbnM9dChcIi4vZ2V0RGltZW5zaW9ucy5qc1wiKSxzLnByb3RvdHlwZS5nZXRFbGVtZW50PXQoXCIuL2dldEVsZW1lbnQuanNcIikscy5wcm90b3R5cGUuZ2V0TGlnaHRuZXNzPXQoXCIuL2dldExpZ2h0bmVzcy5qc1wiKSxzLnByb3RvdHlwZS5tYWtlR3JhZGllbnQ9dChcIi4vbWFrZUdyYWRpZW50LmpzXCIpLHMucHJvdG90eXBlLm9uUmVzaXplPXQoXCIuL29uUmVzaXplLmpzXCIpLHMucHJvdG90eXBlLm9uU2Nyb2xsPXQoXCIuL29uU2Nyb2xsLmpzXCIpLHMucHJvdG90eXBlLnBhdXNlPXQoXCIuL3BhdXNlLmpzXCIpLHMucHJvdG90eXBlLnBhdXNlV2hlbk5vdEluVmlldz10KFwiLi9wYXVzZVdoZW5Ob3RJblZpZXcuanNcIikscy5wcm90b3R5cGUucGxheT10KFwiLi9wbGF5LmpzXCIpLHMucHJvdG90eXBlLnByZXBhcmVJbWFnZT10KFwiLi9wcmVwYXJlSW1hZ2UuanNcIikscy5wcm90b3R5cGUucmVmcmVzaENvbG9yc0FuZFBvcz10KFwiLi9yZWZyZXNoQ29sb3JzQW5kUG9zLmpzXCIpLHMucHJvdG90eXBlLnNldENvbG9ycz10KFwiLi9zZXRDb2xvcnMuanNcIikscy5wcm90b3R5cGUuc2V0RGlyZWN0aW9uPXQoXCIuL3NldERpcmVjdGlvbi5qc1wiKSxzLnByb3RvdHlwZS5zZXRTaXplQXR0cmlidXRlcz10KFwiLi9zZXRTaXplQXR0cmlidXRlcy5qc1wiKSxzLnByb3RvdHlwZS50cmlnZ2VyRXJyb3I9dChcIi4vdHJpZ2dlckVycm9yLmpzXCIpLHMucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQ9dChcIi4vdmFsaWRhdGVJbnB1dC5qc1wiKSxlLmV4cG9ydHM9c30se1wiLi9hbmltYXRlQ29sb3JzLmpzXCI6MixcIi4vY2hhbmdlQmxlbmRpbmdNb2RlLmpzXCI6MyxcIi4vY2hhbmdlRGlyZWN0aW9uLmpzXCI6NCxcIi4vY2hhbmdlU3RhdGUuanNcIjo1LFwiLi9jbGVhci5qc1wiOjYsXCIuL2NvbnZlcnRDb2xvclRvUmdiYS5qc1wiOjcsXCIuL2Rlc3Ryb3kuanNcIjo4LFwiLi9ldmVudFBvbHlmaWxsLmpzXCI6OSxcIi4vZ2V0Q29sb3IuanNcIjoxMCxcIi4vZ2V0Q29sb3JEaWZmLmpzXCI6MTEsXCIuL2dldENvbG9yUG9zLmpzXCI6MTIsXCIuL2dldENvbG9yUG9zRGlmZi5qc1wiOjEzLFwiLi9nZXRDdXJyZW50Q29sb3JzLmpzXCI6MTQsXCIuL2dldEN1cnJlbnRDb2xvcnNQb3MuanNcIjoxNSxcIi4vZ2V0RGltZW5zaW9ucy5qc1wiOjE2LFwiLi9nZXRFbGVtZW50LmpzXCI6MTcsXCIuL2dldExpZ2h0bmVzcy5qc1wiOjE4LFwiLi9tYWtlR3JhZGllbnQuanNcIjoxOSxcIi4vb25SZXNpemUuanNcIjoyMCxcIi4vb25TY3JvbGwuanNcIjoyMSxcIi4vcGF1c2UuanNcIjoyMixcIi4vcGF1c2VXaGVuTm90SW5WaWV3LmpzXCI6MjMsXCIuL3BsYXkuanNcIjoyNCxcIi4vcHJlcGFyZUltYWdlLmpzXCI6MjUsXCIuL3JlZnJlc2hDb2xvcnNBbmRQb3MuanNcIjoyNixcIi4vc2V0Q29sb3JzLmpzXCI6MjcsXCIuL3NldERpcmVjdGlvbi5qc1wiOjI4LFwiLi9zZXRTaXplQXR0cmlidXRlcy5qc1wiOjI5LFwiLi90cmlnZ2VyRXJyb3IuanNcIjozMCxcIi4vdmFsaWRhdGVJbnB1dC5qc1wiOjMxLH0sXSwyOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLGkscyxvPXQtdGhpcy5wcmV2aW91c1RpbWVTdGFtcD4xMDAsbj12b2lkIDA9PT10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5sb29wfHx0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5sb29wOyhudWxsPT09dGhpcy5wcmV2aW91c1RpbWVTdGFtcHx8bykmJih0aGlzLnByZXZpb3VzVGltZVN0YW1wPXQpLHRoaXMucHJvZ3Jlc3M9dGhpcy5wcm9ncmVzcysodC10aGlzLnByZXZpb3VzVGltZVN0YW1wKSxlPSh0aGlzLnByb2dyZXNzL3RoaXMuYWN0aXZldHJhbnNpdGlvblNwZWVkKjEwMCkudG9GaXhlZCgyKSx0aGlzLnByZXZpb3VzVGltZVN0YW1wPXQsdGhpcy5yZWZyZXNoQ29sb3JzQW5kUG9zKGUpLGU8MTAwP3RoaXMuYW5pbWF0aW9uPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVDb2xvcnMuYmluZCh0aGlzKSk6dGhpcy5jaGFubmVsc0luZGV4PHRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50cy5sZW5ndGgtMnx8bj8odGhpcy5pc0NoYW5naW5nU3RhdGUmJih0aGlzLmFjdGl2ZXRyYW5zaXRpb25TcGVlZD10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS50cmFuc2l0aW9uU3BlZWR8fDVlMyx0aGlzLmlzQ2hhbmdpbmdTdGF0ZT0hMSksdGhpcy5wcmV2aW91c1RpbWVTdGFtcD1udWxsLHRoaXMucHJvZ3Jlc3M9MCx0aGlzLmNoYW5uZWxzSW5kZXgrKyxpPSExLHRoaXMuY2hhbm5lbHNJbmRleD09PXRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50cy5sZW5ndGgtMT9pPSEwOnRoaXMuY2hhbm5lbHNJbmRleD09PXRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50cy5sZW5ndGgmJih0aGlzLmNoYW5uZWxzSW5kZXg9MCkscz12b2lkIDA9PT10aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbdGhpcy5jaGFubmVsc0luZGV4KzFdP3RoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50c1swXTp0aGlzLnN0YXRlc1t0aGlzLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbdGhpcy5jaGFubmVsc0luZGV4KzFdLHRoaXMuc2V0Q29sb3JzKCksdGhpcy5hbmltYXRpb249cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZUNvbG9ycy5iaW5kKHRoaXMpKSx0aGlzLmNhbGxiYWNrcy5vbkdyYWRpZW50Q2hhbmdlJiZ0aGlzLmNhbGxiYWNrcy5vbkdyYWRpZW50Q2hhbmdlKHtpc0xvb3Bpbmc6aSxjb2xvcnNGcm9tOnRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50c1t0aGlzLmNoYW5uZWxzSW5kZXhdLGNvbG9yc1RvOnMsYWN0aXZlU3RhdGU6dGhpcy5hY3RpdmVTdGF0ZSx9KSx0aGlzLmNhbnZhcy5kaXNwYXRjaEV2ZW50KHRoaXMuZXZlbnRzLmdyYWRpZW50Q2hhbmdlKHtpc0xvb3Bpbmc6aSxjb2xvcnNGcm9tOnRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50c1t0aGlzLmNoYW5uZWxzSW5kZXhdLGNvbG9yc1RvOnMsYWN0aXZlU3RhdGU6dGhpcy5hY3RpdmVTdGF0ZSx9KSkpOihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbiksdGhpcy5jYWxsYmFja3Mub25FbmQmJnRoaXMuY2FsbGJhY2tzLm9uRW5kKCksdGhpcy5jYW52YXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJncmFuaW06ZW5kXCIpKSl9fSx7fSxdLDM6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy54MSx0aGlzLnkxKSx0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPXRoaXMuaW1hZ2UuYmxlbmRpbmdNb2RlPXQsdGhpcy52YWxpZGF0ZUlucHV0KFwiYmxlbmRpbmdNb2RlXCIpLHRoaXMuaXNQYXVzZWQmJnRoaXMucmVmcmVzaENvbG9yc0FuZFBvcygpfX0se30sXSw0OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3RoaXMuY29udGV4dC5jbGVhclJlY3QoMCwwLHRoaXMueDEsdGhpcy55MSksdGhpcy5kaXJlY3Rpb249dCx0aGlzLnZhbGlkYXRlSW5wdXQoXCJkaXJlY3Rpb25cIiksdGhpcy5pc1BhdXNlZCYmdGhpcy5yZWZyZXNoQ29sb3JzQW5kUG9zKCl9fSx7fSxdLDU6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLmFjdGl2ZVN0YXRlIT09dCYmKHRoaXMuaXNQYXVzZWR8fCh0aGlzLmlzUGF1c2VkPSEwLHRoaXMucGF1c2UoKSksdGhpcy5jaGFubmVsc0luZGV4PS0xLHRoaXMuYWN0aXZldHJhbnNpdGlvblNwZWVkPXRoaXMuc3RhdGVUcmFuc2l0aW9uU3BlZWQsdGhpcy5hY3RpdmVDb2xvcnNEaWZmPVtdLHRoaXMuYWN0aXZlQ29sb3JzUG9zRGlmZj1bXSx0aGlzLmFjdGl2ZUNvbG9ycz10aGlzLmdldEN1cnJlbnRDb2xvcnMoKSx0aGlzLmFjdGl2ZUNvbG9yc1Bvcz10aGlzLmdldEN1cnJlbnRDb2xvcnNQb3MoKSx0aGlzLnByb2dyZXNzPTAsdGhpcy5wcmV2aW91c1RpbWVTdGFtcD1udWxsLHRoaXMuaXNDaGFuZ2luZ1N0YXRlPSEwLHRoaXMuc3RhdGVzW3RdLmdyYWRpZW50c1swXS5mb3JFYWNoKGZ1bmN0aW9uKHQsaSxzKXt2YXIgbz1lLmNvbnZlcnRDb2xvclRvUmdiYShlLmdldENvbG9yKHQpKSxuPWUuZ2V0Q29sb3JQb3ModCxpKSxyPWUuZ2V0Q29sb3JEaWZmKGUuYWN0aXZlQ29sb3JzW2ldLG8pLGE9ZS5nZXRDb2xvclBvc0RpZmYoZS5hY3RpdmVDb2xvcnNQb3NbaV0sbik7ZS5hY3RpdmVDb2xvcnNEaWZmLnB1c2gociksZS5hY3RpdmVDb2xvcnNQb3NEaWZmLnB1c2goYSl9KSx0aGlzLmFjdGl2ZVN0YXRlPXQsdGhpcy5wbGF5KCkpfX0se30sXSw2OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5pc1BhdXNlZD90aGlzLmlzUGF1c2VkPSExOmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKSx0aGlzLmlzQ2xlYXJlZD0hMCx0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCx0aGlzLngxLHRoaXMueTEpfX0se30sXSw3OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyh0KXt2YXIgZT1PYmplY3Qua2V5cyhoKSxpPTA7Zm9yKGk7aTxlLmxlbmd0aDtpKyspaWYoYT1oW2VbaV1dLmV4ZWModCkpcmV0dXJuIGVbaV07cmV0dXJuITF9ZnVuY3Rpb24gbyh0KXt2YXIgZT0vXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO3Q9dC5yZXBsYWNlKGUsZnVuY3Rpb24odCxlLGkscyl7cmV0dXJuIGUrZStpK2krcytzfSk7dmFyIGk9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKHQpO3JldHVybiBpP1twYXJzZUludChpWzFdLDE2KSxwYXJzZUludChpWzJdLDE2KSxwYXJzZUludChpWzNdLDE2KSwxLF06bnVsbH1mdW5jdGlvbiBuKHQsZSxpKXtyZXR1cm4gaTwwJiYoaSs9MSksaT4xJiYoaS09MSksaTwxLzY/dCs2KihlLXQpKmk6aTwuNT9lOmk8Mi8zP3QrKGUtdCkqKDIvMy1pKSo2OnR9ZnVuY3Rpb24gcih0LGUsaSxzKXt2YXIgbyxyLGEsaCxjO3JldHVybiAwPT09ZT9vPXI9YT1pOihoPWk8LjU/aSooMStlKTppK2UtaSplLGM9MippLWgsbz1uKGMsaCx0KzEvMykscj1uKGMsaCx0KSxhPW4oYyxoLHQtMS8zKSksW01hdGgucm91bmQoMjU1Km8pLE1hdGgucm91bmQoMjU1KnIpLE1hdGgucm91bmQoMjU1KmEpLHMsXX12YXIgYSxoPXtoZXhhOi9eIyg/OlswLTlhLWZBLUZdezN9KXsxLDJ9JC8scmdiYTovXnJnYmFcXCgoXFxkezEsM30pLCA/KFxcZHsxLDN9KSwgPyhcXGR7MSwzfSksID8oLj9cXGR7MSwzfSlcXCkkLyxyZ2I6L15yZ2JcXCgoXFxkezEsM30pLCA/KFxcZHsxLDN9KSwgPyhcXGR7MSwzfSlcXCkkLyxoc2xhOi9eaHNsYVxcKChcXGR7MSwzfSksID8oXFxkezEsM30pJSwgPyhcXGR7MSwzfSklLCA/KC4/XFxkezEsM30pXFwpJC8saHNsOi9eaHNsXFwoKFxcZHsxLDN9KSwgPyhcXGR7MSwzfSklLCA/KFxcZHsxLDN9KSVcXCkkLyx9O2UuZXhwb3J0cz1mdW5jdGlvbih0KXtzd2l0Y2gocyh0KSl7ZGVmYXVsdDp0aGlzLnRyaWdnZXJFcnJvcihcImNvbG9yVHlwZVwiKTtjYXNlXCJoZXhhXCI6cmV0dXJuIG8odCk7Y2FzZVwicmdiYVwiOnJldHVybltwYXJzZUludChhWzFdLDEwKSxwYXJzZUludChhWzJdLDEwKSxwYXJzZUludChhWzNdLDEwKSxwYXJzZUZsb2F0KGFbNF0pLF07Y2FzZVwicmdiXCI6cmV0dXJuW3BhcnNlSW50KGFbMV0sMTApLHBhcnNlSW50KGFbMl0sMTApLHBhcnNlSW50KGFbM10sMTApLDEsXTtjYXNlXCJoc2xhXCI6cmV0dXJuIHIocGFyc2VJbnQoYVsxXSwxMCkvMzYwLHBhcnNlSW50KGFbMl0sMTApLzEwMCxwYXJzZUludChhWzNdLDEwKS8xMDAscGFyc2VGbG9hdChhWzRdKSk7Y2FzZVwiaHNsXCI6cmV0dXJuIHIocGFyc2VJbnQoYVsxXSwxMCkvMzYwLHBhcnNlSW50KGFbMl0sMTApLzEwMCxwYXJzZUludChhWzNdLDEwKS8xMDAsMSl9fX0se30sXSw4OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5vblJlc2l6ZShcInJlbW92ZUxpc3RlbmVyc1wiKSx0aGlzLm9uU2Nyb2xsKFwicmVtb3ZlTGlzdGVuZXJzXCIpLHRoaXMuY2xlYXIoKX19LHt9LF0sOTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtlPWV8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMCx9O3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KHQsZS5idWJibGVzLGUuY2FuY2VsYWJsZSxlLmRldGFpbCksaX1cImZ1bmN0aW9uXCIhPXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQmJih0LnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlLHdpbmRvdy5DdXN0b21FdmVudD10KX19LHt9LF0sMTA6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDpcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5jb2xvcj90LmNvbG9yOnZvaWQgdGhpcy50cmlnZ2VyRXJyb3IoXCJncmFkaWVudC5jb2xvclwiKX19LHt9LF0sMTE6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgaT0wLHM9W107Zm9yKGk7aTw0O2krKylzLnB1c2goZVtpXS10W2ldKTtyZXR1cm4gc319LHt9LF0sMTI6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdCYmdC5wb3M/dC5wb3M6cGFyc2VGbG9hdChlPygxLyh0aGlzLmdyYWRpZW50TGVuZ3RoLTEpKmUpLnRvRml4ZWQoMik6MCl9fSx7fSxdLDEzOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUtdH19LHt9LF0sMTQ6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdCxlLGk9W107Zm9yKHQ9MDt0PHRoaXMuY3VycmVudENvbG9ycy5sZW5ndGg7dCsrKWZvcihpLnB1c2goW10pLGU9MDtlPDQ7ZSsrKWlbdF0ucHVzaCh0aGlzLmN1cnJlbnRDb2xvcnNbdF1bZV0pO3JldHVybiBpfX0se30sXSwxNTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0LGU9W107Zm9yKHQ9MDt0PHRoaXMuY3VycmVudENvbG9yc1Bvcy5sZW5ndGg7dCsrKWUucHVzaCh0aGlzLmN1cnJlbnRDb2xvcnNQb3NbdF0pO3JldHVybiBlfX0se30sXSwxNjpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMueDE9dGhpcy5jYW52YXMub2Zmc2V0V2lkdGgsdGhpcy55MT10aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHR9fSx7fSxdLDE3OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCl0aGlzLmNhbnZhcz10O2Vsc2V7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGVsZW1lbnQgeW91IHVzZWQgaXMgbmVpdGhlciBhIFN0cmluZywgbm9yIGEgSFRNTENhbnZhc0VsZW1lbnRcIik7dGhpcy5jYW52YXM9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KX1pZighdGhpcy5jYW52YXMpdGhyb3cgbmV3IEVycm9yKFwiYFwiK3QrXCJgIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgRE9NXCIpfX0se30sXSwxODpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0LGUsaT10aGlzLmdldEN1cnJlbnRDb2xvcnMoKSxzPW51bGwsbz1pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5tYXgodFswXSx0WzFdLHRbMl0pfSk7Zm9yKGU9MDtlPG8ubGVuZ3RoO2UrKylzPW51bGw9PT1zP29bZV06cytvW2VdLGU9PT1vLmxlbmd0aC0xJiYodD1NYXRoLnJvdW5kKHMvKGUrMSkpKTtyZXR1cm4gdD49MTI4P1wibGlnaHRcIjpcImRhcmtcIn19LHt9LF0sMTk6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnNldERpcmVjdGlvbigpLGU9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmVsVG9TZXRDbGFzc09uKS5jbGFzc0xpc3QsaT0wO2Zvcih0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsMCx0aGlzLngxLHRoaXMueTEpLHRoaXMuaW1hZ2UmJnRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZU5vZGUsdGhpcy5pbWFnZVBvc2l0aW9uLngsdGhpcy5pbWFnZVBvc2l0aW9uLnksdGhpcy5pbWFnZVBvc2l0aW9uLndpZHRoLHRoaXMuaW1hZ2VQb3NpdGlvbi5oZWlnaHQpLGk7aTx0aGlzLmN1cnJlbnRDb2xvcnMubGVuZ3RoO2krKyl0LmFkZENvbG9yU3RvcCh0aGlzLmN1cnJlbnRDb2xvcnNQb3NbaV0sXCJyZ2JhKFwiK3RoaXMuY3VycmVudENvbG9yc1tpXVswXStcIiwgXCIrdGhpcy5jdXJyZW50Q29sb3JzW2ldWzFdK1wiLCBcIit0aGlzLmN1cnJlbnRDb2xvcnNbaV1bMl0rXCIsIFwiK3RoaXMuY3VycmVudENvbG9yc1tpXVszXStcIilcIik7dGhpcy5uYW1lJiYoXCJsaWdodFwiPT09dGhpcy5nZXRMaWdodG5lc3MoKT8oZS5yZW1vdmUodGhpcy5uYW1lK1wiLWRhcmtcIiksZS5hZGQodGhpcy5uYW1lK1wiLWxpZ2h0XCIpKTooZS5yZW1vdmUodGhpcy5uYW1lK1wiLWxpZ2h0XCIpLGUuYWRkKHRoaXMubmFtZStcIi1kYXJrXCIpKSksdGhpcy5jb250ZXh0LmZpbGxTdHlsZT10LHRoaXMuY29udGV4dC5maWxsUmVjdCgwLDAsdGhpcy54MSx0aGlzLnkxKX19LHt9LF0sMjA6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJyZW1vdmVMaXN0ZW5lcnNcIj09PXQ/dm9pZCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuc2V0U2l6ZUF0dHJpYnV0ZXNOYW1lU3BhY2UpOnZvaWQgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnNldFNpemVBdHRyaWJ1dGVzTmFtZVNwYWNlKX19LHt9LF0sMjE6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJyZW1vdmVMaXN0ZW5lcnNcIj09PXQ/dm9pZCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMucGF1c2VXaGVuTm90SW5WaWV3TmFtZVNwYWNlKTood2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLnBhdXNlV2hlbk5vdEluVmlld05hbWVTcGFjZSksdm9pZCB0aGlzLnBhdXNlV2hlbk5vdEluVmlld05hbWVTcGFjZSgpKX19LHt9LF0sMjI6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJpc1BhdXNlZEJlY2F1c2VOb3RJblZpZXdcIj09PXQ7dGhpcy5pc0NsZWFyZWR8fChlfHwodGhpcy5pc1BhdXNlZD0hMCksY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pLHRoaXMuYW5pbWF0aW5nPSExKX19LHt9LF0sMjM6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuc2Nyb2xsRGVib3VuY2VUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxEZWJvdW5jZVRpbWVvdXQpLHRoaXMuc2Nyb2xsRGVib3VuY2VUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT10LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZih0LmlzQ2FudmFzSW5XaW5kb3dWaWV3PSEoZS5ib3R0b208MHx8ZS5yaWdodDwwfHxlLmxlZnQ+d2luZG93LmlubmVyV2lkdGh8fGUudG9wPndpbmRvdy5pbm5lckhlaWdodCksdC5pc0NhbnZhc0luV2luZG93Vmlldyl7aWYoIXQuaXNQYXVzZWR8fHQuZmlyc3RTY3JvbGxJbml0KXtpZih0LmltYWdlJiYhdC5pc0ltZ0xvYWRlZClyZXR1cm47dC5pc1BhdXNlZEJlY2F1c2VOb3RJblZpZXc9ITEsdC5wbGF5KFwiaXNQbGF5ZWRCZWNhdXNlSW5WaWV3XCIpLHQuZmlyc3RTY3JvbGxJbml0PSExfX1lbHNlIXQuaW1hZ2UmJnQuZmlyc3RTY3JvbGxJbml0JiYodC5yZWZyZXNoQ29sb3JzQW5kUG9zKCksdC5maXJzdFNjcm9sbEluaXQ9ITEpLHQuaXNQYXVzZWR8fHQuaXNQYXVzZWRCZWNhdXNlTm90SW5WaWV3fHwodC5pc1BhdXNlZEJlY2F1c2VOb3RJblZpZXc9ITAsdC5wYXVzZShcImlzUGF1c2VkQmVjYXVzZU5vdEluVmlld1wiKSl9LHRoaXMuc2Nyb2xsRGVib3VuY2VUaHJlc2hvbGQpfX0se30sXSwyNDpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1cImlzUGxheWVkQmVjYXVzZUluVmlld1wiPT09dDtlfHwodGhpcy5pc1BhdXNlZD0hMSksdGhpcy5pc0NsZWFyZWQ9ITEsdGhpcy5hbmltYXRpbmd8fCh0aGlzLmFuaW1hdGlvbj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlQ29sb3JzLmJpbmQodGhpcykpLHRoaXMuYW5pbWF0aW5nPSEwKX19LHt9LF0sMjU6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7ZnVuY3Rpb24gdCh0KXt2YXIgaSxzPWVbdCtcIjFcIl0sbz1lW1wieFwiPT09dD9cImltZ09yaWdpbmFsV2lkdGhcIjpcImltZ09yaWdpbmFsSGVpZ2h0XCJdLG49XCJ4XCI9PT10P2UuaW1hZ2UucG9zaXRpb25bMF06ZS5pbWFnZS5wb3NpdGlvblsxXTtzd2l0Y2gobil7Y2FzZVwiY2VudGVyXCI6aT1vPnM/LShvLXMpLzI6KHMtbykvMixlLmltYWdlUG9zaXRpb25bdF09aSxlLmltYWdlUG9zaXRpb25bXCJ4XCI9PT10P1wid2lkdGhcIjpcImhlaWdodFwiXT1vO2JyZWFrO2Nhc2VcInRvcFwiOmUuaW1hZ2VQb3NpdGlvbi55PTAsZS5pbWFnZVBvc2l0aW9uLmhlaWdodD1vO2JyZWFrO2Nhc2VcImJvdHRvbVwiOmUuaW1hZ2VQb3NpdGlvbi55PXMtbyxlLmltYWdlUG9zaXRpb24uaGVpZ2h0PW87YnJlYWs7Y2FzZVwicmlnaHRcIjplLmltYWdlUG9zaXRpb24ueD1zLW8sZS5pbWFnZVBvc2l0aW9uLndpZHRoPW87YnJlYWs7Y2FzZVwibGVmdFwiOmUuaW1hZ2VQb3NpdGlvbi54PTAsZS5pbWFnZVBvc2l0aW9uLndpZHRoPW99aWYoZS5pbWFnZS5zdHJldGNoTW9kZSlzd2l0Y2gobj1cInhcIj09PXQ/ZS5pbWFnZS5zdHJldGNoTW9kZVswXTplLmltYWdlLnN0cmV0Y2hNb2RlWzFdKXtjYXNlXCJub25lXCI6YnJlYWs7Y2FzZVwic3RyZXRjaFwiOmUuaW1hZ2VQb3NpdGlvblt0XT0wLGUuaW1hZ2VQb3NpdGlvbltcInhcIj09PXQ/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPXM7YnJlYWs7Y2FzZVwic3RyZXRjaC1pZi1iaWdnZXJcIjppZihvPHMpYnJlYWs7ZS5pbWFnZVBvc2l0aW9uW3RdPTAsZS5pbWFnZVBvc2l0aW9uW1wieFwiPT09dD9cIndpZHRoXCI6XCJoZWlnaHRcIl09czticmVhaztjYXNlXCJzdHJldGNoLWlmLXNtYWxsZXJcIjppZihvPnMpYnJlYWs7ZS5pbWFnZVBvc2l0aW9uW3RdPTAsZS5pbWFnZVBvc2l0aW9uW1wieFwiPT09dD9cIndpZHRoXCI6XCJoZWlnaHRcIl09c319dmFyIGkscztmb3IoaT0wO2k8MjtpKyspcz1pP1wieVwiOlwieFwiLHQocyl9dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5pbWFnZVBvc2l0aW9ufHwodGhpcy5pbWFnZVBvc2l0aW9uPXt4OjAseTowLHdpZHRoOjAsaGVpZ2h0OjAsfSksdGhpcy5pbWFnZS5ibGVuZGluZ01vZGUmJih0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPXRoaXMuaW1hZ2UuYmxlbmRpbmdNb2RlKSx0aGlzLmltYWdlTm9kZT92b2lkIHQoKToodGhpcy5pbWFnZU5vZGU9bmV3IEltYWdlLHRoaXMuaW1hZ2VOb2RlLm9uZXJyb3I9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJHcmFuaW06IFRoZSBpbWFnZSBzb3VyY2UgaXMgaW52YWxpZC5cIil9LHRoaXMuaW1hZ2VOb2RlLm9ubG9hZD1mdW5jdGlvbigpe2UuaW1nT3JpZ2luYWxXaWR0aD1lLmltYWdlTm9kZS53aWR0aCxlLmltZ09yaWdpbmFsSGVpZ2h0PWUuaW1hZ2VOb2RlLmhlaWdodCx0KCksZS5yZWZyZXNoQ29sb3JzQW5kUG9zKCksZS5pc1BhdXNlZFdoZW5Ob3RJblZpZXcmJiFlLmlzQ2FudmFzSW5XaW5kb3dWaWV3fHwoZS5hbmltYXRpb249cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUuYW5pbWF0ZUNvbG9ycy5iaW5kKGUpKSksZS5pc0ltZ0xvYWRlZD0hMH0sdm9pZCh0aGlzLmltYWdlTm9kZS5zcmM9dGhpcy5pbWFnZS5zb3VyY2UpKX19LHt9LF0sMjY6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsaSxzLG8sbj10aGlzO2ZvcihzPTA7czx0aGlzLmFjdGl2ZUNvbG9ycy5sZW5ndGg7cysrKXtmb3Iobz0wO288NDtvKyspZT1uLmFjdGl2ZUNvbG9yc1tzXVtvXSsoMyE9PW8/TWF0aC5jZWlsKG4uYWN0aXZlQ29sb3JzRGlmZltzXVtvXS8xMDAqdCk6TWF0aC5yb3VuZChuLmFjdGl2ZUNvbG9yc0RpZmZbc11bb10vMTAwKnQqMTAwKS8xMDApLGU8PTI1NSYmZT49MCYmKG4uY3VycmVudENvbG9yc1tzXVtvXT1lKTtpPXBhcnNlRmxvYXQoKG4uYWN0aXZlQ29sb3JzUG9zW3NdK24uYWN0aXZlQ29sb3JzUG9zRGlmZltzXS8xMDAqdCkudG9GaXhlZCg0KSksaTw9MSYmaT49MCYmKG4uY3VycmVudENvbG9yc1Bvc1tzXT1pKX10aGlzLm1ha2VHcmFkaWVudCgpfX0se30sXSwyNzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0LGUsaSxzLG89dGhpcztyZXR1cm4gdGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXXx8KHRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV09W10pLHZvaWQgMCE9PXRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XT8odGhpcy5hY3RpdmVDb2xvcnM9dGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9ycyx0aGlzLmFjdGl2ZUNvbG9yc0RpZmY9dGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc0RpZmYsdGhpcy5hY3RpdmVDb2xvcnNQb3M9dGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvcyx2b2lkKHRoaXMuYWN0aXZlQ29sb3JzUG9zRGlmZj10aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdW3RoaXMuY2hhbm5lbHNJbmRleF0uY29sb3JzUG9zRGlmZikpOih0aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdLnB1c2goW3t9LF0pLHRoaXMuY2hhbm5lbHNbdGhpcy5hY3RpdmVTdGF0ZV1bdGhpcy5jaGFubmVsc0luZGV4XS5jb2xvcnM9W10sdGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc0RpZmY9W10sdGhpcy5jaGFubmVsc1t0aGlzLmFjdGl2ZVN0YXRlXVt0aGlzLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvcz1bXSx0aGlzLmNoYW5uZWxzW3RoaXMuYWN0aXZlU3RhdGVdW3RoaXMuY2hhbm5lbHNJbmRleF0uY29sb3JzUG9zRGlmZj1bXSx0aGlzLmFjdGl2ZUNvbG9ycz1bXSx0aGlzLmFjdGl2ZUNvbG9yc0RpZmY9W10sdGhpcy5hY3RpdmVDb2xvcnNQb3M9W10sdGhpcy5hY3RpdmVDb2xvcnNQb3NEaWZmPVtdLHRoaXMuc3RhdGVzW3RoaXMuYWN0aXZlU3RhdGVdLmdyYWRpZW50c1t0aGlzLmNoYW5uZWxzSW5kZXhdLmZvckVhY2goZnVuY3Rpb24obixyKXt2YXIgYT1vLmdldENvbG9yUG9zKG4sciksbj1vLmdldENvbG9yKG4pLGg9by5jb252ZXJ0Q29sb3JUb1JnYmEobiksYz1vLmNoYW5uZWxzW28uYWN0aXZlU3RhdGVdO2Nbby5jaGFubmVsc0luZGV4XS5jb2xvcnMucHVzaChoKSxvLmFjdGl2ZUNvbG9ycy5wdXNoKGgpLGNbby5jaGFubmVsc0luZGV4XS5jb2xvcnNQb3MucHVzaChhKSxvLmFjdGl2ZUNvbG9yc1Bvcy5wdXNoKGEpLG8uaXNDdXJyZW50Q29sb3JzU2V0fHwoby5jdXJyZW50Q29sb3JzLnB1c2goby5jb252ZXJ0Q29sb3JUb1JnYmEobikpLG8uY3VycmVudENvbG9yc1Bvcy5wdXNoKGEpKSxvLmNoYW5uZWxzSW5kZXg9PT1vLnN0YXRlc1tvLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHMubGVuZ3RoLTE/KHQ9by5nZXRDb2xvckRpZmYoY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1tyXSxjWzBdLmNvbG9yc1tyXSksZT1vLmdldENvbG9yUG9zRGlmZihjW28uY2hhbm5lbHNJbmRleF0uY29sb3JzUG9zW3JdLGNbMF0uY29sb3JzUG9zW3JdKSk6KGk9by5jb252ZXJ0Q29sb3JUb1JnYmEoby5nZXRDb2xvcihvLnN0YXRlc1tvLmFjdGl2ZVN0YXRlXS5ncmFkaWVudHNbby5jaGFubmVsc0luZGV4KzFdW3JdKSkscz1vLmdldENvbG9yUG9zKG8uc3RhdGVzW28uYWN0aXZlU3RhdGVdLmdyYWRpZW50c1tvLmNoYW5uZWxzSW5kZXgrMV1bcl0sciksdD1vLmdldENvbG9yRGlmZihjW28uY2hhbm5lbHNJbmRleF0uY29sb3JzW3JdLGkpLGU9by5nZXRDb2xvclBvc0RpZmYoY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc1Bvc1tyXSxzKSksY1tvLmNoYW5uZWxzSW5kZXhdLmNvbG9yc0RpZmYucHVzaCh0KSxvLmFjdGl2ZUNvbG9yc0RpZmYucHVzaCh0KSxjW28uY2hhbm5lbHNJbmRleF0uY29sb3JzUG9zRGlmZi5wdXNoKGUpLG8uYWN0aXZlQ29sb3JzUG9zRGlmZi5wdXNoKGUpfSksdGhpcy5hY3RpdmV0cmFuc2l0aW9uU3BlZWQ9dGhpcy5zdGF0ZXNbdGhpcy5hY3RpdmVTdGF0ZV0udHJhbnNpdGlvblNwZWVkfHw1ZTMsdm9pZCh0aGlzLmlzQ3VycmVudENvbG9yc1NldD0hMCkpfX0se30sXSwyODpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCxlKXtyZXR1cm4gdC5pbmRleE9mKFwiJVwiKT4tMT9lLzEwMCpwYXJzZUludCh0LnNwbGl0KFwiJVwiKVswXSwxMCk6cGFyc2VJbnQodC5zcGxpdChcInB4XCIpWzBdLDEwKX1lLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNvbnRleHQ7c3dpdGNoKHRoaXMuZGlyZWN0aW9uKXtjYXNlXCJkaWFnb25hbFwiOnJldHVybiB0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCx0aGlzLngxLHRoaXMueTEpO2Nhc2VcImxlZnQtcmlnaHRcIjpyZXR1cm4gdC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsdGhpcy54MSwwKTtjYXNlXCJ0b3AtYm90dG9tXCI6cmV0dXJuIHQuY3JlYXRlTGluZWFyR3JhZGllbnQodGhpcy54MS8yLDAsdGhpcy54MS8yLHRoaXMueTEpO2Nhc2VcInJhZGlhbFwiOnJldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMueDEvMix0aGlzLnkxLzIsdGhpcy54MS8yLHRoaXMueDEvMix0aGlzLnkxLzIsMCk7Y2FzZVwiY3VzdG9tXCI6cmV0dXJuIHQuY3JlYXRlTGluZWFyR3JhZGllbnQocyh0aGlzLmN1c3RvbURpcmVjdGlvbi54MCx0aGlzLngxKSxzKHRoaXMuY3VzdG9tRGlyZWN0aW9uLnkwLHRoaXMueTEpLHModGhpcy5jdXN0b21EaXJlY3Rpb24ueDEsdGhpcy54MSkscyh0aGlzLmN1c3RvbURpcmVjdGlvbi55MSx0aGlzLnkxKSl9fX0se30sXSwyOTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuZ2V0RGltZW5zaW9ucygpLHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsdGhpcy54MSksdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsdGhpcy55MSksdGhpcy5pbWFnZSYmdGhpcy5wcmVwYXJlSW1hZ2UoKSx0aGlzLnJlZnJlc2hDb2xvcnNBbmRQb3MoKX19LHt9LF0sMzA6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJodHRwczovL3NhcmNhZGFzcy5naXRodWIuaW8vZ3JhbmltLmpzL2FwaS5odG1sXCI7dGhyb3cgbmV3IEVycm9yKCdHcmFuaW06IElucHV0IGVycm9yIG9uIFwiJyt0KydcIiBvcHRpb24uXFxuQ2hlY2sgdGhlIEFQSSAnK2UrXCIuXCIpfX0se30sXSwzMTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCl7Zm9yKHZhciBlLGk9ITAscz0wO2kmJnM8dC5sZW5ndGg7KXtpZihlPXRbc10sXCJzdHJpbmdcIiE9dHlwZW9mIGUpaT0hMTtlbHNle3ZhciBvPW51bGwsbj1udWxsO2UuaW5kZXhPZihcInB4XCIpIT09LTEmJihuPVwicHhcIiksZS5pbmRleE9mKFwiJVwiKSE9PS0xJiYobj1cIiVcIiksbz1lLnNwbGl0KG4pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGg+MH0pLCghbnx8by5sZW5ndGg+Mnx8IW9bMF18fG9bMV18fCEvXi0/XFxkK1xcLj9cXGQqJC8udGVzdChvWzBdKSkmJihpPSExKX1zKyt9cmV0dXJuIGl9ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVtcImxlZnRcIixcImNlbnRlclwiLFwicmlnaHRcIixdLGk9W1widG9wXCIsXCJjZW50ZXJcIixcImJvdHRvbVwiLF0sbz1bXCJub25lXCIsXCJzdHJldGNoXCIsXCJzdHJldGNoLWlmLXNtYWxsZXJcIixcInN0cmV0Y2gtaWYtYmlnZ2VyXCIsXSxuPVtcIm11bHRpcGx5XCIsXCJzY3JlZW5cIixcIm5vcm1hbFwiLFwib3ZlcmxheVwiLFwiZGFya2VuXCIsXCJsaWdodGVuXCIsXCJsaWdodGVyXCIsXCJjb2xvci1kb2RnZVwiLFwiY29sb3ItYnVyblwiLFwiaGFyZC1saWdodFwiLFwic29mdC1saWdodFwiLFwiZGlmZmVyZW5jZVwiLFwiZXhjbHVzaW9uXCIsXCJodWVcIixcInNhdHVyYXRpb25cIixcImNvbG9yXCIsXCJsdW1pbm9zaXR5XCIsXSxyPVtcImRpYWdvbmFsXCIsXCJsZWZ0LXJpZ2h0XCIsXCJ0b3AtYm90dG9tXCIsXCJyYWRpYWxcIixcImN1c3RvbVwiLF07c3dpdGNoKHQpe2Nhc2VcImltYWdlXCI6QXJyYXkuaXNBcnJheSh0aGlzLmltYWdlLnBvc2l0aW9uKSYmMj09PXRoaXMuaW1hZ2UucG9zaXRpb24ubGVuZ3RoJiZlLmluZGV4T2YodGhpcy5pbWFnZS5wb3NpdGlvblswXSkhPT0tMSYmaS5pbmRleE9mKHRoaXMuaW1hZ2UucG9zaXRpb25bMV0pIT09LTF8fHRoaXMudHJpZ2dlckVycm9yKFwiaW1hZ2UucG9zaXRpb25cIiksdGhpcy5pbWFnZS5zdHJldGNoTW9kZSYmKEFycmF5LmlzQXJyYXkodGhpcy5pbWFnZS5zdHJldGNoTW9kZSkmJjI9PT10aGlzLmltYWdlLnN0cmV0Y2hNb2RlLmxlbmd0aCYmby5pbmRleE9mKHRoaXMuaW1hZ2Uuc3RyZXRjaE1vZGVbMF0pIT09LTEmJm8uaW5kZXhPZih0aGlzLmltYWdlLnN0cmV0Y2hNb2RlWzFdKSE9PS0xfHx0aGlzLnRyaWdnZXJFcnJvcihcImltYWdlLnN0cmV0Y2hNb2RlXCIpKTticmVhaztjYXNlXCJibGVuZGluZ01vZGVcIjpuLmluZGV4T2YodGhpcy5pbWFnZS5ibGVuZGluZ01vZGUpPT09LTEmJih0aGlzLmNsZWFyKCksdGhpcy50cmlnZ2VyRXJyb3IoXCJibGVuZGluZ01vZGVcIikpO2JyZWFrO2Nhc2VcImRpcmVjdGlvblwiOnIuaW5kZXhPZih0aGlzLmRpcmVjdGlvbik9PT0tMT90aGlzLnRyaWdnZXJFcnJvcihcImRpcmVjdGlvblwiKTpcImN1c3RvbVwiPT09dGhpcy5kaXJlY3Rpb24mJihzKFt0aGlzLmN1c3RvbURpcmVjdGlvbi54MCx0aGlzLmN1c3RvbURpcmVjdGlvbi54MSx0aGlzLmN1c3RvbURpcmVjdGlvbi55MCx0aGlzLmN1c3RvbURpcmVjdGlvbi55MSxdKXx8dGhpcy50cmlnZ2VyRXJyb3IoXCJjdXN0b21EaXJlY3Rpb25cIikpfX19LHt9LF0sMzI6W2Z1bmN0aW9uKHQsZSxpKXt3aW5kb3cuR3JhbmltPXQoXCIuL2xpYi9HcmFuaW0uanNcIil9LHtcIi4vbGliL0dyYW5pbS5qc1wiOjEsfSxdLH0se30sWzMyLF0pOyIsInZhciBncmFuaW1JbnN0YW5jZSA9IG5ldyBHcmFuaW0oe1xyXG4gIGVsZW1lbnQ6ICcjZ3JhbmltLWNhbnZhcycsXHJcbiAgbmFtZTogJ2dyYW5pbScsXHJcbiAgb3BhY2l0eTogWzEsIDEsXSxcclxuICBzdGF0ZXM6IHtcclxuICAgIFwiZGVmYXVsdC1zdGF0ZVwiOiB7XHJcbiAgICAgIGdyYWRpZW50czogW1xyXG4gICAgICAgIFsnI2ZmYTJhMicsICcjZmZmOWEyJyxdLFxyXG4gICAgICAgIFsnIzQ2OTljMCcsICcjOTdjNzRiJyxdLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9jay13cmFwcGVyXCIpO1xyXG52YXIgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGxhYi5pby93ZXN0Yi8nLFxyXG4gICAgeWVhcjogMjAxOSxcclxuICAgIHRlY2hub2xvZ2llczogJ1Z1ZS5qcycsXHJcbiAgICBsYXlvdXQ6ICfQtNCw0LvQuCDQvNCw0LrQtdGC0Ysg0LTQuNC30LDQudC90LAsINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXHJcbiAgICBkZXNjcmlwcnRpb246ICfQodCw0LnRgiDQsdCw0L3QutCwLCDRgtC+0LvRjNC60L4g0LLQtdGA0YHRgtC60LAuINCS0YXQvtC0INC4INCw0YPRgtC10L3RgtC40YTQuNC60LDRhtC40Y8g0L/RgNC+0LnQtNGD0YIg0L/RgNC4INC70Y7QsdGL0YUg0LfQvdCw0YfQtdC90LjRj9GFICjQvdC+INC80LjQvdC40LzQsNC70YzQvdCw0Y8g0LLQsNC70LjQtNCw0YbQuNGPINCyINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LLRgdC1INGA0LDQstC90L4g0LXRgdGC0YwpLjxicj48YnI+0J/QvtGB0LvQtSDQstGF0L7QtNCwL9GA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LXRgdGC0Ywg0LrQvdC+0L/QutC4INCe0L3Qu9Cw0LnQvS3QsdCw0L3Qui/Qn9C10YDQtdCy0L7QtNGLLCDRgtCw0Lwg0L/RgNC40LrQvtC70YzQvdCw0Y8g0LDQvdC40LzQsNGG0LjRjyDQuCDQtdGJ0LUg0LIg0J/QtdGA0LXQstC+0LTQsNGFINCw0L3QuNC80LDRhtC40Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPIDEvMi8zINC90LXQv9C70L7RhdCw0Y8hIDxicj48YnI+0J/RgNC40LzQtdGH0LDQvdC40LU6INCyINCz0LjRgtC70LDQsdC1INC10YHQu9C4INC+0LHQvdC+0LLQuNGC0Ywg0YHRgtGA0LDQvdC40YbRgyDQvdC1INC/0L4g0LrQvtGA0L3Rjiwg0LLRi9C00LDRgdGCINC+0YjQuNCx0LrRgyAo0YLQviDQtdGB0YLRjCDRgSB2dWUtcm91dGVyINC90LUg0YDQsNCx0L7RgtCw0LXRgikuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbms6ICdodHRwczovL2luZmFsbGlibGUtc3dhcnR6LTU3NmQ2Yy5uZXRsaWZ5LmNvbScsXHJcbiAgICB5ZWFyOiAyMDE5LFxyXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzJyxcclxuICAgIGxheW91dDogJ9C80LDQutC10YIg0L3QtSDQvNC+0LksINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXHJcbiAgICBkZXNjcmlwcnRpb246ICfQotC10YHRgtC+0LLQvtC1INC30LDQtNCw0L3QuNC1INC/0L4g0LLQtdGA0YHRgtC60LUuICjQndCwINC90LXRgtC70LjRhNCw0Lkg0LjQvdC+0LPQtNCwINGB0YLRgNCw0L3QuNGG0LAg0L3QtSDQt9Cw0LPRgNGD0LbQsNC10YLRgdGPLCDQsCDRh9C10YDQtdC3INC90LXRgdC60L7Qu9GM0LrQviDQvNC40L3Rg9GCINC30LDQs9GA0YPQttCw0LXRgtGB0Y8sINC60LDQuiDRjyDQv9C+0L3Rj9C70LAsINC+0L3QviDQstGL0YXQvtC00LjRgiDQuNC3INGB0L3QsCknLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvY2FyZC1wYXltZW50LXBhZ2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGh1Yi5pbycsXHJcbiAgICB5ZWFyOiAyMDE5LFxyXG4gICAgdGVjaG5vbG9naWVzOiAn0L3QsNGC0LjQstC90YvQuSBqcywgd2VicGFjaycsXHJcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LkgKElFMTErKScsXHJcbiAgICBkZXNjcmlwcnRpb246ICfQodGC0YDQsNC90LjRh9C60LAsINC60L7RgtC+0YDRg9GOINCy0Ysg0LLQuNC00LjRgtC1INC/0LXRgNC10LQg0YHQvtCx0L7QuS4nLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvU3BhbnJpLmdpdGh1Yi5pbycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9wbGFzdGljLXdpbmRvd3MuaGVyb2t1YXBwLmNvbScsXHJcbiAgICB5ZWFyOiAyMDE5LFxyXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzLCBGbGFzaycsXHJcbiAgICBsYXlvdXQ6ICfQv9C10YDQtdC00LXQu9Cw0L3QvdGL0Lkg0LTQuNC30LDQudC9INGI0LDQsdC70L7QvdCwLCDQsNC00LDQv9GC0LjQstC90YvQuSwg0L3QtSDQvtGB0L7QsdC+INC60YDQvtGB0YHQsdGA0LDRg9C30LXRgNC90YvQuScsXHJcbiAgICBkZXNjcmlwcnRpb246ICfQmNC90YLQtdGA0L3QtdGCLdC80LDQs9Cw0LfQuNC9INC/0LvQsNGB0YLQuNC60L7QstGL0YUg0L7QutC+0L0sINC60L7RgtC+0YDRi9C5INC90LUg0LfQsNC60L7QvdGH0LXQvS4nLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvd2luZG93cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rOiAnaHR0cDovL2VkbXMtbXR1Y2kuaGVyb2t1YXBwLmNvbScsXHJcbiAgICB5ZWFyOiAyMDE5LFxyXG4gICAgdGVjaG5vbG9naWVzOiAnVnVlLmpzLCBEamFuZ28gKERSRiknLFxyXG4gICAgbGF5b3V0OiAn0YHQstC+0Lkg0LTQuNC30LDQudC9LCDQvdC1INCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQvdC1INC60YDQvtGB0YHQsdGA0LDRg9C30LXRgNC90YvQuScsXHJcbiAgICBkZXNjcmlwcnRpb246IGBcclxuICAgICAg0JTQuNC/0LvQvtC8LCDRgdC40YHRgtC10LzQsCDRjdC70LXQutGC0YDQvtC90L3QvtCz0L4g0LTQvtC60YPQvNC10L3RgtC+0L7QsdC+0YDQvtGC0LAuINCd0LAg0YHQtdGA0LLQtdGA0LUg0LLRgdGRINC/0LvQvtGF0L4sINC/0L7RjdGC0L7QvNGDXHJcbiAgICAgINC90LAg0YTRgNC+0L3RgtC1INC90LXQutC+0YLQvtGA0YvQtSDQutC90L7Qv9C60Lgg0YDQsNCx0L7RgtCw0Y7RgiDQvdC10L/RgNCw0LLQuNC70YzQvdC+LjwvcD5cclxuICAgICAgPHA+0JTQsNC90L3Ri9C1INC00LvRjyDQstGF0L7QtNCwICjQu9C+0LzQsNC90LjQtSDQvdCwINCy0LDRiNC10Lkg0YHQvtCy0LXRgdGC0LghKTo8YnI+XHJcbiAgICAgINCb0L7Qs9C40L06IG9wYWNoa2k5dkBtYWlsLnJ1PGJyPlxyXG4gICAgICDQn9Cw0YDQvtC70Yw6IENUOFIzRUFFYCxcclxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vU3BhbnJpL0NSTS1kaXBsb20nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGluazogJ2h0dHBzOi8vc3BhbnJpLmdpdGh1Yi5pby9ibWwvJyxcclxuICAgIHllYXI6ICcyMDE5ICjQuNC00LXRjyDQuNC3IDIwMTcpJyxcclxuICAgIHRlY2hub2xvZ2llczogJ051eHQuanMnLFxyXG4gICAgbGF5b3V0OiAn0YHQstC+0Lkg0LTQuNC30LDQudC9LCDQsNC00LDQv9GC0LjQstC90YvQuSwg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5IChJRTExKyknLFxyXG4gICAgZGVzY3JpcHJ0aW9uOiAn0J/RgNC+0YHRgtC+INGB0YLRgNCw0L3QuNGH0LrQsCDRjyDRgdCw0LzQsCDQvdC1INC30L3QsNGOINC+INGH0ZHQvC4nLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvYm1sJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbms6ICdodHRwczovL3NwYW5yaS5naXRodWIuaW8vcmVhY3QtbGFuZGluZy8nLFxyXG4gICAgeWVhcjogMjAxOSxcclxuICAgIHRlY2hub2xvZ2llczogJ1JlYWN0JyxcclxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0L7RgdC+0LHQviDQutGA0L7RgdGB0LHRgNCw0YPQt9C10YDQvdGL0LknLFxyXG4gICAgZGVzY3JpcHJ0aW9uOiAn0KHRgtGA0LDQvdC40YfQutCwINC00LvRjyDQtNGA0YPQs9CwLicsXHJcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL1NwYW5yaS9yZWFjdC1sYW5kaW5nJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbms6ICdodHRwczovL3NwYW5yaS5naXRodWIuaW8vZGVzaWduLycsXHJcbiAgICB5ZWFyOiAyMDE4LFxyXG4gICAgdGVjaG5vbG9naWVzOiAn0LHQtdC3INGE0YDQtdC50LzQstC+0YDQutC+0LIg0Lgg0YHQsdC+0YDRidC40LrQvtCyJyxcclxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcclxuICAgIGRlc2NyaXBydGlvbjogJ9Ch0YLRgNCw0L3QuNGH0LrQsCDQviDRgtC+0LwsINC/0L7Rh9C10LzRgyDQvNC+0Lkg0LHRgNCw0YIgLSDQvdC10YPQtNCw0YfQvdC40LosINC90L4g0YLQsNC8INC/0L7Rh9GC0Lgg0L3QuNGH0LXQs9C+INC90LXRgi4nLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvZGVzaWduJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxpbms6ICdodHRwOi8vcHN0eXBlLmhlcm9rdWFwcC5jb20nLFxyXG4gICAgeWVhcjogMjAxOCxcclxuICAgIHRlY2hub2xvZ2llczogJ1Z1ZS5qcyArIFR5cGVzY3JpcHQsIE5vZGUuanMnLFxyXG4gICAgbGF5b3V0OiAn0YHQstC+0Lkg0LTQuNC30LDQudC9LCDQvdC1INCw0LTQsNC/0YLQuNCy0L3Ri9C5LCDQvdC1INC60YDQvtGB0YHQsdGA0LDRg9C30LXRgNC90YvQuScsXHJcbiAgICBkZXNjcmlwcnRpb246IGBcclxuICAgICAg0KHQtdGA0LLQtdGAINC00LvRjyDQvNC+0LHQuNC70YzQvdC+0LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjyDQv9C+0LTRgNGD0LPQuCDQtNC70Y8g0L7Qv9GA0LXQtNC10LvQtdC90LjRjyBcclxuICAgICAg0L/RgdC40YXQvtGC0LjQv9CwINCy0L7QtNC40YLQtdC70Y8uINCc0L7QttC90L4g0L/QvtGB0LzQvtGC0YDQtdGC0Ywg0L/QsNC90LXQu9GMINCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0LAsIFxyXG4gICAgICDQvdCw0L/QuNGB0LDQvdC90YPRjiDQvdCwIFZ1ZS5qcy48YnI+PGJyPtCi0L4sINGH0YLQviDQvNC+0LbQvdC+INC/0L7RgdC80L7RgtGA0LXRgtGMLCDQvdCw0L/QuNGB0LDQvdC+INCx0LXQtyBUeXBlU2NyaXB0LCDQsCDQvdC+0LLQsNGPINCy0LXRgNGB0LjRjyDQtdGJ0LUg0L3QtSDQtNC+0LTQtdC70LDQvdCwLjwvcD5cclxuICAgICAgPHA+0JTQsNC90L3Ri9C1INC00LvRjyDQstGF0L7QtNCwICjQu9C+0LzQsNC90LjQtSDQvdCwINCy0LDRiNC10Lkg0YHQvtCy0LXRgdGC0LghKTo8YnI+XHJcbiAgICAgINCb0L7Qs9C40L06IGFkbWluMDxicj5cclxuICAgICAg0J/QsNGA0L7Qu9GMOiBoYXJkcGFzc3dvcmRgLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvUFMtdHlwZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9zcGFucmkuZ2l0aHViLmlvL2ZpcnN0LXNpdGUvd3d3L2luZGV4Lmh0bWwnLFxyXG4gICAgeWVhcjogMjAxNyxcclxuICAgIHRlY2hub2xvZ2llczogJ2pxdWVyeSwg0YHQsdC+0YDRidC40LogZ3VscCcsXHJcbiAgICBsYXlvdXQ6ICfRgdCy0L7QuSDQtNC40LfQsNC50L0sINGD0LTQuNCy0LjRgtC10LvRjNC90L4sINC90L4g0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcclxuICAgIGRlc2NyaXBydGlvbjogJ9Ch0LDQvNGL0Lkg0L/QtdGA0LLRi9C5INC80L7QuSDRgdCw0LnRgi4g0KLQsNC8INCy0YHRkSDQv9C70L7RhdC+LCDQvdC+INC90L7RgdGC0LDQu9GM0LPQuNGH0L3Qvi4nLFxyXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TcGFucmkvZmlyc3Qtc2l0ZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9zcGFucmkuZ2l0aHViLmlvL2ZpcnN0LXNpdGUvd3d3L3BlcnMvcGVycy5odG1sJyxcclxuICAgIHllYXI6IDIwMTcsXHJcbiAgICB0ZWNobm9sb2dpZXM6ICdqcXVlcnksINCx0LXQtyDRgdCx0L7RgNGJ0LjQutCwJyxcclxuICAgIGxheW91dDogJ9GB0LLQvtC5INC00LjQt9Cw0LnQvSwg0LDQtNCw0L/RgtC40LLQvdGL0LksINC90LUg0LrRgNC+0YHRgdCx0YDQsNGD0LfQtdGA0L3Ri9C5JyxcclxuICAgIGRlc2NyaXBydGlvbjogJ9Ch0YLRgNCw0L3QuNGH0LrQsCDQviDQvNC+0LjRhSDQv9C10YDRgdC+0L3QsNC20LDRhSAo0LjQtyDRgNC40YHQvtCy0LDQvdC40Y8pLiDQmtCw0YDRgtC40L3QutC4INC00LvRjyDRgdCw0LnRgtCwINGC0LDQuiDQuCDQvdC1INC00L7RgNC40YHQvtCy0LDQu9CwLicsXHJcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL1NwYW5yaS9maXJzdC1zaXRlJyxcclxuICB9LFxyXG5dO1xyXG5cclxudmFyIGh0bWwgPSAnJztcclxuXHJcbmZvcihsZXQgaSBpbiBpdGVtcykge1xyXG4gIGxldCBjb2RlTGluayA9IChcclxuICBgPGEgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvbi1hXCJcclxuICAgICAgaHJlZj1cIiR7aXRlbXNbaV0uY29kZX1cIlxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgPlxyXG4gICAgICAke2l0ZW1zW2ldLmNvZGV9XHJcbiAgICA8L2E+XHJcbiAgYClcclxuICBodG1sICs9IChcclxuICBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtX19kZXNpZ24tZWxlbWVudFwiPjwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJpdGVtX19saW5rXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJpdGVtX19saW5rLWFcIlxyXG4gICAgICAgIGhyZWY9XCIke2l0ZW1zW2ldLmxpbmt9XCIgXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgICR7aXRlbXNbaV0ubGlua31cclxuICAgICAgPC9hPlxyXG4gICAgPC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxwPtCT0L7QtDogJHtpdGVtc1tpXS55ZWFyfTwvcD5cclxuICAgICAgPHA+0KLQtdGF0L3QvtC70L7Qs9C40Lg6ICR7aXRlbXNbaV0udGVjaG5vbG9naWVzfTwvcD5cclxuICAgICAgPHA+0JLQtdGA0YHRgtC60LA6ICR7aXRlbXNbaV0ubGF5b3V0fTwvcD5cclxuICAgICAgPHA+0J7Qv9C40YHQsNC90LjQtTogJHtpdGVtc1tpXS5kZXNjcmlwcnRpb259PC9wPiAgICBcclxuICAgICAgPHA+0JrQvtC0OiAke2l0ZW1zW2ldLmNvZGUgPyBjb2RlTGluayA6ICfQvdC10LTQvtGB0YLRg9C/0LXQvSd9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YCk7XHJcbn1cclxuXHJcbndyYXBwZXIuaW5uZXJIVE1MID0gaHRtbDsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLXNhc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLXNhc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2hlYWRlci5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3Mtc2Fzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9