function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-apps-editor-editor-module~pages-apps-mail-mail-module"], {
  /***/
  "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js ***!
    \*******************************************************************/

  /*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */

  /***/
  function node_modulesNgxQuill__ivy_ngcc__Fesm2015NgxQuillJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function () {
      return QUILL_CONFIG_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function () {
      return QuillEditorBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function () {
      return QuillEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillModule", function () {
      return QuillModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillService", function () {
      return QuillService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function () {
      return QuillViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function () {
      return QuillViewHTMLComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultModules", function () {
      return defaultModules;
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


    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = [[["", "quill-editor-toolbar", ""]]];
    var _c1 = ["[quill-editor-toolbar]"];
    var defaultModules = {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        header: 1
      }, {
        header: 2
      }], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        script: 'sub'
      }, {
        script: 'super'
      }], [{
        indent: '-1'
      }, {
        indent: '+1'
      }], [{
        direction: 'rtl'
      }], [{
        size: ['small', false, 'large', 'huge']
      }], [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], [{
        color: []
      }, {
        background: []
      }], [{
        font: []
      }], [{
        align: []
      }], ['clean'], ['link', 'image', 'video'] // link and image, video
      ]
    };

    var getFormat = function getFormat(format, configFormat) {
      var passedFormat = format || configFormat;
      return passedFormat || 'html';
    };

    var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');

    var QuillService = /*#__PURE__*/function () {
      function QuillService(config) {
        _classCallCheck(this, QuillService);

        this.config = config;
        this.count = 0;

        if (!this.config) {
          this.config = {
            modules: defaultModules
          };
        }
      }

      _createClass(QuillService, [{
        key: "getQuill",
        value: function getQuill() {
          var _this = this;

          this.count++;

          if (!this.Quill && this.count === 1) {
            this.$importPromise = new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var _a, _b, quillImport;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return __webpack_require__.e(
                        /*! import() | quill */
                        "quill").then(__webpack_require__.t.bind(null,
                        /*! quill */
                        "./node_modules/quill/dist/quill.js", 7));

                      case 2:
                        quillImport = _context.sent;
                        this.Quill = quillImport["default"] ? quillImport["default"] : quillImport; // Only register custom options and modules once

                        (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                          var newCustomOption = _this2.Quill["import"](customOption["import"]);

                          newCustomOption.whitelist = customOption.whitelist;

                          _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                        });
                        (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                          var implementation = _ref.implementation,
                              path = _ref.path;

                          _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                        });
                        resolve(this.Quill);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }

          return this.$importPromise;
        }
      }]);

      return QuillService;
    }();

    QuillService.??fac = function QuillService_Factory(t) {
      return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](QUILL_CONFIG_TOKEN));
    };

    QuillService.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"])({
      factory: function QuillService_Factory() {
        return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(QUILL_CONFIG_TOKEN));
      },
      token: QuillService,
      providedIn: "root"
    });

    QuillService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [QUILL_CONFIG_TOKEN]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QUILL_CONFIG_TOKEN]
          }]
        }];
      }, null);
    })(); // tslint:disable-next-line:directive-class-suffix


    var QuillEditorBase = /*#__PURE__*/function () {
      function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
        var _this3 = this;

        _classCallCheck(this, QuillEditorBase);

        this.elementRef = elementRef;
        this.domSanitizer = domSanitizer;
        this.doc = doc;
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.service = service;
        this.required = false;
        this.customToolbarPosition = 'top';
        this.sanitize = false;
        this.styles = null;
        this.strict = true;
        this.customOptions = [];
        this.customModules = [];
        this.preserveWhitespace = false;
        this.trimOnValidation = false;
        this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabled = false; // used to store initial value before ViewInit

        this.valueGetter = function (quillEditor, editorElement) {
          var html = editorElement.querySelector('.ql-editor').innerHTML;

          if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = null;
          }

          var modelValue = html;
          var format = getFormat(_this3.format, _this3.service.config.format);

          if (format === 'text') {
            modelValue = quillEditor.getText();
          } else if (format === 'object') {
            modelValue = quillEditor.getContents();
          } else if (format === 'json') {
            try {
              modelValue = JSON.stringify(quillEditor.getContents());
            } catch (e) {
              modelValue = quillEditor.getText();
            }
          }

          return modelValue;
        };

        this.valueSetter = function (quillEditor, value) {
          var format = getFormat(_this3.format, _this3.service.config.format);

          if (format === 'html') {
            if (_this3.sanitize) {
              value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
            }

            return quillEditor.clipboard.convert(value);
          } else if (format === 'json') {
            try {
              return JSON.parse(value);
            } catch (e) {
              return [{
                insert: value
              }];
            }
          }

          return value;
        };

        this.selectionChangeHandler = function (range, oldRange, source) {
          var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

          if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
            return;
          }

          _this3.zone.run(function () {
            if (range === null) {
              _this3.onBlur.emit({
                editor: _this3.quillEditor,
                source: source
              });
            } else if (oldRange === null) {
              _this3.onFocus.emit({
                editor: _this3.quillEditor,
                source: source
              });
            }

            _this3.onSelectionChanged.emit({
              editor: _this3.quillEditor,
              oldRange: oldRange,
              range: range,
              source: source
            });

            if (shouldTriggerOnModelTouched) {
              _this3.onModelTouched();
            }
          });
        };

        this.textChangeHandler = function (delta, oldDelta, source) {
          // only emit changes emitted by user interactions
          var text = _this3.quillEditor.getText();

          var content = _this3.quillEditor.getContents();

          var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

          if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = null;
          }

          var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
          var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

          if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
            return;
          }

          _this3.zone.run(function () {
            if (shouldTriggerOnModelChange) {
              _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
            }

            _this3.onContentChanged.emit({
              content: content,
              delta: delta,
              editor: _this3.quillEditor,
              html: html,
              oldDelta: oldDelta,
              source: source,
              text: text
            });
          });
        }; // tslint:disable-next-line:max-line-length


        this.editorChangeHandler = function (event, current, old, source) {
          // only emit changes when there's any listener
          if (!_this3.onEditorChanged.observers.length) {
            return;
          } // only emit changes emitted by user interactions


          if (event === 'text-change') {
            var text = _this3.quillEditor.getText();

            var content = _this3.quillEditor.getContents();

            var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

            if (html === '<p><br></p>' || html === '<div><br></div>') {
              html = null;
            }

            _this3.zone.run(function () {
              _this3.onEditorChanged.emit({
                content: content,
                delta: current,
                editor: _this3.quillEditor,
                event: event,
                html: html,
                oldDelta: old,
                source: source,
                text: text
              });
            });
          } else {
            _this3.onEditorChanged.emit({
              editor: _this3.quillEditor,
              event: event,
              oldRange: old,
              range: current,
              source: source
            });
          }
        };
      }

      _createClass(QuillEditorBase, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, contents;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return this.service.getQuill();

                  case 4:
                    Quill = _context2.sent;
                    this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                    this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                    toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                    modules = Object.assign({}, this.modules || this.service.config.modules);

                    if (toolbarElem) {
                      modules.toolbar = toolbarElem;
                    } else if (modules.toolbar === undefined) {
                      modules.toolbar = defaultModules.toolbar;
                    }

                    placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                    if (placeholder === undefined) {
                      placeholder = 'Insert text here ...';
                    }

                    if (this.styles) {
                      Object.keys(this.styles).forEach(function (key) {
                        _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                      });
                    }

                    if (this.classes) {
                      this.addClasses(this.classes);
                    }

                    this.customOptions.forEach(function (customOption) {
                      var newCustomOption = Quill["import"](customOption["import"]);
                      newCustomOption.whitelist = customOption.whitelist;
                      Quill.register(newCustomOption, true);
                    });
                    this.customModules.forEach(function (_ref2) {
                      var implementation = _ref2.implementation,
                          path = _ref2.path;
                      Quill.register(path, implementation);
                    });
                    bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                    if (!bounds) {
                      bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                    }

                    debug = this.debug;

                    if (!debug && debug !== false && this.service.config.debug) {
                      debug = this.service.config.debug;
                    }

                    readOnly = this.readOnly;

                    if (!readOnly && this.readOnly !== false) {
                      readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                    }

                    scrollingContainer = this.scrollingContainer;

                    if (!scrollingContainer && this.scrollingContainer !== null) {
                      scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                    }

                    formats = this.formats;

                    if (!formats && formats === undefined) {
                      formats = this.service.config.formats ? _toConsumableArray(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                    }

                    this.zone.runOutsideAngular(function () {
                      _this4.quillEditor = new Quill(_this4.editorElem, {
                        bounds: bounds,
                        debug: debug,
                        formats: formats,
                        modules: modules,
                        placeholder: placeholder,
                        readOnly: readOnly,
                        scrollingContainer: scrollingContainer,
                        strict: _this4.strict,
                        theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                      });
                    });

                    if (this.content) {
                      format = getFormat(this.format, this.service.config.format);

                      if (format === 'object') {
                        this.quillEditor.setContents(this.content, 'silent');
                      } else if (format === 'text') {
                        this.quillEditor.setText(this.content, 'silent');
                      } else if (format === 'json') {
                        try {
                          this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                        } catch (e) {
                          this.quillEditor.setText(this.content, 'silent');
                        }
                      } else {
                        if (this.sanitize) {
                          this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.content);
                        }

                        contents = this.quillEditor.clipboard.convert(this.content);
                        this.quillEditor.setContents(contents, 'silent');
                      }

                      this.quillEditor.getModule('history').clear();
                    } // initialize disabled status based on this.disabled as default value


                    this.setDisabledState(); // triggered if selection or text changed

                    this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                    this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                    this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                    // if you are using the editor api in created output to change the editor content

                    setTimeout(function () {
                      if (_this4.onValidatorChanged) {
                        _this4.onValidatorChanged();
                      }

                      _this4.onEditorCreated.emit(_this4.quillEditor);
                    });

                  case 33:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.quillEditor) {
            this.quillEditor.off('selection-change', this.selectionChangeHandler);
            this.quillEditor.off('text-change', this.textChangeHandler);
            this.quillEditor.off('editor-change', this.editorChangeHandler);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this5 = this;

          if (!this.quillEditor) {
            return;
          } // tslint:disable:no-string-literal


          if (changes['readOnly']) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
          }

          if (changes['placeholder']) {
            this.quillEditor.root.dataset.placeholder = changes['placeholder'].currentValue;
          }

          if (changes['styles']) {
            var currentStyling = changes['styles'].currentValue;
            var previousStyling = changes['styles'].previousValue;

            if (previousStyling) {
              Object.keys(previousStyling).forEach(function (key) {
                _this5.renderer.removeStyle(_this5.editorElem, key);
              });
            }

            if (currentStyling) {
              Object.keys(currentStyling).forEach(function (key) {
                _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
              });
            }
          }

          if (changes['classes']) {
            var currentClasses = changes['classes'].currentValue;
            var previousClasses = changes['classes'].previousValue;

            if (previousClasses) {
              this.removeClasses(previousClasses);
            }

            if (currentClasses) {
              this.addClasses(currentClasses);
            }
          } // tslint:enable:no-string-literal

        }
      }, {
        key: "addClasses",
        value: function addClasses(classList) {
          var _this6 = this;

          QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
            _this6.renderer.addClass(_this6.editorElem, c);
          });
        }
      }, {
        key: "removeClasses",
        value: function removeClasses(classList) {
          var _this7 = this;

          QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
            _this7.renderer.removeClass(_this7.editorElem, c);
          });
        }
      }, {
        key: "writeValue",
        value: function writeValue(currentValue) {
          this.content = currentValue;
          var format = getFormat(this.format, this.service.config.format);

          if (this.quillEditor) {
            if (currentValue) {
              if (format === 'text') {
                this.quillEditor.setText(currentValue);
              } else {
                this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
              }

              return;
            }

            this.quillEditor.setText('');
          }
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState() {
          var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
          // store initial value to set appropriate disabled status after ViewInit
          this.disabled = isDisabled;

          if (this.quillEditor) {
            if (isDisabled) {
              this.quillEditor.disable();
              this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
            } else {
              if (!this.readOnly) {
                this.quillEditor.enable();
              }

              this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
            }
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onModelChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onModelTouched = fn;
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onValidatorChanged = fn;
        }
      }, {
        key: "validate",
        value: function validate() {
          if (!this.quillEditor) {
            return null;
          }

          var err = {};
          var valid = true;
          var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

          var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

          if (this.minLength && textLength && textLength < this.minLength) {
            err.minLengthError = {
              given: textLength,
              minLength: this.minLength
            };
            valid = false;
          }

          if (this.maxLength && textLength > this.maxLength) {
            err.maxLengthError = {
              given: textLength,
              maxLength: this.maxLength
            };
            valid = false;
          }

          if (this.required && !textLength) {
            err.requiredError = {
              empty: true
            };
            valid = false;
          }

          return valid ? null : err;
        }
      }], [{
        key: "normalizeClassNames",
        value: function normalizeClassNames(classes) {
          var classList = classes.trim().split(' ');
          return classList.reduce(function (prev, cur) {
            var trimmed = cur.trim();

            if (trimmed) {
              prev.push(trimmed);
            }

            return prev;
          }, []);
        }
      }]);

      return QuillEditorBase;
    }();

    QuillEditorBase.??fac = function QuillEditorBase_Factory(t) {
      return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
    };

    QuillEditorBase.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
      type: QuillEditorBase,
      inputs: {
        required: "required",
        customToolbarPosition: "customToolbarPosition",
        sanitize: "sanitize",
        styles: "styles",
        strict: "strict",
        customOptions: "customOptions",
        customModules: "customModules",
        preserveWhitespace: "preserveWhitespace",
        trimOnValidation: "trimOnValidation",
        valueGetter: "valueGetter",
        valueSetter: "valueSetter",
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        readOnly: "readOnly",
        placeholder: "placeholder",
        maxLength: "maxLength",
        minLength: "minLength",
        formats: "formats",
        scrollingContainer: "scrollingContainer",
        bounds: "bounds",
        trackChanges: "trackChanges",
        classes: "classes"
      },
      outputs: {
        onEditorCreated: "onEditorCreated",
        onEditorChanged: "onEditorChanged",
        onContentChanged: "onContentChanged",
        onSelectionChanged: "onSelectionChanged",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
    });

    QuillEditorBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: QuillService
      }];
    };

    QuillEditorBase.propDecorators = {
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      modules: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      debug: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      readOnly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      formats: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customToolbarPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      sanitize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      styles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strict: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrollingContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      bounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customModules: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      trackChanges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preserveWhitespace: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      trimOnValidation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      onEditorCreated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onEditorChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onContentChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onSelectionChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueGetter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      valueSetter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillEditorBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }];
      }, {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customToolbarPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trimOnValidation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onEditorCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onEditorChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onContentChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSelectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueGetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        valueSetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollingContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackChanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
      _inherits(QuillEditorComponent, _QuillEditorBase);

      var _super = _createSuper(QuillEditorComponent);

      function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
        _classCallCheck(this, QuillEditorComponent);

        return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
      }

      return QuillEditorComponent;
    }(QuillEditorBase);

    QuillEditorComponent.??fac = function QuillEditorComponent_Factory(t) {
      return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
    };

    QuillEditorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: QuillEditorComponent,
      selectors: [["quill-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return QuillEditorComponent;
        })
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return QuillEditorComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function QuillEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](0);
        }
      },
      encapsulation: 2
    });

    QuillEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
        }]
      }, {
        type: QuillService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [QuillService]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          providers: [{
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }, {
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }],
          selector: 'quill-editor',
          template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
          }]
        }, {
          type: QuillService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QuillService]
          }]
        }];
      }, null);
    })();

    var QuillViewHTMLComponent = /*#__PURE__*/function () {
      function QuillViewHTMLComponent(sanitizer, service) {
        _classCallCheck(this, QuillViewHTMLComponent);

        this.sanitizer = sanitizer;
        this.service = service;
        this.innerHTML = '';
        this.themeClass = 'ql-snow';
        this.content = '';
      }

      _createClass(QuillViewHTMLComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.theme) {
            var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
            this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
          } else if (!this.theme) {
            var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

            this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
          }

          if (changes.content) {
            this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
          }
        }
      }]);

      return QuillViewHTMLComponent;
    }();

    QuillViewHTMLComponent.??fac = function QuillViewHTMLComponent_Factory(t) {
      return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
    };

    QuillViewHTMLComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: QuillViewHTMLComponent,
      selectors: [["quill-view-html"]],
      inputs: {
        content: "content",
        theme: "theme"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
      template: function QuillViewHTMLComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.themeClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
      styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
      encapsulation: 2
    });

    QuillViewHTMLComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
        }]
      }, {
        type: QuillService
      }];
    };

    QuillViewHTMLComponent.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillViewHTMLComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          selector: 'quill-view-html',
          template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
          styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: QuillService
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var QuillViewComponent = /*#__PURE__*/function () {
      function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
        var _this8 = this;

        _classCallCheck(this, QuillViewComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this.service = service;
        this.domSanitizer = domSanitizer;
        this.platformId = platformId;
        this.sanitize = false;
        this.strict = true;
        this.customModules = [];
        this.customOptions = [];
        this.preserveWhitespace = false;

        this.valueSetter = function (quillEditor, value) {
          var format = getFormat(_this8.format, _this8.service.config.format);
          var content = value;

          if (format === 'text') {
            quillEditor.setText(content);
          } else {
            if (format === 'html') {
              if (_this8.sanitize) {
                value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
              }

              content = quillEditor.clipboard.convert(value);
            } else if (format === 'json') {
              try {
                content = JSON.parse(value);
              } catch (e) {
                content = [{
                  insert: value
                }];
              }
            }

            quillEditor.setContents(content);
          }
        };
      }

      _createClass(QuillViewComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.quillEditor) {
            return;
          }

          if (changes.content) {
            this.valueSetter(this.quillEditor, changes.content.currentValue);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var Quill, modules, debug, formats, theme;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    _context3.next = 4;
                    return this.service.getQuill();

                  case 4:
                    Quill = _context3.sent;
                    modules = Object.assign({}, this.modules || this.service.config.modules);
                    modules.toolbar = false;
                    this.customOptions.forEach(function (customOption) {
                      var newCustomOption = Quill["import"](customOption["import"]);
                      newCustomOption.whitelist = customOption.whitelist;
                      Quill.register(newCustomOption, true);
                    });
                    this.customModules.forEach(function (_ref3) {
                      var implementation = _ref3.implementation,
                          path = _ref3.path;
                      Quill.register(path, implementation);
                    });
                    debug = this.debug;

                    if (!debug && debug !== false && this.service.config.debug) {
                      debug = this.service.config.debug;
                    }

                    formats = this.formats;

                    if (!formats && formats === undefined) {
                      formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                    }

                    theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                    this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                    this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                    this.zone.runOutsideAngular(function () {
                      _this9.quillEditor = new Quill(_this9.editorElem, {
                        debug: debug,
                        formats: formats,
                        modules: modules,
                        readOnly: true,
                        strict: _this9.strict,
                        theme: theme
                      });
                    });
                    this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                    if (this.content) {
                      this.valueSetter(this.quillEditor, this.content);
                    }

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return QuillViewComponent;
    }();

    QuillViewComponent.??fac = function QuillViewComponent_Factory(t) {
      return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
    };

    QuillViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: QuillViewComponent,
      selectors: [["quill-view"]],
      inputs: {
        sanitize: "sanitize",
        strict: "strict",
        customModules: "customModules",
        customOptions: "customOptions",
        preserveWhitespace: "preserveWhitespace",
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        formats: "formats",
        content: "content"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function QuillViewComponent_Template(rf, ctx) {},
      styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
      encapsulation: 2
    });

    QuillViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: QuillService
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    QuillViewComponent.propDecorators = {
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      modules: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      debug: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      formats: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      sanitize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      strict: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customModules: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      customOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      preserveWhitespace: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          selector: 'quill-view',
          template: "\n",
          styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      }, {
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    var QuillModule = /*#__PURE__*/function () {
      function QuillModule() {
        _classCallCheck(this, QuillModule);
      }

      _createClass(QuillModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: QuillModule,
            providers: [{
              provide: QUILL_CONFIG_TOKEN,
              useValue: config
            }]
          };
        }
      }]);

      return QuillModule;
    }();

    QuillModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: QuillModule
    });
    QuillModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function QuillModule_Factory(t) {
        return new (t || QuillModule)();
      },
      providers: [QuillService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](QuillModule, {
        declarations: function declarations() {
          return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
        },
        exports: function exports() {
          return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
          exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          providers: [QuillService]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of ngx-quill
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-quill.js.map

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
  }
}]);
//# sourceMappingURL=default~pages-apps-editor-editor-module~pages-apps-mail-mail-module-es5.js.map