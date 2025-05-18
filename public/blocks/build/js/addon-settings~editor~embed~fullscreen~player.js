(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-settings~editor~embed~fullscreen~player"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-fancy-checkbox/checkbox.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-fancy-checkbox/checkbox.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n.checkbox_checkbox_1UwGU {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 4px;\n    transition: .2s;\n    background-color: var(--ui-white);\n    transition-property: background-color;\n    background-size: 100%;\n    border: 1px solid var(--ui-black-transparent);\n    outline: none;\n}\n\n.checkbox_checkbox_1UwGU:hover, .checkbox_checkbox_1UwGU:focus, .checkbox_checkbox_1UwGU:active, .checkbox_checkbox_1UwGU:checked {\n    border-color: var(--looks-secondary);\n}\n\n.checkbox_checkbox_1UwGU:focus, .checkbox_checkbox_1UwGU:active {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.checkbox_checkbox_1UwGU:checked {\n    background-color: var(--looks-secondary);\n    background-image: url(" + escape(__webpack_require__(/*! ./checkbox.svg */ "./src/components/tw-fancy-checkbox/checkbox.svg")) + ");\n}\n", ""]);

// exports
exports.locals = {
	"checkbox": "checkbox_checkbox_1UwGU"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/normalize.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody{margin:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\na{background-color:transparent}\na:active,a:hover{outline:0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nh1{font-size:2em;margin:.67em 0}\nmark{background:#ff0;color:#000}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-0.5em}\nsub{bottom:-0.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{box-sizing:content-box;height:0}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\nbutton{overflow:visible}\nbutton,select{text-transform:none}\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ninput{line-height:normal}\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\ntextarea{overflow:auto}\noptgroup{font-weight:bold}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AddonHooks = {
  appStateReducer: function appStateReducer() {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/components/tw-fancy-checkbox/checkbox.css":
/*!*******************************************************!*\
  !*** ./src/components/tw-fancy-checkbox/checkbox.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./checkbox.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-fancy-checkbox/checkbox.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-fancy-checkbox/checkbox.jsx":
/*!*******************************************************!*\
  !*** ./src/components/tw-fancy-checkbox/checkbox.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.css */ "./src/components/tw-fancy-checkbox/checkbox.css");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkbox_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




var FancyCheckbox = function FancyCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, props, {
    type: "checkbox",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className, _checkbox_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkbox)
  }));
};
FancyCheckbox.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FancyCheckbox);

/***/ }),

/***/ "./src/components/tw-fancy-checkbox/checkbox.svg":
/*!*******************************************************!*\
  !*** ./src/components/tw-fancy-checkbox/checkbox.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLSBodHRwczovL2FrYXJpY29ucy5jb20vIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik00IDEybDYgNkwyMCA2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./src/lib/brand.js":
/*!**************************!*\
  !*** ./src/lib/brand.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'TurboWarp'
};

/***/ }),

/***/ "./src/lib/detect-locale.js":
/*!**********************************!*\
  !*** ./src/lib/detect-locale.js ***!
  \**********************************/
/*! exports provided: LANGUAGE_KEY, detectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KEY", function() { return LANGUAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectLocale", function() { return detectLocale; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview
 * Utility function to detect locale from the browser setting or paramenter on the URL.
 */



// tw: read language from localStorage
var LANGUAGE_KEY = 'tw:language';

/**
 * look for language setting in the browser. Check against supported locales.
 * If there's a parameter in the URL, override the browser setting
 * @param {Array.string} supportedLocales An array of supported locale codes.
 * @return {string} the preferred locale
 */
var detectLocale = function detectLocale(supportedLocales) {
  // tw: read language from localStorage
  try {
    var storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (storedLanguage && supportedLocales.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (e) {/* ignore */}
  var locale = 'en'; // default
  var browserLocale = window.navigator.userLanguage || window.navigator.language;
  browserLocale = browserLocale.toLowerCase();
  // try to set locale from browserLocale
  if (supportedLocales.includes(browserLocale)) {
    locale = browserLocale;
  } else {
    browserLocale = browserLocale.split('-')[0];
    if (supportedLocales.includes(browserLocale)) {
      locale = browserLocale;
    }
  }
  var queryParams = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search);
  // Flatten potential arrays and remove falsy values
  var potentialLocales = [].concat(queryParams.locale, queryParams.lang).filter(function (l) {
    return l;
  });
  if (!potentialLocales.length) {
    return locale;
  }
  var urlLocale = potentialLocales[0].toLowerCase();
  if (supportedLocales.includes(urlLocale)) {
    return urlLocale;
  }
  return locale;
};


/***/ }),

