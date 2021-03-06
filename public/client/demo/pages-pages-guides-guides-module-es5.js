function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-guides-guides-module"], {
  /***/
  "./node_modules/@iconify/icons-ic/twotone-mail.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-mail.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneMailJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M20 6H4l8 4.99zM4 8v10h16V8l-8 5z\" fill=\"currentColor\"/><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z\" fill=\"currentColor\"/>",
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
  "./src/app/pages/pages/guides/guides-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pages/guides/guides-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GuidesRoutingModule */

  /***/
  function srcAppPagesPagesGuidesGuidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuidesRoutingModule", function () {
      return GuidesRoutingModule;
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


    var _guides_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guides.component */
    "./src/app/pages/pages/guides/guides.component.ts");

    var routes = [{
      path: '',
      component: _guides_component__WEBPACK_IMPORTED_MODULE_2__["GuidesComponent"],
      data: {
        toolbarShadowEnabled: true
      }
    }];

    var GuidesRoutingModule = function GuidesRoutingModule() {
      _classCallCheck(this, GuidesRoutingModule);
    };

    GuidesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: GuidesRoutingModule
    });
    GuidesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function GuidesRoutingModule_Factory(t) {
        return new (t || GuidesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GuidesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GuidesRoutingModule, [{
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
  "./src/app/pages/pages/guides/guides.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/pages/guides/guides.component.ts ***!
    \********************************************************/

  /*! exports provided: GuidesComponent */

  /***/
  function srcAppPagesPagesGuidesGuidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuidesComponent", function () {
      return GuidesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-phone-in-talk */
    "./node_modules/@iconify/icons-ic/twotone-phone-in-talk.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-mail */
    "./node_modules/@iconify/icons-ic/twotone-mail.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-movie-filter */
    "./node_modules/@iconify/icons-ic/twotone-movie-filter.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component */
    "./src/app/pages/apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component.ts");
    /* harmony import */


    var _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../apps/help-center/help-center-guides/help-center-guides.component */
    "./src/app/pages/apps/help-center/help-center-guides/help-center-guides.component.ts");
    /* harmony import */


    var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../@vex/utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function GuidesComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GuidesComponent_a_15_Template_a_click_0_listener() {
          var guide_r4 = ctx.$implicit;
          return guide_r4.onClick(guide_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var guide_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", guide_r4.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](guide_r4.label);
      }
    }

    function GuidesComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GuidesComponent_a_20_Template_a_click_0_listener() {
          var guide_r6 = ctx.$implicit;
          return guide_r6.onClick(guide_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var guide_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", guide_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](guide_r6.label);
      }
    }

    function GuidesComponent_a_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GuidesComponent_a_25_Template_a_click_0_listener() {
          var guide_r8 = ctx.$implicit;
          return guide_r8.onClick(guide_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var guide_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", guide_r8.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](guide_r8.label);
      }
    }

    function GuidesComponent_a_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GuidesComponent_a_30_Template_a_click_0_listener() {
          var guide_r10 = ctx.$implicit;
          return guide_r10.onClick(guide_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var guide_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", guide_r10.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](guide_r10.label);
      }
    }

    var GuidesComponent = /*#__PURE__*/function () {
      function GuidesComponent(dialog) {
        var _this = this;

        _classCallCheck(this, GuidesComponent);

        this.dialog = dialog;
        this.guides = [{
          id: 1,
          label: 'How secure is my password?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 2,
          label: 'Can I change my username?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 3,
          label: 'How do I change my email?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 4,
          label: 'Where can I change my timezone?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 5,
          label: 'How do I change my password?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 6,
          label: 'Which technologies are used?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 7,
          label: 'How do I make a request?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 8,
          label: 'What are the API Limits?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 9,
          label: 'How can I apply for the API?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 10,
          label: 'When can I start developing?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 11,
          label: 'Can I get a refund?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 12,
          label: 'How do I pay?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 13,
          label: 'Which payment methods are supported?',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 14,
          label: 'Do I need to pay VAT?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 15,
          label: 'Where do I find my purchase code?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 16,
          label: 'How do I download the template?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 17,
          label: 'Installation Guide',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 18,
          label: 'Creating your first page',
          icon: _iconify_icons_ic_twotone_movie_filter__WEBPACK_IMPORTED_MODULE_5___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 19,
          label: 'Customizing your template',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }, {
          id: 20,
          label: 'How do I contact support?',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_4___default.a,
          category: _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps,
          onClick: function onClick(guide) {
            return _this.openDialog(guide);
          }
        }];
        this.accountSettings = this.guides.filter(function (guide) {
          return guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].accountSettings;
        });
        this.apiHelp = this.guides.filter(function (guide) {
          return guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].apiHelp;
        });
        this.billing = this.guides.filter(function (guide) {
          return guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].billing;
        });
        this.firstSteps = this.guides.filter(function (guide) {
          return guide.category === _apps_help_center_help_center_guides_help_center_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuideCategory"].firstSteps;
        });
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_8__["trackById"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icPhoneInTalk = _iconify_icons_ic_twotone_phone_in_talk__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icMail = _iconify_icons_ic_twotone_mail__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(GuidesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog(guide) {
          this.dialog.open(_apps_help_center_help_center_guides_help_center_guides_guide_help_center_guides_guide_component__WEBPACK_IMPORTED_MODULE_6__["HelpCenterGuidesGuideComponent"], {
            data: guide,
            width: '600px'
          });
        }
      }]);

      return GuidesComponent;
    }();

    GuidesComponent.??fac = function GuidesComponent_Factory(t) {
      return new (t || GuidesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]));
    };

    GuidesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GuidesComponent,
      selectors: [["vex-guides"]],
      decls: 45,
      vars: 19,
      consts: [[1, "text-center", "p-gutter", "pb-24", "header"], [1, "container"], [1, "display-2", "mt-16", "mb-8"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "rounded-full", "bg-card", "py-2", "pl-6", "pr-3", "text-secondary", "max-w-xl", "mx-auto", "shadow-8"], ["fxFlex", "none", "size", "24px", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for answers...", "type", "text", 1, "border-0", "ml-4", "placeholder:text-secondary", "subheading-2", "outline-none", "font-medium", "w-0", "bg-card"], ["color", "primary", "fxFlex", "none", "mat-raised-button", "", "type", "button", 1, "rounded-full"], ["gdAlignColumns", "start start", "gdColumns", "1fr 1fr", "gdColumns.lt-md", "1fr", "gdGap", "24px", 1, "text-left", "mt-24", "mb-12", "container"], [1, "card", "max-w-full", "overflow-hidden", "p-3"], ["mat-subheader", ""], ["class", "rounded overflow-hidden", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bg-card", "py-16", "px-gutter", "footer"], [1, "display-1", "mt-0", "mb-4", "text-center"], [1, "subheading-2", "text-hint", "text-center", "max-w-lg", "mx-auto", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "24px", 1, "mt-16", "max-w-3xl", "mx-auto"], ["fxFlex", "", "routerLinkActive", "", 1, "text-center", "p-6", "border", "rounded"], ["size", "42px", 1, "text-hint", 3, "icon"], [1, "title", "mb-0", "mt-4"], ["mat-list-item", "", 1, "rounded", "overflow-hidden", 3, "click"], ["mat-list-icon", "", 3, "icIcon"], ["matLine", ""]],
      template: function GuidesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Hello, how can we help?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ic-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "SEARCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "First Steps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, GuidesComponent_a_15_Template, 4, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "API Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, GuidesComponent_a_20_Template, 4, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Billing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, GuidesComponent_a_25_Template, 4, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "First Steps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, GuidesComponent_a_30_Template, 4, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Still have questions?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "020 7436 7424");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "ic-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "support@imperialrecruitment.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@stagger", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.accountSettings)("ngForTrackBy", ctx.trackById);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.apiHelp)("ngForTrackBy", ctx.trackById);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.billing)("ngForTrackBy", ctx.trackById);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.firstSteps)("ngForTrackBy", ctx.trackById);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icPhoneInTalk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icMail);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["??grid_privatef"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["??grid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["??grid_privateba"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkActive"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatLine"]],
      styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e6e6e6' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e6e6e6'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/illustrations/it_support.svg\");\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: 250px;\n  padding-bottom: 250px;\n}\n\n@media (min-width: 960px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMvZ3VpZGVzL2d1aWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsNjVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpRUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL2d1aWRlcy9ndWlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgODAwIDgwMCclM0UlM0NnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZTZlNmU2JyBzdHJva2Utd2lkdGg9JzEnJTNFJTNDcGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvJTNFJTNDcGF0aCBkPSdNLTMxIDIyOUwyMzcgMjYxIDM5MCAzODIgNjAzIDQ5MyAzMDguNSA1MzcuNSAxMDEuNSAzODEuNU0zNzAgOTA1TDI5NSA3NjQnLyUzRSUzQ3BhdGggZD0nTTUyMCA2NjBMNTc4IDg0MiA3MzEgNzM3IDg0MCA1OTkgNjAzIDQ5MyA1MjAgNjYwIDI5NSA3NjQgMzA5IDUzOCAzOTAgMzgyIDUzOSAyNjkgNzY5IDIyOSA1NzcuNSA0MS41IDM3MCAxMDUgMjk1IC0zNiAxMjYuNSA3OS41IDIzNyAyNjEgMTAyIDM4MiA0MCA1OTkgLTY5IDczNyAxMjcgODgwJy8lM0UlM0NwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvJTNFJTNDcGF0aCBkPSdNLTIyMiA0MkwxMjYuNSA3OS41IDM3MCAxMDUgNTM5IDI2OSA1NzcuNSA0MS41IDkyNyA4MCA3NjkgMjI5IDkwMiAzODIgNjAzIDQ5MyA3MzEgNzM3TTI5NS0zNkw1NzcuNSA0MS41TTU3OCA4NDJMMjk1IDc2NE00MC0yMDFMMTI3IDgwTTEwMiAzODJMLTI2MSAyNjknLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjNlNmU2ZTYnJTNFJTNDY2lyY2xlIGN4PSc3NjknIGN5PScyMjknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTM5JyBjeT0nMjY5JyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzYwMycgY3k9JzQ5Mycgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNTIwJyBjeT0nNjYwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzMwOScgY3k9JzUzOCcgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyOTUnIGN5PSc3NjQnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nNDAnIGN5PSc1OTknIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMTAyJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzEyNycgY3k9JzgwJyByPSc1Jy8lM0UlM0NjaXJjbGUgY3g9JzM3MCcgY3k9JzEwNScgcj0nNScvJTNFJTNDY2lyY2xlIGN4PSc1NzgnIGN5PSc0Micgcj0nNScvJTNFJTNDY2lyY2xlIGN4PScyMzcnIGN5PScyNjEnIHI9JzUnLyUzRSUzQ2NpcmNsZSBjeD0nMzkwJyBjeT0nMzgyJyByPSc1Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9pbGx1c3RyYXRpb25zL2l0X3N1cHBvcnQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG59Il19 */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger60ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GuidesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-guides',
          templateUrl: './guides.component.html',
          styleUrls: ['./guides.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_9__["stagger60ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages/guides/guides.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/pages/guides/guides.module.ts ***!
    \*****************************************************/

  /*! exports provided: GuidesModule */

  /***/
  function srcAppPagesPagesGuidesGuidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuidesModule", function () {
      return GuidesModule;
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


    var _guides_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guides-routing.module */
    "./src/app/pages/pages/guides/guides-routing.module.ts");
    /* harmony import */


    var _guides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guides.component */
    "./src/app/pages/pages/guides/guides.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../apps/help-center/help-center-guides/help-center-guides.module */
    "./src/app/pages/apps/help-center/help-center-guides/help-center-guides.module.ts");

    var GuidesModule = function GuidesModule() {
      _classCallCheck(this, GuidesModule);
    };

    GuidesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: GuidesModule
    });
    GuidesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function GuidesModule_Factory(t) {
        return new (t || GuidesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _guides_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuidesRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_10__["HelpCenterGuidesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GuidesModule, {
        declarations: [_guides_component__WEBPACK_IMPORTED_MODULE_3__["GuidesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _guides_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuidesRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_10__["HelpCenterGuidesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GuidesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_guides_component__WEBPACK_IMPORTED_MODULE_3__["GuidesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _guides_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuidesRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _apps_help_center_help_center_guides_help_center_guides_module__WEBPACK_IMPORTED_MODULE_10__["HelpCenterGuidesModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-guides-guides-module-es5.js.map