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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginForm: () => (/* binding */ loginForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction loginForm() {\n    const userForm = document.createElement('form');\n    const [usernameLabel, usernameInput] = [\n        document.createElement('label'),\n        document.createElement('input'),\n    ];\n    usernameLabel.textContent = 'Username: ';\n    usernameInput.type = 'text';\n    const [passwordLabel, passwordInput] = [\n        document.createElement('label'),\n        document.createElement('input'),\n    ];\n    passwordLabel.textContent = 'Password: ';\n    passwordInput.type = 'password';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Login';\n    userForm.append(usernameLabel, document.createElement('br'), usernameInput, document.createElement('br'), passwordLabel, document.createElement('br'), passwordInput, document.createElement('br'), submitButton);\n    userForm.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {\n        e.preventDefault();\n        const user = {\n            username: usernameInput.value,\n            password: passwordInput.value,\n        };\n        console.table(user);\n        yield handleUserData(user);\n    }));\n    return userForm;\n}\nfunction handleUserData({ username, password }) {\n    return __awaiter(this, void 0, void 0, function* () {\n        console.log('in handle data');\n        const res = yield fetch('https://matrix-fakebook-123.onrender.com/api/sign-in', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                username,\n                password,\n            }),\n        });\n        if (res.ok) {\n            const data = yield res.json();\n            console.log(data, 'from api call');\n            return data;\n        }\n        else\n            window.alert('Invalid login ');\n    });\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/forms/login_form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/index */ \"./src/widgets/index.ts\");\n/* harmony import */ var _forms_login_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/login_form */ \"./src/forms/login_form.ts\");\n\n\nconsole.log(\"Matrix Webpack\");\nconst canvas = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.Canvas(document.body);\nconst component = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.Component(canvas);\nconst circleContainer = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.CircleContainer();\ncircleContainer.backgroundColor = 'white';\ncomponent.container = circleContainer;\ncomponent.content.innerHTML = `<img style=\"object-fit: cover\" width=\"80%\" height= \"auto\"src=\"./static/images/matrix.jpg\" alt=\"matrix-log\">`;\ncanvas.addWidget(component);\nconst leftLeaningContainer = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.LeftLeaningContainer();\nconst rightLeaningContainer = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.RightLeaningContainer();\nconst formComponent = new _widgets_index__WEBPACK_IMPORTED_MODULE_0__.Component(canvas);\nformComponent.container = rightLeaningContainer;\nformComponent.locationTop = 5;\nformComponent.height = 4;\nformComponent.width = 4;\nconst userForm = (0,_forms_login_form__WEBPACK_IMPORTED_MODULE_1__.loginForm)();\nformComponent.content = userForm;\ncanvas.addWidget(formComponent);\nconsole.log(canvas, leftLeaningContainer, rightLeaningContainer, circleContainer, component);\nconsole.log(userForm);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.ts?");

/***/ }),

/***/ "./src/widgets/Canvas.ts":
/*!*******************************!*\
  !*** ./src/widgets/Canvas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n    constructor(parent) {\n        this.parent = parent;\n        this._widgets = [];\n        this.parent.innerHTML = '';\n        this.parent.id = 'canvas';\n        const newStyle = {\n            display: 'grid',\n            gridTemplateColumns: 'repeat(12, 1fr)',\n            gridTemplateRows: 'repeat(12, 1fr)',\n            gridGap: '5px',\n            height: '100vh',\n            aspectRatio: '1/1',\n            margin: '5px auto',\n            border: '2px solid hotpink',\n        };\n        Object.assign(this.parent.style, newStyle);\n    }\n    addWidget(widget) {\n        this._widgets.push(widget);\n        // widget.canvas = this\n        this.buildWidget(widget);\n    }\n    buildWidget(widget) {\n        const div = this.initializeDiv(widget);\n        this.buildShape(widget, div);\n        div.appendChild(widget.content);\n        this.placeShape(widget, div);\n        this.parent.append(div);\n    }\n    initializeDiv(widget) {\n        const div = document.createElement('div');\n        div.id = widget.id.toString();\n        const styles = {\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            alignContent: 'center',\n            justifyContent: 'center',\n            margin: 'center',\n            width: '100%',\n            height: '100%',\n            padding: '3%',\n            aspectRatio: '1/1',\n        };\n        Object.assign(div.style, styles);\n        return div;\n    }\n    buildShape(widget, div) {\n        Object.assign(div.style, widget.container.attributes);\n    }\n    placeShape(widget, div) {\n        const styles = {\n            gridColumnStart: widget.locationLeft.toString(),\n            gridRowStart: widget.locationTop.toString(),\n            gridColumnEnd: `span ${widget.width}`,\n            gridRowEnd: `span ${widget.height}`\n        };\n        Object.assign(div.style, styles);\n    }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/widgets/Canvas.ts?");

/***/ }),

