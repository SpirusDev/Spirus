/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: black;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n\\ncanvas {\\n  border: 1px solid black;\\n  height: 100%;\\n  width: 100%;\\n  background-color: black;\\n  image-rendering: pixelated;\\n  image-rendering: crisp-edges;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://spirus/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://spirus/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://spirus/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://spirus/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://spirus/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/entry.ts":
/*!**********************!*\
  !*** ./src/entry.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ts_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/index.ts */ \"./src/ts/index.ts\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n// Typescript\r\n\r\n// Stylesheets\r\n\r\n\n\n//# sourceURL=webpack://spirus/./src/entry.ts?");

/***/ }),

/***/ "./src/ts/classes/listofobjects.ts":
/*!*****************************************!*\
  !*** ./src/ts/classes/listofobjects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objects\": () => (/* binding */ objects)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./src/ts/types.ts\");\n/* harmony import */ var _objects_blank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/blank */ \"./src/ts/classes/objects/blank.ts\");\n/* harmony import */ var _objects_mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/mouse */ \"./src/ts/classes/objects/mouse.ts\");\n/* harmony import */ var _objects_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/text */ \"./src/ts/classes/objects/text.ts\");\n\r\n\r\n\r\n\r\nvar objects = [\r\n    new _objects_blank__WEBPACK_IMPORTED_MODULE_1__.Blank({ position: { x: 0, y: 0 }, rotation: { x: 0 }, scale: { x: 25, y: 25 }, }, _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.square),\r\n    new _objects_mouse__WEBPACK_IMPORTED_MODULE_2__.Mouse({ position: { x: 0, y: 0 }, rotation: { x: 0 }, scale: { x: 25, y: 25 }, }, _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.square),\r\n    new _objects_text__WEBPACK_IMPORTED_MODULE_3__.Text({ position: { x: (1920 / 2) - 48 * 2.5, y: 1080 / 2 }, rotation: { x: 0 }, scale: { x: 5, y: 5 }, }, \"Hello world!\", \"48px Arial\")\r\n];\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/classes/listofobjects.ts?");

/***/ }),

/***/ "./src/ts/classes/object.ts":
/*!**********************************!*\
  !*** ./src/ts/classes/object.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./src/ts/types.ts\");\n\r\nvar GameObject = /** @class */ (function () {\r\n    function GameObject(transform, objType, options) {\r\n        this.transform = transform;\r\n        this.objType = objType;\r\n        this.options = options;\r\n        this.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.white;\r\n    }\r\n    GameObject.prototype.callback = function (tick, objects, canvas) { };\r\n    Object.defineProperty(GameObject.prototype, \"position\", {\r\n        get: function () {\r\n            return this.transform.position;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"rotation\", {\r\n        get: function () {\r\n            return this.transform.rotation;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"scale\", {\r\n        get: function () {\r\n            return this.transform.scale;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return GameObject;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/classes/object.ts?");

/***/ }),

/***/ "./src/ts/classes/objects/blank.ts":
/*!*****************************************!*\
  !*** ./src/ts/classes/objects/blank.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Blank\": () => (/* binding */ Blank)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ \"./src/ts/types.ts\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object */ \"./src/ts/classes/object.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Blank = /** @class */ (function (_super) {\r\n    __extends(Blank, _super);\r\n    function Blank() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.white;\r\n        return _this;\r\n    }\r\n    Blank.prototype.callback = function (tick, objects, canvas) {\r\n        // does nothing\r\n    };\r\n    return Blank;\r\n}(_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/classes/objects/blank.ts?");

/***/ }),

/***/ "./src/ts/classes/objects/mouse.ts":
/*!*****************************************!*\
  !*** ./src/ts/classes/objects/mouse.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mouse\": () => (/* binding */ Mouse)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ \"./src/ts/types.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/ts/utils.ts\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object */ \"./src/ts/classes/object.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar Mouse = /** @class */ (function (_super) {\r\n    __extends(Mouse, _super);\r\n    function Mouse() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.blue;\r\n        return _this;\r\n    }\r\n    Mouse.prototype.callback = function (tick, objects, canvas) {\r\n        var _this = this;\r\n        var clone = new Mouse(this.transform, this.objType, this.options);\r\n        canvas.addEventListener(\"mousemove\", function (e) {\r\n            var rect = canvas.getBoundingClientRect();\r\n            var cx = canvas.width * 0.5;\r\n            var cy = canvas.height * 0.5;\r\n            _this.transform.position.x = ((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width) - cx,\r\n                _this.transform.position.y = -(((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height) - cy);\r\n        });\r\n        objects.forEach(function (v, i, a) {\r\n            if (v.transform != clone.transform && v.objType == _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.square) {\r\n                console.log(v);\r\n                if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkIfTwoGameObjectsAreColliding)(clone, v).overall) {\r\n                    clone.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.red;\r\n                }\r\n                else {\r\n                    clone.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.brown;\r\n                }\r\n            }\r\n        });\r\n    };\r\n    return Mouse;\r\n}(_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/classes/objects/mouse.ts?");

