"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/reserve/page",{

/***/ "(app-pages-browser)/./src/libs/postReservation.tsx":
/*!**************************************!*\
  !*** ./src/libs/postReservation.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ postReservation; }\n/* harmony export */ });\nasync function postReservation(rid, date, token) {\n    const response = await fetch(\"http://localhost:400/api/v1/restaurants/\".concat(rid, \"/reservations\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(token)\n        },\n        body: JSON.stringify({\n            resvDate: date\n        })\n    });\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch user\");\n    }\n    return await response.json();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWJzL3Bvc3RSZXNlcnZhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLGdCQUFnQkMsR0FBVSxFQUFFQyxJQUFXLEVBQUVDLEtBQVk7SUFDL0UsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDJDQUErQyxPQUFKSixLQUFJLGtCQUFnQjtRQUN4RkssUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLGlCQUFpQixVQUFnQixPQUFOSjtRQUMvQjtRQUNBSyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJDLFVBQVVUO1FBQ2Q7SUFDSjtJQUVBLElBQUcsQ0FBQ0UsU0FBU1EsRUFBRSxFQUFDO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBQ0EsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWJzL3Bvc3RSZXNlcnZhdGlvbi50c3g/MjcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwb3N0UmVzZXJ2YXRpb24ocmlkOnN0cmluZywgZGF0ZTpzdHJpbmcsIHRva2VuOnN0cmluZyl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAvYXBpL3YxL3Jlc3RhdXJhbnRzLyR7cmlkfS9yZXNlcnZhdGlvbnNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHJlc3ZEYXRlOiBkYXRlLFxuICAgICAgICB9KSxcbiAgICB9KVxuXG4gICAgaWYoIXJlc3BvbnNlLm9rKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXJcIilcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxufSJdLCJuYW1lcyI6WyJwb3N0UmVzZXJ2YXRpb24iLCJyaWQiLCJkYXRlIiwidG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdkRhdGUiLCJvayIsIkVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/libs/postReservation.tsx\n"));

/***/ })

});