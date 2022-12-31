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
exports.id = "pages/api/get-promo";
exports.ids = ["pages/api/get-promo"];
exports.modules = {

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "(api)/./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ \"(api)/./credentials.json\");\n\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(\"1clQ6pBZhoxR-yDYgaU2AFMMiDxoKwBsbaSC7voUE5pU\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);\n        await doc.loadInfo();\n        const sheet = doc.sheetsByIndex[2];\n        await sheet.loadCells(\"A2:B2\");\n        const mostrarPromocaoCell = sheet.getCell(1, 0);\n        const textoCell = sheet.getCell(1, 1);\n        res.end(JSON.stringify({\n            showCoupon: mostrarPromocaoCell.value === \"VERDADEIRO\",\n            message: textoCell.value\n        }));\n    } catch (err) {\n        res.end(JSON.stringify({\n            showCoupon: false,\n            message: \"\"\n        }));\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUQ7QUFFTjtBQUVqRCxNQUFNRSxNQUFNLElBQUlGLGlFQUFpQkEsQ0FDL0I7QUFHRixpRUFBZSxPQUFPRyxLQUFLQyxNQUFRO0lBQ2pDLElBQUk7UUFDRixNQUFNRixJQUFJRyxxQkFBcUIsQ0FBQ0osOENBQVdBO1FBQzNDLE1BQU1DLElBQUlJLFFBQVE7UUFFbEIsTUFBTUMsUUFBUUwsSUFBSU0sYUFBYSxDQUFDLEVBQUU7UUFDbEMsTUFBTUQsTUFBTUUsU0FBUyxDQUFDO1FBRXRCLE1BQU1DLHNCQUFzQkgsTUFBTUksT0FBTyxDQUFDLEdBQUc7UUFDN0MsTUFBTUMsWUFBWUwsTUFBTUksT0FBTyxDQUFDLEdBQUc7UUFFbkNQLElBQUlTLEdBQUcsQ0FDTEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2JDLFlBQVlOLG9CQUFvQk8sS0FBSyxLQUFLO1lBQzFDQyxTQUFTTixVQUFVSyxLQUFLO1FBQzFCO0lBRUosRUFBRSxPQUFPRSxLQUFLO1FBQ1pmLElBQUlTLEdBQUcsQ0FDTEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2JDLFlBQVksS0FBSztZQUNqQkUsU0FBUztRQUNYO0lBRUo7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFscGl0ZS1ib3gvLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzPzNjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCI7XHJcblxyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSBcIi4uLy4uL2NyZWRlbnRpYWxzLmpzb25cIjtcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldChcclxuICBcIjFjbFE2cEJaaG94Ui15RFlnYVUyQUZNTWlEeG9Ld0JzYmFTQzd2b1VFNXBVXCJcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKTtcclxuICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xyXG5cclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMl07XHJcbiAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoXCJBMjpCMlwiKTtcclxuXHJcbiAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgxLCAwKTtcclxuICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0LmdldENlbGwoMSwgMSk7XHJcblxyXG4gICAgcmVzLmVuZChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNob3dDb3Vwb246IG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09IFwiVkVSREFERUlST1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IHRleHRvQ2VsbC52YWx1ZSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXMuZW5kKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgc2hvd0NvdXBvbjogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiR29vZ2xlU3ByZWFkc2hlZXQiLCJjcmVkZW50aWFscyIsImRvYyIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-promo.js\n");

/***/ }),

