(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  [ngStyle]=\"{'grid-template-columns': 'repeat(' + board.size + ',100px', 'grid-template-rows': 'repeat(' + board.size + ',100px'}\"\r\n  class=\"board\">\r\n\r\n  <mat-card (click)=\"shoot(field)\" *ngFor=\"let field of board.fields\" [class.isShipShot]=\"field.isShot && field.hasShip\"\r\n            [class.isShot]=\"field.isShot\" class=\"myCard\"></mat-card>\r\n\r\n</div>\r\n\r\n<div class=\"stats\">\r\n  <mat-list>\r\n    Stats:\r\n    <mat-list-item>Shots fired = {{board.shoots}}</mat-list-item>\r\n    <mat-list-item>Shots missed = {{board.missed}}</mat-list-item>\r\n  </mat-list>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav [attr.role]=\"'navigation'\" [mode]=\"'side'\"\r\n               [opened]=\"true\"\r\n               class=\"sidenav\"\r\n               fixedInViewport>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/board\">\r\n        <mat-icon>play_circle_filled</mat-icon>\r\n      </a>\r\n      <a class=\"settings\" mat-list-item routerLink=\"/\">\r\n        <mat-icon>settings_applications</mat-icon>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <span>{{title | titlecase}}</span>\r\n    </mat-toolbar>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"settingsForm\" class=\"settings-form\" novalidate>\r\n\r\n  <mat-form-field class=\"settings-row\">\r\n    <input formControlName=\"size\" matInput max=\"50\" min=\"0\" placeholder=\"Map size\" type=\"number\"/>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"settings-row\">\r\n    <input formControlName=\"shipNum\" matInput max=\"50\" min=\"0\" placeholder=\"Number of ships with 1 mast\"\r\n           type=\"number\"/>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"settings-row\">\r\n    <input formControlName=\"shipNum2\" matInput max=\"50\" min=\"0\" placeholder=\"Number of ships with 2 mast\"\r\n           type=\"number\"/>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"settings-row\">\r\n    <input formControlName=\"shipNum3\" matInput max=\"50\" min=\"0\" placeholder=\"Number of ships with 3 mast\"\r\n           type=\"number\"/>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"settings-row\">\r\n    <input formControlName=\"shipNum4\" matInput max=\"50\" min=\"0\" placeholder=\"Number of ships with 4 mast\"\r\n           type=\"number\"/>\r\n  </mat-form-field>\r\n\r\n  <div>\r\n    <mat-checkbox disabled formControlName=\"autoDeployment\" labelPosition=\"before\">Automatic deployment?</mat-checkbox>\r\n  </div>\r\n\r\n  <div>\r\n    <button mat-icon-button type=\"submit\">\r\n      <mat-icon>save</mat-icon>\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_enums/ship-type.enum.ts":
/*!******************************************!*\
  !*** ./src/app/_enums/ship-type.enum.ts ***!
  \******************************************/
/*! exports provided: ShipType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipType", function() { return ShipType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ShipType;
(function (ShipType) {
    ShipType[ShipType["OneMast"] = 1] = "OneMast";
    ShipType[ShipType["TwoMast"] = 2] = "TwoMast";
    ShipType[ShipType["ThreeMast"] = 3] = "ThreeMast";
    ShipType[ShipType["FourMast"] = 4] = "FourMast";
})(ShipType || (ShipType = {}));


/***/ }),

