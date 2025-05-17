(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-fullscreen"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideOverflow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-fullscreen.sa-body-editor {\n  overflow: hidden !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideToolbar.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] {\n  display: none;\n  top: 0rem !important;\n}\n\n[class*=\"stage-header_stage-header-wrapper-overlay\"] {\n  display: block;\n  transform: translateY(-101%);\n  transition: transform 0.3s;\n}\n\n.phantom-header {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 8px;\n  display: block;\n  z-index: 5000;\n}\n\n.stage-header-hover {\n  transform: translateY(0%);\n  transition: transform 0.3s 0.25s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/removeBorder.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_full-screen\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"] {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\n[class*=\"stage_stage-overlays_\"][class*=\"stage_full-screen_\"] {\n  top: 0;\n  left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc((100vh - 44px) * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(calc(100vh - 44px), calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc(100vh * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(100vh, calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/fullscreen/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/fullscreen/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/fullscreen/userscript.js");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./hideOverflow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./removeBorder.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css");
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./resizeWindow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css");
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-loader!./resizeWindow_noToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css");
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-loader!./hideToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css");
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__);
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "hideOverflow.css": _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "removeBorder.css": _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "resizeWindow.css": _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "resizeWindow_noToolbar.css": _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default.a,
  "hideToolbar.css": _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default.a
};

/***/ }),

