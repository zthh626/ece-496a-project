"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auction";
exports.ids = ["pages/auction"];
exports.modules = {

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        itemName: \"Chrysler\",\n        itemPicture: \"https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2210&q=80\",\n        itemAddress: \"\"\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQUc7SUFDbEI7UUFDRUMsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLFdBQVcsRUFDVCxnS0FBZ0s7UUFDbEtDLFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VjZS00OTZhLWZyb250ZW5kLy4vZGF0YS5qcz81MTFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhID0gW1xuICB7XG4gICAgaXRlbU5hbWU6IFwiQ2hyeXNsZXJcIixcbiAgICBpdGVtUGljdHVyZTpcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzEyODk1NDk0MjMtMDRhZGFlY2ZhMWYxP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMjEwJnE9ODBcIixcbiAgICBpdGVtQWRkcmVzczogXCJcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZGF0YSIsIml0ZW1OYW1lIiwiaXRlbVBpY3R1cmUiLCJpdGVtQWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/auction/index.tsx":
/*!*********************************!*\
  !*** ./pages/auction/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ \"./data.js\");\n\n\nconst Auction = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: _data__WEBPACK_IMPORTED_MODULE_1__.data.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    item.itemName,\n                    \" \"\n                ]\n            }, i, true, {\n                fileName: \"/Users/manavshergill/Desktop/ece-496a-project/frontend/pages/auction/index.tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/manavshergill/Desktop/ece-496a-project/frontend/pages/auction/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdWN0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0M7QUFDbEMsTUFBTUMsT0FBTyxHQUFHLElBQU07SUFDcEIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0RGLDJDQUFRLENBQUMsQ0FBQ0ksSUFBSSxFQUFFQyxDQUFDLGlCQUNoQiw4REFBQ0gsS0FBRzs7b0JBQVVFLElBQUksQ0FBQ0UsUUFBUTtvQkFBQyxHQUFDOztlQUFuQkQsQ0FBQzs7Ozt5QkFBd0IsQ0FDbkM7Ozs7O2lCQUNFLENBQ047Q0FDSDtBQUVELGlFQUFlSixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2UtNDk2YS1mcm9udGVuZC8uL3BhZ2VzL2F1Y3Rpb24vaW5kZXgudHN4P2ZlMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhXCI7XG5jb25zdCBBdWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9PntpdGVtLml0ZW1OYW1lfSA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVjdGlvbjtcbiJdLCJuYW1lcyI6WyJkYXRhIiwiQXVjdGlvbiIsImRpdiIsIm1hcCIsIml0ZW0iLCJpIiwiaXRlbU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auction/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auction/index.tsx"));
module.exports = __webpack_exports__;

})();