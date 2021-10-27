"use strict";
self["webpackHotUpdategeometric_figma"]("ui",{

/***/ "./src/ui.tsx":
/*!********************!*\
  !*** ./src/ui.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_figma_plugin_ds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-figma-plugin-ds */ "./node_modules/react-figma-plugin-ds/dist/index.js");
/* harmony import */ var react_figma_plugin_ds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_figma_plugin_ds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");




class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.countRef = (element) => {
            if (element)
                element.value = '5';
            this.textbox = element;
        };
        this.onCreate = () => {
            const count = parseInt(this.textbox.value, 10);
            parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
        };
        this.onCancel = () => {
            parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
        };
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_figma_plugin_ds__WEBPACK_IMPORTED_MODULE_2__.Label, { text: "Hello" }, "My plugin 5"));
    }
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('react-page'));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2de70ac32b18a8373020")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuZjI5MDM3NTE1MzVjMDIwYTFhNGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNRO0FBQzVCO0FBQ2xCLGtCQUFrQiw0Q0FBZTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCLG9DQUFvQztBQUN0RjtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQixrQkFBa0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBbUI7QUFDbEMsWUFBWSxnREFBbUIsQ0FBQyx3REFBSyxJQUFJLGVBQWU7QUFDeEQ7QUFDQTtBQUNBLDZDQUFlLENBQUMsZ0RBQW1COzs7Ozs7Ozs7VUN6Qm5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VvbWV0cmljLWZpZ21hLy4vc3JjL3VpLnRzeCIsIndlYnBhY2s6Ly9nZW9tZXRyaWMtZmlnbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3JlYWN0LWZpZ21hLXBsdWdpbi1kcyc7XG5pbXBvcnQgJy4vdWkuY3NzJztcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY291bnRSZWYgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICc1JztcbiAgICAgICAgICAgIHRoaXMudGV4dGJveCA9IGVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KHRoaXMudGV4dGJveC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnY3JlYXRlLXJlY3RhbmdsZXMnLCBjb3VudCB9IH0sICcqJyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdjYW5jZWwnIH0gfSwgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyB0ZXh0OiBcIkhlbGxvXCIgfSwgXCJNeSBwbHVnaW4gNVwiKSk7XG4gICAgfVxufVxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXBhZ2UnKSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZGU3MGFjMzJiMThhODM3MzAyMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==