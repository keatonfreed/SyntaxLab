(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-theme3"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/black_text.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/black_text.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* block-palette-icons */\n.scratchCategoryItemBubble::after {\n  filter: brightness(0);\n}\n.blocklyNumPadButton {\n  color: black;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-text: black;\n  --sa-block-gray-text: black;\n  --sa-block-colored-text: var(--sa-block-background-tertiary, black);\n  --sa-block-text-on-bright-background: black;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/color_on_black.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/color_on_black.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyDropDownDiv .goog-menuitem-checkbox {\n  filter: brightness(0) invert(1);\n}\n.u-dropdown-searchbar {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n\n.scratchCommentRect {\n  fill: #282828;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #282828;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.scratchCommentText {\n  fill: #ffffff;\n  color: #ffffff;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary, white);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-tertiary, white);\n  --sa-block-text-on-bright-background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/color_on_white.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/color_on_white.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* block-palette-icons */\n.scratchCategoryItemBubble::after {\n  filter: brightness(0);\n  opacity: 0.6;\n}\n\n.u-dropdown-searchbar,\n.u-dropdown-searchbar:focus,\n.blocklyDropDownDiv .goog-menuitem,\n.blocklyNumPadButton {\n  color: #575e75;\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n\n.scratchCommentRect {\n  fill: #feffff;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #ffffff;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n.scratchCommentText {\n  fill: #575e75;\n  color: #575e75;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary, black);\n  --sa-block-gray-text: #575e75;\n  --sa-block-colored-text: var(--sa-block-background-tertiary, black);\n  --sa-block-text-on-bright-background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/theme3.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/theme3.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyDropDownDiv .goog-menuitem-highlight,\n.blocklyDropDownDiv .goog-menuitem-hover,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight {\n  background-color: var(--editorTheme3-hoveredItem, rgba(0, 0, 0, 0.2));\n}\n\n.scratchCommentRect {\n  fill: var(--editorTheme3-commentColor);\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: var(--editorTheme3-commentColor);\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentBorder);\n}\n.scratchCommentTextarea::placeholder {\n  color: var(--editorTheme3-commentTextTransparent);\n}\n.scratchCommentText {\n  fill: var(--editorTheme3-commentText);\n  color: var(--editorTheme3-commentText);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/arrow_button.svg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/arrow_button.svg ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTIzIDE2LjcgMTguNyAyMWMtLjQuMy0uOS40LTEuMy4ycy0uNy0uNi0uNy0xLjF2LTEuNmwtNi0uOGMtMS0uMS0xLjctLjktMS43LTEuOXYtLjJjLjEtLjkuOC0xLjUgMS42LTEuNmw2LS45di0xLjZjMC0uNS4zLS45LjctMS4xLjQtLjIuOS0uMSAxLjMuM0wyMyAxNWMuMi4yLjMuNS4zLjhsLS4zLjl6IiBzdHlsZT0iZmlsbDojMDAwIi8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/music.svg":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/music.svg ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI2LjQzNCAzMGMzLjA3OSAwIDUuMjAzLTEuODQzIDQuNzQ1LTQuMTI2LTIuODgtMTIuODMtMy43NTMtMTYuMDIzLTMuMjM0LTE2LjI2OS4zNjctLjE3MyAxLjQzIDEuMTIzIDIuOTcxIDEuNTMgMy43MjYuOTc4IDkuMzU4LTQuNzI3IDMuNjUtMy44NDMtMi4yNDQuMzQ3LTQuNDA3LTEuMDU0LTYuMDc4LTIuMTM1LTIuNTgtMS42Ny0zLjk4Ni0yLjU4LTIuNjkgNC44ODguNjM3IDMuNjU5IDEuMTcyIDYuMjc4IDEuNTUgOC4xMjkuNjQ4IDMuMTc1LjgzNCA0LjA4OC4yODUgNC4xLS4zLS4xMjItLjYtLjIxNi0uOTM3LS4zMDJhNy45MDcgNy45MDcgMCAwIDAtMS44OS0uMjM0Yy0zLjA3OSAwLTUuMjAyIDEuODUxLTQuNzQ0IDQuMTM2LjQ0OSAyLjI4MyAzLjMwMyA0LjEyNiA2LjM3MiA0LjEyNlpNOS40MzkgMzZjMy4wNjggMCA1LjE5MS0xLjg1MiA0Ljc0My00LjEzNi0yLjg3OS0xMi44My0zLjc1Mi0xNi4wMjItMy4yMzItMTYuMjY4LjM2Ny0uMTc0IDEuNDI4IDEuMTIyIDIuOTY5IDEuNTMgMy43MjQuOTg4IDkuMzU0LTQuNzI4IDMuNjQ4LTMuODM0LTIuMjQyLjM0Ny00LjQwNS0xLjA1NC02LjA3NS0yLjEzNS0yLjU4LTEuNjctMy45ODQtMi41OC0yLjY5IDQuODg4YTI2NC4wNSAyNjQuMDUgMCAwIDAgMS41NTYgOC4xNjdjLjYzMyAzLjEwMy44MjIgNC4wMjYuMzA2IDQuMDYxYTcuNzk0IDcuNzk0IDAgMCAwLTIuODUzLS41NDRjLTMuMDc3IDAtNS4yIDEuODUxLTQuNzUxIDQuMTM1QzMuNTE4IDM0LjE0OCA2LjM3IDM2IDkuNDM5IDM2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/pen.svg":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/pen.svg ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im04Ljc1MyAzNC42MDItNC4yNTEgMS43NzkgMS43ODQtNC4yMzZjMS4yMTgtMi44OTIgMi45MDctNS40MjMgNS4wMy03LjUzOEwzMS4wNjYgNC45M2MuODQ2LS44NDIgMi42NS0uNDEgNC4wMzIuOTY2IDEuMzggMS4zNzcgMS44MTYgMy4xNzQuOTcgNC4wMTZMMTYuMzE4IDI5LjU5Yy0yLjEyMyAyLjExNi00LjY2NCAzLjc5OS03LjU2NSA1LjAxMloiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtOC43NTMgMzQuNjAyLTQuMjUxIDEuNzc5IDEuNzg0LTQuMjM2YzEuMjE4LTIuODkyIDIuOTA3LTUuNDIzIDUuMDMtNy41MzhMMzEuMDY2IDQuOTNjLjg0Ni0uODQyIDIuNjUtLjQxIDQuMDMyLjk2NiAxLjM4IDEuMzc3IDEuODE2IDMuMTc0Ljk3IDQuMDE2TDE2LjMxOCAyOS41OWMtMi4xMjMgMi4xMTYtNC42NjQgMy43OTktNy41NjUgNS4wMTJNMjkuNDEgNi4xMTFzLTQuNDUtMi4zNzktOC4yMDIgNS43NzFjLTEuNzM0IDMuNzY2LTQuMzUgMS41NDYtNC4zNSAxLjU0NiIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2LjQyIDguODI1YzAgLjQ2My0uMTQuODczLS40MzIgMS4xNjRsLTkuMzM1IDkuMzAxYy4yODItLjI5LjQxLS42NjguNDEtMS4xMiAwLS44NzQtLjUwNy0xLjk2My0xLjQwNi0yLjg2OC0xLjM2Mi0xLjM1OC0zLjE0Ny0xLjgtNC4wMDItLjk5TDMwLjk5IDUuMDFjLjg0NC0uODQgMi42NS0uNDEgNC4wMzUuOTYuODk4LjkwNCAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NVoiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMzYuNDIgOC44MjVjMCAuNDYzLS4xNC44NzMtLjQzMiAxLjE2NGwtOS4zMzUgOS4zMDFjLjI4Mi0uMjkuNDEtLjY2OC40MS0xLjEyIDAtLjg3NC0uNTA3LTEuOTYzLTEuNDA2LTIuODY4LTEuMzYyLTEuMzU4LTMuMTQ3LTEuOC00LjAwMi0uOTlMMzAuOTkgNS4wMWMuODQ0LS44NCAyLjY1LS40MSA0LjAzNS45Ni44OTguOTA0IDEuMzk2IDEuOTgyIDEuMzk2IDIuODU1IiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTE1IDMzLjc3NGEyMy43NCAyMy43NCAwIDAgMS0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41MjktMS4xODYuODMzLTEuNzU3LjY5LjE4MyAxLjQ0OS42MjUgMi4xMDkgMS4yODIuNjU5LjY1OCAxLjEwMiAxLjQxMiAxLjI4NyAyLjEwMloiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMTAuNTE1IDMzLjc3NGEyMy43NCAyMy43NCAwIDAgMS0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41MjktMS4xODYuODMzLTEuNzU3LjY5LjE4MyAxLjQ0OS42MjUgMi4xMDkgMS4yODIuNjU5LjY1OCAxLjEwMiAxLjQxMiAxLjI4NyAyLjEwMiIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48ZyBvcGFjaXR5PSIuMTUiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2My0uMTQxLjg3My0uNDMzIDEuMTY1bC0xOS43NDIgMTkuNjhjLTIuMTMxIDIuMTExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4MmwuOTc0LTIuMzE3IDEuOTI1LS44MDhjMi44OTktMS4yMTggNS40NDEtMi45IDcuNTcyLTUuMDExbDE5Ljc0Mi0xOS42OGMuMjkyLS4yOTIuNDMyLS43MDIuNDMyLTEuMTY1IDAtLjY0Ni0uMjctMS40LS43NzktMi4xMjIuMjQ5LjE3MS40OTguMzc3LjczNi42MTQuODk4LjkwNSAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NloiIGZpbGw9IiMwQjhFNjkiLz48cGF0aCBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2My0uMTQxLjg3My0uNDMzIDEuMTY1bC0xOS43NDIgMTkuNjhjLTIuMTMxIDIuMTExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4MmwuOTc0LTIuMzE3IDEuOTI1LS44MDhjMi44OTktMS4yMTggNS40NDEtMi45IDcuNTcyLTUuMDExbDE5Ljc0Mi0xOS42OGMuMjkyLS4yOTIuNDMyLS43MDIuNDMyLTEuMTY1IDAtLjY0Ni0uMjctMS40LS43NzktMi4xMjIuMjQ5LjE3MS40OTguMzc3LjczNi42MTQuODk4LjkwNSAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NiIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40NSAxMi44MzFhLjkwNC45MDQgMCAxIDEtMS44MDcgMCAuOTA0LjkwNCAwIDAgMSAxLjgwNyAwWiIgZmlsbD0iIzBCOEU2OSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/text2speech.svg":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/text2speech.svg ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2IDIxLjY3djEyLjYxM2MwIDEuNTMyLTIgMi4yNTMtMy4yIDEuMjYybC0yLjYtMi4xNjNjLTEtLjgxLTIuMi0xLjE3LTMuNS0xLjE3aC0uNGMtMS4zIDAtMi4zLS45MDItMi4zLTIuMDczdi00LjIzNWMwLTEuMTcxIDEtMi4wNzIgMi4zLTIuMDcyaC40YzEuMyAwIDIuNS0uNDUgMy40LTEuMTcybDIuNy0yLjE2MmMxLjItMS4wODEgMy4yLS4yNyAzLjIgMS4xNzFaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTI0IDRhOCA4IDAgMCAwLTMuNjIyIDE1LjEzNWMtLjE2OSAxLjc3NC0uNzIyIDIuNTMtMS4wNzQgMy4wMTItLjE3Ny4yNDMtLjMwNC40MTctLjMwNC42MTUgMCAuNjY3LjY2Ny42NjcuNjY3LjY2Ny45NDYgMCAzLjkxNC0xLjE2NyA1Ljc0My0zLjQyOUgyOGE4IDggMCAxIDAgMC0xNmgtNFoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzBCOEU2OSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/translate.svg":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/translate.svg ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggNWE0IDQgMCAwIDAtNCA0djhhNCA0IDAgMCAwIDQgNGguMjUzYy0uMjM3IDEuMTczLS42NiAxLjc1Mi0uOTQ5IDIuMTQ3LS4xNzcuMjQzLS4zMDQuNDE3LS4zMDQuNjE1IDAgLjY2Ny42NjcuNjY3LjY2Ny42NjcuOTQ2IDAgMy45MTQtMS4xNjcgNS43NDMtMy40MjlIMjBhNCA0IDAgMCAwIDQtNFY5YTQgNCAwIDAgMC00LTRIOFoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzBCOEU2OSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDIyIDcuOTEzYS43MzUuNzM1IDAgMCAxIC40ODUtLjE2M2MuMTg2IDAgLjM2LjA1LjQ5Mi4xNjJhLjU3OS41NzkgMCAwIDEgLjIwOC40NXYxLjE2Nmg0LjA5N2MuMTc2IDAgLjMyMy4wODIuNDE5LjIxMmEuNzEuNzEgMCAwIDEgLjEyNy40MjMuNzguNzggMCAwIDEtLjEyLjQzNC41MDYuNTA2IDAgMCAxLS40MjYuMjMzSDE3LjFjLS40NCAxLjQ1LTEuMTUzIDIuODA4LTIuMTc0IDMuOTUyLjEzNC4xMS4yNjIuMjEuMzk0LjNsLjAwNy4wMDVjLjk5NC43MjcgMi4yMiAxLjI5OCAzLjQwNyAxLjY3Ni4zMDUuMDk2LjQ5My4zNC40OTMuNjQ0IDAgLjA4Ny0uMDE3LjE3LS4wNDcuMjVhLjc3Ni43NzYgMCAwIDEtLjIzOC4zNy42MS42MSAwIDAgMS0uMzkzLjEzNS45MTQuOTE0IDAgMCAxLS4zMjQtLjA1N2MtMS40MjYtLjQ3LTIuNjQ4LTEuMDg1LTMuNzkzLTEuOTgzbC0uMDAyLS4wMDEtLjA1LS4wNGExMy4xNzIgMTMuMTcyIDAgMCAxLS40MjItLjM0OCA5LjA1NSA5LjA1NSAwIDAgMS0uNDcyLjM4MWMtMS4yMS45MTgtMi4zNjQgMS40ODktMy43NDIgMmwtLjAwNy4wMDNhLjg2Ni44NjYgMCAwIDEtLjI3Ny4wNDUuNjk0LjY5NCAwIDAgMS0uNDAyLS4xMi43Mi43MiAwIDAgMS0uMjYtLjM0OC42ODkuNjg5IDAgMCAxLS4wNDktLjI1NGMwLS4zMi4yMjYtLjU0OC40ODktLjY1bC4wMS0uMDA0YzEuMjE5LS40MSAyLjM2NS0uOTM1IDMuNjMtMS45MmwuMTA2LS4wODhjLTEtMS4xNDQtMS43MDItMi41MS0yLjE0LTMuOTQ4SDkuMzA2YS41MDUuNTA1IDAgMCAxLS40MzEtLjIzNS43OS43OSAwIDAgMS0uMTE1LS40MzJjMC0uMTQzLjAzMS0uMjk2LjEyMS0uNDJhLjUxLjUxIDAgMCAxIC40MjUtLjIxNWgzLjkxVjguMzYyYzAtLjE3NC4wNzItLjMzNS4yMDUtLjQ0OVptLTEuMTgzIDIuOTE3YTkuMDYzIDkuMDYzIDAgMCAwIDEuNzI0IDMuMDA4IDguMzc5IDguMzc5IDAgMCAwIDEuNjg2LTMuMDA4aC0zLjQxWiIgZmlsbD0iIzRDOTdGRiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIgMTZhNCA0IDAgMCAxIDQgNHY4YTQgNCAwIDAgMS00IDRoLS4yNTNjLjIzNiAxLjE3My42NiAxLjc1Mi45NDkgMi4xNDcuMTc4LjI0My4zMDQuNDE2LjMwNC42MTUgMCAuNjY3LS42NjcuNjY3LS42NjcuNjY3LS45NDYgMC0zLjkxNC0xLjE2Ny01Ljc0My0zLjQyOUgyMGE0IDQgMCAwIDEtNC00di04YTQgNCAwIDAgMSA0LTRoMTJaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTMxLjc0NyAzMi0uNDkuMDk5LS4xMi0uNTk5aC42MXYuNVptLjk0OSAyLjE0Ny40MDMtLjI5NS0uNDAzLjI5NVpNMjYuNTkgMzJ2LS41aC4yNGwuMTUuMTg2LS4zOS4zMTRabTguOTEtMTJhMy41IDMuNSAwIDAgMC0zLjUtMy41di0xYTQuNSA0LjUgMCAwIDEgNC41IDQuNWgtMVptMCA4di04aDF2OGgtMVpNMzIgMzEuNWEzLjUgMy41IDAgMCAwIDMuNS0zLjVoMWE0LjUgNC41IDAgMCAxLTQuNSA0LjV2LTFabS0uMjUzIDBIMzJ2MWgtLjI1M3YtMVptLjU0NSAyLjk0MmMtLjMwOC0uNDIxLS43NzgtMS4wNy0xLjAzNS0yLjM0M2wuOTgtLjE5OGMuMjE2IDEuMDcyLjU5MyAxLjU4My44NjIgMS45NTFsLS44MDcuNTlabS4yMDguMzJjMCAuMDE0LjAwNi4wMDUtLjAyNC0uMDVhMi43NTMgMi43NTMgMCAwIDAtLjE4NC0uMjdsLjgwNy0uNTljLjA4My4xMTQuMTgxLjI0Ni4yNTQuMzguMDc4LjE0MS4xNDcuMzE4LjE0Ny41M2gtMVptLS4xNjcuNjY3di0uNUgzMi4zMjNoLjAwMmEuMzIzLjMyMyAwIDAgMCAuMTE3LS4wMzEuMDg5LjA4OSAwIDAgMCAuMDM3LS4wMjhjLjAwMi0uMDAzLjAyLS4wMjkuMDItLjEwOGgxYzAgLjI1NC0uMDY1LjQ3OC0uMTg4LjY2M2ExLjA4NiAxLjA4NiAwIDAgMS0uNDIyLjM2NyAxLjMyMiAxLjMyMiAwIDAgMS0uNTMyLjEzNmgtLjAyNHYtLjVabS01LjM1NC0zLjc0M2MuODYgMS4wNjQgMiAxLjg4MiAzLjA0NyAyLjQzNGE5LjQ0IDkuNDQgMCAwIDAgMS40MjQuNjE2Yy40MjMuMTM5LjcyNi4xOTMuODgzLjE5M3YxYy0uMzE2IDAtLjczOC0uMDkzLTEuMTk1LS4yNDNhMTAuNDM2IDEwLjQzNiAwIDAgMS0xLjU3OS0uNjgxYy0xLjEzLS41OTctMi4zOS0xLjQ5My0zLjM1OC0yLjY5bC43NzgtLjYzWk0yMCAzMS41aDYuNTl2MUgyMHYtMVpNMTYuNSAyOGEzLjUgMy41IDAgMCAwIDMuNSAzLjV2MWE0LjUgNC41IDAgMCAxLTQuNS00LjVoMVptMC04djhoLTF2LThoMVptMy41LTMuNWEzLjUgMy41IDAgMCAwLTMuNSAzLjVoLTFhNC41IDQuNSAwIDAgMSA0LjUtNC41djFabTEyIDBIMjB2LTFoMTJ2MVoiIGZpbGw9IiMwQjhFNjkiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjkyMyAyNS4wMmgyLjEybC0xLjAzMS0zLjAwM2gtLjAyNGwtMS4wNjUgMy4wMDNabS4xNzItNS4wMmgxLjg0NUwzMCAyOC4xODNoLTEuODY4bC0uNjItMS44MjJoLTMuMDZsLS42NDEgMS44MjJIMjJMMjUuMDk1IDIwWk0zMy4wMzMgMTIuODc2YTEuMDc0IDEuMDc0IDAgMCAxLTEuNSAwbC0yLjY1NS0yLjY2YTEuMDU2IDEuMDU2IDAgMCAxIC43NDUtMS44MDVoLjk1NWEyLjk0NCAyLjk0NCAwIDAgMC0uMzEtMS4wMDVjLS4wNTUtLjA5LS4wNS0uMTE1LS4xMjUtLjIyNS0uMTItLjE4LS4yMy0uMzE1LS4zNi0uNDdhMy41MjggMy41MjggMCAwIDAtLjkyNS0uNzEgMy43MiAzLjcyIDAgMCAwLTEuMDI1LS4zNSA0LjUyOCA0LjUyOCAwIDAgMC0uNzc1LS4wNmMtLjA4NS0uMDA1LS4xOTUuMDE1LS4yNS4wMi0uMDYuMDA1LS4wOTUuMDEtLjA5NS4wMWEuNjUuNjUgMCAwIDEtLjMtMS4yNXMuMDM1LS4wMTUuMDktLjAzNWMuMDY1LS4wMi4xMjUtLjA1NS4yNjUtLjA5NS4yOC0uMDg1LjYzNS0uMTc1IDEuMS0uMjIuNDYtLjA0IDEuMDE1LS4wMyAxLjYuMDkuNTg1LjEyNSAxLjIuMzYgMS43Ny43LjI3LjE3NS41Ni4zOC43ODUuNTguMS4wNzUuMjcuMjQ1LjM3LjM1LjExNS4xMi4yMi4yNC4zMjYuMzY1YTYgNiAwIDAgMSAxLjE1NCAyLjMwNWgxLjA3YTEuMDU2IDEuMDU2IDAgMCAxIC43NDUgMS44MDVsLTIuNjU1IDIuNjZaTTYuOTY3IDI3LjEyNWExLjA3NCAxLjA3NCAwIDAgMSAxLjUgMGwyLjY1NSAyLjY2YTEuMDU2IDEuMDU2IDAgMCAxLS43NDUgMS44MDVoLS45NTVhMi45NDQgMi45NDQgMCAwIDAgLjMxIDEuMDA1Yy4wNTUuMDkuMDUuMTE1LjEyNS4yMjUuMTIuMTguMjMuMzE1LjM2LjQ3LjI2NS4yODUuNTg1LjUzLjkyNS43MS4zNDUuMTguNzA1LjI5IDEuMDI1LjM1LjMxNS4wNTUuNjA1LjA2Ljc3NS4wNi4wODUuMDA1LjE5NS0uMDE1LjI1LS4wMi4wNi0uMDA1LjA5NS0uMDEuMDk1LS4wMWEuNjUuNjUgMCAwIDEgLjMgMS4yNXMtLjAzNS4wMTUtLjA5LjAzNWMtLjA2NS4wMi0uMTI1LjA1NS0uMjY1LjA5NS0uMjguMDg1LS42MzUuMTc1LTEuMS4yMi0uNDYuMDQtMS4wMTUuMDMtMS42LS4wOWE1LjkxNSA1LjkxNSAwIDAgMS0xLjc3LS43Yy0uMjctLjE3NS0uNTYtLjM4LS43ODUtLjU4LS4xLS4wNzUtLjI3LS4yNDUtLjM3LS4zNWE3LjY1IDcuNjUgMCAwIDEtLjMyNi0uMzY1IDYgNiAwIDAgMS0xLjE1NC0yLjMwNWgtMS4wN2ExLjA1NiAxLjA1NiAwIDAgMS0uNzQ1LTEuODA1bDIuNjU1LTIuNjZaIiBmaWxsPSIjMDAwIi8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/videoSensing.svg":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/videoSensing.svg ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBvcGFjaXR5PSIuMjUiIGN4PSIzMiIgY3k9IjI2IiByPSI0IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgb3BhY2l0eT0iLjUiIGN4PSIzMiIgY3k9IjIyIiByPSI0IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgb3BhY2l0eT0iLjc1IiBjeD0iMzIiIGN5PSIxOCIgcj0iNCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Im0xNyAxNy41IDUuNC0zLjVjLjUtLjMgMS4xLS4yIDEuNC4zLjEuMi4yLjQuMi41djEwLjNjMCAuNi0uNSAxLTEgMS0uMiAwLS40LS4xLS41LS4yTDE3IDIyLjZWMjRjMCAyLjItMS44IDQuMS00IDQuMUg0LjFDMS44IDI4IDAgMjYuMiAwIDI0di03LjlDMCAxMy44IDEuOCAxMiA0LjEgMTJIMTNjMi4yIDAgNCAxLjggNCA0LjF2MS40WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/repeat.svg":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/repeat.svg ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yMS44IDExaC0yLjZjMCAxLjUtLjMgMi45LTEgNC4yLS44IDEuNi0yLjEgMi44LTMuNyAzLjYtMS41LjgtMy4zIDEuMS00LjkuOC0xLjYtLjItMy4yLTEtNC40LTIuMS0uNC0uMy0uNC0uOS0uMS0xLjIuMy0uNC45LS40IDEuMi0uMSAxIC43IDIuMiAxLjEgMy40IDEuMXMyLjMtLjMgMy4zLTFjLjktLjYgMS42LTEuNSAyLTIuNi4zLS45LjQtMS44LjItMi44aC0yLjRjLS40IDAtLjctLjMtLjctLjcgMC0uMi4xLS4zLjItLjRsNC40LTQuNGMuMy0uMy43LS4zLjkgMEwyMiA5LjhjLjMuMy40LjYuMy45cy0uMy4zLS41LjN6IiBzdHlsZT0iZmlsbDojMDAwIi8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-left.svg":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-left.svg ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0icm90YXRlLWNsb2Nrd2lzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojM2Q3OWNjfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOS41NiAxNy42NWE5LjI5IDkuMjkgMCAwIDEtNy4zNSAzLjgzIDEuMzEgMS4zMSAwIDAgMS0uMDgtMi42MiA2LjUzIDYuNTMgMCAwIDAgNS0yLjkyIDYuMDUgNi4wNSAwIDAgMCAuNjctNS41MSA1LjMyIDUuMzIgMCAwIDAtMS42NC0yLjE2IDUuMjEgNS4yMSAwIDAgMC0yLjQ4LTFBNS44NiA1Ljg2IDAgMCAwIDkgOC44NEwxMC43NCAxMWEuNTkuNTkgMCAwIDEtLjQzIDFIMi43YS42LjYgMCAwIDEtLjYtLjc1bDEuNzEtNy40MmEuNTkuNTkgMCAwIDEgMS0uMjFsMS42NyAyLjFhOS43MSA5LjcxIDAgMCAxIDcuNzUtMi4wNyA4Ljg0IDguODQgMCAwIDEgNC4xMiAxLjkyIDguNjggOC42OCAwIDAgMSAyLjU0IDMuNzIgOS4xNCA5LjE0IDAgMCAxLTEuMzMgOC4zNloiIHN0eWxlPSJmaWxsOiMwMDAiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-right.svg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-right.svg ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0icm90YXRlLWNvdW50ZXItY2xvY2t3aXNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDB9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxLjM4IDExLjgzaC03LjYxYS41OS41OSAwIDAgMS0uNDMtMWwxLjc1LTIuMTlhNS45IDUuOSAwIDAgMC00LjctMS41OCA1LjA3IDUuMDcgMCAwIDAtNC4xMSAzLjE3QTYgNiAwIDAgMCA3IDE1Ljc3YTYuNTEgNi41MSAwIDAgMCA1IDIuOTIgMS4zMSAxLjMxIDAgMCAxLS4wOCAyLjYyIDkuMyA5LjMgMCAwIDEtNy4zNS0zLjgyIDkuMTYgOS4xNiAwIDAgMS0xLjQtOC4zN0E4LjUxIDguNTEgMCAwIDEgNS43MSA1LjRhOC43NiA4Ljc2IDAgMCAxIDQuMTEtMS45MiA5LjcxIDkuNzEgMCAwIDEgNy43NSAyLjA3bDEuNjctMi4xYS41OS41OSAwIDAgMSAxIC4yMUwyMiAxMS4wOGEuNTkuNTkgMCAwIDEtLjYyLjc1WiIgc3R5bGU9ImZpbGw6IzAwMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/arrow_button.svg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/arrow_button.svg ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj48c3R5bGU+LnN0MntmaWxsOiNmZmZ9PC9zdHlsZT48ZyBpZD0iVHV0b3JpYWxzX3gyRl9OYXZpZ2F0aW9uX3gyRl9OZXh0Ij48cGF0aCBkPSJNMjIuNiAxNi4zek0xNi4yIDE5bC01LjYtLjhhMi41IDIuNSAwIDAgMS0yLjEtMi40di0uM2MuMi0xLjEgMS0xLjkgMi0ybDUuNi0uOHYtMS4xYzAtLjcuNC0xLjMgMS0xLjYuNi0uMyAxLjMtLjEgMS44LjRsNC4zIDQuM2MuMy4zLjUuNy41IDEuMiAwIC40LS4yLjktLjUgMS4yTDE5IDIxLjRjLS41LjUtMS4yLjYtMS44LjMtLjYtLjMtMS0uOS0xLTEuNVYxOXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PGRlZnM+PGZpbHRlciBpZD0iQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNiIgeT0iNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2IiB5PSI2IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGlkPSJtYXNrLTJfMV8iPjxnIGZpbHRlcj0idXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcikiPjxwYXRoIGlkPSJwYXRoLTFfMV8iIGNsYXNzPSJzdDIiIGQ9Ik0yMyAxNi43IDE4LjcgMjFjLS40LjMtLjkuNC0xLjMuMnMtLjctLjYtLjctMS4xdi0xLjZsLTYtLjhjLTEtLjEtMS43LS45LTEuNy0xLjl2LS4yYy4xLS45LjgtMS41IDEuNi0xLjZsNi0uOXYtMS42YzAtLjUuMy0uOS43LTEuMS40LS4yLjktLjEgMS4zLjNMMjMgMTVjLjIuMi4zLjUuMy44bC0uMy45eiIvPjwvZz48L21hc2s+PGcgaWQ9IkNvbG9yX3gyRl9XaGl0ZSIgbWFzaz0idXJsKCNtYXNrLTJfMV8pIj48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNiA2aDIwdjIwSDZ6IiBpZD0iQ29sb3IiLz48L2c+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/music.svg":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/music.svg ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0zMi4xOCAyNS44NzRDMzIuNjM2IDI4LjE1NyAzMC41MTIgMzAgMjcuNDMzIDMwYy0zLjA3IDAtNS45MjMtMS44NDMtNi4zNzItNC4xMjYtLjQ1OC0yLjI4NSAxLjY2NS00LjEzNiA0Ljc0My00LjEzNmE3Ljg5IDcuODkgMCAwIDEgMS44OS4yMzRjLjMzOC4wODYuNjM3LjE4LjkzOC4zMDIuODctLjAyLS4xMDQtMi4yOTQtMS44MzUtMTIuMjMtMi4xMzQtMTIuMzAyIDMuMDYtMS44NyA4Ljc2OC0yLjc1MiA1LjcwOC0uODg1LjA3NiA0LjgyLTMuNjUgMy44NDQtMy43MjQtLjk4Ny00LjY1LTcuMTUzLjI2MyAxNC43Mzh6bS0xNi45OTggNS45OUMxNS42MyAzNC4xNDggMTMuNTA3IDM2IDEwLjQ0IDM2Yy0zLjA3IDAtNS45MjItMS44NTItNi4zOC00LjEzNi0uNDQ4LTIuMjg0IDEuNjc0LTQuMTM1IDQuNzUtNC4xMzUgMS4wMDMgMCAxLjk3NS4xOTYgMi44NTUuNTQzLjgyMi0uMDU1LS4xNS0yLjM3Ny0xLjg2Mi0xMi4yMjgtMi4xMzMtMTIuMzAzIDMuMDYtMS44NyA4Ljc2NC0yLjc1MyA1LjcwNi0uODk0LjA3NiA0LjgyLTMuNjQ4IDMuODM0LTMuNzI0LS45ODctNC42NS03LjE1Mi4yNjIgMTQuNzM4eiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2U9IiMwMDAiIGQ9Ik0yOC40NTYgMjEuNjc1Yy0uMDEtLjMxMi0uMDg3LS44MjUtLjI1Ni0xLjcwMi0uMDk2LS40OTUtLjYxMi0zLjAyMi0uNzUzLTMuNzMtLjM5NS0xLjk4LS43Ni0zLjkyLTEuMTQyLTYuMTEzLS43MzItNC4yMjMtLjY5My02LjA1LjM0NC02LjUyNy41LS4yMyAxLjA2LS4wOCAxLjg0LjM1LjQxNC4yMjcgMi4xODIgMS4zNjUgMi4wNyAxLjI5NiAxLjk5NCAxLjI0MiAzLjQ2NCAxLjc3NCA0LjkzIDEuNTQ4IDEuNTI2LS4yMzcgMi41MDQtLjA2IDIuODc2LjYxOC4zNDguNjM1LjAxNSAxLjQxNi0uNzMgMi4xOC0xLjQ3MiAxLjUxNi0zLjk3NSAyLjUxNC01Ljg0OCAyLjAyMy0uODIyLS4yMi0xLjIzOC0uNDY1LTIuMzgtMS4yNjdsLS4wOTUtLjA2NmMuMDQ3LjU5My4yNjQgMS43NC43MTcgMy44MDMuMjk0IDEuMzM2IDIuMDggOS4xODcgMi42MzcgMTEuNjc0bC4wMDIuMDEyYy41MjggMi42MzctMS44NzMgNC43MjQtNS4yMzYgNC43MjQtMy4yOSAwLTYuMzYzLTEuOTg4LTYuODYyLTQuNTI4LS41My0yLjY0IDEuODczLTQuNzM0IDUuMjMzLTQuNzM0YTguMzg0IDguMzg0IDAgMCAxIDIuNjUuNDM3em0tMTYuOTk2IDUuOTljLS4wMS0uMzE4LS4wOS0uODM4LS4yNjYtMS43MzctLjA5LS40Ni0uNTk1LTIuOTM3LS43NTMtMy43MjctLjM5LTEuOTYtLjc1LTMuODktMS4xMy02LjA3LS43MzItNC4yMjMtLjY5Mi02LjA1LjM0NC02LjUyNi41MDItLjIzIDEuMDYtLjA4MiAxLjg0LjM1LjQxNS4yMjcgMi4xODIgMS4zNjQgMi4wNyAxLjI5NSAxLjk5MyAxLjI0MiAzLjQ2MiAxLjc3NCA0LjkyNiAxLjU0OCAxLjUyNS0uMjQgMi41MDQtLjA2NCAyLjg3Ni42MTQuMzQ4LjYzNS4wMTUgMS40MTUtLjcyOCAyLjE4LTEuNDc0IDEuNTE3LTMuOTc3IDIuNTEzLTUuODQ3IDIuMDE3LS44Mi0uMjItMS4yMzYtLjQ2NC0yLjM3OC0xLjI2N2wtLjA5NS0uMDY1Yy4wNDcuNTkzLjI2NCAxLjc0LjcxNyAzLjgwMi4yOTQgMS4zMzcgMi4wNzggOS4xOSAyLjYzNiAxMS42NzVsLjAwMy4wMTNjLjUxNyAyLjYzOC0xLjg4NCA0LjczMi01LjIzNCA0LjczMi0zLjI4NyAwLTYuMzYtMS45OTMtNi44Ny00LjU0LS41Mi0yLjY0IDEuODg0LTQuNzMgNS4yNC00LjczLjkwNSAwIDEuODAzLjE1IDIuNjUuNDM2eiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/pen.svg":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/pen.svg ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNTc1RTc1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0ibTguNzUzIDM0LjYwMi00LjI1IDEuNzggMS43ODMtNC4yMzdjMS4yMTgtMi44OTIgMi45MDctNS40MjMgNS4wMy03LjUzOEwzMS4wNjYgNC45M2MuODQ2LS44NDIgMi42NS0uNDEgNC4wMzIuOTY3IDEuMzggMS4zNzUgMS44MTYgMy4xNzMuOTcgNC4wMTVMMTYuMzE4IDI5LjU5Yy0yLjEyMyAyLjExNi00LjY2NCAzLjgtNy41NjUgNS4wMTIiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMjkuNDEgNi4xMXMtNC40NS0yLjM3OC04LjIwMiA1Ljc3MmMtMS43MzQgMy43NjYtNC4zNSAxLjU0Ni00LjM1IDEuNTQ2Ii8+PHBhdGggZD0iTTM2LjQyIDguODI1YzAgLjQ2My0uMTQuODczLS40MzIgMS4xNjRsLTkuMzM1IDkuM2MuMjgyLS4yOS40MS0uNjY4LjQxLTEuMTIgMC0uODc0LS41MDctMS45NjMtMS40MDYtMi44NjgtMS4zNjItMS4zNTgtMy4xNDctMS44LTQuMDAyLS45OUwzMC45OSA1LjAxYy44NDQtLjg0IDIuNjUtLjQxIDQuMDM1Ljk2Ljg5OC45MDQgMS4zOTYgMS45ODIgMS4zOTYgMi44NTVNMTAuNTE1IDMzLjc3NGEyNC4xNSAyNC4xNSAwIDAgMS0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41My0xLjE4Ni44MzMtMS43NTcuNjkuMTgzIDEuNDQ4LjYyNSAyLjEwOCAxLjI4Mi42Ni42NTggMS4xMDIgMS40MTIgMS4yODcgMi4xMDIiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2NC0uMTQuODc0LS40MzMgMS4xNjVsLTE5Ljc0MiAxOS42OGMtMi4xMyAyLjExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4bC45NzQtMi4zMTYgMS45MjUtLjgwOGMyLjg5OC0xLjIxOCA1LjQ0LTIuOSA3LjU3LTUuMDFsMTkuNzQzLTE5LjY4Yy4yOTItLjI5Mi40MzItLjcwMi40MzItMS4xNjUgMC0uNjQ2LS4yNy0xLjQtLjc4LTIuMTIyLjI1LjE3Mi41LjM3Ny43MzcuNjE0Ljg5OC45MDUgMS4zOTYgMS45ODMgMS4zOTYgMi44NTYiIGZpbGw9IiM1NzVFNzUiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0xOC40NSAxMi44M2EuOTA0LjkwNCAwIDEgMS0uOTAzLS45MDJjLjUgMCAuOTA0LjQwNC45MDQuOTA0eiIgZmlsbD0iIzU3NUU3NSIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/text2speech.svg":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/text2speech.svg ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iLjE1Ij48cGF0aCBkPSJNMTUuNSAyMS42N2MwLTEuMDE2LTEuNDk0LTEuNTg2LTIuMzg3LS43ODJsLTIuNyAyLjE2M0E1Ljk1OCA1Ljk1OCAwIDAgMSA2LjcgMjQuMzNoLS40Yy0xLjAzNSAwLTEuOC42OS0xLjggMS41NzN2NC4yMzVjMCAuODgzLjc2NSAxLjU3MiAxLjggMS41NzJoLjRjMS40NTggMCAyLjc1NC40MjMgMy44MiAxLjI4N2wyLjU5OCAyLjE2MWMuOTA4Ljc1IDIuMzgyLjE4OCAyLjM4Mi0uODc2VjIxLjY3WiIgZmlsbD0iIzRENEQ0RCIvPjxwYXRoIGQ9Ik0yNS42NDQgMjAuNWMtMS42NjcgMS45MzctNC41MzkgMy40MjktNS45NzcgMy40MjlhMS4yNSAxLjI1IDAgMCAxLS41NTctLjEzN2MtLjM3Mi0uMTg2LS42MS0uNTQyLS42MS0xLjAzIDAtLjEwNS4wMTctLjIwNy4wNS0uMzA4LjA3Ni0uMjM2LjYyNC0uOTg2LjcyNy0xLjE3My4yNy0uNDg0LjQ2Mi0xLjA3NS41NjYtMS44NjVBOC41IDguNSAwIDAgMSAyNCAzLjVoNGE4LjUgOC41IDAgMSAxIDAgMTdoLTIuMzU2WiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/translate.png":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/translate.png ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/videoSensing.svg":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/videoSensing.svg ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMCkiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4xNSI+PGNpcmNsZSBmaWxsPSIjRkZGIiBvcGFjaXR5PSIuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY3g9IjMyIiBjeT0iMTYiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY3g9IjMyIiBjeT0iMTIiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSIzMiIgY3k9IjgiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjeD0iMzIiIGN5PSI0IiByPSI0LjUiLz48cGF0aCBkPSJtMjIuNjcyIDQuNDItNi4xNzIgNFY2LjFjMC0yLjAxLTEuNTYzLTMuNi0zLjUtMy42SDQuMUMyLjA3NiAyLjUuNSA0LjA3Ni41IDYuMVYxNGMwIDEuOTI3IDEuNTg0IDMuNTEyIDMuNiAzLjZIMTNjMS45MDIgMCAzLjUtMS42NTMgMy41LTMuNnYtMi4yODNsNi4yNTcgMy43NTQuMDk3LjA3NWMuMDIuMDIuMDk4LjA1NC4xNDYuMDU0LjI2NyAwIC41LS4yMTcuNS0uNVY0LjhjMCAuMDM3LS4wNTYtLjA5NC0uMTI5LS4yNDMtLjE0NS0uMjQyLS40My0uMjk5LS43LS4xMzdaIiBmaWxsPSIjNEQ0RDREIi8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/repeat.svg":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/repeat.svg ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yMy4zIDExYy0uMy42LS45IDEtMS41IDFoLTEuNmMtLjEgMS4zLS41IDIuNS0xLjEgMy42LS45IDEuNy0yLjMgMy4yLTQuMSA0LjEtMS43LjktMy42IDEuMi01LjUuOS0xLjgtLjMtMy41LTEuMS00LjktMi4zLS43LS43LS43LTEuOSAwLTIuNi42LS42IDEuNi0uNyAyLjMtLjJIN2MuOS42IDEuOS45IDIuOS45czEuOS0uMyAyLjctLjljMS4xLS44IDEuOC0yLjEgMS44LTMuNWgtMS41Yy0uOSAwLTEuNy0uNy0xLjctMS43IDAtLjQuMi0uOS41LTEuMmw0LjQtNC40Yy43LS42IDEuNy0uNiAyLjQgMEwyMyA5LjJjLjUuNS42IDEuMi4zIDEuOHoiIHN0eWxlPSJmaWxsOiMwMDAzIi8+PHBhdGggZD0iTTIxLjggMTFoLTIuNmMwIDEuNS0uMyAyLjktMSA0LjItLjggMS42LTIuMSAyLjgtMy43IDMuNi0xLjUuOC0zLjMgMS4xLTQuOS44LTEuNi0uMi0zLjItMS00LjQtMi4xLS40LS4zLS40LS45LS4xLTEuMi4zLS40LjktLjQgMS4yLS4xIDEgLjcgMi4yIDEuMSAzLjQgMS4xczIuMy0uMyAzLjMtMWMuOS0uNiAxLjYtMS41IDItMi42LjMtLjkuNC0xLjguMi0yLjhoLTIuNGMtLjQgMC0uNy0uMy0uNy0uNyAwLS4yLjEtLjMuMi0uNGw0LjQtNC40Yy4zLS4zLjctLjMuOSAwTDIyIDkuOGMuMy4zLjQuNi4zLjlzLS4zLjMtLjUuM3oiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-left.svg":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-left.svg ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwLjM0IDE4LjIxYTEwLjI0IDEwLjI0IDAgMCAxLTguMSA0LjIyIDIuMjYgMi4yNiAwIDAgMS0uMTYtNC41MiA1LjU4IDUuNTggMCAwIDAgNC4yNS0yLjUzIDUuMDYgNS4wNiAwIDAgMCAuNTQtNC42MkE0LjI1IDQuMjUgMCAwIDAgMTUuNTUgOWE0LjMxIDQuMzEgMCAwIDAtMi0uOCA0LjgyIDQuODIgMCAwIDAtMy4xNS44bDEuMTIgMS40MUExLjU5IDEuNTkgMCAwIDEgMTAuMzYgMTNIMi42N2ExLjU2IDEuNTYgMCAwIDEtMS4yNi0uNjNBMS41NCAxLjU0IDAgMCAxIDEuMTMgMTFsMS43Mi03LjQzQTEuNTkgMS41OSAwIDAgMSA0LjM4IDIuNGExLjU3IDEuNTcgMCAwIDEgMS4yNC42TDYuNyA0LjM1YTEwLjY2IDEwLjY2IDAgMCAxIDcuNzItMS42OEE5Ljg4IDkuODggMCAwIDEgMTkgNC44MSA5LjYxIDkuNjEgMCAwIDEgMjEuODMgOWExMC4wOCAxMC4wOCAwIDAgMS0xLjQ5IDkuMjFaIiBzdHlsZT0iZmlsbDojMDAwMyIvPjxwYXRoIGQ9Ik0xOS41NiAxNy42NWE5LjI5IDkuMjkgMCAwIDEtNy4zNSAzLjgzIDEuMzEgMS4zMSAwIDAgMS0uMDgtMi42MiA2LjUzIDYuNTMgMCAwIDAgNS0yLjkyIDYuMDUgNi4wNSAwIDAgMCAuNjctNS41MSA1LjMyIDUuMzIgMCAwIDAtMS42NC0yLjE2IDUuMjEgNS4yMSAwIDAgMC0yLjQ4LTFBNS44NiA1Ljg2IDAgMCAwIDkgOC44NEwxMC43NCAxMWEuNTkuNTkgMCAwIDEtLjQzIDFIMi43YS42LjYgMCAwIDEtLjYtLjc1bDEuNzEtNy40MmEuNTkuNTkgMCAwIDEgMS0uMjFsMS42NyAyLjFhOS43MSA5LjcxIDAgMCAxIDcuNzUtMi4wNyA4Ljg0IDguODQgMCAwIDEgNC4xMiAxLjkyIDguNjggOC42OCAwIDAgMSAyLjU0IDMuNzIgOS4xNCA5LjE0IDAgMCAxLTEuMzMgOC4zNloiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-right.svg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-right.svg ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIyLjY4IDEyLjJhMS42IDEuNiAwIDAgMS0xLjI3LjYzaC03LjY5YTEuNTkgMS41OSAwIDAgMS0xLjE2LTIuNThsMS4xMi0xLjQxYTQuODIgNC44MiAwIDAgMC0zLjE0LS43NyA0LjMxIDQuMzEgMCAwIDAtMiAuOEE0LjI1IDQuMjUgMCAwIDAgNy4yIDEwLjZhNS4wNiA1LjA2IDAgMCAwIC41NCA0LjYyQTUuNTggNS41OCAwIDAgMCAxMiAxNy43NGEyLjI2IDIuMjYgMCAwIDEtLjE2IDQuNTJBMTAuMjUgMTAuMjUgMCAwIDEgMy43NCAxOGExMC4xNCAxMC4xNCAwIDAgMS0xLjQ5LTkuMjIgOS43IDkuNyAwIDAgMSAyLjgzLTQuMTRBOS45MiA5LjkyIDAgMCAxIDkuNjYgMi41YTEwLjY2IDEwLjY2IDAgMCAxIDcuNzIgMS42OGwxLjA4LTEuMzVhMS41NyAxLjU3IDAgMCAxIDEuMjQtLjYgMS42IDEuNiAwIDAgMSAxLjU0IDEuMjFsMS43IDcuMzdhMS41NyAxLjU3IDAgMCAxLS4yNiAxLjM5WiIgc3R5bGU9ImZpbGw6IzAwMDMiLz48cGF0aCBkPSJNMjEuMzggMTEuODNoLTcuNjFhLjU5LjU5IDAgMCAxLS40My0xbDEuNzUtMi4xOWE1LjkgNS45IDAgMCAwLTQuNy0xLjU4IDUuMDcgNS4wNyAwIDAgMC00LjExIDMuMTdBNiA2IDAgMCAwIDcgMTUuNzdhNi41MSA2LjUxIDAgMCAwIDUgMi45MiAxLjMxIDEuMzEgMCAwIDEtLjA4IDIuNjIgOS4zIDkuMyAwIDAgMS03LjM1LTMuODIgOS4xNiA5LjE2IDAgMCAxLTEuNC04LjM3QTguNTEgOC41MSAwIDAgMSA1LjcxIDUuNGE4Ljc2IDguNzYgMCAwIDEgNC4xMS0xLjkyIDkuNzEgOS43MSAwIDAgMSA3Ljc1IDIuMDdsMS42Ny0yLjFhLjU5LjU5IDAgMCAxIDEgLjIxTDIyIDExLjA4YS41OS41OSAwIDAgMS0uNjIuNzVaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/editor-theme3/_runtime_entry.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/editor-theme3/_runtime_entry.js ***!
  \***********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _theme3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme3.js */ "./src/addons/addons/editor-theme3/theme3.js");
