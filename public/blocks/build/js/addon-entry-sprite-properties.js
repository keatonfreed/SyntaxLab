(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-sprite-properties"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/sprite-properties/userstyle.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class^=\"sprite-info_sprite-info_\"] {\n  height: 0;\n  padding: 0 0.75rem;\n  overflow: hidden;\n  transition-property: height, padding, transform;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-hide-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  border: none;\n}\n\n[class^=\"sprite-selector_scroll-wrapper_\"],\n/* Also take full height if `sprite-properties` is hiding the properties (specificity) */\n.sa-hide-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: 100%;\n  transition-property: height;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* The height needs to be known for the animation to work.\n     6.5rem + 5px is the exact height of sprite info when\n     this addon is enabled:\n       0.75rem (top padding)\n     + 2rem + 2px (.icon-wrappers in the first row)\n     + 0.5rem (margin between rows)\n     + 2rem + 2px (.icon-wrappers in the second row)\n     + 1.25rem (close button)\n     + 1px (bottom border) */\n  height: calc(6.5rem + 5px);\n  padding: 0.75rem;\n  padding-bottom: 0;\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* In wide languages, add in addition to the previous:\n     + 2 * 0.625rem * 1.2 (each row's text label now uses vertical space)\n     + 2 * 0.25rem (each row has extra padding) */\n  height: calc(6.5rem + 5px + 2rem);\n}\n[class^=\"label_input-group-column_\"] {\n  /* Default line-height: normal is inconsistent across browsers, but above style needs constant line-height. */\n  line-height: 1.2;\n}\n\n/* see heights in above selectors */\n.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px);\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px - 2rem);\n}\n\n.sa-sprite-properties-info-btn {\n  /* !important to override displayNoneWhileDisabled's inline styles */\n  display: flex !important;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  width: 1rem;\n  height: 1rem;\n  top: -2px;\n  left: -2px;\n  border: none;\n  border-radius: 100%;\n  background-color: var(--editorDarkMode-primary, hsla(260, 60%, 60%, 1));\n}\n[dir=\"rtl\"] .sa-sprite-properties-info-btn {\n  left: auto;\n  right: -2px;\n}\n.sa-show-sprite-properties .sa-sprite-properties-info-btn {\n  display: none !important;\n}\n\n.sa-sprite-properties-info-btn img {\n  width: calc(1rem - 6px);\n  height: calc(1rem - 6px);\n  filter: var(--editorDarkMode-primary-filter);\n}\n\n.sa-sprite-properties-close-btn {\n  width: 100%;\n  height: 1.25rem;\n  padding: 0;\n  padding-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  margin-left: auto;\n  background-color: transparent;\n  user-select: none;\n}\n\n.sa-sprite-properties-close-btn img {\n  filter: var(--editorDarkMode-accent-filter);\n  transition: opacity 0.25s ease-out;\n}\n\n.sa-sprite-properties-close-btn:hover img {\n  opacity: 0.75;\n}\n\n/* Prevent double clicking from highlighting the \"Choose a sprite\" button */\n[class*=\"action-menu_main-button_\"] {\n  user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIuNyIgaGVpZ2h0PSI4Ljc5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjM2IDFhMS40MyAxLjQzIDAgMCAwLTEgLjQyTDEuNDIgNS4zNGExLjQ0IDEuNDQgMCAwIDAgMCAyYy41Ni41NiA5LjMxLjU2IDkuODcgMGExLjQ0IDEuNDQgMCAwIDAgMC0yTDcuMzcgMS40MkExLjQzIDEuNDMgMCAwIDAgNi4zNiAxeiIgZmlsbD0iIzU3NWU3NSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg":
/*!********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAwLjU3IDAuNTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNLjIzMi4yMzJ2LjAzNmguMDM2Vi41SC4yMTR2LjAzNWguMTQzVi41SC4zMDRWLjIzM3oiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9Ii4yODUiIGN5PSIuMDcxIiByPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/sprite-properties/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/sprite-properties/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/sprite-properties/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./collapse.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg");
/* harmony import */ var _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./info.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "collapse.svg": _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "info.svg": _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/sprite-properties/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/sprite-properties/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var addon, console, msg, SHOW_PROPS_CLASS, HIDE_PROPS_CLASS, PROPS_INFO_BTN_CLASS, PROPS_CLOSE_BTN_CLASS, propertiesPanel, observer, setPropertiesPanelVisible, togglePropertiesPanel, autoHidePanel, isDirectionPopoverOpen, applySettings, createButton, infoButton, closeButton, injectInfoButton, injectCloseButton, updateWideLocaleMode, spriteSelector, itemsWrapper;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          updateWideLocaleMode = function _updateWideLocaleMode() {
            // Certain "wide" languages such as Japanese use a different layout for the sprite info panel
            // Easiest way to detect this is with this selector that only exists when the sprite info panel
            // is using the layout with text above the input.
            // Note that when the stage is in small mode, "wide" languages use the same info panel as other
            // languages.
            // List of languages is here:
            // https://github.com/scratchfoundation/scratch-gui/blob/e15b2dfa3a2e58e80fae8d1586c7f56aa0cc0ede/src/lib/locale-utils.js#L6-L18
            var isWideLocale = !!propertiesPanel.querySelector("[class^=label_input-group-column_]");
            document.body.classList.toggle("sa-sprite-properties-wide-locale", isWideLocale);
          };
          injectCloseButton = function _injectCloseButton() {
            if (!closeButton) {
              closeButton = createButton(PROPS_CLOSE_BTN_CLASS, "/collapse.svg", msg("close-properties-panel-tooltip"));
            }
            propertiesPanel.appendChild(closeButton);
          };
          injectInfoButton = function _injectInfoButton() {
            if (!infoButton) {
              infoButton = createButton(PROPS_INFO_BTN_CLASS, "/info.svg", msg("open-properties-panel-tooltip"));
            }
            var selectedSprite = propertiesPanel.parentNode.querySelector('[class*="sprite-selector-item_is-selected"]');
            if (infoButton.parentNode !== selectedSprite) {
              if (selectedSprite) {
                selectedSprite.appendChild(infoButton);
              } else {
                infoButton.remove();
              }
            }
          };
          createButton = function _createButton(className, iconPath, tooltip) {
            var buttonIcon = document.createElement("img");
            buttonIcon.setAttribute("src", addon.self.getResource(iconPath)) /* rewritten by pull.js */;
            buttonIcon.draggable = false;
            var button = document.createElement("button");
            button.classList.add(className);
            button.title = tooltip;
            button.addEventListener("click", function () {
              return togglePropertiesPanel();
            });
            button.appendChild(buttonIcon);
            addon.tab.displayNoneWhileDisabled(button, {
              display: "flex"
            });
            return button;
          };
          applySettings = function _applySettings() {
            var visibleByDefault = !addon.settings.get("autoCollapse") && !addon.settings.get("hideByDefault");
            setPropertiesPanelVisible(visibleByDefault);
          };
          autoHidePanel = function _autoHidePanel() {
            if (addon.settings.get("autoCollapse")) {
              setPropertiesPanelVisible(false);
            }
          };
          togglePropertiesPanel = function _togglePropertiesPane() {
            var isCurrentlyOpen = document.body.classList.contains(SHOW_PROPS_CLASS);
            setPropertiesPanelVisible(!isCurrentlyOpen);
          };
          setPropertiesPanelVisible = function _setPropertiesPanelVi(visible) {
            document.body.classList.toggle(SHOW_PROPS_CLASS, visible);
            document.body.classList.toggle(HIDE_PROPS_CLASS, !visible);
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          SHOW_PROPS_CLASS = "sa-show-sprite-properties";
          HIDE_PROPS_CLASS = "sa-hide-sprite-properties";
          PROPS_INFO_BTN_CLASS = "sa-sprite-properties-info-btn";
          PROPS_CLOSE_BTN_CLASS = "sa-sprite-properties-close-btn";
          /** @type {HTMLElement} */
          // A mutation observer is the only reliable way to detect when a different sprite has
          // been selected or when the folder that contains the focused sprite has been opened.
          observer = new MutationObserver(function () {
            injectInfoButton();
          }); // Toggle the properties panel when double clicking in the sprite grid
          document.addEventListener("click", function (e) {
            if (e.detail === 2 && e.target.closest('[class^="sprite-selector_scroll-wrapper_"]')) {
              togglePropertiesPanel();
            }
          });
          isDirectionPopoverOpen = function isDirectionPopoverOpen() {
            return document.querySelector("body > div.Popover > div > div > [class*=direction-picker_button-row_]");
          }; // Close properties panel when mouse leaves the entire sprite panel
          document.body.addEventListener("mouseleave", function (e) {
            if (e.target.matches('[class*="sprite-selector_sprite-selector_"]')) {
              if (!isDirectionPopoverOpen()) autoHidePanel();
            }
          }, {
            capture: true
          });
          addon.settings.addEventListener("change", autoHidePanel);
          addon.self.addEventListener("reenabled", applySettings);
          applySettings();
          addon.self.addEventListener("disabled", function () {
            setPropertiesPanelVisible(true);
          });

          /** @type {HTMLElement} */

          /** @type {HTMLElement} */

          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            if (e.detail.action.type === "scratch-gui/StageSize/SET_STAGE_SIZE") {
              setTimeout(updateWideLocaleMode);
            }
          });
        case 23:
          if (false) {}
          _context.next = 26;
          return addon.tab.waitForElement('[class^="sprite-info_sprite-info_"]', {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 26:
          propertiesPanel = _context.sent;
          spriteSelector = propertiesPanel.parentNode;
          itemsWrapper = spriteSelector.querySelector('[class*="sprite-selector_items-wrapper_"]');
          observer.observe(itemsWrapper, {
            childList: true,
            subtree: true
          });
          updateWideLocaleMode();
          injectInfoButton();
          injectCloseButton();
          _context.next = 23;
          break;
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-sprite-properties.js.map