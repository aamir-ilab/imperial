function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-calendar-admin-job-admin-job-module"], {
  /***/
  "./src/app/admin/admin-calendar/admin-job/admin-job-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-job/admin-job-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminJobRoutingModule */

  /***/
  function srcAppAdminAdminCalendarAdminJobAdminJobRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminJobRoutingModule", function () {
      return AdminJobRoutingModule;
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


    var _admin_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-job.component */
    "./src/app/admin/admin-calendar/admin-job/admin-job.component.ts");

    var routes = [{
      path: '',
      redirectTo: '1'
    }, {
      path: ':scrumboardId',
      component: _admin_job_component__WEBPACK_IMPORTED_MODULE_2__["AdminJobComponent"],
      data: {
        scrollDisabled: true,
        containerEnabled: true
      }
    }];

    var AdminJobRoutingModule = function AdminJobRoutingModule() {
      _classCallCheck(this, AdminJobRoutingModule);
    };

    AdminJobRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AdminJobRoutingModule
    });
    AdminJobRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AdminJobRoutingModule_Factory(t) {
        return new (t || AdminJobRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminJobRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminJobRoutingModule, [{
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
  "./src/app/admin/admin-calendar/admin-job/admin-job.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-job/admin-job.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminJobComponent */

  /***/
  function srcAppAdminAdminCalendarAdminJobAdminJobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminJobComponent", function () {
      return AdminJobComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../@vex/utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-notifications */
    "./node_modules/@iconify/icons-ic/twotone-notifications.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-insert-comment */
    "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-attach-file */
    "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/scrumboard-dialog/scrumboard-dialog.component */
    "./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../@vex/components/popover/popover.service */
    "./src/@vex/components/popover/popover.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../../@vex/components/scrollbar/scrollbar.component */
    "./src/@vex/components/scrollbar/scrollbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function AdminJobComponent_div_0_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 10);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r2.icStar);
      }
    }

    function AdminJobComponent_div_0_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 11);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r3.icStarBorder);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 28);
      }

      if (rf & 2) {
        var label_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", label_r14.bgClass);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AdminJobComponent_div_0_div_9_div_6_div_2_div_1_Template, 1, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", card_r10.labels);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_div_5_div_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 33);
      }

      if (rf & 2) {
        var user_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", user_r18.workerId)("src", user_r18.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AdminJobComponent_div_0_div_9_div_6_div_5_div_1_img_1_Template, 1, 2, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", card_r10.timesheetId);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AdminJobComponent_div_0_div_9_div_6_div_5_div_1_Template, 2, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r10.timesheetId == null ? null : card_r10.timesheetId.length) > 0);
      }
    }

    function AdminJobComponent_div_0_div_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminJobComponent_div_0_div_9_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

          var card_r10 = ctx.$implicit;

          var list_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r21.open(board_r1, list_r5, card_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AdminJobComponent_div_0_div_9_div_6_div_2_Template, 2, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AdminJobComponent_div_0_div_9_div_6_div_5_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDragData", card_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r10.labels == null ? null : card_r10.labels.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", card_r10.title, " - ", card_r10.timesheetId == null ? null : card_r10.timesheetId.length, "/", card_r10.total, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r10.workerId == null ? null : card_r10.workerId.length) > 0);
      }
    }

    function AdminJobComponent_div_0_div_9_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Card Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminJobComponent_div_0_div_9_ng_template_9_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

          var close_r25 = ctx.close;

          var list_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r26.createCard(list_r5, close_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CREATE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r9.addCardCtrl);
      }
    }

    function AdminJobComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "vex-scrollbar", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function AdminJobComponent_div_0_div_9_Template_div_cdkDropListDropped_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r29.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AdminJobComponent_div_0_div_9_div_6_Template, 6, 6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AdminJobComponent_div_0_div_9_ng_template_9_Template, 7, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var list_r5 = ctx.$implicit;

        var board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined)("cdkDragData", list_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r5.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", list_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListConnectedTo", ctx_r4.getConnectedList(board_r1))("cdkDropListData", list_r5.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", list_r5.children)("ngForTrackBy", ctx_r4.trackById);
      }
    }

    function AdminJobComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminJobComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

          var board_r1 = ctx.ngIf;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r32.toggleStar(board_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AdminJobComponent_div_0_mat_icon_5_Template, 1, 1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AdminJobComponent_div_0_mat_icon_6_Template, 1, 1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function AdminJobComponent_div_0_Template_div_cdkDropListDropped_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r34.dropList($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AdminJobComponent_div_0_div_9_Template, 11, 8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var board_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.currentScrum.title + " ( " + ctx_r0.currentScrum.startTime + "h ~ " + ctx_r0.currentScrum.endTime + "h )");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", board_r1.starred);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !board_r1.starred);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@stagger", undefined)("cdkDropListData", board_r1.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", board_r1.children)("ngForTrackBy", ctx_r0.trackById);
      }
    }

    var AdminJobComponent = /*#__PURE__*/function () {
      // scrumboardUsers;
      function AdminJobComponent(dialog, route, popover, authService) {
        _classCallCheck(this, AdminJobComponent);

        this.dialog = dialog;
        this.route = route;
        this.popover = popover;
        this.authService = authService;
        this.currentScrum = this.authService.currentJob;
        this.addCardCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](); // addListCtrl = new FormControl();

        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
        this.icNotifications = _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_12___default.a;
        console.log('admin job scrumboard construct');
      }

      _createClass(AdminJobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log('admin job scrumboard ng on int');
          if (!this.authService.currentScrumboard) this.authService.setCurrentScrumboard();
          console.log(this.authService.currentScrumboard);
          this.board$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (paramMap) {
            return +paramMap.get('scrumboardId');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (scrumboardId) {
            return _this.authService.currentScrumboard.find(function (board) {
              return board.id === scrumboardId;
            });
          }));
        }
      }, {
        key: "open",
        value: function open(board, list, card) {
          this.addCardCtrl.setValue(null);
          this.dialog.open(_components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ScrumboardDialogComponent"], {
            data: {
              card: card,
              list: list,
              board: board
            },
            width: '700px',
            maxWidth: '100%',
            disableClose: true
          }).beforeClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(Boolean)).subscribe(function (value) {
            console.log(value);
            var index = list.children.findIndex(function (child) {
              return child.id === card.id;
            });

            if (index > -1) {
              list.children[index] = value;
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          var _this2 = this;

          if (event.previousContainer === event.container) {
            // alert('1')
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            // alert('2')
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex); // alert(event.container.id)

            this.authService.setStatusJob(event.container.data[0].id, event.container.id).subscribe(function (res) {
              console.log(res);

              _this2.authService.openSnackbar('status has updated successfully');
            }); // console.log('^&^&^&')
            // console.log(event.container)
          }
        }
      }, {
        key: "dropList",
        value: function dropList(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
      }, {
        key: "getConnectedList",
        value: function getConnectedList(board) {
          return board.children.map(function (x) {
            return "".concat(x.id);
          });
        }
      }, {
        key: "openAddCard",
        value: function openAddCard(list, content, origin) {
          this.popover.open({
            content: content,
            origin: origin,
            position: [{
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'bottom'
            }, {
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'top'
            }]
          });
        }
      }, {
        key: "openAddList",
        value: function openAddList(board, content, origin) {
          this.popover.open({
            content: content,
            origin: origin,
            position: [{
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'top'
            }, {
              originX: 'center',
              originY: 'bottom',
              overlayX: 'center',
              overlayY: 'top'
            }]
          });
        }
      }, {
        key: "createCard",
        value: function createCard(list, close) {
          if (!this.addCardCtrl.value) {
            return;
          }

          list.children.push({
            id: AdminJobComponent.nextId++,
            title: this.addCardCtrl.value
          });
          close();
          this.addCardCtrl.setValue(null);
        } // createList(board: Scrumboard, close: () => void) {
        //   if (!this.addListCtrl.value) {
        //     return;
        //   }
        //   board.children.push({
        //     id: AdminJobComponent.nextId++,
        //     label: this.addListCtrl.value,
        //     children: []
        //   });
        //   close();
        //   this.addListCtrl.setValue(null);
        // }

      }, {
        key: "toggleStar",
        value: function toggleStar(board) {
          board.starred = !board.starred;
        }
      }]);

      return AdminJobComponent;
    }();

    AdminJobComponent.nextId = 100;

    AdminJobComponent.??fac = function AdminJobComponent_Factory(t) {
      return new (t || AdminJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_17__["PopoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]));
    };

    AdminJobComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AdminJobComponent,
      selectors: [["vex-admin-job"]],
      decls: 2,
      vars: 3,
      consts: [["class", "h-full w-full overflow-hidden", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", 1, "h-full", "w-full", "overflow-hidden"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "py-4", "px-gutter"], [1, "title", "m-0"], ["mat-icon-button", "", "type", "button", 1, "ml-2", 3, "click"], ["class", "text-amber", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], ["fxFlex", ""], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "24px", "vexContainer", "", 1, "px-gutter", "pb-gutter", "min-h-0", "overflow-x-auto", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", "cdkDropListGroup", "", "class", "rounded bg-app-bar overflow-hidden max-h-full w-full max-w-xxs", "fxFlex", "none", "fxLayout", "column", 3, "cdkDragData", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-amber", 3, "icIcon"], [3, "icIcon"], ["cdkDrag", "", "cdkDropListGroup", "", "fxFlex", "none", "fxLayout", "column", 1, "rounded", "bg-app-bar", "overflow-hidden", "max-h-full", "w-full", "max-w-xxs", 3, "cdkDragData"], ["cdkDragHandle", "", "fxFlex", "none", 1, "p-4", "cursor-pointer"], ["fxFlex", "none", 1, "subheading-2", "font-medium", "m-0", "select-none"], [1, "flex-auto"], ["cdkDropList", "", 1, "px-4", "pb-4", 3, "cdkDropListConnectedTo", "cdkDropListData", "id", "cdkDropListDropped"], ["cdkDrag", "", "class", "scrumboard-card card w-full cursor-pointer overflow-hidden", 3, "cdkDragData", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex", "none", 1, "bg-hover"], ["addCardOriginRef", ""], ["addCardTemplate", ""], ["cdkDrag", "", 1, "scrumboard-card", "card", "w-full", "cursor-pointer", "overflow-hidden", 3, "cdkDragData", "click"], [1, "p-4"], ["class", "mb-2", "fxLayout", "row", "fxLayoutGap", "8px", 4, "ngIf"], [1, "body-2", "m-0", "select-none"], ["class", "mt-2", "fxLayout", "row", "fxLayoutGap", "8px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "mb-2"], ["class", "label", "fxFlex", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "label", 3, "ngClass"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "mt-2"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "end center", 4, "ngIf"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "end center"], ["class", "avatar overlapping", 3, "matTooltip", "src", 4, "ngFor", "ngForOf"], [1, "avatar", "overlapping", 3, "matTooltip", "src"], [1, "card", "px-4", "py-6"], [1, "vex-dense-form-field"], ["matInput", "", "placeholder", "Enter your title...", 3, "formControl"], ["color", "primary", "mat-button", "", "matSuffix", "", "type", "button", 1, "-top-1", 3, "click"]],
      template: function AdminJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AdminJobComponent_div_0_Template, 10, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.board$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_24__["IconDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_25__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultClassDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatSuffix"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]],
      styles: [".vex-style-dark vex-scrumboard .scrumboard-card:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.scrumboard-card[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding-16);\n}\n\n.scrumboard-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  height: 6px;\n  max-width: 32px;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: var(--font-weight-medium);\n  margin-left: 3px;\n  margin-right: 3px;\n  vertical-align: bottom;\n}\n\n.avatar.overlapping[_ngcontent-%COMP%] {\n  border: 2px solid var(--background-card);\n  height: 23px;\n  margin-right: -8px;\n  width: 23px;\n}\n\n.avatar.overlapping[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: var(--elevation-z8);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .scrumboard-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2FsZW5kYXIvYWRtaW4tam9iL2FkbWluLWpvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOztFQUFBOztBQUlBO0VBQ0UsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHNEQUFBO0FBQUY7O0FBR0E7RUFDRSxpRUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tY2FsZW5kYXIvYWRtaW4tam9iL2FkbWluLWpvYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudmV4LXN0eWxlLWRhcmsgdmV4LXNjcnVtYm9hcmQgLnNjcnVtYm9hcmQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xufVxuXG4uc2NydW1ib2FyZC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQgLmxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgbWF4LXdpZHRoOiAzMnB4O1xufVxuXG4uc2NydW1ib2FyZC1jYXJkIC5ib3gge1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQgLmJveCAuYm94LXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmF2YXRhci5vdmVybGFwcGluZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY2FyZCk7XG4gIGhlaWdodDogMjNweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICB3aWR0aDogMjNweDtcbn1cblxuLmF2YXRhci5vdmVybGFwcGluZzpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi8qXG4gIENkayBEcmFnICYgRHJvcFxuICovXG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo4KTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuc2NydW1ib2FyZC1jYXJkOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpICFpbXBvcnRhbnQ7XG59Il19 */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_14__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-admin-job',
          templateUrl: './admin-job.component.html',
          styleUrls: ['./admin-job.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_13__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_14__["fadeInUp400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
        }, {
          type: _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_17__["PopoverService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-calendar/admin-job/admin-job.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-job/admin-job.module.ts ***!
    \********************************************************************/

  /*! exports provided: AdminJobModule */

  /***/
  function srcAppAdminAdminCalendarAdminJobAdminJobModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminJobModule", function () {
      return AdminJobModule;
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


    var _admin_job_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-job-routing.module */
    "./src/app/admin/admin-calendar/admin-job/admin-job-routing.module.ts");
    /* harmony import */


    var _admin_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-job.component */
    "./src/app/admin/admin-calendar/admin-job/admin-job.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../@vex/components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../@vex/pipes/date-tokens/date-tokens.module */
    "./src/@vex/pipes/date-tokens/date-tokens.module.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/scrumboard-dialog/scrumboard-dialog.module */
    "./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.module.ts");
    /* harmony import */


    var _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../@vex/components/popover/popover.module */
    "./src/@vex/components/popover/popover.module.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var AdminJobModule = function AdminJobModule() {
      _classCallCheck(this, AdminJobModule);
    };

    AdminJobModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AdminJobModule
    });
    AdminJobModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AdminJobModule_Factory(t) {
        return new (t || AdminJobModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_job_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminJobRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminJobModule, {
        declarations: [_admin_job_component__WEBPACK_IMPORTED_MODULE_3__["AdminJobComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_job_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminJobRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminJobModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_job_component__WEBPACK_IMPORTED_MODULE_3__["AdminJobComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_job_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminJobRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: ScrumboardDialogComponent */

  /***/
  function srcAppAdminAdminCalendarAdminJobComponentsScrumboardDialogScrumboardDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardDialogComponent", function () {
      return ScrumboardDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assignment */
    "./node_modules/@iconify/icons-ic/twotone-assignment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../static-data/scrumboard */
    "./src/static-data/scrumboard.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete */
    "./node_modules/@iconify/icons-ic/twotone-delete.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-image */
    "./node_modules/@iconify/icons-ic/twotone-image.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-attach-file */
    "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-insert-comment */
    "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ScrumboardDialogComponent_img_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "img", 36);
      }

      if (rf & 2) {
        var user_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matTooltip", user_r5.workerId.workerId)("src", user_r5.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
      }
    }

    function ScrumboardDialogComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var user_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", user_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", user_r6.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](user_r6.workerId);
      }
    }

    function ScrumboardDialogComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ScrumboardDialogComponent_ng_template_64_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

          var attachment_r7 = ctx.attachment;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r8.makeCover(attachment_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Make Cover");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ScrumboardDialogComponent_ng_template_64_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

          var attachment_r7 = ctx.attachment;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r10.remove(attachment_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r4.icImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r4.icDelete);
      }
    }

    var ScrumboardDialogComponent = /*#__PURE__*/function () {
      function ScrumboardDialogComponent(dialogRef, data, fb, authService) {
        _classCallCheck(this, ScrumboardDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.authService = authService;
        this.form = this.fb.group({
          title: null,
          client: null,
          department: null,
          role: null,
          shiftDate: null,
          startTime: null,
          endTime: null,
          locationShift: null,
          purchaseOrderNo: null,
          additionalInformation: null,
          statusStr: null,
          fulfilled: 0,
          total: 0,
          totalStaff: null,
          clientId: null,
          timesheetId: [],
          // cover: null,
          // attachments: this.fb.array([]),
          // comments: this.fb.array([]),
          users: []
        });
        this.commentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.originalTimesheets = [];
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icImage = _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_15___default.a; // users = scrumboardUsers;

        this.labels = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_6__["scrumboardLabels"];
        this.wokersSelect = [];
      }

      _createClass(ScrumboardDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var tempArr, card, shiftDateStr;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.authService.AllUser) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return this.authService.getAllJobAuth();

                  case 3:
                    console.log('<><><><><><><><><><><<><><><><><><><><>');
                    console.log(this.authService.AllUser);
                    tempArr = this.authService.AllUser;
                    this.workerId = [];
                    tempArr.forEach(function (obj) {
                      if (obj.accountType == 'Worker') _this3.workerId.push({
                        profilePhoto: obj.profilePhoto,
                        name: "".concat(obj.forename, " ").concat(obj.surename),
                        workerId: obj.workerId,
                        emailAddress: obj.emailAddress,
                        id: obj._id
                      });
                    });
                    console.log(this.workerId);
                    console.log(this.data.card); // tempArr.filter(obj => if(obj.accountType == 'Worker'){ return {profilePhoto:obj.profilePhoto, };});

                    this.list = this.data.list;
                    this.board = this.data.board;
                    card = this.data.card;
                    this.fulfilled = card.timesheetId.length;
                    this.originalTimesheets = card.timesheetId; // this.workerId = card.workerId;

                    this.newWorkerId = [];
                    this.oldWorkerId = [];
                    card.timesheetId.forEach(function (element) {
                      _this3.newWorkerId.push({
                        profilePhoto: element.profilePhoto,
                        workerId: element.workerId,
                        id: element.id
                      });

                      _this3.oldWorkerId.push({
                        profilePhoto: element.profilePhoto,
                        workerId: element.workerId,
                        id: element.id
                      });
                    });
                    shiftDateStr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_16__["formatDate"])(new Date(card.shiftDate), 'yyyy-MM-dd', 'en').toString();
                    console.log(card);
                    console.log(this.workerId);
                    this.form.valueChanges.subscribe(console.log);
                    this.form.patchValue({
                      title: card.title || null,
                      client: card.client || null,
                      department: card.department || null,
                      role: card.role || null,
                      shiftDate: shiftDateStr || null,
                      startTime: card.startTime || null,
                      endTime: card.endTime || null,
                      locationShift: card.locationShift || null,
                      purchaseOrderNo: card.purchaseOrderNo || null,
                      additionalInformation: card.additionalInformation || null,
                      statusStr: card.statusStr || null,
                      fulfilled: card.fulfilled || 0,
                      total: card.total || 0,
                      totalStaff: card.totalStaff || null,
                      clientId: card.clientId || null,
                      timesheetId: this.newWorkerId || [],
                      users: card.users || []
                    }); // this.form.setControl('attachments', this.fb.array(card.attachments || []));
                    // this.form.setControl('comments', this.fb.array(card.comments || []));

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this4 = this;

          console.log('.........../.././././'); // console.log(this.data.card.timesheetId[0].JobId)

          console.log(this.newWorkerId);

          if (this.originalTimesheets.length > 0) {
            this.authService.removeTimesheetsJob(this.originalTimesheets).subscribe(function (res) {
              console.log(_this4.data.card.timesheetId);
              console.log(_this4.data.card.id);

              _this4.authService.setJobWorkers(_this4.newWorkerId, _this4.data.card.id).subscribe(function (res) {
                // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
                console.log('setJobWOrker');
                console.log(res);
              });

              _this4.dialogRef.close(_this4.form.value);
            });
          } else {
            console.log('./.././././');
            console.log(this.newWorkerId);
            console.log(this.data.card.id);
            this.authService.setJobWorkers(this.newWorkerId, this.data.card.id).subscribe(function (res) {
              // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
              console.log('setJobWOrker');
              console.log(res);

              _this4.authService.openSnackbar('updated Successfully');
            });
            this.dialogRef.close(this.form.value);
          }

          this.authService.openSnackbar('updated Successfully');
          var controls = this.form.controls;
          var resultArr = this.oldWorkerId.filter(function (_ref) {
            var id1 = _ref.id;
            return !_this4.newWorkerId.some(function (_ref2) {
              var id2 = _ref2.id;
              return id2 === id1;
            });
          });

          if (resultArr.length > 0) {
            resultArr.forEach(function (elementR) {
              var obj = {
                subject: "Your shift has been cancelled  " + _this4.data.card.timesheetId[0].JobId,
                name: elementR.workerId.forename + ' ' + elementR.workerId.surename,
                email: elementR.workerId.emailAddress,
                content1: "Your shift with ".concat(_this4.data.card.clientId.firstName, " ").concat(_this4.data.card.clientId.lastName, " has been cancelled."),
                content2: "We are sorry for any inconvenience this may have caused.",
                content3: "If you have any questions, please feel free to contact us.",
                btn: 'LOGIN TO PORTAL',
                btn_link: 'http://imperial-recruitment.herokuapp.com/#/login',
                link: ''
              };
              console.log('obj');
              console.log(obj);

              _this4.authService.sendEmail(obj).subscribe(function (sendemail_res) {
                console.log('crate job email');
              });
            });
          }

          this.newWorkerId.forEach(function (element) {
            var obj = {
              subject: "You have been assigned a new shift " + _this4.data.card.timesheetId[0].JobId,
              name: element.name,
              email: element.emailAddress,
              content1: "You have been assigned a shift with ".concat(_this4.data.card.clientId.firstName, " ").concat(_this4.data.card.clientId.lastName, " "),
              content2: "Please read the shift details carefully below. If you have any questions relating to the shift, or if you\u2019re unable to attend this shift, please contact Imperial Recruitment as soon as possible on 020 7436 7424.",
              content3: "<span>Shift Date: ".concat(controls.shiftDate.value, " </span><br/>\n            <span>Shift start time: ").concat(controls.startTime.value, " \u2013 ").concat(controls.endTime.value, "</span><br/>\n            <span>Role: ").concat(controls.role.value, "</span><br/>"),
              btn: 'LOGIN TO PORTAL',
              btn_link: 'http://imperial-recruitment.herokuapp.com/#/login',
              link: ''
            };
            console.log('obj');
            console.log(obj);

            _this4.authService.sendEmail(obj).subscribe(function (sendemail_res) {
              console.log('crate job email');
            });
          });
        }
      }, {
        key: "isImageExtension",
        value: function isImageExtension(extension) {
          return extension === 'jpg' || extension === 'png';
        }
      }, {
        key: "makeCover",
        value: function makeCover(attachment) {
          this.form.get('cover').setValue(attachment);
        }
      }, {
        key: "isCover",
        value: function isCover(attachment) {
          return this.form.get('cover').value === attachment;
        }
      }, {
        key: "remove",
        value: function remove(attachment) {
          if (this.form.get('cover').value && attachment.id === this.form.get('cover').value.id) {
            this.form.get('cover').setValue(null);
          }

          this.form.setControl('attachments', this.fb.array(this.form.get('attachments').value.filter(function (a) {
            return a !== attachment;
          })));
        }
      }, {
        key: "addComment",
        value: function addComment() {
          if (!this.commentCtrl.value) {
            return;
          }

          var comments = this.form.get('comments');
          comments.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
            from: {
              name: 'David Smith',
              imageSrc: 'assets/img/avatars/1.jpg'
            },
            message: this.commentCtrl.value,
            date: luxon__WEBPACK_IMPORTED_MODULE_14__["DateTime"].local().minus({
              seconds: 1
            })
          }));
          this.commentCtrl.setValue(null);
        }
      }, {
        key: "onWorker",
        value: function onWorker(ev) {
          // console.log('//////')
          // console.log(ev)
          this.fulfilled = ev.value.length; // console.log(this.newWorkerId);
          // console.log(this.workerId);
        }
      }]);

      return ScrumboardDialogComponent;
    }();

    ScrumboardDialogComponent.??fac = function ScrumboardDialogComponent_Factory(t) {
      return new (t || ScrumboardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]));
    };

    ScrumboardDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: ScrumboardDialogComponent,
      selectors: [["vex-scrumboard-dialog"]],
      decls: 65,
      vars: 14,
      consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "mb-0", "body-1"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "m-0"], ["fxFlex", "none", "size", "24px", 1, "ltr:mr-1", "rtl:ml-1", "text-secondary", 3, "icon"], ["formControlName", "title", "fxFlex", "auto", 1, "hidden-input", "title", "bg-card"], ["cdkFocusInitial", "", "mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "text-secondary", "ltr:ml-10", "rtl:mr-10"], [1, "w-1", "h-1", "mx-2", "bg-gray", "rounded-full"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "mt-3", "ltr:ml-10", "rtl:mr-10"], ["fxFlex", "none", 1, "members"], [1, "body-2", "text-secondary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "avatar", "fxFlex", "none", 3, "matTooltip", "src", 4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "avatar", "text-secondary", "bg-app-bar", "cursor-pointer", 3, "click"], ["size", "24px", 3, "icon"], ["formControlName", "timesheetId", "fxFlex", "0 1 0px", "multiple", "", 1, "invisible", "w-0", "h-0", "text-sm", 3, "ngModel", "selectionChange", "ngModelChange"], ["memberSelect", "matSelect"], [3, "value", 4, "ngFor", "ngForOf"], [1, "-mx-6", "mt-6"], [1, "pb-6", "content"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "font-medium", "m-0", "mt-6", "text-secondary"], ["fxFlex", "none", "size", "24px", 1, "ltr:mr-4", "rtl:ml-4", 3, "icon"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "16px", "fxLayoutGap.lt-sm", "0"], ["appearance", "outline", "fxFlex", "auto"], ["formControlName", "client", "matInput", "", "readonly", "", "required", ""], ["formControlName", "department", "matInput", "", "readonly", "", "required", ""], ["formControlName", "role", "matInput", "", "readonly", "", "required", ""], ["formControlName", "shiftDate", "matInput", "", "readonly", "", "required", ""], ["formControlName", "startTime", "matInput", "", "readonly", "", "required", ""], ["formControlName", "endTime", "matInput", "", "readonly", "", "required", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-raised-button", "", "type", "submit"], ["attachmentMenu", "matMenu"], ["matMenuContent", ""], ["fxFlex", "none", 1, "avatar", 3, "matTooltip", "src"], [3, "value"], [1, "avatar", "h-6", "w-6", "align-middle", "inline-block", "ltr:mr-2", "rtl:ml-2", 3, "src"], ["mat-menu-item", "", 3, "click"]],
      template: function ScrumboardDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function ScrumboardDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "ic-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, ScrumboardDialogComponent_img_19_Template, 1, 2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ScrumboardDialogComponent_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](23);

            return _r1.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "ic-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "mat-select", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("selectionChange", function ScrumboardDialogComponent_Template_mat_select_selectionChange_22_listener($event) {
            return ctx.onWorker($event);
          })("ngModelChange", function ScrumboardDialogComponent_Template_mat_select_ngModelChange_22_listener($event) {
            return ctx.newWorkerId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, ScrumboardDialogComponent_mat_option_24_Template, 4, 3, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "mat-divider", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-dialog-content", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "ic-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Job Detail Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Client ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Shift Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Start Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "End Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "mat-dialog-actions", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "SAVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "mat-menu", null, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](64, ScrumboardDialogComponent_ng_template_64_Template, 8, 2, "ng-template", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", ctx.icAssignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("empty", !ctx.form.get("title").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icClose);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.board == null ? null : ctx.board.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.list == null ? null : ctx.list.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("WORKERS ", ctx.fulfilled, " / ", ctx.form.get("total").value, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.form.get("timesheetId").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", ctx.icAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.newWorkerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.workerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", ctx.icDescription);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuItem"]],
      styles: [".members[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid var(--background-card);\n  box-sizing: border-box;\n  height: 36px;\n  margin-right: -8px;\n  margin-top: var(--padding-4);\n  width: 36px;\n}\n\n.members[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  font: var(--font-caption);\n  height: 32px;\n  line-height: 32px;\n  margin-top: var(--padding-4);\n  min-width: 32px;\n  padding-left: var(--padding-8);\n  padding-right: var(--padding-8);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:last-of-type {\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-height: 40vh;\n}\n\n@media (min-width: 600px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 50vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2FsZW5kYXIvYWRtaW4tam9iL2NvbXBvbmVudHMvc2NydW1ib2FyZC1kaWFsb2cvc2NydW1ib2FyZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1jYWxlbmRhci9hZG1pbi1qb2IvY29tcG9uZW50cy9zY3J1bWJvYXJkLWRpYWxvZy9zY3J1bWJvYXJkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzIC5hdmF0YXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy00KTtcbiAgd2lkdGg6IDM2cHg7XG59XG5cbi5tZW1iZXJzIC5hdmF0YXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmxhYmVscyAubGFiZWwge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy00KTtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubGFiZWxzIC5sYWJlbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ScrumboardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'vex-scrumboard-dialog',
          templateUrl: './scrumboard-dialog.component.html',
          styleUrls: ['./scrumboard-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ScrumboardDialogModule */

  /***/
  function srcAppAdminAdminCalendarAdminJobComponentsScrumboardDialogScrumboardDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardDialogModule", function () {
      return ScrumboardDialogModule;
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


    var _scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scrumboard-dialog.component */
    "./src/app/admin/admin-calendar/admin-job/components/scrumboard-dialog/scrumboard-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../@vex/pipes/relative-date-time/relative-date-time.module */
    "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");

    var ScrumboardDialogModule = function ScrumboardDialogModule() {
      _classCallCheck(this, ScrumboardDialogModule);
    };

    ScrumboardDialogModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ScrumboardDialogModule
    });
    ScrumboardDialogModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ScrumboardDialogModule_Factory(t) {
        return new (t || ScrumboardDialogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_14__["RelativeDateTimeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ScrumboardDialogModule, {
        declarations: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_14__["RelativeDateTimeModule"]],
        exports: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardDialogComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrumboardDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_14__["RelativeDateTimeModule"]],
          exports: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardDialogComponent"]],
          entryComponents: [_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-calendar-admin-job-admin-job-module-es5.js.map