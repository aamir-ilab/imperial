function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372"], {
  /***/
  "./src/@vex/components/page-layout/page-layout-content.directive.ts":
  /*!**************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: PageLayoutContentDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function () {
      return PageLayoutContentDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageLayoutContentDirective = function PageLayoutContentDirective() {
      _classCallCheck(this, PageLayoutContentDirective);
    };

    PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) {
      return new (t || PageLayoutContentDirective)();
    };

    PageLayoutContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PageLayoutContentDirective,
      selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]],
      hostAttrs: [1, "vex-page-layout-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[vexPageLayoutContent],vex-page-layout-content',
          host: {
            "class": 'vex-page-layout-content'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/page-layout/page-layout-header.directive.ts":
  /*!*************************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
    \*************************************************************************/

  /*! exports provided: PageLayoutHeaderDirective */

  /***/
  function srcVexComponentsPageLayoutPageLayoutHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function () {
      return PageLayoutHeaderDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageLayoutHeaderDirective = function PageLayoutHeaderDirective() {
      _classCallCheck(this, PageLayoutHeaderDirective);
    };

    PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) {
      return new (t || PageLayoutHeaderDirective)();
    };

    PageLayoutHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PageLayoutHeaderDirective,
      selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]],
      hostAttrs: [1, "vex-page-layout-header"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[vexPageLayoutHeader],vex-page-layout-header',
          host: {
            "class": 'vex-page-layout-header'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/page-layout/page-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageLayoutComponent */

  /***/
  function srcVexComponentsPageLayoutPageLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function () {
      return PageLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var PageLayoutComponent = /*#__PURE__*/function () {
      function PageLayoutComponent() {
        _classCallCheck(this, PageLayoutComponent);

        this.mode = 'simple';
      }

      _createClass(PageLayoutComponent, [{
        key: "isCard",
        get: function get() {
          return this.mode === 'card';
        }
      }, {
        key: "isSimple",
        get: function get() {
          return this.mode === 'simple';
        }
      }]);

      return PageLayoutComponent;
    }();

    PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) {
      return new (t || PageLayoutComponent)();
    };

    PageLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageLayoutComponent,
      selectors: [["vex-page-layout"]],
      hostAttrs: [1, "vex-page-layout"],
      hostVars: 4,
      hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
        }
      },
      inputs: {
        mode: "mode"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function PageLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQUNGOztBQUVBOztFQUVFLHlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-page-layout',
          template: '<ng-content></ng-content>',
          host: {
            "class": 'vex-page-layout'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styleUrls: ['./page-layout.component.scss']
        }]
      }], function () {
        return [];
      }, {
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.vex-page-layout-card']
        }],
        isSimple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.vex-page-layout-simple']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/page-layout/page-layout.module.ts":
  /*!***************************************************************!*\
    !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
    \***************************************************************/

  /*! exports provided: PageLayoutModule */

  /***/
  function srcVexComponentsPageLayoutPageLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function () {
      return PageLayoutModule;
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


    var _page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-layout-header.directive */
    "./src/@vex/components/page-layout/page-layout-header.directive.ts");
    /* harmony import */


    var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");

    var PageLayoutModule = function PageLayoutModule() {
      _classCallCheck(this, PageLayoutModule);
    };

    PageLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutModule
    });
    PageLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutModule_Factory(t) {
        return new (t || PageLayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutModule, {
        declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]],
          exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PageLayoutDemoComponent */

  /***/
  function srcAppPagesUiPageLayoutsPageLayoutDemoPageLayoutDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutDemoComponent", function () {
      return PageLayoutDemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [];
    };

    var PageLayoutDemoComponent = /*#__PURE__*/function () {
      function PageLayoutDemoComponent() {
        _classCallCheck(this, PageLayoutDemoComponent);
      }

      _createClass(PageLayoutDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageLayoutDemoComponent;
    }();

    PageLayoutDemoComponent.ɵfac = function PageLayoutDemoComponent_Factory(t) {
      return new (t || PageLayoutDemoComponent)();
    };

    PageLayoutDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageLayoutDemoComponent,
      selectors: [["vex-page-layout-demo"]],
      decls: 41,
      vars: 4,
      consts: [[1, "display-1", "m-0"], [1, "title", "mt-0", "text-secondary"], [3, "routerLink"], ["id", "tincidunt-veni-tellus-orci-aenean-consectetuer", 1, "headline"], ["src", "assets/img/demo/mountain-cinematic.jpg"], [1, "headline"]],
      template: function PageLayoutDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cinematic Mountain View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example Page Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "pretium metus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tincidunt veni tellus orci aenean consectetuer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Aliquam enim arcu ut. Vulputate pede nisi arcu ut nullam. Ac elit ut ullamcorper aenean dolor pede nec aliquam. Cum enim a. Ut dui phasellus cras. Vivamus pulvinar justo faucibus nec semper lorem nullam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ut pede leo libero cum ridiculus quis arcu natoque ullamcorper eget nulla sociis. Semper condimentum quam integer lorem. Amet ac ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "dis semper eget");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " a dictum ligula. Justo eu ut. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque. Ultricies dui vel ipsum eleifend dolor ante donec justo nullam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Eu ridiculus fringilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat nascetur vel. Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing. Aenean parturient eget quam. Leo vel lorem sociis phasellus arcu dolor. Dis donec eu pede.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Venenatis ante veni nullam ridiculus penatibus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "vidi eu consectetuer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " integer. Vulputate ipsum lorem nascetur rhoncus. Aliquam vitae elit blandit enim eget laoreet. Dapibus leo sociis quis nulla adipiscing amet integer sem ullamcorper in maecenas eu imperdiet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Maecenas tempus aenean nulla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "viverra neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " vel nec cras justo sapien condimentum ut varius. Blandit sem etiam vel nullam vulputate sociis amet varius dolor. Vitae a ut. Etiam rhoncus ante sit. Nisi nullam donec dui eu phasellus a elementum elit faucibus nec. Eros eu pulvinar pede luctus sit aenean lorem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvcGFnZS1sYXlvdXRzL3BhZ2UtbGF5b3V0LWRlbW8vcGFnZS1sYXlvdXQtZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL3BhZ2UtbGF5b3V0cy9wYWdlLWxheW91dC1kZW1vL3BhZ2UtbGF5b3V0LWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-page-layout-demo',
          templateUrl: './page-layout-demo.component.html',
          styleUrls: ['./page-layout-demo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PageLayoutDemoModule */

  /***/
  function srcAppPagesUiPageLayoutsPageLayoutDemoPageLayoutDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutDemoModule", function () {
      return PageLayoutDemoModule;
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


    var _page_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layout-demo.component */
    "./src/app/pages/ui/page-layouts/page-layout-demo/page-layout-demo.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PageLayoutDemoModule = function PageLayoutDemoModule() {
      _classCallCheck(this, PageLayoutDemoModule);
    };

    PageLayoutDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutDemoModule
    });
    PageLayoutDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutDemoModule_Factory(t) {
        return new (t || PageLayoutDemoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutDemoModule, {
        declarations: [_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_page_layout_demo_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~card-page-layout-card-large-header-page-layout-card-large-header-module~card-page-layout-car~561a5372-es5.js.map