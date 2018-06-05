webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_component__ = __webpack_require__("./src/app/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positions_component__ = __webpack_require__("./src/app/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__ = __webpack_require__("./src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_component__ = __webpack_require__("./src/app/position.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_3__employees_component__["a" /* EmployeesComponent */] },
    { path: 'position', component: __WEBPACK_IMPORTED_MODULE_4__positions_component__["a" /* PositionsComponent */] },
    { path: 'employee/:_id', component: __WEBPACK_IMPORTED_MODULE_6__employee_component__["a" /* EmployeeComponent */] },
    { path: 'positions/:_id', component: __WEBPACK_IMPORTED_MODULE_7__position_component__["a" /* PositionComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n\n<!--<header _id=\"header\">-->\n  <!--<nav class=\"navbar navbar-inverse\" role=\"banner\">-->\n    <!--<div class=\"container\">-->\n      <!--<div class=\"navbar-header\">-->\n        <!--<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>-->\n        <!--<a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-tag\"></i> Diogo Watson (API Demo)</a></div>-->\n      <!--<div class=\"collapse navbar-collapse navbar-right\">-->\n        <!--<ul class=\"nav navbar-nav\">-->\n          <!--<li class=\"active\"><a href=\"index.html\">Home</a></li>-->\n\n        <!--</ul>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--&lt;!&ndash;/.container&ndash;&gt;-->\n  <!--</nav>-->\n  <!--&lt;!&ndash;/nav&ndash;&gt;-->\n\n<!--</header>-->\n<!--&lt;!&ndash;/header&ndash;&gt;-->\n\n<!--<div class=\"color-border\"> </div>-->\n<!--<div>Hello World!</div>-->\n<!--<div class=\"color-border\"> </div>-->\n<!--<footer _id=\"footer\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-sm-6\">2018 Diogo Watson Web 422 </div>-->\n      <!--<div class=\"col-sm-6\">-->\n        <!--<div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</footer>-->\n<!--&lt;!&ndash;/#footer&ndash;&gt;-->\n\n<!--<script src=\"js/jquery.js\"></script>-->\n<!--<script src=\"js/bootstrap.min.js\"></script>-->\n<!--<script src=\"js/jquery.prettyPhoto.js\"></script>-->\n<!--<script src=\"js/jquery.isotope.min.js\"></script>-->\n<!--<script src=\"js/main.js\"></script>-->\n\n<!--<script src=\"js/main.js\"></script>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/*********************************************************************************
 * WEB422 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: Diogo Watson Manhaes de Andrade Student ID: 104176169 Date: March, 28, 2018
 *
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_component__ = __webpack_require__("./src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_component__ = __webpack_require__("./src/app/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_component__ = __webpack_require__("./src/app/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_component__ = __webpack_require__("./src/app/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__positions_component__ = __webpack_require__("./src/app/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_component__ = __webpack_require__("./src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__position_service__ = __webpack_require__("./src/app/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__position_component__ = __webpack_require__("./src/app/position.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__positions_component__["a" /* PositionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__position_component__["a" /* PositionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__employee_service__["a" /* EmployeesService */],
                __WEBPACK_IMPORTED_MODULE_13__position_service__["a" /* PositionService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"color-border\"> </div>\n  <router-outlet></router-outlet>\n\n\n  <div class=\"color-border\"> </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content.component.html"),
            styles: [__webpack_require__("./src/app/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/employee.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n"

/***/ }),

/***/ "./src/app/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">{{employee.FirstName}} {{employee.LastName}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form #f='ngForm' (ngSubmit)='onSubmit(f)'>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [class.has-error]=\"FirstName.errors\">\n                <label class=\"control-label\" for=\"FirstName\">First Name:<span *ngIf=\"FirstName.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"First&nbsp;Name&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #FirstName=\"ngModel\" placeholder=\"First Name\" class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" required [(ngModel)]=\"employee.FirstName\"/>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [class.has-error]=\"LastName.errors\">\n                <label class=\"control-label\" for=\"LastName\">Last Name:<span *ngIf=\"LastName.errors && LastName.errors\" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Last&nbsp;Name&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #LastName=\"ngModel\" placeholder=\"Last Name\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" required [(ngModel)]=\"employee.LastName\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" for=\"Position\">Position:</label>\n                <select class=\"form-control\" id=\"Position\"  name=\"Position\" [(ngModel)]=\"employee.position\">\n                  <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [class.has-error]=\"SalaryBonus.errors\">\n                <label class=\"control-label\" for=\"SalaryBonus\">Salary Bonus:<span *ngIf=\"SalaryBonus.errors && SalaryBonus.errors\" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Salary&nbsp;Bonus&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">$</span>\n                  <input #SalaryBonus=\"ngModel\" placeholder=\"Salary Bonus\" class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" required [(ngModel)]=\"employee.SalaryBonus\"/>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"AddressStreet.errors\">\n                <label class=\"control-label\" for=\"AddressStreet\">Address (Street):<span *ngIf=\"AddressStreet.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Address&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #AddressStreet=\"ngModel\" placeholder=\"Address Street\" class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" required [(ngModel)]=\"employee.AddressStreet\"/>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"AddressCity.errors\">\n                <label class=\"control-label\" for=\"AddressCity\">Address (City):<span *ngIf=\"AddressCity.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"City&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #AddressCity=\"ngModel\" placeholder=\"Address City\" class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" required [(ngModel)]=\"employee.AddressCity\"/>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"AddressState.errors\">\n                <label class=\"control-label\" for=\"AddressState\">Address (State):<span *ngIf=\"AddressState.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"State&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #AddressState=\"ngModel\" placeholder=\"Address State\"  class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" required [(ngModel)]=\"employee.AddressState\"/>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"AddressZip.errors\">\n                <label class=\"control-label\" for=\"AddressZip\">Address (Zip Code):<span *ngIf=\"AddressZip.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Zip&nbsp;Code&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #AddressZip=\"ngModel\" placeholder=\"Address Zip\"  class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" required [(ngModel)]=\"employee.AddressZip\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"PhoneNum.errors\">\n                <label class=\"control-label\" for=\"PhoneNum\">Phone Number:<span *ngIf=\"PhoneNum.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Phone&nbsp;Number&nbsp;is&nbsp;Not&nbsp;Valid\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #PhoneNum=\"ngModel\" placeholder=\"0-(000)000-0000\"  class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" required pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\" [(ngModel)]=\"employee.PhoneNum\"/>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [class.has-error]=\"Extension.errors\">\n                <label class=\"control-label\" for=\"Extension\">Extension:<span *ngIf=\"Extension.errors\" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Extension&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #Extension=\"ngModel\" placeholder=\"Extension\" class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" required [(ngModel)]=\"employee.Extension\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n                <input #HireDate placeholder=\"Hire Date\" class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" [value]=\"employee.HireDate | date:'MMMM d, y, h:mm:ss a z'\" readonly >\n              </div>\n            </div>\n          </div>\n          <hr />\n          <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n          <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n          <br />\n          <br />\n        </form>\n      </div>\n    </div>\n    <br />\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n      <strong>Success!</strong> Employee information was successfully updated.\n    </div>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position_service__ = __webpack_require__("./src/app/position.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, employeeService, positionService) {
        this.route = route;
        this.employeeService = employeeService;
        this.positionService = positionService;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.employeeService.getEmployee(params['_id']).subscribe(function (emp) {
                _this.employee = emp[0];
                _this.getPositionsSubscription = _this.positionService.getPositions().subscribe(function (data) {
                    _this.positions = data;
                });
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.employeeService.saveEmployees(this.employee).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubscription) {
            this.getPositionsSubscription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employee.component.html"),
            styles: [__webpack_require__("./src/app/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__employee_service__["a" /* EmployeesService */],
            __WEBPACK_IMPORTED_MODULE_3__position_service__["a" /* PositionService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesService = /** @class */ (function () {
    function EmployeesService(http) {
        this.http = http;
        this.url = 'https://web344app.herokuapp.com/employees';
        this.url2 = 'https://web344app.herokuapp.com/employee-raw/';
        this.url3 = 'https://web344app.herokuapp.com/employee/';
    }
    EmployeesService.prototype.getEmployees = function () {
        return this.http.get(this.url);
    };
    EmployeesService.prototype.saveEmployees = function (employee) {
        return this.http.put(this.url3 + employee._id, employee);
    };
    EmployeesService.prototype.getEmployee = function (id) {
        return this.http.get(this.url2 + id);
    };
    EmployeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n"

/***/ }),

/***/ "./src/app/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n\n</div>\n<input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search Employees by Full Name or Position\" style=\"margin-bottom:10px;\" (keyup)=\"onEmployeeSearchKeyUp($event)\"/>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-condensed table-hover\">\n     <thead>\n    <tr class=\"row header-row\">\n      <th class=\"col-xs-4 header-column\">Full Name Name</th>\n      <th class=\"col-xs-5 header-column\">Position</th>\n      <th class=\"col-xs-3 header-column\">Phone (ext)</th>\n      <th class=\"col-xs-3 header-column\">Hire Date (ext)</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr class=\"row body-row\" *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\" [hidden]=\"hidden\">\n      <td class=\"col-xs-1 header-column\" >{{employee.FirstName}} {{employee.LastName}}</td>\n      <td class=\"col-xs-2 header-column\">{{employee.Position.PositionName}}</td>\n           <td class=\"col-xs-1 body-column\">{{employee.PhoneNum}} (ext: {{employee.Extension}})</td>\n      <td class=\"col-xs-1 body-column\">{{employee.HireDate | date:'MMMM d, y, h:mm:ss a z'}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("./src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(eService, router) {
        this.eService = eService;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.eService.getEmployees().subscribe(function (employees) {
            _this.employees = employees;
            _this.filteredEmployees = employees;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUp = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (e) { return ((e.FirstName.toLowerCase().indexOf(substring) !== -1) || (e.LastName.toLowerCase().indexOf(substring) !== -1)); });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        this.getEmployeesSub.unsubscribe();
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<footer id=\"footer\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-sm-6\">2018 Diogo Watson Web 422 </div>\n<div class=\"col-sm-6\">\n<div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n</div>\n</div>\n</div>\n</footer>\n<!--/#footer-->\n"

/***/ }),

/***/ "./src/app/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 70px 0;\n}\n.no-margin {\n  margin: 0;\n  padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <section id=\"main-slider\" class=\"no-margin\">\n        <div class=\"carousel slide\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n            <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n            <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>API demo<span class=\"logo\"><i class=\"fa fa-tag\"></i> Web 422</span></h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                      <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n\n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg2.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>Typi non habent claritatem insitam</h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                      <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n\n            <div class=\"item\" style=\"background-image: url(assets/images/slider/bg3.jpg)\">\n              <div class=\"container\">\n                <div class=\"row slide-margin\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"carousel-content\">\n                      <h1>Mirum est notare quam littera gothica</h1>\n                      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                      <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--/.item-->\n          </div>\n          <!--/.carousel-inner-->\n        </div>\n        <!--/.carousel-->\n        <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n      <!--/#main-slider-->\n      <div class=\"color-border\"> </div>\n      <section id=\"feature\" >\n        <div class=\"container\">\n          <div class=\"center\">\n            <h2>Featured Services</h2>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n              Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n          </div>\n          <div class=\"row\">\n            <div class=\"features\">\n              <div class=\"col-md-6 col-sm-6\">\n                <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n                  <h2>Positions</h2>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n                </div>\n              </div>\n              <!--/.col-md-4-->\n\n\n              <div class=\"col-md-6 col-sm-6\">\n                <div class=\"feature-wrap\"> <i class=\"fa fa-rocket\"></i>\n                  <h2>Employees</h2>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n                </div>\n              </div>\n              <!--/.col-md-4-->\n            </div>\n            <!--/.services-->\n          </div>\n          <!--/.row-->\n        </div>\n        <!--/.container-->\n      </section>\n      <!--/#feature-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-tag\"></i> Diogo Watson (API demo)</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container-->\n  </nav>\n  <!--/nav-->\n"

/***/ }),

/***/ "./src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n  page-not-found!\n</h3>\n"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n"

/***/ }),

/***/ "./src/app/position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Positions</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form #f='ngForm' (ngSubmit)='onSubmit(f)'>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" [class.has-error]=\"PositionName.errors\">\n                <label class=\"control-label\" for=\"PositionName\">Position Name:<span *ngIf=\"PositionName.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Position&nbsp;Name&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <input #PositionName=\"ngModel\" placeholder=\"Position Name\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" required [(ngModel)]=\"position.PositionName\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div  class=\"form-group\" [class.has-error]=\"PositionDescription.errors\">\n                <label class=\"control-label\" for=\"PositionDescription\">Description:<span *ngIf=\"PositionDescription.errors \" class=\"glyphicon glyphicon-exclamation-sign\" data-content=\"Position&nbsp;Description&nbsp;is&nbsp;Required\" data-placement=\"right\" data-toggle=\"popover\" data-trigger=\"focus\"></span></label>\n                <textarea #PositionDescription=\"ngModel\" placeholder=\"Position Description\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" required [(ngModel)]=\"position.PositionDescription\"></textarea>\n              </div>\n            </div>\n          </div>\n          <hr />\n          <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n          <input  type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n          <br />\n          <br />\n        </form>\n      </div>\n    </div>\n    <br/>\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n      <strong>Success!</strong> Position information was successfully updated.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_service__ = __webpack_require__("./src/app/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionComponent = /** @class */ (function () {
    function PositionComponent(positionService, route) {
        this.positionService = positionService;
        this.route = route;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.positionSubscription = _this.positionService.getPosition(params['_id']).subscribe(function (pos) {
                _this.position = pos[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            });
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
    };
    PositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position',
            template: __webpack_require__("./src/app/position.component.html"),
            styles: [__webpack_require__("./src/app/position.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__position_service__["a" /* PositionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/position.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = 'https://web344app.herokuapp.com/positions';
        this.url2 = 'https://web344app.herokuapp.com/positions/';
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url);
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put(this.url2 + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url2 + id);
    };
    PositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n"

/***/ }),

/***/ "./src/app/positions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" xmlns=\"http://www.w3.org/1999/html\">\n  <h2>Featured Services</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n          <tr class=\"row header-row\">\n            <th class=\"col-xs-3 header-column\">Position Name</th>\n            <th class=\"col-xs-6 header-column\">Position Description</th>\n            <th class=\"col-xs-3 header-column\">Salary</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr class=\"row body-row\" *ngFor=\"let position of positions\" (click)=\"routePosition(position._id)\">\n            <td class=\"col-xs-1 header-column\" >{{position.PositionName}}</td>\n            <td class=\"col-xs-3 header-column\">{{position.PositionDescription}}</td>\n            <td class=\"col-xs-6 header-column\">${{ position.PositionBaseSalary | number:'.2'}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/positions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_service__ = __webpack_require__("./src/app/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(positionService, route) {
        this.positionService = positionService;
        this.route = route;
        this.loadingError = false;
        this.positions = [];
        this.getPositionsSub = "";
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (positions) {
            _this.positions = positions;
        }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.route.navigate(["/positions", id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        this.getPositionsSub.unsubscribe();
    };
    PositionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-positions',
            template: __webpack_require__("./src/app/positions.component.html"),
            styles: [__webpack_require__("./src/app/positions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__position_service__["a" /* PositionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map