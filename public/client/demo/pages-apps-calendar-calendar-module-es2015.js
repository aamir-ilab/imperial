(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-calendar-calendar-module"],{

/***/ "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEditComponent", function() { return CalendarEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class CalendarEditComponent {
    constructor(dialogRef, event, fb) {
        this.dialogRef = dialogRef;
        this.event = event;
        this.fb = fb;
        this.form = this.fb.group({
            title: null,
            start: null,
            end: null
        });
    }
    ngOnInit() {
        this.form.patchValue(this.event);
    }
    save() {
        this.dialogRef.close(Object.assign(Object.assign({}, this.event), this.form.value));
    }
}
CalendarEditComponent.ɵfac = function CalendarEditComponent_Factory(t) { return new (t || CalendarEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
CalendarEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarEditComponent, selectors: [["vex-calendar-edit"]], decls: 28, vars: 6, consts: [["matDialogTitle", ""], [3, "formGroup"], [1, "flex", "flex-col"], ["formControlName", "title", "matInput", ""], ["formControlName", "start", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startDatepicker", ""], ["formControlName", "end", "matInput", "", 3, "matDatepicker"], ["endDatepicker", ""], [1, "flex", "justify-end"], ["mat-button", "", "mat-dialog-close", ""], ["color", "primary", "mat-raised-button", "", 1, "save", 3, "click"]], template: function CalendarEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Event Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEditComponent_Template_button_click_26_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.event.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXItZWRpdC9jYWxlbmRhci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-calendar-edit',
                templateUrl: './calendar-edit.component.html',
                styleUrls: ['./calendar-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/apps/calendar/calendar-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/app/pages/apps/calendar/calendar.component.ts");





const routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"],
        data: {
            toolbarShadowEnabled: true,
            scrollDisabled: true
        }
    }
];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/apps/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-edit/calendar-edit.component */ "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-left */ "./node_modules/@iconify/icons-ic/twotone-chevron-left.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chevron-right */ "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
/* harmony import */ var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../@vex/components/scrollbar/scrollbar.component */ "./src/@vex/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.directive */ "./src/@vex/directives/container/container.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















const _c0 = ["modalContent"];
function CalendarComponent_mwl_calendar_month_view_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function CalendarComponent_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.dayClicked($event.day); })("eventClicked", function CalendarComponent_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleEvent("Clicked", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_month_view_22_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDayIsOpen", ctx_r0.activeDayIsOpen)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("viewDate", ctx_r0.viewDate);
} }
function CalendarComponent_mwl_calendar_week_view_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_week_view_23_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.handleEvent("Clicked", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_week_view_23_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx_r1.events)("refresh", ctx_r1.refresh)("viewDate", ctx_r1.viewDate);
} }
function CalendarComponent_mwl_calendar_day_view_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function CalendarComponent_mwl_calendar_day_view_24_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.handleEvent("Clicked", $event.event); })("eventTimesChanged", function CalendarComponent_mwl_calendar_day_view_24_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.eventTimesChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx_r2.events)("refresh", ctx_r2.refresh)("viewDate", ctx_r2.viewDate);
} }
const colors = {
    blue: {
        primary: '#5c77ff',
        secondary: '#FFFFFF'
    },
    yellow: {
        primary: '#ffc107',
        secondary: '#FDF1BA'
    },
    red: {
        primary: '#f44336',
        secondary: '#FFFFFF'
    }
};
class CalendarComponent {
    constructor(dialog, snackbar) {
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.icChevronLeft = _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('Deleted', event);
                }
            }
        ];
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.primary,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.primary,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.red,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            this.activeDayIsOpen = !((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0);
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign(Object.assign({}, event), { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        console.log(event);
        const dialogRef = this.dialog.open(_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_4__["CalendarEditComponent"], {
            data: event
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                event = result;
                this.snackbar.open('Updated Event: ' + event.title);
                this.refresh.next();
            }
        });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["vex-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 25, vars: 15, consts: [[1, "h-full", "flex", "flex-col"], [1, "calendar-bg", "relative", "text-contrast-white", "flex-none"], [1, "bg-contrast-black", "opacity-25", "absolute", "top-0", "left-0", "right-0", "bottom-0", "z-0", "w-full", "h-full"], [1, "container", "py-4", "px-6", "h-40", "z-10", "relative", "flex", "items-end"], [1, "flex-auto", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center"], [1, "headline"], [1, "actions", "flex", "flex-col", "sm:flex-row", "justify-end", "items-center"], [1, "chevrons"], ["mat-icon-button", "", "mwlCalendarPreviousView", "", 3, "viewDate", "view", "viewDateChange"], [3, "icIcon"], ["mat-icon-button", "", "mwlCalendarNextView", "", 3, "viewDate", "view", "viewDateChange"], [1, "flex"], ["mat-button", "", 3, "click"], ["vexContainer", "", 1, "px-0", "shadow", "flex-auto", "relative", 3, "ngSwitch"], [3, "activeDayIsOpen", "events", "refresh", "viewDate", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "events", "refresh", "viewDate", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "activeDayIsOpen", "events", "refresh", "viewDate", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "events", "refresh", "viewDate", "eventClicked", "eventTimesChanged"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_10_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_12_listener($event) { return ctx.viewDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_15_listener() { return ctx.view = ctx.CalendarView.Month; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MONTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_17_listener() { return ctx.view = ctx.CalendarView.Week; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "WEEK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_19_listener() { return ctx.view = ctx.CalendarView.Day; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "vex-scrollbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CalendarComponent_mwl_calendar_month_view_22_Template, 1, 4, "mwl-calendar-month-view", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CalendarComponent_mwl_calendar_week_view_23_Template, 1, 3, "mwl-calendar-week-view", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CalendarComponent_mwl_calendar_day_view_24_Template, 1, 3, "mwl-calendar-day-view", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 11, ctx.viewDate, ctx.view + "ViewTitle", "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate)("view", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icChevronLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate)("view", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icChevronRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconDirective"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵg"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_12__["ScrollbarComponent"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__["ContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]], pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵi"]], styles: [".cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.cal-month-view .cal-cell .cal-event {\n    pointer-events: all !important; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid; }\n\n[dir='rtl'] .cal-month-view .cal-day-cell:not(:last-child) {\n    border-right: initial;\n    border-left: 1px solid; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px; }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-month-view .cal-draggable {\n  cursor: move; }\n\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\n\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\n\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\n\n.cal-month-view {\n  background-color: #fff; }\n\n.cal-month-view .cal-cell-row:hover {\n    background-color: #fafafa; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n  .cal-month-view .cal-cell.cal-has-events.cal-open {\n    background-color: #ededed; }\n\n.cal-month-view .cal-days {\n    border-color: #e1e1e1; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n[dir='rtl'] .cal-month-view .cal-day-cell:not(:last-child) {\n      border-right-color: initial;\n      border-left-color: #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n    border-bottom-color: #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n    background-color: #b94a48;\n    color: #fff; }\n\n.cal-month-view .cal-event {\n    background-color: #1e90ff;\n    border-color: #d1e8ff;\n    color: #fff; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n    color: #8b0000; }\n\n.cal-month-view .cal-day-cell.cal-today {\n    background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n    background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n    color: #fff;\n    background-color: #555;\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-week-view * {\n    box-sizing: border-box; }\n\n.cal-week-view .cal-day-headers {\n    -js-display: flex;\n    display: flex;\n    padding-left: 70px;\n    border: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers {\n      padding-left: initial;\n      padding-right: 70px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n        border-right: initial;\n        border-left: 1px solid; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:first-child {\n        border-left: initial;\n        border-right: 1px solid; }\n\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\n\n.cal-week-view .cal-day-column {\n    flex-grow: 1;\n    border-left: solid 1px; }\n\n[dir='rtl'] .cal-week-view .cal-day-column {\n      border-left: initial;\n      border-right: solid 1px; }\n\n.cal-week-view .cal-event {\n    font-size: 12px;\n    border: 1px solid;\n    direction: ltr; }\n\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\n\n.cal-week-view .cal-current-time-marker {\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 2; }\n\n.cal-week-view .cal-all-day-events {\n    border: solid 1px;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-events-row {\n        margin-left: initial;\n        margin-right: 70px; }\n\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\n\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\n\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n        border-top-left-radius: initial;\n        border-bottom-left-radius: initial;\n        border-top-right-radius: 5px !important;\n        border-bottom-right-radius: 5px !important; }\n\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n        border-top-right-radius: initial;\n        border-bottom-right-radius: initial;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n          right: initial;\n          left: 0; }\n\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\n\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\n\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n\n.cal-week-view .cal-time-events .cal-day-columns {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\n\n.cal-week-view .cal-time-events .cal-events-container {\n      position: relative; }\n\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\n\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\n\n.cal-week-view .cal-hour-segment {\n    position: relative; }\n\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\n\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\n\n.cal-week-view .cal-draggable {\n    cursor: move; }\n\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\n\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-week-view {\n  background-color: #fff;\n  border-top: solid 1px #e1e1e1; }\n\n.cal-week-view .cal-day-headers {\n    border-color: #e1e1e1;\n    border-top: 0; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right-color: initial;\n      border-left: solid 1px #e1e1e1 !important; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n    border-left-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left-color: initial;\n      border-right-color: #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\n\n.cal-week-view .cal-day-column {\n    border-left-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-column {\n      border-left-color: initial;\n      border-right-color: #e1e1e1; }\n\n.cal-week-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\n\n.cal-week-view .cal-all-day-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\n\n.cal-week-view .cal-time-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n      background-color: #ededed; }\n\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\n\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\n\n.cal-week-view .cal-current-time-marker {\n    background-color: #ea4334; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view mwl-calendar-week-view-header {\n    display: none; }\n\n.cal-day-view .cal-events-container {\n    margin-left: 70px; }\n\n[dir='rtl'] .cal-day-view .cal-events-container {\n      margin-left: initial;\n      margin-right: 70px; }\n\n.cal-day-view .cal-day-column {\n    border-left: 0; }\n\n.cal-day-view .cal-current-time-marker {\n    margin-left: 70px;\n    width: calc(100% - 70px); }\n\n[dir='rtl'] .cal-day-view .cal-current-time-marker {\n      margin-left: initial;\n      margin-right: 70px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000; }\n\n.cal-month-view {\n  background: var(--background-card);\n}\n\n.cal-month-view .cal-days {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-header .cal-cell {\n  font: var(--font-body-2);\n  padding-bottom: var(--padding-12);\n  padding-top: var(--padding-12);\n}\n\n.cal-month-view .cal-cell-row:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell.cal-open {\n  background: var(--background-hover);\n  box-shadow: var(--elevation-z4);\n}\n\n.cal-month-view .cal-day-cell {\n  min-height: 150px;\n}\n\n.cal-month-view .cal-day-cell.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-open-day-events {\n  background-color: rgb(var(--color-primary));\n  border-bottom: 1px solid var(--foreground-divider);\n  box-shadow: inset 0 0 4px 0 var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div {\n  align-content: center;\n  align-items: center;\n  background: var(--background-card);\n  box-shadow: var(--elevation-z2);\n  color: var(--text-dark);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.cal-month-view .cal-open-day-events > div + div {\n  margin-top: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n  color: var(--text-color);\n  flex: 1;\n  font: var(--font-body-1);\n  padding: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action {\n  color: var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action + .cal-event-action {\n  margin-left: var(--padding-12);\n}\n\n.cal-week-view, .cal-day-view {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-header, .cal-day-view .cal-header {\n  font: var(--font-body-2);\n}\n\n.cal-week-view .cal-header b, .cal-day-view .cal-header b {\n  font-weight: 500;\n}\n\n.cal-week-view .cal-header.cal-weekend span, .cal-day-view .cal-header.cal-weekend span {\n  color: var(--text-secondary);\n}\n\n.cal-week-view .cal-header.cal-today, .cal-day-view .cal-header.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-day-headers .cal-header:hover, .cal-week-view .cal-day-headers .cal-drag-over, .cal-day-view .cal-day-headers .cal-header:hover, .cal-day-view .cal-day-headers .cal-drag-over {\n  background-color: var(--background-hover);\n}\n\n.cal-week-view .cal-hour, .cal-day-view .cal-hour {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour:nth-child(odd), .cal-day-view .cal-hour:nth-child(odd) {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour-odd, .cal-day-view .cal-hour-odd {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-hour-segment:hover, .cal-day-view .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-time-events .cal-day-columns .cal-hour-segment:hover, .cal-day-view .cal-time-events .cal-day-columns .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-event, .cal-day-view .cal-event {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-actions, .cal-day-view .cal-event mwl-calendar-event-actions {\n  order: 2;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title, .cal-day-view .cal-event mwl-calendar-event-title {\n  display: block;\n  flex: 1;\n  order: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title .cal-event-title, .cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n  outline: none;\n}\n\n.cal-week-view .cal-event .cal-event-actions, .cal-day-view .cal-event .cal-event-actions {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action, .cal-day-view .cal-event .cal-event-actions .cal-event-action {\n  color: var(--text-secondary);\n  height: auto;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action .icon, .cal-day-view .cal-event .cal-event-actions .cal-event-action .icon {\n  font-size: 18px;\n  padding: var(--padding-4);\n}\n\n.cal-event-title {\n  color: var(--text-color);\n  font: var(--font-body-1);\n  text-decoration: none;\n}\n\nvex-calendar .calendar-bg {\n  background: url(\"/assets/img/demo/landscape.jpg\") no-repeat center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWNhbGVuZGFyL2Nzcy9hbmd1bGFyLWNhbGVuZGFyLmNzcyIsInNyYy9hcHAvcGFnZXMvYXBwcy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBRWIsdUJBQXVCO0VBQzFCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBR1IsT0FBTyxFQUFFOztBQUVuQjtFQUdFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0UsV0FBVztFQUdILE9BQU87RUFHZixpQkFBaUI7RUFDakIsYUFBYTtFQUlMLHNCQUFzQjtFQUd0QixvQkFBb0IsRUFBRTs7QUFDOUI7SUFDRSw4QkFBOEIsRUFBRTs7QUFFcEM7RUFDRSxpQkFBaUIsRUFBRTs7QUFDbkI7SUFDRTtNQUNFLGNBQWMsRUFBRSxFQUFFOztBQUV4QjtFQUNFLHVCQUF1QixFQUFFOztBQUN6QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0IsRUFBRTs7QUFFNUI7RUFDRSx3QkFBd0IsRUFBRTs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFFOztBQUV2QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQixFQUFFOztBQUV2QjtFQUdVLE9BQU87RUFHUCxxQkFBcUI7RUFD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QTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtFQUFBO0VBQ0Esc0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAtanMtZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbCAuY2FsLWV2ZW50IHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDsgfVxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICBbZGlyPSdydGwnXSAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IGluaXRpYWw7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIC5jYWwtY2VsbC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnRzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1pbi1tb250aC5jYWwtaGFzLWV2ZW50cyB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSAuY2FsLWRheS1udW1iZXIge1xuICBmb250LXNpemU6IDEuOWVtOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIHBhZGRpbmc6IDE1cHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWRheS1iYWRnZSxcbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWV2ZW50IHtcbiAgb3BhY2l0eTogMC4zOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyLFxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLmNhbC1oYXMtZXZlbnRzLmNhbC1vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTRhNDg7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDFlOGZmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC13ZWVrZW5kIC5jYWwtZGF5LW51bWJlciB7XG4gICAgY29sb3I6ICM4YjAwMDA7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmZGU3OyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTAgIWltcG9ydGFudDsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpOyB9XG5cbi5jYWwtd2Vlay12aWV3IHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqLyB9XG4gIC5jYWwtd2Vlay12aWV3ICoge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlciB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7IH1cbiAgICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDsgfVxuICAgICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBpbml0aWFsO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC41OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgICBib3JkZXItbGVmdDogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBkaXJlY3Rpb246IGx0cjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtbGFiZWwtY29sdW1uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgei1pbmRleDogMjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiAwOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50cy1yb3cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7IH1cbiAgICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudHMtcm93IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnQtY29udGFpbmVyLnJlc2l6ZS1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXN0YXJ0cy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuICAgICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXN0YXJ0cy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZW5kcy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gICAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZW5kcy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICByaWdodDogMDsgfVxuICAgICAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICAgIHJpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudHMtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQtY29udGFpbmVyOm5vdCguY2FsLWRyYWdnYWJsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gICAgY3Vyc29yOiBtb3ZlOyB9XG4gIC5jYWwtd2Vlay12aWV3IG13bC1jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIGRhc2hlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50LmNhbC1hZnRlci1ob3VyLXN0YXJ0IC5jYWwtdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXN0YXJ0cy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZW5kcy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XG5cbi5jYWwtd2Vlay12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xuICAgIGJvcmRlci10b3A6IDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZTFlMWUxICFpbXBvcnRhbnQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMWUxZTE7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlOGZmO1xuICAgIGJvcmRlci1jb2xvcjogIzFlOTBmZjtcbiAgICBjb2xvcjogIzFlOTBmZjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXRvZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmZGU3OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICAgIGNvbG9yOiAjOGIwMDAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uczpub3QoLmNhbC1yZXNpemUtYWN0aXZlKSAuY2FsLWhvdXItc2VnbWVudDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1vZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLW92ZXIgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtY3VycmVudC10aW1lLW1hcmtlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNDsgfVxuXG4uY2FsLWRheS12aWV3IHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqLyB9XG4gIC5jYWwtZGF5LXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50cy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyB9XG4gICAgW2Rpcj0ncnRsJ10gLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50cy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWRheS1jb2x1bW4ge1xuICAgIGJvcmRlci1sZWZ0OiAwOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLWRheS12aWV3IC5jYWwtY3VycmVudC10aW1lLW1hcmtlciB7XG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcbiAgICAgIG1hcmdpbi1yaWdodDogNzBweDsgfVxuXG4uY2FsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG9wYWNpdHk6IDAuOTsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmNhbC10b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzJztcblxuLmNhbC1tb250aC12aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xMik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IC5jYWwtY2VsbC5jYWwtb3BlbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJpbWFyeSkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCAwIHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejIpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2ICsgZGl2IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZsZXg6IDE7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiArIC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uY2FsLXdlZWstdmlldywgLmNhbC1kYXktdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciBiLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtd2Vla2VuZCBzcGFuLCAuY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXksIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlciwgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSwgLmNhbC1kYXktdmlldyAuY2FsLWhvdXI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1vZGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMge1xuICBvcmRlcjogMjtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgb3JkZXI6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSAuY2FsLWV2ZW50LXRpdGxlLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucywgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24sIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9uIC5pY29uLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9uIC5pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTQpO1xufVxuXG4uY2FsLWV2ZW50LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudmV4LWNhbGVuZGFyIC5jYWxlbmRhci1iZyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2RlbW8vbGFuZHNjYXBlLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, { modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/apps/calendar/calendar.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar.module.ts ***!
  \********************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/pages/apps/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.component */ "./src/app/pages/apps/calendar/calendar.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-edit/calendar-edit.component */ "./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@vex/components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../@vex/directives/container/container.module */ "./src/@vex/directives/container/container.module.ts");





















class CalendarModule {
}
CalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalendarModule });
CalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
            }),
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
            _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"], _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
        _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"], _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"],
                    angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
                    }),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                    _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
                    _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]
                ],
                entryComponents: [_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-apps-calendar-calendar-module-es2015.js.map