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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [correctNetwork, setCorrectNetwork] = useState(false);\n    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);\n    const [currentAccount, setCurrentAccount] = useState(\"\");\n    // Calls Metamask to connect wallet on clicking Connect Wallet button\n    const connectWallet = async ()=>{\n    /*\n    try {\n      const { ethereum } = window;\n      if (!ethereum) {\n        console.log(\"Mestamask not detected...Pls install it.\");\n        alert(\"Mestamask not detected...Pls install it.\");\n        return;\n      }\n      setCorrectNetwork(true);\n      let accounts = await ethereum.request({ method: \"eth_requestAccounts\" });\n      console.log(\"Found account\", accounts[0]);\n      setIsUserLoggedIn(true);\n      setCurrentAccount(accounts[0]);\n    } catch (error) {\n      console.log(error);\n    }*/ };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#97b5fe] h-screen w-screen flex justify-center py-6\",\n        children: !isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectWalletButton, {\n            connectWallet: connectWallet\n        }, void 0, false, {\n            fileName: \"/Users/kevin/Developer/hardhat-nextjs-todolist/client/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : correctNetwork ? // <TodoList {...{ input, setInput, addTask, tasks, deleteTask }} />\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"To do\"\n        }, void 0, false, {\n            fileName: \"/Users/kevin/Developer/hardhat-nextjs-todolist/client/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrongNetworkMessage, {}, void 0, false, {\n            fileName: \"/Users/kevin/Developer/hardhat-nextjs-todolist/client/pages/index.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kevin/Developer/hardhat-nextjs-todolist/client/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dqGqSVP8aI0lGnFpF7kxzC1tRuM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDZ0I7QUFFaEMsU0FBU0csT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHQyxTQUFTLEtBQUs7SUFDMUQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHRixTQUFTLEtBQUs7SUFDMUQsTUFBTSxDQUFDRyxnQkFBZ0JDLGtCQUFrQixHQUFHSixTQUFTO0lBRXJELHFFQUFxRTtJQUNyRSxNQUFNSyxnQkFBZ0IsVUFBWTtJQUNoQzs7Ozs7Ozs7Ozs7Ozs7O0tBZUMsR0FDSDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaLENBQUNOLCtCQUNBLDhEQUFDTztZQUFvQkgsZUFBZUE7Ozs7O21CQUNsQ1AsaUJBQ0Ysb0VBQW9FO3NCQUNwRSw4REFBQ1E7c0JBQUk7Ozs7O2lDQUVMLDhEQUFDRzs7OztnQkFDRjs7Ozs7O0FBR1AsQ0FBQztHQXBDdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb3JyZWN0TmV0d29yaywgc2V0Q29ycmVjdE5ldHdvcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNVc2VyTG9nZ2VkSW4sIHNldElzVXNlckxvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBDYWxscyBNZXRhbWFzayB0byBjb25uZWN0IHdhbGxldCBvbiBjbGlja2luZyBDb25uZWN0IFdhbGxldCBidXR0b25cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICAvKlxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVzdGFtYXNrIG5vdCBkZXRlY3RlZC4uLlBscyBpbnN0YWxsIGl0LlwiKTtcbiAgICAgICAgYWxlcnQoXCJNZXN0YW1hc2sgbm90IGRldGVjdGVkLi4uUGxzIGluc3RhbGwgaXQuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRDb3JyZWN0TmV0d29yayh0cnVlKTtcbiAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBhY2NvdW50XCIsIGFjY291bnRzWzBdKTtcbiAgICAgIHNldElzVXNlckxvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSovXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzk3YjVmZV0gaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBweS02XCI+XG4gICAgICB7IWlzVXNlckxvZ2dlZEluID8gKFxuICAgICAgICA8Q29ubmVjdFdhbGxldEJ1dHRvbiBjb25uZWN0V2FsbGV0PXtjb25uZWN0V2FsbGV0fSAvPlxuICAgICAgKSA6IGNvcnJlY3ROZXR3b3JrID8gKFxuICAgICAgICAvLyA8VG9kb0xpc3Qgey4uLnsgaW5wdXQsIHNldElucHV0LCBhZGRUYXNrLCB0YXNrcywgZGVsZXRlVGFzayB9fSAvPlxuICAgICAgICA8ZGl2PlRvIGRvPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8V3JvbmdOZXR3b3JrTWVzc2FnZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJIb21lIiwiY29ycmVjdE5ldHdvcmsiLCJzZXRDb3JyZWN0TmV0d29yayIsInVzZVN0YXRlIiwiaXNVc2VyTG9nZ2VkSW4iLCJzZXRJc1VzZXJMb2dnZWRJbiIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjb25uZWN0V2FsbGV0IiwiZGl2IiwiY2xhc3NOYW1lIiwiQ29ubmVjdFdhbGxldEJ1dHRvbiIsIldyb25nTmV0d29ya01lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});