/***/ }),

/***/ "./src/ts/classes/objects/text.ts":
/*!****************************************!*\
  !*** ./src/ts/classes/objects/text.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ \"./src/ts/types.ts\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object */ \"./src/ts/classes/object.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Text = /** @class */ (function (_super) {\r\n    __extends(Text, _super);\r\n    function Text(transform, text, font) {\r\n        var _this = _super.call(this, transform, _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.text) || this;\r\n        _this.transform = transform;\r\n        _this.text = text;\r\n        _this.font = font;\r\n        _this.color = _types__WEBPACK_IMPORTED_MODULE_0__.Color.white;\r\n        _this.objType = _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.text;\r\n        _this.options = {\r\n            text: {\r\n                text: text,\r\n                font: font\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    Text.prototype.callback = function (tick, objects, canvas) { };\r\n    return Text;\r\n}(_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/classes/objects/text.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/ts/types.ts\");\n/* harmony import */ var _classes_listofobjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/listofobjects */ \"./src/ts/classes/listofobjects.ts\");\n/* harmony import */ var _spirus_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spirus.config */ \"./spirus.config.js\");\n/* harmony import */ var _spirus_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_spirus_config__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nvar canvas = document.querySelector(\"canvas\");\r\nvar t = 0;\r\nfunction render() {\r\n    var ctx = canvas.getContext('2d');\r\n    var ratio = window.devicePixelRatio;\r\n    // Hooray! No more stupid browser scaling!\r\n    canvas.width = _spirus_config__WEBPACK_IMPORTED_MODULE_2__.window.width * ratio;\r\n    canvas.height = _spirus_config__WEBPACK_IMPORTED_MODULE_2__.window.height * ratio;\r\n    canvas.style.width = canvas.width + \"px\";\r\n    canvas.style.height = canvas.height + \"px\";\r\n    ctx.scale(ratio, ratio);\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    ctx.imageSmoothingEnabled = false;\r\n    _classes_listofobjects__WEBPACK_IMPORTED_MODULE_1__.objects.forEach(function (v, i, a) {\r\n        if (v.color != null) {\r\n            ctx.fillStyle = v.color.toString();\r\n        }\r\n        else\r\n            ctx.fillStyle = _types__WEBPACK_IMPORTED_MODULE_0__.Color.black;\r\n        if (v.objType == _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.square) {\r\n            ctx.fillRect(v.position.x + canvas.width * 0.5, canvas.height - (v.position.y + canvas.height * 0.5), v.scale.x, v.scale.y);\r\n        }\r\n        else if (v.objType == _types__WEBPACK_IMPORTED_MODULE_0__.ObjectType.text) {\r\n            ctx.font = v.options.text.font;\r\n            ctx.fillText(v.options.text.text, v.position.x, v.position.y);\r\n        }\r\n        ctx.fillStyle = _types__WEBPACK_IMPORTED_MODULE_0__.Color.white;\r\n    }, false);\r\n}\r\nfunction update() {\r\n    _classes_listofobjects__WEBPACK_IMPORTED_MODULE_1__.objects.forEach(function (v, i, a) {\r\n        v.callback(t, _classes_listofobjects__WEBPACK_IMPORTED_MODULE_1__.objects, canvas);\r\n    }, false);\r\n    render();\r\n    t++;\r\n}\r\nfunction start() {\r\n    update();\r\n    setTimeout(start, 50);\r\n}\r\nif (!_spirus_config__WEBPACK_IMPORTED_MODULE_2__.spirusOptions.madeWithSpirusWatermark) {\r\n    document.getElementById(\"watermark\").style.display = 'none';\r\n}\r\nstart();\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/types.ts":
