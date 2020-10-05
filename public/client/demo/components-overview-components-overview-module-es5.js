function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-overview-components-overview-module"], {
  /***/
  "./src/app/pages/ui/components/components-overview/components-overview-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-overview/components-overview-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ComponentsOverviewRoutingModule */

  /***/
  function srcAppPagesUiComponentsComponentsOverviewComponentsOverviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsOverviewRoutingModule", function () {
      return ComponentsOverviewRoutingModule;
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


    var _components_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-overview.component */
    "./src/app/pages/ui/components/components-overview/components-overview.component.ts");

    var routes = [{
      path: '',
      component: _components_overview_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewComponent"],
      data: {
        toolbarShadowEnabled: true
      }
    }];

    var ComponentsOverviewRoutingModule = function ComponentsOverviewRoutingModule() {
      _classCallCheck(this, ComponentsOverviewRoutingModule);
    };

    ComponentsOverviewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsOverviewRoutingModule
    });
    ComponentsOverviewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsOverviewRoutingModule_Factory(t) {
        return new (t || ComponentsOverviewRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsOverviewRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsOverviewRoutingModule, [{
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
  "./src/app/pages/ui/components/components-overview/components-overview.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-overview/components-overview.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ComponentsOverviewComponent */

  /***/
  function srcAppPagesUiComponentsComponentsOverviewComponentsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsOverviewComponent", function () {
      return ComponentsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/components-overview-snack-bar/components-overview-snack-bar.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.component.ts");
    /* harmony import */


    var _components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/components-overview-input/components-overview-input.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-input/components-overview-input.component.ts");
    /* harmony import */


    var _components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/components-overview-menu/components-overview-menu.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-menu/components-overview-menu.component.ts");
    /* harmony import */


    var _components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/components-overview-lists/components-overview-lists.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.component.ts");
    /* harmony import */


    var _components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/components-overview-buttons/components-overview-buttons.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.component.ts");
    /* harmony import */


    var _components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/components-overview-grid-list/components-overview-grid-list.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-grid-list/components-overview-grid-list.component.ts");
    /* harmony import */


    var _components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/components-overview-progress/components-overview-progress.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-progress/components-overview-progress.component.ts");
    /* harmony import */


    var _components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/components-overview-progress-spinner/components-overview-progress-spinner.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.component.ts");
    /* harmony import */


    var _components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components-overview-tooltip/components-overview-tooltip.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-tooltip/components-overview-tooltip.component.ts");
    /* harmony import */


    var _components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/components-overview-slider/components-overview-slider.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slider/components-overview-slider.component.ts");
    /* harmony import */


    var _components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/components-overview-dialogs/components-overview-dialogs.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.component.ts");
    /* harmony import */


    var _components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/components-overview-checkbox/components-overview-checkbox.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-checkbox/components-overview-checkbox.component.ts");
    /* harmony import */


    var _components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/components-overview-cards/components-overview-cards.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.component.ts");
    /* harmony import */


    var _components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/components-overview-slide-toggle/components-overview-slide-toggle.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.component.ts");
    /* harmony import */


    var _components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/components-overview-autocomplete/components-overview-autocomplete.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.component.ts");
    /* harmony import */


    var _components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/components-overview-radio/components-overview-radio.component */
    "./src/app/pages/ui/components/components-overview/components/components-overview-radio/components-overview-radio.component.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../../@vex/services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout-header.directive */
    "./src/@vex/components/page-layout/page-layout-header.directive.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = function _c0() {
      return ["Components", "Overview"];
    };

    var ComponentsOverviewComponent = /*#__PURE__*/function () {
      function ComponentsOverviewComponent(layoutService, scrollDispatcher, elem) {
        _classCallCheck(this, ComponentsOverviewComponent);

        this.layoutService = layoutService;
        this.scrollDispatcher = scrollDispatcher;
        this.elem = elem;
        this.menuWidth = '250px';
      }

      _createClass(ComponentsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollTo",
        value: function scrollTo(elem) {
          this.scrollDispatcher.getAncestorScrollContainers(this.elem)[0].scrollTo({
            top: this[elem].nativeElement.offsetTop - 24,
            behavior: 'smooth'
          });
        }
      }]);

      return ComponentsOverviewComponent;
    }();

    ComponentsOverviewComponent.ɵfac = function ComponentsOverviewComponent_Factory(t) {
      return new (t || ComponentsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vex_services_layout_service__WEBPACK_IMPORTED_MODULE_20__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ComponentsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentsOverviewComponent,
      selectors: [["vex-components-overview"]],
      viewQuery: function ComponentsOverviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewAutocompleteComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsOverviewButtonsComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewCardsComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewDialogsComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsOverviewGridListComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewInputComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewListsComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewMenuComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewProgressComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewProgressSpinnerComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewRadioComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewSliderComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewSlideToggleComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["ComponentsOverviewSnackBarComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewTooltipComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttons = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cards = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogs = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lists = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progress = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressSpinner = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.radio = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slideToggle = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.snackBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
        }
      },
      decls: 76,
      vars: 38,
      consts: [["mode", "simple"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["vexContainer", ""], [1, "title", "mt-0", "mb-1"], [3, "crumbs"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "24px", "vexContainer", ""], ["fxHide", "", "fxLayout", "column", "fxShow.gt-sm", "", 1, "sticky", "top-6", 3, "fxFlex"], ["fxFlex", "grow", 1, "navigation"], ["matSubheader", ""], ["matRipple", "", 1, "cursor-pointer", 3, "click"], ["matLine", ""], ["fxLayout", "column", "fxLayoutGap", "24px", 1, "max-w-full"]],
      template: function ComponentsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-page-layout-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "vex-breadcrumbs", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "vex-page-layout-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_11_listener() {
            return ctx.scrollTo("autocomplete");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_14_listener() {
            return ctx.scrollTo("buttons");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_17_listener() {
            return ctx.scrollTo("cards");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_20_listener() {
            return ctx.scrollTo("checkbox");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_23_listener() {
            return ctx.scrollTo("dialogs");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dialog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_26_listener() {
            return ctx.scrollTo("gridList");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Grid List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_29_listener() {
            return ctx.scrollTo("input");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_32_listener() {
            return ctx.scrollTo("lists");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_35_listener() {
            return ctx.scrollTo("menu");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_38_listener() {
            return ctx.scrollTo("progress");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_41_listener() {
            return ctx.scrollTo("progressSpinner");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Progress Spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_44_listener() {
            return ctx.scrollTo("radio");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_47_listener() {
            return ctx.scrollTo("slider");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_50_listener() {
            return ctx.scrollTo("slideToggle");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Slide Toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_53_listener() {
            return ctx.scrollTo("snackBar");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Snack Bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentsOverviewComponent_Template_mat_list_item_click_56_listener() {
            return ctx.scrollTo("tooltip");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "vex-components-overview-autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "vex-components-overview-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "vex-components-overview-cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "vex-components-overview-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "vex-components-overview-dialogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "vex-components-overview-grid-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "vex-components-overview-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "vex-components-overview-lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "vex-components-overview-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "vex-components-overview-progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "vex-components-overview-progress-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "vex-components-overview-radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "vex-components-overview-slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "vex-components-overview-slide-toggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "vex-components-overview-snack-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "vex-components-overview-tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined)("fxFlex", ctx.menuWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);
        }
      },
      directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_22__["PageLayoutComponent"], _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_23__["PageLayoutHeaderDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutAlignDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_25__["ContainerDirective"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_26__["BreadcrumbsComponent"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_27__["PageLayoutContentDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultLayoutGapDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatLine"], _components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewAutocompleteComponent"], _components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsOverviewButtonsComponent"], _components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewCardsComponent"], _components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxComponent"], _components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewDialogsComponent"], _components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsOverviewGridListComponent"], _components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewInputComponent"], _components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewListsComponent"], _components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewMenuComponent"], _components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewProgressComponent"], _components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewProgressSpinnerComponent"], _components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewRadioComponent"], _components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewSliderComponent"], _components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewSlideToggleComponent"], _components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["ComponentsOverviewSnackBarComponent"], _components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewTooltipComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1vdmVydmlldy9jb21wb25lbnRzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__["stagger80ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_17__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_18__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-components-overview',
          templateUrl: './components-overview.component.html',
          styleUrls: ['./components-overview.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__["stagger80ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_17__["fadeInRight400ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_18__["fadeInUp400ms"]]
        }]
      }], function () {
        return [{
          type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_20__["LayoutService"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_autocomplete_components_overview_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewAutocompleteComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        buttons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_buttons_components_overview_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsOverviewButtonsComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        cards: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_cards_components_overview_cards_component__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewCardsComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        checkbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_checkbox_components_overview_checkbox_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        dialogs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewDialogsComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        gridList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_grid_list_components_overview_grid_list_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsOverviewGridListComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_input_components_overview_input_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewInputComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_lists_components_overview_lists_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewListsComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        menu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_menu_components_overview_menu_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewMenuComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        progress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_progress_components_overview_progress_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsOverviewProgressComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        progressSpinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_progress_spinner_components_overview_progress_spinner_component__WEBPACK_IMPORTED_MODULE_8__["ComponentsOverviewProgressSpinnerComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        radio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_radio_components_overview_radio_component__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewRadioComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_slider_components_overview_slider_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewSliderComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        slideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_slide_toggle_components_overview_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewSlideToggleComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        snackBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_snack_bar_components_overview_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["ComponentsOverviewSnackBarComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        tooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_components_components_overview_tooltip_components_overview_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewTooltipComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/components/components-overview/components-overview.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/ui/components/components-overview/components-overview.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ComponentsOverviewModule */

  /***/
  function srcAppPagesUiComponentsComponentsOverviewComponentsOverviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsOverviewModule", function () {
      return ComponentsOverviewModule;
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


    var _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components-overview-routing.module */
    "./src/app/pages/ui/components/components-overview/components-overview-routing.module.ts");
    /* harmony import */


    var _components_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components-overview.component */
    "./src/app/pages/ui/components/components-overview/components-overview.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components-overview-autocomplete/components-overview-autocomplete.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module.ts");
    /* harmony import */


    var _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/components-overview-buttons/components-overview-buttons.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-buttons/components-overview-buttons.module.ts");
    /* harmony import */


    var _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/components-overview-cards/components-overview-cards.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-cards/components-overview-cards.module.ts");
    /* harmony import */


    var _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/components-overview-checkbox/components-overview-checkbox.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-checkbox/components-overview-checkbox.module.ts");
    /* harmony import */


    var _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/components-overview-dialogs/components-overview-dialogs.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.module.ts");
    /* harmony import */


    var _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/components-overview-grid-list/components-overview-grid-list.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-grid-list/components-overview-grid-list.module.ts");
    /* harmony import */


    var _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/components-overview-input/components-overview-input.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-input/components-overview-input.module.ts");
    /* harmony import */


    var _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/components-overview-lists/components-overview-lists.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-lists/components-overview-lists.module.ts");
    /* harmony import */


    var _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/components-overview-menu/components-overview-menu.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-menu/components-overview-menu.module.ts");
    /* harmony import */


    var _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/components-overview-progress/components-overview-progress.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-progress/components-overview-progress.module.ts");
    /* harmony import */


    var _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/components-overview-progress-spinner/components-overview-progress-spinner.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module.ts");
    /* harmony import */


    var _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/components-overview-radio/components-overview-radio.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-radio/components-overview-radio.module.ts");
    /* harmony import */


    var _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/components-overview-slider/components-overview-slider.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slider/components-overview-slider.module.ts");
    /* harmony import */


    var _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/components-overview-slide-toggle/components-overview-slide-toggle.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-slide-toggle/components-overview-slide-toggle.module.ts");
    /* harmony import */


    var _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/components-overview-snack-bar/components-overview-snack-bar.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-snack-bar/components-overview-snack-bar.module.ts");
    /* harmony import */


    var _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/components-overview-tooltip/components-overview-tooltip.module */
    "./src/app/pages/ui/components/components-overview/components/components-overview-tooltip/components-overview-tooltip.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ComponentsOverviewModule = function ComponentsOverviewModule() {
      _classCallCheck(this, ComponentsOverviewModule);
    };

    ComponentsOverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsOverviewModule
    });
    ComponentsOverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsOverviewModule_Factory(t) {
        return new (t || ComponentsOverviewModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewRoutingModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewAutocompleteModule"], _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewButtonsModule"], _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewCardsModule"], _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxModule"], _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewDialogsModule"], _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewGridListModule"], _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewInputModule"], _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewListsModule"], _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsOverviewMenuModule"], _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsOverviewProgressModule"], _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_19__["ComponentsOverviewProgressSpinnerModule"], _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsOverviewRadioModule"], _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsOverviewSliderModule"], _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_22__["ComponentsOverviewSlideToggleModule"], _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_23__["ComponentsOverviewSnackBarModule"], _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_24__["ComponentsOverviewTooltipModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_25__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_26__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsOverviewModule, {
        declarations: [_components_overview_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewRoutingModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewAutocompleteModule"], _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewButtonsModule"], _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewCardsModule"], _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxModule"], _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewDialogsModule"], _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewGridListModule"], _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewInputModule"], _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewListsModule"], _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsOverviewMenuModule"], _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsOverviewProgressModule"], _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_19__["ComponentsOverviewProgressSpinnerModule"], _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsOverviewRadioModule"], _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsOverviewSliderModule"], _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_22__["ComponentsOverviewSlideToggleModule"], _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_23__["ComponentsOverviewSnackBarModule"], _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_24__["ComponentsOverviewTooltipModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_25__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_26__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsOverviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_overview_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsOverviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsOverviewRoutingModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["SecondaryToolbarModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _components_components_overview_autocomplete_components_overview_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsOverviewAutocompleteModule"], _components_components_overview_buttons_components_overview_buttons_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewButtonsModule"], _components_components_overview_cards_components_overview_cards_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsOverviewCardsModule"], _components_components_overview_checkbox_components_overview_checkbox_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsOverviewCheckboxModule"], _components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsOverviewDialogsModule"], _components_components_overview_grid_list_components_overview_grid_list_module__WEBPACK_IMPORTED_MODULE_14__["ComponentsOverviewGridListModule"], _components_components_overview_input_components_overview_input_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsOverviewInputModule"], _components_components_overview_lists_components_overview_lists_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsOverviewListsModule"], _components_components_overview_menu_components_overview_menu_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsOverviewMenuModule"], _components_components_overview_progress_components_overview_progress_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsOverviewProgressModule"], _components_components_overview_progress_spinner_components_overview_progress_spinner_module__WEBPACK_IMPORTED_MODULE_19__["ComponentsOverviewProgressSpinnerModule"], _components_components_overview_radio_components_overview_radio_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsOverviewRadioModule"], _components_components_overview_slider_components_overview_slider_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsOverviewSliderModule"], _components_components_overview_slide_toggle_components_overview_slide_toggle_module__WEBPACK_IMPORTED_MODULE_22__["ComponentsOverviewSlideToggleModule"], _components_components_overview_snack_bar_components_overview_snack_bar_module__WEBPACK_IMPORTED_MODULE_23__["ComponentsOverviewSnackBarModule"], _components_components_overview_tooltip_components_overview_tooltip_module__WEBPACK_IMPORTED_MODULE_24__["ComponentsOverviewTooltipModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_25__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_26__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-overview-components-overview-module-es5.js.map