/***/ "./src/widgets/Component.ts":
/*!**********************************!*\
  !*** ./src/widgets/Component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ \"./src/widgets/containers.ts\");\n\nclass Component {\n    get content() {\n        return this._content;\n    }\n    set content(value) {\n        this._content = value;\n    }\n    get canvas() {\n        return this._canvas;\n    }\n    set canvas(value) {\n        this._canvas = value;\n    }\n    get locationLeft() {\n        return this._locationLeft;\n    }\n    set locationLeft(value) {\n        this._locationLeft = value;\n    }\n    get locationTop() {\n        return this._locationTop;\n    }\n    set locationTop(value) {\n        this._locationTop = value;\n    }\n    get width() {\n        return this._width;\n    }\n    set width(value) {\n        this._width = value;\n    }\n    get height() {\n        return this._height;\n    }\n    set height(value) {\n        this._height = value;\n    }\n    get container() {\n        return this._container;\n    }\n    set container(value) {\n        this._container = value;\n    }\n    get id() {\n        return this._id;\n    }\n    set id(value) {\n        this._id = value;\n    }\n    constructor(_canvas, _id = Component._id++, _container = new _containers__WEBPACK_IMPORTED_MODULE_0__.LeftLeaningContainer(), _height = 2, _width = 2, _locationTop = 1, _locationLeft = 1, _content = document.createElement('div')) {\n        this._canvas = _canvas;\n        this._id = _id;\n        this._container = _container;\n        this._height = _height;\n        this._width = _width;\n        this._locationTop = _locationTop;\n        this._locationLeft = _locationLeft;\n        this._content = _content;\n    }\n}\nComponent._id = 1;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n\n\n//# sourceURL=webpack://webpack-demo/./src/widgets/Component.ts?");

/***/ }),

/***/ "./src/widgets/Container.ts":
/*!**********************************!*\
  !*** ./src/widgets/Container.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Container)\n/* harmony export */ });\nclass Container {\n    get color() {\n        return this._color;\n    }\n    set color(value) {\n        this._color = value;\n    }\n    get zIndex() {\n        return this._zIndex;\n    }\n    set zIndex(value) {\n        this._zIndex = value;\n    }\n    get borderWidth() {\n        return this._borderWidth;\n    }\n    set borderWidth(value) {\n        if (parseInt(value.substring(0, 3)) < 10) {\n            this._borderWidth = value;\n        }\n    }\n    get borderStyle() {\n        return this._borderStyle;\n    }\n    set borderStyle(value) {\n        this._borderStyle = value;\n    }\n    get borderRadius() {\n        return this._borderRadius;\n    }\n    set borderRadius(value) {\n        this._borderRadius = value;\n    }\n    get borderColor() {\n        return this._borderColor;\n    }\n    set borderColor(value) {\n        this._borderColor = value;\n    }\n    get backgroundColor() {\n        return this._backgroundColor;\n    }\n    set backgroundColor(value) {\n        this._backgroundColor = value;\n    }\n    get attributes() {\n        return {\n            backgroundColor: this.backgroundColor,\n            color: this.color,\n            borderColor: this.borderColor,\n            borderRadius: this.borderRadius,\n            borderStyle: this.borderStyle,\n            borderWidth: this.borderWidth,\n            zIndex: this.zIndex,\n        };\n    }\n    constructor(_backgroundColor = 'black', _color = 'white', _borderColor = 'white', _borderRadius = '0px', _borderStyle = 'solid', _borderWidth = '2px', _zIndex = 0) {\n        this._backgroundColor = _backgroundColor;\n        this._color = _color;\n        this._borderColor = _borderColor;\n        this._borderRadius = _borderRadius;\n        this._borderStyle = _borderStyle;\n        this._borderWidth = _borderWidth;\n        this._zIndex = _zIndex;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/widgets/Container.ts?");

/***/ }),

/***/ "./src/widgets/containers.ts":
/*!***********************************!*\
  !*** ./src/widgets/containers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CircleContainer: () => (/* binding */ CircleContainer),\n/* harmony export */   LeftLeaningContainer: () => (/* binding */ LeftLeaningContainer),\n/* harmony export */   RightLeaningContainer: () => (/* binding */ RightLeaningContainer)\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./src/widgets/Container.ts\");\n\nclass LeftLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = \"10% 25%\";\n    }\n}\nclass RightLeaningContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = \"25% 10%\";\n    }\n}\nclass CircleContainer extends _Container__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.borderRadius = \"50%\";\n    }\n}\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/widgets/containers.ts?");

/***/ }),

/***/ "./src/widgets/index.ts":
/*!******************************!*\
  !*** ./src/widgets/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Canvas: () => (/* reexport safe */ _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   CircleContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_1__.CircleContainer),\n/* harmony export */   Component: () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   LeftLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_1__.LeftLeaningContainer),\n/* harmony export */   RightLeaningContainer: () => (/* reexport safe */ _containers__WEBPACK_IMPORTED_MODULE_1__.RightLeaningContainer)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/widgets/Canvas.ts\");\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ \"./src/widgets/containers.ts\");\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ \"./src/widgets/Component.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/widgets/index.ts?");

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