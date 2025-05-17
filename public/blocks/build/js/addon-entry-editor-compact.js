(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-compact"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/hide-labels.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/hide-labels.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Asset editor */\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_mod-edit-field\"],\n[class*=\"sound-editor_tool-button_\"],\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  min-width: 0;\n  margin-right: 2px;\n  padding: calc(0.125rem - 1px);\n  border: 1px solid var(--editorDarkMode-border, hsla(0, 0%, 0%, 0.15));\n  border-radius: 0.25rem;\n}\n[class*=\"sound-editor_tool-button\"] img {\n  width: 20px;\n}\n[class*=\"asset-panel_detail-area\"] [class*=\"label_input-label\"],\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_edit-field-title\"],\n[class*=\"icon-button_title_\"] {\n  display: none;\n}\n[dir=\"ltr\"] [class*=\"paint-editor_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"paint-editor_mod-dashed-border_\"] {\n  border: none;\n}\n[class*=\"mode-tools_mod-labeled-icon-height\"],\n[class*=\"paint-editor_mod-labeled-icon-height\"] {\n  height: auto;\n}\n[class*=\"paint-editor_row_\"] > [class*=\"tools_row_\"],\n[class*=\"paint-editor_mod-mode-tools_\"] > [class*=\"mode-tools_mode-tools_\"] {\n  gap: calc(0.25rem);\n}\n[dir=\"ltr\"] [class*=\"fixed-tools_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"fixed-tools_mod-dashed-border_\"],\n[dir=\"ltr\"] [class*=\"mode-tools_mod-dashed-border_\"],\n[dir=\"rtl\"] [class*=\"mode-tools_mod-dashed-border_\"],\n[dir=\"ltr\"] [class*=\"sound-editor_input-group_\"],\n[dir=\"rtl\"] [class*=\"sound-editor_input-group_\"],\n[dir=\"rtl\"] [class*=\"sound-editor_row-reverse_\"] [class*=\"sound-editor_input-group_\"] {\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n[class*=\"sound-editor_input-group_\"] {\n  gap: 2px;\n}\n[class*=\"sound-editor_input-group_\"] > * {\n  margin: 0;\n}\n[class*=\"sound-editor_row_\"] > [class*=\"icon-button_container_\"] {\n  margin-left: 1rem;\n}\n[class*=\"sound-editor_tool-button\"],\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  width: 24px;\n  height: 24px;\n  flex-basis: auto;\n}\n[class*=\"mode-tools_mode-tools\"] {\n  min-height: 0;\n}\n\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"icon-button_container_\"] {\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/sprite-properties.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/sprite-properties.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These styles are in a separate file with \"if\" to make sure that they aren't applied\n   when sprite-properties is dynamically disabled. */\n.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"],\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  height: calc(5.25rem + 1px);\n}\n.sa-sprite-properties-close-btn {\n  height: 1rem;\n  padding-top: 0.25rem;\n}\n.sa-hide-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/userstyle.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-compact/userstyle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Full page */\n[class*=\"gui_body-wrapper\"] {\n  height: calc(100% - 2rem);\n}\n.sa-body-editor,\n.sa-body-editor * {\n  scrollbar-width: thin;\n}\n.sa-body-editor::-webkit-scrollbar,\n.sa-body-editor ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.sa-body-editor::-webkit-scrollbar {\n  background-color: var(--editorDarkMode-page, #e5f0ff);\n}\n.sa-body-editor::-webkit-scrollbar-thumb,\n.sa-body-editor ::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-page-compactScrollbar, #bec7d4);\n  background-clip: padding-box;\n  border-radius: 4px;\n  border: 1px solid transparent;\n}\n\n/* Menu bar */\n[class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img,\n[class*=\"menu-bar_divider\"],\n[class*=\"menu-bar_help-icon\"] {\n  display: none;\n}\n[class*=\"menu-bar_collapsible-label_\"],\n[dir=\"rtl\"] [class*=\"menu-bar_collapsible-label_\"],\n[class*=\"settings-menu_dropdown-label_\"],\n[dir=\"rtl\"] [class*=\"settings-menu_dropdown-label_\"] {\n  margin: 0;\n}\n@media (max-width: 1024px) {\n  [class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_hoverable_\"] > img:first-child {\n    display: inline;\n  }\n}\n\n[class*=\"gui_menu-bar-position\"][class*=\"menu-bar_menu-bar\"][class*=\"box_box\"],\n[class*=\"menu-bar_menu-bar-item\"] {\n  height: 2rem;\n}\n\n[class*=\"menu-bar_file-group_\"] [class*=\"menu-bar_menu-bar-item_\"],\n[class*=\"menu-bar_account-info-group_\"] [class*=\"menu-bar_menu-bar-item_\"] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n[class*=\"menu-bar_menu-bar-menu\"] {\n  margin-top: 2rem;\n}\n[class*=\"menu_menu-item\"] {\n  line-height: 1.75rem;\n  padding: 0 0.5rem;\n}\n\n[class*=\"menu-bar_menu-bar-button\"],\n[class*=\"menu-bar_feedback-button_\"] {\n  height: 1.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n[class*=\"menu-bar_growable\"] {\n  padding-inline-start: 0.5rem;\n}\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  box-sizing: border-box;\n  padding: 0.25rem;\n  font-size: 0.75rem;\n}\n[class*=\"menu-bar_growable\"] [class*=\"input_input-form\"]:focus {\n  box-shadow: 0 0 0 calc(0.5rem * 0.25) hsla(0, 100%, 100%, 0.25);\n}\n\n.sa-editormessages-count {\n  top: 0.15rem;\n  right: 0.4rem;\n}\n\n[class*=\"account-nav_user-info\"] [class*=\"account-nav_avatar\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-inline-start: 0.25rem;\n}\n\n/* Sprites area */\n[class^=\"sprite-info_sprite-info_\"] {\n  padding: 0.5rem;\n  height: 4.75rem;\n}\n[class*=\"sprite-info_row\"] {\n  justify-content: flex-start;\n}\n[class*=\"sprite-info_group\"],\n[class*=\"sprite-info_column_\"] {\n  margin-inline-end: 1rem;\n}\n[class*=\"sprite-info_group\"]:last-child,\n[class*=\"sprite-info_column_\"]:last-child {\n  margin-inline-end: 0;\n}\n[class*=\"sprite-info_column_\"],\n[class*=\"label_input-group-column_\"] {\n  flex-direction: row;\n  align-items: center;\n}\n[class*=\"sprite-info_column_\"] span,\n[class*=\"label_input-group-column_\"] span {\n  margin-bottom: 0;\n}\n[class*=\"sprite-info_icon-wrapper\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.25rem;\n}\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n}\n[class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"],\n[class*=\"gui_tabs\"] [class*=\"input_input-form\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n}\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-info_sprite-info\"] [class*=\"input_input-form\"]:focus,\n[class*=\"gui_body-wrapper_\"] [class*=\"gui_tabs\"] [class*=\"input_input-form\"]:focus {\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"gui_body-wrapper_\"] [class*=\"sprite-selector-item_is-selected\"],\n[class*=\"gui_body-wrapper_\"] [class*=\"stage-selector_is-selected_\"] {\n  box-shadow: 0px 0px 0px 2px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"input_input-small\"][type=\"text\"],\n[class*=\"sprite-info_larger-input\"] input[type=\"text\"] {\n  /* Vanilla is width:4rem */\n  width: 2.5rem;\n}\n[class*=\"input_input-small\"][type=\"number\"] {\n  /* Vanilla is width:4rem but browsers take part of it for the up/down arrows */\n  width: 3.5rem;\n}\n\n[class*=\"sprite-selector_scroll-wrapper\"] {\n  height: calc(100% - 4.75rem);\n}\n[class*=\"sprite-selector_scroll-wrapper\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\n}\n[class*=\"sprite-selector_items-wrapper\"] {\n  padding: 0.125rem;\n}\n[class*=\"sprite-selector_sprite-wrapper\"] {\n  margin: 0.125rem;\n}\n[class*=\"sprite-selector-item_delete-button\"] {\n  top: -0.25rem;\n}\n[dir=\"ltr\"] [class*=\"delete-button_delete-button_\"] {\n  right: -0.25rem;\n}\n[dir=\"rtl\"] [class*=\"delete-button_delete-button_\"] {\n  left: -0.25rem;\n}\n[class*=\"delete-button_delete-button-visible\"] {\n  width: 1rem;\n  height: 1rem;\n  box-shadow: 0 0 0 1px var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[class*=\"delete-button_delete-icon\"] {\n  display: none;\n}\n[class*=\"delete-button_delete-button-visible\"]::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 25%;\n  left: 25%;\n  width: 50%;\n  height: 50%;\n  background-image: url(" + escape(__webpack_require__(/*! ./close.svg */ "./src/addons/addons/editor-compact/close.svg")) + ");\n  transform: rotate(45deg);\n  filter: var(--editorDarkMode-primary-filter, none);\n}\nimg[class*=\"sprite-selector-item_sprite-image\"] {\n  max-width: 56px;\n  max-height: 32px;\n}\n\n[class*=\"action-menu_main-button\"] {\n  width: 2rem;\n  height: 2rem;\n}\n[class*=\"action-menu_main-button\"] img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n[class*=\"action-menu_more-buttons-outer\"] {\n  width: 2rem;\n  bottom: 2rem;\n  padding-bottom: calc(2rem / 2);\n  margin: 0 0 calc(2rem / -2) 0;\n  border-top-left-radius: 2rem;\n  border-top-right-radius: 2rem;\n}\nbutton[class*=\"action-menu_more-button\"] {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* Project player */\n.sa-body-editor [class*=\"stage-header_stage-menu-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  height: 2rem;\n}\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor [class*=\"stop-all_stop-all_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding: 0.25rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.sa-body-editor [class*=\"turbo-mode_turbo-icon_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .clone-icon:not([class*=\"stage-wrapper_full-screen\"] *) {\n  /* Remove vertical margin from images that appear on the stage header */\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.sa-body-editor [class*=\"stage-header_stage-button_\"]:not([class*=\"stage-wrapper_full-screen\"] *) {\n  padding: calc(0.25rem - 1px);\n}\n.sa-body-editor [class*=\"green-flag_green-flag_\"]:not([class*=\"stage-wrapper_full-screen\"] *),\n.sa-body-editor .pause-btn:not([class*=\"stage-wrapper_full-screen\"] *) {\n  margin-inline-end: 0.125rem;\n}\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  height: 2rem;\n}\n\n.sa-body-editor [class*=\"monitor_list-body_\"] > div::-webkit-scrollbar-thumb {\n  background-color: #bec7d4;\n}\n\n/* Toggle buttons */\n[class*=\"toggle-buttons_button_\"] {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: calc(0.25rem - 1px);\n}\n\n/* Tabs area */\n[class*=\"gui_tab-list\"] {\n  height: 2rem;\n}\n[class*=\"gui_tab_\"] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n[class*=\"gui_tab_\"] > img {\n  display: none;\n}\n\n.sa-find-bar {\n  align-self: center;\n}\n.sa-find-wrapper {\n  height: 20px;\n}\n.sa-find-dropdown-out {\n  margin-top: 0;\n}\n\n/* Code tab */\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .scratchCategoryMenuItem {\n  padding: 0.25rem 0;\n}\n.scratchCategoryItemBubble,\n.scratchCategoryItemIcon {\n  width: 1rem;\n  height: 1rem;\n  background-size: 1rem 1rem;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv {\n  height: calc(100% - 2rem) !important;\n  scrollbar-width: none;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] .blocklyToolboxDiv::-webkit-scrollbar {\n  display: none;\n}\nbody:not(.sa-columns-enabled) [class*=\"gui_tab-panel\"] [class*=\"gui_extension-button-container_\"] {\n  height: 2rem;\n}\n\n/* Assets panel */\n[class*=\"selector_wrapper\"] {\n  width: 100px;\n}\n[class*=\"selector_list-item\"] {\n  margin: 0.25rem auto;\n}\n[class*=\"selector_list-area\"] {\n  overflow-y: auto;\n}\n[class*=\"selector_list-area\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector2-compactScrollbar, #b4bcc9);\n}\n[class*=\"selector_list-area\"] > div:first-child {\n  margin-top: 0.25rem;\n}\n[class*=\"selector_list-area\"] img[class*=\"sprite-selector-item_sprite-image\"] {\n  max-width: 52px;\n  max-height: 44px;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-name\"] {\n  margin: 0;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_sprite-info\"] {\n  padding-top: 0;\n  padding-bottom: 0.125rem;\n}\n[class*=\"selector_list-area\"] [class*=\"sprite-selector-item_is-selected\"] [class*=\"sprite-selector-item_sprite-info\"] {\n  background-color: transparent;\n  color: inherit;\n}\n\n/* Asset editor */\n[class*=\"asset-panel_detail-area\"] > div {\n  padding: 0.5rem;\n}\n[class*=\"paint-editor_row_\"] input {\n  font-size: 10px;\n}\n[class*=\"asset-panel_detail-area\"] [class*=\"labeled-icon-button_edit-field-icon\"],\n[class*=\"mode-tools_mode-tools-icon_\"],\n[class*=\"sound-editor_button_\"] img {\n  width: 20px;\n  height: 20px;\n}\n[class*=\"sound-editor_tool-button\"] img {\n  height: 20px;\n}\n[class*=\"fixed-tools_button-group-button_\"],\n[class*=\"paint-editor_button-group-button_\"],\n[class*=\"sound-editor_button_\"] {\n  padding: calc(0.125rem - 1px);\n}\n[class*=\"sound-editor_button_\"] {\n  width: 24px;\n  height: 24px;\n}\n[class*=\"paint-editor_editor-container-top\"] {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n\n[class*=\"paint-editor_top-align-row\"] {\n  padding-top: 0.5rem;\n}\n[class*=\"paint-editor_mode-selector\"] {\n  width: min-content;\n}\n\n[class*=\"sound-editor_row_\"] + [class*=\"sound-editor_row_\"] {\n  margin-top: 0.5rem;\n}\n[class*=\"sound-editor_waveform-container_\"] {\n  margin: 0;\n}\n\n[class*=\"sound-editor_row-reverse_\"] {\n  gap: 2px;\n}\n[class*=\"sound-editor_row-reverse_\"] > [class*=\"sound-editor_input-group_\"] {\n  margin-right: 0.5rem;\n}\n\n[class*=\"paint-editor_canvas-controls\"] {\n  height: min-content;\n  margin-top: 0.5rem;\n}\n[class*=\"paint-editor_bitmap-button_\"] {\n  padding: 0 0.25rem;\n}\n[class*=\"paint-editor_bitmap-button-icon_\"] {\n  align-self: center;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.sa-paintEditorZoomControls-wrapper {\n  height: auto !important;\n}\n[class*=\"paint-editor_zoom-controls_\"] {\n  align-self: flex-start;\n}\n\n/* Modals and prompts */\n[class*=\"card_header-buttons_\"] > div,\n[class*=\"card_header-buttons-right_\"] > div {\n  padding: 0.5rem;\n  margin: 0;\n}\n[class*=\"card_header-buttons_\"] span:not(.sa-debugger-tabs *) {\n  display: none;\n}\n[class*=\"card_header-buttons_\"] > [class*=\"card_header-buttons-right_\"] {\n  padding: 0;\n}\n[class*=\"card_remove-button_\"] > [class*=\"card_close-icon_\"],\n[class*=\"card_all-button_\"] > [class*=\"card_help-icon_\"] {\n  margin: 0;\n}\n.sa-debugger-tabs {\n  padding: 0 0.25rem;\n  margin-left: 0.25rem;\n}\n.sa-debugger-tabs li {\n  padding: 0.25em 1em;\n}\n.sa-debugger-tabs li + li {\n  margin-inline-start: 0.25rem;\n}\n\n[class*=\"modal_header\"],\n[class*=\"library_filter-bar\"] {\n  height: 2rem;\n}\n[class*=\"close-button_large\"] {\n  width: 1rem;\n  height: 1rem;\n}\n\n[class*=\"library_filter-bar-item\"] {\n  height: 1.5rem;\n}\n[class*=\"library_filter-bar-item\"]:focus-within {\n  box-shadow: 0 0 0 0.125rem var(--editorDarkMode-primary-transparent35, hsl(260deg 60% 60% / 35%));\n}\n[dir=\"ltr\"] [class*=\"filter_filter-icon\"],\n[dir=\"rtl\"] [class*=\"filter_filter-icon\"],\n[class*=\"filter_x-icon_\"] {\n  width: 0.75rem;\n  margin: 0.25rem 0.5rem;\n}\n[dir=\"ltr\"] [class*=\"filter_filter-input\"] {\n  padding-left: 1.75rem;\n}\n[dir=\"rtl\"] [class*=\"filter_filter-input\"] {\n  padding-right: 1.75rem;\n}\n[class*=\"library_divider\"] {\n  display: none;\n}\n[class*=\"filter_x-icon-wrapper\"] {\n  position: static;\n  margin: 0;\n}\n[class*=\"library_tag-wrapper\"] {\n  height: auto;\n}\n[class*=\"library_library-scroll-grid\"] {\n  height: calc(100% - 2rem);\n}\n[class*=\"library_library-scroll-grid\"][class*=\"library_withFilterBar\"] {\n  height: calc(100% - 4rem);\n}\n[class*=\"library_library-scroll-grid\"]::-webkit-scrollbar-thumb {\n  background-color: var(--editorDarkMode-selector-compactScrollbar, #c1c8d1);\n}\n\n[class*=\"prompt_body\"],\n[class*=\"custom-procedures_body\"] {\n  padding: 1rem;\n}\n[class*=\"modal_modal-content\"] [class*=\"box_box\"] button {\n  padding: 0.5rem 0.75rem;\n}\n\n[class*=\"prompt_variable-name-text-input\"] {\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n.sa-swap-local-global-hint,\n[class*=\"prompt_options-row\"] {\n  padding-bottom: 0.5rem;\n}\n[class*=\"prompt_cloud-option\"] {\n  border: none;\n  padding-top: 0;\n}\n\n[class*=\"custom-procedures_modal-content\"] {\n  width: 500px;\n}\n[class*=\"custom-procedures_workspace\"] {\n  min-height: 100px;\n}\n.blocklyTextRemoveIcon {\n  top: -35px;\n}\n[class*=\"custom-procedures_body\"] [role=\"button\"] {\n  padding: 0.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg":
/*!******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/editor-compact/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/editor-compact/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-compact/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./hide-labels.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/hide-labels.css");
/* harmony import */ var _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./sprite-properties.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-compact/sprite-properties.css");
/* harmony import */ var _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-compact/close.svg");
/* generated by pull.js */





var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "hide-labels.css": _css_loader_hide_labels_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "sprite-properties.css": _css_loader_sprite_properties_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "close.svg": _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-compact/close.svg":
/*!****************************************************!*\
  !*** ./src/addons/addons/editor-compact/close.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/editor-compact/force-tooltip-update.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/editor-compact/force-tooltip-update.js ***!
  \******************************************************************/
/*! exports provided: eventTarget, updateTooltips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTarget", function() { return eventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTooltips", function() { return updateTooltips; });
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
 /* inserted by pull.js */

var eventTarget = new _event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
function updateTooltips() {
  eventTarget.dispatchEvent(new CustomEvent("update"));
}

/***/ }),