/* harmony import */ var _css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./theme3.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/theme3.css");
/* harmony import */ var _css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_black_text_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./black_text.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/black_text.css");
/* harmony import */ var _css_loader_black_text_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_black_text_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_color_on_white_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./color_on_white.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/color_on_white.css");
/* harmony import */ var _css_loader_color_on_white_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_color_on_white_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_color_on_black_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-loader!./color_on_black.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/color_on_black.css");
/* harmony import */ var _css_loader_color_on_black_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_loader_color_on_black_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _url_loader_icons_black_text_arrow_button_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/black_text/arrow_button.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/arrow_button.svg");
/* harmony import */ var _url_loader_icons_black_text_extensions_music_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/black_text/extensions/music.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/music.svg");
/* harmony import */ var _url_loader_icons_black_text_extensions_pen_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/black_text/extensions/pen.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/pen.svg");
/* harmony import */ var _url_loader_icons_black_text_extensions_text2speech_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url-loader!./icons/black_text/extensions/text2speech.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/text2speech.svg");
/* harmony import */ var _url_loader_icons_black_text_extensions_translate_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url-loader!./icons/black_text/extensions/translate.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/translate.svg");
/* harmony import */ var _url_loader_icons_black_text_extensions_videoSensing_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! url-loader!./icons/black_text/extensions/videoSensing.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/extensions/videoSensing.svg");
/* harmony import */ var _url_loader_icons_black_text_repeat_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! url-loader!./icons/black_text/repeat.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/repeat.svg");
/* harmony import */ var _url_loader_icons_black_text_rotate_left_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! url-loader!./icons/black_text/rotate-left.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-left.svg");
/* harmony import */ var _url_loader_icons_black_text_rotate_right_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! url-loader!./icons/black_text/rotate-right.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/black_text/rotate-right.svg");
/* harmony import */ var _url_loader_icons_white_text_arrow_button_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! url-loader!./icons/white_text/arrow_button.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/arrow_button.svg");
/* harmony import */ var _url_loader_icons_white_text_extensions_music_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! url-loader!./icons/white_text/extensions/music.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/music.svg");
/* harmony import */ var _url_loader_icons_white_text_extensions_pen_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! url-loader!./icons/white_text/extensions/pen.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/pen.svg");
/* harmony import */ var _url_loader_icons_white_text_extensions_text2speech_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! url-loader!./icons/white_text/extensions/text2speech.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/text2speech.svg");
/* harmony import */ var _url_loader_icons_white_text_extensions_translate_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! url-loader!./icons/white_text/extensions/translate.png */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/translate.png");
/* harmony import */ var _url_loader_icons_white_text_extensions_videoSensing_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! url-loader!./icons/white_text/extensions/videoSensing.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/extensions/videoSensing.svg");
/* harmony import */ var _url_loader_icons_white_text_repeat_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! url-loader!./icons/white_text/repeat.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/repeat.svg");
/* harmony import */ var _url_loader_icons_white_text_rotate_left_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! url-loader!./icons/white_text/rotate-left.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-left.svg");
/* harmony import */ var _url_loader_icons_white_text_rotate_right_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! url-loader!./icons/white_text/rotate-right.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-theme3/icons/white_text/rotate-right.svg");
/* generated by pull.js */























