function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-forms-form-wizard-form-wizard-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
    \********************************************************************/

  /*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
      return CdkStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
      return CdkStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
      return CdkStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
      return CdkStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
      return CdkStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
      return CdkStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
      return CdkStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
      return MAT_STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
      return STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
      return STEP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
      return StepperSelectionEvent;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function CdkStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????projection"](0);
      }
    }

    var _c0 = ["*"];

    var CdkStepHeader =
    /** @class */
    function () {
      var CdkStepHeader = /*#__PURE__*/function () {
        function CdkStepHeader(_elementRef) {
          _classCallCheck(this, CdkStepHeader);

          this._elementRef = _elementRef;
        }
        /** Focuses the step header. */


        _createClass(CdkStepHeader, [{
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
        }]);

        return CdkStepHeader;
      }();

      CdkStepHeader.??fac = function CdkStepHeader_Factory(t) {
        return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
      };

      CdkStepHeader.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
        type: CdkStepHeader,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"]
      });

      CdkStepHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepHeader]',
            host: {
              'role': 'tab'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
          }];
        }, null);
      })();

      return CdkStepHeader;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var CdkStepLabel =
    /** @class */
    function () {
      var CdkStepLabel = function CdkStepLabel(
      /** @docs-private */
      template) {
        _classCallCheck(this, CdkStepLabel);

        this.template = template;
      };

      CdkStepLabel.??fac = function CdkStepLabel_Factory(t) {
        return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
      };

      CdkStepLabel.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
        type: CdkStepLabel,
        selectors: [["", "cdkStepLabel", ""]]
      });

      CdkStepLabel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
          }];
        }, null);
      })();

      return CdkStepLabel;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Used to generate unique ID for each stepper component. */


    var nextId = 0;
    /** Change event emitted on selection changes. */

    var StepperSelectionEvent = function StepperSelectionEvent() {
      _classCallCheck(this, StepperSelectionEvent);
    };
    /** Enum to represent the different states of the steps. */


    var STEP_STATE = {
      NUMBER: 'number',
      EDIT: 'edit',
      DONE: 'done',
      ERROR: 'error'
    };
    /** InjectionToken that can be used to specify the global stepper options. */

    var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * @breaking-change 8.0.0.
     */

    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

    var CdkStep =
    /** @class */
    function () {
      var CdkStep = /*#__PURE__*/function () {
        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function CdkStep(_stepper, stepperOptions) {
          _classCallCheck(this, CdkStep);

          this._stepper = _stepper;
          /** Whether user has seen the expanded step content or not. */

          this.interacted = false;
          this._editable = true;
          this._optional = false;
          this._completedOverride = null;
          this._customError = null;
          this._stepperOptions = stepperOptions ? stepperOptions : {};
          this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
          this._showError = !!this._stepperOptions.showError;
        }
        /** Whether the user can return to this step once it has been marked as completed. */


        _createClass(CdkStep, [{
          key: "_getDefaultCompleted",
          value: function _getDefaultCompleted() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
          }
          /** Whether step has an error. */

        }, {
          key: "_getDefaultError",
          value: function _getDefaultError() {
            return this.stepControl && this.stepControl.invalid && this.interacted;
          }
          /** Selects this step component. */

        }, {
          key: "select",
          value: function select() {
            this._stepper.selected = this;
          }
          /** Resets the step to its initial state. Note that this includes resetting form data. */

        }, {
          key: "reset",
          value: function reset() {
            this.interacted = false;

            if (this._completedOverride != null) {
              this._completedOverride = false;
            }

            if (this._customError != null) {
              this._customError = false;
            }

            if (this.stepControl) {
              this.stepControl.reset();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            // Since basically all inputs of the MatStep get proxied through the view down to the
            // underlying MatStepHeader, we have to make sure that change detection runs correctly.
            this._stepper._stateChanged();
          }
        }, {
          key: "editable",
          get: function get() {
            return this._editable;
          },
          set: function set(value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether the completion of step is optional. */

        }, {
          key: "optional",
          get: function get() {
            return this._optional;
          },
          set: function set(value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Whether step is marked as completed. */

        }, {
          key: "completed",
          get: function get() {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
          },
          set: function set(value) {
            this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hasError",
          get: function get() {
            return this._customError == null ? this._getDefaultError() : this._customError;
          },
          set: function set(value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkStep;
      }();

      CdkStep.??fac = function CdkStep_Factory(t) {
        return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
          return CdkStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
      };

      CdkStep.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: CdkStep,
        selectors: [["cdk-step"]],
        contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        viewQuery: function CdkStep_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????staticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          editable: "editable",
          optional: "optional",
          completed: "completed",
          hasError: "hasError",
          stepControl: "stepControl",
          label: "label",
          errorMessage: "errorMessage",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          state: "state"
        },
        exportAs: ["cdkStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["????NgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CdkStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      CdkStep.ctorParameters = function () {
        return [{
          type: CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
              return CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      };

      CdkStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
          args: [CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
          args: [{
            selector: 'cdk-step',
            exportAs: 'cdkStep',
            template: '<ng-template><ng-content></ng-content></ng-template>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: CdkStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
                return CdkStepper;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [STEPPER_GLOBAL_OPTIONS]
            }]
          }];
        }, {
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
            args: [CdkStepLabel]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
              "static": true
            }]
          }],
          stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
            args: ['aria-labelledby']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }]
        });
      })();

      return CdkStep;
    }();

    var CdkStepper =
    /** @class */
    function () {
      var CdkStepper = /*#__PURE__*/function () {
        function CdkStepper(_dir, _changeDetectorRef, // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
        _elementRef, _document) {
          _classCallCheck(this, CdkStepper);

          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._linear = false;
          this._selectedIndex = 0;
          /** Event emitted when the selected step has changed. */

          this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
          this._orientation = 'horizontal';
          this._groupId = nextId++;
          this._document = _document;
        }
        /** The list of step components that the stepper is holding. */


        _createClass(CdkStepper, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            // Note that while the step headers are content children by default, any components that
            // extend this one might have them as view children. We initialize the keyboard handling in
            // AfterViewInit so we're guaranteed for both view and content children to be defined.
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader).withWrap().withVerticalOrientation(this._orientation === 'vertical');
            (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function (direction) {
              return _this._keyManager.withHorizontalOrientation(direction);
            });

            this._keyManager.updateActiveItem(this._selectedIndex);

            this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
              if (!_this.selected) {
                _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Selects and focuses the next step in list. */

        }, {
          key: "next",
          value: function next() {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
          }
          /** Selects and focuses the previous step in list. */

        }, {
          key: "previous",
          value: function previous() {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
          }
          /** Resets the stepper to its initial state. Note that this includes clearing form data. */

        }, {
          key: "reset",
          value: function reset() {
            this._updateSelectedItemIndex(0);

            this.steps.forEach(function (step) {
              return step.reset();
            });

            this._stateChanged();
          }
          /** Returns a unique id for each step label element. */

        }, {
          key: "_getStepLabelId",
          value: function _getStepLabelId(i) {
            return "cdk-step-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns unique id for each step content element. */

        }, {
          key: "_getStepContentId",
          value: function _getStepContentId(i) {
            return "cdk-step-content-".concat(this._groupId, "-").concat(i);
          }
          /** Marks the component to be change detected. */

        }, {
          key: "_stateChanged",
          value: function _stateChanged() {
            this._changeDetectorRef.markForCheck();
          }
          /** Returns position state of the step with the given index. */

        }, {
          key: "_getAnimationDirection",
          value: function _getAnimationDirection(index) {
            var position = index - this._selectedIndex;

            if (position < 0) {
              return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
            } else if (position > 0) {
              return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
            }

            return 'current';
          }
          /** Returns the type of icon to be displayed. */

        }, {
          key: "_getIndicatorType",
          value: function _getIndicatorType(index) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;
            var step = this.steps.toArray()[index];

            var isCurrentStep = this._isCurrentStep(index);

            return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
          }
        }, {
          key: "_getDefaultIndicatorLogic",
          value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (!step.completed || isCurrentStep) {
              return STEP_STATE.NUMBER;
            } else {
              return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
            }
          }
        }, {
          key: "_getGuidelineLogic",
          value: function _getGuidelineLogic(step, isCurrentStep) {
            var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

            if (step._showError && step.hasError && !isCurrentStep) {
              return STEP_STATE.ERROR;
            } else if (step.completed && !isCurrentStep) {
              return STEP_STATE.DONE;
            } else if (step.completed && isCurrentStep) {
              return state;
            } else if (step.editable && isCurrentStep) {
              return STEP_STATE.EDIT;
            } else {
              return state;
            }
          }
        }, {
          key: "_isCurrentStep",
          value: function _isCurrentStep(index) {
            return this._selectedIndex === index;
          }
          /** Returns the index of the currently-focused step header. */

        }, {
          key: "_getFocusIndex",
          value: function _getFocusIndex() {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
          }
        }, {
          key: "_updateSelectedItemIndex",
          value: function _updateSelectedItemIndex(newIndex) {
            var stepsArray = this.steps.toArray();
            this.selectionChange.emit({
              selectedIndex: newIndex,
              previouslySelectedIndex: this._selectedIndex,
              selectedStep: stepsArray[newIndex],
              previouslySelectedStep: stepsArray[this._selectedIndex]
            }); // If focus is inside the stepper, move it to the next header, otherwise it may become
            // lost when the active step content is hidden. We can't be more granular with the check
            // (e.g. checking whether focus is inside the active step), because we don't have a
            // reference to the elements that are rendering out the content.

            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
            this._selectedIndex = newIndex;

            this._stateChanged();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
              this.selectedIndex = manager.activeItemIndex;
              event.preventDefault();
            } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]) {
              manager.setFirstItemActive();
              event.preventDefault();
            } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]) {
              manager.setLastItemActive();
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
          }
        }, {
          key: "_anyControlsInvalidOrPending",
          value: function _anyControlsInvalidOrPending(index) {
            var steps = this.steps.toArray();
            steps[this._selectedIndex].interacted = true;

            if (this._linear && index >= 0) {
              return steps.slice(0, index).some(function (step) {
                var control = step.stepControl;
                var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
              });
            }

            return false;
          }
        }, {
          key: "_layoutDirection",
          value: function _layoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Checks whether the stepper contains the focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (!this._document || !this._elementRef) {
              return false;
            }

            var stepperElement = this._elementRef.nativeElement;
            var focusedElement = this._document.activeElement;
            return stepperElement === focusedElement || stepperElement.contains(focusedElement);
          }
        }, {
          key: "steps",
          get: function get() {
            return this._steps;
          }
          /** Whether the validity of previous steps should be checked or not. */

        }, {
          key: "linear",
          get: function get() {
            return this._linear;
          },
          set: function set(value) {
            this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** The index of the selected step. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(index) {
            var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);

            if (this.steps) {
              // Ensure that the index can't be out of bounds.
              if (newIndex < 0 || newIndex > this.steps.length - 1) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
              }

              if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
              }
            } else {
              this._selectedIndex = newIndex;
            }
          }
          /** The step that is selected. */

        }, {
          key: "selected",
          get: function get() {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
          },
          set: function set(step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
          }
        }]);

        return CdkStepper;
      }();

      CdkStepper.??fac = function CdkStepper_Factory(t) {
        return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      CdkStepper.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
        type: CdkStepper,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????contentQuery"](dirIndex, CdkStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          linear: "linear",
          selectedIndex: "selectedIndex",
          selected: "selected"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["cdkStepper"]
      });

      CdkStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      CdkStepper.propDecorators = {
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStepHeader, {
            descendants: true
          }]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: '[cdkStepper]',
            exportAs: 'cdkStepper'
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
          }],
          linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStep, {
              descendants: true
            }]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
            args: [CdkStepHeader, {
              descendants: true
            }]
          }]
        });
      })();

      return CdkStepper;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Button that moves to the next step in a stepper workflow. */


    var CdkStepperNext =
    /** @class */
    function () {
      var CdkStepperNext = /*#__PURE__*/function () {
        function CdkStepperNext(_stepper) {
          _classCallCheck(this, CdkStepperNext);

          this._stepper = _stepper;
          /** Type of the next button. Defaults to "submit" if not specified. */

          this.type = 'submit';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperNext, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.next();
          }
        }]);

        return CdkStepperNext;
      }();

      CdkStepperNext.??fac = function CdkStepperNext_Factory(t) {
        return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](CdkStepper));
      };

      CdkStepperNext.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
        type: CdkStepperNext,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CdkStepperNext_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????hostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperNext.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperNext.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperNext]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
          }]
        });
      })();

      return CdkStepperNext;
    }();
    /** Button that moves to the previous step in a stepper workflow. */


    var CdkStepperPrevious =
    /** @class */
    function () {
      var CdkStepperPrevious = /*#__PURE__*/function () {
        function CdkStepperPrevious(_stepper) {
          _classCallCheck(this, CdkStepperPrevious);

          this._stepper = _stepper;
          /** Type of the previous button. Defaults to "button" if not specified. */

          this.type = 'button';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(CdkStepperPrevious, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.previous();
          }
        }]);

        return CdkStepperPrevious;
      }();

      CdkStepperPrevious.??fac = function CdkStepperPrevious_Factory(t) {
        return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](CdkStepper));
      };

      CdkStepperPrevious.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineDirective"]({
        type: CdkStepperPrevious,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????hostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      CdkStepperPrevious.ctorParameters = function () {
        return [{
          type: CdkStepper
        }];
      };

      CdkStepperPrevious.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
          args: [{
            selector: 'button[cdkStepperPrevious]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
          }],
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click']
          }]
        });
      })();

      return CdkStepperPrevious;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var CdkStepperModule =
    /** @class */
    function () {
      var CdkStepperModule = function CdkStepperModule() {
        _classCallCheck(this, CdkStepperModule);
      };

      CdkStepperModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: CdkStepperModule
      });
      CdkStepperModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        factory: function CdkStepperModule_Factory(t) {
          return new (t || CdkStepperModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](CdkStepperModule, {
          declarations: function declarations() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]];
          },
          exports: function exports() {
            return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](CdkStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
            exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
            declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
          }]
        }], null, null);
      })();

      return CdkStepperModule;
    }();
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
    //# sourceMappingURL=stepper.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return MAT_STEPPER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return MAT_STEPPER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return MatHorizontalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return MatStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return MatStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return MatStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return MatStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return MatStepperIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return MatStepperIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return MatStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return MatStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return MatStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return MatVerticalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return matStepperAnimations;
    });
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function MatStepHeader_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0, 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
      }
    }

    function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
      }
    }

    function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
      }
    }

    function MatStepHeader_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", ctx_r1.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "number");
      }
    }

    function MatStepHeader_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0, 13);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
      }
    }

    function MatStepHeader_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r3.label);
      }
    }

    function MatStepHeader_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r4._intl.optionalLabel);
      }
    }

    function MatStepHeader_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r5.errorMessage);
      }
    }

    function MatStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????projection"](0);
      }
    }

    var _c0 = ["*"];

    function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 6);
      }
    }

    function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-step-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
          var step_r2 = ctx.$implicit;
          return step_r2.select();
        })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r7._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var step_r2 = ctx.$implicit;
        var i_r3 = ctx.index;
        var isLast_r4 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !isLast_r4);
      }
    }

    function MatHorizontalStepper_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r11._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](1, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var step_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", step_r9.content);
      }
    }

    function MatVerticalStepper_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-step-header", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
          var step_r1 = ctx.$implicit;
          return step_r1.select();
        })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r5._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          return ctx_r7._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = ctx.$implicit;
        var i_r2 = ctx.index;
        var isLast_r3 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-stepper-vertical-line", !isLast_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", step_r1.content);
      }
    }

    var MatStepLabel =
    /** @class */
    function () {
      var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
        _inherits(MatStepLabel, _angular_cdk_stepper_);

        var _super = _createSuper(MatStepLabel);

        function MatStepLabel() {
          _classCallCheck(this, MatStepLabel);

          return _super.apply(this, arguments);
        }

        return MatStepLabel;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

      MatStepLabel.??fac = function MatStepLabel_Factory(t) {
        return ??MatStepLabel_BaseFactory(t || MatStepLabel);
      };

      MatStepLabel.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: MatStepLabel,
        selectors: [["", "matStepLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
      });

      var ??MatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepLabel);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepLabel]'
          }]
        }], null, null);
      })();

      return MatStepLabel;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Stepper data that is required for internationalization. */


    var MatStepperIntl =
    /** @class */
    function () {
      var MatStepperIntl = function MatStepperIntl() {
        _classCallCheck(this, MatStepperIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /** Label that is rendered below optional steps. */

        this.optionalLabel = 'Optional';
      };

      MatStepperIntl.??fac = function MatStepperIntl_Factory(t) {
        return new (t || MatStepperIntl)();
      };

      MatStepperIntl.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"])({
        factory: function MatStepperIntl_Factory() {
          return new MatStepperIntl();
        },
        token: MatStepperIntl,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      return MatStepperIntl;
    }();
    /** @docs-private */


    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatStepperIntl();
    }
    /** @docs-private */


    var MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var MatStepHeader =
    /** @class */
    function () {
      var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
        _inherits(MatStepHeader, _angular_cdk_stepper_2);

        var _super2 = _createSuper(MatStepHeader);

        function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
          var _this2;

          _classCallCheck(this, MatStepHeader);

          _this2 = _super2.call(this, _elementRef);
          _this2._intl = _intl;
          _this2._focusMonitor = _focusMonitor;
          _this2._intlSubscription = _intl.changes.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
          return _this2;
        }

        _createClass(MatStepHeader, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the step header. */

        }, {
          key: "focus",
          value: function focus() {
            this._focusMonitor.focusVia(this._elementRef, 'program');
          }
          /** Returns string label of given step if it is a text label. */

        }, {
          key: "_stringLabel",
          value: function _stringLabel() {
            return this.label instanceof MatStepLabel ? null : this.label;
          }
          /** Returns MatStepLabel if the label of given step is a template label. */

        }, {
          key: "_templateLabel",
          value: function _templateLabel() {
            return this.label instanceof MatStepLabel ? this.label : null;
          }
          /** Returns the host HTML element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Template context variables that are exposed to the `matStepperIcon` instances. */

        }, {
          key: "_getIconContext",
          value: function _getIconContext() {
            return {
              index: this.index,
              active: this.active,
              optional: this.optional
            };
          }
        }, {
          key: "_getDefaultTextForState",
          value: function _getDefaultTextForState(state) {
            if (state == 'number') {
              return "".concat(this.index + 1);
            }

            if (state == 'edit') {
              return 'create';
            }

            if (state == 'error') {
              return 'warning';
            }

            return state;
          }
        }]);

        return MatStepHeader;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

      MatStepHeader.??fac = function MatStepHeader_Factory(t) {
        return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      MatStepHeader.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: MatStepHeader,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
        inputs: {
          state: "state",
          label: "label",
          errorMessage: "errorMessage",
          iconOverrides: "iconOverrides",
          index: "index",
          selected: "selected",
          active: "active",
          optional: "optional",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
        decls: 10,
        vars: 19,
        consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
        template: function MatStepHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, MatStepHeader_div_7_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, MatStepHeader_div_8_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, MatStepHeader_div_9_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-step-icon-selected", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx._templateLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx._stringLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.optional && ctx.state != "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.state == "error");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatStepHeader.ctorParameters = function () {
        return [{
          type: MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MatStepHeader.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step-header',
            template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
            host: {
              'class': 'mat-step-header mat-focus-indicator',
              'role': 'tab'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: MatStepperIntl
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      return MatStepHeader;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Animations used by the Material steppers.
     * @docs-private
     */


    var matStepperAnimations = {
      /** Animation that transitions the step along the X axis in a horizontal stepper. */
      horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'none',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

      /** Animation that transitions the step along the Y axis in a vertical stepper. */
      verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Template to be used to override the icons inside the step header.
     */

    var MatStepperIcon =
    /** @class */
    function () {
      var MatStepperIcon = function MatStepperIcon(templateRef) {
        _classCallCheck(this, MatStepperIcon);

        this.templateRef = templateRef;
      };

      MatStepperIcon.??fac = function MatStepperIcon_Factory(t) {
        return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
      };

      MatStepperIcon.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: MatStepperIcon,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: {
          name: ["matStepperIcon", "name"]
        }
      });

      MatStepperIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      };

      MatStepperIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matStepperIcon']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'ng-template[matStepperIcon]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matStepperIcon']
          }]
        });
      })();

      return MatStepperIcon;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatStep =
    /** @class */
    function () {
      var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
        _inherits(MatStep, _angular_cdk_stepper_3);

        var _super3 = _createSuper(MatStep);

        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function MatStep(stepper, _errorStateMatcher, stepperOptions) {
          var _this3;

          _classCallCheck(this, MatStep);

          _this3 = _super3.call(this, stepper, stepperOptions);
          _this3._errorStateMatcher = _errorStateMatcher;
          return _this3;
        }
        /** Custom error state matcher that additionally checks for validity of interacted form. */


        _createClass(MatStep, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.


            var customErrorState = !!(control && control.invalid && this.interacted);
            return originalErrorState || customErrorState;
          }
        }]);

        return MatStep;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

      MatStep.??fac = function MatStep_Factory(t) {
        return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8));
      };

      MatStep.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: MatStep,
        selectors: [["mat-step"]],
        contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStepLabel, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        exportAs: ["matStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          useExisting: MatStep
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
          useExisting: MatStep
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatStep.ctorParameters = function () {
        return [{
          type: MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
          }]
        }];
      };

      MatStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatStepLabel]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-step',
            template: "<ng-template><ng-content></ng-content></ng-template>\n",
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
              useExisting: MatStep
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
              useExisting: MatStep
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matStep',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: MatStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return MatStepper;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
            }]
          }];
        }, {
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatStepLabel]
          }]
        });
      })();

      return MatStep;
    }();

    var MatStepper =
    /** @class */
    function () {
      var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
        _inherits(MatStepper, _angular_cdk_stepper_4);

        var _super4 = _createSuper(MatStepper);

        function MatStepper() {
          var _this4;

          _classCallCheck(this, MatStepper);

          _this4 = _super4.apply(this, arguments);
          /** Event emitted when the current step is done transitioning in. */

          _this4.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Consumer-specified template-refs to be used to override the header icons. */

          _this4._iconOverrides = {};
          /** Stream of animation `done` events when the body expands/collapses. */

          _this4._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          return _this4;
        }

        _createClass(MatStepper, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this._icons.forEach(function (_ref) {
              var name = _ref.name,
                  templateRef = _ref.templateRef;
              return _this5._iconOverrides[name] = templateRef;
            }); // Mark the component for change detection whenever the content children query changes


            this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this5._stateChanged();
            });

            this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(function (x, y) {
              return x.fromState === y.fromState && x.toState === y.toState;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (event) {
              if (event.toState === 'current') {
                _this5.animationDone.emit();
              }
            });
          }
        }]);

        return MatStepper;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

      MatStepper.??fac = function MatStepper_Factory(t) {
        return ??MatStepper_BaseFactory(t || MatStepper);
      };

      MatStepper.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: MatStepper,
        selectors: [["", "matStepper", ""]],
        contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStep, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????contentQuery"](dirIndex, MatStepperIcon, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._icons = _t);
          }
        },
        viewQuery: function MatStepper_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](MatStepHeader, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          disableRipple: "disableRipple"
        },
        outputs: {
          animationDone: "animationDone"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
      });
      MatStepper.propDecorators = {
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: [MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStepperIcon, {
            descendants: true
          }]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ??MatStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: '[matStepper]',
            providers: [{
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatStepper
            }]
          }]
        }], null, {
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [MatStepHeader]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStep, {
              descendants: true
            }]
          }],
          _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatStepperIcon, {
              descendants: true
            }]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      return MatStepper;
    }();

    var MatHorizontalStepper =
    /** @class */
    function () {
      var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
        _inherits(MatHorizontalStepper, _MatStepper);

        var _super5 = _createSuper(MatHorizontalStepper);

        function MatHorizontalStepper() {
          var _this6;

          _classCallCheck(this, MatHorizontalStepper);

          _this6 = _super5.apply(this, arguments);
          /** Whether the label should display in bottom or end position. */

          _this6.labelPosition = 'end';
          return _this6;
        }

        return MatHorizontalStepper;
      }(MatStepper);

      MatHorizontalStepper.??fac = function MatHorizontalStepper_Factory(t) {
        return ??MatHorizontalStepper_BaseFactory(t || MatHorizontalStepper);
      };

      MatHorizontalStepper.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: MatHorizontalStepper,
        selectors: [["mat-horizontal-stepper"]],
        hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
        hostVars: 4,
        hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex",
          labelPosition: "labelPosition"
        },
        exportAs: ["matHorizontalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatHorizontalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatHorizontalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
        decls: 4,
        vars: 2,
        consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
        template: function MatHorizontalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.horizontalStepTransition]
        },
        changeDetection: 0
      });
      MatHorizontalStepper.propDecorators = {
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      var ??MatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatHorizontalStepper);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatHorizontalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-horizontal-stepper',
            exportAs: 'matHorizontalStepper',
            template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-horizontal',
              '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
              '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
              'aria-orientation': 'horizontal',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.horizontalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatHorizontalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatHorizontalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], null, {
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      return MatHorizontalStepper;
    }();

    var MatVerticalStepper =
    /** @class */
    function () {
      var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
        _inherits(MatVerticalStepper, _MatStepper2);

        var _super6 = _createSuper(MatVerticalStepper);

        function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
        elementRef, _document) {
          var _this7;

          _classCallCheck(this, MatVerticalStepper);

          _this7 = _super6.call(this, dir, changeDetectorRef, elementRef, _document);
          _this7._orientation = 'vertical';
          return _this7;
        }

        return MatVerticalStepper;
      }(MatStepper);

      MatVerticalStepper.??fac = function MatVerticalStepper_Factory(t) {
        return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      MatVerticalStepper.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: MatVerticalStepper,
        selectors: [["mat-vertical-stepper"]],
        hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
        inputs: {
          selectedIndex: "selectedIndex"
        },
        exportAs: ["matVerticalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????ProvidersFeature"]([{
          provide: MatStepper,
          useExisting: MatVerticalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatVerticalStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
        template: function MatVerticalStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.steps);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matStepperAnimations.verticalStepTransition]
        },
        changeDetection: 0
      });

      MatVerticalStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatVerticalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-vertical-stepper',
            exportAs: 'matVerticalStepper',
            template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
            inputs: ['selectedIndex'],
            host: {
              'class': 'mat-stepper-vertical',
              'aria-orientation': 'vertical',
              'role': 'tablist'
            },
            animations: [matStepperAnimations.verticalStepTransition],
            providers: [{
              provide: MatStepper,
              useExisting: MatVerticalStepper
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
              useExisting: MatVerticalStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();

      return MatVerticalStepper;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Button that moves to the next step in a stepper workflow. */


    var MatStepperNext =
    /** @class */
    function () {
      var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
        _inherits(MatStepperNext, _angular_cdk_stepper_5);

        var _super7 = _createSuper(MatStepperNext);

        function MatStepperNext() {
          _classCallCheck(this, MatStepperNext);

          return _super7.apply(this, arguments);
        }

        return MatStepperNext;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

      MatStepperNext.??fac = function MatStepperNext_Factory(t) {
        return ??MatStepperNext_BaseFactory(t || MatStepperNext);
      };

      MatStepperNext.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: MatStepperNext,
        selectors: [["button", "matStepperNext", ""]],
        hostVars: 1,
        hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????hostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
      });

      var ??MatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepperNext);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperNext]',
            host: {
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();

      return MatStepperNext;
    }();
    /** Button that moves to the previous step in a stepper workflow. */


    var MatStepperPrevious =
    /** @class */
    function () {
      var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
        _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

        var _super8 = _createSuper(MatStepperPrevious);

        function MatStepperPrevious() {
          _classCallCheck(this, MatStepperPrevious);

          return _super8.apply(this, arguments);
        }

        return MatStepperPrevious;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

      MatStepperPrevious.??fac = function MatStepperPrevious_Factory(t) {
        return ??MatStepperPrevious_BaseFactory(t || MatStepperPrevious);
      };

      MatStepperPrevious.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineDirective"]({
        type: MatStepperPrevious,
        selectors: [["button", "matStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????hostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]]
      });

      var ??MatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getInheritedFactory"](MatStepperPrevious);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'button[matStepperPrevious]',
            host: {
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();

      return MatStepperPrevious;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatStepperModule =
    /** @class */
    function () {
      var MatStepperModule = function MatStepperModule() {
        _classCallCheck(this, MatStepperModule);
      };

      MatStepperModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: MatStepperModule
      });
      MatStepperModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        factory: function MatStepperModule_Factory(t) {
          return new (t || MatStepperModule)();
        },
        providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](MatStepperModule, {
          declarations: function declarations() {
            return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](MatStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
            providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
          }]
        }], null, null);
      })();

      return MatStepperModule;
    }();
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
    //# sourceMappingURL=stepper.js.map

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
  "./node_modules/@iconify/icons-ic/twotone-vertical-split.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-vertical-split.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneVerticalSplitJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M15 7h4v10h-4z\" fill=\"currentColor\"/><path d=\"M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-visibility-off.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-visibility-off.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneVisibilityOffJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M12 14c.04 0 .08-.01.12-.01l-2.61-2.61c0 .04-.01.08-.01.12A2.5 2.5 0 0 0 12 14zm1.01-4.79l1.28 1.28c-.26-.57-.71-1.03-1.28-1.28zm7.81 2.29A9.77 9.77 0 0 0 12 6c-.68 0-1.34.09-1.99.22l.92.92c.35-.09.7-.14 1.07-.14c2.48 0 4.5 2.02 4.5 4.5c0 .37-.06.72-.14 1.07l2.05 2.05c.98-.86 1.81-1.91 2.41-3.12zM12 17c.95 0 1.87-.13 2.75-.39l-.98-.98c-.54.24-1.14.37-1.77.37a4.507 4.507 0 0 1-4.14-6.27L6.11 7.97c-1.22.91-2.23 2.1-2.93 3.52A9.78 9.78 0 0 0 12 17z\" fill=\"currentColor\"/><path d=\"M12 6a9.77 9.77 0 0 1 8.82 5.5a9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm2.28 4.49l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.06-1.07.14L13 9.21c.58.25 1.03.71 1.28 1.28zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42l1.41-1.41L3.42 2.45L2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 0 0-.36 1.78a4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./node_modules/@iconify/icons-ic/twotone-visibility.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@iconify/icons-ic/twotone-visibility.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIconifyIconsIcTwotoneVisibilityJs(module, exports) {
    var data = {
      "body": "<path opacity=\".3\" d=\"M12 6a9.77 9.77 0 0 0-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5A9.77 9.77 0 0 0 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z\" fill=\"currentColor\"/><path d=\"M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13a9.77 9.77 0 0 1-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5A9.77 9.77 0 0 1 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z\" fill=\"currentColor\"/>",
      "width": 24,
      "height": 24
    };
    exports.__esModule = true;
    exports["default"] = data;
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-right.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
    \********************************************************/

  /*! exports provided: fadeInRightAnimation, fadeInRight400ms */

  /***/
  function srcVexAnimationsFadeInRightAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () {
      return fadeInRightAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function () {
      return fadeInRight400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function fadeInRightAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      }))])]);
    }

    var fadeInRight400ms = fadeInRightAnimation(400);
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
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
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
  "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FormWizardRoutingModule */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardRoutingModule", function () {
      return FormWizardRoutingModule;
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


    var _form_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./form-wizard.component */
    "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");

    var routes = [{
      path: '',
      component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_2__["FormWizardComponent"]
    }];

    var FormWizardRoutingModule = function FormWizardRoutingModule() {
      _classCallCheck(this, FormWizardRoutingModule);
    };

    FormWizardRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormWizardRoutingModule
    });
    FormWizardRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormWizardRoutingModule_Factory(t) {
        return new (t || FormWizardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormWizardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormWizardRoutingModule, [{
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
  "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FormWizardComponent */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function () {
      return FormWizardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-vertical-split */
    "./node_modules/@iconify/icons-ic/twotone-vertical-split.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-done-all */
    "./node_modules/@iconify/icons-ic/twotone-done-all.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-more-vert */
    "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.component */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.component.ts");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.component */
    "./src/@vex/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function FormWizardComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 41);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r1.icDoneAll);
      }
    }

    function FormWizardComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 41);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r2.icDoneAll);
      }
    }

    function FormWizardComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Create Account");
      }
    }

    function FormWizardComponent_mat_option_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r22);
      }
    }

    function FormWizardComponent_ng_template_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Select a Password");
      }
    }

    function FormWizardComponent_button_68_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_68_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r23.showPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r6.icVisibility);
      }
    }

    function FormWizardComponent_button_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_69_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r25.hidePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r7.icVisibilityOff);
      }
    }

    function FormWizardComponent_button_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_76_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r27.showPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r8.icVisibility);
      }
    }

    function FormWizardComponent_button_77_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_77_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r29.hidePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r9.icVisibilityOff);
      }
    }

    function FormWizardComponent_ng_template_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Confirm Creation");
      }
    }

    function FormWizardComponent_ng_template_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 41);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r12.icDoneAll);
      }
    }

    function FormWizardComponent_ng_template_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-icon", 41);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r13.icDoneAll);
      }
    }

    function FormWizardComponent_ng_template_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Create Account");
      }
    }

    function FormWizardComponent_mat_option_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var option_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](option_r31);
      }
    }

    function FormWizardComponent_ng_template_155_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Select a Password");
      }
    }

    function FormWizardComponent_button_165_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_165_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r32.showPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r17.icVisibility);
      }
    }

    function FormWizardComponent_button_166_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_166_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r34.hidePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r18.icVisibilityOff);
      }
    }

    function FormWizardComponent_button_173_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_173_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r36.showPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r19.icVisibility);
      }
    }

    function FormWizardComponent_button_174_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_button_174_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r38.hidePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-icon", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx_r20.icVisibilityOff);
      }
    }

    function FormWizardComponent_ng_template_184_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Confirm Creation");
      }
    }

    var _c0 = function _c0() {
      return ["Forms", "Form Wizard"];
    };

    var FormWizardComponent = /*#__PURE__*/function () {
      function FormWizardComponent(fb, cd, snackbar) {
        _classCallCheck(this, FormWizardComponent);

        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
        this.passwordInputType = 'password';
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.icVerticalSplit = _iconify_icons_ic_twotone_vertical_split__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_11___default.a;
      }

      _createClass(FormWizardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /**
           * Horizontal Stepper
           * @type {FormGroup}
           */
          this.accountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: []
          });
          this.passwordFormGroup = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.confirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
          });
          /**
           * Vertical Stepper
           * @type {FormGroup}
           */

          this.verticalAccountFormGroup = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phonePrefix: [this.phonePrefixOptions[3]],
            phone: []
          });
          this.verticalPasswordFormGroup = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.verticalConfirmFormGroup = this.fb.group({
            terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
          });
        }
      }, {
        key: "showPassword",
        value: function showPassword() {
          this.passwordInputType = 'text';
          this.cd.markForCheck();
        }
      }, {
        key: "hidePassword",
        value: function hidePassword() {
          this.passwordInputType = 'password';
          this.cd.markForCheck();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.snackbar.open('Hooray! You successfully created your account.', null, {
            duration: 5000
          });
        }
      }]);

      return FormWizardComponent;
    }();

    FormWizardComponent.??fac = function FormWizardComponent_Factory(t) {
      return new (t || FormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]));
    };

    FormWizardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FormWizardComponent,
      selectors: [["vex-form-wizard"]],
      decls: 197,
      vars: 47,
      consts: [["current", "Form Wizard"], ["fxFlex", "auto", 3, "crumbs"], ["vexContainer", "", 1, "p-gutter"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mb-4"], [1, "w-10", "h-10", "rounded-full", "text-primary", "mr-3", "flex", "items-center", "justify-center", "bg-primary-light"], ["height", "20px", "width", "20px", 3, "icon"], [1, "block"], [1, "card", "overflow-hidden"], [3, "linear"], ["stepper", "matHorizontalStepper"], ["matStepperIcon", "edit"], ["matStepperIcon", "done"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "title", "m-0"], [1, "subheading-1"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "mt-4"], ["fxFlex", "auto"], ["formControlName", "username", "matInput", "", "required", ""], ["formControlName", "name", "matInput", "", "required", ""], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["formControlName", "email", "matInput", "", "required", ""], ["align", "end"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutGap", "8px"], ["fxFlex", "none", 1, "vex-flex-form-field"], ["formControlName", "phonePrefix"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "auto", 1, "vex-flex-form-field"], ["formControlName", "phone", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px", 1, "actions"], ["color", "primary", "mat-button", "", "type", "button", 3, "disabled", "click"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["formControlName", "passwordConfirm", "matInput", "", "required", "", 3, "type"], ["color", "primary", "mat-button", "", "matStepperPrevious", "", "type", "button"], ["formControlName", "terms", 1, "checkbox"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "title", "mt-6", "mb-4"], ["verticalStepper", "matVerticalStepper"], [3, "icIcon"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"]],
      template: function FormWizardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "vex-secondary-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "vex-breadcrumbs", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Horizontal Form Wizard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-horizontal-stepper", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, FormWizardComponent_ng_template_11_Template, 1, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, FormWizardComponent_ng_template_12_Template, 1, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, FormWizardComponent_ng_template_15_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Set up your account for testing purposes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Account Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "This will be your unique login name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "How may we call you?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-hint", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "example@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, FormWizardComponent_mat_option_45_Template, 2, 2, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "mat-hint", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_Template_button_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "RESET ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "NEXT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, FormWizardComponent_ng_template_58_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Select a Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Enter your password you will use to log in.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, FormWizardComponent_button_68_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, FormWizardComponent_button_69_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Your password should be atleast 6 characters long.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, FormWizardComponent_button_76_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, FormWizardComponent_button_77_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Please type in your password again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "PREVIOUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "NEXT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, FormWizardComponent_ng_template_87_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "You're almost there!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "To finish registration, accept our terms of service and click on \"Create Account\". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "mat-checkbox", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " I agree to the terms of service and the usual stuff. * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "PREVIOUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_Template_button_click_98_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " CREATE ACCOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Vertical Form Wizard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "mat-vertical-stepper", 8, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](108, FormWizardComponent_ng_template_108_Template, 1, 1, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](109, FormWizardComponent_ng_template_109_Template, 1, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](112, FormWizardComponent_ng_template_112_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Set up your account for testing purposes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Account Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "This will be your unique login name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "How may we call you?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "mat-hint", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "example@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](142, FormWizardComponent_mat_option_142_Template, 2, 2, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "mat-hint", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_Template_button_click_149_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r40);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](107);

            return _r11.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "RESET ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " NEXT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](155, FormWizardComponent_ng_template_155_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Select a Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Enter your password you will use to log in.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](165, FormWizardComponent_button_165_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](166, FormWizardComponent_button_166_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Your password should be atleast 6 characters long.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](173, FormWizardComponent_button_173_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](174, FormWizardComponent_button_174_Template, 2, 1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Please type in your password again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "PREVIOUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, " NEXT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "mat-step", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](184, FormWizardComponent_ng_template_184_Template, 1, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "You're almost there!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "To finish registration, accept our terms of service and click on \"Create Account\". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "mat-checkbox", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " I agree to the terms of service and the usual stuff. * ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "PREVIOUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormWizardComponent_Template_button_click_195_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " CREATE ACCOUNT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](46, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@stagger", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("linear", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.accountFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.accountFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.phonePrefixOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.accountFormGroup.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.accountFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.passwordFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.passwordFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.passwordInputType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.passwordInputType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.passwordFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.confirmFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.confirmFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.confirmFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.icVerticalSplit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@fadeInUp", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("linear", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.verticalAccountFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.verticalAccountFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.phonePrefixOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.verticalAccountFormGroup.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.verticalAccountFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.verticalPasswordFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.verticalPasswordFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.passwordInputType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.passwordInputType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.passwordInputType === "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.verticalPasswordFormGroup.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("stepControl", ctx.verticalConfirmFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.verticalConfirmFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.verticalConfirmFormGroup.invalid);
        }
      },
      directives: [_vex_components_secondary_toolbar_secondary_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["SecondaryToolbarComponent"], _vex_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_16__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperPrevious"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatVerticalStepper"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatSuffix"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpL2Zvcm1zL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInRight400ms"]]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormWizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-form-wizard',
          templateUrl: './form-wizard.component.html',
          styleUrls: ['./form-wizard.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger80ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"], _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_5__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInRight400ms"]]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/ui/forms/form-wizard/form-wizard.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormWizardModule */

  /***/
  function srcAppPagesUiFormsFormWizardFormWizardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormWizardModule", function () {
      return FormWizardModule;
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


    var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./form-wizard-routing.module */
    "./src/app/pages/ui/forms/form-wizard/form-wizard-routing.module.ts");
    /* harmony import */


    var _form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-wizard.component */
    "./src/app/pages/ui/forms/form-wizard/form-wizard.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var FormWizardModule = function FormWizardModule() {
      _classCallCheck(this, FormWizardModule);
    };

    FormWizardModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormWizardModule
    });
    FormWizardModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormWizardModule_Factory(t) {
        return new (t || FormWizardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_12__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormWizardModule, {
        declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_12__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormWizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormWizardRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_12__["SecondaryToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_16__["ContainerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-ui-forms-form-wizard-form-wizard-module-es5.js.map