/***/ "./src/addons/addons/fullscreen/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/fullscreen/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Used for the automatic browser full screen setting
 * and for hiding the scrollbar in full screen.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref) {
    var addon, console, vm, updateStageSize, isEnteringFullscreen, updateBrowserFullscreen, updateScratchFullscreen, updatePhantomHeader, _updatePhantomHeader, setPageScrollbar, _setPageScrollbar, monitorScaler, resizeObserver, stage, initScaler, _initScaler;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _initScaler = function _initScaler3() {
            _initScaler = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return addon.tab.waitForElement("[class*=monitor-list_monitor-list-scaler]");
                  case 2:
                    monitorScaler = _context3.sent;
                    _context3.next = 5;
                    return addon.tab.waitForElement('[class*="stage-wrapper_full-screen"] [class*="stage_stage"] canvas');
                  case 5:
                    stage = _context3.sent;
                    resizeObserver = new ResizeObserver(function () {
                      var stageSize = stage.getBoundingClientRect();
                      // When switching between project page and editor, the canvas
                      // is removed from the DOM and inserted again in a different place.
                      // This causes the size to be reported as 0x0.
                      if (!stageSize.width || !stageSize.height) return;
                      // Width and height attributes of the canvas need to match the actual size.
                      var renderer = addon.tab.traps.vm.runtime.renderer;
                      if (renderer) renderer.resize(stageSize.width, stageSize.height);
                      // Scratch uses the `transform` CSS property on a stage overlay element
                      // to control the scaling of variable monitors.
                      var scale = stageSize.width / vm.runtime.stageWidth;
                      monitorScaler.style.transform = "scale(".concat(scale, ", ").concat(scale, ")");
                    });
                    resizeObserver.observe(stage);
                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return _initScaler.apply(this, arguments);
          };
          initScaler = function _initScaler2() {
            return _initScaler.apply(this, arguments);
          };
          _setPageScrollbar = function _setPageScrollbar3() {
            _setPageScrollbar = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var body;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return addon.tab.waitForElement(".sa-body-editor");
                  case 2:
                    body = _context2.sent;
                    if (addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                      body.classList.add("sa-fullscreen");
                    } else {
                      body.classList.remove("sa-fullscreen");
                    }
                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return _setPageScrollbar.apply(this, arguments);
          };
          setPageScrollbar = function _setPageScrollbar2() {
            return _setPageScrollbar.apply(this, arguments);
          };
          _updatePhantomHeader = function _updatePhantomHeader3() {
            _updatePhantomHeader = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var canvas, header, phantom, _header, _phantom;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!addon.self.disabled && addon.tab.redux.state.scratchGui.mode.isFullScreen && addon.settings.get("toolbar") === "hover")) {
                      _context.next = 17;
                      break;
                    }
                    _context.next = 3;
                    return addon.tab.waitForElement('[class*="stage_full-screen"] canvas');
                  case 3:
                    canvas = _context.sent;
                    _context.next = 6;
                    return addon.tab.waitForElement('[class^="stage-header_stage-header-wrapper"]');
                  case 6:
                    header = _context.sent;
                    phantom = header.parentElement.appendChild(document.createElement("div"));
                    phantom.classList.add("phantom-header");

                    // Make the header a child of the phantom, so that mouseleave will trigger when the
                    // mouse leaves the header OR the phantom header.
                    phantom.appendChild(header);
                    phantom.addEventListener("mouseenter", function () {
                      header.classList.add("stage-header-hover");
                    });
                    phantom.addEventListener("mouseleave", function () {
                      header.classList.remove("stage-header-hover");
                    });

                    // Listen for when the mouse moves above the page (helps to show header when not in browser full screen mode)
                    document.body.addEventListener("mouseleave", function (e) {
                      if (e.clientY < 8) {
                        header.classList.add("stage-header-hover");
                      }
                    });
                    // and for when the mouse re-enters the page
                    document.body.addEventListener("mouseenter", function () {
                      header.classList.remove("stage-header-hover");
                    });

                    // Pass click events on the phantom header onto the project player, essentially making it click-through
                    ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend", "wheel"].forEach(function (eventName) {
                      phantom.addEventListener(eventName, function (e) {
                        if (e.target.classList.contains("phantom-header")) {
                          canvas.dispatchEvent(new e.constructor(e.type, e));
                        }
                      });
                    });
                    _context.next = 21;
                    break;
                  case 17:
                    _context.next = 19;
                    return addon.tab.waitForElement('[class*="stage-header_stage-header-wrapper"]');
                  case 19:
                    _header = _context.sent;
                    if (_header.parentElement.classList.contains("phantom-header")) {
                      _phantom = _header.parentElement;
                      _phantom.parentElement.appendChild(_header);
                      _phantom.remove();
                    }
                  case 21:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _updatePhantomHeader.apply(this, arguments);
          };
          updatePhantomHeader = function _updatePhantomHeader2() {
            return _updatePhantomHeader.apply(this, arguments);
          };
          updateScratchFullscreen = function _updateScratchFullscr() {
            if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
              // If browser fullscreen is disabled, then Scratch fullscreen should also
              // be disabled.
              if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                addon.tab.redux.dispatch({
                  type: "scratch-gui/mode/SET_FULL_SCREEN",
                  isFullScreen: false
                });
              }
            }
          };
          updateBrowserFullscreen = function _updateBrowserFullscr() {
            if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
              // If Scratch fullscreen is enabled, then browser fullscreen should also
              // be enabled, and vice versa for disabling.
              if (addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement === null) {
                isEnteringFullscreen = true;
                document.documentElement.requestFullscreen().then(function () {
                  isEnteringFullscreen = false;
                })["catch"](function (err) {
                  console.error(err);
                  isEnteringFullscreen = false;
                });
              } else if (!addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement !== null) {
                document.exitFullscreen();
              }
            }
          };
          addon = _ref.addon, console = _ref.console;
          vm = addon.tab.traps.vm;
          updateStageSize = function updateStageSize() {
            document.documentElement.style.setProperty('--sa-fullscreen-width', vm.runtime.stageWidth);
            document.documentElement.style.setProperty('--sa-fullscreen-height', vm.runtime.stageHeight);
          };
          updateStageSize();
          vm.on('STAGE_SIZE_CHANGED', updateStageSize);

          // In Electron, after running requestFullscreen() a resize event can be fired before
          // document.fullscreenElement is updated. We want to ignore that event.
          isEnteringFullscreen = false; // "Browser fullscreen" is defined as the mode that hides the browser UI.
          // "Scratch fullscreen" is defined as the mode normally toggled by the
          // rightmost button above the stage.
          // The "phantom header" is a small strip at the top of the page that
          // brings the header into view when hovered.
          updatePhantomHeader();

          // Properly resize the canvas and scale variable monitors on stage resize.

          initScaler();

          // Running this on page load handles the case of the project initially
          // loading in Scratch fullscreen mode.
          setPageScrollbar();
          updateBrowserFullscreen();

          // Changing to or from Scratch fullscreen is signified by a state change
          // (URL change doesn't work when editing project without project page)
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            if (e.detail.action.type === "scratch-gui/mode/SET_FULL_SCREEN") {
              initScaler();
              updateBrowserFullscreen();
              setPageScrollbar();
              updatePhantomHeader();
            }
          });
          // Changing to or from browser fullscreen is signified by a window resize.
          window.addEventListener("resize", function () {
            if (!isEnteringFullscreen) {
              updateScratchFullscreen();
            }
          });
          // Handles the case of F11 full screen AND document full screen being enabled
          // at the same time.
          document.addEventListener("fullscreenchange", function () {
            if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
              addon.tab.redux.dispatch({
                type: "scratch-gui/mode/SET_FULL_SCREEN",
                isFullScreen: false
              });
            }
          });

          // These handle the case of the user already being in Scratch fullscreen
          // (without being in browser fullscreen) when the addon or sync option are
          // dynamically enabled.
          addon.settings.addEventListener("change", function () {
            updateBrowserFullscreen();
            updatePhantomHeader();
          });
          addon.self.addEventListener("disabled", function () {
            resizeObserver.disconnect();
            updatePhantomHeader();
          });
          addon.self.addEventListener("reenabled", function () {
            resizeObserver.observe(stage);
            updateBrowserFullscreen();
            updatePhantomHeader();
          });
        case 25:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-fullscreen.js.map