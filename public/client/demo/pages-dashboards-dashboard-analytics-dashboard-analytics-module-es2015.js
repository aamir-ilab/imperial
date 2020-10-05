(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboards-dashboard-analytics-dashboard-analytics-module"],{

/***/ "./src/@vex/components/page-layout/page-layout-content.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/*! exports provided: PageLayoutContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function() { return PageLayoutContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageLayoutContentDirective {
    constructor() { }
}
PageLayoutContentDirective.ɵfac = function PageLayoutContentDirective_Factory(t) { return new (t || PageLayoutContentDirective)(); };
PageLayoutContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutContentDirective, selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]], hostAttrs: [1, "vex-page-layout-content"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[vexPageLayoutContent],vex-page-layout-content',
                host: {
                    class: 'vex-page-layout-content'
                }
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-header.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-header.directive.ts ***!
  \*************************************************************************/
/*! exports provided: PageLayoutHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutHeaderDirective", function() { return PageLayoutHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageLayoutHeaderDirective {
    constructor() { }
}
PageLayoutHeaderDirective.ɵfac = function PageLayoutHeaderDirective_Factory(t) { return new (t || PageLayoutHeaderDirective)(); };
PageLayoutHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageLayoutHeaderDirective, selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]], hostAttrs: [1, "vex-page-layout-header"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[vexPageLayoutHeader],vex-page-layout-header',
                host: {
                    class: 'vex-page-layout-header'
                }
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class PageLayoutComponent {
    constructor() {
        this.mode = 'simple';
    }
    get isCard() {
        return this.mode === 'card';
    }
    get isSimple() {
        return this.mode === 'simple';
    }
}
PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) { return new (t || PageLayoutComponent)(); };
PageLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutComponent, selectors: [["vex-page-layout"]], hostAttrs: [1, "vex-page-layout"], hostVars: 4, hostBindings: function PageLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
    } }, inputs: { mode: "mode" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function PageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-bottom: var(--padding-gutter);\n  padding-top: var(--padding-gutter);\n}\n\n.vex-page-layout-card {\n  padding-bottom: var(--padding);\n}\n\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--page-layout-toolbar-height) * -1);\n  padding-bottom: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--page-layout-toolbar-height);\n}\n\n.vex-page-layout-card .vex-page-layout-content > * > .mat-tab-group .mat-tab-label.mat-tab-label-active,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label.mat-tab-label-active {\n  opacity: 1;\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--color-primary));\n  color: rgb(var(--color-primary-contrast));\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  place-content: center flex-start;\n}\n\n.vex-page-layout-header .vex-breadcrumb {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 0.5;\n}\n\n.vex-page-layout-header .vex-breadcrumb:hover {\n  color: rgb(var(--color-primary-contrast));\n  opacity: 1;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7RUFDQSxpREFBQTtBQUNGOztBQUVBOztFQUVFLHlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZleC1wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LXNpbXBsZSAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gKiA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUsXG4udmV4LXBhZ2UtbGF5b3V0LWNhcmQgLnZleC1wYWdlLWxheW91dC1jb250ZW50ID4gLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tcGFnZS1sYXlvdXQtaGVhZGVyLWhlaWdodCkgLSB2YXIoLS1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYiB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIC52ZXgtYnJlYWRjcnVtYjpob3ZlciB7XG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctZ3V0dGVyKTtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-page-layout',
                template: '<ng-content></ng-content>',
                host: {
                    class: 'vex-page-layout'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styleUrls: ['./page-layout.component.scss']
            }]
    }], function () { return []; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.vex-page-layout-card']
        }], isSimple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.vex-page-layout-simple']
        }] }); })();


/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: PageLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function() { return PageLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-header.directive */ "./src/@vex/components/page-layout/page-layout-header.directive.ts");
/* harmony import */ var _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");






class PageLayoutModule {
}
PageLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutModule });
PageLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutModule_Factory(t) { return new (t || PageLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutModule, { declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]],
                exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _page_layout_header_directive__WEBPACK_IMPORTED_MODULE_3__["PageLayoutHeaderDirective"], _page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DashboardAnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsRoutingModule", function() { return DashboardAnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-analytics.component */ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts");





