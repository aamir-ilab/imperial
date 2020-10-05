function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-page-layouts-page-layouts-module"], {
  /***/
  "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PageLayoutsRoutingModule */

  /***/
  function srcAppPagesUiPageLayoutsPageLayoutsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsRoutingModule", function () {
      return PageLayoutsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'blank',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | blank-blank-module */
        [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("blank-blank-module")]).then(__webpack_require__.bind(null,
        /*! ./blank/blank.module */
        "./src/app/pages/ui/page-layouts/blank/blank.module.ts")).then(function (m) {
          return m.BlankModule;
        });
      }
    }, {
      path: 'simple',
      children: [{
        path: '',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | simple-page-layout-simple-page-layout-simple-module */
          [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-page-layout-simple-module")]).then(__webpack_require__.bind(null,
          /*! ./simple/page-layout-simple/page-layout-simple.module */
          "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.module.ts")).then(function (m) {
            return m.PageLayoutSimpleModule;
          });
        }
      }, {
        path: 'tabbed',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module */
          [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-tabbed-page-layout-simple-tabbed-module")]).then(__webpack_require__.bind(null,
          /*! ./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module */
          "./src/app/pages/ui/page-layouts/simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts")).then(function (m) {
            return m.PageLayoutSimpleTabbedModule;
          });
        }
      }, {
        path: 'large-header',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | simple-page-layout-simple-large-header-page-layout-simple-large-header-module */
          [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-page-layout-simple-large-header-module")]).then(__webpack_require__.bind(null,
          /*! ./simple/page-layout-simple-large-header/page-layout-simple-large-header.module */
          "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header/page-layout-simple-large-header.module.ts")).then(function (m) {
            return m.PageLayoutSimpleLargeHeaderModule;
          });
        }
      }, {
        path: 'large-header/tabbed',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module */
          [__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("simple-page-layout-simple-large-header-tabbed-page-layout-simple-large-header-tabbed-module")]).then(__webpack_require__.bind(null,
          /*! ./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module */
          "./src/app/pages/ui/page-layouts/simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module.ts")).then(function (m) {
            return m.PageLayoutSimpleLargeHeaderTabbedModule;
          });
        }
      }]
    }, {
      path: 'card',
      children: [{
        path: '',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | card-page-layout-card-page-layout-card-module */
          [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-page-layout-card-module")]).then(__webpack_require__.bind(null,
          /*! ./card/page-layout-card/page-layout-card.module */
          "./src/app/pages/ui/page-layouts/card/page-layout-card/page-layout-card.module.ts")).then(function (m) {
            return m.PageLayoutCardModule;
          });
        }
      }, {
        path: 'tabbed',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | card-page-layout-card-tabbed-page-layout-card-tabbed-module */
          [__webpack_require__.e("default~admin-admin-dashboard-admin-dashboard-module~admin-invoices-invoice-invoice-module~admin-set~2d45d8dc"), __webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-tabbed-page-layout-card-tabbed-module")]).then(__webpack_require__.bind(null,
          /*! ./card/page-layout-card-tabbed/page-layout-card-tabbed.module */
          "./src/app/pages/ui/page-layouts/card/page-layout-card-tabbed/page-layout-card-tabbed.module.ts")).then(function (m) {
            return m.PageLayoutCardTabbedModule;
          });
        }
      }, {
        path: 'large-header',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | card-page-layout-card-large-header-page-layout-card-large-header-module */
          [__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-page-layout-card-large-header-module")]).then(__webpack_require__.bind(null,
          /*! ./card/page-layout-card-large-header/page-layout-card-large-header.module */
          "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header/page-layout-card-large-header.module.ts")).then(function (m) {
            return m.PageLayoutCardLargeHeaderModule;
          });
        }
      }, {
        path: 'large-header/tabbed',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module */
          [__webpack_require__.e("default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"), __webpack_require__.e("card-page-layout-card-large-header-tabbed-page-layout-card-large-header-tabbed-module")]).then(__webpack_require__.bind(null,
          /*! ./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module */
          "./src/app/pages/ui/page-layouts/card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module.ts")).then(function (m) {
            return m.PageLayoutCardLargeHeaderTabbedModule;
          });
        }
      }]
    }];

    var PageLayoutsRoutingModule = function PageLayoutsRoutingModule() {
      _classCallCheck(this, PageLayoutsRoutingModule);
    };

    PageLayoutsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutsRoutingModule
    });
    PageLayoutsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutsRoutingModule_Factory(t) {
        return new (t || PageLayoutsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/page-layouts/page-layouts.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/page-layouts.module.ts ***!
    \**************************************************************/

  /*! exports provided: PageLayoutsModule */

  /***/
  function srcAppPagesUiPageLayoutsPageLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function () {
      return PageLayoutsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layouts-routing.module */
    "./src/app/pages/ui/page-layouts/page-layouts-routing.module.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutsModule
    });
    PageLayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutsModule_Factory(t) {
        return new (t || PageLayoutsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-ui-page-layouts-page-layouts-module-es5.js.map