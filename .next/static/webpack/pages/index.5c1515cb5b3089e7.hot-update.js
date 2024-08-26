"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/ArticleCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/ui/ArticleCard.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ArticleCard = (param)=>{\n    let { title, description, imageUrl, date, author } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col border-b border-gray-400 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: imageUrl,\n                alt: title,\n                layout: \"responsive\",\n                width: 300,\n                height: 200,\n                className: \"object-cover\"\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mt-4 text-lg font-bold underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 text-sm font-semibold\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto text-xs text-gray-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: date\n                    }, void 0, false, {\n                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, undefined),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: author\n                    }, void 0, false, {\n                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9BcnRpY2xlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBVS9CLE1BQU1DLGNBQTBDO1FBQUMsRUFDL0NDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsTUFBTSxFQUNQO3lCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1IsbURBQUtBO2dCQUNKUyxLQUFLTDtnQkFDTE0sS0FBS1I7Z0JBQ0xTLFFBQU87Z0JBQ1BDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JMLFdBQVU7Ozs7OzswQkFFWiw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQW9DTjs7Ozs7OzBCQUNsRCw4REFBQ2E7Z0JBQUVQLFdBQVU7MEJBQThCTDs7Ozs7OzBCQUMzQyw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUTtrQ0FBTVg7Ozs7OztvQkFBWTtrQ0FBRyw4REFBQ1c7a0NBQU1WOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbkI3Qkw7QUF3Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvQXJ0aWNsZUNhcmQudHN4P2I2Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbnRlcmZhY2UgQXJ0aWNsZUNhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFydGljbGVDYXJkOiBSZWFjdC5GQzxBcnRpY2xlQ2FyZFByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2VVcmwsXG4gIGRhdGUsXG4gIGF1dGhvcixcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlci1iIGJvcmRlci1ncmF5LTQwMCBoLWZ1bGxcIj5cbiAgICA8SW1hZ2VcbiAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICBhbHQ9e3RpdGxlfVxuICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICB3aWR0aD17MzAwfVxuICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgIC8+XG4gICAgPGgzIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZyBmb250LWJvbGQgdW5kZXJsaW5lXCI+e3RpdGxlfTwvaDM+XG4gICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byB0ZXh0LXhzIHRleHQtZ3JheS02MDBcIj5cbiAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj4gfCA8c3Bhbj57YXV0aG9yfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkFydGljbGVDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiZGF0ZSIsImF1dGhvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/ArticleCard.tsx\n"));

/***/ })

});