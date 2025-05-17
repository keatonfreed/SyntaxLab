(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-vol-slider"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/hover.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\n  position: relative;\n  /* Size when the slider is hidden - same as icon */\n  width: 20px;\n  box-sizing: content-box;\n}\n\n.sa-vol-slider-inner {\n  position: absolute;\n  top: 0;\n  height: 100%;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-inner {\n  left: 0.25rem;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-inner {\n  right: 0.25rem;\n}\n\n.sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  opacity: 0;\n  width: 0;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  margin-left: -3px;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  margin-right: -3px;\n}\n\n.sa-vol-slider-inner:hover {\n  z-index: 1;\n}\n\n.pos-container-container,\n.clone-container-container,\n[class*=\"turbo-mode_turbo-container\"] {\n  transition: opacity 0.25s ease;\n}\n\n.sa-vol-slider:hover ~ .pos-container-container,\n.sa-vol-slider:hover ~ .clone-container-container,\n.sa-vol-slider:hover ~ [class*=\"turbo-mode_turbo-container\"] {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/userstyle.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\n  /* Same lateral padding as .clone-container-container */\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.sa-vol-slider-inner {\n  display: flex;\n  align-items: center;\n}\n\n.sa-vol-slider-icon {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n}\n.sa-vol-slider-icon[data-icon=\"mute\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./mute.svg */ "./src/addons/addons/vol-slider/mute.svg")) + ");\n}\n.sa-vol-slider-icon[data-icon=\"quiet\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./quiet.svg */ "./src/addons/addons/vol-slider/quiet.svg")) + ");\n}\n.sa-vol-slider-icon[data-icon=\"loud\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./loud.svg */ "./src/addons/addons/vol-slider/loud.svg")) + ");\n}\n.sa-vol-slider-icon:hover,\n.sa-vol-slider-input:hover {\n  cursor: pointer;\n}\n\n.sa-small-stage .sa-vol-slider-input,\n.sa-small-stage .sa-vol-slider-icon:not([data-icon=\"mute\"]) {\n  display: none !important;\n}\n.sa-small-stage .sa-vol-slider {\n  width: 0;\n}\n\n.sa-vol-slider-input {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 50px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #de91de;\n  transition: all 0.25s ease;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-input {\n  margin-left: 3px;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-input {\n  margin-right: 3px;\n}\n\n.sa-vol-slider-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #c234c2;\n}\n\n.sa-vol-slider-input::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border: none;\n  border-radius: 50%;\n  background-color: #c234c2;\n}\n\n.sa-mute-project-icon {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb3VuZGVyIj4KICAgICAgICAgICAgPGcgaWQ9ImxvdWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjExNzIsNS4yMTI5IEM5LjcyOTIsNS44MjU5IDkuNzI5Miw2LjgzMTkgOS4xMTcyLDcuNDQ0OSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4zNDg2LDIuOTgxNSBDMTMuMTk2Niw0LjgyOTUgMTMuMTk2Niw3LjgyOTUgMTEuMzQ4Niw5LjY3NjUiIGlkPSJTdHJva2UtNSIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvZnRlciI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yNSw0Ljg2NDUxMjUgQzkuOTM4NSw1LjU1NDEzNzUgOS45Mzg1LDYuNjg1ODg3NSA5LjI1LDcuMzc1NTEyNSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/vol-slider/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/vol-slider/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/vol-slider/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./hover.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css");
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./loud.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg");
/* harmony import */ var _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./mute.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg");
/* harmony import */ var _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./quiet.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg");
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "hover.css": _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "loud.svg": _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "mute.svg": _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "quiet.svg": _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/vol-slider/loud.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/loud.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb3VuZGVyIj4KICAgICAgICAgICAgPGcgaWQ9ImxvdWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjExNzIsNS4yMTI5IEM5LjcyOTIsNS44MjU5IDkuNzI5Miw2LjgzMTkgOS4xMTcyLDcuNDQ0OSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4zNDg2LDIuOTgxNSBDMTMuMTk2Niw0LjgyOTUgMTMuMTk2Niw3LjgyOTUgMTEuMzQ4Niw5LjY3NjUiIGlkPSJTdHJva2UtNSIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/vol-slider/mute.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/mute.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/quiet.svg":
/*!************************************************!*\
  !*** ./src/addons/addons/vol-slider/quiet.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvZnRlciI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yNSw0Ljg2NDUxMjUgQzkuOTM4NSw1LjU1NDEzNzUgOS45Mzg1LDYuNjg1ODg3NSA5LjI1LDcuMzc1NTEyNSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/vol-slider/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/vol-slider/module.js");
/* harmony import */ var _libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/small-stage.js */ "./src/addons/libraries/common/cs/small-stage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var addon, console, vm, icon, updateIcon, slider, container, innerContainer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          vm = addon.tab.traps.vm;
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setup"])(vm);
          icon = document.createElement("div");
          icon.className = "sa-vol-slider-icon";
          icon.addEventListener("click", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setMuted"])(!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])());
          });
          updateIcon = function updateIcon() {
            var newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
            if (newVolume === 0) {
              icon.dataset.icon = "mute";
            } else if (newVolume < 0.5) {
              icon.dataset.icon = "quiet";
            } else {
              icon.dataset.icon = "loud";
            }
          };
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(updateIcon);
          slider = document.createElement("input");
          slider.className = "sa-vol-slider-input";
          slider.type = "range";
          slider.min = 0;
          slider.max = 1;
          slider.step = 0.02;
          slider.addEventListener("input", function (e) {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(+e.target.value);
          });
          slider.addEventListener("change", function (e) {
            // Only commit unmute volume after the user finishes moving the slider
            if (!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])()) {
              Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setUnmutedVolume"])(Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])());
            }
          });
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(function () {
            var newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
            if (newVolume !== +slider.value) {
              slider.value = newVolume;
            }
          });
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
          container = document.createElement("div");
          container.className = "sa-vol-slider";
          // Nested elements are needed for hover animation - see hover.css
          innerContainer = document.createElement("div");
          innerContainer.className = "sa-vol-slider-inner";
          innerContainer.appendChild(icon);
          innerContainer.appendChild(slider);
          container.appendChild(innerContainer);
          addon.tab.displayNoneWhileDisabled(container, {
            display: "flex"
          });
          Object(_libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
          addon.self.addEventListener("disabled", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(1);
          });
          addon.self.addEventListener("reenabled", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
          });
        case 29:
          if (false) {}
          _context.next = 32;
          return addon.tab.waitForElement("[class^='green-flag_green-flag']", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
          });
        case 32:
          addon.tab.displayNoneWhileDisabled(container, {
            display: "flex"
          });
          addon.tab.appendToSharedSpace({
            space: "afterStopButton",
            element: container,
            order: 0
          });
          _context.next = 29;
          break;
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/libraries/common/cs/small-stage.js":
/*!*******************************************************!*\
  !*** ./src/addons/libraries/common/cs/small-stage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSmallStageClass; });
function addSmallStageClass() {
  // TW: no-op; sa-small-stage class is handled by scratch-gui
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-vol-slider.js.map