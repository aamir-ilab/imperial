function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icons-ic-icons-ic-module"], {
  /***/
  "./src/@vex/animations/scale-fade-in.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
    \********************************************************/

  /*! exports provided: scaleFadeInAnimation, scaleFadeIn400ms */

  /***/
  function srcVexAnimationsScaleFadeInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleFadeInAnimation", function () {
      return scaleFadeInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleFadeIn400ms", function () {
      return scaleFadeIn400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function scaleFadeInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleFadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.8)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)',
        opacity: 1
      }))])]);
    }

    var scaleFadeIn400ms = scaleFadeInAnimation(400);
    /***/
  },

  /***/
  "./src/app/pages/ui/icons/icons-ic/icons-ic-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-ic/icons-ic-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: IconsIcRoutingModule */

  /***/
  function srcAppPagesUiIconsIconsIcIconsIcRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsIcRoutingModule", function () {
      return IconsIcRoutingModule;
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


    var _icons_ic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icons-ic.component */
    "./src/app/pages/ui/icons/icons-ic/icons-ic.component.ts");

    var routes = [{
      path: '',
      component: _icons_ic_component__WEBPACK_IMPORTED_MODULE_2__["IconsIcComponent"],
      data: {
        scrollDisabled: true
      }
    }];

    var IconsIcRoutingModule = function IconsIcRoutingModule() {
      _classCallCheck(this, IconsIcRoutingModule);
    };

    IconsIcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsIcRoutingModule
    });
    IconsIcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsIcRoutingModule_Factory(t) {
        return new (t || IconsIcRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsIcRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsIcRoutingModule, [{
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
  "./src/app/pages/ui/icons/icons-ic/icons-ic.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-ic/icons-ic.component.ts ***!
    \***************************************************************/

  /*! exports provided: IconsIcComponent */

  /***/
  function srcAppPagesUiIconsIconsIcIconsIcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsIcComponent", function () {
      return IconsIcComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _static_data_icons_ic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../static-data/icons-ic */
    "./src/static-data/icons-ic.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function IconsIcComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var icon_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r4);
      }
    }

    function IconsIcComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsIcComponent_div_1_div_1_Template, 5, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2);
      }
    }

    function IconsIcComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No icon matching your filters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleFadeIn", undefined);
      }
    }

    var IconsIcComponent = /*#__PURE__*/function () {
      function IconsIcComponent(route, breakpointObserver, document, renderer) {
        _classCallCheck(this, IconsIcComponent);

        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.document = document;
        this.renderer = renderer;
        this.filteredIcons$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (paramMap) {
          return paramMap.get('search');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])('')), this.breakpointObserver.observe("(min-width: 600px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (state) {
          return state.matches;
        }))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              value = _ref2[0],
              isDesktop = _ref2[1];

          var filteredIcons = _static_data_icons_ic__WEBPACK_IMPORTED_MODULE_4__["iconsIC"].filter(function (iconName) {
            return iconName.includes((value || '').toLowerCase());
          });

          return filteredIcons.reduce(function (prev, curr, index) {
            if (isDesktop) {
              if (index % 4 === 0) {
                prev.push([]);
              }
            } else {
              if (index % 2 === 0) {
                prev.push([]);
              }
            }

            prev[prev.length - 1] = [].concat(_toConsumableArray(prev[prev.length - 1]), [curr]);
            return prev;
          }, [[]]);
        }));
      }

      _createClass(IconsIcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!IconsIcComponent.fontLoaded) {
            this.loadFont();
          }
        }
      }, {
        key: "loadFont",
        value: function loadFont() {
          var _a;

          IconsIcComponent.fontLoaded = true;
          var linkElem = this.renderer.createElement('link');
          this.renderer.setAttribute(linkElem, 'rel', 'stylesheet');
          this.renderer.setAttribute(linkElem, 'href', 'https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone');
          this.renderer.appendChild((_a = this.document) === null || _a === void 0 ? void 0 : _a.head, linkElem);
        }
      }]);

      return IconsIcComponent;
    }();

    IconsIcComponent.ɵfac = function IconsIcComponent_Factory(t) {
      return new (t || IconsIcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    IconsIcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconsIcComponent,
      selectors: [["vex-icons-ic"]],
      decls: 6,
      vars: 8,
      consts: [["itemSize", "96", 1, "flex-auto"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "flex items-center justify-center", 4, "ngIf"], ["class", "icon-container", 4, "ngFor", "ngForOf"], [1, "icon-container"], [1, "icon", "material-icons-two-tone"], [1, "body-2", "text-secondary", "text-center"], [1, "flex", "items-center", "justify-center"], ["src", "assets/img/illustrations/peak_mountain_3.svg", 1, "m-8", "h-64"], [1, "headline", "m-0", "text-center"]],
      template: function IconsIcComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsIcComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconsIcComponent_div_3_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.filteredIcons$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.filteredIcons$)).length === 0);
        }
      },
      directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]],
      styles: [".icon-container[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  margin-top: 24px;\n  overflow: hidden;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n  width: 50%;\n  text-align: center;\n}\n\n@media (min-width: 600px) {\n  .icon-container[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.icon-container[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvaWNvbnMvaWNvbnMtaWMvaWNvbnMtaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2ljb25zL2ljb25zLWljL2ljb25zLWljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuXG4uaWNvbi1jb250YWluZXIgLmJvZHktMiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDA7XG59Il19 */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleFadeIn400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsIcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-icons-ic',
          templateUrl: './icons-ic.component.html',
          styleUrls: ['./icons-ic.component.scss'],
          animations: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_2__["scaleFadeIn400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/icons/icons-ic/icons-ic.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-ic/icons-ic.module.ts ***!
    \************************************************************/

  /*! exports provided: IconsIcModule */

  /***/
  function srcAppPagesUiIconsIconsIcIconsIcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsIcModule", function () {
      return IconsIcModule;
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


    var _icons_ic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icons-ic-routing.module */
    "./src/app/pages/ui/icons/icons-ic/icons-ic-routing.module.ts");
    /* harmony import */


    var _icons_ic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./icons-ic.component */
    "./src/app/pages/ui/icons/icons-ic/icons-ic.component.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var IconsIcModule = function IconsIcModule() {
      _classCallCheck(this, IconsIcModule);
    };

    IconsIcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsIcModule
    });
    IconsIcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsIcModule_Factory(t) {
        return new (t || IconsIcModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_ic_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsIcRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsIcModule, {
        declarations: [_icons_ic_component__WEBPACK_IMPORTED_MODULE_3__["IconsIcComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_ic_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsIcRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsIcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_icons_ic_component__WEBPACK_IMPORTED_MODULE_3__["IconsIcComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_ic_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsIcRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/static-data/icons-ic.ts":
  /*!*************************************!*\
    !*** ./src/static-data/icons-ic.ts ***!
    \*************************************/

  /*! exports provided: iconsIC */

  /***/
  function srcStaticDataIconsIcTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iconsIC", function () {
      return iconsIC;
    });

    var iconsIC = ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_inbox', 'all_out', 'android', 'announcement', 'arrow_right_alt', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_border', 'bookmarks', 'bug_report', 'build', 'cached', 'calendar_today', 'calendar_view_day', 'camera_enhance', 'card_giftcard', 'card_membership', 'card_travel', 'change_history', 'check_circle', 'check_circle_outline', 'chrome_reader_mode', 'class', 'code', 'commute', 'compare_arrows', 'contact_support', 'copyright', 'credit_card', 'dashboard', 'date_range', 'delete', 'delete_forever', 'delete_outline', 'description', 'dns', 'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'drag_indicator', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app', 'explore', 'explore_off', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff', 'flip_to_back', 'flip_to_front', 'g_translate', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history', 'home', 'horizontal_split', 'hourglass_empty', 'hourglass_full', 'http', 'https', 'important_devices', 'info', 'input', 'invert_colors', 'label', 'label_important', 'label_off', 'language', 'launch', 'line_style', 'line_weight', 'list', 'lock', 'lock_open', 'loyalty', 'markunread_mailbox', 'maximize', 'minimize', 'motorcycle', 'note_add', 'offline_bolt', 'offline_pin', 'opacity', 'open_in_browser', 'open_in_new', 'open_with', 'pageview', 'pan_tool', 'payment', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'picture_in_picture_alt', 'play_for_work', 'polymer', 'power_settings_new', 'pregnant_woman', 'print', 'query_builder', 'question_answer', 'receipt', 'record_voice_over', 'redeem', 'remove_shopping_cart', 'reorder', 'report_problem', 'restore', 'restore_from_trash', 'restore_page', 'room', 'rounded_corner', 'rowing', 'schedule', 'search', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'settings_input_component', 'settings_input_composite', 'settings_input_hdmi', 'settings_input_svideo', 'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'speaker_notes_off', 'spellcheck', 'star_rate', 'stars', 'store', 'subject', 'supervised_user_circle', 'supervisor_account', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vertical_circle', 'tab', 'tab_unselected', 'text_rotate_up', 'text_rotate_vertical', 'text_rotation_down', 'text_rotation_none', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'today', 'toll', 'touch_app', 'track_changes', 'translate', 'trending_down', 'trending_flat', 'trending_up', 'turned_in', 'turned_in_not', 'update', 'verified_user', 'vertical_split', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day', 'view_headline', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'voice_over_off', 'watch_later', 'work', 'work_off', 'work_outline', 'youtube_searched_for', 'zoom_in', 'zoom_out', 'add_alert', 'error', 'error_outline', 'notification_important', 'warning', '4k', 'add_to_queue', 'airplay', 'album', 'art_track', 'av_timer', 'branding_watermark', 'call_to_action', 'closed_caption', 'control_camera', 'equalizer', 'explicit', 'fast_forward', 'fast_rewind', 'featured_play_list', 'featured_video', 'fiber_dvr', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'forward_10', 'forward_30', 'forward_5', 'games', 'hd', 'hearing', 'high_quality', 'library_add', 'library_books', 'library_music', 'loop', 'mic', 'mic_none', 'mic_off', 'missed_video_call', 'movie', 'music_video', 'new_releases', 'not_interested', 'note', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_filled_white', 'play_circle_outline', 'playlist_add', 'playlist_add_check', 'playlist_play', 'queue', 'queue_music', 'queue_play_next', 'radio', 'recent_actors', 'remove_from_queue', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'shuffle', 'skip_next', 'skip_previous', 'slow_motion_video', 'snooze', 'sort_by_alpha', 'stop', 'subscriptions', 'subtitles', 'surround_sound', 'video_call', 'video_label', 'video_library', 'videocam', 'videocam_off', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset', 'alternate_email', 'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received', 'call_split', 'cancel_presentation', 'cell_wifi', 'chat', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts', 'desktop_access_disabled', 'dialer_sip', 'dialpad', 'domain_disabled', 'duo', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'list_alt', 'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'mobile_screen_share', 'no_sim', 'pause_presentation', 'person_add_disabled', 'phone', 'phonelink_erase', 'phonelink_lock', 'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'print_disabled', 'ring_volume', 'rss_feed', 'screen_share', 'sentiment_satisfied_alt', 'speaker_phone', 'stay_current_landscape', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'unsubscribe', 'voicemail', 'vpn_key', 'add', 'add_box', 'add_circle', 'add_circle_outline', 'archive', 'backspace', 'ballot', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'file_copy', 'filter_list', 'flag', 'font_download', 'forward', 'gesture', 'how_to_reg', 'how_to_vote', 'inbox', 'link', 'link_off', 'low_priority', 'mail', 'markunread', 'move_to_inbox', 'next_week', 'outlined_flag', 'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt', 'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'waves', 'weekend', 'where_to_vote', 'access_alarm', 'access_alarms', 'access_time', 'add_alarm', 'add_to_home_screen', 'airplanemode_active', 'airplanemode_inactive', 'battery_20', 'battery_30', 'battery_50', 'battery_60', 'battery_80', 'battery_90', 'battery_alert', 'battery_charging_20', 'battery_charging_30', 'battery_charging_50', 'battery_charging_60', 'battery_charging_80', 'battery_charging_90', 'battery_charging_full', 'battery_full', 'battery_std', 'battery_unknown', 'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage', 'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'location_disabled', 'location_searching', 'mobile_friendly', 'mobile_off', 'network_cell', 'network_wifi', 'nfc', 'screen_lock_landscape', 'screen_lock_portrait', 'screen_lock_rotation', 'screen_rotation', 'sd_storage', 'settings_system_daydream', 'signal_cellular_0_bar', 'signal_cellular_1_bar', 'signal_cellular_2_bar', 'signal_cellular_3_bar', 'signal_cellular_4_bar', 'signal_cellular_alt', 'signal_cellular_connected_no_internet_0_bar', 'signal_cellular_connected_no_internet_1_bar', 'signal_cellular_connected_no_internet_2_bar', 'signal_cellular_connected_no_internet_3_bar', 'signal_cellular_connected_no_internet_4_bar', 'signal_cellular_no_sim', 'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_0_bar', 'signal_wifi_1_bar', 'signal_wifi_1_bar_lock', 'signal_wifi_2_bar', 'signal_wifi_2_bar_lock', 'signal_wifi_3_bar', 'signal_wifi_3_bar_lock', 'signal_wifi_4_bar', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_lock', 'wifi_tethering', 'add_comment', 'attach_file', 'attach_money', 'bar_chart', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right', 'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing', 'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_textdirection_l_to_r', 'format_textdirection_r_to_l', 'format_underlined', 'functions', 'highlight', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_invitation', 'insert_link', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment', 'monetization_on', 'money_off', 'multiline_chart', 'notes', 'pie_chart', 'publish', 'scatter_plot', 'score', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'table_chart', 'text_fields', 'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text', 'attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'folder', 'folder_open', 'folder_shared', 'cast', 'cast_connected', 'cast_for_education', 'computer', 'desktop_mac', 'desktop_windows', 'developer_board', 'device_hub', 'device_unknown', 'devices_other', 'dock', 'gamepad', 'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide', 'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_mac', 'laptop_windows', 'memory', 'mouse', 'phone_android', 'phone_iphone', 'phonelink', 'phonelink_off', 'power_input', 'router', 'scanner', 'security', 'sim_card', 'smartphone', 'speaker', 'speaker_group', 'tablet', 'tablet_android', 'tablet_mac', 'toys', 'tv', 'videogame_asset', 'watch', 'add_a_photo', 'add_photo_alternate', 'add_to_photos', 'adjust', 'assistant', 'assistant_photo', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_off', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'camera_roll', 'center_focus_strong', 'center_focus_weak', 'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point', 'control_point_duplicate', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_landscape', 'crop_original', 'crop_portrait', 'crop_rotate', 'crop_square', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_9_plus', 'filter_b_and_w', 'filter_center_focus', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none', 'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'healing', 'image', 'image_aspect_ratio', 'image_search', 'iso', 'landscape', 'leak_add', 'leak_remove', 'lens', 'linked_camera', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loupe', 'monochrome_photos', 'movie_creation', 'movie_filter', 'music_note', 'music_off', 'nature', 'nature_people', 'navigate_before', 'navigate_next', 'palette', 'panorama', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'photo_library', 'photo_size_select_actual', 'photo_size_select_large', 'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_90_degrees_ccw', 'rotate_left', 'rotate_right', 'shutter_speed', 'slideshow', 'straighten', 'style', 'switch_camera', 'switch_video', 'tag_faces', 'texture', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_auto', 'wb_cloudy', 'wb_incandescent', 'wb_iridescent', 'wb_sunny', '360', 'add_location', 'atm', 'beenhere', 'category', 'compass_calibration', 'departure_board', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run', 'directions_subway', 'directions_transit', 'directions_walk', 'edit_attributes', 'edit_location', 'ev_station', 'fastfood', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_airport', 'local_atm', 'local_bar', 'local_cafe', 'local_car_wash', 'local_convenience_store', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_grocery_store', 'local_hospital', 'local_hotel', 'local_laundry_service', 'local_library', 'local_mall', 'local_movies', 'local_offer', 'local_parking', 'local_pharmacy', 'local_phone', 'local_pizza', 'local_play', 'local_post_office', 'local_printshop', 'local_see', 'local_shipping', 'local_taxi', 'map', 'money', 'my_location', 'navigation', 'near_me', 'not_listed_location', 'person_pin', 'person_pin_circle', 'pin_drop', 'place', 'rate_review', 'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'terrain', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'transit_enterexit', 'trip_origin', 'zoom_out_map', 'apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz', 'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'unfold_less', 'unfold_more', 'adb', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_individual_suite', 'airline_seat_legroom_extra', 'airline_seat_legroom_normal', 'airline_seat_legroom_reduced', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'bluetooth_audio', 'confirmation_number', 'disc_full', 'drive_eta', 'enhanced_encryption', 'event_available', 'event_busy', 'event_note', 'folder_special', 'live_tv', 'mms', 'more', 'network_check', 'network_locked', 'no_encryption', 'ondemand_video', 'personal_video', 'phone_bluetooth_speaker', 'phone_callback', 'phone_forwarded', 'phone_in_talk', 'phone_locked', 'phone_missed', 'phone_paused', 'power', 'power_off', 'priority_high', 'sd_card', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'tap_and_play', 'time_to_leave', 'tv_off', 'vibration', 'voice_chat', 'vpn_lock', 'wc', 'wifi', 'wifi_off', 'ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friendly', 'fitness_center', 'free_breakfast', 'golf_course', 'hot_tub', 'kitchen', 'meeting_room', 'no_meeting_room', 'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoking_rooms', 'spa', 'cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused', 'pages', 'party_mode', 'people', 'people_outline', 'person', 'person_add', 'person_outline', 'plus_one', 'poll', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_dissatisfied', 'sentiment_very_satisfied', 'share', 'thumb_down_alt', 'thumb_up_alt', 'whatshot', 'check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_checked', 'radio_button_unchecked', 'star', 'star_border', 'star_half', 'toggle_off', 'toggle_on'];
    /***/
  }
}]);
//# sourceMappingURL=icons-ic-icons-ic-module-es5.js.map