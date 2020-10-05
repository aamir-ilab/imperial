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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icons-fa-icons-fa-module"], {
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
  "./src/app/pages/ui/icons/icons-fa/icons-fa-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-fa/icons-fa-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: IconsFaRoutingModule */

  /***/
  function srcAppPagesUiIconsIconsFaIconsFaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsFaRoutingModule", function () {
      return IconsFaRoutingModule;
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


    var _icons_fa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icons-fa.component */
    "./src/app/pages/ui/icons/icons-fa/icons-fa.component.ts");

    var routes = [{
      path: '',
      component: _icons_fa_component__WEBPACK_IMPORTED_MODULE_2__["IconsFaComponent"]
    }];

    var IconsFaRoutingModule = function IconsFaRoutingModule() {
      _classCallCheck(this, IconsFaRoutingModule);
    };

    IconsFaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsFaRoutingModule
    });
    IconsFaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsFaRoutingModule_Factory(t) {
        return new (t || IconsFaRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsFaRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsFaRoutingModule, [{
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
  "./src/app/pages/ui/icons/icons-fa/icons-fa.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-fa/icons-fa.component.ts ***!
    \***************************************************************/

  /*! exports provided: IconsFaComponent */

  /***/
  function srcAppPagesUiIconsIconsFaIconsFaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsFaComponent", function () {
      return IconsFaComponent;
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


    var _static_data_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../static-data/icons-fa */
    "./src/static-data/icons-fa.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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

    function IconsFaComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var icon_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontIcon", icon_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r4);
      }
    }

    function IconsFaComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsFaComponent_div_1_div_1_Template, 4, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2);
      }
    }

    function IconsFaComponent_div_3_Template(rf, ctx) {
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

    var IconsFaComponent = /*#__PURE__*/function () {
      function IconsFaComponent(route, breakpointObserver, document, renderer) {
        _classCallCheck(this, IconsFaComponent);

        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.document = document;
        this.renderer = renderer;
        this.filteredIcons$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (paramMap) {
          return paramMap.get('search');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])('')), this.breakpointObserver.observe("(min-width: 600px)").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (state) {
          return state.matches;
        }))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              value = _ref2[0],
              isDesktop = _ref2[1];

          var filteredIcons = _static_data_icons_fa__WEBPACK_IMPORTED_MODULE_2__["iconsFA"].filter(function (iconName) {
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

      _createClass(IconsFaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!IconsFaComponent.fontLoaded) {
            this.loadFont();
          }
        }
      }, {
        key: "loadFont",
        value: function loadFont() {
          var _a;

          IconsFaComponent.fontLoaded = true;
          var scriptElem = this.renderer.createElement('script');
          this.renderer.setAttribute(scriptElem, 'crossorigin', 'anonymous');
          this.renderer.setAttribute(scriptElem, 'src', 'https://kit.fontawesome.com/24a46da608.js');
          this.renderer.appendChild((_a = this.document) === null || _a === void 0 ? void 0 : _a.head, scriptElem);
        }
      }]);

      return IconsFaComponent;
    }();

    IconsFaComponent.ɵfac = function IconsFaComponent_Factory(t) {
      return new (t || IconsFaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    IconsFaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconsFaComponent,
      selectors: [["vex-icons-fa"]],
      decls: 6,
      vars: 8,
      consts: [["itemSize", "96", 1, "flex-auto"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "flex items-center justify-center", 4, "ngIf"], ["class", "icon-container", 4, "ngFor", "ngForOf"], [1, "icon-container"], ["fontSet", "fa", 1, "icon", 3, "fontIcon"], [1, "body-2", "text-secondary", "text-center"], [1, "flex", "items-center", "justify-center"], ["src", "assets/img/illustrations/peak_mountain_3.svg", 1, "m-8", "h-64"], [1, "headline", "m-0", "text-center"]],
      template: function IconsFaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconsFaComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconsFaComponent_div_3_Template, 4, 1, "div", 2);

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
      styles: [".icon-container[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  margin-top: 24px;\n  overflow: hidden;\n  padding-left: var(--padding-gutter);\n  padding-right: var(--padding-gutter);\n  width: 50%;\n  text-align: center;\n}\n\n@media (min-width: 600px) {\n  .icon-container[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n\n.icon-container[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdWkvaWNvbnMvaWNvbnMtZmEvaWNvbnMtZmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2ljb25zL2ljb25zLWZhL2ljb25zLWZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy1ndXR0ZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLWd1dHRlcik7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuXG4uaWNvbi1jb250YWluZXIgLmJvZHktMiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDA7XG59Il19 */"],
      data: {
        animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleFadeIn400ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsFaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-icons-fa',
          templateUrl: './icons-fa.component.html',
          styleUrls: ['./icons-fa.component.scss'],
          animations: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__["scaleFadeIn400ms"]]
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
  "./src/app/pages/ui/icons/icons-fa/icons-fa.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/ui/icons/icons-fa/icons-fa.module.ts ***!
    \************************************************************/

  /*! exports provided: IconsFaModule */

  /***/
  function srcAppPagesUiIconsIconsFaIconsFaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsFaModule", function () {
      return IconsFaModule;
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


    var _icons_fa_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icons-fa-routing.module */
    "./src/app/pages/ui/icons/icons-fa/icons-fa-routing.module.ts");
    /* harmony import */


    var _icons_fa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./icons-fa.component */
    "./src/app/pages/ui/icons/icons-fa/icons-fa.component.ts");
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

    var IconsFaModule = function IconsFaModule() {
      _classCallCheck(this, IconsFaModule);
    };

    IconsFaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsFaModule
    });
    IconsFaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsFaModule_Factory(t) {
        return new (t || IconsFaModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_fa_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsFaRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsFaModule, {
        declarations: [_icons_fa_component__WEBPACK_IMPORTED_MODULE_3__["IconsFaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_fa_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsFaRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsFaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_icons_fa_component__WEBPACK_IMPORTED_MODULE_3__["IconsFaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _icons_fa_routing_module__WEBPACK_IMPORTED_MODULE_2__["IconsFaRoutingModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/static-data/icons-fa.ts":
  /*!*************************************!*\
    !*** ./src/static-data/icons-fa.ts ***!
    \*************************************/

  /*! exports provided: iconsFA */

  /***/
  function srcStaticDataIconsFaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iconsFA", function () {
      return iconsFA;
    });

    var iconsFA = ['fa-ad', 'fa-address-book', 'fa-address-card', 'fa-adjust', 'fa-air-freshener', 'fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-allergies', 'fa-ambulance', 'fa-american-sign-language-interpreting', 'fa-anchor', 'fa-angle-double-down', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-angry', 'fa-ankh', 'fa-apple-alt', 'fa-archive', 'fa-archway', 'fa-arrow-alt-circle-down', 'fa-arrow-alt-circle-left', 'fa-arrow-alt-circle-right', 'fa-arrow-alt-circle-up', 'fa-arrow-circle-down', 'fa-arrow-circle-left', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-down', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrows-alt', 'fa-arrows-alt-h', 'fa-arrows-alt-v', 'fa-assistive-listening-systems', 'fa-asterisk', 'fa-at', 'fa-atlas', 'fa-atom', 'fa-audio-description', 'fa-award', 'fa-baby', 'fa-baby-carriage', 'fa-backspace', 'fa-backward', 'fa-bacon', 'fa-balance-scale', 'fa-balance-scale-left', 'fa-balance-scale-right', 'fa-ban', 'fa-band-aid', 'fa-barcode', 'fa-bars', 'fa-baseball-ball', 'fa-basketball-ball', 'fa-bath', 'fa-battery-empty', 'fa-battery-full', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-three-quarters', 'fa-bed', 'fa-beer', 'fa-bell', 'fa-bell-slash', 'fa-bezier-curve', 'fa-bible', 'fa-bicycle', 'fa-biking', 'fa-binoculars', 'fa-biohazard', 'fa-birthday-cake', 'fa-blender', 'fa-blender-phone', 'fa-blind', 'fa-blog', 'fa-bold', 'fa-bolt', 'fa-bomb', 'fa-bone', 'fa-bong', 'fa-book', 'fa-book-dead', 'fa-book-medical', 'fa-book-open', 'fa-book-reader', 'fa-bookmark', 'fa-border-all', 'fa-border-none', 'fa-border-style', 'fa-bowling-ball', 'fa-box', 'fa-box-open', 'fa-boxes', 'fa-braille', 'fa-brain', 'fa-bread-slice', 'fa-briefcase', 'fa-briefcase-medical', 'fa-broadcast-tower', 'fa-broom', 'fa-brush', 'fa-bug', 'fa-building', 'fa-bullhorn', 'fa-bullseye', 'fa-burn', 'fa-bus', 'fa-bus-alt', 'fa-business-time', 'fa-calculator', 'fa-calendar', 'fa-calendar-alt', 'fa-calendar-check', 'fa-calendar-day', 'fa-calendar-minus', 'fa-calendar-plus', 'fa-calendar-times', 'fa-calendar-week', 'fa-camera', 'fa-camera-retro', 'fa-campground', 'fa-candy-cane', 'fa-cannabis', 'fa-capsules', 'fa-car', 'fa-car-alt', 'fa-car-battery', 'fa-car-crash', 'fa-car-side', 'fa-caret-down', 'fa-caret-left', 'fa-caret-right', 'fa-caret-square-down', 'fa-caret-square-left', 'fa-caret-square-right', 'fa-caret-square-up', 'fa-caret-up', 'fa-carrot', 'fa-cart-arrow-down', 'fa-cart-plus', 'fa-cash-register', 'fa-cat', 'fa-certificate', 'fa-chair', 'fa-chalkboard', 'fa-chalkboard-teacher', 'fa-charging-station', 'fa-chart-area', 'fa-chart-bar', 'fa-chart-line', 'fa-chart-pie', 'fa-check', 'fa-check-circle', 'fa-check-double', 'fa-check-square', 'fa-cheese', 'fa-chess', 'fa-chess-bishop', 'fa-chess-board', 'fa-chess-king', 'fa-chess-knight', 'fa-chess-pawn', 'fa-chess-queen', 'fa-chess-rook', 'fa-chevron-circle-down', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-down', 'fa-chevron-left', 'fa-chevron-right', 'fa-chevron-up', 'fa-child', 'fa-church', 'fa-circle', 'fa-circle-notch', 'fa-city', 'fa-clinic-medical', 'fa-clipboard', 'fa-clipboard-check', 'fa-clipboard-list', 'fa-clock', 'fa-clone', 'fa-closed-captioning', 'fa-cloud', 'fa-cloud-download-alt', 'fa-cloud-meatball', 'fa-cloud-moon', 'fa-cloud-moon-rain', 'fa-cloud-rain', 'fa-cloud-showers-heavy', 'fa-cloud-sun', 'fa-cloud-sun-rain', 'fa-cloud-upload-alt', 'fa-cocktail', 'fa-code', 'fa-code-branch', 'fa-coffee', 'fa-cog', 'fa-cogs', 'fa-coins', 'fa-columns', 'fa-comment', 'fa-comment-alt', 'fa-comment-dollar', 'fa-comment-dots', 'fa-comment-medical', 'fa-comment-slash', 'fa-comments', 'fa-comments-dollar', 'fa-compact-disc', 'fa-compass', 'fa-compress', 'fa-compress-arrows-alt', 'fa-concierge-bell', 'fa-cookie', 'fa-cookie-bite', 'fa-copy', 'fa-copyright', 'fa-couch', 'fa-credit-card', 'fa-crop', 'fa-crop-alt', 'fa-cross', 'fa-crosshairs', 'fa-crow', 'fa-crown', 'fa-crutch', 'fa-cube', 'fa-cubes', 'fa-cut', 'fa-database', 'fa-deaf', 'fa-democrat', 'fa-desktop', 'fa-dharmachakra', 'fa-diagnoses', 'fa-dice', 'fa-dice-d--20', 'fa-dice-d--6', 'fa-dice-five', 'fa-dice-four', 'fa-dice-one', 'fa-dice-six', 'fa-dice-three', 'fa-dice-two', 'fa-digital-tachograph', 'fa-directions', 'fa-divide', 'fa-dizzy', 'fa-dna', 'fa-dog', 'fa-dollar-sign', 'fa-dolly', 'fa-dolly-flatbed', 'fa-donate', 'fa-door-closed', 'fa-door-open', 'fa-dot-circle', 'fa-dove', 'fa-download', 'fa-drafting-compass', 'fa-dragon', 'fa-draw-polygon', 'fa-drum', 'fa-drum-steelpan', 'fa-drumstick-bite', 'fa-dumbbell', 'fa-dumpster', 'fa-dumpster-fire', 'fa-dungeon', 'fa-edit', 'fa-egg', 'fa-eject', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-envelope', 'fa-envelope-open', 'fa-envelope-open-text', 'fa-envelope-square', 'fa-equals', 'fa-eraser', 'fa-ethernet', 'fa-euro-sign', 'fa-exchange-alt', 'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-expand', 'fa-expand-arrows-alt', 'fa-external-link-alt', 'fa-external-link-square-alt', 'fa-eye', 'fa-eye-dropper', 'fa-eye-slash', 'fa-fan', 'fa-fast-backward', 'fa-fast-forward', 'fa-fax', 'fa-feather', 'fa-feather-alt', 'fa-female', 'fa-fighter-jet', 'fa-file', 'fa-file-alt', 'fa-file-archive', 'fa-file-audio', 'fa-file-code', 'fa-file-contract', 'fa-file-csv', 'fa-file-download', 'fa-file-excel', 'fa-file-export', 'fa-file-image', 'fa-file-import', 'fa-file-invoice', 'fa-file-invoice-dollar', 'fa-file-medical', 'fa-file-medical-alt', 'fa-file-pdf', 'fa-file-powerpoint', 'fa-file-prescription', 'fa-file-signature', 'fa-file-upload', 'fa-file-video', 'fa-file-word', 'fa-fill', 'fa-fill-drip', 'fa-film', 'fa-filter', 'fa-fingerprint', 'fa-fire', 'fa-fire-alt', 'fa-fire-extinguisher', 'fa-first-aid', 'fa-fish', 'fa-fist-raised', 'fa-flag', 'fa-flag-checkered', 'fa-flag-usa', 'fa-flask', 'fa-flushed', 'fa-folder', 'fa-folder-minus', 'fa-folder-open', 'fa-folder-plus', 'fa-font', 'fa-football-ball', 'fa-forward', 'fa-frog', 'fa-frown', 'fa-frown-open', 'fa-funnel-dollar', 'fa-futbol', 'fa-gamepad', 'fa-gas-pump', 'fa-gavel', 'fa-gem', 'fa-genderless', 'fa-ghost', 'fa-gift', 'fa-gifts', 'fa-glass-cheers', 'fa-glass-martini', 'fa-glass-martini-alt', 'fa-glass-whiskey', 'fa-glasses', 'fa-globe', 'fa-globe-africa', 'fa-globe-americas', 'fa-globe-asia', 'fa-globe-europe', 'fa-golf-ball', 'fa-gopuram', 'fa-graduation-cap', 'fa-greater-than', 'fa-greater-than-equal', 'fa-grimace', 'fa-grin', 'fa-grin-alt', 'fa-grin-beam', 'fa-grin-beam-sweat', 'fa-grin-hearts', 'fa-grin-squint', 'fa-grin-squint-tears', 'fa-grin-stars', 'fa-grin-tears', 'fa-grin-tongue', 'fa-grin-tongue-squint', 'fa-grin-tongue-wink', 'fa-grin-wink', 'fa-grip-horizontal', 'fa-grip-lines', 'fa-grip-lines-vertical', 'fa-grip-vertical', 'fa-guitar', 'fa-h-square', 'fa-hamburger', 'fa-hammer', 'fa-hamsa', 'fa-hand-holding', 'fa-hand-holding-heart', 'fa-hand-holding-usd', 'fa-hand-lizard', 'fa-hand-middle-finger', 'fa-hand-paper', 'fa-hand-peace', 'fa-hand-point-down', 'fa-hand-point-left', 'fa-hand-point-right', 'fa-hand-point-up', 'fa-hand-pointer', 'fa-hand-rock', 'fa-hand-scissors', 'fa-hand-spock', 'fa-hands', 'fa-hands-helping', 'fa-handshake', 'fa-hanukiah', 'fa-hard-hat', 'fa-hashtag', 'fa-hat-wizard', 'fa-haykal', 'fa-hdd', 'fa-heading', 'fa-headphones', 'fa-headphones-alt', 'fa-headset', 'fa-heart', 'fa-heart-broken', 'fa-heartbeat', 'fa-helicopter', 'fa-highlighter', 'fa-hiking', 'fa-hippo', 'fa-history', 'fa-hockey-puck', 'fa-holly-berry', 'fa-home', 'fa-horse', 'fa-horse-head', 'fa-hospital', 'fa-hospital-alt', 'fa-hospital-symbol', 'fa-hot-tub', 'fa-hotdog', 'fa-hotel', 'fa-hourglass', 'fa-hourglass-end', 'fa-hourglass-half', 'fa-hourglass-start', 'fa-house-damage', 'fa-hryvnia', 'fa-i-cursor', 'fa-ice-cream', 'fa-icicles', 'fa-icons', 'fa-id-badge', 'fa-id-card', 'fa-id-card-alt', 'fa-igloo', 'fa-image', 'fa-images', 'fa-inbox', 'fa-indent', 'fa-industry', 'fa-infinity', 'fa-info', 'fa-info-circle', 'fa-italic', 'fa-jedi', 'fa-joint', 'fa-journal-whills', 'fa-kaaba', 'fa-key', 'fa-keyboard', 'fa-khanda', 'fa-kiss', 'fa-kiss-beam', 'fa-kiss-wink-heart', 'fa-kiwi-bird', 'fa-landmark', 'fa-language', 'fa-laptop', 'fa-laptop-code', 'fa-laptop-medical', 'fa-laugh', 'fa-laugh-beam', 'fa-laugh-squint', 'fa-laugh-wink', 'fa-layer-group', 'fa-leaf', 'fa-lemon', 'fa-less-than', 'fa-less-than-equal', 'fa-level-down-alt', 'fa-level-up-alt', 'fa-life-ring', 'fa-lightbulb', 'fa-link', 'fa-lira-sign', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-location-arrow', 'fa-lock', 'fa-lock-open', 'fa-long-arrow-alt-down', 'fa-long-arrow-alt-left', 'fa-long-arrow-alt-right', 'fa-long-arrow-alt-up', 'fa-low-vision', 'fa-luggage-cart', 'fa-magic', 'fa-magnet', 'fa-mail-bulk', 'fa-male', 'fa-map', 'fa-map-marked', 'fa-map-marked-alt', 'fa-map-marker', 'fa-map-marker-alt', 'fa-map-pin', 'fa-map-signs', 'fa-marker', 'fa-mars', 'fa-mars-double', 'fa-mars-stroke', 'fa-mars-stroke-h', 'fa-mars-stroke-v', 'fa-mask', 'fa-medal', 'fa-medkit', 'fa-meh', 'fa-meh-blank', 'fa-meh-rolling-eyes', 'fa-memory', 'fa-menorah', 'fa-mercury', 'fa-meteor', 'fa-microchip', 'fa-microphone', 'fa-microphone-alt', 'fa-microphone-alt-slash', 'fa-microphone-slash', 'fa-microscope', 'fa-minus', 'fa-minus-circle', 'fa-minus-square', 'fa-mitten', 'fa-mobile', 'fa-mobile-alt', 'fa-money-bill', 'fa-money-bill-alt', 'fa-money-bill-wave', 'fa-money-bill-wave-alt', 'fa-money-check', 'fa-money-check-alt', 'fa-monument', 'fa-moon', 'fa-mortar-pestle', 'fa-mosque', 'fa-motorcycle', 'fa-mountain', 'fa-mouse-pointer', 'fa-mug-hot', 'fa-music', 'fa-network-wired', 'fa-neuter', 'fa-newspaper', 'fa-not-equal', 'fa-notes-medical', 'fa-object-group', 'fa-object-ungroup', 'fa-oil-can', 'fa-om', 'fa-otter', 'fa-outdent', 'fa-pager', 'fa-paint-brush', 'fa-paint-roller', 'fa-palette', 'fa-pallet', 'fa-paper-plane', 'fa-paperclip', 'fa-parachute-box', 'fa-paragraph', 'fa-parking', 'fa-passport', 'fa-pastafarianism', 'fa-paste', 'fa-pause', 'fa-pause-circle', 'fa-paw', 'fa-peace', 'fa-pen', 'fa-pen-alt', 'fa-pen-fancy', 'fa-pen-nib', 'fa-pen-square', 'fa-pencil-alt', 'fa-pencil-ruler', 'fa-people-carry', 'fa-pepper-hot', 'fa-percent', 'fa-percentage', 'fa-person-booth', 'fa-phone', 'fa-phone-alt', 'fa-phone-slash', 'fa-phone-square', 'fa-phone-square-alt', 'fa-phone-volume', 'fa-photo-video', 'fa-piggy-bank', 'fa-pills', 'fa-pizza-slice', 'fa-place-of-worship', 'fa-plane', 'fa-plane-arrival', 'fa-plane-departure', 'fa-play', 'fa-play-circle', 'fa-plug', 'fa-plus', 'fa-plus-circle', 'fa-plus-square', 'fa-podcast', 'fa-poll', 'fa-poll-h', 'fa-poo', 'fa-poo-storm', 'fa-poop', 'fa-portrait', 'fa-pound-sign', 'fa-power-off', 'fa-pray', 'fa-praying-hands', 'fa-prescription', 'fa-prescription-bottle', 'fa-prescription-bottle-alt', 'fa-print', 'fa-procedures', 'fa-project-diagram', 'fa-puzzle-piece', 'fa-qrcode', 'fa-question', 'fa-question-circle', 'fa-quidditch', 'fa-quote-left', 'fa-quote-right', 'fa-quran', 'fa-radiation', 'fa-radiation-alt', 'fa-rainbow', 'fa-random', 'fa-receipt', 'fa-recycle', 'fa-redo', 'fa-redo-alt', 'fa-registered', 'fa-remove-format', 'fa-reply', 'fa-reply-all', 'fa-republican', 'fa-restroom', 'fa-retweet', 'fa-ribbon', 'fa-ring', 'fa-road', 'fa-robot', 'fa-rocket', 'fa-route', 'fa-rss', 'fa-rss-square', 'fa-ruble-sign', 'fa-ruler', 'fa-ruler-combined', 'fa-ruler-horizontal', 'fa-ruler-vertical', 'fa-running', 'fa-rupee-sign', 'fa-sad-cry', 'fa-sad-tear', 'fa-satellite', 'fa-satellite-dish', 'fa-save', 'fa-school', 'fa-screwdriver', 'fa-scroll', 'fa-sd-card', 'fa-search', 'fa-search-dollar', 'fa-search-location', 'fa-search-minus', 'fa-search-plus', 'fa-seedling', 'fa-server', 'fa-shapes', 'fa-share', 'fa-share-alt', 'fa-share-alt-square', 'fa-share-square', 'fa-shekel-sign', 'fa-shield-alt', 'fa-ship', 'fa-shipping-fast', 'fa-shoe-prints', 'fa-shopping-bag', 'fa-shopping-basket', 'fa-shopping-cart', 'fa-shower', 'fa-shuttle-van', 'fa-sign', 'fa-sign-in-alt', 'fa-sign-language', 'fa-sign-out-alt', 'fa-signal', 'fa-signature', 'fa-sim-card', 'fa-sitemap', 'fa-skating', 'fa-skiing', 'fa-skiing-nordic', 'fa-skull', 'fa-skull-crossbones', 'fa-slash', 'fa-sleigh', 'fa-sliders-h', 'fa-smile', 'fa-smile-beam', 'fa-smile-wink', 'fa-smog', 'fa-smoking', 'fa-smoking-ban', 'fa-sms', 'fa-snowboarding', 'fa-snowflake', 'fa-snowman', 'fa-snowplow', 'fa-socks', 'fa-solar-panel', 'fa-sort', 'fa-sort-alpha-down', 'fa-sort-alpha-down-alt', 'fa-sort-alpha-up', 'fa-sort-alpha-up-alt', 'fa-sort-amount-down', 'fa-sort-amount-down-alt', 'fa-sort-amount-up', 'fa-sort-amount-up-alt', 'fa-sort-down', 'fa-sort-numeric-down', 'fa-sort-numeric-down-alt', 'fa-sort-numeric-up', 'fa-sort-numeric-up-alt', 'fa-sort-up', 'fa-spa', 'fa-space-shuttle', 'fa-spell-check', 'fa-spider', 'fa-spinner', 'fa-splotch', 'fa-spray-can', 'fa-square', 'fa-square-full', 'fa-square-root-alt', 'fa-stamp', 'fa-star', 'fa-star-and-crescent', 'fa-star-half', 'fa-star-half-alt', 'fa-star-of-david', 'fa-star-of-life', 'fa-step-backward', 'fa-step-forward', 'fa-stethoscope', 'fa-sticky-note', 'fa-stop', 'fa-stop-circle', 'fa-stopwatch', 'fa-store', 'fa-store-alt', 'fa-stream', 'fa-street-view', 'fa-strikethrough', 'fa-stroopwafel', 'fa-subscript', 'fa-subway', 'fa-suitcase', 'fa-suitcase-rolling', 'fa-sun', 'fa-superscript', 'fa-surprise', 'fa-swatchbook', 'fa-swimmer', 'fa-swimming-pool', 'fa-synagogue', 'fa-sync', 'fa-sync-alt', 'fa-syringe', 'fa-table', 'fa-table-tennis', 'fa-tablet', 'fa-tablet-alt', 'fa-tablets', 'fa-tachometer-alt', 'fa-tag', 'fa-tags', 'fa-tape', 'fa-tasks', 'fa-taxi', 'fa-teeth', 'fa-teeth-open', 'fa-temperature-high', 'fa-temperature-low', 'fa-tenge', 'fa-terminal', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-theater-masks', 'fa-thermometer', 'fa-thermometer-empty', 'fa-thermometer-full', 'fa-thermometer-half', 'fa-thermometer-quarter', 'fa-thermometer-three-quarters', 'fa-thumbs-down', 'fa-thumbs-up', 'fa-thumbtack', 'fa-ticket-alt', 'fa-times', 'fa-times-circle', 'fa-tint', 'fa-tint-slash', 'fa-tired', 'fa-toggle-off', 'fa-toggle-on', 'fa-toilet', 'fa-toilet-paper', 'fa-toolbox', 'fa-tools', 'fa-tooth', 'fa-torah', 'fa-torii-gate', 'fa-tractor', 'fa-trademark', 'fa-traffic-light', 'fa-train', 'fa-tram', 'fa-transgender', 'fa-transgender-alt', 'fa-trash', 'fa-trash-alt', 'fa-trash-restore', 'fa-trash-restore-alt', 'fa-tree', 'fa-trophy', 'fa-truck', 'fa-truck-loading', 'fa-truck-monster', 'fa-truck-moving', 'fa-truck-pickup', 'fa-tshirt', 'fa-tty', 'fa-tv', 'fa-umbrella', 'fa-umbrella-beach', 'fa-underline', 'fa-undo', 'fa-undo-alt', 'fa-universal-access', 'fa-university', 'fa-unlink', 'fa-unlock', 'fa-unlock-alt', 'fa-upload', 'fa-user', 'fa-user-alt', 'fa-user-alt-slash', 'fa-user-astronaut', 'fa-user-check', 'fa-user-circle', 'fa-user-clock', 'fa-user-cog', 'fa-user-edit', 'fa-user-friends', 'fa-user-graduate', 'fa-user-injured', 'fa-user-lock', 'fa-user-md', 'fa-user-minus', 'fa-user-ninja', 'fa-user-nurse', 'fa-user-plus', 'fa-user-secret', 'fa-user-shield', 'fa-user-slash', 'fa-user-tag', 'fa-user-tie', 'fa-user-times', 'fa-users', 'fa-users-cog', 'fa-utensil-spoon', 'fa-utensils', 'fa-vector-square', 'fa-venus', 'fa-venus-double', 'fa-venus-mars', 'fa-vial', 'fa-vials', 'fa-video', 'fa-video-slash', 'fa-vihara', 'fa-voicemail', 'fa-volleyball-ball', 'fa-volume-down', 'fa-volume-mute', 'fa-volume-off', 'fa-volume-up', 'fa-vote-yea', 'fa-vr-cardboard', 'fa-walking', 'fa-wallet', 'fa-warehouse', 'fa-water', 'fa-wave-square', 'fa-weight', 'fa-weight-hanging', 'fa-wheelchair', 'fa-wifi', 'fa-wind', 'fa-window-close', 'fa-window-maximize', 'fa-window-minimize', 'fa-window-restore', 'fa-wine-bottle', 'fa-wine-glass', 'fa-wine-glass-alt', 'fa-won-sign', 'fa-wrench', 'fa-x-ray', 'fa-yen-sign', 'fa-yin-yang'];
    /***/
  }
}]);
//# sourceMappingURL=icons-fa-icons-fa-module-es5.js.map