const routes = [
    {
        path: '',
        component: _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_2__["DashboardAnalyticsComponent"]
    }
];
class DashboardAnalyticsRoutingModule {
}
DashboardAnalyticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsRoutingModule });
DashboardAnalyticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardAnalyticsRoutingModule_Factory(t) { return new (t || DashboardAnalyticsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardAnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardAnalyticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsComponent", function() { return DashboardAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-group */ "./node_modules/@iconify/icons-ic/twotone-group.js");
/* harmony import */ var _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-pageview */ "./node_modules/@iconify/icons-ic/twotone-pageview.js");
/* harmony import */ var _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-cloud-off */ "./node_modules/@iconify/icons-ic/twotone-cloud-off.js");
/* harmony import */ var _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-timer */ "./node_modules/@iconify/icons-ic/twotone-timer.js");
/* harmony import */ var _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.directive */ "./src/@vex/directives/container/container.directive.ts");
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component */ "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts");
/* harmony import */ var _vex_components_widgets_widget_table_widget_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-table/widget-table.component */ "./src/@vex/components/widgets/widget-table/widget-table.component.ts");














class DashboardAnalyticsComponent {
    constructor(cd, authService, router) {
        this.cd = cd;
        this.authService = authService;
        this.router = router;
        this.tableColumns = [
            {
                label: 'Role',
                property: 'role',
                type: 'text'
            },
            {
                label: 'Client',
                property: 'client',
                type: 'text',
                cssClasses: ['font-medium']
            },
            {
                label: 'Start Time',
                property: 'startTime',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: 'End Time',
                property: 'endTime',
                type: 'text',
                cssClasses: ['text-secondary']
            },
            {
                label: 'Status',
                property: 'statusStr',
                type: 'button',
                cssClasses: ['text-secondary']
            }
        ];
        // series: ApexAxisChartSeries = [{
        //   name: 'Subscribers',
        //   data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44]
        // }];
        // userSessionsSeries: ApexAxisChartSeries = [
        //   {
        //     name: 'Users',
        //     data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60]
        //   },
        //   {
        //     name: 'Sessions',
        //     data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50]
        //   },
        // ];
        // salesSeries: ApexAxisChartSeries = [{
        //   name: 'Sales',
        //   data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87]
        // }];
        // pageViewsSeries: ApexAxisChartSeries = [{
        //   name: 'Page Views',
        //   data: [405, 800, 200, 600, 105, 788, 600, 204]
        // }];
        // uniqueUsersSeries: ApexAxisChartSeries = [{
        //   name: 'Unique Users',
        //   data: [356, 806, 600, 754, 432, 854, 555, 1004]
        // }];
        // uniqueUsersOptions = defaultChartOptions({
        //   chart: {
        //     type: 'area',
        //     height: 100
        //   },
        //   colors: ['#ff9800']
        // });
        this.icGroup = _iconify_icons_ic_twotone_group__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icPageView = _iconify_icons_ic_twotone_pageview__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icCloudOff = _iconify_icons_ic_twotone_cloud_off__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icTimer = _iconify_icons_ic_twotone_timer__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_5___default.a;
    }
    ngOnInit() {
        if (!this.authService.workerJobInfo)
            this.authService.setCurrentWorkerJob();
        this.tableData = this.authService.workerJobInfo;
        console.log(this.tableData);
        this.completedShifts = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;
        this.totalHours = 0;
        console.log('----------------------');
        console.log(this.completedShifts);
        console.log(this.totalHours);
        console.log(this.tableData);
        this.tableData.filter((obj) => { if (obj.statusStr == 'Completed' || obj.statusStr == 'Submitted')
            this.totalHours += parseInt(obj.endTime) - parseInt(obj.startTime); });
        // this.totalHours = this.tableData.filter((obj) => obj.statusStr == 'Completed').length;
        setTimeout(() => {
            const temp = [
                {
                    name: 'Subscribers',
                    data: [55, 213, 55, 0, 213, 55, 33, 55]
                },
                {
                    name: ''
                }
            ];
        }, 3000);
    }
}
DashboardAnalyticsComponent.ɵfac = function DashboardAnalyticsComponent_Factory(t) { return new (t || DashboardAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DashboardAnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardAnalyticsComponent, selectors: [["vex-dashboard-analytics"]], decls: 5, vars: 9, consts: [["current", "Dashboard"], ["gdColumns", "1fr 1fr", "gdColumns.lt-md", "1fr 1fr", "gdColumns.lt-sm", "1fr", "gdGap", "16px", "vexContainer", "", 1, "p-gutter"], ["iconClass", "text-primary bg-primary-light", "gdColumn.lt-sm", "1", "label", "Completed shifts", 3, "icon", "change", "value"], ["iconClass", "text-teal bg-teal-light", "gdColumn.lt-sm", "1", "label", "Total Hours", 3, "icon", "change", "value"], ["gdColumn.lt-md", "1", "gdColumn", "1 / -1", "gdColumn.lt-sm", "1", 1, "w-full", "overflow-auto", "shadow", 3, "columns", "data", "topic"]], template: function DashboardAnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-widget-quick-value-center", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "vex-widget-quick-value-center", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vex-widget-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icGroup)("change", 124.4)("value", ctx.completedShifts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icTimer)("change", 34.5)("value", ctx.totalHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.tableColumns)("data", ctx.tableData)("topic", "My Shifts");
    } }, directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["SecondaryToolbarComponent"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__["ɵgrid_privateba"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__["ContainerDirective"], _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_11__["WidgetQuickValueCenterComponent"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__["ɵgrid_privateu"], _vex_components_widgets_widget_table_widget_table_component__WEBPACK_IMPORTED_MODULE_12__["WidgetTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZHMvZGFzaGJvYXJkLWFuYWx5dGljcy9kYXNoYm9hcmQtYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardAnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-dashboard-analytics',
                templateUrl: './dashboard-analytics.component.html',
                styleUrls: ['./dashboard-analytics.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.module.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsModule", function() { return DashboardAnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-analytics-routing.module */ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics-routing.module.ts");
/* harmony import */ var _dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-analytics.component */ "./src/app/pages/dashboards/dashboard-analytics/dashboard-analytics.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/chart/chart.module */ "./src/@vex/components/chart/chart.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module */ "./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module.ts");
/* harmony import */ var _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module */ "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts");
/* harmony import */ var _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module */ "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts");
/* harmony import */ var _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module */ "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-assistant/widget-assistant.module */ "./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts");
/* harmony import */ var _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module */ "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts");
/* harmony import */ var _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../@vex/components/widgets/widget-table/widget-table.module */ "./src/@vex/components/widgets/widget-table/widget-table.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");





