/***/ "./src/lib/download-blob.js":
/*!**********************************!*\
  !*** ./src/lib/download-blob.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (filename, blob) {
  var downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink);

  // Use special ms version if available to get it working on Edge.
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }
  if ('download' in HTMLAnchorElement.prototype) {
    var url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.type = blob.type;
    downloadLink.click();
    // remove the link after a timeout to prevent a crash on iOS 13 Safari
    window.setTimeout(function () {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } else {
    // iOS 12 Safari, open a new page and set href to data-uri
    var popup = window.open('', '_blank');
    var reader = new FileReader();
    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };
    reader.readAsDataURL(blob);
  }
});

/***/ }),

/***/ "./src/lib/isScratchDesktop.js":
/*!*************************************!*\
  !*** ./src/lib/isScratchDesktop.js ***!
  \*************************************/
/*! exports provided: default, isScratchDesktop, notScratchDesktop, setIsScratchDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScratchDesktop", function() { return isScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notScratchDesktop", function() { return notScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsScratchDesktop", function() { return setIsScratchDesktop; });
/**
 * Internal stored state. Not valid until after at least one call to `setIsScratchDesktop()`.
 * @type {boolean}
 */
var _isScratchDesktop; // undefined = not ready yet

/**
 * Tell the `isScratchDesktop()` whether or not the GUI is running under Scratch Desktop.
 * @param {boolean} value - the new value which `isScratchDesktop()` should return in the future.
 */
var setIsScratchDesktop = function setIsScratchDesktop(value) {
  _isScratchDesktop = value;
};

/**
 * @returns {boolean} - true if it seems like the GUI is running under Scratch Desktop; false otherwise.
 * If `setIsScratchDesktop()` has not yet been called, this can return `undefined`.
 */
var isScratchDesktop = function isScratchDesktop() {
  return _isScratchDesktop;
};

/**
 * @returns {boolean} - false if it seems like the GUI is running under Scratch Desktop; true otherwise.
 */
var notScratchDesktop = function notScratchDesktop() {
  return !isScratchDesktop();
};
/* harmony default export */ __webpack_exports__["default"] = (isScratchDesktop);


/***/ }),

