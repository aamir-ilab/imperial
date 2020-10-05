function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-page-layout-simple-page-layout-simple-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMoreVertJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple-routing.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: PageLayoutSimpleRoutingModule */

  /***/
  function srcAppPagesUiPageLayoutsSimplePageLayoutSimplePageLayoutSimpleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleRoutingModule", function () {
      return PageLayoutSimpleRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layout-simple.component */
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.component.ts");

    var routes = [{
      path: '',
      component: _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleComponent"]
    }];

    var PageLayoutSimpleRoutingModule = function PageLayoutSimpleRoutingModule() {
      _classCallCheck(this, PageLayoutSimpleRoutingModule);
    };

    PageLayoutSimpleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutSimpleRoutingModule
    });
    PageLayoutSimpleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutSimpleRoutingModule_Factory(t) {
        return new (t || PageLayoutSimpleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleRoutingModule, [{
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
  "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: PageLayoutSimpleComponent */

  /***/
  function srcAppPagesUiPageLayoutsSimplePageLayoutSimplePageLayoutSimpleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleComponent", function () {
      return PageLayoutSimpleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../@vex/components/page-layout/page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../page-layout-demo/page-layout-demo.component */
    "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.component.ts");

    var _c0 = function _c0() {
      return ["Page Layouts", "Simple", "Default"];
    };

    var PageLayoutSimpleComponent = /*#__PURE__*/function () {
      function PageLayoutSimpleComponent() {
        _classCallCheck(this, PageLayoutSimpleComponent);

        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default.a;
      }

      _createClass(PageLayoutSimpleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLayoutSimpleComponent;
    }();

    PageLayoutSimpleComponent.ɵfac = function PageLayoutSimpleComponent_Factory(t) {
      return new (t || PageLayoutSimpleComponent)();
    };

    PageLayoutSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageLayoutSimpleComponent,
      selectors: [["vex-page-layout-simple"]],
      decls: 5,
      vars: 2,
      consts: [["current", "Simple"], ["fxFlex", "auto", 3, "crumbs"], ["vexContainer", ""]],
      template: function PageLayoutSimpleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vex-page-layout-demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_6__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_7__["ContainerDirective"], _page_layout_demo_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_8__["PageLayoutDemoComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9zaW1wbGUvcGFnZS1sYXlvdXQtc2ltcGxlL3BhZ2UtbGF5b3V0LXNpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-page-layout-simple',
          templateUrl: './page-layout-simple.component.html',
          styleUrls: ['./page-layout-simple.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: PageLayoutSimpleModule */

  /***/
  function srcAppPagesUiPageLayoutsSimplePageLayoutSimplePageLayoutSimpleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleModule", function () {
      return PageLayoutSimpleModule;
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


    var _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layout-simple-routing.module */
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple-routing.module.ts");
    /* harmony import */


    var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-simple.component */
    "./src/app/pages/ui/page-layouts/simple/page-layout-simple/page-layout-simple.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../page-layout-demo/page-layout-demo.module */
    "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var PageLayoutSimpleModule = function PageLayoutSimpleModule() {
      _classCallCheck(this, PageLayoutSimpleModule);
    };

    PageLayoutSimpleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutSimpleModule
    });
    PageLayoutSimpleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutSimpleModule_Factory(t) {
        return new (t || PageLayoutSimpleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleModule, {
        declarations: [_page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _page_layout_demo_page_layout_demo_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=simple-page-layout-simple-page-layout-simple-module-es5.js.map