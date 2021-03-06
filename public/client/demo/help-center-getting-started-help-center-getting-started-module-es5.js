function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-center-getting-started-help-center-getting-started-module"], {
  /***/
  "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started-routing.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: HelpCenterGettingStartedRoutingModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterGettingStartedHelpCenterGettingStartedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterGettingStartedRoutingModule", function () {
      return HelpCenterGettingStartedRoutingModule;
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


    var _help_center_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-center-getting-started.component */
    "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.component.ts");

    var routes = [{
      path: '',
      component: _help_center_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["HelpCenterGettingStartedComponent"]
    }];

    var HelpCenterGettingStartedRoutingModule = function HelpCenterGettingStartedRoutingModule() {
      _classCallCheck(this, HelpCenterGettingStartedRoutingModule);
    };

    HelpCenterGettingStartedRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HelpCenterGettingStartedRoutingModule
    });
    HelpCenterGettingStartedRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HelpCenterGettingStartedRoutingModule_Factory(t) {
        return new (t || HelpCenterGettingStartedRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HelpCenterGettingStartedRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterGettingStartedRoutingModule, [{
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
  "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: HelpCenterGettingStartedComponent */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterGettingStartedHelpCenterGettingStartedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterGettingStartedComponent", function () {
      return HelpCenterGettingStartedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    var HelpCenterGettingStartedComponent = /*#__PURE__*/function () {
      function HelpCenterGettingStartedComponent() {
        _classCallCheck(this, HelpCenterGettingStartedComponent);
      }

      _createClass(HelpCenterGettingStartedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpCenterGettingStartedComponent;
    }();

    HelpCenterGettingStartedComponent.??fac = function HelpCenterGettingStartedComponent_Factory(t) {
      return new (t || HelpCenterGettingStartedComponent)();
    };

    HelpCenterGettingStartedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HelpCenterGettingStartedComponent,
      selectors: [["vex-help-center-getting-started"]],
      decls: 94,
      vars: 2,
      consts: [[1, "bg-card", "py-16", "px-gutter"], [1, "display-1", "mt-12", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start stretch", "fxLayoutGap", "24px", 1, "my-12", "container"], ["fxFlex", "", "fxFlex.xs", "auto", 1, "card", "p-6"], [1, "headline", "mt-0", "mb-6"], ["displayMode", "flat"], [3, "expanded"]],
      template: function HelpCenterGettingStartedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Getting Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-accordion", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "1. Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "2. Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "She packed her seven versalia, put her initial into the belt and made herself on the way.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "3. Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "4. First Steps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "And if she hasn\u2019t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-accordion", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "1. Create your first project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-expansion-panel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "2. Configure your project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "She packed her seven versalia, put her initial into the belt and made herself on the way.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "3. Add new customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "4. Create your first invoice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "And if she hasn\u2019t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("expanded", true);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]],
      styles: [".mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  border-bottom: 1px solid var(--foreground-divider);\n  border-left: 1px solid var(--foreground-divider);\n  border-right: 1px solid var(--foreground-divider);\n  box-shadow: none;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]):first-of-type {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwcy9oZWxwLWNlbnRlci9oZWxwLWNlbnRlci1nZXR0aW5nLXN0YXJ0ZWQvaGVscC1jZW50ZXItZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcHBzL2hlbHAtY2VudGVyL2hlbHAtY2VudGVyLWdldHRpbmctc3RhcnRlZC9oZWxwLWNlbnRlci1nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterGettingStartedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-help-center-getting-started',
          templateUrl: './help-center-getting-started.component.html',
          styleUrls: ['./help-center-getting-started.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: HelpCenterGettingStartedModule */

  /***/
  function srcAppPagesAppsHelpCenterHelpCenterGettingStartedHelpCenterGettingStartedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpCenterGettingStartedModule", function () {
      return HelpCenterGettingStartedModule;
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


    var _help_center_getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-center-getting-started-routing.module */
    "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started-routing.module.ts");
    /* harmony import */


    var _help_center_getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help-center-getting-started.component */
    "./src/app/pages/apps/help-center/help-center-getting-started/help-center-getting-started.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var HelpCenterGettingStartedModule = function HelpCenterGettingStartedModule() {
      _classCallCheck(this, HelpCenterGettingStartedModule);
    };

    HelpCenterGettingStartedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HelpCenterGettingStartedModule
    });
    HelpCenterGettingStartedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HelpCenterGettingStartedModule_Factory(t) {
        return new (t || HelpCenterGettingStartedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterGettingStartedRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HelpCenterGettingStartedModule, {
        declarations: [_help_center_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterGettingStartedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterGettingStartedRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpCenterGettingStartedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_help_center_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterGettingStartedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _help_center_getting_started_routing_module__WEBPACK_IMPORTED_MODULE_2__["HelpCenterGettingStartedRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=help-center-getting-started-help-center-getting-started-module-es5.js.map