/***/ "./src/lib/normalize.css":
/*!*******************************!*\
  !*** ./src/lib/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)'
};
var blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)'
};
var blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/rainbow.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c',
  // eslint-disable-next-line max-len
  'menu-bar-background-image': 'linear-gradient(90deg, rgba(255, 0, 0, 0.75) 0%, rgba(255, 154, 0, 0.75) 10%, rgba(208, 222, 33, 0.75) 20%, rgba(79, 220, 74, 0.75) 30%, rgba(63, 218, 216, 0.75) 40%, rgba(47, 201, 226, 0.75) 50%, rgba(28, 127, 238, 0.75) 60%, rgba(95, 21, 242, 0.75) 70%, rgba(186, 12, 248, 0.75) 80%, rgba(251, 7, 217, 0.75) 90%, rgba(255, 0, 0, 0.75) 100%)'
};
var blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
var blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

var blockColors = {
  motion: {
    primary: '#0F1E33',
    secondary: '#4C4C4C',
    tertiary: '#4C97FF',
    quaternary: '#4C97FF'
  },
  looks: {
    primary: '#1E1433',
    secondary: '#4C4C4C',
    tertiary: '#9966FF',
    quaternary: '#9966FF'
  },
  sounds: {
    primary: '#291329',
    secondary: '#4C4C4C',
    tertiary: '#CF63CF',
    quaternary: '#CF63CF'
  },
  control: {
    primary: '#332205',
    secondary: '#4C4C4C',
    tertiary: '#FFAB19',
    quaternary: '#FFAB19'
  },
  event: {
    primary: '#332600',
    secondary: '#4C4C4C',
    tertiary: '#FFBF00',
    quaternary: '#FFBF00'
  },
  sensing: {
    primary: '#12232A',
    secondary: '#4C4C4C',
    tertiary: '#5CB1D6',
    quaternary: '#5CB1D6'
  },
  pen: {
    primary: '#03251C',
    secondary: '#4C4C4C',
    tertiary: '#0fBD8C',
    quaternary: '#0fBD8C'
  },
  operators: {
    primary: '#112611',
    secondary: '#4C4C4C',
    tertiary: '#59C059',
    quaternary: '#59C059'
  },
  data: {
    primary: '#331C05',
    secondary: '#4C4C4C',
    tertiary: '#FF8C1A',
    quaternary: '#FF8C1A'
  },
  data_lists: {
    primary: '#331405',
    secondary: '#4C4C4C',
    tertiary: '#FF661A',
    quaternary: '#FF661A'
  },
  more: {
    primary: '#331419',
    secondary: '#4C4C4C',
    tertiary: '#FF6680',
    quaternary: '#FF6680'
  },
  addons: {
    primary: '#0b3331',
    secondary: '#4C4C4C',
    tertiary: '#34e4d0',
    quaternary: '#34e4d0'
  },
  text: 'rgba(255, 255, 255, .7)',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
var extensions = {};
var customExtensionColors = {
  primary: function primary(_primary) {
    var hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsv"])(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"])(hsv);
  },
  secondary: function secondary() {
    return '#4C4C4C';
  },
  tertiary: function tertiary(primary) {
    return primary;
  },
  quaternary: function quaternary(primary) {
    return primary;
  },
  categoryIconBackground: function categoryIconBackground(primary) {
    return customExtensionColors.primary(primary);
  },
  categoryIconBorder: function categoryIconBorder(primary) {
    return customExtensionColors.tertiary(primary);
  }
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b631383707e87a454b479dedaa8ca014.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/ef4a998a82a8567de018baa4607bc6a0.svg";

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






var blockColors = {
  motion: {
    primary: '#80B5FF',
    secondary: '#B3D2FF',
    tertiary: '#3373CC',
    quaternary: '#CCE1FF'
  },
  looks: {
    primary: '#CCB3FF',
    secondary: '#DDCCFF',
    tertiary: '#774DCB',
    quaternary: '#EEE5FF'
  },
  sounds: {
    primary: '#E19DE1',
    secondary: '#FFB3FF',
    tertiary: '#BD42BD',
    quaternary: '#FFCCFF'
  },
  control: {
    primary: '#FFBE4C',
    secondary: '#FFDA99',
    tertiary: '#CF8B17',
    quaternary: '#FFE3B3'
  },
  event: {
    primary: '#FFD966',
    secondary: '#FFECB3',
    tertiary: '#CC9900',
    quaternary: '#FFF2CC'
  },
  sensing: {
    primary: '#85C4E0',
    secondary: '#AED8EA',
    tertiary: '#2E8EB8',
    quaternary: '#C2E2F0'
  },
  pen: {
    primary: '#13ECAF',
    secondary: '#75F0CD',
    tertiary: '#0B8E69',
    quaternary: '#A3F5DE'
  },
  operators: {
    primary: '#7ECE7E',
    secondary: '#B5E3B5',
    tertiary: '#389438',
    quaternary: '#DAF1DA'
  },
  data: {
    primary: '#FFA54C',
    secondary: '#FFCC99',
    tertiary: '#DB6E00',
    quaternary: '#FFE5CC'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF9966',
    secondary: '#FFCAB0',
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: '#E64D00',
    quaternary: '#FFDDCC'
  },
  more: {
    primary: '#FF99AA',
    secondary: '#FFCCD5',
    tertiary: '#FF3355',
    quaternary: '#FFE5EA'
  },
  addons: {
    primary: '#34e4d0',
    secondary: '#71e2d5',
    tertiary: '#29b2a2',
    quaternary: '#9ee2db'
  },
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
var extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
var clamp = function clamp(value, lower, upper) {
  return Math.max(lower, Math.min(upper, value));
};
var customExtensionColors = {
  primary: function primary(_primary) {
    var hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  secondary: function secondary(primary) {
    var hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  tertiary: function tertiary(primary) {
    var hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  quaternary: function quaternary(primary) {
    var hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  categoryIconBackground: function categoryIconBackground(primary) {
    return customExtensionColors.primary(primary);
  },
  categoryIconBorder: function categoryIconBorder(primary) {
    return customExtensionColors.tertiary(primary);
  }
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
var blockColors = {
  motion: {
    primary: '#4C97FF',
    secondary: '#4280D7',
    tertiary: '#3373CC',
    quaternary: '#3373CC'
  },
  looks: {
    primary: '#9966FF',
    secondary: '#855CD6',
    tertiary: '#774DCB',
    quaternary: '#774DCB'
  },
  sounds: {
    primary: '#CF63CF',
    secondary: '#C94FC9',
    tertiary: '#BD42BD',
    quaternary: '#BD42BD'
  },
  control: {
    primary: '#FFAB19',
    secondary: '#EC9C13',
    tertiary: '#CF8B17',
    quaternary: '#CF8B17'
  },
  event: {
    primary: '#FFBF00',
    secondary: '#E6AC00',
    tertiary: '#CC9900',
    quaternary: '#CC9900'
  },
  sensing: {
    primary: '#5CB1D6',
    secondary: '#47A8D1',
    tertiary: '#2E8EB8',
    quaternary: '#2E8EB8'
  },
  pen: {
    primary: '#0fBD8C',
    secondary: '#0DA57A',
    tertiary: '#0B8E69',
    quaternary: '#0B8E69'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  data: {
    primary: '#FF8C1A',
    secondary: '#FF8000',
    tertiary: '#DB6E00',
    quaternary: '#DB6E00'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF661A',
    secondary: '#FF5500',
    tertiary: '#E64D00',
    quaternary: '#E64D00'
  },
  more: {
    primary: '#FF6680',
    secondary: '#FF4D6A',
    tertiary: '#FF3355',
    quaternary: '#FF3355'
  },
  addons: {
    primary: '#29beb8',
    secondary: '#3aa8a4',
    tertiary: '#3aa8a4',
    quaternary: '#3aa8a4'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd'
};
var extensions = {};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./global-styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#333333aa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#333333',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#333333',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
var blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
var guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)',
  /* #E5F0FF */
  'ui-secondary': 'hsla(215, 75%, 95%, 1)',
  /* #E9F1FC */
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)',
  /* #D9E3F2 */

  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */

  'ui-white': 'hsla(0, 100%, 100%, 1)',
  /* #FFFFFF */
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  /* 25% transparent version of ui-white */
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  /* 25% transparent version of ui-white */
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  /* 25% transparent version of ui-white */

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  /* 15% transparent version of black */

  'text-primary': 'hsla(225, 15%, 40%, 1)',
  /* #575E75 */
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)',
  /* #4C97FF */
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)',
  /* 90% transparent version of motion-primary */
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)',
  /* #3373CC */

  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  /* #855CD6 */
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  /* 35% transparent version of looks-tertiary */
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  /* 15% transparent version of looks-tertiary */
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)',
  /* #714EB6 */

  'red-primary': 'hsla(20, 100%, 55%, 1)',
  /* #FF661A */
  'red-tertiary': 'hsla(20, 100%, 45%, 1)',
  /* #E64D00 */

  'sound-primary': 'hsla(300, 53%, 60%, 1)',
  /* #CF63CF */
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)',
  /* #BD42BD */

  'control-primary': 'hsla(38, 100%, 55%, 1)',
  /* #FFAB19 */

  'data-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */

  'pen-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)',
  /* #0FBD8C */
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)',
  /* #0B8E69 */

  'error-primary': 'hsla(30, 100%, 55%, 1)',
  /* #FF8C1A */
  'error-light': 'hsla(30, 100%, 70%, 1)',
  /* #FFB366 */
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)',
  /* #FF8C1A */

  'extensions-primary': 'hsla(163, 85%, 40%, 1)',
  /* #0FBD8C */
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)',
  /* #0B8E69 */
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)',
  /* 35% transparent version of extensions-primary */
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  /* opaque version of extensions-transparent, on white bg */

  'drop-highlight': 'hsla(215, 100%, 77%, 1)',
  /* lighter than motion-primary */

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'menu-bar-foreground': '#ffffff',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  'shadow': 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
var blockColors = {};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'data', 'data_lists', 'more', 'addons'];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
var evaluateCSS = function evaluateCSS(css) {
  var variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
var applyGuiColors = function applyGuiColors(theme) {
  var doc = document.documentElement;
  var defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light.getGuiColors();
  for (var _i = 0, _Object$entries = Object.entries(defaultGuiColors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      name = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  var guiColors = theme.getGuiColors();
  for (var _i2 = 0, _Object$entries2 = Object.entries(guiColors); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      _name = _Object$entries2$_i[0],
      _value = _Object$entries2$_i[1];
    doc.style.setProperty("--".concat(_name), _value);
  }
  var blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (var _i3 = 0, _BLOCK_COLOR_NAMES = BLOCK_COLOR_NAMES; _i3 < _BLOCK_COLOR_NAMES.length; _i3++) {
    var color = _BLOCK_COLOR_NAMES[_i3];
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  var metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(guiColors['menu-bar-background']));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(function (i) {
    return i();
  });
};


/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, defaultBlockColors, ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_RAINBOW, ACCENT_MAP, GUI_LIGHT, GUI_DARK, GUI_MAP, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_CUSTOM, BLOCKS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockColors", function() { return defaultBlockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RED", function() { return ACCENT_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_PURPLE", function() { return ACCENT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_BLUE", function() { return ACCENT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RAINBOW", function() { return ACCENT_RAINBOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_LIGHT", function() { return GUI_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DARK", function() { return GUI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_CUSTOM", function() { return BLOCKS_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
var _Theme;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










var ACCENT_PURPLE = 'purple';
var ACCENT_BLUE = 'blue';
var ACCENT_RED = 'red';
var ACCENT_RAINBOW = 'rainbow';
var ACCENT_MAP = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ACCENT_PURPLE, _accent_purple__WEBPACK_IMPORTED_MODULE_1__), ACCENT_BLUE, _accent_blue__WEBPACK_IMPORTED_MODULE_2__), ACCENT_RED, _accent_red__WEBPACK_IMPORTED_MODULE_3__), ACCENT_RAINBOW, _accent_rainbow__WEBPACK_IMPORTED_MODULE_4__);
var ACCENT_DEFAULT = ACCENT_PURPLE;
var GUI_LIGHT = 'light';
var GUI_DARK = 'dark';
var GUI_MAP = _defineProperty(_defineProperty({}, GUI_LIGHT, _gui_light__WEBPACK_IMPORTED_MODULE_5__), GUI_DARK, _gui_dark__WEBPACK_IMPORTED_MODULE_6__);
var GUI_DEFAULT = GUI_LIGHT;
var BLOCKS_THREE = 'three';
var BLOCKS_DARK = 'dark';
var BLOCKS_HIGH_CONTRAST = 'high-contrast';
var BLOCKS_CUSTOM = 'custom';
var BLOCKS_DEFAULT = BLOCKS_THREE;
var defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_7__["blockColors"];
var BLOCKS_MAP = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, BLOCKS_THREE, {
  blocksMediaFolder: 'blocks-media/default',
  colors: _blocks_three__WEBPACK_IMPORTED_MODULE_7__["blockColors"],
  extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_7__["extensions"],
  customExtensionColors: {},
  useForStage: true
}), BLOCKS_HIGH_CONTRAST, {
  blocksMediaFolder: 'blocks-media/high-contrast',
  colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_8__["blockColors"], defaultBlockColors),
  extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_8__["extensions"],
  customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_8__["customExtensionColors"],
  useForStage: true
}), BLOCKS_DARK, {
  blocksMediaFolder: 'blocks-media/default',
  colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_9__["blockColors"], defaultBlockColors),
  extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_9__["extensions"],
  customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_9__["customExtensionColors"],
  useForStage: false
}), BLOCKS_CUSTOM, {
  // to be filled by editor-theme3 addon
  blocksMediaFolder: 'blocks-media/default',
  colors: _blocks_three__WEBPACK_IMPORTED_MODULE_7__["blockColors"],
  extensions: {},
  customExtensionColors: {},
  useForStage: false
});
var themeObjectsCreated = 0;
var Theme = /*#__PURE__*/function () {
  function Theme(accent, gui, blocks) {
    _classCallCheck(this, Theme);
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
  }
  return _createClass(Theme, [{
    key: "set",
    value: function set(what, to) {
      if (what === 'accent') {
        return new Theme(to, this.gui, this.blocks);
      } else if (what === 'gui') {
        return new Theme(this.accent, to, this.blocks);
      } else if (what === 'blocks') {
        return new Theme(this.accent, this.gui, to);
      }
      throw new Error("Unknown theme property: ".concat(what));
    }
  }, {
    key: "getBlocksMediaFolder",
    value: function getBlocksMediaFolder() {
      return BLOCKS_MAP[this.blocks].blocksMediaFolder;
    }
  }, {
    key: "getGuiColors",
    value: function getGuiColors() {
      return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_5__["guiColors"]);
    }
  }, {
    key: "getBlockColors",
    value: function getBlockColors() {
      return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
    }
  }, {
    key: "getExtensions",
    value: function getExtensions() {
      return BLOCKS_MAP[this.blocks].extensions;
    }
  }, {
    key: "isDark",
    value: function isDark() {
      return this.getGuiColors()['color-scheme'] === 'dark';
    }
  }, {
    key: "getStageBlockColors",
    value: function getStageBlockColors() {
      if (BLOCKS_MAP[this.blocks].useForStage) {
        return this.getBlockColors();
      }
      return Theme.light.getBlockColors();
    }
  }, {
    key: "getCustomExtensionColors",
    value: function getCustomExtensionColors() {
      return BLOCKS_MAP[this.blocks].customExtensionColors;
    }
  }]);
}();
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST));


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");

