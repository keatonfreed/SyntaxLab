(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-flyout"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-flyout/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tabs_\"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir=\"rtl\"] .sa-flyout-border-1,\n[dir=\"rtl\"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--editorDarkMode-page, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir=\"ltr\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"ltr\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir=\"rtl\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"rtl\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir=\"ltr\"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir=\"rtl\"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir=\"rtl\"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--editorDarkMode-accent, white);\n  border: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: var(--editorDarkMode-primary, #855cd6);\n  border-color: var(--editorDarkMode-primary-variant, #714eb6);\n}\n\n.sa-lock-button img {\n  width: 20px;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n}\n\n.sa-lock-object.locked img {\n  filter: var(--editorDarkMode-primary-filter, none);\n}\n\n.sa-hide-flyout-not-fullscreen .sa-body-editor [class*=\"gui_stage-and-target-wrapper\"] {\n  position: relative;\n  /* We need to be above these to hide the flyout while dragging blocks: */\n  /* .blocklyFlyout (z-index: 20) */\n  /* .blocklyFlyoutScrollbar (z-index: 30) */\n  /* and above these so that dragged sprites aren't obscured: */\n  /* .blocklyToolboxDiv (z-index: 40) */\n  /* .gui_extension-button-container_b4rCs (z-index: 42) */\n  z-index: 43;\n  padding-inline: 0.5rem;\n  background-color: var(--editorDarkMode-page, hsl(215, 100%, 95%));\n}\n\n[class*=\"gui_stage-and-target-wrapper_\"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/hide-flyout/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/hide-flyout/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-flyout/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./lock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg");
/* harmony import */ var _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./unlock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "lock.svg": _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "unlock.svg": _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/hide-flyout/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/hide-flyout/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var addon, console, msg, placeHolderDiv, lockObject, lockButton, lockIcon, flyOut, scrollBar, toggle, flyoutLock, closeOnMouseUp, scrollAnimation, SVG_NS, Blockly, getSpeedValue, getToggleSetting, setTransition, removeTransition, updateLockDisplay, autoLock, onmouseenter, onmouseleave, updateIsFullScreen, didOneTimeSetup, doOneTimeSetup, blocksWrapper, injectionDiv, borderElement1, borderElement2, toolbox, addExtensionButton, _i3, _arr3, element;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          doOneTimeSetup = function _doOneTimeSetup() {
            if (didOneTimeSetup) {
              return;
            }
            didOneTimeSetup = true;
            addon.tab.redux.initialize();
            addon.tab.redux.addEventListener("statechanged", function (e) {
              switch (e.detail.action.type) {
                // Event casted when you switch between tabs
                case "scratch-gui/navigation/ACTIVATE_TAB":
                  {
                    // always 0, 1, 2
                    var toggleSetting = getToggleSetting();
                    if (e.detail.action.activeTabIndex === 0 && !addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) {
                      onmouseleave(null, 0);
                      toggle = false;
                    }
                    break;
                  }
                case "scratch-gui/mode/SET_FULL_SCREEN":
                  updateIsFullScreen();
                  break;
              }
            });
            document.body.addEventListener("mouseup", function () {
              if (closeOnMouseUp) {
                onmouseleave();
                closeOnMouseUp = false;
              }
            });
            if (addon.self.enabledLate && getToggleSetting() === "category" && !addon.settings.get("lockLoad")) {
              Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
            }
            addon.self.addEventListener("disabled", function () {
              Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true);
            });
            addon.self.addEventListener("reenabled", function () {
              if (getToggleSetting() === "category" && !addon.settings.get("lockLoad")) {
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                onmouseleave(null, 0);
                toggle = false;
              }
            });
            addon.settings.addEventListener("change", function () {
              if (addon.self.disabled) return;
              if (getToggleSetting() === "category") {
                // switching to category click mode
                // close the flyout unless it's locked
                if (flyoutLock) {
                  toggle = true;
                  flyoutLock = false;
                  updateLockDisplay();
                } else {
                  Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                  onmouseleave(null, 0);
                  toggle = false;
                }
              } else {
                // switching from category click to a different mode
                if (addon.settings.get("lockLoad")) {
                  flyoutLock = true;
                  updateLockDisplay();
                } else {
                  onmouseleave();
                }
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true);
              }
            });

            // category click mode
            var oldSetSelectedItem = Blockly.Toolbox.prototype.setSelectedItem;
            Blockly.Toolbox.prototype.setSelectedItem = function (item) {
              var shouldScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              var previousSelection = this.selectedItem_;
              oldSetSelectedItem.call(this, item, shouldScroll);
              if (addon.self.disabled || getToggleSetting() !== "category") return;
              if (!shouldScroll && !toggle) {
                // ignore initial selection when updating the toolbox
                item.setSelected(false);
              } else if (item === previousSelection) {
                toggle = !toggle;
                if (toggle) onmouseenter();else {
                  onmouseleave();
                  item.setSelected(false);
                }
              } else if (!toggle) {
                scrollAnimation = false;
                toggle = true;
                onmouseenter();
              }
            };
            var oldSelectCategoryById = Blockly.Toolbox.prototype.selectCategoryById;
            Blockly.Toolbox.prototype.selectCategoryById = function () {
              // called after populating the toolbox
              // ignore if the palette is closed
              if (!addon.self.disabled && getToggleSetting() === "category" && !toggle) return;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return oldSelectCategoryById.call.apply(oldSelectCategoryById, [this].concat(args));
            };
            var oldStepScrollAnimation = Blockly.Flyout.prototype.stepScrollAnimation;
            Blockly.Flyout.prototype.stepScrollAnimation = function () {
              // scrolling should not be animated when opening the flyout in category click mode
              if (!scrollAnimation) {
                this.scrollbar_.set(this.scrollTarget);
                this.scrollTarget = null;
                scrollAnimation = true;
                return;
              }
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return oldStepScrollAnimation.apply(this, args);
            };
          };
          onmouseleave = function _onmouseleave(e) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getSpeedValue();
            if (flyoutLock) return;
            if (e && e.buttons) {
              // dragging a block or scrollbar
              closeOnMouseUp = true;
              return;
            }
            setTransition(speed);
            flyOut.classList.add("sa-flyoutClose");
            scrollBar.classList.add("sa-flyoutClose");
            setTimeout(function () {
              var _addon$tab$traps$getW2;
              (_addon$tab$traps$getW2 = addon.tab.traps.getWorkspace()) === null || _addon$tab$traps$getW2 === void 0 ? void 0 : _addon$tab$traps$getW2.recordCachedAreas();
              removeTransition();
            }, speed * 1000);
          };
          onmouseenter = function _onmouseenter(e) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // If a mouse event was passed, only open flyout if the workspace isn't being dragged
            if (!e || e.buttons === 0 || document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")) {
              speed = _typeof(speed) === "object" ? getSpeedValue() : speed;
              setTransition(speed);
              flyOut.classList.remove("sa-flyoutClose");
              scrollBar.classList.remove("sa-flyoutClose");
              setTimeout(function () {
                var _addon$tab$traps$getW;
                (_addon$tab$traps$getW = addon.tab.traps.getWorkspace()) === null || _addon$tab$traps$getW === void 0 ? void 0 : _addon$tab$traps$getW.recordCachedAreas();
                removeTransition();
              }, speed * 1000);
            }
            closeOnMouseUp = false; // only close if the mouseup event happens outside the flyout
          };
          autoLock = function _autoLock() {
            var option = addon.settings.get("lockLoad");
            if (option) {
              if (getToggleSetting() === "category") {
                toggle = true;
              } else {
                flyoutLock = option;
                updateLockDisplay();
              }
              flyOut.classList.remove("sa-flyoutClose");
              scrollBar.classList.remove("sa-flyoutClose");
            }
          };
          updateLockDisplay = function _updateLockDisplay() {
            lockObject.classList.toggle("locked", flyoutLock);
            lockButton.title = flyoutLock ? msg("unlock") : msg("lock");
            lockIcon.src = addon.self.getResource("/".concat(flyoutLock ? "" : "un", "lock.svg")) /* rewritten by pull.js */;
          };
          removeTransition = function _removeTransition() {
            for (var _i2 = 0, _arr2 = [flyOut, scrollBar]; _i2 < _arr2.length; _i2++) {
              var element = _arr2[_i2];
              element.style.removeProperty("transition-duration");
            }
          };
          setTransition = function _setTransition(speed) {
            for (var _i = 0, _arr = [flyOut, scrollBar]; _i < _arr.length; _i++) {
              var element = _arr[_i];
              element.style.transitionDuration = "".concat(speed, "s");
            }
          };
          getToggleSetting = function _getToggleSetting() {
            return addon.settings.get("toggle");
          };
          getSpeedValue = function _getSpeedValue() {
            var data = {
              none: "0",
              "short": "0.2",
              "default": "0.3",
              "long": "0.5"
            };
            return data[addon.settings.get("speed")];
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          placeHolderDiv = null;
          lockObject = null;
          lockButton = null;
          lockIcon = null;
          flyOut = null;
          scrollBar = null;
          toggle = false;
          flyoutLock = false;
          closeOnMouseUp = false;
          scrollAnimation = true;
          SVG_NS = "http://www.w3.org/2000/svg";
          _context.next = 23;
          return addon.tab.traps.getBlockly();
        case 23:
          Blockly = _context.sent;
          updateIsFullScreen = function updateIsFullScreen() {
            var isFullScreen = addon.tab.redux.state.scratchGui.mode.isFullScreen;
            document.documentElement.classList.toggle("sa-hide-flyout-not-fullscreen", !isFullScreen);
          };
          updateIsFullScreen();
          didOneTimeSetup = false;
        case 27:
          if (false) {}
          _context.next = 30;
          return addon.tab.waitForElement(".blocklyFlyout", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/theme/SET_THEME", "fontsLoaded/SET_FONTS_LOADED"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 30:
          flyOut = _context.sent;
          scrollBar = document.querySelector(".blocklyFlyoutScrollbar");
          blocksWrapper = document.querySelector('[class*="gui_blocks-wrapper_"]');
          injectionDiv = document.querySelector(".injectionDiv"); // Code editor left border
          borderElement1 = document.createElement("div");
          borderElement1.className = "sa-flyout-border-1";
          addon.tab.displayNoneWhileDisabled(borderElement1);
          injectionDiv.appendChild(borderElement1);
          borderElement2 = document.createElement("div");
          borderElement2.className = "sa-flyout-border-2";
          addon.tab.displayNoneWhileDisabled(borderElement2);
          injectionDiv.appendChild(borderElement2);

          // Placeholder Div
          if (placeHolderDiv) placeHolderDiv.remove();
          placeHolderDiv = document.createElement("div");
          blocksWrapper.appendChild(placeHolderDiv);
          placeHolderDiv.className = "sa-flyout-placeHolder";
          placeHolderDiv.style.display = "none"; // overridden by userstyle if the addon is enabled

          // Lock image
          if (lockObject) lockObject.remove();
          lockObject = document.createElementNS(SVG_NS, "foreignObject");
          lockObject.setAttribute("class", "sa-lock-object");
          lockObject.style.display = "none"; // overridden by userstyle if the addon is enabled
          lockButton = document.createElement("button");
          lockButton.className = "sa-lock-button";
          lockIcon = document.createElement("img");
          lockIcon.alt = "";
          updateLockDisplay();
          lockButton.onclick = function () {
            flyoutLock = !flyoutLock;
            updateLockDisplay();
          };
          lockButton.appendChild(lockIcon);
          lockObject.appendChild(lockButton);
          flyOut.appendChild(lockObject);
          onmouseleave(null, 0);
          toggle = false;
          toolbox = document.querySelector(".blocklyToolboxDiv");
          addExtensionButton = document.querySelector("[class^=gui_extension-button-container_]");
          for (_i3 = 0, _arr3 = [toolbox, addExtensionButton, flyOut, scrollBar]; _i3 < _arr3.length; _i3++) {
            element = _arr3[_i3];
            element.onmouseenter = function (e) {
              var toggleSetting = getToggleSetting();
              if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseenter(e);
            };
            element.onmouseleave = function (e) {
              var toggleSetting = getToggleSetting();
              if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseleave(e);
            };
          }
          placeHolderDiv.onmouseenter = function (e) {
            if (!addon.self.disabled && getToggleSetting() === "hover") onmouseenter(e);
          };
          placeHolderDiv.onmouseleave = function (e) {
            if (!addon.self.disabled && getToggleSetting() === "hover") onmouseleave(e);
          };
          doOneTimeSetup();
          autoLock();
          Blockly.svgResize(Blockly.getMainWorkspace());
          _context.next = 27;
          break;
        case 72:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-flyout.js.map