(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dialogs-components-dialogs-module"],{

/***/ "./src/@vex/animations/scale-in.animation.ts":
/*!***************************************************!*\
  !*** ./src/@vex/animations/scale-in.animation.ts ***!
  \***************************************************/
/*! exports provided: scaleInAnimation, scaleIn400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function() { return scaleInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function() { return scaleIn400ms; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

function scaleInAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(1)'
            }))
        ])
    ]);
}
const scaleIn400ms = scaleInAnimation(400);


/***/ }),

/***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComponentsDialogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsRoutingModule", function() { return ComponentsDialogsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_dialogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components-dialogs.component */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts");





const routes = [
    {
        path: '',
        component: _components_dialogs_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsDialogsComponent"]
    }
];
class ComponentsDialogsRoutingModule {
}
ComponentsDialogsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsDialogsRoutingModule });
ComponentsDialogsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsDialogsRoutingModule_Factory(t) { return new (t || ComponentsDialogsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsDialogsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsDialogsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComponentsDialogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsComponent", function() { return ComponentsDialogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/scale-in.animation */ "./src/@vex/animations/scale-in.animation.ts");
/* harmony import */ var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-right.animation */ "./src/@vex/animations/fade-in-right.animation.ts");
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.component */ "./src/@vex/components/page-layout/page-layout.component.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */ "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout-content.directive */ "./src/@vex/components/page-layout/page-layout-content.directive.ts");
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ "./src/@vex/directives/container/container.directive.ts");
/* harmony import */ var _components_overview_components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components-overview/components/components-overview-dialogs/components-overview-dialogs.component */ "./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.component.ts");












const _c0 = function () { return ["Components", "Dialogs"]; };
class ComponentsDialogsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComponentsDialogsComponent.ɵfac = function ComponentsDialogsComponent_Factory(t) { return new (t || ComponentsDialogsComponent)(); };
ComponentsDialogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentsDialogsComponent, selectors: [["vex-components-dialogs"]], decls: 5, vars: 4, consts: [["current", "Dialogs"], [3, "crumbs"], ["vexContainer", ""], [1, "block"]], template: function ComponentsDialogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-page-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "vex-secondary-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vex-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vex-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vex-components-overview-dialogs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);
    } }, directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_5__["PageLayoutComponent"], _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__["PageLayoutContentDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_9__["ContainerDirective"], _components_overview_components_components_overview_dialogs_components_overview_dialogs_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsOverviewDialogsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy1kaWFsb2dzL2NvbXBvbmVudHMtZGlhbG9ncy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"],
            _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"],
            _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"],
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsDialogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-components-dialogs',
                templateUrl: './components-dialogs.component.html',
                styleUrls: ['./components-dialogs.component.scss'],
                animations: [
                    _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_1__["stagger80ms"],
                    _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"],
                    _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"],
                    _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ui/components/components-dialogs/components-dialogs.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ComponentsDialogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsDialogsModule", function() { return ComponentsDialogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components-dialogs-routing.module */ "./src/app/pages/ui/components/components-dialogs/components-dialogs-routing.module.ts");
/* harmony import */ var _components_dialogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components-dialogs.component */ "./src/app/pages/ui/components/components-dialogs/components-dialogs.component.ts");
/* harmony import */ var _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components-overview/components/components-overview-dialogs/components-overview-dialogs.module */ "./src/app/pages/ui/components/components-overview/components/components-overview-dialogs/components-overview-dialogs.module.ts");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */ "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
/* harmony import */ var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");










class ComponentsDialogsModule {
}
ComponentsDialogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsDialogsModule });
ComponentsDialogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsDialogsModule_Factory(t) { return new (t || ComponentsDialogsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsDialogsRoutingModule"],
            _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewDialogsModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
            _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsDialogsModule, { declarations: [_components_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsDialogsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsDialogsRoutingModule"],
        _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewDialogsModule"],
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
        _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
        _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsDialogsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_dialogs_component__WEBPACK_IMPORTED_MODULE_3__["ComponentsDialogsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_dialogs_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsDialogsRoutingModule"],
                    _components_overview_components_components_overview_dialogs_components_overview_dialogs_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsOverviewDialogsModule"],
                    _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
                    _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_6__["SecondaryToolbarModule"],
                    _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                    _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_8__["ContainerModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-dialogs-components-dialogs-module-es2015.js.map