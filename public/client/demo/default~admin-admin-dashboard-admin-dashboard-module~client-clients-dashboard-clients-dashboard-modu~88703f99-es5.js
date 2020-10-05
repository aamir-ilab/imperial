function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-dashboard-admin-dashboard-module~client-clients-dashboard-clients-dashboard-modu~88703f99"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js ***!
    \******************************************************************************/

  /*! exports provided: MAT_BOTTOM_SHEET_DATA, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef, matBottomSheetAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015BottomSheetJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function () {
      return MAT_BOTTOM_SHEET_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function () {
      return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function () {
      return MatBottomSheet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function () {
      return MatBottomSheetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function () {
      return MatBottomSheetContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function () {
      return MatBottomSheetModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function () {
      return MatBottomSheetRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function () {
      return matBottomSheetAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Injection token that can be used to access the data that was passed in to a bottom sheet. */


    function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {}

    var MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatBottomSheetData');
    /**
     * Configuration used when opening a bottom sheet.
     */

    var MatBottomSheetConfig = function MatBottomSheetConfig() {
      _classCallCheck(this, MatBottomSheetConfig);

      /** Data being injected into the child component. */
      this.data = null;
      /** Whether the bottom sheet has a backdrop. */

      this.hasBackdrop = true;
      /** Whether the user can use escape or clicking outside to close the bottom sheet. */

      this.disableClose = false;
      /** Aria label to assign to the bottom sheet element. */

      this.ariaLabel = null;
      /**
       * Whether the bottom sheet should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // Note that this is disabled by default, because while the a11y recommendations are to focus
      // the first focusable element, doing so prevents screen readers from reading out the
      // rest of the bottom sheet content.

      /** Whether the bottom sheet should focus the first focusable element on open. */

      this.autoFocus = false;
      /**
       * Whether the bottom sheet should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Animations used by the Material bottom sheet. */


    var matBottomSheetAnimations = {
      /** Animation that shows and hides a bottom sheet. */
      bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(100%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].COMPLEX, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].ACCELERATION_CURVE))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].EXITING, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].DECELERATION_CURVE)))])
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar

    /**
     * Internal component that wraps user-provided bottom sheet content.
     * @docs-private
     */

    var MatBottomSheetContainer =
    /** @class */
    function () {
      var MatBottomSheetContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(MatBottomSheetContainer, _angular_cdk_portal__);

        var _super = _createSuper(MatBottomSheetContainer);

        function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document,
        /** The bottom sheet configuration. */
        bottomSheetConfig) {
          var _this;

          _classCallCheck(this, MatBottomSheetContainer);

          _this = _super.call(this);
          _this._elementRef = _elementRef;
          _this._changeDetectorRef = _changeDetectorRef;
          _this._focusTrapFactory = _focusTrapFactory;
          _this.bottomSheetConfig = bottomSheetConfig;
          /** The state of the bottom sheet animations. */

          _this._animationState = 'void';
          /** Emits whenever the state of the animation changes. */

          _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Element that was focused before the bottom sheet was opened. */

          _this._elementFocusedBeforeOpened = null;
          /**
           * Attaches a DOM portal to the bottom sheet container.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this.attachDomPortal = function (portal) {
            _this._validatePortalAttached();

            _this._setPanelClass();

            _this._savePreviouslyFocusedElement();

            return _this._portalOutlet.attachDomPortal(portal);
          };

          _this._document = document;
          _this._breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]).subscribe(function () {
            _this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));

            _this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));

            _this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
          });
          return _this;
        }
        /** Attach a component portal as content to this bottom sheet container. */


        _createClass(MatBottomSheetContainer, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            this._validatePortalAttached();

            this._setPanelClass();

            this._savePreviouslyFocusedElement();

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /** Attach a template portal as content to this bottom sheet container. */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            this._validatePortalAttached();

            this._setPanelClass();

            this._savePreviouslyFocusedElement();

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Begin animation of bottom sheet entrance into view. */

        }, {
          key: "enter",
          value: function enter() {
            if (!this._destroyed) {
              this._animationState = 'visible';

              this._changeDetectorRef.detectChanges();
            }
          }
          /** Begin animation of the bottom sheet exiting from view. */

        }, {
          key: "exit",
          value: function exit() {
            if (!this._destroyed) {
              this._animationState = 'hidden';

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._breakpointSubscription.unsubscribe();

            this._destroyed = true;
          }
        }, {
          key: "_onAnimationDone",
          value: function _onAnimationDone(event) {
            if (event.toState === 'hidden') {
              this._restoreFocus();
            } else if (event.toState === 'visible') {
              this._trapFocus();
            }

            this._animationStateChanged.emit(event);
          }
        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(event) {
            this._animationStateChanged.emit(event);
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(cssClass, add) {
            var classList = this._elementRef.nativeElement.classList;
            add ? classList.add(cssClass) : classList.remove(cssClass);
          }
        }, {
          key: "_validatePortalAttached",
          value: function _validatePortalAttached() {
            if (this._portalOutlet.hasAttached()) {
              throw Error('Attempting to attach bottom sheet content after content is already attached');
            }
          }
        }, {
          key: "_setPanelClass",
          value: function _setPanelClass() {
            var element = this._elementRef.nativeElement;
            var panelClass = this.bottomSheetConfig.panelClass;

            if (Array.isArray(panelClass)) {
              // Note that we can't use a spread here, because IE doesn't support multiple arguments.
              panelClass.forEach(function (cssClass) {
                return element.classList.add(cssClass);
              });
            } else if (panelClass) {
              element.classList.add(panelClass);
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            var element = this._elementRef.nativeElement;

            if (!this._focusTrap) {
              this._focusTrap = this._focusTrapFactory.create(element);
            }

            if (this.bottomSheetConfig.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else {
              var activeElement = this._document.activeElement; // Otherwise ensure that focus is on the container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the bottom sheet already, because it's possible that the
              // consumer turned off `autoFocus` in order to move focus themselves.

              if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
              }
            }
          }
          /** Restores focus to the element that was focused before the bottom sheet was opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var toFocus = this._elementFocusedBeforeOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
              var activeElement = this._document.activeElement;
              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the bottom sheet or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /** Saves a reference to the element that was focused before the bottom sheet was opened. */

        }, {
          key: "_savePreviouslyFocusedElement",
          value: function _savePreviouslyFocusedElement() {
            var _this2 = this;

            this._elementFocusedBeforeOpened = this._document.activeElement; // The `focus` method isn't available during server-side rendering.

            if (this._elementRef.nativeElement.focus) {
              Promise.resolve().then(function () {
                return _this2._elementRef.nativeElement.focus();
              });
            }
          }
        }]);

        return MatBottomSheetContainer;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      MatBottomSheetContainer.ɵfac = function MatBottomSheetContainer_Factory(t) {
        return new (t || MatBottomSheetContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatBottomSheetConfig));
      };

      MatBottomSheetContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatBottomSheetContainer,
        selectors: [["mat-bottom-sheet-container"]],
        viewQuery: function MatBottomSheetContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        hostAttrs: ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "mat-bottom-sheet-container"],
        hostVars: 2,
        hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.bottomSheetConfig == null ? null : ctx.bottomSheetConfig.ariaLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@state", ctx._animationState);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatBottomSheetContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
        encapsulation: 2,
        data: {
          animation: [matBottomSheetAnimations.bottomSheetState]
        },
        changeDetection: 0
      });

      MatBottomSheetContainer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
          }]
        }, {
          type: MatBottomSheetConfig
        }];
      };

      MatBottomSheetContainer.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-bottom-sheet-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            animations: [matBottomSheetAnimations.bottomSheetState],
            host: {
              'class': 'mat-bottom-sheet-container',
              'tabindex': '-1',
              'role': 'dialog',
              'aria-modal': 'true',
              '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
              '[@state]': '_animationState',
              '(@state.start)': '_onAnimationStart($event)',
              '(@state.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }]
          }, {
            type: MatBottomSheetConfig
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
          }]
        });
      })();

      return MatBottomSheetContainer;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatBottomSheetModule =
    /** @class */
    function () {
      var MatBottomSheetModule = function MatBottomSheetModule() {
        _classCallCheck(this, MatBottomSheetModule);
      };

      MatBottomSheetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatBottomSheetModule
      });
      MatBottomSheetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatBottomSheetModule_Factory(t) {
          return new (t || MatBottomSheetModule)();
        },
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatBottomSheetModule, {
          declarations: function declarations() {
            return [MatBottomSheetContainer];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
          },
          exports: function exports() {
            return [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
            exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatBottomSheetContainer],
            entryComponents: [MatBottomSheetContainer]
          }]
        }], null, null);
      })();

      return MatBottomSheetModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Reference to a bottom sheet dispatched from the bottom sheet service.
     */


    var MatBottomSheetRef = /*#__PURE__*/function () {
      function MatBottomSheetRef(containerInstance, _overlayRef, // @breaking-change 8.0.0 `_location` parameter to be removed.
      _location) {
        var _this3 = this;

        _classCallCheck(this, MatBottomSheetRef);

        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the bottom sheet has been dismissed. */

        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Subject for notifying the user that the bottom sheet has opened and appeared. */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose; // Emit when opening animation completes

        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
          return event.phaseName === 'done' && event.toState === 'visible';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
          _this3._afterOpened.next();

          _this3._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
          return event.phaseName === 'done' && event.toState === 'hidden';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
          clearTimeout(_this3._closeFallbackTimeout);

          _overlayRef.dispose();
        });

        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
          _this3._afterDismissed.next(_this3._result);

          _this3._afterDismissed.complete();
        });

        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"];
        }))).subscribe(function (event) {
          if (!_this3.disableClose && (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event))) {
            event.preventDefault();

            _this3.dismiss();
          }
        });
      }
      /**
       * Dismisses the bottom sheet.
       * @param result Data to be passed back to the bottom sheet opener.
       */


      _createClass(MatBottomSheetRef, [{
        key: "dismiss",
        value: function dismiss(result) {
          var _this4 = this;

          if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) {
              return event.phaseName === 'start';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function (event) {
              // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has fired.
              _this4._closeFallbackTimeout = setTimeout(function () {
                _this4._overlayRef.dispose();
              }, event.totalTime + 100);

              _this4._overlayRef.detachBackdrop();
            });

            this._result = result;
            this.containerInstance.exit();
          }
        }
        /** Gets an observable that is notified when the bottom sheet is finished closing. */

      }, {
        key: "afterDismissed",
        value: function afterDismissed() {
          return this._afterDismissed.asObservable();
        }
        /** Gets an observable that is notified when the bottom sheet has opened and appeared. */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
      }]);

      return MatBottomSheetRef;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Injection token that can be used to specify default bottom sheet options. */


    var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-bottom-sheet-default-options');
    /**
     * Service to trigger Material Design bottom sheets.
     */

    var MatBottomSheet =
    /** @class */
    function () {
      var MatBottomSheet = /*#__PURE__*/function () {
        function MatBottomSheet(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
          _classCallCheck(this, MatBottomSheet);

          this._overlay = _overlay;
          this._injector = _injector;
          this._parentBottomSheet = _parentBottomSheet;
          this._location = _location;
          this._defaultOptions = _defaultOptions;
          this._bottomSheetRefAtThisLevel = null;
        }
        /** Reference to the currently opened bottom sheet. */


        _createClass(MatBottomSheet, [{
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this5 = this;

            var _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);

            var overlayRef = this._createOverlay(_config);

            var container = this._attachContainer(overlayRef, _config);

            var ref = new MatBottomSheetRef(container, overlayRef, this._location);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: _config.data,
                bottomSheetRef: ref
              }));
            } else {
              var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
              var contentRef = container.attachComponentPortal(portal);
              ref.instance = contentRef.instance;
            } // When the bottom sheet is dismissed, clear the reference to it.


            ref.afterDismissed().subscribe(function () {
              // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
              if (_this5._openedBottomSheetRef == ref) {
                _this5._openedBottomSheetRef = null;
              }
            });

            if (this._openedBottomSheetRef) {
              // If a bottom sheet is already in view, dismiss it and enter the
              // new bottom sheet after exit animation is complete.
              this._openedBottomSheetRef.afterDismissed().subscribe(function () {
                return ref.containerInstance.enter();
              });

              this._openedBottomSheetRef.dismiss();
            } else {
              // If no bottom sheet is in view, enter the new bottom sheet.
              ref.containerInstance.enter();
            }

            this._openedBottomSheetRef = ref;
            return ref;
          }
          /**
           * Dismisses the currently-visible bottom sheet.
           * @param result Data to pass to the bottom sheet instance.
           */

        }, {
          key: "dismiss",
          value: function dismiss(result) {
            if (this._openedBottomSheetRef) {
              this._openedBottomSheetRef.dismiss(result);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._bottomSheetRefAtThisLevel) {
              this._bottomSheetRefAtThisLevel.dismiss();
            }
          }
          /**
           * Attaches the bottom sheet container component to the overlay.
           */

        }, {
          key: "_attachContainer",
          value: function _attachContainer(overlayRef, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatBottomSheetConfig, config]]));
            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Creates a new overlay and places it in the correct location.
           * @param config The user-specified bottom sheet config.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              direction: config.direction,
              hasBackdrop: config.hasBackdrop,
              disposeOnNavigation: config.closeOnNavigation,
              maxWidth: '100%',
              scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
              positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
            });

            if (config.backdropClass) {
              overlayConfig.backdropClass = config.backdropClass;
            }

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an injector to be used inside of a bottom sheet component.
           * @param config Config that was used to create the bottom sheet.
           * @param bottomSheetRef Reference to the bottom sheet.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, bottomSheetRef) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injectionTokens = new WeakMap([[MatBottomSheetRef, bottomSheetRef], [MAT_BOTTOM_SHEET_DATA, config.data]]);

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
              injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()
              });
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, injectionTokens);
          }
        }, {
          key: "_openedBottomSheetRef",
          get: function get() {
            var parent = this._parentBottomSheet;
            return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
          },
          set: function set(value) {
            if (this._parentBottomSheet) {
              this._parentBottomSheet._openedBottomSheetRef = value;
            } else {
              this._bottomSheetRefAtThisLevel = value;
            }
          }
        }]);

        return MatBottomSheet;
      }();

      MatBottomSheet.ɵfac = function MatBottomSheet_Factory(t) {
        return new (t || MatBottomSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatBottomSheet, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
      };

      MatBottomSheet.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
        factory: function MatBottomSheet_Factory() {
          return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
        },
        token: MatBottomSheet,
        providedIn: MatBottomSheetModule
      });

      MatBottomSheet.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: MatBottomSheet,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatBottomSheetConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: MatBottomSheetModule
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: MatBottomSheet,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatBottomSheetConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();

      return MatBottomSheet;
    }();
    /**
     * Applies default options to the bottom sheet config.
     * @param defaults Object containing the default values to which to fall back.
     * @param config The configuration to which the defaults will be applied.
     * @returns The new configuration object with defaults applied.
     */


    function _applyConfigDefaults(defaults, config) {
      return Object.assign(Object.assign({}, defaults), config);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bottom-sheet.js.map

    /***/

  },

  /***/
  "./node_modules/@iconify/icons-fa-solid/caret-down.js":
  /*!************************************************************!*\
    !*** ./node_modules/@iconify/icons-fa-solid/caret-down.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsFaSolidCaretDownJs(module, exports) {
    var data = {
      "body": "<path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\" fill=\"currentColor\"/>",
      "width": 320,
      "height": 512
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-fa-solid/caret-up.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@iconify/icons-fa-solid/caret-up.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsFaSolidCaretUpJs(module, exports) {
    var data = {
      "body": "<path d=\"M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z\" fill=\"currentColor\"/>",
      "width": 320,
      "height": 512
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/help-outline.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/help-outline.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcHelpOutlineJs(module, exports) {
    var data = {
      "body": "<path d=\"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-group.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-group.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneGroupJs(module, exports) {
    var data = {
      "body": "<circle cx=\"9\" cy=\"8.5\" opacity=\".3\" r=\"1.5\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25z\" fill=\"currentColor\"/><path d=\"M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5S5.5 6.57 5.5 8.5S7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35c.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-share.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-share.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneShareJs(module, exports) {
    var data = {
      "body": "<circle cx=\"18\" cy=\"5\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><circle cx=\"6\" cy=\"12\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"19.02\" opacity=\".3\" r=\"1\" fill=\"currentColor\"/><path d=\"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-star.js":
  /*!********************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-star.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneStarJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z\" fill=\"currentColor\"/><path d=\"M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-trending-down.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-trending-down.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneTrendingDownJs(module, exports) {
    var data = {
      "body": "<path d=\"M16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6h-6z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-trending-up.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-trending-up.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneTrendingUpJs(module, exports) {
    var data = {
      "body": "<path d=\"M16 6l2.29 2.29l-4.88 4.88l-4-4L2 16.59L3.41 18l6-6l4 4l6.3-6.29L22 12V6h-6z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-logos/facebook.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@iconify/icons-logos/facebook.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsLogosFacebookJs(module, exports) {
    var data = {
      "body": "<path d=\"M241.871 256.001c7.802 0 14.129-6.326 14.129-14.129V14.129C256 6.325 249.673 0 241.871 0H14.129C6.324 0 0 6.325 0 14.129v227.743c0 7.803 6.324 14.129 14.129 14.129h227.742\" fill=\"#395185\"/><path d=\"M176.635 256.001v-99.137h33.277l4.982-38.635h-38.259V93.561c0-11.186 3.107-18.809 19.148-18.809l20.459-.009V40.188c-3.54-.471-15.684-1.523-29.812-1.523c-29.498 0-49.692 18.005-49.692 51.071v28.493h-33.362v38.635h33.362v99.137h39.897\" fill=\"#FFF\"/>",
      "width": 256,
      "height": 256
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-logos/google-gmail.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@iconify/icons-logos/google-gmail.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsLogosGoogleGmailJs(module, exports) {
    var data = {
      "body": "<defs><linearGradient x1=\".004%\" y1=\"49.998%\" x2=\"100.032%\" y2=\"49.998%\" id=\"ssvg-id-google-gmaila\"><stop stop-opacity=\".1\" offset=\"0%\"/><stop stop-opacity=\".2\" offset=\"100%\"/></linearGradient></defs><path d=\"M238.834 193.595H16.154C7.52 193.595.25 186.551.25 177.689V16.815C.249 8.18 7.292.909 16.154.909h222.68c8.634 0 15.906 7.044 15.906 15.906v160.874c0 8.862-7.044 15.906-15.906 15.906z\" fill=\"#E3E3E3\"/><path d=\"M32.06 193.595l95.207-76.575l.682-4.09l-98.161-70.666l-.228 147.923l2.5 3.408z\" opacity=\".1\" fill=\"#231F20\"/><path d=\"M16.154 193.595c-8.862 0-15.905-7.044-15.905-15.906V16.587c0-8.861 7.043-10.452 15.905-10.452c8.862 0 15.906 1.818 15.906 10.452v177.008H16.154z\" fill=\"#D54B3D\"/><path d=\"M16.154 8.407c11.361 0 13.634 3.409 13.634 8.18v174.736H16.154c-7.498 0-13.633-6.135-13.633-13.634V16.587c0-4.999 2.272-8.18 13.633-8.18zm0-2.272C7.292 6.135.25 7.953.25 16.587V177.69c0 8.862 7.043 15.906 15.905 15.906H32.06V16.587c0-8.861-7.044-10.452-15.906-10.452z\" fill=\"#D72B27\"/><path d=\"M238.834 193.595h-15.906V16.133c0-8.862 7.044-9.998 15.906-9.998c8.862 0 15.906 1.136 15.906 9.998v161.784c0 8.634-7.044 15.678-15.906 15.678z\" fill=\"#D54B3D\"/><path d=\"M238.834 8.407c10.225 0 13.633 2.045 13.633 7.726v161.784c0 7.498-6.135 13.633-13.633 13.633H225.2V16.133c0-5.908 3.409-7.726 13.634-7.726zm0-2.272c-8.862 0-15.906 1.136-15.906 9.998v177.69h15.906c8.862 0 15.906-7.045 15.906-15.906V16.133c0-8.862-7.044-9.998-15.906-9.998z\" fill=\"#D72B27\"/><path d=\"M170.667 193.595L1.58 23.195l8.894 3.617l117.702 84.755L254.74 18.76v159.157c0 8.634-7.044 15.678-15.906 15.678h-68.167z\" fill=\"url(#ssvg-id-google-gmaila)\"/><path d=\"M127.267 117.02L7.065 29.766C.021 24.54-2.024 14.542 3.202 7.498C8.43.454 18.654-1.136 25.925 4.09l101.57 73.848L229.744 3.18c7.044-5.226 17.042-3.635 22.268 3.636c5.226 7.044 3.636 17.042-3.636 22.268l-121.11 87.935z\" fill=\"#D54B3D\"/><path d=\"M238.834 2.272c4.317 0 8.407 2.045 11.134 5.68c4.317 6.136 2.954 14.543-2.954 19.088l-119.747 87.254L8.429 27.949C2.294 23.404.703 14.769 5.02 8.862c2.5-3.409 6.817-5.68 11.361-5.68c2.954 0 5.908.908 8.18 2.726l101.343 73.62l1.363.91l1.363-.91L230.654 4.772c2.5-1.59 5.226-2.5 8.18-2.5zm0-2.272c-3.181 0-6.59.909-9.316 2.954L127.267 77.71L25.697 3.863C22.972 1.818 19.564.909 16.155.909c-4.999 0-9.998 2.272-13.179 6.59c-4.999 7.043-2.954 17.041 4.09 22.267l120.202 87.482L248.15 29.085c7.044-5.226 8.635-14.997 3.636-22.268C248.605 2.272 243.833 0 238.834 0z\" fill=\"#D72B27\"/>",
      "width": 256,
      "height": 194
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-logos/twitter.js":
  /*!******************************************************!*\
    !*** ./node_modules/@iconify/icons-logos/twitter.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsLogosTwitterJs(module, exports) {
    var data = {
      "body": "<path d=\"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45\" fill=\"#55acee\"/>",
      "width": 256,
      "height": 209
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-logos/whatsapp.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@iconify/icons-logos/whatsapp.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsLogosWhatsappJs(module, exports) {
    var data = {
      "body": "<defs><linearGradient x1=\"49.998%\" y1=\"99.993%\" x2=\"49.998%\" y2=\"-.006%\" id=\"ssvg-id-whatsappb\"><stop stop-color=\"#20B038\" offset=\"0%\"/><stop stop-color=\"#60D66A\" offset=\"100%\"/></linearGradient><filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"ssvg-id-whatsappa\"><feGaussianBlur stdDeviation=\"3\" in=\"SourceGraphic\" result=\"blur\"/></filter></defs><path d=\"M.297 244l17.155-62.594C6.904 163.09 1.282 142.284 1.34 121.014C1.34 54.362 55.588.172 122.24.172c32.34 0 62.71 12.577 85.488 35.412c22.835 22.835 35.412 53.205 35.354 85.488c0 66.651-54.249 120.842-120.9 120.842h-.058c-20.227 0-40.107-5.1-57.784-14.722L.297 244zm67.057-38.716l3.651 2.203c15.417 9.157 33.094 13.967 51.119 14.025h.058c55.35 0 100.44-45.033 100.44-100.44c0-26.835-10.432-52.046-29.384-71.057c-18.952-19.01-44.222-29.442-71.056-29.442c-55.408 0-100.499 45.033-100.499 100.44c0 18.953 5.274 37.441 15.359 53.438l2.376 3.825l-10.142 37.035l38.078-10.027z\" fill-opacity=\".24\" filter=\"url(#ssvg-id-whatsappa)\" transform=\"translate(6 7)\" fill=\"#000\"/><path d=\"M5.781 237.539l16.37-59.7a115.214 115.214 0 0 1-15.397-57.581c0-63.535 51.744-115.221 115.22-115.221c30.852 0 59.758 12.02 81.508 33.77c21.75 21.751 33.714 50.714 33.714 81.508c0 63.534-51.744 115.22-115.221 115.22h-.057c-19.29 0-38.236-4.865-55.064-14.023L5.781 237.54z\" fill=\"url(#ssvg-id-whatsappb)\" transform=\"translate(6 7)\"/><path d=\"M7.603 248.717L24.545 186.9c-10.417-18.087-15.97-38.636-15.912-59.642c0-65.824 53.575-119.342 119.4-119.342c31.938 0 61.93 12.42 84.426 34.972c22.551 22.552 34.972 52.545 34.915 84.427c0 65.824-53.575 119.342-119.4 119.342h-.056a119.45 119.45 0 0 1-57.067-14.539l-63.248 16.6zm66.224-38.235l3.606 2.175c15.226 9.044 32.683 13.795 50.485 13.852h.057c54.662 0 99.194-44.474 99.194-99.194c0-26.501-10.303-51.4-29.02-70.174c-18.717-18.774-43.673-29.077-70.174-29.077c-54.72 0-99.251 44.474-99.251 99.194c0 18.717 5.208 36.976 15.168 52.773l2.347 3.778l-10.017 36.575l37.605-9.902z\" fill=\"#FFF\"/><path d=\"M98.154 77.289c-2.233-4.98-4.58-5.095-6.697-5.152c-1.717-.057-3.72-.057-5.724-.057c-2.003 0-5.209.744-7.956 3.72c-2.748 2.977-10.418 10.189-10.418 24.9c0 14.652 10.704 28.847 12.192 30.85c1.488 2.004 20.663 33.084 50.942 45.047c25.185 9.96 30.337 7.956 35.774 7.441c5.495-.515 17.63-7.212 20.148-14.195c2.461-6.983 2.461-12.936 1.717-14.195c-.744-1.26-2.747-2.003-5.724-3.492c-2.976-1.488-17.629-8.7-20.376-9.73c-2.748-1.03-4.751-1.488-6.697 1.488c-2.004 2.976-7.727 9.673-9.445 11.677c-1.717 2.003-3.491 2.232-6.468.744c-2.976-1.488-12.592-4.637-23.982-14.825c-8.872-7.899-14.882-17.687-16.6-20.663c-1.717-2.976-.171-4.58 1.317-6.067c1.316-1.317 2.976-3.492 4.465-5.209c1.488-1.717 2.003-2.976 2.976-4.98c.973-2.003.515-3.72-.229-5.208c-.744-1.489-6.582-16.199-9.215-22.094z\" fill=\"#FFF\"/>",
      "width": 256,
      "height": 257
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/@vex/animations/scale-in-out.animation.ts":
  /*!*******************************************************!*\
    !*** ./src/@vex/animations/scale-in-out.animation.ts ***!
    \*******************************************************/

  /*! exports provided: scaleInOutAnimation */

  /***/
  function srcVexAnimationsScaleInOutAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInOutAnimation", function () {
      return scaleInOutAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var scaleInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0)',
      opacity: 0
    }))])]);
    /***/
  },

  /***/
  "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ShareBottomSheetComponent */

  /***/
  function srcVexComponentsShareBottomSheetShareBottomSheetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareBottomSheetComponent", function () {
      return ShareBottomSheetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_logos_google_gmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-logos/google-gmail */
    "./node_modules/@iconify/icons-logos/google-gmail.js");
    /* harmony import */


    var _iconify_icons_logos_google_gmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_google_gmail__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_logos_whatsapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-logos/whatsapp */
    "./node_modules/@iconify/icons-logos/whatsapp.js");
    /* harmony import */


    var _iconify_icons_logos_whatsapp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_whatsapp__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_logos_twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-logos/twitter */
    "./node_modules/@iconify/icons-logos/twitter.js");
    /* harmony import */


    var _iconify_icons_logos_twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_twitter__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_logos_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-logos/facebook */
    "./node_modules/@iconify/icons-logos/facebook.js");
    /* harmony import */


    var _iconify_icons_logos_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_logos_facebook__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = function _c0() {
      return [];
    };

    var ShareBottomSheetComponent = /*#__PURE__*/function () {
      function ShareBottomSheetComponent(_bottomSheetRef) {
        _classCallCheck(this, ShareBottomSheetComponent);

        this._bottomSheetRef = _bottomSheetRef;
        this.logoGmail = _iconify_icons_logos_google_gmail__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.logoWhatsApp = _iconify_icons_logos_whatsapp__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.logoTwitter = _iconify_icons_logos_twitter__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.logoFacebook = _iconify_icons_logos_facebook__WEBPACK_IMPORTED_MODULE_4___default.a;
      }

      _createClass(ShareBottomSheetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this._bottomSheetRef.dismiss();
        }
      }]);

      return ShareBottomSheetComponent;
    }();

    ShareBottomSheetComponent.ɵfac = function ShareBottomSheetComponent_Factory(t) {
      return new (t || ShareBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetRef"]));
    };

    ShareBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShareBottomSheetComponent,
      selectors: [["vex-share-bottom-sheet"]],
      decls: 17,
      vars: 12,
      consts: [["mat-list-item", "", 3, "routerLink", "click"], ["mat-list-icon", "", 3, "icIcon"], ["mat-line", ""]],
      template: function ShareBottomSheetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send with Gmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_5_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post on Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_9_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Share on Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareBottomSheetComponent_Template_a_click_13_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Share on WhatsApp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.logoGmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.logoFacebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.logoTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.logoWhatsApp);
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NoYXJlLWJvdHRvbS1zaGVldC9zaGFyZS1ib3R0b20tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareBottomSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-share-bottom-sheet',
          templateUrl: './share-bottom-sheet.component.html',
          styleUrls: ['./share-bottom-sheet.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ShareBottomSheetModule */

  /***/
  function srcVexComponentsShareBottomSheetShareBottomSheetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareBottomSheetModule", function () {
      return ShareBottomSheetModule;
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


    var _share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

    var ShareBottomSheetModule = function ShareBottomSheetModule() {
      _classCallCheck(this, ShareBottomSheetModule);
    };

    ShareBottomSheetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShareBottomSheetModule
    });
    ShareBottomSheetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShareBottomSheetModule_Factory(t) {
        return new (t || ShareBottomSheetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShareBottomSheetModule, {
        declarations: [_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["ShareBottomSheetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
        exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareBottomSheetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["ShareBottomSheetComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"]],
          exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]],
          entryComponents: [_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["ShareBottomSheetComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts ***!
    \************************************************************************************/

  /*! exports provided: WidgetAssistantComponent */

  /***/
  function srcVexComponentsWidgetsWidgetAssistantWidgetAssistantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetAssistantComponent", function () {
      return WidgetAssistantComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-check-circle */
    "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-star */
    "./node_modules/@iconify/icons-ic/twotone-star.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

    var WidgetAssistantComponent = /*#__PURE__*/function () {
      function WidgetAssistantComponent() {
        _classCallCheck(this, WidgetAssistantComponent);

        this.icCheckCircle = _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icStar = _iconify_icons_ic_twotone_star__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(WidgetAssistantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetAssistantComponent;
    }();

    WidgetAssistantComponent.ɵfac = function WidgetAssistantComponent_Factory(t) {
      return new (t || WidgetAssistantComponent)();
    };

    WidgetAssistantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetAssistantComponent,
      selectors: [["vex-widget-assistant"]],
      inputs: {
        valueFlag: "valueFlag",
        numberPending: "numberPending"
      },
      decls: 6,
      vars: 4,
      consts: [["fxLayout", "row", "fxLayout.xs", "column", 1, "card", 2, "height", "100%", 3, "ngClass"], [1, "rounded-full", "w-12", "h-12", "flex", "items-center", "justify-center"], [3, "icIcon"], ["fxFlex", "auto", 1, "p-6", "text-primary-contrast"]],
      template: function WidgetAssistantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.valueFlag != "Worker" ? "bg-primary" : "bg-green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icStar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.numberPending, " Pending ", ctx.valueFlag, " Applications");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3dpZGdldHMvd2lkZ2V0LWFzc2lzdGFudC93aWRnZXQtYXNzaXN0YW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetAssistantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-assistant',
          templateUrl: './widget-assistant.component.html',
          styleUrls: ['./widget-assistant.component.scss']
        }]
      }], function () {
        return [];
      }, {
        valueFlag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        numberPending: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-assistant/widget-assistant.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: WidgetAssistantModule */

  /***/
  function srcVexComponentsWidgetsWidgetAssistantWidgetAssistantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetAssistantModule", function () {
      return WidgetAssistantModule;
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


    var _widget_assistant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-assistant.component */
    "./src/@vex/components/widgets/widget-assistant/widget-assistant.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

    var WidgetAssistantModule = function WidgetAssistantModule() {
      _classCallCheck(this, WidgetAssistantModule);
    };

    WidgetAssistantModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetAssistantModule
    });
    WidgetAssistantModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetAssistantModule_Factory(t) {
        return new (t || WidgetAssistantModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetAssistantModule, {
        declarations: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_2__["WidgetAssistantComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"]],
        exports: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_2__["WidgetAssistantComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetAssistantModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_2__["WidgetAssistantComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"]],
          exports: [_widget_assistant_component__WEBPACK_IMPORTED_MODULE_2__["WidgetAssistantComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: WidgetLargeChartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeChartComponent", function () {
      return WidgetLargeChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_default_chart_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _utils_create_date_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../utils/create-date-array */
    "./src/@vex/utils/create-date-array.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../chart/chart.component */
    "./src/@vex/components/chart/chart.component.ts");

    var WidgetLargeChartComponent = /*#__PURE__*/function () {
      function WidgetLargeChartComponent() {
        _classCallCheck(this, WidgetLargeChartComponent);

        this.options = Object(_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_3__["defaultChartOptions"])({
          grid: {
            show: true,
            strokeDashArray: 3,
            padding: {
              left: 16
            }
          },
          chart: {
            type: 'area',
            height: 384,
            sparkline: {
              enabled: false
            },
            zoom: {
              enabled: false
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 0.9,
              opacityFrom: 0.7,
              opacityTo: 0.5,
              stops: [0, 90, 100]
            }
          },
          colors: ['#008ffb', '#ff9800'],
          labels: Object(_utils_create_date_array__WEBPACK_IMPORTED_MODULE_4__["createDateArray"])(12),
          xaxis: {
            type: 'datetime',
            labels: {
              show: true
            }
          },
          yaxis: {
            labels: {
              show: true
            }
          },
          legend: {
            show: true,
            itemMargin: {
              horizontal: 4,
              vertical: 4
            }
          }
        });
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(WidgetLargeChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetLargeChartComponent;
    }();

    WidgetLargeChartComponent.ɵfac = function WidgetLargeChartComponent_Factory(t) {
      return new (t || WidgetLargeChartComponent)();
    };

    WidgetLargeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetLargeChartComponent,
      selectors: [["vex-widget-large-chart"]],
      inputs: {
        series: "series",
        options: "options"
      },
      decls: 10,
      vars: 4,
      consts: [[1, "card"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "border-b", "py-4", "px-6"], ["fxFlex", "auto", 1, "m-0", "title"], ["mat-icon-button", "", "type", "button"], [1, "text-secondary", 3, "icIcon"], [1, "pt-3", "pb-1", "pr-6"], [3, "options", "series"]],
      template: function WidgetLargeChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User & Session Analytics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "vex-chart", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icCloudDownload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMoreHoriz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("series", ctx.series);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconDirective"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3dpZGdldHMvd2lkZ2V0LWxhcmdlLWNoYXJ0L3dpZGdldC1sYXJnZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetLargeChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-large-chart',
          templateUrl: './widget-large-chart.component.html',
          styleUrls: ['./widget-large-chart.component.scss']
        }]
      }], function () {
        return [];
      }, {
        series: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-chart/widget-large-chart.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: WidgetLargeChartModule */

  /***/
  function srcVexComponentsWidgetsWidgetLargeChartWidgetLargeChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeChartModule", function () {
      return WidgetLargeChartModule;
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


    var _widget_large_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-large-chart.component */
    "./src/@vex/components/widgets/widget-large-chart/widget-large-chart.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");

    var WidgetLargeChartModule = function WidgetLargeChartModule() {
      _classCallCheck(this, WidgetLargeChartModule);
    };

    WidgetLargeChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetLargeChartModule
    });
    WidgetLargeChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetLargeChartModule_Factory(t) {
        return new (t || WidgetLargeChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetLargeChartModule, {
        declarations: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]],
        exports: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetLargeChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]],
          exports: [_widget_large_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: WidgetLargeGoalChartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetLargeGoalChartWidgetLargeGoalChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeGoalChartComponent", function () {
      return WidgetLargeGoalChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-horiz */
    "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-cloud-download */
    "./node_modules/@iconify/icons-ic/twotone-cloud-download.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-up */
    "./node_modules/@iconify/icons-fa-solid/caret-up.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-down */
    "./node_modules/@iconify/icons-fa-solid/caret-down.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _utils_default_chart_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _utils_create_date_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../utils/create-date-array */
    "./src/@vex/utils/create-date-array.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../chart/chart.component */
    "./src/@vex/components/chart/chart.component.ts");

    var WidgetLargeGoalChartComponent = /*#__PURE__*/function () {
      function WidgetLargeGoalChartComponent() {
        _classCallCheck(this, WidgetLargeGoalChartComponent);

        this.options = Object(_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_5__["defaultChartOptions"])({
          grid: {
            show: true,
            strokeDashArray: 3,
            padding: {
              left: 16
            }
          },
          chart: {
            type: 'line',
            height: 300,
            sparkline: {
              enabled: false
            },
            zoom: {
              enabled: false
            }
          },
          stroke: {
            width: 4
          },
          labels: Object(_utils_create_date_array__WEBPACK_IMPORTED_MODULE_6__["createDateArray"])(12),
          xaxis: {
            type: 'datetime',
            labels: {
              show: true
            }
          },
          yaxis: {
            labels: {
              show: true
            }
          }
        });
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icCloudDownload = _iconify_icons_ic_twotone_cloud_download__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.faCaretUp = _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.faCaretDown = _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_4___default.a;
      }

      _createClass(WidgetLargeGoalChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WidgetLargeGoalChartComponent;
    }();

    WidgetLargeGoalChartComponent.ɵfac = function WidgetLargeGoalChartComponent_Factory(t) {
      return new (t || WidgetLargeGoalChartComponent)();
    };

    WidgetLargeGoalChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetLargeGoalChartComponent,
      selectors: [["vex-widget-large-goal-chart"]],
      inputs: {
        total: "total",
        series: "series",
        options: "options"
      },
      decls: 33,
      vars: 7,
      consts: [[1, "card"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "border-b", "py-4", "px-6"], ["fxFlex", "auto", 1, "m-0", "title"], ["mat-icon-button", "", "type", "button"], [1, "text-secondary", 3, "icIcon"], ["fxLayout", "row", "fxLayout.lt-md", "column", 1, "py-6", "px-6"], ["fxFlex", "auto", "fxLayout", "column", 1, "pb-6", "pt-4", "px-6"], [1, "display-2", "font-bold", "m-0"], [1, "title", "font-medium", "mt-2", "mb-0"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "mt-6"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-8", "h-8", "rounded", "text-green", "bg-green-light"], ["height", "20px", "inline", "true", "width", "20px", 3, "icon"], [1, "text-secondary", "m-0"], [1, "font-medium", "text-green"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "mt-4"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-8", "h-8", "rounded", "text-red", "bg-red-light"], [1, "font-medium", "text-red"], ["fxFlex", "auto", "fxLayout", "column", "fxLayoutAlign", "end", 1, "mt-6"], ["color", "primary", "mat-raised-button", "", "type", "button"], ["fxFlex", "50%", "fxFlexOffset", "48px"], [3, "options", "series"]],
      template: function WidgetLargeGoalChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sales Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sales this month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ic-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "11% more sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " in comparison to last month.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ic-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "-2% revenue per sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " in comparison to last month.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " VIEW DETAILS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "vex-chart", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icCloudDownload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMoreHoriz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCaretDown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("series", ctx.series);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexOffsetDirective"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetLargeGoalChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-large-goal-chart',
          templateUrl: './widget-large-goal-chart.component.html'
        }]
      }], function () {
        return [];
      }, {
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        series: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: WidgetLargeGoalChartModule */

  /***/
  function srcVexComponentsWidgetsWidgetLargeGoalChartWidgetLargeGoalChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetLargeGoalChartModule", function () {
      return WidgetLargeGoalChartModule;
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


    var _widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-large-goal-chart.component */
    "./src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");

    var WidgetLargeGoalChartModule = function WidgetLargeGoalChartModule() {
      _classCallCheck(this, WidgetLargeGoalChartModule);
    };

    WidgetLargeGoalChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetLargeGoalChartModule
    });
    WidgetLargeGoalChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetLargeGoalChartModule_Factory(t) {
        return new (t || WidgetLargeGoalChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetLargeGoalChartModule, {
        declarations: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeGoalChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]],
        exports: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeGoalChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetLargeGoalChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeGoalChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_7__["ChartModule"]],
          exports: [_widget_large_goal_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetLargeGoalChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: WidgetQuickLineChartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetQuickLineChartWidgetQuickLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickLineChartComponent", function () {
      return WidgetQuickLineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_default_chart_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/default-chart-options */
    "./src/@vex/utils/default-chart-options.ts");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-share */
    "./node_modules/@iconify/icons-ic/twotone-share.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../animations/scale-in-out.animation */
    "./src/@vex/animations/scale-in-out.animation.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../chart/chart.component */
    "./src/@vex/components/chart/chart.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function WidgetQuickLineChartComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetQuickLineChartComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.openSheet();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icShare);
      }
    }

    var WidgetQuickLineChartComponent = /*#__PURE__*/function () {
      function WidgetQuickLineChartComponent(_bottomSheet) {
        _classCallCheck(this, WidgetQuickLineChartComponent);

        this._bottomSheet = _bottomSheet;
        this.options = Object(_utils_default_chart_options__WEBPACK_IMPORTED_MODULE_1__["defaultChartOptions"])({
          chart: {
            type: 'area',
            height: 100
          }
        });
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(WidgetQuickLineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSheet",
        value: function openSheet() {
          this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["ShareBottomSheetComponent"]);
        }
      }]);

      return WidgetQuickLineChartComponent;
    }();

    WidgetQuickLineChartComponent.ɵfac = function WidgetQuickLineChartComponent_Factory(t) {
      return new (t || WidgetQuickLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]));
    };

    WidgetQuickLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetQuickLineChartComponent,
      selectors: [["vex-widget-quick-line-chart"]],
      inputs: {
        icon: "icon",
        value: "value",
        label: "label",
        iconClass: "iconClass",
        options: "options",
        series: "series"
      },
      decls: 12,
      vars: 7,
      consts: [[1, "card", "relative", "hover:shadow-16", "trans-shadow", 3, "mouseenter", "mouseleave"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "24px", 1, "p-6"], [1, "headline", "font-bold", "m-0"], [1, "caption", "text-secondary", "m-0"], [1, "rounded-full", "w-12", "h-12", "flex", "items-center", "justify-center", 3, "ngClass"], [3, "icIcon"], [3, "options", "series"], ["class", "absolute -top-3 -right-3 bg-card shadow-8", "color", "primary", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "absolute", "-top-3", "-right-3", "bg-card", "shadow-8", 3, "click"], ["height", "24px", "width", "24px", 3, "icIcon"]],
      template: function WidgetQuickLineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WidgetQuickLineChartComponent_Template_div_mouseenter_0_listener() {
            return ctx.showButton = true;
          })("mouseleave", function WidgetQuickLineChartComponent_Template_div_mouseleave_0_listener() {
            return ctx.showButton = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "vex-chart", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WidgetQuickLineChartComponent_button_11_Template, 2, 2, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.iconClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("series", ctx.series);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      encapsulation: 2,
      data: {
        animation: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_4__["scaleInOutAnimation"]]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickLineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-quick-line-chart',
          templateUrl: './widget-quick-line-chart.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_4__["scaleInOutAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iconClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        series: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: WidgetQuickLineChartModule */

  /***/
  function srcVexComponentsWidgetsWidgetQuickLineChartWidgetQuickLineChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickLineChartModule", function () {
      return WidgetQuickLineChartModule;
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


    var _widget_quick_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-quick-line-chart.component */
    "./src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.component.ts");
    /* harmony import */


    var _chart_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../chart/chart.module */
    "./src/@vex/components/chart/chart.module.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.module */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var WidgetQuickLineChartModule = function WidgetQuickLineChartModule() {
      _classCallCheck(this, WidgetQuickLineChartModule);
    };

    WidgetQuickLineChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetQuickLineChartModule
    });
    WidgetQuickLineChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetQuickLineChartModule_Factory(t) {
        return new (t || WidgetQuickLineChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_7__["ShareBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetQuickLineChartModule, {
        declarations: [_widget_quick_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickLineChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_7__["ShareBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]],
        exports: [_widget_quick_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickLineChartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickLineChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_quick_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickLineChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_7__["ShareBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]],
          exports: [_widget_quick_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickLineChartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: WidgetQuickValueCenterComponent */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueCenterWidgetQuickValueCenterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueCenterComponent", function () {
      return WidgetQuickValueCenterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-up */
    "./node_modules/@iconify/icons-fa-solid/caret-up.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/caret-down */
    "./node_modules/@iconify/icons-fa-solid/caret-down.js");
    /* harmony import */


    var _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/help-outline */
    "./node_modules/@iconify/icons-ic/help-outline.js");
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-share */
    "./node_modules/@iconify/icons-ic/twotone-share.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../animations/scale-in-out.animation */
    "./src/@vex/animations/scale-in-out.animation.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function WidgetQuickValueCenterComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 11);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r0.icon);
      }
    }

    function WidgetQuickValueCenterComponent_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 12);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r1.icon);
      }
    }

    function WidgetQuickValueCenterComponent_h2_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.value);
      }
    }

    function WidgetQuickValueCenterComponent_h2_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.value);
      }
    }

    function WidgetQuickValueCenterComponent_h3_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
      }
    }

    function WidgetQuickValueCenterComponent_h3_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.label);
      }
    }

    function WidgetQuickValueCenterComponent_ic_icon_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 17);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faCaretUp)("inline", true);
      }
    }

    function WidgetQuickValueCenterComponent_ic_icon_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 17);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faCaretDown)("inline", true);
      }
    }

    function WidgetQuickValueCenterComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r8.helpText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r8.icHelp);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    };

    var WidgetQuickValueCenterComponent = /*#__PURE__*/function () {
      function WidgetQuickValueCenterComponent(_bottomSheet) {
        _classCallCheck(this, WidgetQuickValueCenterComponent);

        this._bottomSheet = _bottomSheet;
        this.faCaretUp = _iconify_icons_fa_solid_caret_up__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.faCaretDown = _iconify_icons_fa_solid_caret_down__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icHelp = _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_4___default.a;
      }

      _createClass(WidgetQuickValueCenterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSheet",
        value: function openSheet() {
          this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__["ShareBottomSheetComponent"]);
        }
      }]);

      return WidgetQuickValueCenterComponent;
    }();

    WidgetQuickValueCenterComponent.ɵfac = function WidgetQuickValueCenterComponent_Factory(t) {
      return new (t || WidgetQuickValueCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]));
    };

    WidgetQuickValueCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetQuickValueCenterComponent,
      selectors: [["vex-widget-quick-value-center"]],
      inputs: {
        icon: "icon",
        value: "value",
        label: "label",
        change: "change",
        helpText: "helpText",
        iconClass: "iconClass"
      },
      decls: 14,
      vars: 19,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "card", "p-6", "relative", "hover:shadow-16", "trans-shadow", 3, "ngClass", "mouseenter", "mouseleave"], [1, "rounded-full", "w-12", "h-12", "flex", "items-center", "justify-center", 3, "ngClass"], [3, "icIcon", 4, "ngIf"], ["style", "color:white", 3, "icIcon", 4, "ngIf"], ["class", "display-2 font-bold mt-4 mb-2", "style", "color:white", 4, "ngIf"], ["class", "display-2 font-bold mt-4 mb-2", 4, "ngIf"], ["class", "subheading-2 font-medium text-secondary m-0", 4, "ngIf"], ["class", "subheading-2 font-medium text-secondary m-0", "style", "color:white", 4, "ngIf"], [1, "subheading-1", "font-medium", "mt-4", "mb-0", 2, "opacity", "0"], ["height", "20px", "width", "20px", 3, "icon", "inline", 4, "ngIf"], ["class", "absolute top-0 left-0 mt-2 ml-2 text-hint", "mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 3, "matTooltip", 4, "ngIf"], [3, "icIcon"], [2, "color", "white", 3, "icIcon"], [1, "display-2", "font-bold", "mt-4", "mb-2", 2, "color", "white"], [1, "display-2", "font-bold", "mt-4", "mb-2"], [1, "subheading-2", "font-medium", "text-secondary", "m-0"], [1, "subheading-2", "font-medium", "text-secondary", "m-0", 2, "color", "white"], ["height", "20px", "width", "20px", 3, "icon", "inline"], ["mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 1, "absolute", "top-0", "left-0", "mt-2", "ml-2", "text-hint", 3, "matTooltip"], ["height", "18px", "width", "18px", 3, "icIcon"]],
      template: function WidgetQuickValueCenterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WidgetQuickValueCenterComponent_Template_div_mouseenter_0_listener() {
            return ctx.showButton = true;
          })("mouseleave", function WidgetQuickValueCenterComponent_Template_div_mouseleave_0_listener() {
            return ctx.showButton = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetQuickValueCenterComponent_mat_icon_2_Template, 1, 1, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WidgetQuickValueCenterComponent_mat_icon_3_Template, 1, 1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetQuickValueCenterComponent_h2_4_Template, 2, 1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetQuickValueCenterComponent_h2_5_Template, 2, 1, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WidgetQuickValueCenterComponent_h3_6_Template, 2, 1, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WidgetQuickValueCenterComponent_h3_7_Template, 2, 1, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetQuickValueCenterComponent_ic_icon_9_Template, 1, 2, "ic-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetQuickValueCenterComponent_ic_icon_10_Template, 1, 2, "ic-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WidgetQuickValueCenterComponent_button_13_Template, 2, 2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.label == "Pending Client Applications" ? "bg-primary" : "", ctx.label == "Pending Worker Applications" ? "bg-green" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.iconClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label != "Pending Client Applications" && ctx.label != "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label == "Pending Client Applications" || ctx.label == "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label == "Pending Client Applications" || ctx.label == "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label != "Pending Client Applications" && ctx.label != "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label != "Pending Client Applications" && ctx.label != "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label == "Pending Client Applications" || ctx.label == "Pending Worker Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-green", ctx.change > 0)("text-red", ctx.change <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.change > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.change <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.change, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.helpText);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"]],
      encapsulation: 2,
      data: {
        animation: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_6__["scaleInOutAnimation"]]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickValueCenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-quick-value-center',
          templateUrl: './widget-quick-value-center.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_6__["scaleInOutAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        helpText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iconClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: WidgetQuickValueCenterModule */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueCenterWidgetQuickValueCenterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueCenterModule", function () {
      return WidgetQuickValueCenterModule;
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


    var _widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-quick-value-center.component */
    "./src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.module */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts");

    var WidgetQuickValueCenterModule = function WidgetQuickValueCenterModule() {
      _classCallCheck(this, WidgetQuickValueCenterModule);
    };

    WidgetQuickValueCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetQuickValueCenterModule
    });
    WidgetQuickValueCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetQuickValueCenterModule_Factory(t) {
        return new (t || WidgetQuickValueCenterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetQuickValueCenterModule, {
        declarations: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueCenterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]],
        exports: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueCenterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickValueCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueCenterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]],
          exports: [_widget_quick_value_center_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueCenterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: WidgetQuickValueStartComponent */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueStartWidgetQuickValueStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueStartComponent", function () {
      return WidgetQuickValueStartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/help-outline */
    "./node_modules/@iconify/icons-ic/help-outline.js");
    /* harmony import */


    var _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-share */
    "./node_modules/@iconify/icons-ic/twotone-share.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-trending-up */
    "./node_modules/@iconify/icons-ic/twotone-trending-up.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-trending-down */
    "./node_modules/@iconify/icons-ic/twotone-trending-down.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../animations/scale-in-out.animation */
    "./src/@vex/animations/scale-in-out.animation.ts");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.component */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.component.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function WidgetQuickValueStartComponent_ic_icon_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 12);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icTrendingUp)("inline", true);
      }
    }

    function WidgetQuickValueStartComponent_ic_icon_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 12);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.icTrendingDown)("inline", true);
      }
    }

    function WidgetQuickValueStartComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2.helpText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r2.icHelp);
      }
    }

    function WidgetQuickValueStartComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetQuickValueStartComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.openSheet();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx_r3.icShare);
      }
    }

    var WidgetQuickValueStartComponent = /*#__PURE__*/function () {
      function WidgetQuickValueStartComponent(_bottomSheet) {
        _classCallCheck(this, WidgetQuickValueStartComponent);

        this._bottomSheet = _bottomSheet;
        this.icTrendingUp = _iconify_icons_ic_twotone_trending_up__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icTrendingDown = _iconify_icons_ic_twotone_trending_down__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icHelp = _iconify_icons_ic_help_outline__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icShare = _iconify_icons_ic_twotone_share__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(WidgetQuickValueStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSheet",
        value: function openSheet() {
          this._bottomSheet.open(_share_bottom_sheet_share_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__["ShareBottomSheetComponent"]);
        }
      }]);

      return WidgetQuickValueStartComponent;
    }();

    WidgetQuickValueStartComponent.ɵfac = function WidgetQuickValueStartComponent_Factory(t) {
      return new (t || WidgetQuickValueStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]));
    };

    WidgetQuickValueStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WidgetQuickValueStartComponent,
      selectors: [["vex-widget-quick-value-start"]],
      inputs: {
        icon: "icon",
        value: "value",
        label: "label",
        change: "change",
        changeSuffix: "changeSuffix",
        helpText: "helpText"
      },
      decls: 17,
      vars: 13,
      consts: [["fxLayout", "column", 1, "card", "p-6", "relative", "hover:shadow-16", "trans-shadow", 3, "mouseenter", "mouseleave"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "subheading-2", "font-medium", "text-secondary", "m-0"], [1, "rounded-full", "bg-primary-light", "w-12", "h-12", "flex", "items-center", "justify-center"], [1, "text-primary", 3, "icIcon"], [1, "display-2", "font-bold", "mt-4", "mb-2"], [1, "subheading-1", "font-medium", "mt-4", "mb-0"], ["height", "20px", "width", "20px", 3, "icon", "inline", 4, "ngIf"], [1, "ml-1"], [1, "ml-2", "text-secondary", "font-normal"], ["class", "absolute top-0 left-0 mt-2 ml-2 text-hint", "mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 3, "matTooltip", 4, "ngIf"], ["class", "absolute -top-3 -right-3 bg-card shadow-8", "color", "primary", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], ["height", "20px", "width", "20px", 3, "icon", "inline"], ["mat-icon-button", "", "matTooltipPosition", "after", "type", "button", 1, "absolute", "top-0", "left-0", "mt-2", "ml-2", "text-hint", 3, "matTooltip"], ["height", "18px", "width", "18px", 3, "icIcon"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "absolute", "-top-3", "-right-3", "bg-card", "shadow-8", 3, "click"], ["height", "24px", "width", "24px", 3, "icIcon"]],
      template: function WidgetQuickValueStartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WidgetQuickValueStartComponent_Template_div_mouseenter_0_listener() {
            return ctx.showButton = true;
          })("mouseleave", function WidgetQuickValueStartComponent_Template_div_mouseleave_0_listener() {
            return ctx.showButton = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetQuickValueStartComponent_ic_icon_9_Template, 1, 2, "ic-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetQuickValueStartComponent_ic_icon_10_Template, 1, 2, "ic-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WidgetQuickValueStartComponent_button_15_Template, 2, 2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WidgetQuickValueStartComponent_button_16_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-green", ctx.change > 0)("text-red", ctx.change <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.change > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.change <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.change);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.changeSuffix);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.helpText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]],
      encapsulation: 2,
      data: {
        animation: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_5__["scaleInOutAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickValueStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-widget-quick-value-start',
          templateUrl: './widget-quick-value-start.component.html',
          animations: [_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_5__["scaleInOutAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeSuffix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        helpText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: WidgetQuickValueStartModule */

  /***/
  function srcVexComponentsWidgetsWidgetQuickValueStartWidgetQuickValueStartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WidgetQuickValueStartModule", function () {
      return WidgetQuickValueStartModule;
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


    var _widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./widget-quick-value-start.component */
    "./src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../share-bottom-sheet/share-bottom-sheet.module */
    "./src/@vex/components/share-bottom-sheet/share-bottom-sheet.module.ts");

    var WidgetQuickValueStartModule = function WidgetQuickValueStartModule() {
      _classCallCheck(this, WidgetQuickValueStartModule);
    };

    WidgetQuickValueStartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WidgetQuickValueStartModule
    });
    WidgetQuickValueStartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WidgetQuickValueStartModule_Factory(t) {
        return new (t || WidgetQuickValueStartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetQuickValueStartModule, {
        declarations: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueStartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]],
        exports: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueStartComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetQuickValueStartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueStartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _share_bottom_sheet_share_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_8__["ShareBottomSheetModule"]],
          exports: [_widget_quick_value_start_component__WEBPACK_IMPORTED_MODULE_2__["WidgetQuickValueStartComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/@vex/utils/create-date-array.ts":
  /*!*********************************************!*\
    !*** ./src/@vex/utils/create-date-array.ts ***!
    \*********************************************/

  /*! exports provided: createDateArray */

  /***/
  function srcVexUtilsCreateDateArrayTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createDateArray", function () {
      return createDateArray;
    });
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

    function createDateArray(length) {
      var dates = [];

      for (var i = 0; i < length; i++) {
        dates.push(+luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].local().minus({
          day: i
        }).toJSDate());
      }

      return dates.reverse();
    }
    /***/

  },

  /***/
  "./src/@vex/utils/default-chart-options.ts":
  /*!*************************************************!*\
    !*** ./src/@vex/utils/default-chart-options.ts ***!
    \*************************************************/

  /*! exports provided: defaultChartOptions */

  /***/
  function srcVexUtilsDefaultChartOptionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultChartOptions", function () {
      return defaultChartOptions;
    });
    /* harmony import */


    var _merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./merge-deep */
    "./src/@vex/utils/merge-deep.ts");

    var defaultChartOptions = function defaultChartOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(_merge_deep__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"])({
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        chart: {
          parentHeightOffset: 0,
          type: 'area',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        labels: [],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2.5
        },
        fill: {
          gradient: {}
        },
        xaxis: {
          type: 'numeric',
          labels: {
            show: false,
            style: {
              cssClass: 'text-secondary fill-current caption font-medium',
              fontFamily: 'inherit'
            }
          },
          axisBorder: {
            show: true,
            color: '#EEEEEE'
          },
          axisTicks: {
            show: false
          },
          floating: false,
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          labels: {
            show: false,
            style: {
              cssClass: 'text-secondary fill-current caption font-medium',
              fontFamily: 'inherit'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        legend: {
          position: 'top',
          fontFamily: 'inherit',
          horizontalAlign: 'left',
          offsetX: -18,
          itemMargin: {
            horizontal: 0,
            vertical: 12
          },
          markers: {
            radius: 4,
            width: 12,
            height: 12
          },
          labels: {
            colors: ['var(--text-secondary-color)']
          }
        },
        tooltip: {
          x: {
            show: false
          }
        }
      }, options);
    };
    /***/

  }
}]);
//# sourceMappingURL=default~admin-admin-dashboard-admin-dashboard-module~client-clients-dashboard-clients-dashboard-modu~88703f99-es5.js.map