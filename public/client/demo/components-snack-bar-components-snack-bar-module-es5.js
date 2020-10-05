function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-snack-bar-components-snack-bar-module"], {
  /***/
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
    /***/
  },

  /***/
  "./src/app/pages/ui/components/components-snack-bar/components-snack-bar-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-snack-bar/components-snack-bar-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ComponentsSnackBarRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsSnackBarComponentsSnackBarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSnackBarRoutingModule", function () {
      return ComponentsSnackBarRoutingModule;
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


    var _components_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-snack-bar.component */
    "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.component.ts");

    var routes = [{
      path: '',
      component: _components_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsSnackBarComponent"]
    }];

    var ComponentsSnackBarRoutingModule = function ComponentsSnackBarRoutingModule() {
      _classCallCheck(this, ComponentsSnackBarRoutingModule);
    };

    ComponentsSnackBarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsSnackBarRoutingModule
    });
    ComponentsSnackBarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsSnackBarRoutingModule_Factory(t) {
        return new (t || ComponentsSnackBarRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsSnackBarRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSnackBarRoutingModule, [{
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
  "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-snack-bar/components-snack-bar.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ComponentsSnackBarComponent */

  /***/
  function srcAppPagesUiComponentsComponentsSnackBarComponentsSnackBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSnackBarComponent", function () {
      return ComponentsSnackBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-snack-bar/components-overview-snack-bar.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.component.ts");

    var _c0 = function _c0() {
      return ["Components", "Snack Bar"];
    };

    var ComponentsSnackBarComponent = /*#__PURE__*/function () {
      function ComponentsSnackBarComponent() {
        _classCallCheck(this, ComponentsSnackBarComponent);
      }

      _createClass(ComponentsSnackBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsSnackBarComponent;
    }();

    ComponentsSnackBarComponent.ɵfac = function ComponentsSnackBarComponent_Factory(t) {
      return new (t || ComponentsSnackBarComponent)();
    };

    ComponentsSnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentsSnackBarComponent,
      selectors: [["vex-components-snack-bar"]],
      decls: 5,
      vars: 4,
      consts: [["current", "Snack Bar"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
      template: function ComponentsSnackBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vex-components-overview-snack-bar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);
        }
      },
      directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__["ContainerDirective"], _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewSnackBarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1zbmFjay1iYXIvY29tcG9uZW50cy1zbmFjay1iYXIuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSnackBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-components-snack-bar',
          templateUrl: './components-snack-bar.component.html',
          styleUrls: ['./components-snack-bar.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-snack-bar/components-snack-bar.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ComponentsSnackBarModule */

  /***/
  function srcAppPagesUiComponentsComponentsSnackBarComponentsSnackBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSnackBarModule", function () {
      return ComponentsSnackBarModule;
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


    var _components_snack_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-snack-bar-routing.module */
    "./src/app/pages/ui/components/components-snack-bar/components-snack-bar-routing.module.ts");
    /* harmony import */


    var _components_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-snack-bar.component */
    "./src/app/pages/ui/components/components-snack-bar/components-snack-bar.component.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-snack-bar/components-overview-snack-bar.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ComponentsSnackBarModule = function ComponentsSnackBarModule() {
      _classCallCheck(this, ComponentsSnackBarModule);
    };

    ComponentsSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsSnackBarModule
    });
    ComponentsSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsSnackBarModule_Factory(t) {
        return new (t || ComponentsSnackBarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_snack_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSnackBarRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSnackBarModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsSnackBarModule, {
        declarations: [_components_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSnackBarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_snack_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSnackBarRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSnackBarModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSnackBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_snack_bar_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSnackBarRoutingModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_4__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSnackBarModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-snack-bar-components-snack-bar-module-es5.js.map