function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-payroll-payroll-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/round-import-export.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/round-import-export.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcRoundImportExportJs(module, exports) {
    var data = {
      "body": "<path d=\"M8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 0 0-.7 0zM16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/app/admin/payroll/client-create-update/client-create-update.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/payroll/client-create-update/client-create-update.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ClientCreateUpdateComponent */

  /***/
  function srcAppAdminPayrollClientCreateUpdateClientCreateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientCreateUpdateComponent", function () {
      return ClientCreateUpdateComponent;
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


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-print */
    "./node_modules/@iconify/icons-ic/twotone-print.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete */
    "./node_modules/@iconify/icons-ic/twotone-delete.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone */
    "./node_modules/@iconify/icons-ic/twotone-phone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person */
    "./node_modules/@iconify/icons-ic/twotone-person.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-my-location */
    "./node_modules/@iconify/icons-ic/twotone-my-location.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-location-city */
    "./node_modules/@iconify/icons-ic/twotone-location-city.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-edit-location */
    "./node_modules/@iconify/icons-ic/twotone-edit-location.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    function ClientCreateUpdateComponent_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.form.get("firstName").value + " " + ctx_r0.form.get("lastName").value);
      }
    }

    function ClientCreateUpdateComponent_h2_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "New Client");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientCreateUpdateComponent_button_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CREATE Client");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientCreateUpdateComponent_button_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "UPDATE Client");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var ClientCreateUpdateComponent = /*#__PURE__*/function () {
      function ClientCreateUpdateComponent(defaults, dialogRef, fb) {
        _classCallCheck(this, ClientCreateUpdateComponent);

        this.defaults = defaults;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.mode = 'create';
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icMyLocation = _iconify_icons_ic_twotone_my_location__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icLocationCity = _iconify_icons_ic_twotone_location_city__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icEditLocation = _iconify_icons_ic_twotone_edit_location__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_7___default.a;
      }

      _createClass(ClientCreateUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.defaults) {
            this.mode = 'update';
          } else {
            this.defaults = {};
          }

          this.form = this.fb.group({
            id: [ClientCreateUpdateComponent.id++],
            // profilePhoto: this.defaults.profilePhoto,
            _id: [this.defaults._id],
            emailAddress: [this.defaults.emailAddress || ''],
            firstName: [this.defaults.firstName || ''],
            lastName: [this.defaults.lastName || ''],
            companyName: this.defaults.companyName || '',
            companyAddress: this.defaults.companyAddress || '',
            companyPhoneNumber: this.defaults.companyPhoneNumber || '',
            emailAddressAccountsTeam: this.defaults.emailAddressAccountsTeam || '',
            VATNumber: this.defaults.VATNumber || '',
            companyRegNumber: this.defaults.companyRegNumber || '',
            position: this.defaults.position || '',
            phoneNumber: this.defaults.phoneNumber || ''
          });
        }
      }, {
        key: "save",
        value: function save() {
          if (this.mode === 'create') {
            this.createClient();
          } else if (this.mode === 'update') {
            this.updateClient();
          }
        }
      }, {
        key: "createClient",
        value: function createClient() {
          var client = this.form.value; // if (!client.profilePhoto) {
          //   client.profilePhoto = 'assets/img/avatars/1.jpg';
          // }

          this.dialogRef.close(client);
        }
      }, {
        key: "updateClient",
        value: function updateClient() {
          var client = this.form.value;
          client.id = this.defaults.id;
          this.dialogRef.close(client);
        }
      }, {
        key: "isCreateMode",
        value: function isCreateMode() {
          return this.mode === 'create';
        }
      }, {
        key: "isUpdateMode",
        value: function isUpdateMode() {
          return this.mode === 'update';
        }
      }]);

      return ClientCreateUpdateComponent;
    }();

    ClientCreateUpdateComponent.id = 100;

    ClientCreateUpdateComponent.??fac = function ClientCreateUpdateComponent_Factory(t) {
      return new (t || ClientCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]));
    };

    ClientCreateUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientCreateUpdateComponent,
      selectors: [["vex-client-create-update"]],
      decls: 81,
      vars: 14,
      consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["class", "headline m-0", "fxFlex", "auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], [1, "-mx-6", "text-border"], ["fxLayout", "column"], [1, "flex", "flex-col", "sm:flex-row"], [1, "mt-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "firstName", "matInput", ""], ["matPrefix", "", 1, "mr-3", 3, "icIcon"], [1, "sm:mt-6", "sm:ml-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "lastName", "matInput", ""], [1, "flex-auto"], ["formControlName", "emailAddress", "matInput", ""], ["formControlName", "companyName", "matInput", ""], [1, "sm:ml-6", "flex-auto"], ["formControlName", "companyAddress", "matInput", ""], ["formControlName", "companyPhoneNumber", "pattern", "[0-9]*", "minlength", "10", "maxlength", "14", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "matInput", ""], ["formControlName", "emailAddressAccountsTeam", "matInput", ""], ["formControlName", "VATNumber", "matInput", ""], ["formControlName", "companyRegNumber", "matInput", ""], ["formControlName", "position", "matInput", ""], ["formControlName", "phoneNumber", "pattern", "[0-9]*", "minlength", "10", "maxlength", "14", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-button", "", "type", "submit", 4, "ngIf"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["fxFlex", "auto", 1, "headline", "m-0"], ["color", "primary", "mat-button", "", "type", "submit"]],
      template: function ClientCreateUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientCreateUpdateComponent_Template_form_ngSubmit_0_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ClientCreateUpdateComponent_h2_2_Template, 2, 1, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ClientCreateUpdateComponent_h2_3_Template, 2, 0, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "mat-divider", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-dialog-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Company Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Company Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Company Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Email Address Accounts Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "VAT Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Company RegNumber");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "mat-dialog-actions", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, ClientCreateUpdateComponent_button_65_Template, 2, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, ClientCreateUpdateComponent_button_66_Template, 2, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "mat-menu", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Export");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.get("firstName").value || ctx.form.get("lastName").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.form.get("firstName").value && !ctx.form.get("lastName").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icClose);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPerson);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPerson);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icEditLocation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icMyLocation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isCreateMode());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isUpdateMode());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icPrint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icDownload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icDelete);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MaxLengthValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheXJvbGwvY2xpZW50LWNyZWF0ZS11cGRhdGUvY2xpZW50LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientCreateUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-client-create-update',
          templateUrl: './client-create-update.component.html',
          styleUrls: ['./client-create-update.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/payroll/client-create-update/client-create-update.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/payroll/client-create-update/client-create-update.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ClientCreateUpdateModule */

  /***/
  function srcAppAdminPayrollClientCreateUpdateClientCreateUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientCreateUpdateModule", function () {
      return ClientCreateUpdateModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _client_create_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./client-create-update.component */
    "./src/app/admin/payroll/client-create-update/client-create-update.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var ClientCreateUpdateModule = function ClientCreateUpdateModule() {
      _classCallCheck(this, ClientCreateUpdateModule);
    };

    ClientCreateUpdateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: ClientCreateUpdateModule
    });
    ClientCreateUpdateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function ClientCreateUpdateModule_Factory(t) {
        return new (t || ClientCreateUpdateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ClientCreateUpdateModule, {
        declarations: [_client_create_update_component__WEBPACK_IMPORTED_MODULE_10__["ClientCreateUpdateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"]],
        exports: [_client_create_update_component__WEBPACK_IMPORTED_MODULE_10__["ClientCreateUpdateComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClientCreateUpdateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"]],
          declarations: [_client_create_update_component__WEBPACK_IMPORTED_MODULE_10__["ClientCreateUpdateComponent"]],
          entryComponents: [_client_create_update_component__WEBPACK_IMPORTED_MODULE_10__["ClientCreateUpdateComponent"]],
          exports: [_client_create_update_component__WEBPACK_IMPORTED_MODULE_10__["ClientCreateUpdateComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/payroll/payroll-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/payroll/payroll-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PayrollRoutingModule */

  /***/
  function srcAppAdminPayrollPayrollRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayrollRoutingModule", function () {
      return PayrollRoutingModule;
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


    var _payroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./payroll.component */
    "./src/app/admin/payroll/payroll.component.ts");

    var routes = [{
      path: '',
      component: _payroll_component__WEBPACK_IMPORTED_MODULE_2__["PayrollComponent"],
      data: {
        toolbarShadowEnabled: true
      }
    }];

    var PayrollRoutingModule = function PayrollRoutingModule() {
      _classCallCheck(this, PayrollRoutingModule);
    };

    PayrollRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PayrollRoutingModule
    });
    PayrollRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PayrollRoutingModule_Factory(t) {
        return new (t || PayrollRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PayrollRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PayrollRoutingModule, [{
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
  "./src/app/admin/payroll/payroll.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/payroll/payroll.component.ts ***!
    \****************************************************/

  /*! exports provided: PayrollComponent */

  /***/
  function srcAppAdminPayrollPayrollComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayrollComponent", function () {
      return PayrollComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../static-data/aio-table-data */
    "./src/static-data/aio-table-data.ts");
    /* harmony import */


    var _client_create_update_client_create_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./client-create-update/client-create-update.component */
    "./src/app/admin/payroll/client-create-update/client-create-update.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-edit */
    "./node_modules/@iconify/icons-ic/twotone-edit.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-delete */
    "./node_modules/@iconify/icons-ic/twotone-delete.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-add */
    "./node_modules/@iconify/icons-ic/twotone-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-filter-list */
    "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-folder */
    "./node_modules/@iconify/icons-ic/twotone-folder.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone */
    "./node_modules/@iconify/icons-ic/twotone-phone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-mail */
    "./node_modules/@iconify/icons-ic/twotone-mail.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-map */
    "./node_modules/@iconify/icons-ic/twotone-map.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var _iconify_icons_ic_round_import_export__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @iconify/icons-ic/round-import-export */
    "./node_modules/@iconify/icons-ic/round-import-export.js");
    /* harmony import */


    var _iconify_icons_ic_round_import_export__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_round_import_export__WEBPACK_IMPORTED_MODULE_25__);
    /* harmony import */


    var src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/app/models/payroll.model */
    "./src/app/models/payroll.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout.component */
    "./src/@vex/components/page-layout/page-layout.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout-header.directive */
    "./src/@vex/components/page-layout/page-layout-header.directive.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js"); // import { client } from './interfaces/client.model';


    function PayrollComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Payroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function PayrollComponent_mat_progress_spinner_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "mat-progress-spinner", 37);
      }
    }

    function PayrollComponent_ng_container_32_ng_container_1_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", column_r14.label, "");
      }
    }

    function PayrollComponent_ng_container_32_ng_container_1_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var row_r19 = ctx.$implicit;

        var column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", column_r14.cssClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](row_r19[column_r14.property]);
      }
    }

    function PayrollComponent_ng_container_32_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PayrollComponent_ng_container_32_ng_container_1_th_1_Template, 2, 1, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, PayrollComponent_ng_container_32_ng_container_1_td_2_Template, 2, 2, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matColumnDef", column_r14.property);
      }
    }

    function PayrollComponent_ng_container_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PayrollComponent_ng_container_32_ng_container_1_Template, 3, 1, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", column_r14.type === "text");
      }
    }

    function PayrollComponent_th_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "th", 43);
      }
    }

    function PayrollComponent_td_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_td_35_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "mat-icon", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_td_35_Template_a_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "mat-icon", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_td_35_Template_a_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "mat-icon", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r5.icPhone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r5.icMail);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r5.icMap);
      }
    }

    function PayrollComponent_th_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Response");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    };

    function PayrollComponent_td_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_td_38_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r29);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var row_r27 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](2, _c0, ctx_r7.responses[row_r27.response].textClass, ctx_r7.responses[row_r27.response].bgClass));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", row_r27.response, " ");
      }
    }

    function PayrollComponent_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 52);
      }
    }

    function PayrollComponent_tr_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 53);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fadeInUp", undefined);
      }
    }

    function PayrollComponent_button_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_button_44_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r33);

          var column_r31 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r32.toggleColumnVisibility(column_r31, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-checkbox", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_button_44_Template_mat_checkbox_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r33);

          return $event.stopPropagation();
        })("ngModelChange", function PayrollComponent_button_44_Template_mat_checkbox_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r33);

          var column_r31 = ctx.$implicit;
          return column_r31.visible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var column_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", column_r31.visible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", column_r31.label, " ");
      }
    }

    function PayrollComponent_ng_template_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_ng_template_47_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r38);

          var client_r36 = ctx.client;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r37.updateClient(client_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Modify");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_ng_template_47_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r38);

          var client_r36 = ctx.client;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r39.deleteClient(client_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r13.icEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx_r13.icDelete);
      }
    }

    var PayrollComponent = /*#__PURE__*/function () {
      function PayrollComponent(dialog, authService) {
        _classCallCheck(this, PayrollComponent);

        this.dialog = dialog;
        this.authService = authService;
        this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControl"]('boxed');
        this.roundImportExport = _iconify_icons_ic_round_import_export__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.lines = []; //for headings

        this.linesR = []; // for rows

        this.loading = false;
        /**
         * Simulating a service with HTTP that returns Observables
         * You probably want to remove this and do all requests in a service with HTTP
         */

        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.columns = [// { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
        // { label: 'Image', property: 'profilePhoto', type: 'image', visible: true },
        {
          label: 'Log ID',
          property: 'logID',
          type: 'text',
          visible: true,
          cssClasses: ['font-medium']
        }, {
          label: 'Timestamp',
          property: 'timestampStr',
          type: 'text',
          visible: true
        }, {
          label: 'User',
          property: 'name',
          type: 'text',
          visible: true
        }, {
          label: 'Type',
          property: 'type',
          type: 'text',
          visible: true
        }, {
          label: 'Period',
          property: 'period',
          type: 'text',
          visible: true
        }, {
          label: 'Response',
          property: 'response',
          type: 'button',
          visible: true
        }];
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 20, 50];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"](true, []);
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControl"]();
        this.labels = _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_7__["aioTableLabels"];
        this.responses = _static_data_aio_table_data__WEBPACK_IMPORTED_MODULE_7__["aioTableLabelsPayroll"];
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icMap = _iconify_icons_ic_twotone_map__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icFolder = _iconify_icons_ic_twotone_folder__WEBPACK_IMPORTED_MODULE_16___default.a;
      }

      _createClass(PayrollComponent, [{
        key: "getData",

        /**
         * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
         * We are simulating this request here.
         */
        value: function getData() {
          var _this = this;

          this.authService.getAllPayroll().subscribe(function (clients) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(clients.map(function (client) {
              return new src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__["Payroll"](client);
            })).subscribe(function (clientes) {
              console.log('123213123');
              console.log(clientes);

              _this.subject$.next(clientes);
            });
          }); // return of(aioTableData1.map(client => new Payroll(client))).subscribe(clients =>{
          //   this.subject$.next(clients);
          // });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getData();
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
          this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(Boolean)).subscribe(function (clients) {
            _this2.clients = clients;
            _this2.dataSource.data = clients;
          });
          this.searchCtrl.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_21__["untilDestroyed"])(this)).subscribe(function (value) {
            return _this2.onFilterChange(value);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "createClient",
        value: function createClient() {
          var _this3 = this;

          this.dialog.open(_client_create_update_client_create_update_component__WEBPACK_IMPORTED_MODULE_8__["ClientCreateUpdateComponent"]).afterClosed().subscribe(function (client) {
            /**
             * Client is the updated client (if the user pressed Save - otherwise it's null)
             */
            if (client) {
              /**
               * Here we are updating our local array.
               * You would probably make an HTTP request here.
               */
              _this3.authService.register(client, 'Client').subscribe(function (res) {
                console.log('new created client');

                _this3.authService.openSnackbar('New Client Added!');
              });

              _this3.clients.unshift(new src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__["Payroll"](client));

              _this3.subject$.next(_this3.clients);
            }
          });
        }
      }, {
        key: "updateClient",
        value: function updateClient(client) {
          var _this4 = this;

          this.dialog.open(_client_create_update_client_create_update_component__WEBPACK_IMPORTED_MODULE_8__["ClientCreateUpdateComponent"], {
            data: client
          }).afterClosed().subscribe(function (updatedClient) {
            /**
             * Client is the updated client (if the user pressed Save - otherwise it's null)
             */
            if (updatedClient) {
              /**
               * Here we are updating our local array.
               * You would probably make an HTTP request here.
               */
              console.log('********');
              console.log(updatedClient);

              _this4.authService.updateUser(updatedClient).subscribe(function (res) {
                _this4.authService.openSnackbar('Updated Successfully!');
              });

              var index = _this4.clients.findIndex(function (existingClient) {
                return existingClient.id === updatedClient.id;
              });

              _this4.clients[index] = new src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__["Payroll"](updatedClient);

              _this4.subject$.next(_this4.clients);
            }
          });
        }
      }, {
        key: "deleteClient",
        value: function deleteClient(client) {
          var _this5 = this;

          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          this.authService.deleteUser(client, 'Client').subscribe(function (res) {
            _this5.authService.openSnackbar('Removed Successfully!');
          });
          this.clients.splice(this.clients.findIndex(function (existingClient) {
            return existingClient.id === client.id;
          }), 1);
          this.selection.deselect(client);
          this.subject$.next(this.clients);
        }
      }, {
        key: "deleteClients",
        value: function deleteClients(clients) {
          var _this6 = this;

          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          clients.forEach(function (c) {
            _this6.authService.deleteUser(c, 'Client').subscribe(function (res) {
              console.log(res); // this.authService.openSnackbar('Removed Successfully!')
            });
          }); // this.authService.openSnackbar('Removed Successfully!')

          clients.forEach(function (c) {
            return _this6.deleteClient(c);
          });
        }
      }, {
        key: "onFilterChange",
        value: function onFilterChange(value) {
          if (!this.dataSource) {
            return;
          }

          value = value.trim();
          value = value.toLowerCase();
          this.dataSource.filter = value;
        }
      }, {
        key: "toggleColumnVisibility",
        value: function toggleColumnVisibility(column, event) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          column.visible = !column.visible;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this7 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this7.selection.select(row);
          });
        }
      }, {
        key: "trackByProperty",
        value: function trackByProperty(index, column) {
          return column.property;
        }
      }, {
        key: "onLabelChange",
        value: function onLabelChange(change, row) {
          var index = this.clients.findIndex(function (c) {
            return c === row;
          }); // this.clients[index].labels = change.value;

          this.subject$.next(this.clients);
        }
      }, {
        key: "exportToCsv",
        value: function exportToCsv(filename, rows) {
          var processRow = function processRow(row) {
            var finalVal = '';

            for (var j = 0; j < row.length; j++) {
              var innerValue = row[j] === null ? '' : row[j].toString();

              if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
              }

              ;
              var result = innerValue.replace(/"/g, '""');
              if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
              if (j > 0) finalVal += ',';
              finalVal += result;
            }

            return finalVal + '\n';
          };

          var csvFile = '';

          for (var i = 0; i < rows.length; i++) {
            csvFile += processRow(rows[i]);
          }

          var blob = new Blob([csvFile], {
            type: 'text/csv;charset=utf-8;'
          });

          if (navigator.msSaveBlob) {
            // IE 10+
            navigator.msSaveBlob(blob, filename);
          } else {
            var link = document.createElement("a");

            if (link.download !== undefined) {
              // feature detection
              // Browsers that support HTML5 download attribute
              var url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", filename);
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          }
        }
      }, {
        key: "exportTimesheets",
        value: function exportTimesheets() {
          var _this8 = this;

          this.authService.getExpertTimesheets().subscribe(function (res) {
            console.log(res);

            if (res == 'no Data') {
              _this8.authService.openSnackbar('No Data');
            } else {
              var mainArr = [['WR_REF', 'WR_UNITS', 'WR_TRNCDE', 'WR_RATE']];
              res.forEach(function (element) {
                mainArr.push(element.workerID, element.wrUnits, element.trncde, element.wrRate);
              }); // ['Employee Code','Gross Pay','Pay Description on line 1 (Fixed number)','Pay Rate (Fixed number)'],	

              if (res.length > 0) {
                _this8.authService.openSnackbar('Successfully Expert Timesheet');

                _this8.exportToCsv('import.csv', mainArr);
              } else {
                _this8.authService.openSnackbar('No Data');
              }
            }
          });
        }
      }, {
        key: "importPayroll",
        value: function importPayroll() {}
      }, {
        key: "generateWorkerID",
        value: function generateWorkerID() {
          var _this9 = this;

          this.authService.getGenerateWorkerID().subscribe(function (res) {
            console.log('res');
            console.log(res);

            if (res.fullname) {
              _this9.authService.openSnackbar('Alrady Gnerated');
            } else {
              if (res.length == 0) {
                _this9.authService.openSnackbar('No Data');
              } else {
                // this.getData();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res.map(function (client) {
                  return new src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__["Payroll"](client);
                })).subscribe(function (clientes) {
                  console.log('123213123');
                  console.log(clientes);

                  _this9.subject$.next(clientes);
                });

                _this9.authService.openSnackbar('Gnerated Successfully');
              }
            }
          }, function (err) {
            _this9.authService.openSnackbar('Error');
          });
        }
      }, {
        key: "changeListener",
        value: function changeListener(files) {
          var _this10 = this;

          console.log(files);
          this.loading = true;

          if (files && files.length > 0) {
            var file = files.item(0);
            console.log(file.name);
            console.log(file.size);
            console.log(file.type); //File reader method

            var reader = new FileReader();
            reader.readAsText(file);

            reader.onload = function (e) {
              var csv = reader.result;
              var allTextLines = [];
              allTextLines = csv.split(/\r|\n|\r/); //Table Headings

              var headers = allTextLines[0].split(';');
              var data = headers;
              var tarr = [];

              for (var j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
              } //Pusd headings to array variable


              _this10.lines.push(tarr); // Table Rows


              var tarrR = [];
              var arrl = allTextLines.length;
              var rows = [];

              for (var i = 1; i < arrl; i++) {
                rows.push(allTextLines[i].split(';'));
              }

              for (var _j = 0; _j < arrl; _j++) {
                tarrR.push(rows[_j]);
              } //Push rows to array variable


              _this10.linesR.push(tarrR);

              console.log('tarrR' + tarrR);
              console.log('lines' + _this10.lines);
              console.log('linesR' + _this10.linesR);

              _this10.authService.getImportPayroll(tarrR).subscribe(function (res) {
                _this10.loading = false;

                if (res.fullname) {
                  _this10.authService.openSnackbar('Alrady Gnerated');
                } else {
                  if (res.length == 0) {
                    _this10.authService.openSnackbar('No Data');
                  } else {
                    // this.getData();
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res.map(function (client) {
                      return new src_app_models_payroll_model__WEBPACK_IMPORTED_MODULE_26__["Payroll"](client);
                    })).subscribe(function (clientes) {
                      console.log('123213123');
                      console.log(clientes);

                      _this10.subject$.next(clientes);
                    });

                    _this10.authService.openSnackbar('Have done');
                  }
                }

                console.log('exprot return value');
                console.log(tarrR);
              }, function (err) {
                _this10.loading = false;
                console.log('exprot return value');
                console.log(tarrR);
              });
            };
          }
        }
      }, {
        key: "visibleColumns",
        get: function get() {
          return this.columns.filter(function (column) {
            return column.visible;
          }).map(function (column) {
            return column.property;
          });
        }
      }]);

      return PayrollComponent;
    }();

    PayrollComponent.??fac = function PayrollComponent_Factory(t) {
      return new (t || PayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]));
    };

    PayrollComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: PayrollComponent,
      selectors: [["vex-payroll"]],
      viewQuery: function PayrollComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      inputs: {
        columns: "columns"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'standard'
        }
      }])],
      decls: 48,
      vars: 26,
      consts: [["fxLayout", "column", "fxLayoutAlign", "center start", 1, "pb-16"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0"], ["fxFlex", "none", "fxHide.xs", "", 1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l"], [4, "ngIf"], ["fxFlex", "none", 1, "mr-4", "pr-4", "border-r"], ["color", "primary", "mat-icon-button", "", "type", "button", 2, "width", "161px!important", "border-radius", "4%!important", 3, "click"], [3, "icIcon"], ["color", "primary", "mat-icon-button", "", "type", "button", 2, "width", "152px!important", "border-radius", "4%!important", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["mode", "indeterminate", "color", "primary", "diameter", "20", "style", "    position: absolute;\n              right: -8px;\n              top: 24%;", 4, "ngIf"], ["fxFlex", "400px", "fxFlex.lt-md", "auto", "fxHide.xs", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-card", "rounded-full", "border", "px-4"], ["size", "20px", 3, "icIcon"], ["placeholder", "Search...", "type", "search", 1, "px-4", "py-3", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["fxFlex", ""], ["fxFlex", "none", "fxHide.gt-xs", "", "mat-icon-button", "", "type", "button", 1, "ml-4"], ["fxFlex", "none", "mat-icon-button", "", "matTooltip", "Filter Columns", "type", "button", 1, "ml-4", 3, "matMenuTriggerFor"], ["color", "primary", "fxFlex", "none", "mat-mini-fab", "", "type", "button", 2, "border-radius", "4%!important", "width", "145px!important", 3, "click"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "contact"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "response"], ["class", "uppercase", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover trans-ease-out cursor-pointer", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], ["xPosition", "before", "yPosition", "below"], ["columnFilterMenu", "matMenu"], ["class", "checkbox-item mat-menu-item", 3, "click", 4, "ngFor", "ngForOf"], ["actionsMenu", "matMenu"], ["matMenuContent", ""], ["mode", "indeterminate", "color", "primary", "diameter", "20", 2, "position", "absolute", "right", "-8px", "top", "24%"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "hover:bg-hover", "text-primary", "bg-primary-light", 3, "click"], ["size", "18px", 3, "icIcon"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-teal", "bg-teal-light", 3, "click"], ["mat-icon-button", "", 1, "w-8", "h-8", "leading-none", "flex", "items-center", "justify-center", "ml-1", "hover:bg-hover", "text-green", "bg-green-light", 3, "click"], ["fxLayoutAlign", "start center", "fxLayoutGap", "4px", 3, "click"], ["fxFlex", "none", 1, "rounded", "px-2", "py-1", "font-medium", "text-xs", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "trans-ease-out", "cursor-pointer"], [1, "checkbox-item", "mat-menu-item", 3, "click"], ["color", "primary", 3, "ngModel", "click", "ngModelChange"], ["mat-menu-item", "", 3, "click"]],
      template: function PayrollComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "vex-page-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "vex-page-layout-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Payroll Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "vex-page-layout-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, PayrollComponent_span_10_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_Template_button_click_12_listener() {
            return ctx.exportTimesheets();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, " Export Timesheets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r40);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](19);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Import Payroll ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function PayrollComponent_Template_input_change_18_listener($event) {
            return ctx.changeListener($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, PayrollComponent_mat_progress_spinner_20_Template, 1, 0, "mat-progress-spinner", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](28, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PayrollComponent_Template_button_click_29_listener() {
            return ctx.generateWorkerID();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Generate Worker ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, PayrollComponent_ng_container_32_Template, 2, 1, "ng-container", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](33, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, PayrollComponent_th_34_Template, 1, 0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, PayrollComponent_td_35_Template, 8, 3, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](36, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](37, PayrollComponent_th_37_Template, 2, 0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, PayrollComponent_td_38_Template, 4, 5, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, PayrollComponent_tr_39_Template, 1, 0, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](40, PayrollComponent_tr_40_Template, 1, 1, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "mat-paginator", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "mat-menu", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, PayrollComponent_button_44_Template, 3, 2, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-menu", 32, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](47, PayrollComponent_ng_template_47_Template, 8, 2, "ng-template", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("container", ctx.layoutCtrl.value === "boxed")("px-gutter", ctx.layoutCtrl.value === "fullwidth");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selection.isEmpty());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.roundImportExport);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.roundImportExport);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formControl", ctx.searchCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matMenuTriggerFor", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icFilterList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@stagger", undefined)("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByProperty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.visibleColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.visibleColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.columns);
        }
      },
      directives: [_vex_components_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_29__["PageLayoutComponent"], _vex_components_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_30__["PageLayoutHeaderDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutAlignDirective"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_32__["PageLayoutContentDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_34__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_37__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuTrigger"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_34__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_34__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatAnchor"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutGapDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__["MatMenuItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheXJvbGwvcGF5cm9sbC5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__["fadeInUp400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__["stagger40ms"]]
      }
    });
    PayrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_21__["UntilDestroy"])()], PayrollComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PayrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'vex-payroll',
          templateUrl: './payroll.component.html',
          styleUrls: ['./payroll.component.scss'],
          animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_17__["fadeInUp400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__["stagger40ms"]],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'standard'
            }
          }]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialog"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]
        }];
      }, {
        columns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/payroll/payroll.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/payroll/payroll.module.ts ***!
    \*************************************************/

  /*! exports provided: PayrollModule */

  /***/
  function srcAppAdminPayrollPayrollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayrollModule", function () {
      return PayrollModule;
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


    var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./payroll-routing.module */
    "./src/app/admin/payroll/payroll-routing.module.ts");
    /* harmony import */


    var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payroll.component */
    "./src/app/admin/payroll/payroll.component.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _client_create_update_client_create_update_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./client-create-update/client-create-update.module */
    "./src/app/admin/payroll/client-create-update/client-create-update.module.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var PayrollModule = function PayrollModule() {
      _classCallCheck(this, PayrollModule);
    };

    PayrollModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PayrollModule
    });
    PayrollModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PayrollModule_Factory(t) {
        return new (t || PayrollModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _client_create_update_client_create_update_module__WEBPACK_IMPORTED_MODULE_7__["ClientCreateUpdateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PayrollModule, {
        declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _client_create_update_client_create_update_module__WEBPACK_IMPORTED_MODULE_7__["ClientCreateUpdateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PayrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"], _client_create_update_client_create_update_module__WEBPACK_IMPORTED_MODULE_7__["ClientCreateUpdateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_18__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/payroll.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/payroll.model.ts ***!
    \*****************************************/

  /*! exports provided: Payroll */

  /***/
  function srcAppModelsPayrollModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Payroll", function () {
      return Payroll;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var Payroll = /*#__PURE__*/function () {
      // clientType:string;
      // parentId:string;
      // clientStatus:string;
      // companyUrl:string;
      // tradingName:string;
      function Payroll(client) {
        _classCallCheck(this, Payroll);

        this._id = client._id;
        this.id = client.id;
        this.logID = client.logID;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.timestamp = client.timestamp;
        this.timestampStr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.timestamp, 'dd MMM,yyyy HH:mm', 'en');
        this.type = client.type;
        this.response = client.response;
        this.periodStart = client.periodStart;
        this.periodEnd = client.periodEnd;
      }

      _createClass(Payroll, [{
        key: "name",
        get: function get() {
          var name = '';

          if (this.firstName && this.lastName) {
            name = this.firstName + ' ' + this.lastName;
          } else if (this.firstName) {
            name = this.firstName;
          } else if (this.lastName) {
            name = this.lastName;
          }

          return name;
        }
      }, {
        key: "period",
        get: function get() {
          var period = '';
          period = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.periodStart, 'dd MMM,yyyy', 'en') + ' - ' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.periodEnd, 'dd MMM,yyyy', 'en');
          return period;
        }
      }]);

      return Payroll;
    }();
    /***/

  }
}]);
//# sourceMappingURL=admin-payroll-payroll-module-es5.js.map