function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-slide-toggle-components-slide-toggle-module"], {
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
  "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ComponentsSlideToggleRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsSlideToggleComponentsSlideToggleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleRoutingModule", function () {
      return ComponentsSlideToggleRoutingModule;
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


    var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-slide-toggle.component */
    "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts");

    var routes = [{
      path: '',
      component: _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsSlideToggleComponent"]
    }];

    var ComponentsSlideToggleRoutingModule = function ComponentsSlideToggleRoutingModule() {
      _classCallCheck(this, ComponentsSlideToggleRoutingModule);
    };

    ComponentsSlideToggleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsSlideToggleRoutingModule
    });
    ComponentsSlideToggleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsSlideToggleRoutingModule_Factory(t) {
        return new (t || ComponentsSlideToggleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsSlideToggleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSlideToggleRoutingModule, [{
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
  "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ComponentsSlideToggleComponent */

  /***/
  function srcAppPagesUiComponentsComponentsSlideToggleComponentsSlideToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleComponent", function () {
      return ComponentsSlideToggleComponent;
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


    var _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.component.ts");

    var _c0 = function _c0() {
      return ["Components", "Slide Toggle"];
    };

    var ComponentsSlideToggleComponent = /*#__PURE__*/function () {
      function ComponentsSlideToggleComponent() {
        _classCallCheck(this, ComponentsSlideToggleComponent);
      }

      _createClass(ComponentsSlideToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsSlideToggleComponent;
    }();

    ComponentsSlideToggleComponent.ɵfac = function ComponentsSlideToggleComponent_Factory(t) {
      return new (t || ComponentsSlideToggleComponent)();
    };

    ComponentsSlideToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentsSlideToggleComponent,
      selectors: [["vex-components-slide-toggle"]],
      decls: 5,
      vars: 4,
      consts: [["current", "Slide Toggle"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]],
      template: function ComponentsSlideToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vex-page-layout-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vex-components-overview-slide-toggle", 3);

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
      directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__["ContainerDirective"], _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewSlideToggleComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1zbGlkZS10b2dnbGUvY29tcG9uZW50cy1zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSlideToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-components-slide-toggle',
          templateUrl: './components-slide-toggle.component.html',
          styleUrls: ['./components-slide-toggle.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ComponentsSlideToggleModule */

  /***/
  function srcAppPagesUiComponentsComponentsSlideToggleComponentsSlideToggleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsSlideToggleModule", function () {
      return ComponentsSlideToggleModule;
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


    var _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-slide-toggle-routing.module */
    "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle-routing.module.ts");
    /* harmony import */


    var _components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-slide-toggle.component */
    "./src/app/pages/ui/components/components-slide-toggle/components-slide-toggle.component.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ComponentsSlideToggleModule = function ComponentsSlideToggleModule() {
      _classCallCheck(this, ComponentsSlideToggleModule);
    };

    ComponentsSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsSlideToggleModule
    });
    ComponentsSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsSlideToggleModule_Factory(t) {
        return new (t || ComponentsSlideToggleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSlideToggleRoutingModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSlideToggleModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsSlideToggleModule, {
        declarations: [_components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSlideToggleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSlideToggleRoutingModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSlideToggleModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_slide_toggle_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsSlideToggleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_slide_toggle_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsSlideToggleRoutingModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"], _components_overview_components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewSlideToggleModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-slide-toggle-components-slide-toggle-module-es5.js.map