var resources = {
  "theme3.js": _theme3_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "theme3.css": _css_loader_theme3_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "black_text.css": _css_loader_black_text_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "color_on_white.css": _css_loader_color_on_white_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "color_on_black.css": _css_loader_color_on_black_css__WEBPACK_IMPORTED_MODULE_4___default.a,
  "icons/black_text/arrow_button.svg": _url_loader_icons_black_text_arrow_button_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "icons/black_text/extensions/music.svg": _url_loader_icons_black_text_extensions_music_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  "icons/black_text/extensions/pen.svg": _url_loader_icons_black_text_extensions_pen_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  "icons/black_text/extensions/text2speech.svg": _url_loader_icons_black_text_extensions_text2speech_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
  "icons/black_text/extensions/translate.svg": _url_loader_icons_black_text_extensions_translate_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
  "icons/black_text/extensions/videoSensing.svg": _url_loader_icons_black_text_extensions_videoSensing_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
  "icons/black_text/repeat.svg": _url_loader_icons_black_text_repeat_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
  "icons/black_text/rotate-left.svg": _url_loader_icons_black_text_rotate_left_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
  "icons/black_text/rotate-right.svg": _url_loader_icons_black_text_rotate_right_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
  "icons/white_text/arrow_button.svg": _url_loader_icons_white_text_arrow_button_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
  "icons/white_text/extensions/music.svg": _url_loader_icons_white_text_extensions_music_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
  "icons/white_text/extensions/pen.svg": _url_loader_icons_white_text_extensions_pen_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
  "icons/white_text/extensions/text2speech.svg": _url_loader_icons_white_text_extensions_text2speech_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
  "icons/white_text/extensions/translate.png": _url_loader_icons_white_text_extensions_translate_png__WEBPACK_IMPORTED_MODULE_18__["default"],
  "icons/white_text/extensions/videoSensing.svg": _url_loader_icons_white_text_extensions_videoSensing_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  "icons/white_text/repeat.svg": _url_loader_icons_white_text_repeat_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
  "icons/white_text/rotate-left.svg": _url_loader_icons_white_text_rotate_left_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
  "icons/white_text/rotate-right.svg": _url_loader_icons_white_text_rotate_right_svg__WEBPACK_IMPORTED_MODULE_22__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-theme3/theme3.js":
/*!***************************************************!*\
  !*** ./src/addons/addons/editor-theme3/theme3.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/text-color.esm.js */ "./src/addons/libraries/common/cs/text-color.esm.js");
