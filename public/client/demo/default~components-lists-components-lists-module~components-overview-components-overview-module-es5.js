function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-lists-components-lists-module~components-overview-components-overview-module"], {
  /***/
  "./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts ***!
    \*************************************************************************************************************************************/

  /*! exports provided: ComponentsOverviewListsComponent */

  /***/
  function srcAppPagesUiComponentsComponentsOverviewComponentsComponentsOverviewListsComponentsOverviewListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsOverviewListsComponent", function () {
      return ComponentsOverviewListsComponent;
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


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../@vex/components/highlight/highlight.directive */
    "./src/@vex/components/highlight/highlight.directive.ts");

    var ComponentsOverviewListsComponent = /*#__PURE__*/function () {
      function ComponentsOverviewListsComponent() {
        _classCallCheck(this, ComponentsOverviewListsComponent);

        this.listHTML = "<mat-list class=\"list mat-elevation-z1\">\n  <h3 mat-subheader>Contacts</h3>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/1.jpg\">\n    <h3 matLine>John</h3>\n    <p matLine>\n      <span>Brunch?</span>\n      <span class=\"subline\">-- Did you want to go on Sunday? I was thinking</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/2.jpg\">\n    <h3 matLine>Peter</h3>\n    <p matLine>\n      <span>Summer BBQ</span>\n      <span class=\"subline\">-- Wish I could come, but I have some special</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/3.jpg\">\n    <h3 matLine>Nancy</h3>\n    <p matLine>\n      <span>Oui oui</span>\n      <span class=\"subline\">-- Have you booked the Paris trip?</span>\n    </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Other</h3>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/4.jpg\">\n    <h3 matLine>Frank</h3>\n    <p matLine>\n      <span>Pretty decent!</span>\n      <span class=\"subline\">-- You look pretty... decent!</span>\n    </p>\n  </mat-list-item>\n  <mat-list-item>\n    <img mat-list-avatar src=\"assets/img/avatars/5.jpg\">\n    <h3 matLine>Donald</h3>\n    <p matLine>\n      <span>That's great!</span>\n      <span class=\"subline\">-- Great work mate!</span>\n    </p>\n  </mat-list-item>\n</mat-list>";
      }

      _createClass(ComponentsOverviewListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComponentsOverviewListsComponent;
    }();

    ComponentsOverviewListsComponent.??fac = function ComponentsOverviewListsComponent_Factory(t) {
      return new (t || ComponentsOverviewListsComponent)();
    };

    ComponentsOverviewListsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ComponentsOverviewListsComponent,
      selectors: [["vex-components-overview-lists"]],
      decls: 83,
      vars: 1,
      consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", 1, "card"], [1, "p-6"], [1, "card", "max-w-full", "overflow-hidden", "w-300"], ["mat-subheader", ""], ["mat-list-avatar", "", "src", "assets/img/avatars/1.jpg"], ["matLine", ""], [1, "text-secondary"], ["mat-list-avatar", "", "src", "assets/img/avatars/2.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/3.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/4.jpg"], ["mat-list-avatar", "", "src", "assets/img/avatars/5.jpg"], ["fxFlex", "", 1, "border-l"], [1, "title", "mt-0", "mb-4"], [1, "body-2", "text-secondary", "m-0"], [1, "vex-tabs"], ["label", "DESCRIPTION"], [1, "semi-bold"], ["label", "SOURCE CODE"], [3, "vexHighlight"]],
      template: function ComponentsOverviewListsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Brunch?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "-- Did you want to go on Sunday? I was thinking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Peter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Summer BBQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "-- Wish I could come, but I have some special");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Nancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Oui oui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "-- Have you booked the Paris trip?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Frank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Pretty decent!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "-- You look pretty... decent!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Donald");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "That's great!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "-- Great work mate!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "<mat-list>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "mat-tab-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. They are optimized for reading comprehension while differentiating either between similar data types, or qualities within a single data type. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "List alternatives:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "If more than three lines of text need to be shown in list tiles, use cards instead ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "If the primary distinguishing content consists of images, use a grid list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Density");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "When the mouse and keyboard are the primary input methods, measurements may be condensed to accommodate denser layouts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "mat-tab", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "code", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("vexHighlight", ctx.listHTML);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _vex_components_highlight_highlight_directive__WEBPACK_IMPORTED_MODULE_6__["HighlightDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy9jb21wb25lbnRzL2NvbXBvbmVudHMtb3ZlcnZpZXctbGlzdHMvY29tcG9uZW50cy1vdmVydmlldy1saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentsOverviewListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-components-overview-lists',
          templateUrl: './components-overview-lists.component.html',
          styleUrls: ['./components-overview-lists.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.module.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.module.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: ComponentsOverviewListsModule */

  /***/
  function srcAppPagesUiComponentsComponentsOverviewComponentsComponentsOverviewListsComponentsOverviewListsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsOverviewListsModule", function () {
      return ComponentsOverviewListsModule;
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


    var _components_overview_lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-overview-lists.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../@vex/components/highlight/highlight.module */
    "./src/@vex/components/highlight/highlight.module.ts");

    var ComponentsOverviewListsModule = function ComponentsOverviewListsModule() {
      _classCallCheck(this, ComponentsOverviewListsModule);
    };

    ComponentsOverviewListsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ComponentsOverviewListsModule
    });
    ComponentsOverviewListsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ComponentsOverviewListsModule_Factory(t) {
        return new (t || ComponentsOverviewListsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComponentsOverviewListsModule, {
        declarations: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewListsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"]],
        exports: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewListsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentsOverviewListsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewListsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _vex_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"]],
          exports: [_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewListsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~components-lists-components-lists-module~components-overview-components-overview-module-es5.js.map