class DashboardAnalyticsModule {
}
DashboardAnalyticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardAnalyticsModule });
DashboardAnalyticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardAnalyticsModule_Factory(t) { return new (t || DashboardAnalyticsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardAnalyticsRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_7__["WidgetQuickLineChartModule"],
            _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__["WidgetQuickValueCenterModule"],
            _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_9__["WidgetQuickValueStartModule"],
            _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_10__["WidgetLargeGoalChartModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_12__["WidgetAssistantModule"],
            _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_13__["WidgetLargeChartModule"],
            _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_14__["WidgetTableModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_15__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__["PageLayoutModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardAnalyticsModule, { declarations: [_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAnalyticsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardAnalyticsRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_7__["WidgetQuickLineChartModule"],
        _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__["WidgetQuickValueCenterModule"],
        _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_9__["WidgetQuickValueStartModule"],
        _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_10__["WidgetLargeGoalChartModule"],
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
        _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_12__["WidgetAssistantModule"],
        _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_13__["WidgetLargeChartModule"],
        _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_14__["WidgetTableModule"],
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_15__["SecondaryToolbarModule"],
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__["PageLayoutModule"],
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardAnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAnalyticsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardAnalyticsRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _vex_components_chart_chart_module__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _vex_components_widgets_widget_quick_line_chart_widget_quick_line_chart_module__WEBPACK_IMPORTED_MODULE_7__["WidgetQuickLineChartModule"],
                    _vex_components_widgets_widget_quick_value_center_widget_quick_value_center_module__WEBPACK_IMPORTED_MODULE_8__["WidgetQuickValueCenterModule"],
                    _vex_components_widgets_widget_quick_value_start_widget_quick_value_start_module__WEBPACK_IMPORTED_MODULE_9__["WidgetQuickValueStartModule"],
                    _vex_components_widgets_widget_large_goal_chart_widget_large_goal_chart_module__WEBPACK_IMPORTED_MODULE_10__["WidgetLargeGoalChartModule"],
                    _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                    _vex_components_widgets_widget_assistant_widget_assistant_module__WEBPACK_IMPORTED_MODULE_12__["WidgetAssistantModule"],
                    _vex_components_widgets_widget_large_chart_widget_large_chart_module__WEBPACK_IMPORTED_MODULE_13__["WidgetLargeChartModule"],
                    _vex_components_widgets_widget_table_widget_table_module__WEBPACK_IMPORTED_MODULE_14__["WidgetTableModule"],
                    _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_15__["SecondaryToolbarModule"],
                    _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_18__["PageLayoutModule"],
                    _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-dashboards-dashboard-analytics-dashboard-analytics-module-es2015.js.map