/*!*************************!*\
  !*** ./src/ts/types.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color),\n/* harmony export */   \"Font\": () => (/* binding */ Font),\n/* harmony export */   \"ObjectType\": () => (/* binding */ ObjectType)\n/* harmony export */ });\nvar Color;\r\n(function (Color) {\r\n    Color[\"red\"] = \"#f00\";\r\n    Color[\"orange\"] = \"#ffa500\";\r\n    Color[\"yellow\"] = \"#ffff00\";\r\n    Color[\"dark_green\"] = \"#060\";\r\n    Color[\"green\"] = \"#0a0\";\r\n    Color[\"lime\"] = \"#0f0\";\r\n    Color[\"dark_blue\"] = \"#600\";\r\n    Color[\"blue\"] = \"#f00\";\r\n    Color[\"light_blue\"] = \"#7dd3e2\";\r\n    Color[\"purple\"] = \"#404\";\r\n    Color[\"black\"] = \"#000\";\r\n    Color[\"white\"] = \"#fff\";\r\n    Color[\"brown\"] = \"#804000\";\r\n    Color[\"yellowish_gray\"] = \"#C2B280\";\r\n    Color[\"cloudy_blue\"] = \"#d4f1f9\";\r\n})(Color || (Color = {}));\r\nvar Font;\r\n(function (Font) {\r\n    Font[\"Arial\"] = \"Arial\";\r\n})(Font || (Font = {}));\r\nvar ObjectType;\r\n(function (ObjectType) {\r\n    ObjectType[ObjectType[\"square\"] = 0] = \"square\";\r\n    ObjectType[ObjectType[\"text\"] = 1] = \"text\";\r\n})(ObjectType || (ObjectType = {}));\r\n;\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/types.ts?");

/***/ }),

/***/ "./src/ts/utils.ts":
/*!*************************!*\
  !*** ./src/ts/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfTwoGameObjectsAreColliding\": () => (/* binding */ checkIfTwoGameObjectsAreColliding),\n/* harmony export */   \"isVectorOOB\": () => (/* binding */ isVectorOOB)\n/* harmony export */ });\nfunction checkIfTwoGameObjectsAreColliding(object1, object2) {\r\n    var aLeftOfB = (object1.position.x + object1.scale.x) < object2.position.x;\r\n    var aRightOfB = object1.position.x > (object2.position.x + object2.scale.x);\r\n    var aBelowB = (object1.position.y + object1.scale.y) < object2.position.y;\r\n    var aAboveB = object1.position.y > (object2.position.y + object2.scale.y);\r\n    return {\r\n        left: aLeftOfB,\r\n        right: aRightOfB,\r\n        up: aAboveB,\r\n        down: aBelowB,\r\n        overall: !(aLeftOfB || aRightOfB || aAboveB || aBelowB)\r\n    };\r\n}\r\nfunction isVectorOOB(vector) {\r\n    if (vector <= -70) {\r\n        return true;\r\n    }\r\n    if (vector >= 70) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack://spirus/./src/ts/utils.ts?");

/***/ }),

/***/ "./spirus.config.js":
/*!**************************!*\
  !*** ./spirus.config.js ***!
  \**************************/
/***/ ((module) => {

eval("// config file for spirus\r\n\r\nmodule.exports = {\r\n\twindow: {\r\n\t\twidth: 1920,\r\n\t\theight: 1080\r\n\t},\r\n\tdiscordRPC: {\r\n\t\tenabled: true, // feel free to disable\r\n\t\tclientID: \"\", // set to your client ID\r\n\r\n\t\tconfig: {\r\n\t\t\tstate: \"Spirus!\", // state of the game\r\n\t\t\tdetails: \"https://github.com/EclipseLikesSpace/Spirus\", // the details\r\n\t\t\tstartTimestamp: Date.now(),\r\n\t\t\tendTimestamp: null, // leave null for \"Time elapsed\"\r\n\t\t\tlargeImageKey: 'spirus_large', // need to set these in your Discord Developer Portal\r\n\t\t\tsmallImageKey: 'spirus_small', // ^\r\n\t\t\tinstance: true, // leave this true\r\n\t\t}\r\n\t},\r\n\tspirusOptions: {\r\n\t\tmadeWithSpirusWatermark: true // disable this if it is blocking canvas\r\n\t}\r\n}\n\n//# sourceURL=webpack://spirus/./spirus.config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry.ts");
/******/ 	
/******/ })()
;