/* harmony import */ var _lib_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/themes */ "./src/lib/themes/index.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// TW: This addon very heavily links against TurboWarp/scratch-gui internals and other changes
// There is absolutely no hope that this will run on a scratch.mit.edu environment




var extensionsCategory = {
  categoryId: null,
  settingId: "Pen-color",
  colorId: "pen"
};
var saCategory = {
  categoryId: null,
  settingId: "sa-color",
  colorId: "addons"
};
var categories = [{
  categoryId: "motion",
  settingId: "motion-color",
  colorId: "motion"
}, {
  categoryId: "looks",
  settingId: "looks-color",
  colorId: "looks"
}, {
  categoryId: "sound",
  settingId: "sounds-color",
  colorId: "sounds"
}, {
  categoryId: "events",
  settingId: "events-color",
  colorId: "event"
}, {
  categoryId: "control",
  settingId: "control-color",
  colorId: "control"
}, {
  categoryId: "sensing",
  settingId: "sensing-color",
  colorId: "sensing"
}, {
  categoryId: "operators",
  settingId: "operators-color",
  colorId: "operators"
}, {
  categoryId: "variables",
  settingId: "data-color",
  colorId: "data"
}, {
  categoryId: "lists",
  settingId: "data-lists-color",
  colorId: "data_lists"
}, {
  categoryId: "myBlocks",
  settingId: "custom-color",
  colorId: "more"
}, extensionsCategory, saCategory];

