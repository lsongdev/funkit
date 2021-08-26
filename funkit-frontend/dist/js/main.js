(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["App"] = factory(require("React"), require("ReactDOM"));
	else
		root["App"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-loadable/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-loadable/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/react-loadable/lib/index.js'\");\n\n//# sourceURL=webpack://App/./node_modules/react-loadable/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/react-router-dom/esm/react-router-dom.js'\");\n\n//# sourceURL=webpack://App/./node_modules/react-router-dom/esm/react-router-dom.js?");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar Header = function (_a) {\n    var title = _a.title, links = _a.links;\n    return (react_1.default.createElement(\"header\", { className: \"header\" },\n        react_1.default.createElement(\"h1\", null, title),\n        react_1.default.createElement(\"nav\", { className: \"nav nav-bar\" }, links.map(function (link, i) { return react_1.default.createElement(react_router_dom_1.Link, { key: i, to: link.href }, link.text); }))));\n};\nexports.default = Header;\n\n\n//# sourceURL=webpack://App/./src/components/Header/index.tsx?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleError: Module Error (from ./node_modules/resolve-url-loader/index.js):\\nresolve-url-loader: loader misconfiguration\\n  \\\"engine\\\" option is not valid\\n    at Object.emitError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/webpack/lib/NormalModule.js:173:6)\\n    at handleAsError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:214:12)\\n    at Object.resolveUrlLoader (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:156:12)\");\n\n//# sourceURL=webpack://App/./src/main.css?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nvar react_loadable_1 = __importDefault(__webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\"));\nvar Header_1 = __importDefault(__webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.tsx\"));\n__webpack_require__(/*! ./main.css */ \"./src/main.css\");\nvar loading = function () { return react_1.default.createElement(\"div\", null); };\nvar routes = [\n    {\n        path: \"/\",\n        exact: true,\n        component: react_loadable_1.default({\n            loading: loading,\n            loader: function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./pages/index */ \"./src/pages/index/index.tsx\")); }); }\n        })\n    },\n    {\n        path: \"/new\",\n        component: react_loadable_1.default({\n            loading: loading,\n            loader: function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./pages/edit */ \"./src/pages/edit/index.tsx\")); }); }\n        })\n    },\n    {\n        path: \"/workers\",\n        exact: true,\n        component: react_loadable_1.default({\n            loading: loading,\n            loader: function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./pages/workers */ \"./src/pages/workers/index.tsx\")); }); }\n        })\n    },\n    {\n        path: \"/worker/:id\",\n        component: react_loadable_1.default({\n            loading: loading,\n            loader: function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./pages/edit */ \"./src/pages/edit/index.tsx\")); }); }\n        })\n    }\n];\nvar RouteWithSubRoutes = function (route) { return (react_1.default.createElement(react_router_dom_1.Route, { exact: route.exact, path: route.path, render: function (props) { return (react_1.default.createElement(route.component, __assign({}, props, { routes: route.routes }))); } })); };\nvar links = [\n    { text: 'Home', href: \"/\" },\n    { text: 'Rules', href: \"/\" },\n    { text: 'Workers', href: \"/workers\" },\n    { text: 'Help', href: \"/help\" },\n];\nvar App = function () {\n    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,\n        react_1.default.createElement(Header_1.default, { title: \"FunKit\", links: links }),\n        react_1.default.createElement(\"div\", { className: \"content\" }, routes.map(function (route, i) { return react_1.default.createElement(RouteWithSubRoutes, __assign({ key: i }, route)); }))));\n};\nreact_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('app'));\n\n\n//# sourceURL=webpack://App/./src/main.tsx?");

/***/ }),

/***/ "./src/pages/edit/index.css":
/*!**********************************!*\
  !*** ./src/pages/edit/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleError: Module Error (from ./node_modules/resolve-url-loader/index.js):\\nresolve-url-loader: loader misconfiguration\\n  \\\"engine\\\" option is not valid\\n    at Object.emitError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/webpack/lib/NormalModule.js:173:6)\\n    at handleAsError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:214:12)\\n    at Object.resolveUrlLoader (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:156:12)\");\n\n//# sourceURL=webpack://App/./src/pages/edit/index.css?");

/***/ }),

