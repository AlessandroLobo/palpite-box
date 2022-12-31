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
exports.id = "pages/api/save";
exports.ids = ["pages/api/save"];
exports.modules = {

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "moment/moment":
/*!********************************!*\
  !*** external "moment/moment" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("moment/moment");

/***/ }),

/***/ "(api)/./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ \"(api)/./credentials.json\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ \"moment/moment\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(\"1clQ6pBZhoxR-yDYgaU2AFMMiDxoKwBsbaSC7voUE5pU\");\nconst genCupom = ()=>{\n    const code = parseInt(moment_moment__WEBPACK_IMPORTED_MODULE_2___default()().format(\"YYMMDDhmmssSSS\")).toString(16).toLocaleUpperCase();\n    return code.substr(0, 4) + \"-\" + code.substr(4, 4) + \"-\" + code.substr(8, 4);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);\n        await doc.loadInfo();\n        const sheet = doc.sheetsByIndex[1];\n        const data = JSON.parse(req.body);\n        const sheetConfig = doc.sheetsByIndex[2];\n        await sheetConfig.loadCells(\"A2:B2\");\n        const mostrarPromocaoCell = sheetConfig.getCell(1, 0);\n        const textoCell = sheetConfig.getCell(1, 1);\n        let Cupom = \"\";\n        let Promo = \"\";\n        if (mostrarPromocaoCell.value === \"VERDADEIRO\") {\n            Cupom = genCupom();\n            Promo = textoCell.value;\n        }\n        //Nome\tEmail\tWhatsapp\tCupom\tPromo\n        await sheet.addRow({\n            Nome: data.Nome,\n            Email: data.Email,\n            Whatsapp: data.Whatsapp,\n            Nota: 5,\n            \"Data Preenchimento\": new (moment_moment__WEBPACK_IMPORTED_MODULE_2___default())().format(\"DD/MM/YYYY, h:mm:ss a\"),\n            Cupom,\n            Promo\n        });\n        res.end(JSON.stringify({\n            showCupon: Cupom !== \"\",\n            Cupom,\n            Promo\n        }));\n    } catch (err) {\n        console.log(err);\n        res.end(\"error\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUQ7QUFFTjtBQUNkO0FBRW5DLE1BQU1HLE1BQU0sSUFBSUgsaUVBQWlCQSxDQUMvQjtBQUdGLE1BQU1JLFdBQVcsSUFBTTtJQUNyQixNQUFNQyxPQUFPQyxTQUFTSixvREFBTUEsR0FBR0ssTUFBTSxDQUFDLG1CQUNQQyxRQUFRLENBQUMsSUFDVEMsaUJBQWlCO0lBQ2hELE9BQU9KLEtBQUtLLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTUwsS0FBS0ssTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNTCxLQUFLSyxNQUFNLENBQUMsR0FBRztBQUM1RTtBQUVBLGlFQUFlLE9BQU9DLEtBQUtDLE1BQVE7SUFDakMsSUFBSTtRQUNGLE1BQU1ULElBQUlVLHFCQUFxQixDQUFDWiw4Q0FBV0E7UUFDM0MsTUFBTUUsSUFBSVcsUUFBUTtRQUNsQixNQUFNQyxRQUFRWixJQUFJYSxhQUFhLENBQUMsRUFBRTtRQUNsQyxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNSLElBQUlTLElBQUk7UUFFaEMsTUFBTUMsY0FBY2xCLElBQUlhLGFBQWEsQ0FBQyxFQUFFO1FBQ3hDLE1BQU1LLFlBQVlDLFNBQVMsQ0FBQztRQUU1QixNQUFNQyxzQkFBc0JGLFlBQVlHLE9BQU8sQ0FBQyxHQUFHO1FBQ25ELE1BQU1DLFlBQVlKLFlBQVlHLE9BQU8sQ0FBQyxHQUFHO1FBRXpDLElBQUlFLFFBQVE7UUFDWixJQUFJQyxRQUFRO1FBRVosSUFBSUosb0JBQW9CSyxLQUFLLEtBQUssY0FBYztZQUU5Q0YsUUFBUXRCO1lBQ1J1QixRQUFRRixVQUFVRyxLQUFLO1FBQ3pCLENBQUM7UUFFRCxpQ0FBaUM7UUFDakMsTUFBTWIsTUFBTWMsTUFBTSxDQUFDO1lBQ2pCQyxNQUFNYixLQUFLYSxJQUFJO1lBQ2ZDLE9BQU9kLEtBQUtjLEtBQUs7WUFDakJDLFVBQVVmLEtBQUtlLFFBQVE7WUFDdkJDLE1BQU07WUFDTixzQkFBc0IsSUFBSS9CLHNEQUFNQSxHQUFHSyxNQUFNLENBQUM7WUFDMUNtQjtZQUNBQztRQUNGO1FBQ0FmLElBQUlzQixHQUFHLENBQUNoQixLQUFLaUIsU0FBUyxDQUFDO1lBQ3JCQyxXQUFXVixVQUFVO1lBQ3JCQTtZQUNBQztRQUNGO0lBQ0YsRUFBRSxPQUFPVSxLQUFLO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWnpCLElBQUlzQixHQUFHLENBQUM7SUFDVjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWxwaXRlLWJveC8uL3BhZ2VzL2FwaS9zYXZlLmpzPzcyYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCI7XHJcblxyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSBcIi4uLy4uL2NyZWRlbnRpYWxzLmpzb25cIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiO1xyXG5cclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KFxyXG4gIFwiMWNsUTZwQlpob3hSLXlEWWdhVTJBRk1NaUR4b0t3QnNiYVNDN3ZvVUU1cFVcIlxyXG4pO1xyXG5cclxuY29uc3QgZ2VuQ3Vwb20gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29kZSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdChcIllZTU1ERGhtbXNzU1NTXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICByZXR1cm4gY29kZS5zdWJzdHIoMCwgNCkgKyBcIi1cIiArIGNvZGUuc3Vic3RyKDQsIDQpICsgXCItXCIgKyBjb2RlLnN1YnN0cig4LCA0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKTtcclxuICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xyXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsxXTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjb25zdCBzaGVldENvbmZpZyA9IGRvYy5zaGVldHNCeUluZGV4WzJdO1xyXG4gICAgYXdhaXQgc2hlZXRDb25maWcubG9hZENlbGxzKFwiQTI6QjJcIik7XHJcblxyXG4gICAgY29uc3QgbW9zdHJhclByb21vY2FvQ2VsbCA9IHNoZWV0Q29uZmlnLmdldENlbGwoMSwgMCk7XHJcbiAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldENvbmZpZy5nZXRDZWxsKDEsIDEpO1xyXG5cclxuICAgIGxldCBDdXBvbSA9IFwiXCI7XHJcbiAgICBsZXQgUHJvbW8gPSBcIlwiO1xyXG5cclxuICAgIGlmIChtb3N0cmFyUHJvbW9jYW9DZWxsLnZhbHVlID09PSBcIlZFUkRBREVJUk9cIikge1xyXG4gICAgICBcclxuICAgICAgQ3Vwb20gPSBnZW5DdXBvbSgpO1xyXG4gICAgICBQcm9tbyA9IHRleHRvQ2VsbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL05vbWVcdEVtYWlsXHRXaGF0c2FwcFx0Q3Vwb21cdFByb21vXHJcbiAgICBhd2FpdCBzaGVldC5hZGRSb3coe1xyXG4gICAgICBOb21lOiBkYXRhLk5vbWUsXHJcbiAgICAgIEVtYWlsOiBkYXRhLkVtYWlsLFxyXG4gICAgICBXaGF0c2FwcDogZGF0YS5XaGF0c2FwcCxcclxuICAgICAgTm90YTogNSxcclxuICAgICAgXCJEYXRhIFByZWVuY2hpbWVudG9cIjogbmV3IG1vbWVudCgpLmZvcm1hdChcIkREL01NL1lZWVksIGg6bW06c3MgYVwiKSxcclxuICAgICAgQ3Vwb20sXHJcbiAgICAgIFByb21vLFxyXG4gICAgfSk7XHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgc2hvd0N1cG9uOiBDdXBvbSAhPT0gJycsXHJcbiAgICAgIEN1cG9tLFxyXG4gICAgICBQcm9tb1xyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJlcy5lbmQoXCJlcnJvclwiKTtcclxuICB9XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsiR29vZ2xlU3ByZWFkc2hlZXQiLCJjcmVkZW50aWFscyIsIm1vbWVudCIsImRvYyIsImdlbkN1cG9tIiwiY29kZSIsInBhcnNlSW50IiwiZm9ybWF0IiwidG9TdHJpbmciLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInN1YnN0ciIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzaGVldENvbmZpZyIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiQ3Vwb20iLCJQcm9tbyIsInZhbHVlIiwiYWRkUm93IiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJOb3RhIiwiZW5kIiwic3RyaW5naWZ5Iiwic2hvd0N1cG9uIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/save.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/save.js"));
module.exports = __webpack_exports__;

})();