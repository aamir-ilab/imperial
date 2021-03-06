(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-page-layouts-page-layouts-module"],{

/***/ "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PageLayoutsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsRoutingModule", function() { return PageLayoutsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'blank',
        loadChildren: () => Promise.all(/*! import() | blank-blank-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("blank-blank-module")]).then(__webpack_require__.bind(null, /*! ./blank/blank.module */ "./src/app/pages/ui/page-layouts/blank/blank.module.ts")).then(m => m.BlankModule),
    },
    {
        path: 'simple',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-page-layout-simple-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-page-layout-simple-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple/page-layout-simple.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.module.ts")).then(m => m.PageLayoutSimpleModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts")).then(m => m.PageLayoutSimpleTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-large-header-page-layout-simple-large-header-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-page-layout-simple-large-header-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-large-header/page-layout-simple-large-header.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts")).then(m => m.PageLayoutSimpleLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() | simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module */ "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module.ts")).then(m => m.PageLayoutSimpleLargeHeaderTabbedModule)
            }
        ]
    },
    {
        path: 'card',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-page-layout-card-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-page-layout-card-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card/page-layout-card.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts")).then(m => m.PageLayoutCardModule)
            },
            {
                path: 'tabbed',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-tabbed-page-layout-card-tabbed-module */[__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-tabbed-page-layout-card-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-tabbed/page-layout-card-tabbed.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts")).then(m => m.PageLayoutCardTabbedModule)
            },
            {
                path: 'large-header',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-large-header-page-layout-card-large-header-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-page-layout-card-large-header-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-large-header/page-layout-card-large-header.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.module.ts")).then(m => m.PageLayoutCardLargeHeaderModule)
            },
            {
                path: 'large-header/tabbed',
                loadChildren: () => Promise.all(/*! import() | card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module */[__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module */ "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts")).then(m => m.PageLayoutCardLargeHeaderTabbedModule)
            }
        ]
    }
];
class PageLayoutsRoutingModule {
}
PageLayoutsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PageLayoutsRoutingModule });
PageLayoutsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PageLayoutsRoutingModule_Factory(t) { return new (t || PageLayoutsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PageLayoutsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageLayoutsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/ui/page-layouts/page-layouts.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui/page-layouts/page-layouts.module.ts ***!
  \**************************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layouts-routing.module */ "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts");




class PageLayoutsModule {
}
PageLayoutsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PageLayoutsModule });
PageLayoutsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PageLayoutsModule_Factory(t) { return new (t || PageLayoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PageLayoutsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageLayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-ui-page-layouts-page-layouts-module-es2015.js.map