/***/ "./src/app/_models/board.ts":
/*!**********************************!*\
  !*** ./src/app/_models/board.ts ***!
  \**********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/app/_models/settings.ts");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "./src/app/_models/field.ts");



var Board = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Board, _super);
    function Board(settings) {
        var _this = _super.call(this) || this;
        _this._autoDeploy = settings.autoDeploy;
        _this._oneMastShips = settings.oneMastShips;
        _this._twoMastShips = settings.twoMastShips;
        _this._threeMastShips = settings.threeMastShips;
        _this._fourMastShips = settings.fourMastShips;
        _this._size = settings.size;
        _this._shoots = 0;
        _this._missed = 0;
        _this._liveShips = _this._oneMastShips + _this._twoMastShips + _this._threeMastShips + _this._fourMastShips;
        _this._fields = [];
        _this.generateFields();
        return _this;
    }
    Object.defineProperty(Board.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (value) {
            this._fields = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "shoots", {
        get: function () {
            return this._shoots;
        },
        set: function (value) {
            this._shoots = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "missed", {
        get: function () {
            return this._missed;
        },
        set: function (value) {
            this._missed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "liveShips", {
        get: function () {
            return this._liveShips;
        },
        set: function (value) {
            this._liveShips = value;
        },
        enumerable: true,
        configurable: true
    });
    /*private cardByshipId : Map<number,Array<string>> | null;
  
    set setMapCardByShip (assignData : any )
    {
      if (assignData == null)
      {
        return;
      }
  
      if (this.cardByshipId == null)
      {
        return;
      }
  
      let shipId = assignData.shipId;
      let cardClass = assignData.cardClass;
  
      if( this.cardByshipId.size == 0)
      {
        this.cardByshipId.set(shipId, new Array<string>(cardClass));
      }
      else if( this.cardByshipId.size > 0)
      {
          let cardArray = this.cardByshipId.get(shipId);
          if(cardArray != null )
          {
            cardArray.push(cardClass);
          }
      }
    }
  
    get getCardByShipId () : Map<number,string[]> | null
    {
      return this.cardByshipId;
    }*/
    /*countMaxShipNum() {
      this._maxShipNum = (this._size * this._size) - (this._oneMastShips * 8 - this._twoMastShips * 10 - this._threeMastShips * 12 - this._fourMastShips * 14);
    }*/
    Board.prototype.generateFields = function () {
        for (var i = 0; i < this._size; i++) {
            for (var j = 0; j < this._size; j++) {
                var field = new _field__WEBPACK_IMPORTED_MODULE_2__["Field"](j, i);
                this._fields.push(field);
            }
        }
    };
    return Board;
}(_settings__WEBPACK_IMPORTED_MODULE_1__["Settings"]));



/***/ }),

/***/ "./src/app/_models/field.ts":
/*!**********************************!*\
  !*** ./src/app/_models/field.ts ***!
  \**********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Field = /** @class */ (function () {
    function Field(x, y) {
        this._shipId = null;
        this._x = x;
        this._y = y;
        this._isShot = false;
        this._hasShip = false;
    }
    Object.defineProperty(Field.prototype, "shipId", {
        get: function () {
            return this._shipId;
        },
        set: function (value) {
            this._shipId = value;
            this._hasShip = (this._shipId !== null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isShot", {
        get: function () {
            return this._isShot;
        },
        set: function (value) {
            this._isShot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "hasShip", {
        get: function () {
            return this._hasShip;
        },
        set: function (value) {
            this._hasShip = value;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());



/***/ }),

/***/ "./src/app/_models/four-mast-ship.ts":
/*!*******************************************!*\
  !*** ./src/app/_models/four-mast-ship.ts ***!
  \*******************************************/
/*! exports provided: FourMastShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourMastShip", function() { return FourMastShip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_enums/ship-type.enum */ "./src/app/_enums/ship-type.enum.ts");


var FourMastShip = /** @class */ (function () {
    function FourMastShip(id) {
        this.shipType = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].FourMast;
        this.hp = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].FourMast;
        this.id = id;
    }
    FourMastShip.prototype.hit = function () {
        this.hp > 0 ? this.hp-- : this.hp = 0;
    };
    return FourMastShip;
}());



/***/ }),

/***/ "./src/app/_models/one-mast-ship.ts":
/*!******************************************!*\
  !*** ./src/app/_models/one-mast-ship.ts ***!
  \******************************************/
/*! exports provided: OneMastShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneMastShip", function() { return OneMastShip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_enums/ship-type.enum */ "./src/app/_enums/ship-type.enum.ts");