/***/ "./src/addons/addons/editor-compact/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-compact/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
/* harmony import */ var _force_tooltip_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-tooltip-update.js */ "./src/addons/addons/editor-compact/force-tooltip-update.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
 /* inserted by pull.js */


/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref) {
    var addon, global, console, resizeObserver, resizeWorkspace, _resizeWorkspace, updateTooltips;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _resizeWorkspace = function _resizeWorkspace3() {
            _resizeWorkspace = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    window.dispatchEvent(new Event("resize"));
                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return _resizeWorkspace.apply(this, arguments);
          };
          resizeWorkspace = function _resizeWorkspace2() {
            return _resizeWorkspace.apply(this, arguments);
          };
          addon = _ref.addon, global = _ref.global, console = _ref.console;
          // The workspace needs to be manually resized via a window resize event
          // whenever the addon modifies or stops modifying UI elements
          resizeWorkspace();
          resizeObserver = new ResizeObserver(resizeWorkspace);
          _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var menuBar;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (false) {}
                  _context.next = 3;
                  return addon.tab.waitForElement('[class*="menu-bar_menu-bar"]', {
                    markAsSeen: true,
                    reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
                    reduxCondition: function reduxCondition(state) {
                      return !state.scratchGui.mode.isPlayerOnly;
                    }
                  });
                case 3:
                  menuBar = _context.sent;
                  resizeObserver.observe(menuBar);
                  _context.next = 0;
                  break;
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();

          // Icons in the sound editor don't have tooltips. Add them if labels are hidden.
          updateTooltips = function updateTooltips() {
            var _iterator = _createForOfIteratorHelper(document.querySelectorAll("[class*='sound-editor_tool-button_'], [class*='sound-editor_effect-button_']")),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var button = _step.value;
                var icon = button.querySelector("img");
                if (!addon.self.disabled && addon.settings.get("hideLabels")) icon.title = button.textContent;else icon.removeAttribute("title");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          };
          updateTooltips();
          addon.settings.addEventListener("change", updateTooltips);
          addon.self.addEventListener("disabled", updateTooltips);
          addon.self.addEventListener("reenabled", updateTooltips);
          _force_tooltip_update_js__WEBPACK_IMPORTED_MODULE_1__["eventTarget"].addEventListener("update", updateTooltips);
        case 12:
          if (false) {}
          _context3.next = 15;
          return addon.tab.waitForElement("[class*='sound-editor_editor-container_']", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly && state.scratchGui.editorTab.activeTabIndex === 2;
            }
          });
        case 15:
          updateTooltips();
          _context3.next = 12;
          break;
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-compact.js.map