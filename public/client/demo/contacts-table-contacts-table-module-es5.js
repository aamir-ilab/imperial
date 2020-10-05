function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-table-contacts-table-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-delete-forever.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-delete-forever.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneDeleteForeverJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M16 9H8v10h8V9zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12z\" fill=\"currentColor\"/><path d=\"M14.12 10.47L12 12.59l-2.13-2.12l-1.41 1.41L10.59 14l-2.12 2.12l1.41 1.41L12 15.41l2.12 2.12l1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-edit.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-edit.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneEditJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M5 18.08V19h.92l9.06-9.06l-.92-.92z\" fill=\"currentColor\"/><path d=\"M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-history.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-history.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneHistoryJs(module, exports) {
    var data = {
      "body": "<path d=\"M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-view-headline.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-view-headline.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneViewHeadlineJs(module, exports) {
    var data = {
      "body": "<path d=\"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ContactsDataTableComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsDataTableContactsDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsDataTableComponent", function () {
      return ContactsDataTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-edit */
    "./node_modules/@iconify/icons-ic/twotone-edit.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete-forever */
    "./node_modules/@iconify/icons-ic/twotone-delete-forever.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../@vex/components/scrollbar/scrollbar.component */
    "./src/@vex/components/scrollbar/scrollbar.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ContactsDataTableComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.label, "");
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r13 = ctx.$implicit;

        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r5.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r13[column_r5.property]);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_1_th_1_Template, 2, 1, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_1_td_2_Template, 2, 2, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r5.property);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_2_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.label, "");
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_2_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsDataTableComponent_ng_container_3_ng_container_2_td_2_Template_mat_checkbox_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r19 = ctx.$implicit;

        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r5.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", row_r19[column_r5.property]);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_2_th_1_Template, 2, 1, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_2_td_2_Template, 2, 2, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r5.property);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_3_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.label, "");
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_3_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r27 = ctx.$implicit;

        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r5.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", row_r27[column_r5.property], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_3_th_1_Template, 2, 1, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_3_td_2_Template, 2, 2, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r5.property);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.label, "");
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 26);
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r36.icStar);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 11);
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r37.icStarBorder);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var row_r35 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r38.emitToggleStar($event, row_r35.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_mat_icon_2_Template, 1, 1, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_mat_icon_3_Template, 1, 1, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r35 = ctx.$implicit;

        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r5.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r35[column_r5.property]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r35[column_r5.property]);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_th_1_Template, 2, 1, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_td_2_Template, 4, 3, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.label, "");
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_td_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_td_2_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", column_r5.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r42.icMoreVert);
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_th_1_Template, 2, 1, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_td_2_Template, 3, 3, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ContactsDataTableComponent_ng_container_3_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_1_Template, 3, 0, "ng-container", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_4_ng_container_2_Template, 3, 0, "ng-container", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r5.property);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.property === "starred");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.property === "menu");
      }
    }

    function ContactsDataTableComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsDataTableComponent_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsDataTableComponent_ng_container_3_ng_container_2_Template, 3, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsDataTableComponent_ng_container_3_ng_container_3_Template, 3, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContactsDataTableComponent_ng_container_3_ng_container_4_Template, 3, 3, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.type === "text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.type === "checkbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.type === "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r5.type === "button");
      }
    }

    function ContactsDataTableComponent_tr_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
      }
    }

    function ContactsDataTableComponent_tr_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsDataTableComponent_tr_5_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var row_r49 = ctx.$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.openContact.emit(row_r49.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);
      }
    }

    function ContactsDataTableComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No contacts matching your filters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleFadeIn", undefined);
      }
    }

    var ContactsDataTableComponent = /*#__PURE__*/function () {
      function ContactsDataTableComponent() {
        _classCallCheck(this, ContactsDataTableComponent);

        this.pageSize = 20;
        this.pageSizeOptions = [10, 20, 50];
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icDeleteForever = _iconify_icons_ic_twotone_delete_forever__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7___default.a;
      }

      _createClass(ContactsDataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.columns) {
            this.visibleColumns = this.columns.map(function (column) {
              return column.property;
            });
          }

          if (changes.data) {
            this.dataSource.data = this.data;
          }

          if (changes.searchStr) {
            this.dataSource.filter = (this.searchStr || '').trim().toLowerCase();
          }
        }
      }, {
        key: "emitToggleStar",
        value: function emitToggleStar(event, id) {
          event.stopPropagation();
          this.toggleStar.emit(id);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }]);

      return ContactsDataTableComponent;
    }();

    ContactsDataTableComponent.ɵfac = function ContactsDataTableComponent_Factory(t) {
      return new (t || ContactsDataTableComponent)();
    };

    ContactsDataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsDataTableComponent,
      selectors: [["vex-contacts-data-table"]],
      viewQuery: function ContactsDataTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        data: "data",
        columns: "columns",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions",
        searchStr: "searchStr"
      },
      outputs: {
        toggleStar: "toggleStar",
        openContact: "openContact"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'standard'
        }
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 12,
      consts: [[1, "h-full", "relative"], ["fxLayout", "column", "fxLayoutAlign", "space-between"], ["fxFlex", "auto", "mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "hover:bg-hover cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxFlex", "none", 1, "sticky", "bottom-0", "left-0", "right-0", "border-t", 3, "fxHide", "pageSize", "pageSizeOptions"], ["xPosition", "before", "yPosition", "below"], ["contactMenu", "matMenu"], ["mat-menu-item", ""], [3, "icIcon"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], [3, "checked", "click"], [1, "avatar", "h-9", "w-9", "align-middle", "my-2", 3, "src"], [4, "ngIf"], ["class", "w-10", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 1, "w-10", 3, "ngClass"], ["mat-icon-button", "", "type", "button", 3, "click"], ["class", "text-amber", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], [1, "text-amber", 3, "icIcon"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "cursor-pointer", 3, "click"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]],
      template: function ContactsDataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vex-scrollbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsDataTableComponent_ng_container_3_Template, 5, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContactsDataTableComponent_tr_4_Template, 1, 0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactsDataTableComponent_tr_5_Template, 1, 1, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactsDataTableComponent_div_6_Template, 4, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-paginator", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", ctx.dataSource.filteredData)("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxHide", ctx.dataSource.filteredData.length === 0)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icDeleteForever);
        }
      },
      directives: [_vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__["ScrollbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultShowHideDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtdGFibGUvY29udGFjdHMtZGF0YS10YWJsZS9jb250YWN0cy1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger20ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__["scaleFadeIn400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsDataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-contacts-data-table',
          templateUrl: './contacts-data-table.component.html',
          styleUrls: ['./contacts-data-table.component.scss'],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'standard'
            }
          }],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_10__["stagger20ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_12__["scaleFadeIn400ms"]]
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleStar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        openContact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ContactsTableMenuComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableMenuContactsTableMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableMenuComponent", function () {
      return ContactsTableMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-view-headline */
    "./node_modules/@iconify/icons-ic/twotone-view-headline.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _static_data_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../static-data/contacts */
    "./src/static-data/contacts.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-history */
    "./node_modules/@iconify/icons-ic/twotone-history.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-label */
    "./node_modules/@iconify/icons-ic/twotone-label.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person-add */
    "./node_modules/@iconify/icons-ic/twotone-person-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function ContactsTableMenuComponent_ng_container_7_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsTableMenuComponent_ng_container_7_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.setFilter(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ic-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-hover", ctx_r2.isActive(item_r1.id))("text-primary", ctx_r2.isActive(item_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r1.icon)("ngClass", item_r1.classes == null ? null : item_r1.classes.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
      }
    }

    function ContactsTableMenuComponent_ng_container_7_h3_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
      }
    }

    function ContactsTableMenuComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsTableMenuComponent_ng_container_7_a_1_Template, 4, 8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsTableMenuComponent_ng_container_7_h3_2_Template, 2, 2, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "subheading");
      }
    }

    var ContactsTableMenuComponent = /*#__PURE__*/function () {
      function ContactsTableMenuComponent() {
        _classCallCheck(this, ContactsTableMenuComponent);

        this.items = [{
          type: 'link',
          id: 'all',
          icon: _iconify_icons_ic_twotone_view_headline__WEBPACK_IMPORTED_MODULE_1___default.a,
          label: 'All Contacts'
        }, {
          type: 'link',
          id: 'frequently',
          icon: _iconify_icons_ic_twotone_history__WEBPACK_IMPORTED_MODULE_4___default.a,
          label: 'Frequently contacted'
        }, {
          type: 'link',
          id: 'starred',
          icon: _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default.a,
          label: 'Starred'
        }, {
          type: 'subheading',
          label: 'Labels'
        }, {
          type: 'link',
          id: 'family',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Family',
          classes: {
            icon: 'text-primary'
          }
        }, {
          type: 'link',
          id: 'friends',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Friends',
          classes: {
            icon: 'text-green'
          }
        }, {
          type: 'link',
          id: 'colleagues',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Colleagues',
          classes: {
            icon: 'text-amber'
          }
        }, {
          type: 'link',
          id: 'business',
          icon: _iconify_icons_ic_twotone_label__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Business',
          classes: {
            icon: 'text-gray'
          }
        }];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openAddNew = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeCategory = 'all';
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_7___default.a;
      }

      _createClass(ContactsTableMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setFilter",
        value: function setFilter(category) {
          this.activeCategory = category;

          if (category === 'starred') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_2__["contactsData"].filter(function (c) {
              return c.starred;
            }));
          }

          if (category === 'all') {
            return this.filterChange.emit(_static_data_contacts__WEBPACK_IMPORTED_MODULE_2__["contactsData"]);
          }

          if (category === 'frequently' || category === 'family' || category === 'friends' || category === 'colleagues' || category === 'business') {
            return this.filterChange.emit([]);
          }
        }
      }, {
        key: "isActive",
        value: function isActive(category) {
          return this.activeCategory === category;
        }
      }]);

      return ContactsTableMenuComponent;
    }();

    ContactsTableMenuComponent.ɵfac = function ContactsTableMenuComponent_Factory(t) {
      return new (t || ContactsTableMenuComponent)();
    };

    ContactsTableMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsTableMenuComponent,
      selectors: [["vex-contacts-table-menu"]],
      inputs: {
        items: "items"
      },
      outputs: {
        filterChange: "filterChange",
        openAddNew: "openAddNew"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "max-w-xxxs", "w-full"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "h-14", "mb-6", "flex", "bg-primary", "px-gutter", "sm:px-0"], ["mat-raised-button", "", "type", "button", 1, "flex-auto", 3, "click"], ["inline", "true", "size", "18px", 1, "ltr:mr-3", "rtl:ml-3", 3, "icon"], [1, "px-gutter", "sm:px-0"], [4, "ngFor", "ngForOf"], ["class", "list-item mt-2 no-underline flex items-center", "matRipple", "", 3, "bg-hover", "text-primary", "click", 4, "ngIf"], ["class", "caption text-secondary uppercase font-medium mb-0 mt-6", 4, "ngIf"], ["matRipple", "", 1, "list-item", "mt-2", "no-underline", "flex", "items-center", 3, "click"], ["size", "24px", 1, "ltr:mr-3", "rtl:ml-3", 3, "icon", "ngClass"], [1, "caption", "text-secondary", "uppercase", "font-medium", "mb-0", "mt-6"]],
      template: function ContactsTableMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsTableMenuComponent_Template_button_click_2_listener() {
            return ctx.openAddNew.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ic-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ADD CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContactsTableMenuComponent_ng_container_7_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icPersonAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"]],
      encapsulation: 2,
      data: {
        animation: [_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_8__["stagger40ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsTableMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-contacts-table-menu',
          templateUrl: './contacts-table-menu.component.html',
          animations: [_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_8__["stagger40ms"]]
        }]
      }], function () {
        return [];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        openAddNew: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ContactsTableRoutingModule */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableRoutingModule", function () {
      return ContactsTableRoutingModule;
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


    var _contacts_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");

    var routes = [{
      path: '',
      component: _contacts_table_component__WEBPACK_IMPORTED_MODULE_2__["ContactsTableComponent"],
      data: {
        scrollDisabled: true,
        toolbarShadowEnabled: true
      }
    }];

    var ContactsTableRoutingModule = function ContactsTableRoutingModule() {
      _classCallCheck(this, ContactsTableRoutingModule);
    };

    ContactsTableRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactsTableRoutingModule
    });
    ContactsTableRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactsTableRoutingModule_Factory(t) {
        return new (t || ContactsTableRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsTableRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsTableRoutingModule, [{
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
  "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ContactsTableComponent */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableComponent", function () {
      return ContactsTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contacts */
    "./node_modules/@iconify/icons-ic/twotone-contacts.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _static_data_contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../static-data/contacts */
    "./src/static-data/contacts.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.component */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-menu */
    "./node_modules/@iconify/icons-ic/twotone-menu.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./contacts-table-menu/contacts-table-menu.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts");
    /* harmony import */


    var _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./contacts-data-table/contacts-data-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ContactsTableComponent = /*#__PURE__*/function () {
      function ContactsTableComponent(dialog) {
        _classCallCheck(this, ContactsTableComponent);

        this.dialog = dialog;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.searchStr$ = this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(10));
        this.menuOpen = false;
        this.activeCategory = 'all';
        this.tableData = _static_data_contacts__WEBPACK_IMPORTED_MODULE_6__["contactsData"];
        this.tableColumns = [{
          label: '',
          property: 'selected',
          type: 'checkbox',
          cssClasses: ['w-6']
        }, {
          label: '',
          property: 'imageSrc',
          type: 'image',
          cssClasses: ['min-w-9']
        }, {
          label: 'NAME',
          property: 'name',
          type: 'text',
          cssClasses: ['font-medium']
        }, {
          label: 'EMAIL',
          property: 'email',
          type: 'text',
          cssClasses: ['text-secondary']
        }, {
          label: 'PHONE',
          property: 'phone',
          type: 'text',
          cssClasses: ['text-secondary']
        }, {
          label: '',
          property: 'starred',
          type: 'button',
          cssClasses: ['text-secondary', 'w-10']
        }, {
          label: '',
          property: 'menu',
          type: 'button',
          cssClasses: ['text-secondary', 'w-10']
        }];
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_11___default.a;
      }

      _createClass(ContactsTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openContact",
        value: function openContact(id) {
          this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_10__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
          });
        }
      }, {
        key: "toggleStar",
        value: function toggleStar(id) {
          var contact = this.tableData.find(function (c) {
            return c.id === id;
          });

          if (contact) {
            contact.starred = !contact.starred;
          }
        }
      }, {
        key: "setData",
        value: function setData(data) {
          this.tableData = data;
          this.menuOpen = false;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuOpen = true;
        }
      }]);

      return ContactsTableComponent;
    }();

    ContactsTableComponent.ɵfac = function ContactsTableComponent_Factory(t) {
      return new (t || ContactsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]));
    };

    ContactsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsTableComponent,
      selectors: [["vex-contacts-table"]],
      decls: 21,
      vars: 13,
      consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-6", "pb-20", "bg-primary", "flex-none"], ["vexContainer", "", 1, "flex", "items-center"], ["mat-icon-button", "", "type", "button", 1, "sm:hidden", "text-primary-contrast", 3, "click"], [3, "icIcon"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxs", "mr-6"], [1, "hidden", "sm:block", 3, "icon"], [1, "ml-4", "block"], [1, "hidden", "sm:flex", "items-center", "bg-card", "rounded-full", "overflow-hidden", "relative", "ltr:pl-5", "rtl:pr-5", "h-12", "max-w-md", "w-full", "shadow-8", "mx-auto"], ["size", "24px", 1, "text-secondary", "flex-none", 3, "icon"], ["placeholder", "Search Contacts...", "type", "text", 1, "border-0", "h-12", "outline-none", "ltr:pl-4", "rtl:pr-4", "placeholder:text-secondary", "bg-card", "flex-auto", 3, "formControl"], ["vexContainer", "", 1, "-mt-14", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], ["mode", "over", 3, "opened", "openedChange"], [1, "sm:hidden", 3, "filterChange", "openAddNew"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], [1, "hidden", "sm:block", "mr-6", 3, "filterChange", "openAddNew"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "columns", "data", "searchStr", "openContact", "toggleStar"]],
      template: function ContactsTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsTableComponent_Template_button_click_3_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ic-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ic-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-drawer-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-drawer", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function ContactsTableComponent_Template_mat_drawer_openedChange_14_listener($event) {
            return ctx.menuOpen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "vex-contacts-table-menu", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function ContactsTableComponent_Template_vex_contacts_table_menu_filterChange_15_listener($event) {
            return ctx.setData($event);
          })("openAddNew", function ContactsTableComponent_Template_vex_contacts_table_menu_openAddNew_15_listener() {
            return ctx.openContact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-drawer-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "vex-contacts-table-menu", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function ContactsTableComponent_Template_vex_contacts_table_menu_filterChange_17_listener($event) {
            return ctx.setData($event);
          })("openAddNew", function ContactsTableComponent_Template_vex_contacts_table_menu_openAddNew_17_listener() {
            return ctx.openContact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "vex-contacts-data-table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openContact", function ContactsTableComponent_Template_vex_contacts_data_table_openContact_19_listener($event) {
            return ctx.openContact($event);
          })("toggleStar", function ContactsTableComponent_Template_vex_contacts_data_table_toggleStar_19_listener($event) {
            return ctx.toggleStar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.icContacts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.menuOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.tableColumns)("data", ctx.tableData)("searchStr", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 11, ctx.searchStr$));
        }
      },
      directives: [_vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_13__["ContainerDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatDrawer"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_18__["ContactsTableMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatDrawerContent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_19__["ContactsDataTableComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]],
      encapsulation: 2,
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger40ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRight400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-contacts-table',
          templateUrl: './contacts-table.component.html',
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger40ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_4__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInRight400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-table/contacts-table.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ContactsTableModule */

  /***/
  function srcAppPagesAppsContactsContactsTableContactsTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsTableModule", function () {
      return ContactsTableModule;
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


    var _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-table-routing.module */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../@vex/components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _contacts_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contacts-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table.component.ts");
    /* harmony import */


    var _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contacts-data-table/contacts-data-table.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-data-table/contacts-data-table.component.ts");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.module */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./contacts-table-menu/contacts-table-menu.component */
    "./src/app/pages/apps/contacts/contacts-table/contacts-table-menu/contacts-table-menu.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

    var ContactsTableModule = function ContactsTableModule() {
      _classCallCheck(this, ContactsTableModule);
    };

    ContactsTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactsTableModule
    });
    ContactsTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactsTableModule_Factory(t) {
        return new (t || ContactsTableModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsTableRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_14__["ScrollbarModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_17__["ContactsEditModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsTableModule, {
        declarations: [_contacts_table_component__WEBPACK_IMPORTED_MODULE_15__["ContactsTableComponent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_16__["ContactsDataTableComponent"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_20__["ContactsTableMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsTableRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_14__["ScrollbarModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_17__["ContactsEditModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contacts_table_component__WEBPACK_IMPORTED_MODULE_15__["ContactsTableComponent"], _contacts_data_table_contacts_data_table_component__WEBPACK_IMPORTED_MODULE_16__["ContactsDataTableComponent"], _contacts_table_menu_contacts_table_menu_component__WEBPACK_IMPORTED_MODULE_20__["ContactsTableMenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsTableRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_14__["ScrollbarModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_17__["ContactsEditModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_19__["ContainerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=contacts-table-contacts-table-module-es5.js.map