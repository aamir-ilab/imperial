function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apps-scrumboard-scrumboard-module"], {
  /***/
  "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ScrumboardDialogComponent */

  /***/
  function srcAppPagesAppsScrumboardComponentsScrumboardDialogScrumboardDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardDialogComponent", function () {
      return ScrumboardDialogComponent;
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


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assignment */
    "./node_modules/@iconify/icons-ic/twotone-assignment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../static-data/scrumboard */
    "./src/static-data/scrumboard.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete */
    "./node_modules/@iconify/icons-ic/twotone-delete.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-image */
    "./node_modules/@iconify/icons-ic/twotone-image.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-attach-file */
    "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-insert-comment */
    "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
    /* harmony import */


    var _vex_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../../../../../@vex/pipes/relative-date-time/relative-date-time.pipe */
    "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

    function ScrumboardDialogComponent_img_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 50);
      }

      if (rf & 2) {
        var user_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", user_r10.name)("src", user_r10.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ScrumboardDialogComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var user_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", user_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", user_r11.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r11.name);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    };

    function ScrumboardDialogComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var label_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](2, _c0, label_r12.bgClass, label_r12.textClass));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", label_r12.label, " ");
      }
    }

    function ScrumboardDialogComponent_mat_option_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var label_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", label_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", label_r13.bgClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](label_r13.label);
      }
    }

    function ScrumboardDialogComponent_div_52_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var attachment_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", attachment_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ScrumboardDialogComponent_div_52_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var attachment_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](attachment_r15.extension);
      }
    }

    function ScrumboardDialogComponent_div_52_div_1_ic_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ic-icon", 67);
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r18.icStar);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        attachment: a0
      };
    };

    function ScrumboardDialogComponent_div_52_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardDialogComponent_div_52_div_1_div_1_Template, 2, 1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ScrumboardDialogComponent_div_52_div_1_div_2_Template, 2, 1, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ScrumboardDialogComponent_div_52_div_1_ic_icon_7_Template, 1, 1, "ic-icon", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var attachment_r15 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.isImageExtension(attachment_r15.extension));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r14.isImageExtension(attachment_r15.extension));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](attachment_r15.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.isCover(attachment_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](attachment_r15.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c1, attachment_r15))("matMenuTriggerFor", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r14.icMoreVert);
      }
    }

    function ScrumboardDialogComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardDialogComponent_div_52_div_1_Template, 12, 10, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.form.get("attachments").value);
      }
    }

    function ScrumboardDialogComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "relativeDateTime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var comment_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", comment_r21.from.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comment_r21.from.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 4, comment_r21.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comment_r21.message);
      }
    }

    function ScrumboardDialogComponent_ng_template_73_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardDialogComponent_ng_template_73_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var attachment_r22 = ctx.attachment;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r23.makeCover(attachment_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Make Cover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardDialogComponent_ng_template_73_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var attachment_r22 = ctx.attachment;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r25.remove(attachment_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r9.icImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r9.icDelete);
      }
    }

    var ScrumboardDialogComponent = /*#__PURE__*/function () {
      function ScrumboardDialogComponent(dialogRef, data, fb) {
        _classCallCheck(this, ScrumboardDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.form = this.fb.group({
          title: null,
          description: null,
          dueDate: null,
          cover: null,
          attachments: this.fb.array([]),
          comments: this.fb.array([]),
          users: [],
          labels: []
        });
        this.commentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icImage = _iconify_icons_ic_twotone_image__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.users = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_5__["scrumboardUsers"];
        this.labels = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_5__["scrumboardLabels"];
      }

      _createClass(ScrumboardDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.list = this.data.list;
          this.board = this.data.board;
          var card = this.data.card;
          this.form.valueChanges.subscribe(console.log);
          this.form.patchValue({
            title: card.title,
            description: card.description,
            dueDate: card.dueDate || null,
            cover: card.cover || null,
            users: card.users || [],
            labels: card.labels || []
          });
          this.form.setControl('attachments', this.fb.array(card.attachments || []));
          this.form.setControl('comments', this.fb.array(card.comments || []));
        }
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(this.form.value);
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
          comments.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            from: {
              name: 'David Smith',
              imageSrc: 'assets/img/avatars/1.jpg'
            },
            message: this.commentCtrl.value,
            date: luxon__WEBPACK_IMPORTED_MODULE_13__["DateTime"].local().minus({
              seconds: 1
            })
          }));
          this.commentCtrl.setValue(null);
        }
      }]);

      return ScrumboardDialogComponent;
    }();

    ScrumboardDialogComponent.??fac = function ScrumboardDialogComponent_Factory(t) {
      return new (t || ScrumboardDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ScrumboardDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ScrumboardDialogComponent,
      selectors: [["vex-scrumboard-dialog"]],
      decls: 74,
      vars: 20,
      consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "mb-0", "body-1"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "m-0"], ["fxFlex", "none", "size", "24px", 1, "ltr:mr-1", "rtl:ml-1", "text-secondary", 3, "icon"], ["formControlName", "title", "fxFlex", "auto", 1, "hidden-input", "title", "bg-card"], ["cdkFocusInitial", "", "mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "text-secondary", "ltr:ml-10", "rtl:mr-10"], [1, "w-1", "h-1", "mx-2", "bg-gray", "rounded-full"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "mt-3", "ltr:ml-10", "rtl:mr-10"], ["fxFlex", "none", 1, "members"], [1, "body-2", "text-secondary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "avatar", "fxFlex", "none", 3, "matTooltip", "src", 4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "avatar", "text-secondary", "bg-app-bar", "cursor-pointer", 3, "click"], ["size", "24px", 3, "icon"], ["formControlName", "users", "fxFlex", "0 1 0px", "multiple", "", 1, "invisible", "w-0", "h-0", "text-sm"], ["memberSelect", "matSelect"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "none", 1, "labels", "max-w-full"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "4px"], ["class", "label", "fxFlex", "none", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "label", "text-secondary", "bg-app-bar", "cursor-pointer", "mt-1", 3, "click"], ["formControlName", "labels", "fxFlex", "0 1 0px", "multiple", "", 1, "invisible", "w-0", "h-0", "text-sm"], ["labelSelect", "matSelect"], [1, "-mx-6", "mt-6"], [1, "pb-6", "content"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "font-medium", "m-0", "mt-6", "text-secondary"], ["fxFlex", "none", "size", "24px", 1, "ltr:mr-4", "rtl:ml-4", 3, "icon"], ["fxLayout", "column", 1, "ltr:ml-10", "rtl:mr-10", "mt-3"], ["appearance", "outline", 1, "vex-dense-form-field", "body-1"], ["cdkAutosizeMinRows", "2", "formControlName", "description", "matInput", "", "matTextareaAutosize", "", "placeholder", "Add a description ..."], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "font-medium", "m-0", "text-secondary", "mt-4"], ["fxFlex", "auto"], ["color", "primary", "mat-button", "", "type", "button"], ["inline", "true", "size", "18px", 1, "ltr:mr-1", "rtl:ml-1", "ltr:-ml-1", "rtl:-mr-1", 3, "icon"], ["class", "ltr:ml-10 rtl:mr-10 mt-3", "gdColumns", "1fr 1fr", "gdColumns.xs", "1fr", "gdGap", "16px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "body-2", "m-0", "pt-6", "text-secondary"], [1, "ltr:ml-10", "rtl:mr-10", "mt-2"], ["class", "mt-4", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mt-6"], ["fxFlex", "none", "src", "assets/img/avatars/1.jpg", 1, "avatar", "w-8", "h-8", "ltr:mr-3", "rtl:ml-3"], ["appearance", "outline", "fxFlex", "auto", 1, "vex-dense-form-field", "vex-flex-form-field"], ["matInput", "", "placeholder", "Write a comment ...", 3, "formControl"], ["color", "primary", "mat-button", "", "matSuffix", "", "type", "button", 1, "-top-1", 3, "click"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-raised-button", "", "type", "submit"], ["attachmentMenu", "matMenu"], ["matMenuContent", ""], ["fxFlex", "none", 1, "avatar", 3, "matTooltip", "src"], [3, "value"], [1, "avatar", "h-6", "w-6", "align-middle", "inline-block", "ltr:mr-2", "rtl:ml-2", 3, "src"], ["fxFlex", "none", 1, "label", 3, "ngClass"], [1, "h-6", "w-6", "align-middle", "ltr:mr-2", "rtl:ml-2", "rounded", "inline-block", 3, "ngClass"], ["gdColumns", "1fr 1fr", "gdColumns.xs", "1fr", "gdGap", "16px", 1, "ltr:ml-10", "rtl:mr-10", "mt-3"], ["class", "border p-1 rounded", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "p-1", "rounded"], ["class", "bg-app-bar rounded ltr:mr-3 rtl:ml-3 w-24 h-16 overflow-hidden relative", 4, "ngIf"], ["class", "bg-app-bar p-1 rounded ltr:mr-3 rtl:ml-3 w-100 h-16 leading-none body-2", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "m-0", "body-2", "leading-snug", "text-secondary"], [1, "m-0", "caption", "leading-snug", "text-hint"], ["inline", "true", 3, "icon", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "text-secondary", "ltr:ml-1", "rtl:mr-1", 3, "matMenuTriggerData", "matMenuTriggerFor"], [1, "bg-app-bar", "rounded", "ltr:mr-3", "rtl:ml-3", "w-24", "h-16", "overflow-hidden", "relative"], [1, "object-cover", "w-full", "h-full", 3, "src"], ["fxLayoutAlign", "center center", 1, "bg-app-bar", "p-1", "rounded", "ltr:mr-3", "rtl:ml-3", "w-100", "h-16", "leading-none", "body-2"], ["inline", "true", 3, "icon"], [1, "mt-4"], [1, "avatar", "h-8", "w-8", "ltr:mr-3", "rtl:ml-3", 3, "src"], [1, "body-2", "m-0", "leading-snug"], [1, "caption", "text-secondary", "m-0", "leading-snug"], [1, "m-0", "mt-2", "caption", "text-secondary"], ["mat-menu-item", "", 3, "click"]],
      template: function ScrumboardDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ScrumboardDialogComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "ic-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "MEMBERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ScrumboardDialogComponent_img_19_Template, 1, 2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardDialogComponent_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

            return _r1.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "ic-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-select", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ScrumboardDialogComponent_mat_option_24_Template, 4, 3, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "LABELS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ScrumboardDialogComponent_div_29_Template, 2, 5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardDialogComponent_Template_div_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

            return _r4.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "ic-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-select", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ScrumboardDialogComponent_mat_option_34_Template, 4, 3, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "mat-divider", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-dialog-content", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "ic-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "DESCRIPTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-form-field", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "textarea", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "ic-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "ATTACHMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "ic-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "ADD AN ATTACHMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, ScrumboardDialogComponent_div_52_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "mat-divider", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "ic-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "COMMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, ScrumboardDialogComponent_div_59_Template, 11, 6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-form-field", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardDialogComponent_Template_button_click_64_listener() {
            return ctx.addComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "SEND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "mat-dialog-actions", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "SAVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "mat-menu", null, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, ScrumboardDialogComponent_ng_template_73_Template, 8, 2, "ng-template", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icAssignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("empty", !ctx.form.get("title").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icClose);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.board == null ? null : ctx.board.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.list == null ? null : ctx.list.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.form.get("users").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.form.get("labels").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.labels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icAttachFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.form.get("attachments").value == null ? null : ctx.form.get("attachments").value.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icInsertComment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.form.get("comments").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.commentCtrl);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatTextareaAutosize"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatSuffix"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuContent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__["??grid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__["??grid_privateba"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuItem"]],
      pipes: [_vex_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_29__["RelativeDateTimePipe"]],
      styles: [".members[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid var(--background-card);\n  box-sizing: border-box;\n  height: 36px;\n  margin-right: -8px;\n  margin-top: var(--padding-4);\n  width: 36px;\n}\n\n.members[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  font: var(--font-caption);\n  height: 32px;\n  line-height: 32px;\n  margin-top: var(--padding-4);\n  min-width: 32px;\n  padding-left: var(--padding-8);\n  padding-right: var(--padding-8);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.labels[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:last-of-type {\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-height: 40vh;\n}\n\n@media (min-width: 600px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 50vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwcy9zY3J1bWJvYXJkL2NvbXBvbmVudHMvc2NydW1ib2FyZC1kaWFsb2cvc2NydW1ib2FyZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcHBzL3NjcnVtYm9hcmQvY29tcG9uZW50cy9zY3J1bWJvYXJkLWRpYWxvZy9zY3J1bWJvYXJkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzIC5hdmF0YXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy00KTtcbiAgd2lkdGg6IDM2cHg7XG59XG5cbi5tZW1iZXJzIC5hdmF0YXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmxhYmVscyAubGFiZWwge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy00KTtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubGFiZWxzIC5sYWJlbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrumboardDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-scrumboard-dialog',
          templateUrl: './scrumboard-dialog.component.html',
          styleUrls: ['./scrumboard-dialog.component.scss']
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
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ScrumboardDialogModule */

  /***/
  function srcAppPagesAppsScrumboardComponentsScrumboardDialogScrumboardDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts");
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

  },

  /***/
  "./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: ScrumboardRoutingModule */

  /***/
  function srcAppPagesAppsScrumboardScrumboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardRoutingModule", function () {
      return ScrumboardRoutingModule;
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


    var _scrumboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scrumboard.component */
    "./src/app/pages/apps/scrumboard/scrumboard.component.ts");

    var routes = [{
      path: '',
      redirectTo: '1'
    }, {
      path: ':scrumboardId',
      component: _scrumboard_component__WEBPACK_IMPORTED_MODULE_2__["ScrumboardComponent"],
      data: {
        scrollDisabled: true,
        containerEnabled: true
      }
    }];

    var ScrumboardRoutingModule = function ScrumboardRoutingModule() {
      _classCallCheck(this, ScrumboardRoutingModule);
    };

    ScrumboardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ScrumboardRoutingModule
    });
    ScrumboardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ScrumboardRoutingModule_Factory(t) {
        return new (t || ScrumboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ScrumboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrumboardRoutingModule, [{
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
  "./src/app/pages/apps/scrumboard/scrumboard.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/apps/scrumboard/scrumboard.component.ts ***!
    \***************************************************************/

  /*! exports provided: ScrumboardComponent */

  /***/
  function srcAppPagesAppsScrumboardScrumboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardComponent", function () {
      return ScrumboardComponent;
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


    var _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../static-data/scrumboard */
    "./src/static-data/scrumboard.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-notifications */
    "./node_modules/@iconify/icons-ic/twotone-notifications.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-insert-comment */
    "./node_modules/@iconify/icons-ic/twotone-insert-comment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-attach-file */
    "./node_modules/@iconify/icons-ic/twotone-attach-file.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/scrumboard-dialog/scrumboard-dialog.component */
    "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../@vex/components/popover/popover.service */
    "./src/@vex/components/popover/popover.service.ts");
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


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../../@vex/components/scrollbar/scrollbar.component */
    "./src/@vex/components/scrollbar/scrollbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _vex_pipes_date_tokens_date_tokens_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../../../../@vex/pipes/date-tokens/date-tokens.pipe */
    "./src/@vex/pipes/date-tokens/date-tokens.pipe.ts");

    function ScrumboardComponent_div_0_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 16);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r2.icStar);
      }
    }

    function ScrumboardComponent_div_0_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 17);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r3.icStarBorder);
      }
    }

    function ScrumboardComponent_div_0_div_8_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
      }

      if (rf & 2) {
        var user_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", user_r10.name)("src", user_r10.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ScrumboardComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardComponent_div_0_div_8_img_1_Template, 1, 2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.scrumboardUsers);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", card_r16.cover.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 40);
      }

      if (rf & 2) {
        var label_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", label_r22.bgClass);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardComponent_div_0_div_10_div_6_div_3_div_1_Template, 1, 1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", card_r16.labels);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "bg-green text-contrast-white": a0
      };
    };

    function ScrumboardComponent_div_0_div_10_div_6_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "ic-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "dateTokens");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, card_r16.dueDate.done));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r24.icNotifications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](4, 3, card_r16.dueDate.date, "MMM, dd"));
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "ic-icon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r25.icInsertComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](card_r16.comments.length);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "ic-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r26.icAttachFile);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](card_r16.attachments.length);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_6_div_4_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
      }

      if (rf & 2) {
        var user_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matTooltip", user_r32.name)("src", user_r32.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardComponent_div_0_div_10_div_6_div_6_div_4_img_1_Template, 1, 2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", card_r16.users);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardComponent_div_0_div_10_div_6_div_6_div_1_Template, 5, 8, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ScrumboardComponent_div_0_div_10_div_6_div_6_div_2_Template, 4, 2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ScrumboardComponent_div_0_div_10_div_6_div_6_div_3_Template, 4, 2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ScrumboardComponent_div_0_div_10_div_6_div_6_div_4_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", card_r16.dueDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r16.comments == null ? null : card_r16.comments.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r16.attachments == null ? null : card_r16.attachments.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r16.users == null ? null : card_r16.users.length) > 0);
      }
    }

    function ScrumboardComponent_div_0_div_10_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_div_10_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37);

          var card_r16 = ctx.$implicit;

          var list_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r35.open(board_r1, list_r11, card_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ScrumboardComponent_div_0_div_10_div_6_div_1_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ScrumboardComponent_div_0_div_10_div_6_div_3_Template, 2, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ScrumboardComponent_div_0_div_10_div_6_div_6_Template, 5, 4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var card_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDragData", card_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", card_r16.cover);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (card_r16.labels == null ? null : card_r16.labels.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](card_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", card_r16.dueDate || (card_r16.comments == null ? null : card_r16.comments.length) > 0 || (card_r16.attachments == null ? null : card_r16.attachments.length) > 0 || (card_r16.users == null ? null : card_r16.users.length) > 0);
      }
    }

    function ScrumboardComponent_div_0_div_10_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Card Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_div_10_ng_template_9_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r42);

          var close_r39 = ctx.close;

          var list_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r40.createCard(list_r11, close_r39);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CREATE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r15.addCardCtrl);
      }
    }

    function ScrumboardComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "vex-scrollbar", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function ScrumboardComponent_div_0_div_10_Template_div_cdkDropListDropped_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r43.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ScrumboardComponent_div_0_div_10_div_6_Template, 7, 5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ScrumboardComponent_div_0_div_10_ng_template_9_Template, 7, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_div_10_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

          var list_r11 = ctx.$implicit;

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r45.openAddCard(list_r11, _r14, _r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "ic-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "ADD CARD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var list_r11 = ctx.$implicit;

        var board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined)("cdkDragData", list_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r11.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", list_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("cdkDropListConnectedTo", ctx_r5.getConnectedList(board_r1))("cdkDropListData", list_r11.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", list_r11.children)("ngForTrackBy", ctx_r5.trackById);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r5.icAdd);
      }
    }

    function ScrumboardComponent_div_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "List Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_ng_template_13_Template_button_click_6_listener() {
          var close_r47 = ctx.close;
          return close_r47();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "mat-icon", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_ng_template_13_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51);

          var close_r47 = ctx.close;

          var board_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r49.createList(board_r1, close_r47);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "CREATE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx_r8.addListCtrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r8.icClose);
      }
    }

    function ScrumboardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Tech Startup Board");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);

          var board_r1 = ctx.ngIf;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r52.toggleStar(board_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ScrumboardComponent_div_0_mat_icon_5_Template, 1, 1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ScrumboardComponent_div_0_mat_icon_6_Template, 1, 1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ScrumboardComponent_div_0_div_8_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function ScrumboardComponent_div_0_Template_div_cdkDropListDropped_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r54.dropList($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ScrumboardComponent_div_0_div_10_Template, 15, 9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ScrumboardComponent_div_0_ng_template_13_Template, 10, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScrumboardComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53);

          var board_r1 = ctx.ngIf;

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r55.openAddList(board_r1, _r7, _r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "ic-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "ADD LIST");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var board_r1 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", board_r1.starred);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !board_r1.starred);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r0.scrumboardUsers == null ? null : ctx_r0.scrumboardUsers.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@stagger", undefined)("cdkDropListData", board_r1.children);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", board_r1.children)("ngForTrackBy", ctx_r0.trackById);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx_r0.icAdd);
      }
    }

    var ScrumboardComponent = /*#__PURE__*/function () {
      function ScrumboardComponent(dialog, route, popover) {
        _classCallCheck(this, ScrumboardComponent);

        this.dialog = dialog;
        this.route = route;
        this.popover = popover;
        this.board$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (paramMap) {
          return +paramMap.get('scrumboardId');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (scrumboardId) {
          return _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_3__["scrumboards"].find(function (board) {
            return board.id === scrumboardId;
          });
        }));
        this.addCardCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.addListCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
        this.icNotifications = _iconify_icons_ic_twotone_notifications__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icInsertComment = _iconify_icons_ic_twotone_insert_comment__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icAttachFile = _iconify_icons_ic_twotone_attach_file__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.scrumboardUsers = _static_data_scrumboard__WEBPACK_IMPORTED_MODULE_3__["scrumboardUsers"];
      }

      _createClass(ScrumboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(board, list, card) {
          this.addCardCtrl.setValue(null);
          this.dialog.open(_components_scrumboard_dialog_scrumboard_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ScrumboardDialogComponent"], {
            data: {
              card: card,
              list: list,
              board: board
            },
            width: '700px',
            maxWidth: '100%',
            disableClose: true
          }).beforeClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(Boolean)).subscribe(function (value) {
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
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
            id: ScrumboardComponent.nextId++,
            title: this.addCardCtrl.value
          });
          close();
          this.addCardCtrl.setValue(null);
        }
      }, {
        key: "createList",
        value: function createList(board, close) {
          if (!this.addListCtrl.value) {
            return;
          }

          board.children.push({
            id: ScrumboardComponent.nextId++,
            label: this.addListCtrl.value,
            children: []
          });
          close();
          this.addListCtrl.setValue(null);
        }
      }, {
        key: "toggleStar",
        value: function toggleStar(board) {
          board.starred = !board.starred;
        }
      }]);

      return ScrumboardComponent;
    }();

    ScrumboardComponent.nextId = 100;

    ScrumboardComponent.??fac = function ScrumboardComponent_Factory(t) {
      return new (t || ScrumboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__["PopoverService"]));
    };

    ScrumboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ScrumboardComponent,
      selectors: [["vex-scrumboard"]],
      decls: 2,
      vars: 3,
      consts: [["class", "h-full w-full overflow-hidden", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", 1, "h-full", "w-full", "overflow-hidden"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", "vexContainer", "", 1, "py-4", "px-gutter"], [1, "title", "m-0"], ["mat-icon-button", "", "type", "button", 1, "ml-2", 3, "click"], ["class", "text-amber", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], ["fxFlex", ""], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "end center", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "24px", "vexContainer", "", 1, "px-gutter", "pb-gutter", "min-h-0", "overflow-x-auto", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", "cdkDropListGroup", "", "class", "rounded bg-app-bar overflow-hidden max-h-full w-full max-w-xxs", "fxFlex", "none", "fxLayout", "column", 3, "cdkDragData", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex", "none", 1, "w-full", "max-w-xxs", "rounded", "bg-app-bar"], ["addListOriginRef", ""], ["addListTemplate", ""], ["mat-button", "", "type", "button", 1, "w-full", 3, "click"], ["inline", "true", 1, "mr-1", "-ml-1", 3, "icon"], [1, "text-amber", 3, "icIcon"], [3, "icIcon"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "end center"], ["class", "avatar overlapping", 3, "matTooltip", "src", 4, "ngFor", "ngForOf"], [1, "avatar", "overlapping", 3, "matTooltip", "src"], ["cdkDrag", "", "cdkDropListGroup", "", "fxFlex", "none", "fxLayout", "column", 1, "rounded", "bg-app-bar", "overflow-hidden", "max-h-full", "w-full", "max-w-xxs", 3, "cdkDragData"], ["cdkDragHandle", "", "fxFlex", "none", 1, "p-4", "cursor-pointer"], ["fxFlex", "none", 1, "subheading-2", "font-medium", "m-0", "select-none"], [1, "flex-auto"], ["cdkDropList", "", 1, "px-4", "pb-4", 3, "cdkDropListConnectedTo", "cdkDropListData", "id", "cdkDropListDropped"], ["cdkDrag", "", "class", "scrumboard-card card w-full cursor-pointer overflow-hidden", 3, "cdkDragData", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex", "none", 1, "bg-hover"], ["addCardOriginRef", ""], ["addCardTemplate", ""], ["cdkDrag", "", 1, "scrumboard-card", "card", "w-full", "cursor-pointer", "overflow-hidden", 3, "cdkDragData", "click"], ["class", "w-full h-40 overflow-hidden", 4, "ngIf"], [1, "p-4"], ["class", "mb-2", "fxLayout", "row", "fxLayoutGap", "8px", 4, "ngIf"], [1, "body-2", "m-0", "select-none"], ["class", "mt-2", "fxLayout", "row", "fxLayoutGap", "8px", 4, "ngIf"], [1, "w-full", "h-40", "overflow-hidden"], [1, "object-cover", "w-full", "h-full", 3, "src"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "mb-2"], ["class", "label", "fxFlex", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "label", 3, "ngClass"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "mt-2"], ["class", "box bg-app-bar text-secondary rounded caption", 3, "ngClass", 4, "ngIf"], ["class", "box bg-app-bar text-secondary rounded caption", 4, "ngIf"], [1, "box", "bg-app-bar", "text-secondary", "rounded", "caption", 3, "ngClass"], ["inline", "true", "size", "16px", 3, "icon"], [1, "box-text"], [1, "box", "bg-app-bar", "text-secondary", "rounded", "caption"], ["inline", "true", "size", "15px", 1, "ml-1", 3, "icon"], [1, "card", "px-4", "py-6"], [1, "vex-dense-form-field"], ["matInput", "", "placeholder", "Enter your title...", 3, "formControl"], ["color", "primary", "mat-button", "", "matSuffix", "", "type", "button", 1, "-top-1", 3, "click"], [1, "card", "px-4", "pt-3", "pb-2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mt-3"], ["mat-icon-button", "", "type", "button", 1, "text-secondary", "w-8", "h-8", "leading-none", 3, "click"], ["size", "18px", 3, "icIcon"], ["color", "primary", "mat-button", "", "type", "button", 3, "click"]],
      template: function ScrumboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ScrumboardComponent_div_0_Template, 19, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.board$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_23__["IconDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltip"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDragHandle"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_26__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatSuffix"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _vex_pipes_date_tokens_date_tokens_pipe__WEBPACK_IMPORTED_MODULE_30__["DateTokensPipe"]],
      styles: [".vex-style-dark vex-scrumboard .scrumboard-card:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.scrumboard-card[_ngcontent-%COMP%] {\n  margin-bottom: var(--padding-16);\n}\n\n.scrumboard-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  height: 6px;\n  max-width: 32px;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n\n.scrumboard-card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: var(--font-weight-medium);\n  margin-left: 3px;\n  margin-right: 3px;\n  vertical-align: bottom;\n}\n\n.avatar.overlapping[_ngcontent-%COMP%] {\n  border: 2px solid var(--background-card);\n  height: 23px;\n  margin-right: -8px;\n  width: 23px;\n}\n\n.avatar.overlapping[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: var(--elevation-z8);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .scrumboard-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwcy9zY3J1bWJvYXJkL3NjcnVtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTs7RUFBQTs7QUFJQTtFQUNFLCtCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxzREFBQTtBQUFGOztBQUdBO0VBQ0UsaUVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvc2NydW1ib2FyZC9zY3J1bWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC52ZXgtc3R5bGUtZGFyayB2ZXgtc2NydW1ib2FyZCAuc2NydW1ib2FyZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2NydW1ib2FyZC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZCAubGFiZWwge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBtYXgtd2lkdGg6IDMycHg7XG59XG5cbi5zY3J1bWJvYXJkLWNhcmQgLmJveCB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnNjcnVtYm9hcmQtY2FyZCAuYm94IC5ib3gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYXZhdGFyLm92ZXJsYXBwaW5nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gIHdpZHRoOiAyM3B4O1xufVxuXG4uYXZhdGFyLm92ZXJsYXBwaW5nOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLypcbiAgQ2RrIERyYWcgJiBEcm9wXG4gKi9cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejgpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5zY3J1bWJvYXJkLWNhcmQ6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgIWltcG9ydGFudDtcbn0iXX0= */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrumboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-scrumboard',
          templateUrl: './scrumboard.component.html',
          styleUrls: ['./scrumboard.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_14__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_15__["fadeInUp400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]
        }, {
          type: _vex_components_popover_popover_service__WEBPACK_IMPORTED_MODULE_18__["PopoverService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/scrumboard/scrumboard.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/apps/scrumboard/scrumboard.module.ts ***!
    \************************************************************/

  /*! exports provided: ScrumboardModule */

  /***/
  function srcAppPagesAppsScrumboardScrumboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrumboardModule", function () {
      return ScrumboardModule;
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


    var _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scrumboard-routing.module */
    "./src/app/pages/apps/scrumboard/scrumboard-routing.module.ts");
    /* harmony import */


    var _scrumboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scrumboard.component */
    "./src/app/pages/apps/scrumboard/scrumboard.component.ts");
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
    "./src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module.ts");
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

    var ScrumboardModule = function ScrumboardModule() {
      _classCallCheck(this, ScrumboardModule);
    };

    ScrumboardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ScrumboardModule
    });
    ScrumboardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ScrumboardModule_Factory(t) {
        return new (t || ScrumboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrumboardRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ScrumboardModule, {
        declarations: [_scrumboard_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrumboardRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScrumboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_scrumboard_component__WEBPACK_IMPORTED_MODULE_3__["ScrumboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _scrumboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScrumboardRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_5__["ScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _vex_pipes_date_tokens_date_tokens_module__WEBPACK_IMPORTED_MODULE_9__["DateTokensModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _components_scrumboard_dialog_scrumboard_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ScrumboardDialogModule"], _vex_components_popover_popover_module__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-apps-scrumboard-scrumboard-module-es5.js.map