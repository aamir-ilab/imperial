function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-dashboard-admin-dashboard-module~admin-clients-clients-module~client-clients-das~b5927e4b"], {
  /***/
  "./src/app/admin/clients/client-create-update/client-create-update.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/clients/client-create-update/client-create-update.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ClientCreateUpdateComponent */

  /***/
  function srcAppAdminClientsClientCreateUpdateClientCreateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["class", "headline m-0", "fxFlex", "auto", 4, "ngIf"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], [1, "-mx-6", "text-border"], ["fxLayout", "column"], [1, "flex", "flex-col", "sm:flex-row"], [1, "mt-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "firstName", "matInput", ""], ["matPrefix", "", 1, "mr-3", 3, "icIcon"], [1, "sm:mt-6", "sm:ml-6", "flex-auto"], ["cdkFocusInitial", "", "formControlName", "lastName", "matInput", ""], [1, "flex-auto"], ["formControlName", "emailAddress", "matInput", ""], ["formControlName", "companyName", "matInput", ""], [1, "sm:ml-6", "flex-auto"], ["formControlName", "companyAddress", "matInput", ""], ["formControlName", "companyPhoneNumber", "pattern", "[0-9]*", "minlength", "10", "maxlength", "14", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", "matInput", ""], ["formControlName", "emailAddressAccountsTeam", "matInput", ""], ["formControlName", "VATNumber", "matInput", ""], ["formControlName", "companyRegNumber", "matInput", ""], ["formControlName", "position", "matInput", ""], ["formControlName", "phoneNumber", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-button", "", "type", "submit", 4, "ngIf"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["fxFlex", "auto", 1, "headline", "m-0"], ["color", "primary", "mat-button", "", "type", "submit"]],
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NsaWVudHMvY2xpZW50LWNyZWF0ZS11cGRhdGUvY2xpZW50LWNyZWF0ZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
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
  "./src/app/admin/clients/client-create-update/client-create-update.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/clients/client-create-update/client-create-update.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ClientCreateUpdateModule */

  /***/
  function srcAppAdminClientsClientCreateUpdateClientCreateUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/admin/clients/client-create-update/client-create-update.component.ts");
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

  }
}]);
//# sourceMappingURL=default~admin-admin-dashboard-admin-dashboard-module~admin-clients-clients-module~client-clients-das~b5927e4b-es5.js.map