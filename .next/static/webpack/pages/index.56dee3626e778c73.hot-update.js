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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import MyButton from \"../components/Button\";\n// esta função observa o focus na janela\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nconst Index = ()=>{\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/get-promo\", fetcher);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center mt-8 mb-8 \",\n                children: [\n                    \"O restaurante X sempre busca por atender melhor seus clientes. \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 72\n                    }, undefined),\n                    \"Por isso, estamos sempre abertos a ouvir a sua opini\\xe3o\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"\",\n                        href: \"/pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-8 mt-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/pesquisa\",\n                            className: \" text-white my-12 bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow-md \",\n                            children: \"Dar opini\\xe3o ou sugest\\xe3o\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: !data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Carregando...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 48\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: !error && data && data.showCoupon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center mt-8 mb-8 \",\n                            children: data.message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Workspace\\\\PALPITE-BOX\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ0o7QUFDekIsK0NBQStDO0FBRS9DLHdDQUF3QztBQUN4QyxNQUFNRyxVQUFVLFdBQWFDO3FDQUFUQztRQUFBQTs7V0FBU0QsU0FBU0MsTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFBRTtBQUVwRSxNQUFNQyxRQUFRLElBQU07O0lBQ2xCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1QsK0NBQU1BLENBQUMsa0JBQWtCQztJQUVqRCxxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDQztnQkFBRUMsV0FBVTs7b0JBQXlCO2tDQUMyQiw4REFBQ0M7Ozs7O29CQUFLOzs7Ozs7OzBCQUd2RSw4REFBQ0g7O2tDQUNDLDhEQUFDWCxrREFBSUE7d0JBQUNhLFdBQVU7d0JBQUdFLE1BQUs7Ozs7OztrQ0FDeEIsOERBQUNKO3dCQUFJRSxXQUFVO2tDQUNiLDRFQUFDYixrREFBSUE7NEJBQ0hlLE1BQUs7NEJBQ0xGLFdBQVU7c0NBV1g7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FBZSxDQUFDSixzQkFBUSw4REFBQ0c7c0NBQUU7Ozs7Ozs7Ozs7O2tDQUMxQyw4REFBQ0Q7d0JBQUlFLFdBQVU7a0NBQ1osQ0FBQ0gsU0FBU0QsUUFBUUEsS0FBS08sVUFBVSxrQkFDaEMsOERBQUNKOzRCQUFFQyxXQUFVO3NDQUEwQkosS0FBS1EsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0Q7R0F0Q01UOztRQUNvQlAsMkNBQU1BOzs7S0FEMUJPO0FBdUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG4vLyBpbXBvcnQgTXlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG4vLyBlc3RhIGZ1bsOnw6NvIG9ic2VydmEgbyBmb2N1cyBuYSBqYW5lbGFcclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9nZXQtcHJvbW9cIiwgZmV0Y2hlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC04IG1iLTggXCI+XHJcbiAgICAgICAgTyByZXN0YXVyYW50ZSBYIHNlbXByZSBidXNjYSBwb3IgYXRlbmRlciBtZWxob3Igc2V1cyBjbGllbnRlcy4gPGJyIC8+XHJcbiAgICAgICAgUG9yIGlzc28sIGVzdGFtb3Mgc2VtcHJlIGFiZXJ0b3MgYSBvdXZpciBhIHN1YSBvcGluacOjb1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9wZXNxdWlzYVwiPjwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTggbXQtOFwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9wZXNxdWlzYVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcclxuICAgICAgICAgICAgdGV4dC13aGl0ZSAgICAgICAgICAgXHJcbiAgICAgICAgICBteS0xMlxyXG4gICAgICAgICAgYmctYmx1ZS00MDAgXHJcbiAgICAgICAgICBweC02IFxyXG4gICAgICAgICAgcHktNCBcclxuICAgICAgICAgIGZvbnQtYm9sZCBcclxuICAgICAgICAgIHJvdW5kZWQtbGdcclxuICAgICAgICAgIHNoYWRvdy1sZ1xyXG4gICAgICAgICAgaG92ZXI6c2hhZG93LW1kXHJcbiAgICAgICAgICAgXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGFyIG9waW5pw6NvIG91IHN1Z2VzdMOjb1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57IWRhdGEgJiYgPHA+Q2FycmVnYW5kby4uLjwvcD59PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgeyFlcnJvciAmJiBkYXRhICYmIGRhdGEuc2hvd0NvdXBvbiAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTggbWItOCBcIj57ZGF0YS5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsgXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlU1dSIiwiZmV0Y2hlciIsImZldGNoIiwiYXJncyIsInRoZW4iLCJyZXMiLCJqc29uIiwiSW5kZXgiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiYnIiLCJocmVmIiwic2hvd0NvdXBvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});