// From scratch-blocks/media/dropdown-arrow.svg
var arrowPath = "M6.36,7.79a1.43,1.43,0,0,1-1-.42L1.42,3.45a1.44,1.44,0,0,1,0-2c0.56-.56,9.31-0.56,9.87,0a1.44,1.44,0,0,1,0,2L7.37,7.37A1.43,1.43,0,0,1,6.36,7.79Z";
var arrowShadowPath = "M12.71,2.44A2.41,2.41,0,0,1,12,4.16L8.08,8.08a2.45,2.45,0,0,1-3.45,0L0.72,4.16A2.42,2.42,0,0,1,0,2.44,2.48,2.48,0,0,1,.71.71C1,0.47,1.43,0,6.36,0S11.75,0.46,12,.71A2.44,2.44,0,0,1,12.71,2.44Z";
var arrowShadowColor = "#231f20";
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var addon, console, msg, Blockly, textMode, isColoredTextMode, primaryColor, secondaryColor, tertiaryColor, quaternaryColor, fieldBackground, uncoloredTextColor, textFieldText, fieldTextColor, categoryIconBackground, categoryIconBorder, useBlackIcons, iconPath, makeDropdownArrow, oldCategoryCreateDom, oldBlockUpdateColour, oldBlockShowContextMenu, oldFieldLabelInit, oldFieldVariableGetterInit, oldFieldImageSetValue, oldFieldDropdownInit, oldFieldDropdownShowEditor, oldFieldVerticalSeparatorInit, apply, disable;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          _context.next = 3;
          return addon.tab.traps.getBlockly();
        case 3:
          Blockly = _context.sent;
          textMode = function textMode() {
            return addon.settings.get("text");
          };
          isColoredTextMode = function isColoredTextMode() {
            return textMode() === "colorOnWhite" || textMode() === "colorOnBlack";
          };
          primaryColor = function primaryColor(primary) {
            if (textMode() === "colorOnWhite") return "#ffffff";
            if (textMode() === "colorOnBlack") return "#282828";
            return primary;
          };
          secondaryColor = function secondaryColor(primary) {
            if (isColoredTextMode()) return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["alphaBlend"])(primaryColor(primary), Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(primary, {
              a: 0.15
            }));
            if (textMode() === "black") return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["brighten"])(primary, {
              r: 0.6,
              g: 0.6,
              b: 0.6
            });
            return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(primary, {
              r: 0.9,
              g: 0.9,
              b: 0.9
            });
          };
          tertiaryColor = function tertiaryColor(primary) {
            if (isColoredTextMode()) return primary;
            if (textMode() === "black") return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(primary, {
              r: 0.65,
              g: 0.65,
              b: 0.65
            });
            return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(primary, {
              r: 0.8,
              g: 0.8,
              b: 0.8
            });
          };
          quaternaryColor = function quaternaryColor(primary) {
            if (isColoredTextMode()) return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["alphaBlend"])(primaryColor(primary), Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(primary, {
              a: 0.25
            }));
            if (textMode() === "black") return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["brighten"])(primaryColor(primary), {
              r: 0.4,
              g: 0.4,
              b: 0.4
            });
            return tertiaryColor(primary);
          };
          fieldBackground = function fieldBackground(object) {
            // The argument can be a block, field, or primary color
            if (object instanceof Blockly.Block || object instanceof Blockly.Field) {
              var block = object instanceof Blockly.Block ? object : object.sourceBlock_;
              if (isColoredTextMode() || textMode() === "black") {
                var actualPrimary;
                if (block.isShadow() && block.getParent()) {
                  actualPrimary = block.getParent().getColour();
                } else {
                  actualPrimary = block.getColour();
                }
                if (isColoredTextMode()) return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["alphaBlend"])(actualPrimary, Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["multiply"])(block.getColourTertiary(), {
                  a: 0.25
                }));
                return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["brighten"])(actualPrimary, {
                  r: 0.4,
                  g: 0.4,
                  b: 0.4
                });
              }
              return block.getColourTertiary();
            }
            return quaternaryColor(object);
          };
          uncoloredTextColor = function uncoloredTextColor() {
            if (textMode() === 'white' || textMode() === 'colorOnBlack') return '#ffffff';
            if (textMode() === 'black' || textMode() === 'colorOnWhite') return '#000000';
            throw new Error("unknown text mode: ".concat(textMode()));
          };
          textFieldText = function textFieldText() {
            var black = textMode() === 'black' ? '#000000' : undefined;
            return Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["textColor"])(addon.settings.get("input-color"), black);
          };
          fieldTextColor = function fieldTextColor(field) {
            if (textMode() === "white") return "#ffffff";
            if (textMode() === "black") return "#000000";
            if (field) return field.sourceBlock_.getColourTertiary();
            return "#000000";
          };
          categoryIconBackground = function categoryIconBackground(primary) {
            return isColoredTextMode() ? quaternaryColor(primary) : primaryColor(primary);
          };
          categoryIconBorder = function categoryIconBorder(primary) {
            return tertiaryColor(primary);
          };
          useBlackIcons = function useBlackIcons() {
            return textMode() === 'black' || textMode() === 'colorOnWhite';
          };
          iconPath = function iconPath() {
            return "/icons/".concat(useBlackIcons() ? "black_text" : "white_text");
          };
          makeDropdownArrow = function makeDropdownArrow(color) {
            var arrow = Blockly.utils.createSvgElement("g");
            arrow.appendChild(Blockly.utils.createSvgElement("path", {
              d: arrowShadowPath,
              fill: arrowShadowColor,
              "fill-opacity": 0.1,
              transform: "translate(0, 1.6)"
            }));
            arrow.appendChild(Blockly.utils.createSvgElement("path", {
              d: arrowPath,
              fill: color,
              transform: "translate(0, 1.6)"
            }));
            return arrow;
          };
          oldCategoryCreateDom = Blockly.Toolbox.Category.prototype.createDom;
          Blockly.Toolbox.Category.prototype.createDom = function () {
            var _this = this;
            // Fix color of some category icons
            if (!addon.self.disabled && ["a-b", "videoSensing", "text2speech"].includes(this.id_)) {
              var match = this.iconURI_.match(/^data:image\/svg\+xml;(base64)?,/);
              if (match) {
                var data = this.iconURI_.substring(match[0].length);
                var oldSvg = match[1] === 'base64' ? atob(data) : decodeURIComponent(data);
                var category = this.id_ === "a-b" ? saCategory : extensionsCategory;
                var primary = addon.settings.get(category.settingId);
                var newColor = textMode() === "white" ? primaryColor(primary) : tertiaryColor(primary);
                var newSvg = oldSvg.replace(/#29beb8|#229487|#0ebd8c/gi, newColor);
                this.iconURI_ = "data:image/svg+xml;base64,".concat(btoa(newSvg));
              }
            }
            oldCategoryCreateDom.call(this);

            // Fix color of category bubbles
            if (!addon.self.disabled && !this.iconURI_) {
              var _category = categories.find(function (item) {
                return item.categoryId === _this.id_;
              });
              if (_category) {
                var _primary = addon.settings.get(_category.settingId);
                this.bubble_.style.backgroundColor = categoryIconBackground(_primary);
                this.bubble_.style.borderColor = categoryIconBorder(_primary);
              }
            }
          };
          oldBlockUpdateColour = Blockly.BlockSvg.prototype.updateColour;
          Blockly.BlockSvg.prototype.updateColour = function () {
            var _this2 = this;
            oldBlockUpdateColour.call(this);

            // Fix empty boolean inputs
            if (!addon.self.disabled && isColoredTextMode()) {
              var _iterator = _createForOfIteratorHelper(this.inputList),
                _step;
              try {
                var _loop = function _loop() {
                  var input = _step.value;
                  if (input.outlinePath) {
                    var sourceBlock = _this2.isShadow() && _this2.getParent() ? _this2.getParent() : _this2;
                    var category = categories.find(function (i) {
                      return i.categoryId === sourceBlock.category_;
                    });
                    if (category) {
                      input.outlinePath.setAttribute("fill", fieldBackground(addon.settings.get(category.settingId)));
                    }
                  }
                };
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          };
          oldBlockShowContextMenu = Blockly.BlockSvg.prototype.showContextMenu_;
          Blockly.BlockSvg.prototype.showContextMenu_ = function (e) {
            // Fix hover color of context menus
            if (!addon.self.disabled) {
              Blockly.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem", fieldBackground(this));
            }
            return oldBlockShowContextMenu.call(this, e);
          };
          oldFieldLabelInit = Blockly.FieldLabel.prototype.init;
          Blockly.FieldLabel.prototype.init = function () {
            oldFieldLabelInit.call(this);

            // Fix block text in colored text modes
            if (!addon.self.disabled) {
              this.textElement_.style.fill = fieldTextColor(this);
            }
          };
          oldFieldVariableGetterInit = Blockly.FieldVariableGetter.prototype.init;
          Blockly.FieldVariableGetter.prototype.init = function () {
            oldFieldVariableGetterInit.call(this);

            // Fix color of variable reporters in colored modes
            if (!addon.self.disabled) {
              this.textElement_.style.fill = fieldTextColor(this);
            }
          };
          oldFieldImageSetValue = Blockly.FieldImage.prototype.setValue;
          Blockly.FieldImage.prototype.setValue = function (src) {
            // Fix black/white images
            if (!addon.self.disabled) {
              var iconsToReplace = ["repeat.svg", "rotate-left.svg", "rotate-right.svg"];
              var iconName = src.split("/")[src.split("/").length - 1];
              if (iconsToReplace.includes(iconName)) {
                src = addon.self.getResource("".concat(iconPath(), "/").concat(iconName));
              }
            }
            return oldFieldImageSetValue.call(this, src);
          };
          oldFieldDropdownInit = Blockly.FieldDropdown.prototype.init;
          Blockly.FieldDropdown.prototype.init = function () {
            oldFieldDropdownInit.call(this);
            if (!addon.self.disabled) {
              // Fix color of the text in the dropdown
              this.textElement_.style.setProperty("fill", fieldTextColor(this), "important");

              // Fix dropdown arrow color
              this.arrow_.remove();
              this.arrow_ = makeDropdownArrow(fieldTextColor(this));

              // Redraw arrow
              var text = this.text_;
              this.text_ = null;
              this.setText(text);
            }
          };
          oldFieldDropdownShowEditor = Blockly.FieldDropdown.prototype.showEditor_;
          Blockly.FieldDropdown.prototype.showEditor_ = function () {
            oldFieldDropdownShowEditor.call(this);
            if (!addon.self.disabled) {
              // Dropdown menus
              var _primaryColor;
              if (this.sourceBlock_.isShadow() && this.sourceBlock_.getParent()) {
                _primaryColor = this.sourceBlock_.getParent().getColour();
              } else {
                _primaryColor = this.sourceBlock_.getColour();
              }

              // Active hover color
              Blockly.DropDownDiv.DIV_.style.backgroundColor = Object(_libraries_common_cs_text_color_esm_js__WEBPACK_IMPORTED_MODULE_0__["removeAlpha"])(_primaryColor);
              if (isColoredTextMode()) {
                Blockly.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem", fieldBackground(this));
              } else {
                Blockly.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem");
              }
            }
          };
          oldFieldVerticalSeparatorInit = Blockly.FieldVerticalSeparator.prototype.init;
          Blockly.FieldVerticalSeparator.prototype.init = function () {
            oldFieldVerticalSeparatorInit.call(this);

            // Fix vertical line between extension icon and block label
            if (!addon.self.disabled && (isColoredTextMode() || textMode() === "black")) {
              this.lineElement_.setAttribute("stroke", this.sourceBlock_.getColourTertiary());
            }
          };
          apply = function apply() {
            var blockColors = JSON.parse(JSON.stringify(_lib_themes__WEBPACK_IMPORTED_MODULE_1__["defaultBlockColors"]));
            var _iterator2 = _createForOfIteratorHelper(categories),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var category = _step2.value;
                var primary = addon.settings.get(category.settingId);
                blockColors[category.colorId] = {
                  primary: primaryColor(primary),
                  secondary: secondaryColor(primary),
                  tertiary: tertiaryColor(primary),
                  quaternary: quaternaryColor(primary)
                };
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            blockColors.text = uncoloredTextColor();
            blockColors.textField = addon.settings.get("input-color");
            blockColors.textFieldText = textFieldText();
            if (textMode() === "colorOnWhite") blockColors.fieldShadow = "rgba(0, 0, 0, 0.15)";
            var extensions = {
              music: {
                blockIconURI: addon.self.getResource("".concat(iconPath(), "/extensions/music.svg"))
              },
              pen: {
                blockIconURI: addon.self.getResource("".concat(iconPath(), "/extensions/pen.svg"))
              },
              text2speech: {
                blockIconURI: addon.self.getResource("".concat(iconPath(), "/extensions/text2speech.svg"))
              },
              translate: {
                blockIconURI: addon.self.getResource("".concat(iconPath(), "/extensions/translate.").concat(useBlackIcons() ? 'svg' : 'png'))
              },
              videoSensing: {
                blockIconURI: addon.self.getResource("".concat(iconPath(), "/extensions/videoSensing.svg"))
              }
            };
            _lib_themes__WEBPACK_IMPORTED_MODULE_1__["BLOCKS_MAP"][_lib_themes__WEBPACK_IMPORTED_MODULE_1__["BLOCKS_CUSTOM"]] = {
              blocksMediaFolder: 'blocks-media/default',
              colors: blockColors,
              extensions: extensions,
              customExtensionColors: {
                primary: primaryColor,
                secondary: secondaryColor,
                tertiary: tertiaryColor,
                quaternary: quaternaryColor,
                categoryIconBackground: categoryIconBackground,
                categoryIconBorder: categoryIconBorder
              },
              useForStage: false
            };
            var newTheme = addon.tab.redux.state.scratchGui.theme.theme.set('blocks', _lib_themes__WEBPACK_IMPORTED_MODULE_1__["BLOCKS_CUSTOM"]);
            addon.tab.redux.dispatch({
              type: 'scratch-gui/theme/SET_THEME',
              theme: newTheme
            });
          };
          disable = function disable() {
            var defaultTheme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_2__["detectTheme"])().blocks;
            var newTheme = addon.tab.redux.state.scratchGui.theme.theme.set('blocks', defaultTheme);
            addon.tab.redux.dispatch({
              type: 'scratch-gui/theme/SET_THEME',
              theme: newTheme
            });
          };
          addon.self.addEventListener("disabled", disable);
          addon.self.addEventListener("reenabled", apply);
          addon.settings.addEventListener("change", apply);
          apply();
        case 43:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-theme3.js.map