"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/MobileMenu.tsx":
/*!**********************************************!*\
  !*** ./src/components/layout/MobileMenu.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MdClose_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdClose!=!react-icons/md */ \"__barrel_optimize__?names=MdClose!=!./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaChevronDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronDown!=!react-icons/fa */ \"__barrel_optimize__?names=FaChevronDown!=!./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MobileMenu = (param)=>{\n    let { closeMenu } = param;\n    _s();\n    const [openDropdown, setOpenDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const menuItems = [\n        {\n            text: \"Home\",\n            href: \"/\"\n        },\n        {\n            text: \"About\",\n            href: \"/about\",\n            subItems: [\n                {\n                    text: \"Mission Statement\",\n                    href: \"/about/mission\"\n                },\n                {\n                    text: \"Focus Areas\",\n                    href: \"/about/focus\"\n                }\n            ]\n        },\n        {\n            text: \"Services\",\n            href: \"/services\",\n            subItems: [\n                {\n                    text: \"Coaching\",\n                    href: \"/services/coaching\"\n                },\n                {\n                    text: \"Online Review\",\n                    href: \"/services/review\"\n                }\n            ]\n        },\n        {\n            text: \"Submit\",\n            href: \"/submit\",\n            subItems: [\n                {\n                    text: \"Requirements\",\n                    href: \"/submit/requirements\"\n                },\n                {\n                    text: \"How to Submit\",\n                    href: \"/submit/how-to\"\n                }\n            ]\n        },\n        {\n            text: \"Contact\",\n            href: \"/contact\"\n        }\n    ];\n    const handleDropdownToggle = (menuKey)=>{\n        if (openDropdown === menuKey) {\n            setOpenDropdown(null);\n        } else {\n            setOpenDropdown(menuKey);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed inset-0 bg-white z-50 flex flex-col border border-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: closeMenu,\n                className: \"absolute top-4 right-4 text-gray-700 focus:outline-none p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdClose_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdClose, {\n                    size: 24\n                }, void 0, false, {\n                    fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-16 w-full px-4\",\n                children: menuItems.map((param)=>{\n                    let { text, href, subItems } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between items-center cursor-pointer border-b border-gray-300 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: href,\n                                        passHref: true,\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: closeMenu,\n                                            className: \"text-gray-700 w-full pl-4 py-8\",\n                                            children: text\n                                        }, void 0, false, {\n                                            fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    subItems && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-gray-700 focus:outline-none py-9 bg-blue-200\",\n                                        onClick: ()=>handleDropdownToggle(text),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronDown, {\n                                            className: \"text-sm text-gray-500 w-24\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            subItems && openDropdown === text && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: subItems.map((param)=>{\n                                    let { text, href } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"w-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: href,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: closeMenu,\n                                                className: \"px-6 py-8 text-center text-gray-700 border-b border-gray-300\",\n                                                children: text\n                                            }, void 0, false, {\n                                                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, text, false, {\n                                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, text, true, {\n                        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/acelowder/journal-of-academic-inquiry/src/components/layout/MobileMenu.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileMenu, \"xemGlGtDHSf3G9SEkx73nluTIKk=\");\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTW9iaWxlTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNRO0FBQ007QUFNL0MsTUFBTUksYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQzFELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFnQjtJQUVoRSxNQUFNTyxZQUFZO1FBQ2hCO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFVBQVU7Z0JBQ1I7b0JBQUVGLE1BQU07b0JBQXFCQyxNQUFNO2dCQUFpQjtnQkFDcEQ7b0JBQUVELE1BQU07b0JBQWVDLE1BQU07Z0JBQWU7YUFDN0M7UUFDSDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO2dCQUNSO29CQUFFRixNQUFNO29CQUFZQyxNQUFNO2dCQUFxQjtnQkFDL0M7b0JBQUVELE1BQU07b0JBQWlCQyxNQUFNO2dCQUFtQjthQUNuRDtRQUNIO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFVBQVU7Z0JBQ1I7b0JBQUVGLE1BQU07b0JBQWdCQyxNQUFNO2dCQUF1QjtnQkFDckQ7b0JBQUVELE1BQU07b0JBQWlCQyxNQUFNO2dCQUFpQjthQUNqRDtRQUNIO1FBQ0E7WUFBRUQsTUFBTTtZQUFXQyxNQUFNO1FBQVc7S0FDckM7SUFFRCxNQUFNRSx1QkFBdUIsQ0FBQ0M7UUFDNUIsSUFBSVAsaUJBQWlCTyxTQUFTO1lBQzVCTixnQkFBZ0I7UUFDbEIsT0FBTztZQUNMQSxnQkFBZ0JNO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUNDQyxTQUFTWjtnQkFDVFUsV0FBVTswQkFFViw0RUFBQ2Isa0ZBQU9BO29CQUFDZ0IsTUFBTTs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDQztnQkFBR0osV0FBVTswQkFDWFAsVUFBVVksR0FBRyxDQUFDO3dCQUFDLEVBQUVYLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7eUNBQ3RDLDhEQUFDVTs7MENBQ0MsOERBQUNDO2dDQUFJUCxXQUFVOztrREFDYiw4REFBQ2Ysa0RBQUlBO3dDQUFDVSxNQUFNQTt3Q0FBTWEsUUFBUTt3Q0FBQ1IsV0FBVTtrREFDbkMsNEVBQUNPOzRDQUNDTCxTQUFTWjs0Q0FDVFUsV0FBVTtzREFFVE47Ozs7Ozs7Ozs7O29DQUdKRSwwQkFDQyw4REFBQ0s7d0NBQ0NELFdBQVU7d0NBQ1ZFLFNBQVMsSUFBTUwscUJBQXFCSDtrREFFcEMsNEVBQUNOLDhGQUFhQTs0Q0FBQ1ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBSTlCSixZQUFZTCxpQkFBaUJHLHNCQUM1Qiw4REFBQ1U7MENBQ0VSLFNBQVNTLEdBQUcsQ0FBQzt3Q0FBQyxFQUFFWCxJQUFJLEVBQUVDLElBQUksRUFBRTt5REFDM0IsOERBQUNXO3dDQUFjTixXQUFVO2tEQUN2Qiw0RUFBQ2Ysa0RBQUlBOzRDQUFDVSxNQUFNQTs0Q0FBTWEsUUFBUTtzREFDeEIsNEVBQUNEO2dEQUNDTCxTQUFTWjtnREFDVFUsV0FBVTswREFFVE47Ozs7Ozs7Ozs7O3VDQU5FQTs7Ozs7Ozs7Ozs7O3VCQXRCUkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NuQjtHQS9GTUw7S0FBQUE7QUFpR04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01vYmlsZU1lbnUudHN4P2Q0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWRDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IEZhQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmludGVyZmFjZSBNb2JpbGVNZW51UHJvcHMge1xuICBjbG9zZU1lbnU6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1vYmlsZU1lbnU6IFJlYWN0LkZDPE1vYmlsZU1lbnVQcm9wcz4gPSAoeyBjbG9zZU1lbnUgfSkgPT4ge1xuICBjb25zdCBbb3BlbkRyb3Bkb3duLCBzZXRPcGVuRHJvcGRvd25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgIGhyZWY6ICcvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBYm91dCcsXG4gICAgICBocmVmOiAnL2Fib3V0JyxcbiAgICAgIHN1Ykl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ01pc3Npb24gU3RhdGVtZW50JywgaHJlZjogJy9hYm91dC9taXNzaW9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdGb2N1cyBBcmVhcycsIGhyZWY6ICcvYWJvdXQvZm9jdXMnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NlcnZpY2VzJyxcbiAgICAgIGhyZWY6ICcvc2VydmljZXMnLFxuICAgICAgc3ViSXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ29hY2hpbmcnLCBocmVmOiAnL3NlcnZpY2VzL2NvYWNoaW5nJyB9LFxuICAgICAgICB7IHRleHQ6ICdPbmxpbmUgUmV2aWV3JywgaHJlZjogJy9zZXJ2aWNlcy9yZXZpZXcnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1N1Ym1pdCcsXG4gICAgICBocmVmOiAnL3N1Ym1pdCcsXG4gICAgICBzdWJJdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdSZXF1aXJlbWVudHMnLCBocmVmOiAnL3N1Ym1pdC9yZXF1aXJlbWVudHMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0hvdyB0byBTdWJtaXQnLCBocmVmOiAnL3N1Ym1pdC9ob3ctdG8nIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgeyB0ZXh0OiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdCcgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVEcm9wZG93blRvZ2dsZSA9IChtZW51S2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAob3BlbkRyb3Bkb3duID09PSBtZW51S2V5KSB7XG4gICAgICBzZXRPcGVuRHJvcGRvd24obnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE9wZW5Ecm9wZG93bihtZW51S2V5KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctd2hpdGUgei01MCBmbGV4IGZsZXgtY29sIGJvcmRlciBib3JkZXItYmxhY2tcIj5cbiAgICAgIHsvKiBDbG9zZSBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2Nsb3NlTWVudX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBwLTJcIlxuICAgICAgPlxuICAgICAgICA8TWRDbG9zZSBzaXplPXsyNH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMTYgdy1mdWxsIHB4LTRcIj5cbiAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgdGV4dCwgaHJlZiwgc3ViSXRlbXMgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RleHR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1lbnV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHctZnVsbCBwbC00IHB5LThcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHtzdWJJdGVtcyAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgcHktOSBiZy1ibHVlLTIwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEcm9wZG93blRvZ2dsZSh0ZXh0KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uRG93biBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgdy0yNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzdWJJdGVtcyAmJiBvcGVuRHJvcGRvd24gPT09IHRleHQgJiYgKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3N1Ykl0ZW1zLm1hcCgoeyB0ZXh0LCBocmVmIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3RleHR9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTggdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTcwMCBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIk1kQ2xvc2UiLCJGYUNoZXZyb25Eb3duIiwiTW9iaWxlTWVudSIsImNsb3NlTWVudSIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIm1lbnVJdGVtcyIsInRleHQiLCJocmVmIiwic3ViSXRlbXMiLCJoYW5kbGVEcm9wZG93blRvZ2dsZSIsIm1lbnVLZXkiLCJuYXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsInVsIiwibWFwIiwibGkiLCJkaXYiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/MobileMenu.tsx\n"));

/***/ })

});