function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-grid-contacts-grid-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-cloud-download.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-cloud-download.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneCloudDownloadJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z\" fill=\"currentColor\"/><path d=\"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-filter-list.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-filter-list.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneFilterListJs(module, exports) {
    var data = {
      "body": "<path d=\"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-more-vert.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-more-vert.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMoreVertJs(module, exports) {
    var data = {
      "body": "<path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ContactsCardComponent */

  /***/
  function srcAppPagesAppsContactsComponentsContactsCardContactsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsCardComponent", function () {
      return ContactsCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone */
    "./node_modules/@iconify/icons-ic/twotone-phone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-business */
    "./node_modules/@iconify/icons-ic/twotone-business.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-mail */
    "./node_modules/@iconify/icons-ic/twotone-mail.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chat */
    "./node_modules/@iconify/icons-ic/twotone-chat.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star-border */
    "./node_modules/@iconify/icons-ic/twotone-star-border.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ContactsCardComponent_mat_icon_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 12);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r0.icStar);
      }
    }

    function ContactsCardComponent_mat_icon_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 11);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r1.icStarBorder);
      }
    }

    var ContactsCardComponent = /*#__PURE__*/function () {
      function ContactsCardComponent() {
        _classCallCheck(this, ContactsCardComponent);

        this.openContact = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleStar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icChat = _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icStarBorder = _iconify_icons_ic_twotone_star_border__WEBPACK_IMPORTED_MODULE_6___default.a;
      }

      _createClass(ContactsCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emitToggleStar",
        value: function emitToggleStar(event, contactId) {
          event.stopPropagation();
          this.toggleStar.emit(contactId);
        }
      }]);

      return ContactsCardComponent;
    }();

    ContactsCardComponent.??fac = function ContactsCardComponent_Factory(t) {
      return new (t || ContactsCardComponent)();
    };

    ContactsCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactsCardComponent,
      selectors: [["vex-contacts-card"]],
      inputs: {
        contact: "contact"
      },
      outputs: {
        openContact: "openContact",
        toggleStar: "toggleStar"
      },
      decls: 23,
      vars: 11,
      consts: [[1, "card", "overflow-hidden"], ["matRipple", "", 1, "p-4", "text-center", "hover:bg-hover", "trans-ease-out", "cursor-pointer", "relative", 3, "click"], [1, "avatar", "h-24", "w-24", "mx-auto", 3, "src"], [1, "title", "mb-1", "mt-3"], [1, "body-2", "text-secondary"], ["inline", "true", 1, "ltr:mr-1", "rtl:ml-1", 3, "icon"], ["mat-icon-button", "", "type", "button", 1, "absolute", "top-2", "right-2", 3, "click"], ["class", "text-amber", 3, "icIcon", 4, "ngIf"], [3, "icIcon", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "bg-app-bar", "p-2"], ["mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], [1, "text-amber", 3, "icIcon"]],
      template: function ContactsCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactsCardComponent_Template_div_click_1_listener() {
            return ctx.openContact.emit(ctx.contact.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactsCardComponent_Template_button_click_13_listener($event) {
            return ctx.emitToggleStar($event, ctx.contact == null ? null : ctx.contact.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ContactsCardComponent_mat_icon_14_Template, 1, 1, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ContactsCardComponent_mat_icon_15_Template, 1, 1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.contact == null ? null : ctx.contact.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.contact == null ? null : ctx.contact.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icBusiness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.contact == null ? null : ctx.contact.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.contact == null ? null : ctx.contact.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.contact == null ? null : ctx.contact.starred);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.contact == null ? null : ctx.contact.starred));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icChat);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29tcG9uZW50cy9jb250YWN0cy1jYXJkL2NvbnRhY3RzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-contacts-card',
          templateUrl: './contacts-card.component.html',
          styleUrls: ['./contacts-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        contact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openContact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        toggleStar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ContactsCardModule */

  /***/
  function srcAppPagesAppsContactsComponentsContactsCardContactsCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsCardModule", function () {
      return ContactsCardModule;
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


    var _contacts_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-card.component */
    "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var ContactsCardModule = function ContactsCardModule() {
      _classCallCheck(this, ContactsCardModule);
    };

    ContactsCardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ContactsCardModule
    });
    ContactsCardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ContactsCardModule_Factory(t) {
        return new (t || ContactsCardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ContactsCardModule, {
        declarations: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_2__["ContactsCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
        exports: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_2__["ContactsCardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_2__["ContactsCardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
          exports: [_contacts_card_component__WEBPACK_IMPORTED_MODULE_2__["ContactsCardComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ContactsGridRoutingModule */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridRoutingModule", function () {
      return ContactsGridRoutingModule;
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


    var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-grid.component */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'all'
    }, {
      path: ':activeCategory',
      component: _contacts_grid_component__WEBPACK_IMPORTED_MODULE_2__["ContactsGridComponent"],
      data: {
        scrollDisabled: true,
        toolbarShadowEnabled: false
      }
    }];

    var ContactsGridRoutingModule = function ContactsGridRoutingModule() {
      _classCallCheck(this, ContactsGridRoutingModule);
    };

    ContactsGridRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ContactsGridRoutingModule
    });
    ContactsGridRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ContactsGridRoutingModule_Factory(t) {
        return new (t || ContactsGridRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ContactsGridRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsGridRoutingModule, [{
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
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ContactsGridComponent */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridComponent", function () {
      return ContactsGridComponent;
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


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person-add */
    "./node_modules/@iconify/icons-ic/twotone-person-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.component */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-filter-list */
    "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _static_data_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../static-data/contacts */
    "./src/static-data/contacts.ts");
    /* harmony import */


    var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../@vex/utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
    /* harmony import */


    var _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../components/contacts-card/contacts-card.component */
    "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.component.ts");

    function ContactsGridComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var link_r3 = ctx.$implicit;

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("active", _r4.isActive)("disabled", link_r3.disabled)("routerLink", link_r3.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", link_r3.label, " ");
      }
    }

    function ContactsGridComponent_div_23_vex_contacts_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "vex-contacts-card", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("openContact", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_openContact_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r7.openContact($event);
        })("toggleStar", function ContactsGridComponent_div_23_vex_contacts_card_2_Template_vex_contacts_card_toggleStar_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r9.toggleStar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var contact_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined)("contact", contact_r6);
      }
    }

    function ContactsGridComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ContactsGridComponent_div_23_vex_contacts_card_2_Template, 1, 2, "vex-contacts-card", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@stagger", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, ctx_r1.filteredContacts$))("ngForTrackBy", ctx_r1.trackById);
      }
    }

    function ContactsGridComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No contacts matching your filters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@scaleFadeIn", undefined);
      }
    }

    var ContactsGridComponent = /*#__PURE__*/function () {
      function ContactsGridComponent(dialog, route) {
        _classCallCheck(this, ContactsGridComponent);

        this.dialog = dialog;
        this.route = route;
        this.contacts = _static_data_contacts__WEBPACK_IMPORTED_MODULE_8__["contactsData"];
        this.filteredContacts$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (paramMap) {
          return paramMap.get('activeCategory');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (activeCategory) {
          switch (activeCategory) {
            case 'all':
              {
                return _static_data_contacts__WEBPACK_IMPORTED_MODULE_8__["contactsData"];
              }

            case 'starred':
              {
                return _static_data_contacts__WEBPACK_IMPORTED_MODULE_8__["contactsData"].filter(function (c) {
                  return c.starred;
                });
              }

            default:
              {
                return [];
              }
          }
        }));
        this.links = [{
          label: 'ALL CONTACTS',
          route: '../all'
        }, {
          label: 'FREQUENTLY CONTACTED',
          route: '../frequent'
        }, {
          label: 'STARRED',
          route: '../starred'
        }];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_9__["trackById"];
      }

      _createClass(ContactsGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openContact",
        value: function openContact(id) {
          this.dialog.open(_components_contacts_edit_contacts_edit_component__WEBPACK_IMPORTED_MODULE_5__["ContactsEditComponent"], {
            data: id || null,
            width: '600px'
          });
        }
      }, {
        key: "toggleStar",
        value: function toggleStar(id) {
          var contact = _static_data_contacts__WEBPACK_IMPORTED_MODULE_8__["contactsData"].find(function (c) {
            return c.id === id;
          });

          if (contact) {
            contact.starred = !contact.starred;
          }
        }
      }]);

      return ContactsGridComponent;
    }();

    ContactsGridComponent.??fac = function ContactsGridComponent_Factory(t) {
      return new (t || ContactsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]));
    };

    ContactsGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactsGridComponent,
      selectors: [["vex-contacts-grid"]],
      decls: 27,
      vars: 15,
      consts: [["fxLayout", "column", 1, "h-full"], ["fxFlex", "none", 1, "p-6", "pb-0", "bg-card", "shadow-b"], ["vexContainer", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "display-1", "mt-0", "mb-4"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "24px", 3, "icon"], [1, "block"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "auto", "mat-tab-nav-bar", "", 1, "vex-tabs", "border-0"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink", 4, "ngFor", "ngForOf"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-icon-button", "", "matTooltip", "Search Contacts", "type", "button"], [3, "icIcon"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-icon-button", "", "matTooltip", "Export Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1"], ["color", "primary", "fxFlex", "none", "mat-icon-button", "", "matTooltip", "Filter Contacts", "type", "button", 1, "ltr:ml-1", "rtl:mr-1"], ["color", "primary", "fxFlex", "none", "fxHide.gt-xs", "", "mat-mini-fab", "", "matTooltip", "Add Contact", "type", "button", 1, "ltr:ml-1", "rtl:mr-1", 3, "click"], ["color", "primary", "fxFlex", "none", "fxHide.xs", "", "mat-raised-button", "", "type", "button", 1, "ltr:ml-4", "rtl:mr-4", 3, "click"], ["inline", "true", "size", "20px", 1, "ltr:mr-2", "rtl:ml-2", "ltr:-ml-1", "rtl:-mr-1", 3, "icon"], ["class", "overflow-y-auto", "fxFlex", "auto", 4, "ngIf"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "disabled", "routerLink"], ["rla", "routerLinkActive"], ["fxFlex", "auto", 1, "overflow-y-auto"], ["vexContainer", "", "gdColumns", "1fr 1fr 1fr 1fr", "gdColumns.lt-md", "1fr 1fr", "gdColumns.xs", "1fr", "gdGap", "24px", 1, "p-gutter"], [3, "contact", "openContact", "toggleStar", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contact", "openContact", "toggleStar"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]],
      template: function ContactsGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nav", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ContactsGridComponent_a_10_Template, 3, 4, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactsGridComponent_Template_button_click_17_listener() {
            return ctx.openContact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ContactsGridComponent_Template_button_click_19_listener() {
            return ctx.openContact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "ADD CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ContactsGridComponent_div_23_Template, 4, 5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ContactsGridComponent_div_25_Template, 4, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icContacts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.links);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icCloudDownload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icFilterList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPersonAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icPersonAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 11, ctx.filteredContacts$).length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 13, ctx.filteredContacts$).length === 0);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_19__["IconDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultShowHideDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["??grid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["??grid_privateba"], _components_contacts_card_contacts_card_component__WEBPACK_IMPORTED_MODULE_27__["ContactsCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHMvY29udGFjdHMvY29udGFjdHMtZ3JpZC9jb250YWN0cy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__["scaleFadeIn400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-contacts-grid',
          templateUrl: './contacts-grid.component.html',
          styleUrls: ['./contacts-grid.component.scss'],
          animations: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_11__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_12__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_13__["scaleFadeIn400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/apps/contacts/contacts-grid/contacts-grid.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ContactsGridModule */

  /***/
  function srcAppPagesAppsContactsContactsGridContactsGridModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsGridModule", function () {
      return ContactsGridModule;
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


    var _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-grid-routing.module */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid-routing.module.ts");
    /* harmony import */


    var _contacts_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-grid.component */
    "./src/app/pages/apps/contacts/contacts-grid/contacts-grid.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/contacts-edit/contacts-edit.module */
    "./src/app/pages/apps/contacts/components/contacts-edit/contacts-edit.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/contacts-card/contacts-card.module */
    "./src/app/pages/apps/contacts/components/contacts-card/contacts-card.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ContactsGridModule = function ContactsGridModule() {
      _classCallCheck(this, ContactsGridModule);
    };

    ContactsGridModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ContactsGridModule
    });
    ContactsGridModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ContactsGridModule_Factory(t) {
        return new (t || ContactsGridModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsGridRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_9__["ContactsEditModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_12__["ContactsCardModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ContactsGridModule, {
        declarations: [_contacts_grid_component__WEBPACK_IMPORTED_MODULE_3__["ContactsGridComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsGridRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_9__["ContactsEditModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_12__["ContactsCardModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contacts_grid_component__WEBPACK_IMPORTED_MODULE_3__["ContactsGridComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _contacts_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactsGridRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _components_contacts_edit_contacts_edit_module__WEBPACK_IMPORTED_MODULE_9__["ContactsEditModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _components_contacts_card_contacts_card_module__WEBPACK_IMPORTED_MODULE_12__["ContactsCardModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_13__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=contacts-grid-contacts-grid-module-es5.js.map