/***/ "(api)/./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"palpitebox-373213","private_key_id":"d39dbafb0d0935adf6bbbfcd8ff93a118069dc9f","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDIJ9HOa5YvOlDN\\nyIp5f662EsukMKUkcAom9u3wAojJwPLa5nucTZaJ/zVAITweqH4njs9caIaFGvUL\\noM78Y50EuIbonDkgq3XSxArwlaN+Or+W9Bc+iUTWtQ2pFsGPjrLFa/IjfD9x7mk4\\nL3KHeyQHNV9rBoE8NLnXIbxwsP+J55oiwCvDKgeTKiJkXNSCCQaDnHdql30N7v/+\\nalkhqlj/xvC8LV9iA4AoYSAcvJWR4vz8ZcbUIjo6erzSlebR6+PviVAg7RmLgkNI\\nEHuFfaiR/L6cNMTwp8onRG4YJwXmZeuJSDMrfYgouHGbECh0YFIwbIFnrXZrg8Ln\\nHtz1GlHTAgMBAAECggEAOF6GhwTjug9JXHsjDI66DIsEkQwmJjnrkgevAQ4lqfRO\\nMPoCTAXJ5LlcLOBvRw8a4Fcm7RZ+9BOgeZLjWE9RlFfHntEIgbvoJeCSWCk8bztq\\nY8AAn9sW6QT6gOlov95nWJRLEFVYpOSI+4rZTXCPt/v/EGw3j1YmFIFqya3/eb2h\\nYIOZZ8Z/QLNBRhJ7+jgKUW8zUgHq0uCRNvBQ44U1HV/GbHacdqoON+RZkKQZvhBj\\nF/ZgneOcNW1WWh2UU4loxdnw2Oyb3qxKQVmsGecXirH9x3v+5PSteGp1FcmaGfPO\\naFMrLVw+BN/GZtMHMRHGrah5OhJQFJ2S6XY4ABQxYQKBgQDzvUehGbFd70OISqEQ\\nb1d634WpfZ5Ah2/tIv3oth4HV3SmlrMLkgs/ra6f+nGat5l/nszgq0vsmKodyAe2\\nMMaaeF3QLeVvSn90e6sxvdT0JChAbIvogoeV7ADpIiH7U2bauWRD0VG6wrTMK4ij\\njBmZVwW5AxsyLFk/OBAgxeAmMQKBgQDSOUuFP1pM+LWSVChXFgk19XxA5924dRWB\\n2jIXEkPd48izhyaC8/ST8zv15Bqmtuqk2U/SzpvvxdP0AMcpf6cwl8TBI/wn3w7q\\n2UShvGhehU4Ah9IpMBdECsZj9fDZF4pCwaNHkowRvBhEZ/pkE1RVBS/toF8jrki3\\nUlWTuKnDQwKBgB26Exdh49D6Enl36KbxfXDd/BZM3NUv74Wzg9YzB/yLPQ3oSVP6\\n7uZIT4jxaZOeGtmGy6QHIE5t3CmfsNkWn9JNJdvzDQ2Cv4K8Zoe9iFBybHpXAsVL\\nzi+Jxh6o7A4UAPJiNAlVaStm/df840BXIPQjue3zpAh9gjEErGri11CxAoGAKPF3\\nv+/iynL2ChXR9YQZLyUsmgeOq0pCchPpBY1NIn4mrLB5069nxxjsaKuQdT/S22Bn\\np4sN29kPusob//0YtuIYM/WqOqm64gqGz2k+eopD8t6BE/yFy369vOI9kkp/ZxkH\\nj/z+wsV7hHcr0Sniltx3xTQi03QyPWIPwMGKbrkCgYAbi7fIcu1smPdgFduyqWXX\\nwuqV12PUnPEZzzfhG0bstnK51MKf3kkEcUcpExa9DuCysPOGHCHBjGTB+8bkhyTC\\n7RzZu9ACCSeF/MGdOGq+kOpaPE5Hybn06k6B3r5jBjGsSHl1pbpwmT07yO3lj+Hz\\nV10aCEIvzxR2P1uzRBLDtQ==\\n-----END PRIVATE KEY-----\\n","client_email":"palpitebox@palpitebox-373213.iam.gserviceaccount.com","client_id":"115269276776625685521","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/palpitebox%40palpitebox-373213.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-promo.js"));
module.exports = __webpack_exports__;

})();