var OneMastShip = /** @class */ (function () {
    function OneMastShip(id) {
        this.shipType = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].OneMast;
        this.hp = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].OneMast;
        this.id = id;
    }
    OneMastShip.prototype.hit = function () {
        this.hp > 0 ? this.hp-- : this.hp = 0;
    };
    return OneMastShip;
}());



/***/ }),

/***/ "./src/app/_models/settings.ts":
/*!*************************************!*\
  !*** ./src/app/_models/settings.ts ***!
  \*************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Settings = /** @class */ (function () {
    function Settings() {
        this._size = 0;
        this._autoDeploy = false;
        this._oneMastShips = 0;
        this._twoMastShips = 0;
        this._threeMastShips = 0;
        this._fourMastShips = 0;
    }
    Object.defineProperty(Settings.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "autoDeploy", {
        get: function () {
            return this._autoDeploy;
        },
        set: function (value) {
            this._autoDeploy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "oneMastShips", {
        get: function () {
            return this._oneMastShips;
        },
        set: function (value) {
            this._oneMastShips = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "twoMastShips", {
        get: function () {
            return this._twoMastShips;
        },
        set: function (value) {
            this._twoMastShips = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "threeMastShips", {
        get: function () {
            return this._threeMastShips;
        },
        set: function (value) {
            this._threeMastShips = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "fourMastShips", {
        get: function () {
            return this._fourMastShips;
        },
        set: function (value) {
            this._fourMastShips = value;
        },
        enumerable: true,
        configurable: true
    });
    Settings.prototype.loadFromStorage = function (data) {
        this._size = data._size;
        this._autoDeploy = data._autoDeploy;
        this._oneMastShips = data._oneMastShips;
        this._twoMastShips = data._twoMastShips;
        this._threeMastShips = data._threeMastShips;
        this._fourMastShips = data._fourMastShips;
    };
    return Settings;
}());



/***/ }),

/***/ "./src/app/_models/three-mast-ship.ts":
/*!********************************************!*\
  !*** ./src/app/_models/three-mast-ship.ts ***!
  \********************************************/
/*! exports provided: ThreeMastShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeMastShip", function() { return ThreeMastShip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_enums/ship-type.enum */ "./src/app/_enums/ship-type.enum.ts");


var ThreeMastShip = /** @class */ (function () {
    function ThreeMastShip(id) {
        this.shipType = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].ThreeMast;
        this.hp = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].ThreeMast;
        this.id = id;
    }
    ThreeMastShip.prototype.hit = function () {
        this.hp > 0 ? this.hp-- : this.hp = 0;
    };
    return ThreeMastShip;
}());



/***/ }),

/***/ "./src/app/_models/two-mast-ship.ts":
/*!******************************************!*\
  !*** ./src/app/_models/two-mast-ship.ts ***!
  \******************************************/
/*! exports provided: TwoMastShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoMastShip", function() { return TwoMastShip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_enums/ship-type.enum */ "./src/app/_enums/ship-type.enum.ts");


