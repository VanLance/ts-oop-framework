/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms/login_form.ts":
/*!*********************************!*\
  !*** ./src/forms/login_form.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginForm: () => (/* binding */ loginForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction loginForm() {\n    const userForm = document.createElement('form');\n    const [usernameLabel, usernameInput] = [\n        document.createElement('label'),\n        document.createElement('input'),\n    ];\n    usernameLabel.textContent = 'Username: ';\n    usernameInput.type = 'text';\n    const [passwordLabel, passwordInput] = [\n        document.createElement('label'),\n        document.createElement('input'),\n    ];\n    passwordLabel.textContent = 'Password: ';\n    passwordInput.type = 'password';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Login';\n    userForm.append(usernameLabel, document.createElement('br'), usernameInput, document.createElement('br'), passwordLabel, document.createElement('br'), passwordInput, document.createElement('br'), submitButton);\n    userForm.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {\n        e.preventDefault();\n        const user = {\n            username: usernameInput.value,\n            password: passwordInput.value,\n        };\n        console.table(user);\n        yield handleUserData(user);\n    }));\n    return userForm;\n}\nfunction handleUserData({ username, password }) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const res = yield fetch('http://127.0.0.1:5000/api/sign-in', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                username,\n                password,\n            }),\n        });\n        if (res.ok) {\n            const data = yield res.json();\n            console.log(data, 'from api call');\n            return data;\n        }\n        else\n            window.alert('Invalid login ');\n    });\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/forms/login_form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms_login_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/login_form */ \"./src/forms/login_form.ts\");\n\nconsole.log(\"Matrix Webpack\");\nconst userForm = (0,_forms_login_form__WEBPACK_IMPORTED_MODULE_0__.loginForm)();\ndocument.body.appendChild(userForm);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;