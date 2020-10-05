function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-calendar-admin-calendar-module"], {
  /***/
  "./src/app/admin/admin-calendar/admin-calendar-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-calendar-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminCalendarRoutingModule */

  /***/
  function srcAppAdminAdminCalendarAdminCalendarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminCalendarRoutingModule", function () {
      return AdminCalendarRoutingModule;
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


    var _admin_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-calendar.component */
    "./src/app/admin/admin-calendar/admin-calendar.component.ts");

    var routes = [{
      path: '',
      component: _admin_calendar_component__WEBPACK_IMPORTED_MODULE_2__["AdminCalendarComponent"],
      data: {
        toolbarShadowEnabled: true,
        scrollDisabled: true
      }
    }];

    var AdminCalendarRoutingModule = function AdminCalendarRoutingModule() {
      _classCallCheck(this, AdminCalendarRoutingModule);
    };

    AdminCalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminCalendarRoutingModule
    });
    AdminCalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminCalendarRoutingModule_Factory(t) {
        return new (t || AdminCalendarRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCalendarRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCalendarRoutingModule, [{
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
  "./src/app/admin/admin-calendar/admin-calendar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-calendar.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminCalendarComponent */

  /***/
  function srcAppAdminAdminCalendarAdminCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminCalendarComponent", function () {
      return AdminCalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar-edit/calendar-edit.component */
    "./src/app/admin/admin-calendar/calendar-edit/calendar-edit.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-left */
    "./node_modules/@iconify/icons-ic/twotone-chevron-left.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-right */
    "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../@vex/components/scrollbar/scrollbar.component */
    "./src/@vex/components/scrollbar/scrollbar.component.ts");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["modalContent"];

    function AdminCalendarComponent_mwl_calendar_month_view_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClicked", function AdminCalendarComponent_mwl_calendar_month_view_18_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.dayClicked($event.day);
        })("eventClicked", function AdminCalendarComponent_mwl_calendar_month_view_18_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function AdminCalendarComponent_mwl_calendar_month_view_18_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDayIsOpen", ctx_r0.activeDayIsOpen)("events", ctx_r0.events)("refresh", ctx_r0.refresh)("viewDate", ctx_r0.viewDate);
      }
    }

    function AdminCalendarComponent_mwl_calendar_week_view_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function AdminCalendarComponent_mwl_calendar_week_view_19_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function AdminCalendarComponent_mwl_calendar_week_view_19_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx_r1.events)("refresh", ctx_r1.refresh)("viewDate", ctx_r1.viewDate);
      }
    }

    function AdminCalendarComponent_mwl_calendar_day_view_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventClicked", function AdminCalendarComponent_mwl_calendar_day_view_20_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.handleEvent("Clicked", $event.event);
        })("eventTimesChanged", function AdminCalendarComponent_mwl_calendar_day_view_20_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.eventTimesChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx_r2.events)("refresh", ctx_r2.refresh)("viewDate", ctx_r2.viewDate);
      }
    }

    var colors = {
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

    var AdminCalendarComponent = /*#__PURE__*/function () {
      function AdminCalendarComponent(dialog, snackbar, router, authService) {
        var _this = this;

        _classCallCheck(this, AdminCalendarComponent);

        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.authService = authService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.icChevronLeft = _iconify_icons_ic_twotone_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actions = [{
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: function onClick(_ref) {
            var event = _ref.event;

            _this.handleEvent('Edited', event);
          }
        }, {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: function onClick(_ref2) {
            var event = _ref2.event;
            _this.events = _this.events.filter(function (iEvent) {
              return iEvent !== event;
            });

            _this.handleEvent('Deleted', event);
          }
        }]; // = [
        //   {
        //     start: subDays(startOfDay(new Date()), 1),
        //     end: addDays(new Date(), 1),
        //     title: 'A 3 day event',
        //     color: colors.primary,
        //     actions: this.actions,
        //     allDay: true,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   },
        //   {
        //     start: startOfDay(new Date()),
        //     title: 'An event with no end date',
        //     color: colors.yellow,
        //     actions: this.actions
        //   },
        //   {
        //     start: subDays(endOfMonth(new Date()), 3),
        //     end: addDays(endOfMonth(new Date()), 3),
        //     title: 'A long event that spans 2 months',
        //     color: colors.primary,
        //     allDay: true
        //   },
        //   {
        //     start: addHours(startOfDay(new Date()), 2),
        //     end: new Date(),
        //     title: 'A draggable and resizable event',
        //     color: colors.red,
        //     actions: this.actions,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   }
        // ];

        this.activeDayIsOpen = true;
        this.getEventData();
      }

      _createClass(AdminCalendarComponent, [{
        key: "getEventData",
        value: function getEventData() {
          var _this2 = this;

          this.authService.getAllJobsSync().subscribe(function (res) {
            console.log('res');
            console.log(res);
            _this2.events = [];
            res.forEach(function (ele) {
              var col;
              console.log('eleeeeee');
              if (ele.statusStr == 'In Progress') col = colors.blue;else if (ele.statusStr == 'Completed') col = colors.green;else if (ele.statusStr == 'Submitted') col = colors.yellow;
              if (ele.statusStr != 'Pending') _this2.events.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(ele.shiftDate)),
                title: ele.department + ' ( client: ' + ele.client + ')',
                color: col,
                startTime: ele.startTime,
                endTime: ele.endTime,
                department: ele.department,
                role: ele.role,
                total: ele.total,
                fulfilled: ele.fulfilled,
                actions: _this2.actions,
                client: ele
              });
            });
            console.log('event');
            console.log(_this2.events);
            console.log('event');
            console.log('event');
            console.log('event');
            console.log('event');
            console.log('event');
            console.log('event');
            console.log(_this2.events);
          });
        }
      }, {
        key: "dayClicked",
        value: function dayClicked(_ref3) {
          var date = _ref3.date,
              events = _ref3.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            this.activeDayIsOpen = !(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0);
            this.viewDate = date;
          }
        }
      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref4) {
          var event = _ref4.event,
              newStart = _ref4.newStart,
              newEnd = _ref4.newEnd;
          this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
              return Object.assign(Object.assign({}, event), {
                start: newStart,
                end: newEnd
              });
            }

            return iEvent;
          });
          this.handleEvent('Dropped or resized', event);
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          var _this3 = this;

          console.log(event); // if(action == 'Clicked')
          // this.router.navigate(['/admin/jobs/scrumboard']);

          var dialogRef = this.dialog.open(_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_4__["CalendarEditComponent"], {
            data: event
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // if (result) {
            // event = result;
            // this.snackbar.open('Updated Event: ' + event.title);
            _this3.refresh.next(); // }

          });
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          this.events = [].concat(_toConsumableArray(this.events), [{
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            }
          }]);
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }]);

      return AdminCalendarComponent;
    }();

    AdminCalendarComponent.ɵfac = function AdminCalendarComponent_Factory(t) {
      return new (t || AdminCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]));
    };

    AdminCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminCalendarComponent,
      selectors: [["vex-admin-calendar"]],
      viewQuery: function AdminCalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
        }
      },
      decls: 21,
      vars: 15,
      consts: [[1, "h-full", "flex", "flex-col"], [1, "calendar-bg", "relative", "text-contrast-white", "flex-none"], [1, "bg-contrast-black", "opacity-25", "absolute", "top-0", "left-0", "right-0", "bottom-0", "z-0", "w-full", "h-full", "calendar-bg", 2, "background-color", "#5c77ff", "opacity", "1"], [1, "container", "py-4", "px-6", "h-40", "z-10", "relative", "flex", "items-end"], [1, "flex-auto", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center"], [1, "headline"], [1, "actions", "flex", "flex-col", "sm:flex-row", "justify-end", "items-center"], [1, "chevrons"], ["mat-icon-button", "", "mwlCalendarPreviousView", "", 3, "viewDate", "view", "viewDateChange"], [3, "icIcon"], ["mat-icon-button", "", "mwlCalendarNextView", "", 3, "viewDate", "view", "viewDateChange"], [1, "flex"], ["mat-button", "", 3, "click"], ["vexContainer", "", 1, "px-0", "shadow", "flex-auto", "relative", 3, "ngSwitch"], [3, "activeDayIsOpen", "events", "refresh", "viewDate", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "events", "refresh", "viewDate", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "activeDayIsOpen", "events", "refresh", "viewDate", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "events", "refresh", "viewDate", "eventClicked", "eventTimesChanged"]],
      template: function AdminCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function AdminCalendarComponent_Template_button_viewDateChange_10_listener($event) {
            return ctx.viewDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function AdminCalendarComponent_Template_button_viewDateChange_12_listener($event) {
            return ctx.viewDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminCalendarComponent_Template_button_click_15_listener() {
            return ctx.view = ctx.CalendarView.Month;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MONTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "vex-scrollbar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminCalendarComponent_mwl_calendar_month_view_18_Template, 1, 4, "mwl-calendar-month-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminCalendarComponent_mwl_calendar_week_view_19_Template, 1, 3, "mwl-calendar-week-view", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminCalendarComponent_mwl_calendar_day_view_20_Template, 1, 3, "mwl-calendar-day-view", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵg"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_14__["ScrollbarComponent"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_15__["ContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"]],
      pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵi"]],
      styles: [".cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.cal-month-view .cal-cell .cal-event {\n    pointer-events: all !important; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid; }\n\n[dir='rtl'] .cal-month-view .cal-day-cell:not(:last-child) {\n    border-right: initial;\n    border-left: 1px solid; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px; }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-month-view .cal-draggable {\n  cursor: move; }\n\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\n\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\n\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\n\n.cal-month-view {\n  background-color: #fff; }\n\n.cal-month-view .cal-cell-row:hover {\n    background-color: #fafafa; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n  .cal-month-view .cal-cell.cal-has-events.cal-open {\n    background-color: #ededed; }\n\n.cal-month-view .cal-days {\n    border-color: #e1e1e1; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n[dir='rtl'] .cal-month-view .cal-day-cell:not(:last-child) {\n      border-right-color: initial;\n      border-left-color: #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n    border-bottom-color: #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n    background-color: #b94a48;\n    color: #fff; }\n\n.cal-month-view .cal-event {\n    background-color: #1e90ff;\n    border-color: #d1e8ff;\n    color: #fff; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n    color: #8b0000; }\n\n.cal-month-view .cal-day-cell.cal-today {\n    background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n    background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n    color: #fff;\n    background-color: #555;\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-week-view * {\n    box-sizing: border-box; }\n\n.cal-week-view .cal-day-headers {\n    -js-display: flex;\n    display: flex;\n    padding-left: 70px;\n    border: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers {\n      padding-left: initial;\n      padding-right: 70px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n        border-right: initial;\n        border-left: 1px solid; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:first-child {\n        border-left: initial;\n        border-right: 1px solid; }\n\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\n\n.cal-week-view .cal-day-column {\n    flex-grow: 1;\n    border-left: solid 1px; }\n\n[dir='rtl'] .cal-week-view .cal-day-column {\n      border-left: initial;\n      border-right: solid 1px; }\n\n.cal-week-view .cal-event {\n    font-size: 12px;\n    border: 1px solid;\n    direction: ltr; }\n\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\n\n.cal-week-view .cal-current-time-marker {\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 2; }\n\n.cal-week-view .cal-all-day-events {\n    border: solid 1px;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-events-row {\n        margin-left: initial;\n        margin-right: 70px; }\n\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\n\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\n\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n        border-top-left-radius: initial;\n        border-bottom-left-radius: initial;\n        border-top-right-radius: 5px !important;\n        border-bottom-right-radius: 5px !important; }\n\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n        border-top-right-radius: initial;\n        border-bottom-right-radius: initial;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\n\n[dir='rtl'] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n          right: initial;\n          left: 0; }\n\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\n\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\n\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n\n.cal-week-view .cal-time-events .cal-day-columns {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\n\n.cal-week-view .cal-time-events .cal-events-container {\n      position: relative; }\n\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\n\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\n\n.cal-week-view .cal-hour-segment {\n    position: relative; }\n\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\n\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\n\n.cal-week-view .cal-draggable {\n    cursor: move; }\n\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\n\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-week-view {\n  background-color: #fff;\n  border-top: solid 1px #e1e1e1; }\n\n.cal-week-view .cal-day-headers {\n    border-color: #e1e1e1;\n    border-top: 0; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n    border-right-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right-color: initial;\n      border-left: solid 1px #e1e1e1 !important; }\n\n.cal-week-view .cal-day-headers .cal-header:first-child {\n    border-left-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left-color: initial;\n      border-right-color: #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\n\n.cal-week-view .cal-day-column {\n    border-left-color: #e1e1e1; }\n\n[dir='rtl'] .cal-week-view .cal-day-column {\n      border-left-color: initial;\n      border-right-color: #e1e1e1; }\n\n.cal-week-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\n\n.cal-week-view .cal-all-day-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\n\n.cal-week-view .cal-time-events {\n    border-color: #e1e1e1; }\n\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n      background-color: #ededed; }\n\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\n\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\n\n.cal-week-view .cal-current-time-marker {\n    background-color: #ea4334; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view mwl-calendar-week-view-header {\n    display: none; }\n\n.cal-day-view .cal-events-container {\n    margin-left: 70px; }\n\n[dir='rtl'] .cal-day-view .cal-events-container {\n      margin-left: initial;\n      margin-right: 70px; }\n\n.cal-day-view .cal-day-column {\n    border-left: 0; }\n\n.cal-day-view .cal-current-time-marker {\n    margin-left: 70px;\n    width: calc(100% - 70px); }\n\n[dir='rtl'] .cal-day-view .cal-current-time-marker {\n      margin-left: initial;\n      margin-right: 70px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000; }\n\n.cal-month-view {\n  background: var(--background-card);\n}\n\n.cal-month-view .cal-days {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-header .cal-cell {\n  font: var(--font-body-2);\n  padding-bottom: var(--padding-12);\n  padding-top: var(--padding-12);\n}\n\n.cal-month-view .cal-cell-row:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell:hover {\n  background: var(--background-hover);\n}\n\n.cal-month-view .cal-cell-row .cal-cell.cal-open {\n  background: var(--background-hover);\n  box-shadow: var(--elevation-z4);\n}\n\n.cal-month-view .cal-day-cell {\n  min-height: 150px;\n}\n\n.cal-month-view .cal-day-cell.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-color: var(--foreground-divider);\n}\n\n.cal-month-view .cal-open-day-events {\n  background-color: rgb(var(--color-primary));\n  border-bottom: 1px solid var(--foreground-divider);\n  box-shadow: inset 0 0 4px 0 var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div {\n  align-content: center;\n  align-items: center;\n  background: var(--background-card);\n  box-shadow: var(--elevation-z2);\n  color: var(--text-dark);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.cal-month-view .cal-open-day-events > div + div {\n  margin-top: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n  color: var(--text-color);\n  flex: 1;\n  font: var(--font-body-1);\n  padding: var(--padding-12);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action {\n  color: var(--text-secondary);\n}\n\n.cal-month-view .cal-open-day-events > div .cal-event-action + .cal-event-action {\n  margin-left: var(--padding-12);\n}\n\n.cal-week-view, .cal-day-view {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-header, .cal-day-view .cal-header {\n  font: var(--font-body-2);\n}\n\n.cal-week-view .cal-header b, .cal-day-view .cal-header b {\n  font-weight: 500;\n}\n\n.cal-week-view .cal-header.cal-weekend span, .cal-day-view .cal-header.cal-weekend span {\n  color: var(--text-secondary);\n}\n\n.cal-week-view .cal-header.cal-today, .cal-day-view .cal-header.cal-today {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-day-headers .cal-header:hover, .cal-week-view .cal-day-headers .cal-drag-over, .cal-day-view .cal-day-headers .cal-header:hover, .cal-day-view .cal-day-headers .cal-drag-over {\n  background-color: var(--background-hover);\n}\n\n.cal-week-view .cal-hour, .cal-day-view .cal-hour {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour:nth-child(odd), .cal-day-view .cal-hour:nth-child(odd) {\n  background: var(--background-card);\n}\n\n.cal-week-view .cal-hour-odd, .cal-day-view .cal-hour-odd {\n  background: var(--background-app-bar);\n}\n\n.cal-week-view .cal-hour-segment:hover, .cal-day-view .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-time-events .cal-day-columns .cal-hour-segment:hover, .cal-day-view .cal-time-events .cal-day-columns .cal-hour-segment:hover {\n  background: var(--background-hover);\n}\n\n.cal-week-view .cal-event, .cal-day-view .cal-event {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-actions, .cal-day-view .cal-event mwl-calendar-event-actions {\n  order: 2;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title, .cal-day-view .cal-event mwl-calendar-event-title {\n  display: block;\n  flex: 1;\n  order: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cal-week-view .cal-event mwl-calendar-event-title .cal-event-title, .cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n  outline: none;\n}\n\n.cal-week-view .cal-event .cal-event-actions, .cal-day-view .cal-event .cal-event-actions {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action, .cal-day-view .cal-event .cal-event-actions .cal-event-action {\n  color: var(--text-secondary);\n  height: auto;\n}\n\n.cal-week-view .cal-event .cal-event-actions .cal-event-action .icon, .cal-day-view .cal-event .cal-event-actions .cal-event-action .icon {\n  font-size: 18px;\n  padding: var(--padding-4);\n}\n\n.cal-event-title {\n  color: var(--text-color);\n  font: var(--font-body-1);\n  text-decoration: none;\n}\n\nvex-calendar .calendar-bg {\n  background: url(\"/assets/img/demo/landscape.jpg\") no-repeat center !important;\n  background-size: cover !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLWNhbGVuZGFyL2Nzcy9hbmd1bGFyLWNhbGVuZGFyLmNzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tY2FsZW5kYXIvYWRtaW4tY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUViLHVCQUF1QjtFQUMxQixjQUFjO0VBQ2QsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGdCQUFnQjtFQUdSLE9BQU8sRUFBRTs7QUFFbkI7RUFHRSxpQkFBaUI7RUFDakIsYUFBYSxFQUFFOztBQUVqQjtFQUNFLFdBQVc7RUFHSCxPQUFPO0VBR2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFJTCxzQkFBc0I7RUFHdEIsb0JBQW9CLEVBQUU7O0FBQzlCO0lBQ0UsOEJBQThCLEVBQUU7O0FBRXBDO0VBQ0UsaUJBQWlCLEVBQUU7O0FBQ25CO0lBQ0U7TUFDRSxjQUFjLEVBQUUsRUFBRTs7QUFFeEI7RUFDRSx1QkFBdUIsRUFBRTs7QUFDekI7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCLEVBQUU7O0FBRTVCO0VBQ0Usd0JBQXdCLEVBQUU7O0FBRTVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUIsRUFBRTs7QUFFdkI7RUFHVSxPQUFPO0VBR1AscUJB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Q0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSw2RUFBQTtFQUNBLGlDQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1jYWxlbmRhci9hZG1pbi1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtdG9wIHtcbiAgbWluLWhlaWdodDogNzhweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwge1xuICBmbG9hdDogbGVmdDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIC5jYWwtZXZlbnQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4OyB9XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gIFtkaXI9J3J0bCddIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodDogaW5pdGlhbDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudHMge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWluLW1vbnRoLmNhbC1oYXMtZXZlbnRzIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1vdXQtbW9udGggLmNhbC1kYXktbnVtYmVyIHtcbiAgb3BhY2l0eTogMC4xO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS45ZW07IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgcGFkZGluZzogMTVweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LWJhZGdlLFxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZXZlbnQge1xuICBvcGFjaXR5OiAwLjM7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmNhbC1tb250aC12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIsXG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwuY2FsLWhhcy1ldmVudHMuY2FsLW9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5NGE0ODtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbiAgICBib3JkZXItY29sb3I6ICNkMWU4ZmY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXdlZWtlbmQgLmNhbC1kYXktbnVtYmVyIHtcbiAgICBjb2xvcjogIzhiMDAwMDsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50OyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC13ZWVrLXZpZXcgKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsO1xuICAgICAgcGFkZGluZy1yaWdodDogNzBweDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDsgfVxuICAgICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBpbml0aWFsO1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkOyB9XG4gICAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvcGFjaXR5OiAwLjU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4OyB9XG4gICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBpbml0aWFsO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGRpcmVjdGlvbjogbHRyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1sYWJlbC1jb2x1bW4ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB6LWluZGV4OiAyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDA7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnRzLXJvdyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNzBweDsgfVxuICAgICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50cy1yb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XG4gICAgICBbZGlyPSdydGwnXSAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHggIWltcG9ydGFudDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5pdGlhbDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXRpbWUtbGFiZWwtY29sdW1uIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAtanMtZGlzcGxheTogZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50cy1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBhMCc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQgLmNhbC10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IGluaXRpYWw7XG4gICAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNlMWUxZTEgIWltcG9ydGFudDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGluaXRpYWw7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlcixcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1jb2x1bW4ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTFlMWUxOyB9XG4gICAgW2Rpcj0ncnRsJ10gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBpbml0aWFsO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5MGZmO1xuICAgIGNvbG9yOiAjMWU5MGZmOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gICAgY29sb3I6ICM4YjAwMDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zOm5vdCguY2FsLXJlc2l6ZS1hY3RpdmUpIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLW9kZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM0OyB9XG5cbi5jYWwtZGF5LXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC1kYXktdmlldyBtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7IH1cbiAgICBbZGlyPSdydGwnXSAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcbiAgICAgIG1hcmdpbi1yaWdodDogNzBweDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDA7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTsgfVxuICAgIFtkaXI9J3J0bCddIC5jYWwtZGF5LXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4OyB9XG5cbi5jYWwtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA3MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3BhY2l0eTogMC45OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3Age1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAzcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4OyB9XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4uY2FsLXRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9jc3MvYW5ndWxhci1jYWxlbmRhci5jc3MnO1xuXG4uY2FsLW1vbnRoLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIC5jYWwtY2VsbC1yb3cge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciAuY2FsLWNlbGwge1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLTEyKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsLmNhbC1vcGVuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16NCk7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsIHtcbiAgbWluLWhlaWdodDogMTUwcHg7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1jb2xvci1wcmltYXJ5KSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IDAgdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Mik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYgKyBkaXYge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUgLmNhbC1ldmVudC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZmxleDogMTtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTEpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IC5jYWwtZXZlbnQtYWN0aW9uICsgLmNhbC1ldmVudC1hY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5jYWwtd2Vlay12aWV3LCAuY2FsLWRheS12aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIge1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyIGIsIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4sIC5jYWwtZGF5LXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC10b2RheSwgLmNhbC1kYXktdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLCAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpLCAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1vZGQsIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLW9kZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYXBwLWJhcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyLCAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciwgLmNhbC1kYXktdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyB7XG4gIG9yZGVyOiAyO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBvcmRlcjogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUsIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUgLmNhbC1ldmVudC10aXRsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zLCAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiwgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24gLmljb24sIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24gLmljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctNCk7XG59XG5cbi5jYWwtZXZlbnQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG52ZXgtY2FsZW5kYXIgLmNhbGVuZGFyLWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZGVtby9sYW5kc2NhcGUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-admin-calendar',
          templateUrl: './admin-calendar.component.html',
          styleUrls: ['./admin-calendar.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }];
      }, {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modalContent', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-calendar/admin-calendar.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-calendar.module.ts ***!
    \***************************************************************/

  /*! exports provided: AdminCalendarModule */

  /***/
  function srcAppAdminAdminCalendarAdminCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminCalendarModule", function () {
      return AdminCalendarModule;
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


    var _admin_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-calendar-routing.module */
    "./src/app/admin/admin-calendar/admin-calendar-routing.module.ts");
    /* harmony import */


    var _admin_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-calendar.component */
    "./src/app/admin/admin-calendar/admin-calendar.component.ts");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calendar-edit/calendar-edit.component */
    "./src/app/admin/admin-calendar/calendar-edit/calendar-edit.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../@vex/components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var AdminCalendarModule = function AdminCalendarModule() {
      _classCallCheck(this, AdminCalendarModule);
    };

    AdminCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminCalendarModule
    });
    AdminCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminCalendarModule_Factory(t) {
        return new (t || AdminCalendarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCalendarRoutingModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
      }), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCalendarModule, {
        declarations: [_admin_calendar_component__WEBPACK_IMPORTED_MODULE_3__["AdminCalendarComponent"], _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCalendarRoutingModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_calendar_component__WEBPACK_IMPORTED_MODULE_3__["AdminCalendarComponent"], _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCalendarRoutingModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
          }), _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"]],
          entryComponents: [_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_6__["CalendarEditComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-calendar/calendar-edit/calendar-edit.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/admin-calendar/calendar-edit/calendar-edit.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CalendarEditComponent */

  /***/
  function srcAppAdminAdminCalendarCalendarEditCalendarEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEditComponent", function () {
      return CalendarEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CalendarEditComponent = /*#__PURE__*/function () {
      function CalendarEditComponent(dialogRef, event, fb, route, authService) {
        _classCallCheck(this, CalendarEditComponent);

        this.dialogRef = dialogRef;
        this.event = event;
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.form = this.fb.group({
          startTime: null,
          endTime: null,
          department: null,
          role: null,
          title: null
        });
      }

      _createClass(CalendarEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form.patchValue(this.event);
        }
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(Object.assign(Object.assign({}, this.event), this.form.value));
        }
      }, {
        key: "goToJob",
        value: function goToJob() {
          var _this4 = this;

          this.authService.currentScrumboard = [{
            id: this.event.client.id,
            title: this.event.client.client,
            children: [// { id:1, label:'Unassigned Shifts', children:[] },
            // { id:2, label:'Assigned', children:[] },
            {
              id: 1,
              label: 'In Progress',
              children: []
            }, {
              id: 2,
              label: 'Submitted',
              children: []
            }, {
              id: 3,
              label: 'Completed',
              children: []
            }]
          }];
          this.authService.currentJob = this.event;
          var arrLabel = ['In Progress', 'Submitted', 'Completed'];
          console.log('&&&&');
          console.log(this.event.client);
          console.log('&&&&');
          arrLabel.forEach(function (ele, index) {
            if (ele == _this4.event.client.statusStr) _this4.authService.currentScrumboard[0].children[index].children.push({
              id: _this4.event.client.id,
              title: _this4.event.client.client,
              client: _this4.event.client.client,
              department: _this4.event.client.department,
              role: _this4.event.client.role,
              shiftDate: _this4.event.client.shiftDate,
              startTime: _this4.event.client.startTime,
              endTime: _this4.event.client.endTime,
              locationShift: _this4.event.client.locationShift,
              purchaseOrderNo: _this4.event.client.purchaseOrderNo,
              additionalInformation: _this4.event.client.additionalInformation,
              statusStr: _this4.event.client.statusStr,
              fulfilled: _this4.event.client.fulfilled,
              total: _this4.event.client.total,
              totalStaff: _this4.event.client.totalStaff,
              clientId: _this4.event.client.clientId,
              timesheetId: _this4.event.client.timesheetId
            });
          });
          this.authService.setCurrentScrumboardLocal(this.authService.currentScrumboard);
          this.route.navigate(['/admin/jobs/scrumboard', this.event.client.id]);
          this.dialogRef.close(Object.assign(Object.assign({}, this.event), this.form.value));
        }
      }]);

      return CalendarEditComponent;
    }();

    CalendarEditComponent.ɵfac = function CalendarEditComponent_Factory(t) {
      return new (t || CalendarEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    CalendarEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarEditComponent,
      selectors: [["vex-calendar-edit"]],
      decls: 28,
      vars: 2,
      consts: [["matDialogTitle", ""], [3, "formGroup"], [1, "flex", "flex-col"], ["formControlName", "title", "matInput", "", "readonly", ""], ["formControlName", "department", "matInput", "", "readonly", ""], ["formControlName", "role", "matInput", "", "readonly", ""], ["formControlName", "startTime", "matInput", "", "readonly", ""], ["formControlName", "endTime", "matInput", "", "readonly", ""], [1, "flex", "justify-center"], ["color", "primary", "mat-raised-button", "", 1, "save", 3, "click"]],
      template: function CalendarEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Start Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "End Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-dialog-actions", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEditComponent_Template_button_click_26_listener() {
            return ctx.goToJob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go to Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.event.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNhbGVuZGFyL2NhbGVuZGFyLWVkaXQvY2FsZW5kYXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-calendar-edit',
          templateUrl: './calendar-edit.component.html',
          styleUrls: ['./calendar-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-calendar-admin-calendar-module-es5.js.map