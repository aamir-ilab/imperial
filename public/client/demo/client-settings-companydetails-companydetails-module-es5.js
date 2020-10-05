function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-settings-companydetails-companydetails-module"], {
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
  "./node_modules/@iconify/icons-ic/twotone-phone.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-phone.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotonePhoneJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z\" fill=\"currentColor\"/><path d=\"M9.07 7.57A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59L5.79 8.8z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/stagger.animation.ts":
  /*!**************************************************!*\
    !*** ./src/@vex/animations/stagger.animation.ts ***!
    \**************************************************/

  /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */

  /***/
  function srcVexAnimationsStaggerAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () {
      return staggerAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger80ms", function () {
      return stagger80ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger60ms", function () {
      return stagger60ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger40ms", function () {
      return stagger40ms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stagger20ms", function () {
      return stagger20ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function staggerAnimation(timing) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('stagger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), {
        optional: true
      })])]);
    }

    var stagger80ms = staggerAnimation(80);
    var stagger60ms = staggerAnimation(60);
    var stagger40ms = staggerAnimation(40);
    var stagger20ms = staggerAnimation(20);
    /***/
  },

  /***/
  "./src/app/client/settings/companydetails/companydetails-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/client/settings/companydetails/companydetails-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: CompanydetailsRoutingModule */

  /***/
  function srcAppClientSettingsCompanydetailsCompanydetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanydetailsRoutingModule", function () {
      return CompanydetailsRoutingModule;
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


    var _companydetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./companydetails.component */
    "./src/app/client/settings/companydetails/companydetails.component.ts");

    var routes = [{
      path: '',
      component: _companydetails_component__WEBPACK_IMPORTED_MODULE_2__["CompanydetailsComponent"]
    }];

    var CompanydetailsRoutingModule = function CompanydetailsRoutingModule() {
      _classCallCheck(this, CompanydetailsRoutingModule);
    };

    CompanydetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompanydetailsRoutingModule
    });
    CompanydetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompanydetailsRoutingModule_Factory(t) {
        return new (t || CompanydetailsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanydetailsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanydetailsRoutingModule, [{
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
  "./src/app/client/settings/companydetails/companydetails.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/client/settings/companydetails/companydetails.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CompanydetailsComponent */

  /***/
  function srcAppClientSettingsCompanydetailsCompanydetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanydetailsComponent", function () {
      return CompanydetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-smartphone */
    "./node_modules/@iconify/icons-ic/twotone-smartphone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person */
    "./node_modules/@iconify/icons-ic/twotone-person.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-arrow-drop-down */
    "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-menu */
    "./node_modules/@iconify/icons-ic/twotone-menu.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-camera */
    "./node_modules/@iconify/icons-ic/twotone-camera.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone */
    "./node_modules/@iconify/icons-ic/twotone-phone.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CompanydetailsComponent_div_9_article_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.infoMessage, " ");
      }
    }

    function CompanydetailsComponent_div_9_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "progress", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx_r8.progress);
      }
    }

    function CompanydetailsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanydetailsComponent_div_9_Template_input_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onChange(_r6.files[0]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Choose a file\u2026 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanydetailsComponent_div_9_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onUpload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompanydetailsComponent_div_9_article_14_Template, 3, 1, "article", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompanydetailsComponent_div_9_div_15_Template, 3, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.fileName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r0.isUploading ? "" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.infoMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.infoMessage);
      }
    }

    function CompanydetailsComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to input Correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanydetailsComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to input Correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanydetailsComponent_mat_error_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to input Correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanydetailsComponent_mat_error_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to input Correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanydetailsComponent_mat_error_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have to input Correctly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CompanydetailsComponent = /*#__PURE__*/function () {
      function CompanydetailsComponent(router, fb, cd, authService, storage) {
        var _this = this;

        _classCallCheck(this, CompanydetailsComponent);

        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.authService = authService;
        this.storage = storage;
        this.isUploading = false;
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
        this.fileName = "No file selected";
        this.selectCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.inputType = 'password';
        this.visible = false;
        this.icPhone = _iconify_icons_ic_twotone_phone__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icCamera = _iconify_icons_ic_twotone_camera__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icSmartphone = _iconify_icons_ic_twotone_smartphone__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.states = [{
          name: 'Arkansas',
          population: '2.978M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        }, {
          name: 'California',
          population: '39.14M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        }, {
          name: 'Florida',
          population: '20.27M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        }, {
          name: 'Texas',
          population: '27.47M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }];
        this.filteredStates$ = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (state) {
          return state ? _this.filterStates(state) : _this.states.slice();
        }));
      }

      _createClass(CompanydetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.authService.currenctUser) this.authService.setCurrentUser();
          if (!this.authService.currentParent) this.authService.setCurrentParent();
          this.currentUser = this.authService.currenctUser;
          this.currentParent = this.authService.currentParent;
          if (this.currentUser.companyLogo != '') this.imageUrl = this.currentUser.companyLogo;

          if (this.currentParent && this.currentParent['companyLogo'] != '') {
            this.imageUrl = this.currentParent['companyLogo']; // alert(this.imageUrl)

            console.log('0000');
            console.log(this.imageUrl);
            console.log(this.currentParent);
          }

          console.log('currentUser');
          console.log(this.currentUser);
          console.log(this.currentParent);

          if (this.currentUser['parentId'] == '') {
            this.formCompany = this.fb.group({
              companyLogo: [this.currentUser['companyLogo'] || ''],
              tradingName: [this.currentUser['tradingName'] || ''],
              companyUrl: [this.currentUser['companyUrl'] || ''],
              companyName: [this.currentUser['companyName'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              companyAddress: [this.currentUser['companyAddress'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              companyPhoneNumber: [this.currentUser['companyPhoneNumber'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              emailAddressAccountsTeam: [this.currentUser['emailAddressAccountsTeam'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              VATNumber: [this.currentUser['VATNumber'] || ''],
              companyRegNumber: [this.currentUser['companyRegNumber'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              _id: [this.currentUser['_id']]
            });
          } else {
            this.formCompany = this.fb.group({
              companyLogo: [this.currentParent['companyLogo'] || ''],
              tradingName: [this.currentParent['tradingName'] || ''],
              companyUrl: [this.currentParent['companyUrl'] || ''],
              companyName: [this.currentParent['companyName'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
              companyAddress: [this.currentParent['companyAddress'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              companyPhoneNumber: [this.currentParent['companyPhoneNumber'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              emailAddressAccountsTeam: [this.currentParent['emailAddressAccountsTeam'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              VATNumber: [this.currentParent['VATNumber'] || ''],
              companyRegNumber: [this.currentParent['companyRegNumber'] || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              _id: [this.currentParent['_id']]
            });
            this.formCompany.disable();
          }
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
          } else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
          }
        }
      }, {
        key: "filterStates",
        value: function filterStates(name) {
          return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
          });
        }
      }, {
        key: "isControlHasError",
        value: function isControlHasError(controlName, validationType) {
          var control = this.formCompany.controls[controlName];

          if (!control) {
            return false;
          }

          var result = control.hasError(validationType) && (control.dirty || control.touched);
          return result;
        }
      }, {
        key: "onChange",
        value: function onChange(file) {
          var _this2 = this;

          if (file) {
            this.fileName = file.name;
            this.file = file;
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function (event) {
              _this2.imageUrl = reader.result;
            };
          }
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          var _this3 = this;

          var fileName = this.file.name.split('.').slice(0, -1).join('.') + '_' + new Date().getTime();
          var filePath = "Profile/".concat(fileName);
          var fileRef = this.storage.ref(filePath);
          console.log('upload-a');
          this.storage.upload(filePath, this.file).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
            console.log('upload-b');
            fileRef.getDownloadURL().subscribe(function (url) {
              console.log('upload-c');

              _this3.formCompany.controls.companyLogo.setValue(url);

              console.log(url);
              alert('Upload Image Successfully');
            });
          })).subscribe();
        }
      }, {
        key: "update",
        value: function update() {
          var _this4 = this;

          var controls = this.formCompany.controls;

          if (controls.companyName.value == '' || controls.companyAddress.value == '' || controls.companyPhoneNumber.value == '' || controls.emailAddressAccountsTeam.value == '' || controls.companyRegNumber.value == '') {
            alert('Please complete all the required fields');
            return;
          }

          this.authService.updateUser(this.formCompany.value).subscribe(function (res) {
            console.log('XXXXXXXXXXXXXXXXXXXXXXXX');
            console.log(res);

            _this4.authService.setCurrentUserLocal(res);

            _this4.authService.openSnackbar('updated successfully'); // this.router.navigate(['/']);

          });
        }
      }]);

      return CompanydetailsComponent;
    }();

    CompanydetailsComponent.ɵfac = function CompanydetailsComponent_Factory(t) {
      return new (t || CompanydetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorage"]));
    };

    CompanydetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanydetailsComponent,
      selectors: [["vex-companydetails"]],
      decls: 55,
      vars: 12,
      consts: [["current", "Company details"], ["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 3, "formGroup"], ["fxFlex", "auto", 1, "card"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "px-6", "py-4", "border-b"], [1, "title", "m-0"], ["fxLayout", "column", 1, "px-6", "py-4"], [1, "columns"], ["class", "row is-one-third", 4, "ngIf"], [1, "column"], [1, "image", "is-128x128", 2, "padding-bottom", "1.34375em"], [2, "padding", "auto", "margin", "auto", "max-width", "200px", 3, "src"], ["formControlName", "companyName", "matInput", ""], [4, "ngIf"], ["fxFlex", "grow"], ["formControlName", "tradingName", "matInput", ""], ["formControlName", "companyAddress", "matInput", ""], ["formControlName", "companyPhoneNumber", "matInput", ""], ["formControlName", "emailAddressAccountsTeam", "matInput", ""], ["formControlName", "VATNumber", "matInput", ""], ["formControlName", "companyRegNumber", "matInput", ""], ["formControlName", "companyUrl", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px"], ["mat-button", "", "type", "button", 3, "disabled"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "disabled", "click"], [1, "row", "is-one-third"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "file-label"], ["type", "file", "name", "file", 1, "file-input", 2, "opacity", "0", "width", "0px", 3, "change"], ["fileInput", ""], [1, "file-cta", "mat-raised-button"], [1, "file-icon"], [1, "file-label", "mat-raised-button"], [1, "file-name"], ["mat-button", "", "color", "primary", 2, "margin-left", "128px", "background", "#5c77ff", "color", "white", 3, "click"], ["class", "message", 4, "ngIf"], ["class", "field", 4, "ngIf"], [1, "message"], [1, "message-body"], [1, "control"], ["max", "100", 1, "progress", "is-primary", 2, "visibility", "hidden"]],
      template: function CompanydetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vex-secondary-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompanydetailsComponent_div_9_Template, 16, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comopany Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CompanydetailsComponent_mat_error_17_Template, 3, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Trading Name (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CompanydetailsComponent_mat_error_26_Template, 3, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CompanydetailsComponent_mat_error_31_Template, 3, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CompanydetailsComponent_mat_error_36_Template, 3, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "VAT Number (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Company Registration Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CompanydetailsComponent_mat_error_45_Template, 3, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Web URL Address (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanydetailsComponent_Template_button_click_53_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stagger", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.parentId == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlHasError("companyName", "required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlHasError("companyAddress", "required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlHasError("companyPhoneNumber", "required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlHasError("emailAddressAccountsTeam", "required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isControlHasError("companyRegNumber", "required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentUser.parentId != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currentUser.parentId != "");
        }
      },
      directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["SecondaryToolbarComponent"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_18__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9zZXR0aW5ncy9jb21wYW55ZGV0YWlscy9jb21wYW55ZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger60ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"]]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanydetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-companydetails',
          templateUrl: './companydetails.component.html',
          styleUrls: ['./companydetails.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger60ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_11__["fadeInUp400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client/settings/companydetails/companydetails.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/client/settings/companydetails/companydetails.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CompanydetailsModule */

  /***/
  function srcAppClientSettingsCompanydetailsCompanydetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanydetailsModule", function () {
      return CompanydetailsModule;
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


    var _companydetails_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./companydetails-routing.module */
    "./src/app/client/settings/companydetails/companydetails-routing.module.ts");
    /* harmony import */


    var _companydetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./companydetails.component */
    "./src/app/client/settings/companydetails/companydetails.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CompanydetailsModule = function CompanydetailsModule() {
      _classCallCheck(this, CompanydetailsModule);
    };

    CompanydetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompanydetailsModule
    });
    CompanydetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompanydetailsModule_Factory(t) {
        return new (t || CompanydetailsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _companydetails_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanydetailsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_18__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanydetailsModule, {
        declarations: [_companydetails_component__WEBPACK_IMPORTED_MODULE_3__["CompanydetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _companydetails_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanydetailsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_18__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanydetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_companydetails_component__WEBPACK_IMPORTED_MODULE_3__["CompanydetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _companydetails_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanydetailsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_18__["SecondaryToolbarModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_20__["ContainerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorageModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=client-settings-companydetails-companydetails-module-es5.js.map