var TwoMastShip = /** @class */ (function () {
    function TwoMastShip(id) {
        this.shipType = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].TwoMast;
        this.hp = _enums_ship_type_enum__WEBPACK_IMPORTED_MODULE_1__["ShipType"].TwoMast;
        this.id = id;
    }
    TwoMastShip.prototype.hit = function () {
        this.hp > 0 ? this.hp-- : this.hp = 0;
    };
    return TwoMastShip;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");





var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Application-wide Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[type=text], button {\n  color: #333;\n  font-family: Cambria, Georgia;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxoZXJvZVxcRG9jdW1lbnRzXFxTdGF0a2kvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0FDRUY7QURBQTtFQUNFLFdBQUE7QUNHRjtBRERBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDSUY7QURGQSxvQkFBQTtBQUNBO0VBQ0UseUNBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcGxpY2F0aW9uLXdpZGUgU3R5bGVzICovXHJcbmgxIHtcclxuICBjb2xvcjogIzM2OTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuaDIsIGgzIHtcclxuICBjb2xvcjogIzQ0NDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5ib2R5LCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuIiwiLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cbmgxIHtcbiAgY29sb3I6ICMzNjk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1MCU7XG59XG5cbmgyLCBoMyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDJlbTtcbn1cblxuYm9keSwgaW5wdXRbdHlwZT10ZXh0XSwgYnV0dG9uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cbioge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 2500 } }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.scss":
/*!********************************************!*\
  !*** ./src/app/board/board.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  display: grid;\n  grid-template-columns: repeat(10, 100px);\n  grid-template-rows: repeat(10, 100px);\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.board .myCard {\n  border: 1px solid white;\n}\n.board .isShot {\n  background-color: lightgray;\n}\n.board .isShipShot {\n  background-color: red;\n}\n.stats {\n  position: fixed;\n  top: 10%;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvQzpcXFVzZXJzXFxoZXJvZVxcRG9jdW1lbnRzXFxTdGF0a2kvc3JjXFxhcHBcXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKO0FERUU7RUFDRSwyQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FETUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMDBweCk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEwMHB4KTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgLm15Q2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5pc1Nob3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgLmlzU2hpcFNob3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiIsIi5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxMDBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxMDBweCk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5ib2FyZCAubXlDYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4uYm9hcmQgLmlzU2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5ib2FyZCAuaXNTaGlwU2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnN0YXRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/board */ "./src/app/_models/board.ts");
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/settings */ "./src/app/_models/settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_one_mast_ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/one-mast-ship */ "./src/app/_models/one-mast-ship.ts");
/* harmony import */ var _models_two_mast_ship__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_models/two-mast-ship */ "./src/app/_models/two-mast-ship.ts");
/* harmony import */ var _models_three_mast_ship__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_models/three-mast-ship */ "./src/app/_models/three-mast-ship.ts");
/* harmony import */ var _models_four_mast_ship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_models/four-mast-ship */ "./src/app/_models/four-mast-ship.ts");