var matchMedia = function matchMedia(query) {
  return window.matchMedia ? window.matchMedia(query) : null;
};
var PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
var PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');
var STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
var systemPreferencesTheme = function systemPreferencesTheme() {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].highContrast;
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  }
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
var onSystemPreferenceChange = function onSystemPreferenceChange(onChange) {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return function () {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return function () {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
var detectTheme = function detectTheme() {
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  var systemPreferences = systemPreferencesTheme();
  try {
    var local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === 'dark') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
    }
    if (local === 'light') {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
    }
    var parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    return new ___WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks);
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
var persistTheme = function persistTheme(theme) {
  var systemPreferences = systemPreferencesTheme();
  var nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  // custom blocks are managed by addon at runtime, don't save here
  if (theme.blocks !== systemPreferences.blocks && theme.blocks !== ___WEBPACK_IMPORTED_MODULE_0__["BLOCKS_CUSTOM"]) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }
};


/***/ }),

/***/ "./src/lib/tw-color-utils.js":
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
/*! exports provided: hex2hsv, hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
var hex2rgb = function hex2rgb(hex) {
  var parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
var rgb2hex = function rgb2hex(rgb) {
  var number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
var rgb2hsv = function rgb2hsv(rgb) {
  var rdif;
  var gdif;
  var bdif;
  var h;
  var s;
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var v = Math.max(r, g, b);
  var diff = v - Math.min(r, g, b);
  var diffc = function diffc(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
var hsv2rgb = function hsv2rgb(hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var hi = Math.floor(h) % 6;
  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - s * f);
  var t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
var hex2hsv = function hex2hsv(hex) {
  return rgb2hsv(hex2rgb(hex));
};
var hsv2hex = function hsv2hex(hsv) {
  return rgb2hex(hsv2rgb(hsv));
};


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


var appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
var render = function render(children) {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ })

}]);
//# sourceMappingURL=addon-settings~editor~embed~fullscreen~player.js.map