/***/ "./src/pages/edit/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/edit/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.randomId = exports.rand = exports.sample = exports.shuffle = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.css */ \"./src/pages/edit/index.css\");\n// copy from https://github.com/song940/scripts/blob/master/array.js#shuffle\nexports.shuffle = function (arr) {\n    return arr.sort(function () { return Math.random() - .5; });\n};\n// copy from https://github.com/song940/scripts/blob/master/array.js#sample\nexports.sample = function (arr, k) {\n    if (k === void 0) { k = 1; }\n    return exports.shuffle(arr).slice(0, k);\n};\nexports.rand = function (max, min) {\n    if (min === void 0) { min = 0; }\n    return Math.floor(Math.random() * (max - min) + min);\n};\nexports.randomId = function (len, str) {\n    if (len === void 0) { len = 8; }\n    if (str === void 0) { str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; }\n    var result = '';\n    var chars = str.split('');\n    while (result.length < len) {\n        var i = exports.rand(chars.length - 1);\n        result += chars[i];\n    }\n    return result;\n};\nvar generateName = function () {\n    var adjs = [\n        'red',\n        'blue',\n        'green',\n        'black',\n    ];\n    var names = [\n        'dog',\n        'cat',\n        'pig',\n        'owl',\n        'ant',\n        'bird',\n    ];\n    var adj = exports.sample(adjs);\n    var name = exports.sample(names);\n    var id = exports.randomId(5);\n    return adj + \"-\" + name + \"-\" + id;\n};\nvar Edit = function (_a) {\n    var match = _a.match, history = _a.history;\n    var params = match.params;\n    var id = params.id;\n    var _b = react_1.useState(generateName()), name = _b[0], setName = _b[1];\n    var _c = react_1.useState(), code = _c[0], setCode = _c[1];\n    var _d = react_1.useState(), route = _d[0], setRoute = _d[1];\n    var _e = react_1.useState([]), rules = _e[0], setRules = _e[1];\n    var fetchData = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n        var response, _a, worker, rules;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, fetch(\"https://api.lsong.me/funkit/workers/\" + id)];\n                case 1:\n                    response = _b.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    _a = _b.sent(), worker = _a.worker, rules = _a.rules;\n                    setName(worker.name);\n                    setCode(worker.code);\n                    setRules(rules);\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    react_1.useEffect(function () {\n        id && fetchData(id);\n    }, []);\n    var changeName = function (e) {\n        var value = e.target.value;\n        setName(value);\n    };\n    var changeCode = function (e) {\n        var value = e.target.value;\n        setCode(value);\n    };\n    var deploy = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var worker, response, body, success;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    worker = { id: id, name: name, code: code };\n                    console.log('deploy', worker);\n                    return [4 /*yield*/, fetch(\"https://api.lsong.me/funkit/workers\", {\n                            method: 'post',\n                            headers: {\n                                'Content-Type': 'application/json'\n                            },\n                            body: JSON.stringify(worker)\n                        })];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    body = _a.sent();\n                    success = body.success;\n                    success && history.push(\"/worker/\" + body.id);\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    var changeRoute = function (e) {\n        var value = e.target.value;\n        setRoute(value);\n    };\n    var addRoute = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var response, success;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(\"https://api.lsong.me/funkit/rules\", {\n                        method: 'post',\n                        headers: {\n                            'Content-Type': 'application/json'\n                        },\n                        body: JSON.stringify({ id: id, route: route })\n                    })];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    success = (_a.sent()).success;\n                    success && fetchData(id);\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"header\", null,\n            react_1.default.createElement(\"input\", { className: \"title\", type: \"text\", value: name, onChange: changeName }),\n            react_1.default.createElement(\"button\", { className: \"button button-primary\", onClick: deploy }, \"deploy\")),\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"textarea\", { defaultValue: code, rows: 20, onChange: changeCode })),\n        id && (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"h3\", null, \"Routes\"),\n            react_1.default.createElement(\"div\", { className: \"flex flex-align-center form\" },\n                react_1.default.createElement(\"input\", { className: \"input\", required: true, type: \"text\", onChange: changeRoute }),\n                react_1.default.createElement(\"button\", { className: \"button button-primary\", onClick: addRoute }, \"Add\")),\n            react_1.default.createElement(\"ul\", null, rules.map(function (rule, i) { return (react_1.default.createElement(\"li\", { key: i }, rule.route)); }))))));\n};\nexports.default = Edit;\n\n\n//# sourceURL=webpack://App/./src/pages/edit/index.tsx?");

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleError: Module Error (from ./node_modules/resolve-url-loader/index.js):\\nresolve-url-loader: loader misconfiguration\\n  \\\"engine\\\" option is not valid\\n    at Object.emitError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/webpack/lib/NormalModule.js:173:6)\\n    at handleAsError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:214:12)\\n    at Object.resolveUrlLoader (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:156:12)\");\n\n//# sourceURL=webpack://App/./src/pages/index/index.css?");

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n__webpack_require__(/*! ./index.css */ \"./src/pages/index/index.css\");\nvar ListItem = function (_a) {\n    var data = _a.data;\n    var _id = data._id, route = data.route, name = data.name, workerId = data.workerId;\n    return (react_1.default.createElement(react_router_dom_1.Link, { className: \"worker-item\", to: \"/worker/\" + workerId },\n        react_1.default.createElement(\"span\", null, route),\n        react_1.default.createElement(\"span\", null, \"=>\"),\n        react_1.default.createElement(\"span\", null, name)));\n};\nvar List = function (_a) {\n    var data = _a.data;\n    return (react_1.default.createElement(\"ul\", { className: \"worker-list\" }, data.map(function (item, i) { return react_1.default.createElement(ListItem, { key: i, data: item }); })));\n};\nvar Index = function () {\n    var _a = react_1.useState([]), rules = _a[0], setRules = _a[1];\n    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var response, body;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(\"https://api.lsong.me/funkit/rules\")];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    body = _a.sent();\n                    setRules(body.rules);\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    react_1.useEffect(function () {\n        fetchData();\n    }, []);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"header\", { className: \"flex\" },\n            react_1.default.createElement(\"h2\", null, \"Rules\"),\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"/new\" },\n                react_1.default.createElement(\"button\", { className: \"button button-primary\" }, \"new\"))),\n        react_1.default.createElement(List, { data: rules })));\n};\nexports.default = Index;\n\n\n//# sourceURL=webpack://App/./src/pages/index/index.tsx?");

