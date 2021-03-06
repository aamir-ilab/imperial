function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-center-pricing-help-center-pricing-module"], {
  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: HelpCenterPricingRoutingModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingRoutingModule", function () {
      return HelpCenterPricingRoutingModule;
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


    var _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-center-pricing.component */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts");

    var routes = [{
      path: '',
      component: _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_2__["HelpCenterPricingComponent"]
    }];

    var HelpCenterPricingRoutingModule = function HelpCenterPricingRoutingModule() {
      _classCallCheck(this, HelpCenterPricingRoutingModule);
    };

    HelpCenterPricingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HelpCenterPricingRoutingModule
    });
    HelpCenterPricingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HelpCenterPricingRoutingModule_Factory(t) {
        return new (t || HelpCenterPricingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HelpCenterPricingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterPricingRoutingModule, [{
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
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: HelpCenterPricingComponent */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingComponent", function () {
      return HelpCenterPricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-beenhere */
    "./node_modules/@iconify/icons-ic/twotone-beenhere.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-stars */
    "./node_modules/@iconify/icons-ic/twotone-stars.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-business-center */
    "./node_modules/@iconify/icons-ic/twotone-business-center.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var HelpCenterPricingComponent = /*#__PURE__*/function () {
      function HelpCenterPricingComponent() {
        _classCallCheck(this, HelpCenterPricingComponent);

        this.icBeenhere = _iconify_icons_ic_twotone_beenhere__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icStars = _iconify_icons_ic_twotone_stars__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icBusinessCenter = _iconify_icons_ic_twotone_business_center__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(HelpCenterPricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpCenterPricingComponent;
    }();

    HelpCenterPricingComponent.??fac = function HelpCenterPricingComponent_Factory(t) {
      return new (t || HelpCenterPricingComponent)();
    };

    HelpCenterPricingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HelpCenterPricingComponent,
      selectors: [["vex-help-center-pricing"]],
      decls: 87,
      vars: 3,
      consts: [[1, "bg-card", "py-16", "px-gutter"], [1, "display-1", "mt-12", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start stretch", "fxLayoutGap", "24px", 1, "my-12", "container"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start center", 1, "card", "p-6"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "inline-block", "p-6", "rounded-full", "bg-primary-light", "text-primary", "mx-auto"], ["size", "48px", 3, "icon"], [1, "headline", "my-6"], [1, "body-1"], [1, "body-2"], [1, "display-2", "font-bold", "my-6"], [1, "text-secondary", "headline", "align-top"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "rounded-full", "max-w-full", "w-200"]],
      template: function HelpCenterPricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Pricing & Plans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Simple, transparent pricing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "ic-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Basic Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "10GB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Storage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "PURCHASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "ic-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Premium Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "1TB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Storage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "59");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "PURCHASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "ic-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Enterprise Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Unlimited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Unlimited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Unlimited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Storage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Dedicated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "699");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "PURCHASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icBeenhere);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icStars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icBusinessCenter);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvaGVscC1jZW50ZXIvaGVscC1jZW50ZXItcHJpY2luZy9oZWxwLWNlbnRlci1wcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterPricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-help-center-pricing',
          templateUrl: './help-center-pricing.component.html',
          styleUrls: ['./help-center-pricing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: HelpCenterPricingModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterPricingHelpCenterPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterPricingModule", function () {
      return HelpCenterPricingModule;
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


    var _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-center-pricing-routing.module */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing-routing.module.ts");
    /* harmony import */


    var _help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help-center-pricing.component */
    "./src/app/pages/apps/help-center/help-center-pricing/help-center-pricing.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var HelpCenterPricingModule = function HelpCenterPricingModule() {
      _classCallCheck(this, HelpCenterPricingModule);
    };

    HelpCenterPricingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HelpCenterPricingModule
    });
    HelpCenterPricingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HelpCenterPricingModule_Factory(t) {
        return new (t || HelpCenterPricingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterPricingRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HelpCenterPricingModule, {
        declarations: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterPricingRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]],
        exports: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterPricingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingComponent"]],
          exports: [_help_center_pricing_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterPricingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterPricingRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=help-center-pricing-help-center-pricing-module-es5.js.map