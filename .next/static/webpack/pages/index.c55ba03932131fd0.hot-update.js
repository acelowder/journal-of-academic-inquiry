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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ArticleCard = (param)=>{\n    let { title, description, imageUrl, date, author } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col border-b border-gray-400 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[30%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: imageUrl,\n                    alt: title,\n                    layout: \"responsive\",\n                    width: 300,\n                    height: 200,\n                    className: \"object-cover\"\n                }, void 0, false, {\n                    fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mt-4 text-xl font-serif font-bold underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto mb-2 text-xs text-gray-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: date\n                    }, void 0, false, {\n                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, undefined),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: author\n                    }, void 0, false, {\n                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/ui/ArticleCard.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ArticleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleCard);\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9BcnRpY2xlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBVS9CLE1BQU1DLGNBQTBDO1FBQUMsRUFDL0NDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsTUFBTSxFQUNQO3lCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNSLG1EQUFLQTtvQkFDSlMsS0FBS0w7b0JBQ0xNLEtBQUtSO29CQUNMUyxRQUFPO29CQUNQQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSTCxXQUFVOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQStDTjs7Ozs7OzBCQUM3RCw4REFBQ2E7Z0JBQUVQLFdBQVU7MEJBQVFMOzs7Ozs7MEJBQ3JCLDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO2tDQUFNWDs7Ozs7O29CQUFZO2tDQUFHLDhEQUFDVztrQ0FBTVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FyQjdCTDtBQTBCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9BcnRpY2xlQ2FyZC50c3g/YjZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmludGVyZmFjZSBBcnRpY2xlQ2FyZFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbn1cblxuY29uc3QgQXJ0aWNsZUNhcmQ6IFJlYWN0LkZDPEFydGljbGVDYXJkUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbWFnZVVybCxcbiAgZGF0ZSxcbiAgYXV0aG9yLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwIGgtZnVsbFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzMwJV1cIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQteGwgZm9udC1zZXJpZiBmb250LWJvbGQgdW5kZXJsaW5lXCI+e3RpdGxlfTwvaDM+XG4gICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLTIgdGV4dC14cyB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+IHwgPHNwYW4+e2F1dGhvcn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJBcnRpY2xlQ2FyZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsImRhdGUiLCJhdXRob3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwicCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/ArticleCard.tsx\n"));

/***/ })

});