/***/ }),

/***/ "./src/pages/workers/index.css":
/*!*************************************!*\
  !*** ./src/pages/workers/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleError: Module Error (from ./node_modules/resolve-url-loader/index.js):\\nresolve-url-loader: loader misconfiguration\\n  \\\"engine\\\" option is not valid\\n    at Object.emitError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/webpack/lib/NormalModule.js:173:6)\\n    at handleAsError (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:214:12)\\n    at Object.resolveUrlLoader (/Users/Lsong/Projects/funkit/funkit-frontend/node_modules/resolve-url-loader/index.js:156:12)\");\n\n//# sourceURL=webpack://App/./src/pages/workers/index.css?");

/***/ }),

/***/ "./src/pages/workers/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/workers/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n__webpack_require__(/*! ./index.css */ \"./src/pages/workers/index.css\");\nvar ListItem = function (_a) {\n    var data = _a.data;\n    var _id = data._id, name = data.name;\n    return (react_1.default.createElement(react_router_dom_1.Link, { className: \"worker-item\", to: \"/worker/\" + _id },\n        react_1.default.createElement(\"span\", null, name),\n        react_1.default.createElement(\"span\", null, _id)));\n};\nvar List = function (_a) {\n    var data = _a.data;\n    return (react_1.default.createElement(\"ul\", { className: \"worker-list\" }, data.map(function (item, i) { return react_1.default.createElement(ListItem, { key: i, data: item }); })));\n};\nvar Index = function () {\n    var _a = react_1.useState([]), workers = _a[0], setWorkers = _a[1];\n    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {\n        var response, body;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(\"https://api.lsong.me/funkit/workers\", {})];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    body = _a.sent();\n                    setWorkers(body.workers);\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n    react_1.useEffect(function () {\n        fetchData();\n    }, []);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"header\", { className: \"\" },\n            react_1.default.createElement(\"h2\", null, \"Workers\"),\n            react_1.default.createElement(react_router_dom_1.Link, { to: \"/new\" },\n                react_1.default.createElement(\"button\", { className: \"button button-primary\" }, \"new\"))),\n        react_1.default.createElement(List, { data: workers })));\n};\nexports.default = Index;\n\n\n//# sourceURL=webpack://App/./src/pages/workers/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://App/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://App/external_%22ReactDOM%22?");

/***/ })

/******/ });
});