var BoardComponent = /** @class */ (function () {
    function BoardComponent(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
        var settingData = localStorage.getItem('settingsData');
        this.settings = new _models_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]();
        this.ships = [];
        settingData ? this.settings.loadFromStorage(JSON.parse(settingData)) : this.router.navigate(['/']);
        this.board = new _models_board__WEBPACK_IMPORTED_MODULE_2__["Board"](this.settings);
        this.generateShips();
        this.addShipsToBoard();
    }
    BoardComponent_1 = BoardComponent;
    BoardComponent.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    BoardComponent.prototype.shoot = function (field) {
        var e_1, _a;
        this.board.shoots++;
        if (!field.isShot) {
            field.isShot = true;
            if (!field.hasShip) {
                this.board.missed++;
                this.snackBar.open('Pudło');
                return;
            }
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.ships), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ship = _c.value;
                    if (ship.id === field.shipId) {
                        ship.hp--;
                        if (ship.hp === 0) {
                            this.snackBar.open('Zatopiony');
                        }
                        else {
                            this.snackBar.open('Trafiony');
                        }
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    BoardComponent.prototype.generateShips = function () {
        var numberOfOneMastShips = this.board.oneMastShips;
        for (var i = 0; i < numberOfOneMastShips; i++) {
            var ship = new _models_one_mast_ship__WEBPACK_IMPORTED_MODULE_6__["OneMastShip"](Math.floor(Math.random() * 100 % 100));
            this.ships.push(ship);
        }
        var numberOfTwoMastShips = this.board.twoMastShips;
        for (var i = 0; i < numberOfTwoMastShips; i++) {
            var ship = new _models_two_mast_ship__WEBPACK_IMPORTED_MODULE_7__["TwoMastShip"](Math.floor(Math.random() * 100 % 100));
            this.ships.push(ship);
        }
        var numberOfThreeMastShips = this.board.threeMastShips;
        for (var i = 0; i < numberOfThreeMastShips; i++) {
            var ship = new _models_three_mast_ship__WEBPACK_IMPORTED_MODULE_8__["ThreeMastShip"](Math.floor(Math.random() * 100 % 100));
            this.ships.push(ship);
        }
        var numberOfFourMastShips = this.board.fourMastShips;
        for (var i = 0; i < numberOfFourMastShips; i++) {
            var ship = new _models_four_mast_ship__WEBPACK_IMPORTED_MODULE_9__["FourMastShip"](Math.floor(Math.random() * 100 % 100));
            this.ships.push(ship);
        }
    };
    BoardComponent.prototype.addShipsToBoard = function () {
        var e_2, _a;
        if (this.ships.length <= 0) {
            return;
        }
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.ships), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ship = _c.value;
                var yPos = BoardComponent_1.getRandomInt(0, this.board.size) * this.board.size;
                var xPos = BoardComponent_1.getRandomInt(0, (this.board.size - ship.shipType));
                while (!this.checkIfFieldsAreFree(xPos, yPos, ship.shipType)) {
                    yPos = BoardComponent_1.getRandomInt(0, this.board.size) * this.board.size;
                    xPos = BoardComponent_1.getRandomInt(0, (this.board.size - ship.shipType));
                }
                this.placeShip(xPos, yPos, ship);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    BoardComponent.prototype.placeShip = function (xPos, yPos, ship) {
        for (var i = 0; i < ship.shipType; i++) {
            this.board.fields[yPos + xPos + i].shipId = ship.id;
        }
    };
    BoardComponent.prototype.checkIfFieldsAreFree = function (x, y, length) {
        for (var i = 0; i < length; i++) {
            if (this.board.fields[y + x].hasShip) {
                return false;
            }
        }
        return true;
    };
    var BoardComponent_1;
    BoardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    BoardComponent = BoardComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.scss */ "./src/app/board/board.component.scss")).default]
        })
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 5%;\n}\n\n.sidenav .settings {\n  position: absolute;\n  bottom: 0;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcaGVyb2VcXERvY3VtZW50c1xcU3RhdGtpL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiA1JTtcclxuXHJcbiAgLnNldHRpbmdzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiA1JTtcbn1cbi5zaWRlbmF2IC5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/settings */ "./src/app/_models/settings.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'Statki';
        this.setting = new _models_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.scss":
/*!********************************************!*\
  !*** ./src/app/start/start.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin-left: 10px;\n}\n.settings-form .settings-row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvQzpcXFVzZXJzXFxoZXJvZVxcRG9jdW1lbnRzXFxTdGF0a2kvc3JjXFxhcHBcXHN0YXJ0XFxzdGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgLnNldHRpbmdzLXJvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5zZXR0aW5ncy1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnNldHRpbmdzLWZvcm0gLnNldHRpbmdzLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/settings */ "./src/app/_models/settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var StartComponent = /** @class */ (function () {
    function StartComponent(fb, snackBar, router) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.settingsForm = this.fb.group({
            size: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shipNum: [null],
            shipNum2: [null],
            shipNum3: [null],
            shipNum4: [null],
            autoDeployment: [true]
        });
    }
    StartComponent.prototype.onSubmit = function () {
        var settings = new _models_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        settings.size = this.settingsForm.value.size;
        settings.oneMastShips = this.settingsForm.value.shipNum;
        settings.twoMastShips = this.settingsForm.value.shipNum2;
        settings.threeMastShips = this.settingsForm.value.shipNum3;
        settings.fourMastShips = this.settingsForm.value.shipNum4;
        settings.autoDeploy = this.settingsForm.value.autoDeployment;
        localStorage.setItem('settingsData', JSON.stringify(settings));
        this.snackBar.open('Game launched');
        this.router.navigate(['/board']);
    };
    StartComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")).default]
        })
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\heroe\Documents\Statki\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map