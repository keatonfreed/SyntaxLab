(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-variable-manager"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/variable-manager/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Change z-indexes to allow more than 3 tabs */\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\n  z-index: 10 !important;\n}\n[class*=\"gui_tab_\"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*=\"gui_tab_\"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*=\"gui_tab_\"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*=\"gui_tab_\"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url(" + escape(__webpack_require__(/*! ./search.svg */ "./src/addons/addons/variable-manager/search.svg")) + ");\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n\n[dir=\"rtl\"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager-too-big {\n  display: none;\n  cursor: pointer;\n  font: inherit;\n  font-style: italic;\n  color: inherit;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 8px;\n  opacity: 0.8;\n  width: 100%;\n  text-align: left;\n}\n.sa-var-manager-too-big:hover {\n  text-decoration: underline;\n}\n[data-too-big=\"true\"] .sa-var-manager-too-big {\n  display: block;\n}\n[data-too-big=\"true\"] .sa-var-manager-value-input {\n  display: none;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid var(--ui-black-transparent);\n  text-align: left;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzg1NWNkNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/variable-manager/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/variable-manager/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/variable-manager/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./search.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon.svg": _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "search.svg": _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/variable-manager/search.svg":
/*!*******************************************************!*\
  !*** ./src/addons/addons/variable-manager/search.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/variable-manager/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/variable-manager/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var addon, console, msg, vm, localVariables, globalVariables, preventUpdate, manager, searchBox, localVars, localHeading, localList, globalVars, globalHeading, globalList, varTab, varTabIcon, varTabText, updateHeadingVisibility, rowToVariableMap, observer, WrappedVariable, fullReload, quickReload, cleanup, setVisible, oldStep;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setVisible = function _setVisible(visible) {
            if (visible) {
              varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
              var contentArea = document.querySelector("[class^=gui_tabs]");
              contentArea.insertAdjacentElement("beforeend", manager);
              fullReload();
            } else {
              varTab.classList.remove(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
              manager.remove();
              cleanup();
            }
          };
          cleanup = function _cleanup() {
            localVariables = [];
            globalVariables = [];
          };
          quickReload = function _quickReload() {
            var _addon$tab$redux$stat4, _addon$tab$redux$stat5, _addon$tab$redux$stat6;
            if (((_addon$tab$redux$stat4 = addon.tab.redux.state) === null || _addon$tab$redux$stat4 === void 0 ? void 0 : (_addon$tab$redux$stat5 = _addon$tab$redux$stat4.scratchGui) === null || _addon$tab$redux$stat5 === void 0 ? void 0 : (_addon$tab$redux$stat6 = _addon$tab$redux$stat5.editorTab) === null || _addon$tab$redux$stat6 === void 0 ? void 0 : _addon$tab$redux$stat6.activeTabIndex) !== 3 || preventUpdate) return;
            var _iterator6 = _createForOfIteratorHelper(localVariables),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var variable = _step6.value;
                variable.updateValue();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            var _iterator7 = _createForOfIteratorHelper(globalVariables),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _variable3 = _step7.value;
                _variable3.updateValue();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          };
          fullReload = function _fullReload() {
            var _addon$tab$redux$stat, _addon$tab$redux$stat2, _addon$tab$redux$stat3;
            if (((_addon$tab$redux$stat = addon.tab.redux.state) === null || _addon$tab$redux$stat === void 0 ? void 0 : (_addon$tab$redux$stat2 = _addon$tab$redux$stat.scratchGui) === null || _addon$tab$redux$stat2 === void 0 ? void 0 : (_addon$tab$redux$stat3 = _addon$tab$redux$stat2.editorTab) === null || _addon$tab$redux$stat3 === void 0 ? void 0 : _addon$tab$redux$stat3.activeTabIndex) !== 3 || preventUpdate) return;
            var editingTarget = vm.runtime.getEditingTarget();
            var stage = vm.runtime.getTargetForStage();
            localVariables = editingTarget.isStage ? [] : Object.values(editingTarget.variables).filter(function (i) {
              return i.type === "" || i.type === "list";
            }).map(function (i) {
              return new WrappedVariable(i, editingTarget);
            });
            globalVariables = Object.values(stage.variables).filter(function (i) {
              return i.type === "" || i.type === "list";
            }).map(function (i) {
              return new WrappedVariable(i, stage);
            });
            updateHeadingVisibility();
            while (localList.firstChild) {
              localList.removeChild(localList.firstChild);
            }
            while (globalList.firstChild) {
              globalList.removeChild(globalList.firstChild);
            }
            var _iterator4 = _createForOfIteratorHelper(localVariables),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var variable = _step4.value;
                localList.appendChild(variable.row);
                variable.resizeInputIfList();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var _iterator5 = _createForOfIteratorHelper(globalVariables),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _variable2 = _step5.value;
                globalList.appendChild(_variable2.row);
                _variable2.resizeInputIfList();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          };
          updateHeadingVisibility = function _updateHeadingVisibil() {
            // used to hide the headings if there are no variables
            var filteredLocals = localVariables.filter(function (v) {
              return v.row.style.display !== "none";
            });
            var filteredGlobals = globalVariables.filter(function (v) {
              return v.row.style.display !== "none";
            });
            localHeading.style.display = filteredLocals.length === 0 ? "none" : "";
            globalHeading.style.display = filteredGlobals.length === 0 ? "none" : "";
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          vm = addon.tab.traps.vm;
          localVariables = [];
          globalVariables = [];
          preventUpdate = false;
          manager = document.createElement("div");
          manager.classList.add(addon.tab.scratchClass("asset-panel_wrapper"), "sa-var-manager");
          searchBox = document.createElement("input");
          searchBox.placeholder = msg("search");
          searchBox.className = addon.tab.scratchClass("input_input-form", {
            others: "sa-var-manager-searchbox"
          });
          searchBox.addEventListener("input", function (e) {
            var _iterator = _createForOfIteratorHelper(localVariables),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var variable = _step.value;
                variable.handleSearch(searchBox.value);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var _iterator2 = _createForOfIteratorHelper(globalVariables),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _variable = _step2.value;
                _variable.handleSearch(searchBox.value);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            updateHeadingVisibility();
          });
          manager.appendChild(searchBox);
          localVars = document.createElement("div");
          localHeading = document.createElement("span");
          localList = document.createElement("table");
          localHeading.className = "sa-var-manager-heading";
          localHeading.innerText = msg("for-this-sprite");
          localVars.appendChild(localHeading);
          localVars.appendChild(localList);
          globalVars = document.createElement("div");
          globalHeading = document.createElement("span");
          globalList = document.createElement("table");
          globalHeading.className = "sa-var-manager-heading";
          globalHeading.innerText = msg("for-all-sprites");
          globalVars.appendChild(globalHeading);
          globalVars.appendChild(globalList);
          manager.appendChild(localVars);
          manager.appendChild(globalVars);
          varTab = document.createElement("li");
          addon.tab.displayNoneWhileDisabled(varTab, {
            display: "flex"
          });
          varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab"), addon.tab.scratchClass("gui_tab"));
          // Cannot use number due to conflict after leaving and re-entering editor
          varTab.id = "react-tabs-sa-variable-manager";
          varTabIcon = addon.tab.recolorable();
          varTabIcon.draggable = false;
          varTabIcon.src = addon.self.getResource("/icon.svg") /* rewritten by pull.js */;
          varTabText = document.createElement("span");
          varTabText.innerText = msg("variables");
          varTab.appendChild(varTabIcon);
          varTab.appendChild(varTabText);
          rowToVariableMap = new WeakMap();
          observer = new IntersectionObserver(function (changes) {
            var _iterator3 = _createForOfIteratorHelper(changes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var change = _step3.value;
                var variable = rowToVariableMap.get(change.target);
                variable.setVisible(change.isIntersecting);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }, {
            rootMargin: "100px"
          });
          WrappedVariable = /*#__PURE__*/function () {
            function WrappedVariable(scratchVariable, target) {
              _classCallCheck(this, WrappedVariable);
              this.scratchVariable = scratchVariable;
              this.target = target;
              this.visible = false;
              this.ignoreTooBig = false;
              this.buildDOM();
            }
            return _createClass(WrappedVariable, [{
              key: "updateValue",
              value: function updateValue(force) {
                if (!this.visible && !force) return;
                var newValue;
                var maxSafeLength;
                if (this.scratchVariable.type === "list") {
                  newValue = this.scratchVariable.value.join("\n");
                  maxSafeLength = 5000000;
                } else {
                  newValue = this.scratchVariable.value;
                  maxSafeLength = 1000000;
                }
                if (!this.ignoreTooBig && newValue.length > maxSafeLength) {
                  this.input.value = "";
                  this.row.dataset.tooBig = true;
                  return;
                }
                this.row.dataset.tooBig = false;
                if (newValue !== this.input.value) {
                  this.input.disabled = false;
                  this.input.value = newValue;
                }
              }
            }, {
              key: "handleSearch",
              value: function handleSearch(search) {
                // this doesn't check if this.visible is true or whatever. maybe that would improve performance while typing into the search box but it's probably fine™
                if (this.scratchVariable.name.toLowerCase().includes(search.toLowerCase()) || !search) {
                  // fuzzy searches are lame we are too cool for fuzzy searches (& i doubt they're even the right thing to use here, this should work fine enough)
                  this.row.style.display = ""; // make the row normal
                  this.updateValue(true); // force it to update because its hidden and it wouldn't be able to otherwise
                } else {
                  this.row.style.display = "none"; // set the entire row as hidden
                }
              }
            }, {
              key: "resizeInputIfList",
              value: function resizeInputIfList() {
                if (this.scratchVariable.type === "list") {
                  this.input.style.height = "auto";
                  var height = Math.min(1000, this.input.scrollHeight);
                  if (height > 0) {
                    this.input.style.height = height + "px";
                  }
                }
              }
            }, {
              key: "setVisible",
              value: function setVisible(visible) {
                if (this.visible === visible) return;
                this.visible = visible;
                if (visible) {
                  this.updateValue();
                }
              }
            }, {
              key: "buildDOM",
              value: function buildDOM() {
                var _this = this;
                var id = "sa-variable-manager-".concat(this.scratchVariable.id);
                var row = document.createElement("tr");
                this.row = row;
                var labelCell = document.createElement("td");
                labelCell.className = "sa-var-manager-name";
                var label = document.createElement("input");
                label.value = this.scratchVariable.name;
                label.htmlFor = id;
                var onLabelOut = function onLabelOut(e) {
                  e.preventDefault();
                  var workspace = Blockly.getMainWorkspace();
                  var newName = label.value;
                  if (newName === _this.scratchVariable.name) {
                    // If the name is unchanged before we make sure the cloud prefix exists, there's nothing to do.
                    return;
                  }
                  var CLOUD_SYMBOL = "☁";
                  var CLOUD_PREFIX = CLOUD_SYMBOL + " ";
                  if (_this.scratchVariable.isCloud) {
                    if (newName.startsWith(CLOUD_SYMBOL)) {
                      if (!newName.startsWith(CLOUD_PREFIX)) {
                        // There isn't a space between the cloud symbol and the name, so add one.
                        newName = newName.substring(0, 1) + " " + newName.substring(1);
                      }
                    } else {
                      newName = CLOUD_PREFIX + newName;
                    }
                  }
                  var nameAlreadyUsed = false;
                  if (_this.target.isStage) {
                    // Global variables must not conflict with any global variables or local variables in any sprite.
                    var existingNames = vm.runtime.getAllVarNamesOfType(_this.scratchVariable.type);
                    nameAlreadyUsed = existingNames.includes(newName);
                  } else {
                    // Local variables must not conflict with any global variables or local variables in this sprite.
                    nameAlreadyUsed = !!workspace.getVariable(newName, _this.scratchVariable.type);
                  }
                  var isEmpty = !newName.trim();
                  if (isEmpty || nameAlreadyUsed) {
                    label.value = _this.scratchVariable.name;
                  } else {
                    workspace.renameVariableById(_this.scratchVariable.id, newName);
                    // Only update the input's value when we need to to avoid resetting undo history.
                    if (label.value !== newName) {
                      label.value = newName;
                    }
                  }
                };
                label.addEventListener("keydown", function (e) {
                  if (e.key === "Enter") e.target.blur();
                });
                label.addEventListener("focusout", onLabelOut);
                label.addEventListener("focus", function (e) {
                  preventUpdate = true;
                  manager.classList.add("freeze");
                });
                label.addEventListener("blur", function (e) {
                  preventUpdate = false;
                  manager.classList.remove("freeze");
                });
                labelCell.appendChild(label);
                rowToVariableMap.set(row, this);
                observer.observe(row);
                var valueCell = document.createElement("td");
                valueCell.className = "sa-var-manager-value";
                var tooBigElement = document.createElement("button");
                this.tooBigElement = tooBigElement;
                tooBigElement.textContent = msg("too-big");
                tooBigElement.className = "sa-var-manager-too-big";
                tooBigElement.addEventListener("click", function () {
                  _this.ignoreTooBig = true;
                  _this.updateValue(true);
                });
                var input;
                if (this.scratchVariable.type === "list") {
                  input = document.createElement("textarea");
                } else {
                  input = document.createElement("input");
                }
                input.className = "sa-var-manager-value-input";
                input.id = id;
                this.input = input;
                this.updateValue(true);
                if (this.scratchVariable.type === "list") {
                  this.input.addEventListener("input", function () {
                    return _this.resizeInputIfList();
                  }, false);
                }
                var onInputOut = function onInputOut(e) {
                  e.preventDefault();
                  if (_this.scratchVariable.type === "list") {
                    vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value.split("\n"));
                  } else {
                    vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value);
                  }
                  input.blur();
                };
                input.addEventListener("keydown", function (e) {
                  if (e.target.nodeName === "INPUT" && e.key === "Enter") e.target.blur();
                });
                input.addEventListener("focusout", onInputOut);
                input.addEventListener("focus", function (e) {
                  preventUpdate = true;
                  manager.classList.add("freeze");
                });
                input.addEventListener("blur", function (e) {
                  preventUpdate = false;
                  manager.classList.remove("freeze");
                });
                valueCell.appendChild(input);
                valueCell.appendChild(tooBigElement);
                row.appendChild(labelCell);
                row.appendChild(valueCell);
                this.handleSearch(searchBox.value);
              }
            }]);
          }();
          varTab.addEventListener("click", function (e) {
            addon.tab.redux.dispatch({
              type: "scratch-gui/navigation/ACTIVATE_TAB",
              activeTabIndex: 3
            });
          });
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (_ref3) {
            var detail = _ref3.detail;
            if (detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
              var varManagerWasSelected = document.body.contains(manager);
              var switchedToVarManager = detail.action.activeTabIndex === 3;
              if (varManagerWasSelected && !switchedToVarManager) {
                // Fixes #5773
                queueMicrotask(function () {
                  return window.dispatchEvent(new Event("resize"));
                });
              }
              setVisible(switchedToVarManager);
            } else if (detail.action.type === "scratch-gui/mode/SET_PLAYER") {
              if (!detail.action.isPlayerOnly && addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
                // DOM doesn't actually exist yet
                queueMicrotask(function () {
                  return setVisible(true);
                });
              }
            }
          });
          vm.runtime.on("PROJECT_LOADED", function () {
            try {
              fullReload();
            } catch (e) {
              console.error(e);
            }
          });
          vm.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE", function () {
            try {
              fullReload();
            } catch (e) {
              console.error(e);
            }
          });
          oldStep = vm.runtime._step;
          vm.runtime._step = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var ret = oldStep.call.apply(oldStep, [this].concat(args));
            try {
              quickReload();
            } catch (e) {
              console.error(e);
            }
            return ret;
          };
          addon.self.addEventListener("disabled", function () {
            if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
              addon.tab.redux.dispatch({
                type: "scratch-gui/navigation/ACTIVATE_TAB",
                activeTabIndex: 2
              });
            }
          });
        case 55:
          if (false) {}
          _context.next = 58;
          return addon.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 58:
          addon.tab.appendToSharedSpace({
            space: "afterSoundTab",
            element: varTab,
            order: 3
          });
          _context.next = 55;
          break;
        case 61:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-variable-manager.js.map