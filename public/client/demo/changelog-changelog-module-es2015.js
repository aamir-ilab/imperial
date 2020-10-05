(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changelog-changelog-module"],{

/***/ "./src/app/pages/documentation/changelog/changelog-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChangelogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogRoutingModule", function() { return ChangelogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog.component */ "./src/app/pages/documentation/changelog/changelog.component.ts");





const routes = [
    {
        path: '',
        component: _changelog_component__WEBPACK_IMPORTED_MODULE_2__["ChangelogComponent"]
    }
];
class ChangelogRoutingModule {
}
ChangelogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChangelogRoutingModule });
ChangelogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChangelogRoutingModule_Factory(t) { return new (t || ChangelogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangelogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.component */ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.directive */ "./src/@vex/directives/container/container.directive.ts");
/* harmony import */ var ngx_showdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-showdown */ "./node_modules/ngx-showdown/__ivy_ngcc__/fesm2015/ngx-showdown.js");













const _c0 = function () { return ["Documentation", "Changelog"]; };
class ChangelogComponent {
    constructor() {
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_1___default.a;
    }
    ngOnInit() {
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
ChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["vex-changelog"]], decls: 8, vars: 3, consts: [["current", "Documentation"], ["fxFlex", "auto", 3, "crumbs"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ml-2"], [3, "icIcon"], ["vexContainer", ""], [1, "card", "p-gutter", "relative"], ["src", "/CHANGELOG.md"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "vex-page-layout-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "showdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconDirective"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_10__["ContainerDirective"], ngx_showdown__WEBPACK_IMPORTED_MODULE_11__["ShowdownComponent"], ngx_showdown__WEBPACK_IMPORTED_MODULE_11__["SourceDirective"]], styles: ["vex-changelog vex-secondary-toolbar h1,   vex-changelog vex-secondary-toolbar h2 {\n  border: none;\n  margin: 0;\n}\n\n  vex-changelog ol,   vex-changelog ul {\n  list-style: disc;\n  margin-left: 1rem;\n}\n\n  vex-changelog showdown a {\n  color: rgb(var(--color-primary));\n}\n\n  vex-changelog showdown > *:first-child {\n  margin-top: 0 !important;\n}\n\n  vex-changelog h1,   vex-changelog h2 {\n  border-bottom: 1px solid var(--foreground-divider);\n  padding-bottom: 0.3em;\n}\n\n  vex-changelog h1,   vex-changelog h2,   vex-changelog h3,   vex-changelog h4,   vex-changelog h5,   vex-changelog h6 {\n  font-weight: var(--font-weight-medium) !important;\n  margin-bottom: var(--padding-16);\n  margin-top: 32px;\n}\n\n  vex-changelog p,   vex-changelog ul,   vex-changelog li {\n  font-size: 16px !important;\n  line-height: 1.5 !important;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n  vex-changelog strong {\n  font-weight: 500;\n}\n\n  vex-changelog code.typescript {\n  display: block;\n}\n\n  vex-changelog table {\n  border: 1px solid var(--foreground-divider);\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 15px;\n}\n\n  vex-changelog table tr {\n  background-color: var(--background-card);\n  border-top: 1px solid var(--foreground-divider);\n}\n\n  vex-changelog table tr:nth-child(2n) {\n  background-color: var(--background-app-bar);\n}\n\n  vex-changelog table td,   vex-changelog table th {\n  border-left: 1px solid var(--foreground-divider);\n  padding: var(--padding-12) var(--padding-16);\n}\n\n  vex-changelog table td:first-child,   vex-changelog table th:first-child {\n  border-left: none;\n}\n\n  vex-changelog table th {\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRhdGlvbi9jaGFuZ2Vsb2cvY2hhbmdlbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaURBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsK0NBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnREFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50YXRpb24vY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHZleC1zZWNvbmRhcnktdG9vbGJhciBoMSwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdmV4LXNlY29uZGFyeS10b29sYmFyIGgyIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIG9sLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzaG93ZG93biBhIHtcbiAgY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHNob3dkb3duID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDEsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGgyLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoMywgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgaDQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIGg1LCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBoNiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBwLCA6Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB1bCwgOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgbGkge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBzdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyBjb2RlLnR5cGVzY3JpcHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG46Om5nLWRlZXAgdmV4LWNoYW5nZWxvZyB0YWJsZSB0cjpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nLTE2KTtcbn1cblxuOjpuZy1kZWVwIHZleC1jaGFuZ2Vsb2cgdGFibGUgdGQ6Zmlyc3QtY2hpbGQsIDo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB2ZXgtY2hhbmdlbG9nIHRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-changelog',
                templateUrl: './changelog.component.html',
                styleUrls: ['./changelog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/documentation/changelog/changelog.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/documentation/changelog/changelog.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangelogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogModule", function() { return ChangelogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog-routing.module */ "./src/app/pages/documentation/changelog/changelog-routing.module.ts");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog.component */ "./src/app/pages/documentation/changelog/changelog.component.ts");
/* harmony import */ var _markdown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../markdown.module */ "./src/app/pages/documentation/markdown.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");














class ChangelogModule {
}
ChangelogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChangelogModule });
ChangelogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChangelogModule_Factory(t) { return new (t || ChangelogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangelogRoutingModule"],
            _markdown_module__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangelogModule, { declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_3__["ChangelogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangelogRoutingModule"],
        _markdown_module__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"],
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_3__["ChangelogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _changelog_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangelogRoutingModule"],
                    _markdown_module__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_5__["SecondaryToolbarModule"],
                    _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                    _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_12__["ContainerModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=changelog-changelog-module-es2015.js.map