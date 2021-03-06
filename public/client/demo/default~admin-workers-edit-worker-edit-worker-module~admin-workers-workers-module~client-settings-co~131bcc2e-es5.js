function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-workers-edit-worker-edit-worker-module~admin-workers-workers-module~client-settings-co~131bcc2e"], {
  /***/
  "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js ***!
    \***********************************************************************************/

  /*! exports provided: AngularFireDatabase, AngularFireDatabaseModule, URL, auditTrail, createListReference, fromRef, listChanges, snapshotChanges, stateChanges */

  /***/
  function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireDatabaseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireDatabase", function () {
      return AngularFireDatabase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireDatabaseModule", function () {
      return AngularFireDatabaseModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "auditTrail", function () {
      return _auditTrail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createListReference", function () {
      return createListReference;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromRef", function () {
      return fromRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listChanges", function () {
      return listChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotChanges", function () {
      return _snapshotChanges;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stateChanges", function () {
      return _stateChanges;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isString(value) {
      return typeof value === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isFirebaseDataSnapshot(value) {
      return typeof value.exportVal === 'function';
    }
    /**
     * @param {?} obj
     * @return {?}
     */


    function isNil(obj) {
      return obj === undefined || obj === null;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isFirebaseRef(value) {
      return typeof value.set === 'function';
    }
    /**
     * Returns a database reference given a Firebase App and an
     * absolute or relative path.
     * @param {?} database - Firebase Database
     * @param {?} pathRef - Database path, relative or absolute
     * @return {?}
     */


    function getRef(database, pathRef) {
      // if a db ref was passed in, just return it
      return isFirebaseRef(pathRef) ?
      /** @type {?} */
      pathRef : database.ref(
      /** @type {?} */
      pathRef);
    }
    /**
     * @param {?} item
     * @param {?} cases
     * @return {?}
     */


    function checkOperationCases(item, cases) {
      if (isString(item)) {
        return cases.stringCase();
      } else if (isFirebaseRef(item)) {
        return cases.firebaseCase();
      } else if (isFirebaseDataSnapshot(item)) {
        return cases.snapshotCase();
      }

      throw new Error("Expects a string, snapshot, or reference. Got: ".concat(typeof item));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     * @template T
     */


    function SnapshotPrevKey() {}

    if (false) {}
    /**
     * Create an observable from a Database Reference or Database Query.
     * @template T
     * @param {?} ref Database Reference
     * @param {?} event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
     * @param {?=} listenType 'on' or 'once'
     * @param {?=} scheduler - Rxjs scheduler
     * @return {?}
     */


    function fromRef(ref, event) {
      var listenType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'on';
      var scheduler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        /** @type {?} */
        var fn = null;
        fn = ref[listenType](event,
        /**
        * @param {?} snapshot
        * @param {?} prevKey
        * @return {?}
        */
        function (snapshot, prevKey) {
          scheduler.schedule(
          /**
          * @return {?}
          */
          function () {
            subscriber.next({
              snapshot: snapshot,
              prevKey: prevKey
            });
          });

          if (listenType === 'once') {
            scheduler.schedule(
            /**
            * @return {?}
            */
            function () {
              return subscriber.complete();
            });
          }
        },
        /**
        * @param {?} err
        * @return {?}
        */
        function (err) {
          scheduler.schedule(
          /**
          * @return {?}
          */
          function () {
            return subscriber.error(err);
          });
        });

        if (listenType === 'on') {
          return {
            /**
             * @return {?}
             */
            unsubscribe: function unsubscribe() {
              if (fn != null) {
                ref.off(event, fn);
              }
            }
          };
        } else {
          return {
            /**
             * @return {?}
             */
            unsubscribe: function unsubscribe() {}
          };
        }
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} payload
      * @return {?}
      */
      function (payload) {
        var snapshot = payload.snapshot,
            prevKey = payload.prevKey;
        /** @type {?} */

        var key = null;

        if (snapshot.exists()) {
          key = snapshot.key;
        }

        return {
          type: event,
          payload: snapshot,
          prevKey: prevKey,
          key: key
        };
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} ref
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */


    function listChanges(ref, events, scheduler) {
      return fromRef(ref, 'value', 'once', scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
      /**
      * @param {?} snapshotAction
      * @return {?}
      */
      function (snapshotAction) {
        /** @type {?} */
        var childEvent$ = [Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(snapshotAction)];
        events.forEach(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return childEvent$.push(fromRef(ref, event, 'on', scheduler));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"]).apply(void 0, childEvent$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(buildView, []));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    /**
     * @template T
     * @param {?} changes
     * @param {?} key
     * @return {?}
     */


    function positionFor(changes, key) {
      /** @type {?} */
      var len = changes.length;

      for (var i = 0; i < len; i++) {
        if (changes[i].payload.key === key) {
          return i;
        }
      }

      return -1;
    }
    /**
     * @template T
     * @param {?} changes
     * @param {?=} prevKey
     * @return {?}
     */


    function positionAfter(changes, prevKey) {
      if (isNil(prevKey)) {
        return 0;
      } else {
        /** @type {?} */
        var i = positionFor(changes, prevKey);

        if (i === -1) {
          return changes.length;
        } else {
          return i + 1;
        }
      }
    }
    /**
     * @param {?} current
     * @param {?} action
     * @return {?}
     */


    function buildView(current, action) {
      var payload = action.payload,
          prevKey = action.prevKey,
          key = action.key;
      /** @type {?} */

      var currentKeyPosition = positionFor(current, key);
      /** @type {?} */

      var afterPreviousKeyPosition = positionAfter(current, prevKey);

      switch (action.type) {
        case 'value':
          if (action.payload && action.payload.exists()) {
            /** @type {?} */
            var _prevKey = null;
            action.payload.forEach(
            /**
            * @param {?} payload
            * @return {?}
            */
            function (payload) {
              /** @type {?} */
              var action = {
                payload: payload,
                type: 'value',
                prevKey: _prevKey,
                key: payload.key
              };
              _prevKey = payload.key;
              current = [].concat(_toConsumableArray(current), [action]);
              return false;
            });
          }

          return current;

        case 'child_added':
          if (currentKeyPosition > -1) {
            // check that the previouskey is what we expect, else reorder

            /** @type {?} */
            var previous = current[currentKeyPosition - 1];

            if ((previous && previous.key || null) !== prevKey) {
              current = current.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.payload.key !== payload.key;
              });
              current.splice(afterPreviousKeyPosition, 0, action);
            }
          } else if (prevKey == null) {
            return [action].concat(_toConsumableArray(current));
          } else {
            current = current.slice();
            current.splice(afterPreviousKeyPosition, 0, action);
          }

          return current;

        case 'child_removed':
          return current.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.payload.key !== payload.key;
          });

        case 'child_changed':
          return current.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.payload.key === key ? action : x;
          });

        case 'child_moved':
          if (currentKeyPosition > -1) {
            /** @type {?} */
            var data = current.splice(currentKeyPosition, 1)[0];
            current = current.slice();
            current.splice(afterPreviousKeyPosition, 0, data);
            return current;
          }

          return current;
        // default will also remove null results

        default:
          return current;
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?=} events
     * @return {?}
     */


    function validateEventsArray(events) {
      if (isNil(events) || events.length === 0) {
        events = ['child_added', 'child_removed', 'child_changed', 'child_moved'];
      }

      return events;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */


    function _snapshotChanges(query, events, scheduler) {
      events = validateEventsArray(events);
      return listChanges(query, events, scheduler);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */


    function _stateChanges(query, events, scheduler) {
      events = validateEventsArray(events);
      /** @type {?} */

      var childEvent$ = events.map(
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        return fromRef(query, event, 'on', scheduler);
      });
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"]).apply(void 0, _toConsumableArray(childEvent$));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?=} events
     * @param {?=} scheduler
     * @return {?}
     */


    function _auditTrail(query, events, scheduler) {
      /** @type {?} */
      var auditTrail$ = _stateChanges(query, events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
      /**
      * @param {?} current
      * @param {?} action
      * @return {?}
      */
      function (current, action) {
        return [].concat(_toConsumableArray(current), [action]);
      }, []));

      return waitForLoaded(query, auditTrail$, scheduler);
    }
    /**
     * @record
     */


    function LoadedMetadata() {}

    if (false) {}
    /**
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */


    function loadedData(query, scheduler) {
      // Create an observable of loaded values to retrieve the
      // known dataset. This will allow us to know what key to
      // emit the "whole" array at when listening for child events.
      return fromRef(query, 'value', 'on', scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} data
      * @return {?}
      */
      function (data) {
        // Store the last key in the data set

        /** @type {?} */
        var lastKeyToLoad; // Loop through loaded dataset to find the last key

        data.payload.forEach(
        /**
        * @param {?} child
        * @return {?}
        */
        function (child) {
          lastKeyToLoad = child.key;
          return false;
        }); // return data set and the current last key loaded

        return {
          data: data,
          lastKeyToLoad: lastKeyToLoad
        };
      }));
    }
    /**
     * @template T
     * @param {?} query
     * @param {?} action$
     * @param {?=} scheduler
     * @return {?}
     */


    function waitForLoaded(query, action$, scheduler) {
      /** @type {?} */
      var loaded$ = loadedData(query, scheduler);
      return loaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(action$), // Get the latest values from the "loaded" and "child" datasets
      // We can use both datasets to form an array of the latest values.
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            loaded = _ref2[0],
            actions = _ref2[1];

        // Store the last key in the data set

        /** @type {?} */
        var lastKeyToLoad = loaded.lastKeyToLoad; // Store all child keys loaded at this point

        /** @type {?} */

        var loadedKeys = actions.map(
        /**
        * @param {?} snap
        * @return {?}
        */
        function (snap) {
          return snap.key;
        });
        return {
          actions: actions,
          lastKeyToLoad: lastKeyToLoad,
          loadedKeys: loadedKeys
        };
      }), // This is the magical part, only emit when the last load key
      // in the dataset has been loaded by a child event. At this point
      // we can assume the dataset is "whole".
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(
      /**
      * @param {?} meta
      * @return {?}
      */
      function (meta) {
        return meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1;
      }), // Pluck off the meta data because the user only cares
      // to iterate through the snapshots
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
      /**
      * @param {?} meta
      * @return {?}
      */
      function (meta) {
        return meta.actions;
      }));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} ref
     * @param {?} operation
     * @return {?}
     */


    function createDataOperationMethod(ref, operation) {
      return (
        /**
        * @template T
        * @param {?} item
        * @param {?} value
        * @return {?}
        */
        function dataOperation(item, value) {
          return checkOperationCases(item, {
            stringCase:
            /**
            * @return {?}
            */
            function stringCase() {
              return ref.child(
              /** @type {?} */
              item)[operation](value);
            },
            firebaseCase:
            /**
            * @return {?}
            */
            function firebaseCase() {
              return (
                /** @type {?} */
                item[operation](value)
              );
            },
            snapshotCase:
            /**
            * @return {?}
            */
            function snapshotCase() {
              return (
                /** @type {?} */
                item.ref[operation](value)
              );
            }
          });
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(davideast): Find out why TS thinks this returns firebase.Primise
    // instead of Promise.

    /**
     * @template T
     * @param {?} ref
     * @return {?}
     */


    function createRemoveMethod(ref) {
      return (
        /**
        * @param {?=} item
        * @return {?}
        */
        function remove(item) {
          if (!item) {
            return ref.remove();
          }

          return checkOperationCases(item, {
            stringCase:
            /**
            * @return {?}
            */
            function stringCase() {
              return ref.child(
              /** @type {?} */
              item).remove();
            },
            firebaseCase:
            /**
            * @return {?}
            */
            function firebaseCase() {
              return (
                /** @type {?} */
                item.remove()
              );
            },
            snapshotCase:
            /**
            * @return {?}
            */
            function snapshotCase() {
              return (
                /** @type {?} */
                item.ref.remove()
              );
            }
          });
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?} afDatabase
     * @return {?}
     */


    function createListReference(query, afDatabase) {
      /** @type {?} */
      var outsideAngularScheduler = afDatabase.schedulers.outsideAngular;
      /** @type {?} */

      var refInZone = afDatabase.schedulers.ngZone.run(
      /**
      * @return {?}
      */
      function () {
        return query.ref;
      });
      return {
        query: query,
        update: createDataOperationMethod(refInZone, 'update'),
        set: createDataOperationMethod(refInZone, 'set'),
        push:
        /**
        * @param {?} data
        * @return {?}
        */
        function push(data) {
          return refInZone.push(data);
        },
        remove: createRemoveMethod(refInZone),

        /**
         * @param {?=} events
         * @return {?}
         */
        snapshotChanges: function snapshotChanges(events) {
          return _snapshotChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },

        /**
         * @param {?=} events
         * @return {?}
         */
        stateChanges: function stateChanges(events) {
          return _stateChanges(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },

        /**
         * @param {?=} events
         * @return {?}
         */
        auditTrail: function auditTrail(events) {
          return _auditTrail(query, events, outsideAngularScheduler).pipe(afDatabase.keepUnstableUntilFirst);
        },

        /**
         * @param {?=} events
         * @return {?}
         */
        valueChanges: function valueChanges(events) {
          /** @type {?} */
          var snapshotChanges$ = _snapshotChanges(query, events, outsideAngularScheduler);

          return snapshotChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} actions
          * @return {?}
          */
          function (actions) {
            return actions.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return (
                /** @type {?} */
                a.payload.val()
              );
            });
          }), afDatabase.keepUnstableUntilFirst);
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */


    function createObjectSnapshotChanges(query, scheduler) {
      return (
        /**
        * @return {?}
        */
        function snapshotChanges() {
          return fromRef(query, 'value', 'on', scheduler);
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} query
     * @param {?} afDatabase
     * @return {?}
     */


    function createObjectReference(query, afDatabase) {
      return {
        query: query,

        /**
         * @template T
         * @return {?}
         */
        snapshotChanges: function snapshotChanges() {
          return createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)().pipe(afDatabase.keepUnstableUntilFirst);
        },

        /**
         * @param {?} data
         * @return {?}
         */
        update: function update(data) {
          return (
            /** @type {?} */
            query.ref.update(
            /** @type {?} */
            data)
          );
        },

        /**
         * @param {?} data
         * @return {?}
         */
        set: function set(data) {
          return (
            /** @type {?} */
            query.ref.set(data)
          );
        },

        /**
         * @return {?}
         */
        remove: function remove() {
          return (
            /** @type {?} */
            query.ref.remove()
          );
        },

        /**
         * @template T
         * @return {?}
         */
        valueChanges: function valueChanges() {
          /** @type {?} */
          var snapshotChanges$ = createObjectSnapshotChanges(query, afDatabase.schedulers.outsideAngular)();
          return snapshotChanges$.pipe(afDatabase.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            return action.payload.exists() ?
            /** @type {?} */
            action.payload.val() : null;
          }));
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.realtimeDatabaseURL');

    var AngularFireDatabase = /*#__PURE__*/function () {
      /**
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} databaseURL
       * @param {?} platformId
       * @param {?} zone
       */
      function AngularFireDatabase(options, nameOrConfig, databaseURL, // tslint:disable-next-line:ban-types
      platformId, zone) {
        _classCallCheck(this, AngularFireDatabase);

        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["??AngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??keepUnstableUntilFirstFactory"])(this.schedulers);
        this.database = zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??firebaseAppFactory"])(options, zone, nameOrConfig);
          return app.database(databaseURL || undefined);
        });
      }
      /**
       * @template T
       * @param {?} pathOrRef
       * @param {?=} queryFn
       * @return {?}
       */


      _createClass(AngularFireDatabase, [{
        key: "list",
        value: function list(pathOrRef, queryFn) {
          /** @type {?} */
          var ref = getRef(this.database, pathOrRef);
          /** @type {?} */

          var query = ref;

          if (queryFn) {
            query = queryFn(ref);
          }

          return createListReference(query, this);
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */

      }, {
        key: "object",
        value: function object(pathOrRef) {
          /** @type {?} */
          var ref = getRef(this.database, pathOrRef);
          return createObjectReference(ref, this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "createPushId",
        value: function createPushId() {
          return this.database.ref().push().key;
        }
      }]);

      return AngularFireDatabase;
    }();

    AngularFireDatabase.??fac = function AngularFireDatabase_Factory(t) {
      return new (t || AngularFireDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };
    /** @nocollapse */


    AngularFireDatabase.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [URL]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    AngularFireDatabase.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
      factory: function AngularFireDatabase_Factory() {
        return new AngularFireDatabase(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(URL, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: AngularFireDatabase,
      providedIn: "any"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularFireDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'any'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [URL]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularFireDatabaseModule = function AngularFireDatabaseModule() {
      _classCallCheck(this, AngularFireDatabaseModule);
    };

    AngularFireDatabaseModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AngularFireDatabaseModule
    });
    AngularFireDatabaseModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AngularFireDatabaseModule_Factory(t) {
        return new (t || AngularFireDatabaseModule)();
      },
      providers: [AngularFireDatabase]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AngularFireDatabaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [AngularFireDatabase]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-fire-database.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
    \**********************************************************************************/

  /*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, createStorageRef, createUploadTask, fromTask */

  /***/
  function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireStorageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function () {
      return AngularFireStorage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function () {
      return AngularFireStorageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BUCKET", function () {
      return BUCKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createStorageRef", function () {
      return createStorageRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUploadTask", function () {
      return createUploadTask;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromTask", function () {
      return fromTask;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/storage */
    "./node_modules/firebase/storage/dist/index.esm.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} task
     * @return {?}
     */


    function fromTask(task) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        /** @type {?} */
        var progress =
        /**
        * @param {?} snap
        * @return {?}
        */
        function progress(snap) {
          return subscriber.next(snap);
        };
        /** @type {?} */


        var error =
        /**
        * @param {?} e
        * @return {?}
        */
        function error(e) {
          return subscriber.error(e);
        };
        /** @type {?} */


        var complete =
        /**
        * @return {?}
        */
        function complete() {
          return subscriber.complete();
        };

        task.on('state_changed', progress, error, complete);
        return (
          /**
          * @return {?}
          */
          function () {
            return task.cancel();
          }
        );
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function AngularFireUploadTask() {}

    if (false) {}
    /**
     * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
     * This method creates an observable of the upload and returns on object that provides
     * multiple methods for controlling and monitoring the file upload.
     * @param {?} task
     * @return {?}
     */


    function createUploadTask(task) {
      /** @type {?} */
      var inner$ = fromTask(task);
      return {
        task: task,
        then: task.then.bind(task),
        "catch": task["catch"].bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges:
        /**
        * @return {?}
        */
        function snapshotChanges() {
          return inner$;
        },
        percentageChanges:
        /**
        * @return {?}
        */
        function percentageChanges() {
          return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s.bytesTransferred / s.totalBytes * 100;
          }));
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function AngularFireStorageReference() {}

    if (false) {}
    /**
     * Create an AngularFire wrapped Storage Reference. This object
     * creates observable methods from promise based methods.
     * @param {?} ref
     * @param {?} schedulers
     * @param {?} keepUnstableUntilFirst
     * @return {?}
     */


    function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
      return {
        getDownloadURL:
        /**
        * @return {?}
        */
        function getDownloadURL() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return ref.getDownloadURL();
          }), keepUnstableUntilFirst);
        },
        getMetadata:
        /**
        * @return {?}
        */
        function getMetadata() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return ref.getMetadata();
          }), keepUnstableUntilFirst);
        },
        "delete":
        /**
        * @return {?}
        */
        function _delete() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref["delete"]());
        },
        child:
        /**
        * @param {?} path
        * @return {?}
        */
        function child(path) {
          return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
        },
        updateMetadata:
        /**
        * @param {?} meta
        * @return {?}
        */
        function updateMetadata(meta) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.updateMetadata(meta));
        },
        put:
        /**
        * @param {?} data
        * @param {?=} metadata
        * @return {?}
        */
        function put(data, metadata) {
          /** @type {?} */
          var task = ref.put(data, metadata);
          return createUploadTask(task);
        },
        putString:
        /**
        * @param {?} data
        * @param {?=} format
        * @param {?=} metadata
        * @return {?}
        */
        function putString(data, format, metadata) {
          /** @type {?} */
          var task = ref.putString(data, format, metadata);
          return createUploadTask(task);
        },
        listAll:
        /**
        * @return {?}
        */
        function listAll() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(ref.listAll());
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.storageBucket');
    /**
     * AngularFireStorage Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for uploading and downloading binary files from Cloud Storage for
     * Firebase.
     */

    var AngularFireStorage = /*#__PURE__*/function () {
      /**
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} storageBucket
       * @param {?} platformId
       * @param {?} zone
       */
      function AngularFireStorage(options, nameOrConfig, storageBucket, // tslint:disable-next-line:ban-types
      platformId, zone) {
        _classCallCheck(this, AngularFireStorage);

        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["??AngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??keepUnstableUntilFirstFactory"])(this.schedulers);
        this.storage = zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["??firebaseAppFactory"])(options, zone, nameOrConfig);
          return app.storage(storageBucket || undefined);
        });
      }
      /**
       * @param {?} path
       * @return {?}
       */


      _createClass(AngularFireStorage, [{
        key: "ref",
        value: function ref(path) {
          return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
        }
        /**
         * @param {?} path
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */

      }, {
        key: "upload",
        value: function upload(path, data, metadata) {
          /** @type {?} */
          var storageRef = this.storage.ref(path);
          /** @type {?} */

          var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
          return ref.put(data, metadata);
        }
      }]);

      return AngularFireStorage;
    }();

    AngularFireStorage.??fac = function AngularFireStorage_Factory(t) {
      return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
    };
    /** @nocollapse */


    AngularFireStorage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [BUCKET]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };
    /** @nocollapse */


    AngularFireStorage.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"])({
      factory: function AngularFireStorage_Factory() {
        return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
      },
      token: AngularFireStorage,
      providedIn: "any"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AngularFireStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'any'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [BUCKET]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularFireStorageModule = function AngularFireStorageModule() {
      _classCallCheck(this, AngularFireStorageModule);
    };

    AngularFireStorageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
      type: AngularFireStorageModule
    });
    AngularFireStorageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
      factory: function AngularFireStorageModule_Factory(t) {
        return new (t || AngularFireStorageModule)();
      },
      providers: [AngularFireStorage]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AngularFireStorageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          providers: [AngularFireStorage]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-fire-storage.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js ***!
    \**************************************************************************/

  /*! exports provided: AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp, VERSION, ??AngularFireSchedulers, ??BlockUntilFirstOperator, ??ZoneScheduler, ??firebaseAppFactory, ??keepUnstableUntilFirstFactory, ??lazySDKProxy */

  /***/
  function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFireModule", function () {
      return AngularFireModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function () {
      return FIREBASE_APP_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function () {
      return FIREBASE_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseApp", function () {
      return FirebaseApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??AngularFireSchedulers", function () {
      return ??AngularFireSchedulers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??BlockUntilFirstOperator", function () {
      return ??BlockUntilFirstOperator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??ZoneScheduler", function () {
      return ??ZoneScheduler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??firebaseAppFactory", function () {
      return ??firebaseAppFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??keepUnstableUntilFirstFactory", function () {
      return ??keepUnstableUntilFirstFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "??lazySDKProxy", function () {
      return ??lazySDKProxy;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function noop() {}
    /**
     * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
     */
    // tslint:disable-next-line:class-name


    var ??ZoneScheduler = /*#__PURE__*/function () {
      /**
       * @param {?} zone
       * @param {?=} delegate
       */
      function ??ZoneScheduler(zone) {
        var delegate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"];

        _classCallCheck(this, ??ZoneScheduler);

        this.zone = zone;
        this.delegate = delegate;
      }
      /**
       * @return {?}
       */


      _createClass(??ZoneScheduler, [{
        key: "now",
        value: function now() {
          return this.delegate.now();
        }
        /**
         * @param {?} work
         * @param {?=} delay
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "schedule",
        value: function schedule(work, delay, state) {
          /** @type {?} */
          var targetZone = this.zone; // Wrap the specified work function to make sure that if nested scheduling takes place the
          // work is executed in the correct zone

          /** @type {?} */

          var workInZone =
          /**
          * @this {?}
          * @param {?} state
          * @return {?}
          */
          function workInZone(state) {
            var _this2 = this;

            targetZone.runGuarded(
            /**
            * @return {?}
            */
            function () {
              work.apply(_this2, [state]);
            });
          }; // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
          // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
          // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.


          return this.delegate.schedule(workInZone, delay, state);
        }
      }]);

      return ??ZoneScheduler;
    }();

    if (false) {} // tslint:disable-next-line:class-name

    /**
     * @template T
     */


    var ??BlockUntilFirstOperator = /*#__PURE__*/function () {
      /**
       * @param {?} zone
       */
      function ??BlockUntilFirstOperator(zone) {
        _classCallCheck(this, ??BlockUntilFirstOperator);

        this.zone = zone;
        this.task = null;
      }
      /**
       * @param {?} subscriber
       * @param {?} source
       * @return {?}
       */


      _createClass(??BlockUntilFirstOperator, [{
        key: "call",
        value: function call(subscriber, source) {
          /** @type {?} */
          var unscheduleTask = this.unscheduleTask.bind(this);
          this.task = this.zone.run(
          /**
          * @return {?}
          */
          function () {
            return Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop);
          });
          return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({
            next: unscheduleTask,
            complete: unscheduleTask,
            error: unscheduleTask
          })).subscribe(subscriber).add(unscheduleTask);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unscheduleTask",
        value: function unscheduleTask() {
          var _this3 = this;

          // maybe this is a race condition, invoke in a timeout
          // hold for 10ms while I try to figure out what is going on
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this3.task != null && _this3.task.state === 'scheduled') {
              _this3.task.invoke();

              _this3.task = null;
            }
          }, 10);
        }
      }]);

      return ??BlockUntilFirstOperator;
    }();

    if (false) {} // tslint:disable-next-line:class-name


    var ??AngularFireSchedulers =
    /**
     * @param {?} ngZone
     */
    function ??AngularFireSchedulers(ngZone) {
      _classCallCheck(this, ??AngularFireSchedulers);

      this.ngZone = ngZone;
      this.outsideAngular = ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return new ??ZoneScheduler(Zone.current);
      });
      this.insideAngular = ngZone.run(
      /**
      * @return {?}
      */
      function () {
        return new ??ZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]);
      });
    };

    if (false) {}
    /**
     * Operator to block the zone until the first value has been emitted or the observable
     * has completed/errored. This is used to make sure that universal waits until the first
     * value from firebase but doesn't block the zone forever since the firebase subscription
     * is still alive.
     * @param {?} schedulers
     * @return {?}
     */


    function ??keepUnstableUntilFirstFactory(schedulers) {
      return (
        /**
        * @template T
        * @param {?} obs$
        * @return {?}
        */
        function keepUnstableUntilFirst(obs$) {
          obs$ = obs$.lift(new ??BlockUntilFirstOperator(schedulers.ngZone));
          return obs$.pipe( // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["subscribeOn"])(schedulers.outsideAngular), // Run operators inside the angular zone (e.g. side effects via tap())
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.insideAngular) // INVESTIGATE https://github.com/angular/angularfire/pull/2315
          // share()
          );
        }
      );
    } // DEBUG quick debugger function for inline logging that typescript doesn't complain about
    //       wrote it for debugging the ??lazySDKProxy, commenting out for now; should consider exposing a
    //       verbose mode for AngularFire in a future release that uses something like this in multiple places
    //       usage: () => log('something') || returnValue
    // const log = (...args: any[]): false => { console.log(...args); return false }
    // The problem here are things like ngOnDestroy are missing, then triggering the service
    // rather than dig too far; I'm capturing these as I go.

    /** @type {?} */


    var noopFunctions = ['ngOnDestroy']; // INVESTIGATE should we make the Proxy revokable and do some cleanup?
    //             right now it's fairly simple but I'm sure this will grow in complexity

    /** @type {?} */

    var ??lazySDKProxy =
    /**
    * @param {?} klass
    * @param {?} observable
    * @param {?} zone
    * @return {?}
    */
    function ??lazySDKProxy(klass, observable, zone) {
      return new Proxy(klass, {
        get:
        /**
        * @param {?} _
        * @param {?} name
        * @return {?}
        */
        function get(_, name) {
          return zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (klass[name]) {
              return klass[name];
            }

            if (noopFunctions.includes(name)) {
              return (
                /**
                * @return {?}
                */
                function () {}
              );
            }
            /** @type {?} */


            var promise = observable.toPromise().then(
            /**
            * @param {?} mod
            * @return {?}
            */
            function (mod) {
              /** @type {?} */
              var ret = mod && mod[name]; // TODO move to proper type guards

              if (typeof ret === 'function') {
                return ret.bind(mod);
              } else if (ret && ret.then) {
                return ret.then(
                /**
                * @param {?} res
                * @return {?}
                */
                function (res) {
                  return zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return res;
                  });
                });
              } else {
                return zone.run(
                /**
                * @return {?}
                */
                function () {
                  return ret;
                });
              }
            }); // recurse the proxy

            return new Proxy(
            /**
            * @return {?}
            */
            function () {
              return undefined;
            }, {
              get:
              /**
              * @param {?} _
              * @param {?} name
              * @return {?}
              */
              function get(_, name) {
                return promise[name];
              },
              // TODO handle callbacks as transparently as I can
              apply:
              /**
              * @param {?} self
              * @param {?} _
              * @param {?} args
              * @return {?}
              */
              function apply(self, _, args) {
                return promise.then(
                /**
                * @param {?} it
                * @return {?}
                */
                function (it) {
                  return it && it.apply(void 0, _toConsumableArray(args));
                });
              }
            });
          });
        }
      });
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function FirebaseOptions() {}
    /**
     * @record
     */


    function FirebaseAppConfig() {}
    /** @type {?} */


    var FIREBASE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.options');
    /** @type {?} */

    var FIREBASE_APP_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.nameOrConfig'); // Have to implement as we need to return a class from the provider, we should consider exporting
    // this in the firebase/app types as this is our highest risk of breaks

    var FirebaseApp = function FirebaseApp() {
      _classCallCheck(this, FirebaseApp);
    };

    if (false) {}
    /** @type {?} */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Version"]('6.0.2');
    /**
     * @param {?} options
     * @param {?} zone
     * @param {?=} nameOrConfig
     * @return {?}
     */

    function ??firebaseAppFactory(options, zone, nameOrConfig) {
      /** @type {?} */
      var name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
      /** @type {?} */

      var config = typeof nameOrConfig === 'object' && nameOrConfig || {};
      config.name = config.name || name; // Added any due to some inconsistency between @firebase/app and firebase types

      /** @type {?} */

      var existingApp =
      /** @type {?} */
      firebase_app__WEBPACK_IMPORTED_MODULE_3__["apps"].filter(
      /**
      * @param {?} app
      * @return {?}
      */
      function (app) {
        return app && app.name === config.name;
      })[0]; // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
      // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206

      return (
        /** @type {?} */
        existingApp || zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          return Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["initializeApp"])(options,
          /** @type {?} */
          config);
        })
      );
    }
    /** @type {?} */


    var FIREBASE_APP_PROVIDER = {
      provide: FirebaseApp,
      useFactory: ??firebaseAppFactory,
      deps: [FIREBASE_OPTIONS, _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), FIREBASE_APP_NAME]]
    };

    var AngularFireModule = /*#__PURE__*/function () {
      // tslint:disable-next-line:ban-types

      /**
       * @param {?} platformId
       */
      function AngularFireModule(platformId) {
        _classCallCheck(this, AngularFireModule);

        Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["registerVersion"])('angularfire', VERSION.full, platformId.toString());
        Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["registerVersion"])('angular', _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full);
      }
      /**
       * @param {?} options
       * @param {?=} nameOrConfig
       * @return {?}
       */


      _createClass(AngularFireModule, null, [{
        key: "initializeApp",
        value: function initializeApp(options, nameOrConfig) {
          return {
            ngModule: AngularFireModule,
            providers: [{
              provide: FIREBASE_OPTIONS,
              useValue: options
            }, {
              provide: FIREBASE_APP_NAME,
              useValue: nameOrConfig
            }]
          };
        }
      }]);

      return AngularFireModule;
    }();

    AngularFireModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
      type: AngularFireModule
    });
    AngularFireModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
      factory: function AngularFireModule_Factory(t) {
        return new (t || AngularFireModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]));
      },
      providers: [FIREBASE_APP_PROVIDER]
    });
    /** @nocollapse */

    AngularFireModule.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AngularFireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          providers: [FIREBASE_APP_PROVIDER]
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-fire.js.map

    /***/

  },

  /***/
  "./node_modules/@firebase/app/dist/index.cjs.js":
  /*!******************************************************!*\
    !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseAppDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var tslib = __webpack_require__(
    /*! tslib */
    "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");

    var util = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");

    var component = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");

    var logger$1 = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js");
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var _a;

    var ERRORS = (_a = {}, _a["no-app"
    /* NO_APP */
    ] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
    /* BAD_APP_NAME */
    ] = "Illegal App name: '{$appName}", _a["duplicate-app"
    /* DUPLICATE_APP */
    ] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
    /* APP_DELETED */
    ] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
    /* INVALID_APP_ARGUMENT */
    ] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
    /* INVALID_LOG_ARGUMENT */
    ] = 'First argument to `onLog` must be null or a function.', _a);
    var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);
    var name$1 = "@firebase/app";
    var version = "0.6.9";
    var name$2 = "@firebase/analytics";
    var name$3 = "@firebase/auth";
    var name$4 = "@firebase/database";
    var name$5 = "@firebase/functions";
    var name$6 = "@firebase/installations";
    var name$7 = "@firebase/messaging";
    var name$8 = "@firebase/performance";
    var name$9 = "@firebase/remote-config";
    var name$a = "@firebase/storage";
    var name$b = "@firebase/firestore";
    var name$c = "firebase-wrapper";
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var _a$1;

    var DEFAULT_ENTRY_NAME = '[DEFAULT]';
    var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = 'fire-core', _a$1[name$2] = 'fire-analytics', _a$1[name$3] = 'fire-auth', _a$1[name$4] = 'fire-rtdb', _a$1[name$5] = 'fire-fn', _a$1[name$6] = 'fire-iid', _a$1[name$7] = 'fire-fcm', _a$1[name$8] = 'fire-perf', _a$1[name$9] = 'fire-rc', _a$1[name$a] = 'fire-gcs', _a$1[name$b] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$c] = 'fire-js-all', _a$1);
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var logger = new logger$1.Logger('@firebase/app');
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Global context object for a collection of services using
     * a shared authentication state.
     */

    var FirebaseAppImpl =
    /** @class */
    function () {
      function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;

        var _this = this;

        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name); // add itself to container

        this._addComponent(new component.Component('app', function () {
          return _this;
        }, "PUBLIC"
        /* PUBLIC */
        ));

        try {
          // populate ComponentContainer with existing components
          for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;

            this._addComponent(component$1);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }

      Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function get() {
          this.checkDestroyed_();
          return this.automaticDataCollectionEnabled_;
        },
        set: function set(val) {
          this.checkDestroyed_();
          this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function get() {
          this.checkDestroyed_();
          return this.name_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function get() {
          this.checkDestroyed_();
          return this.options_;
        },
        enumerable: false,
        configurable: true
      });

      FirebaseAppImpl.prototype["delete"] = function () {
        var _this = this;

        return new Promise(function (resolve) {
          _this.checkDestroyed_();

          resolve();
        }).then(function () {
          _this.firebase_.INTERNAL.removeApp(_this.name_);

          return Promise.all(_this.container.getProviders().map(function (provider) {
            return provider["delete"]();
          }));
        }).then(function () {
          _this.isDeleted_ = true;
        });
      };
      /**
       * Return a service instance associated with this app (creating it
       * on demand), identified by the passed instanceIdentifier.
       *
       * NOTE: Currently storage and functions are the only ones that are leveraging this
       * functionality. They invoke it by calling:
       *
       * ```javascript
       * firebase.app().storage('STORAGE BUCKET ID')
       * ```
       *
       * The service name is passed to this already
       * @internal
       */


      FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) {
          instanceIdentifier = DEFAULT_ENTRY_NAME;
        }

        this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

        return this.container.getProvider(name).getImmediate({
          identifier: instanceIdentifier
        });
      };
      /**
       * Remove a service instance from the cache, so we will create a new instance for this service
       * when people try to get this service again.
       *
       * NOTE: currently only firestore is using this functionality to support firestore shutdown.
       *
       * @param name The service name
       * @param instanceIdentifier instance identifier in case multiple instances are allowed
       * @internal
       */


      FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) {
          instanceIdentifier = DEFAULT_ENTRY_NAME;
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any


        this.container.getProvider(name).clearInstance(instanceIdentifier);
      };
      /**
       * @param component the component being added to this app's container
       */


      FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
          this.container.addComponent(component);
        } catch (e) {
          logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
      };

      FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
      };
      /**
       * This function will throw an Error if the App has already been deleted -
       * use before performing API actions on the App.
       */


      FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
          throw ERROR_FACTORY.create("app-deleted"
          /* APP_DELETED */
          , {
            appName: this.name_
          });
        }
      };

      return FirebaseAppImpl;
    }(); // Prevent dead-code elimination of these methods w/o invalid property
    // copying.


    FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype["delete"] || console.log('dc');
    var version$1 = "7.17.1";
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Because auth can't share code with other components, we attach the utility functions
     * in an internal namespace to share code.
     * This function return a firebase namespace object without
     * any utility functions, so it can be shared between the regular firebaseNamespace and
     * the lite version.
     */

    function createFirebaseNamespaceCore(firebaseAppImpl) {
      var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var components = new Map(); // A namespace is a plain JavaScript Object.

      var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
          registerComponent: registerComponent,
          removeApp: removeApp,
          components: components,
          useAsService: useAsService
        }
      }; // Inject a circular default export to allow Babel users who were previously
      // using:
      //
      //   import firebase from 'firebase';
      //   which becomes: var firebase = require('firebase').default;
      //
      // instead of
      //
      //   import * as firebase from 'firebase';
      //   which becomes: var firebase = require('firebase');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      namespace['default'] = namespace; // firebase.apps is a read-only getter.

      Object.defineProperty(namespace, 'apps', {
        get: getApps
      });
      /**
       * Called by App.delete() - but before any services associated with the App
       * are deleted.
       */

      function removeApp(name) {
        delete apps[name];
      }
      /**
       * Get the App object for a given name (or DEFAULT).
       */


      function app(name) {
        name = name || DEFAULT_ENTRY_NAME;

        if (!util.contains(apps, name)) {
          throw ERROR_FACTORY.create("no-app"
          /* NO_APP */
          , {
            appName: name
          });
        }

        return apps[name];
      } // @ts-ignore


      app['App'] = firebaseAppImpl;

      function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) {
          rawConfig = {};
        }

        if (typeof rawConfig !== 'object' || rawConfig === null) {
          var name_1 = rawConfig;
          rawConfig = {
            name: name_1
          };
        }

        var config = rawConfig;

        if (config.name === undefined) {
          config.name = DEFAULT_ENTRY_NAME;
        }

        var name = config.name;

        if (typeof name !== 'string' || !name) {
          throw ERROR_FACTORY.create("bad-app-name"
          /* BAD_APP_NAME */
          , {
            appName: String(name)
          });
        }

        if (util.contains(apps, name)) {
          throw ERROR_FACTORY.create("duplicate-app"
          /* DUPLICATE_APP */
          , {
            appName: name
          });
        }

        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
      }
      /*
       * Return an array of all the non-deleted FirebaseApps.
       */


      function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) {
          return apps[name];
        });
      }

      function registerComponent(component) {
        var e_1, _a;

        var componentName = component.name;

        if (components.has(componentName)) {
          logger.debug("There were multiple attempts to register component " + componentName + ".");
          return component.type === "PUBLIC"
          /* PUBLIC */
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          namespace[componentName] : null;
        }

        components.set(componentName, component); // create service namespace for public components

        if (component.type === "PUBLIC"
        /* PUBLIC */
        ) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function serviceNamespace(appArg) {
              if (appArg === void 0) {
                appArg = app();
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any


              if (typeof appArg[componentName] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                throw ERROR_FACTORY.create("invalid-app-argument"
                /* INVALID_APP_ARGUMENT */
                , {
                  appName: componentName
                });
              } // Forward service instance lookup to the FirebaseApp.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any


              return appArg[componentName]();
            }; // ... and a container for service-level properties.


            if (component.serviceProps !== undefined) {
              util.deepExtend(serviceNamespace, component.serviceProps);
            } // eslint-disable-next-line @typescript-eslint/no-explicit-any


            namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any

            firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
            // option added to the no-explicit-any rule when ESlint releases it.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              var serviceFxn = this._getService.bind(this, componentName);

              return serviceFxn.apply(this, component.multipleInstances ? args : []);
            };
          }

        try {
          // add the component to existing app instances
          for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var appName = _c.value;

            apps[appName]._addComponent(component);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return component.type === "PUBLIC"
        /* PUBLIC */
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        namespace[componentName] : null;
      }

      function registerVersion(libraryKeyOrName, version, variant) {
        var _a; // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.


        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

        if (variant) {
          library += "-" + variant;
        }

        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);

        if (libraryMismatch || versionMismatch) {
          var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

          if (libraryMismatch) {
            warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
          }

          if (libraryMismatch && versionMismatch) {
            warning.push('and');
          }

          if (versionMismatch) {
            warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
          }

          logger.warn(warning.join(' '));
          return;
        }

        registerComponent(new component.Component(library + "-version", function () {
          return {
            library: library,
            version: version
          };
        }, "VERSION"
        /* VERSION */
        ));
      }

      function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
          throw ERROR_FACTORY.create("invalid-log-argument"
          /* INVALID_LOG_ARGUMENT */
          , {
            appName: name
          });
        }

        logger$1.setUserLogHandler(logCallback, options);
      } // Map the requested service to a registered service name
      // (used to map auth to serverAuth service when needed).


      function useAsService(app, name) {
        if (name === 'serverAuth') {
          return null;
        }

        var useService = name;
        return useService;
      }

      return namespace;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Return a firebase namespace object.
     *
     * In production, this will be called exactly once and the result
     * assigned to the 'firebase' global.  It may be called multiple times
     * in unit tests.
     */


    function createFirebaseNamespace() {
      var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
      namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), {
        createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend
      });
      /**
       * Patch the top-level firebase namespace with additional properties.
       *
       * firebase.INTERNAL.extendNamespace()
       */

      function extendNamespace(props) {
        util.deepExtend(namespace, props);
      }

      return namespace;
    }

    var firebase = createFirebaseNamespace();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var PlatformLoggerService =
    /** @class */
    function () {
      function PlatformLoggerService(container) {
        this.container = container;
      } // In initial implementation, this will be called by installations on
      // auth token refresh, and installations will send this string.


      PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
        // version components.

        return providers.map(function (provider) {
          if (isVersionServiceProvider(provider)) {
            var service = provider.getImmediate();
            return service.library + "/" + service.version;
          } else {
            return null;
          }
        }).filter(function (logString) {
          return logString;
        }).join(' ');
      };

      return PlatformLoggerService;
    }();
    /**
     *
     * @param provider check if this provider provides a VersionService
     *
     * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
     * provides VersionService. The provider is not necessarily a 'app-version'
     * provider.
     */


    function isVersionServiceProvider(provider) {
      var component = provider.getComponent();
      return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
      /* VERSION */
      ;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function registerCoreComponents(firebase, variant) {
      firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) {
        return new PlatformLoggerService(container);
      }, "PRIVATE"
      /* PRIVATE */
      )); // Register `app` package.

      firebase.registerVersion(name$1, version, variant); // Register platform SDK identifier (no version).

      firebase.registerVersion('fire-js', '');
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Firebase Lite detection test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    if (util.isBrowser() && self.firebase !== undefined) {
      logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

      var sdkVersion = self.firebase.SDK_VERSION;

      if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
      }
    }

    var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    firebase.initializeApp = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      } // Environment check before initializing app
      // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
      // in @firebase/logger


      if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
      }

      return initializeApp.apply(undefined, args);
    };

    var firebase$1 = firebase;
    registerCoreComponents(firebase$1);
    exports["default"] = firebase$1;
    exports.firebase = firebase$1; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/component/dist/index.cjs.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseComponentDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var tslib = __webpack_require__(
    /*! tslib */
    "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");

    var util = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");
    /**
     * Component for service name T, e.g. `auth`, `auth-internal`
     */


    var Component =
    /** @class */
    function () {
      /**
       *
       * @param name The public service name, e.g. app, auth, firestore, database
       * @param instanceFactory Service factory responsible for creating the public interface
       * @param type whether the service provided by the component is public or private
       */
      function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */

        this.serviceProps = {};
        this.instantiationMode = "LAZY"
        /* LAZY */
        ;
      }

      Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
      };

      Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
      };

      Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
      };

      return Component;
    }();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_ENTRY_NAME = '[DEFAULT]';
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
     * NameServiceMapping[T] is an alias for the type of the instance
     */

    var Provider =
    /** @class */
    function () {
      function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
      }
      /**
       * @param identifier A provider can provide mulitple instances of a service
       * if this.component.multipleInstances is true.
       */


      Provider.prototype.get = function (identifier) {
        if (identifier === void 0) {
          identifier = DEFAULT_ENTRY_NAME;
        } // if multipleInstances is not supported, use the default name


        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

        if (!this.instancesDeferred.has(normalizedIdentifier)) {
          var deferred = new util.Deferred();
          this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

          try {
            var instance = this.getOrInitializeService(normalizedIdentifier);

            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {// when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
          }
        }

        return this.instancesDeferred.get(normalizedIdentifier).promise;
      };

      Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({
          identifier: DEFAULT_ENTRY_NAME,
          optional: false
        }, options),
            identifier = _a.identifier,
            optional = _a.optional; // if multipleInstances is not supported, use the default name


        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);

          if (!instance) {
            if (optional) {
              return null;
            }

            throw Error("Service " + this.name + " is not available");
          }

          return instance;
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      };

      Provider.prototype.getComponent = function () {
        return this.component;
      };

      Provider.prototype.setComponent = function (component) {
        var e_1, _a;

        if (component.name !== this.name) {
          throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }

        if (this.component) {
          throw Error("Component for " + this.name + " has already been provided");
        }

        this.component = component; // if the service is eager, initialize the default instance

        if (isComponentEager(component)) {
          try {
            this.getOrInitializeService(DEFAULT_ENTRY_NAME);
          } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
            // initialization, it should not cause a fatal error.
            // TODO: Investigate if we need to make it configurable, because some component may want to cause
            // a fatal error in this case?
          }
        }

        try {
          // Create service instances for the pending promises and resolve them
          // NOTE: if this.multipleInstances is false, only the default instance will be created
          // and all promises with resolve with it regardless of the identifier.
          for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib.__read(_c.value, 2),
                instanceIdentifier = _d[0],
                instanceDeferred = _d[1];

            var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

            try {
              // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
              var instance = this.getOrInitializeService(normalizedIdentifier);
              instanceDeferred.resolve(instance);
            } catch (e) {// when the instance factory throws an exception, it should not cause
              // a fatal error. We just leave the promise unresolved.
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };

      Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) {
          identifier = DEFAULT_ENTRY_NAME;
        }

        this.instancesDeferred["delete"](identifier);
        this.instances["delete"](identifier);
      }; // app.delete() will call this method on every provider to delete the services
      // TODO: should we mark the provider as deleted?


      Provider.prototype["delete"] = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var services;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                services = Array.from(this.instances.values());
                return [4
                /*yield*/
                , Promise.all(services.filter(function (service) {
                  return 'INTERNAL' in service;
                }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(function (service) {
                  return service.INTERNAL["delete"]();
                }))];

              case 1:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      };

      Provider.prototype.isComponentSet = function () {
        return this.component != null;
      };

      Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);

        if (!instance && this.component) {
          instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
          this.instances.set(identifier, instance);
        }

        return instance || null;
      };

      Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
          return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
          return identifier; // assume multiple instances are supported before the component is provided.
        }
      };

      return Provider;
    }(); // undefined should be passed to the service factory for the default instance


    function normalizeIdentifierForFactory(identifier) {
      return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
    }

    function isComponentEager(component) {
      return component.instantiationMode === "EAGER"
      /* EAGER */
      ;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
     */


    var ComponentContainer =
    /** @class */
    function () {
      function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
      }
      /**
       *
       * @param component Component being added
       * @param overwrite When a component with the same name has already been registered,
       * if overwrite is true: overwrite the existing component with the new component and create a new
       * provider with the new component. It can be useful in tests where you want to use different mocks
       * for different tests.
       * if overwrite is false: throw an exception
       */


      ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);

        if (provider.isComponentSet()) {
          throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }

        provider.setComponent(component);
      };

      ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);

        if (provider.isComponentSet()) {
          // delete the existing provider from the container, so we can register the new component
          this.providers["delete"](component.name);
        }

        this.addComponent(component);
      };
      /**
       * getProvider provides a type safe interface where it can only be called with a field name
       * present in NameServiceMapping interface.
       *
       * Firebase SDKs providing services should extend NameServiceMapping interface to register
       * themselves.
       */


      ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
          return this.providers.get(name);
        } // create a Provider for a service that hasn't registered with Firebase


        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
      };

      ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      };

      return ComponentContainer;
    }();

    exports.Component = Component;
    exports.ComponentContainer = ComponentContainer;
    exports.Provider = Provider; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/database/dist/index.cjs.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@firebase/database/dist/index.cjs.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseDatabaseDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */

    (function (process) {
      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
      }

      var firebase = _interopDefault(__webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js"));

      var tslib = __webpack_require__(
      /*! tslib */
      "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");

      var util = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");

      var logger$1 = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");

      var component = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Wraps a DOM Storage object and:
       * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
       * - prefixes names with "firebase:" to avoid collisions with app data.
       *
       * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
       * and one for localStorage.
       *
       * @constructor
       */


      var DOMStorageWrapper =
      /** @class */
      function () {
        /**
         * @param {Storage} domStorage_ The underlying storage object (e.g. localStorage or sessionStorage)
         */
        function DOMStorageWrapper(domStorage_) {
          this.domStorage_ = domStorage_; // Use a prefix to avoid collisions with other stuff saved by the app.

          this.prefix_ = 'firebase:';
        }
        /**
         * @param {string} key The key to save the value under
         * @param {?Object} value The value being stored, or null to remove the key.
         */


        DOMStorageWrapper.prototype.set = function (key, value) {
          if (value == null) {
            this.domStorage_.removeItem(this.prefixedName_(key));
          } else {
            this.domStorage_.setItem(this.prefixedName_(key), util.stringify(value));
          }
        };
        /**
         * @param {string} key
         * @return {*} The value that was stored under this key, or null
         */


        DOMStorageWrapper.prototype.get = function (key) {
          var storedVal = this.domStorage_.getItem(this.prefixedName_(key));

          if (storedVal == null) {
            return null;
          } else {
            return util.jsonEval(storedVal);
          }
        };
        /**
         * @param {string} key
         */


        DOMStorageWrapper.prototype.remove = function (key) {
          this.domStorage_.removeItem(this.prefixedName_(key));
        };
        /**
         * @param {string} name
         * @return {string}
         */


        DOMStorageWrapper.prototype.prefixedName_ = function (name) {
          return this.prefix_ + name;
        };

        DOMStorageWrapper.prototype.toString = function () {
          return this.domStorage_.toString();
        };

        return DOMStorageWrapper;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An in-memory storage implementation that matches the API of DOMStorageWrapper
       * (TODO: create interface for both to implement).
       *
       * @constructor
       */


      var MemoryStorage =
      /** @class */
      function () {
        function MemoryStorage() {
          this.cache_ = {};
          this.isInMemoryStorage = true;
        }

        MemoryStorage.prototype.set = function (key, value) {
          if (value == null) {
            delete this.cache_[key];
          } else {
            this.cache_[key] = value;
          }
        };

        MemoryStorage.prototype.get = function (key) {
          if (util.contains(this.cache_, key)) {
            return this.cache_[key];
          }

          return null;
        };

        MemoryStorage.prototype.remove = function (key) {
          delete this.cache_[key];
        };

        return MemoryStorage;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
       * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
       * to reflect this type
       *
       * @param {string} domStorageName Name of the underlying storage object
       *   (e.g. 'localStorage' or 'sessionStorage').
       * @return {?} Turning off type information until a common interface is defined.
       */


      var createStoragefor = function createStoragefor(domStorageName) {
        try {
          // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
          // so it must be inside the try/catch.
          if (typeof window !== 'undefined' && typeof window[domStorageName] !== 'undefined') {
            // Need to test cache. Just because it's here doesn't mean it works
            var domStorage = window[domStorageName];
            domStorage.setItem('firebase:sentinel', 'cache');
            domStorage.removeItem('firebase:sentinel');
            return new DOMStorageWrapper(domStorage);
          }
        } catch (e) {} // Failed to create wrapper.  Just return in-memory storage.
        // TODO: log?


        return new MemoryStorage();
      };
      /** A storage object that lasts across sessions */


      var PersistentStorage = createStoragefor('localStorage');
      /** A storage object that only lasts one session */

      var SessionStorage = createStoragefor('sessionStorage');
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var logClient = new logger$1.Logger('@firebase/database');
      /**
       * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
       * @type {function(): number} Generated ID.
       */

      var LUIDGenerator = function () {
        var id = 1;
        return function () {
          return id++;
        };
      }();
      /**
       * Sha1 hash of the input string
       * @param {!string} str The string to hash
       * @return {!string} The resulting hash
       */


      var sha1 = function sha1(str) {
        var utf8Bytes = util.stringToByteArray(str);
        var sha1 = new util.Sha1();
        sha1.update(utf8Bytes);
        var sha1Bytes = sha1.digest();
        return util.base64.encodeByteArray(sha1Bytes);
      };
      /**
       * @param {...*} varArgs
       * @return {string}
       * @private
       */


      var buildLogMessage_ = function buildLogMessage_() {
        var varArgs = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          varArgs[_i] = arguments[_i];
        }

        var message = '';

        for (var i = 0; i < varArgs.length; i++) {
          var arg = varArgs[i];

          if (Array.isArray(arg) || arg && typeof arg === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeof arg.length === 'number') {
            message += buildLogMessage_.apply(null, arg);
          } else if (typeof arg === 'object') {
            message += util.stringify(arg);
          } else {
            message += arg;
          }

          message += ' ';
        }

        return message;
      };
      /**
       * Use this for all debug messages in Firebase.
       * @type {?function(string)}
       */


      var logger = null;
      /**
       * Flag to check for log availability on first log message
       * @type {boolean}
       * @private
       */

      var firstLog_ = true;
      /**
       * The implementation of Firebase.enableLogging (defined here to break dependencies)
       * @param {boolean|?function(string)} logger_ A flag to turn on logging, or a custom logger
       * @param {boolean=} persistent Whether or not to persist logging settings across refreshes
       */

      var enableLogging = function enableLogging(logger_, persistent) {
        util.assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");

        if (logger_ === true) {
          logClient.logLevel = logger$1.LogLevel.VERBOSE;
          logger = logClient.log.bind(logClient);

          if (persistent) {
            SessionStorage.set('logging_enabled', true);
          }
        } else if (typeof logger_ === 'function') {
          logger = logger_;
        } else {
          logger = null;
          SessionStorage.remove('logging_enabled');
        }
      };
      /**
       *
       * @param {...(string|Arguments)} varArgs
       */


      var log = function log() {
        var varArgs = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          varArgs[_i] = arguments[_i];
        }

        if (firstLog_ === true) {
          firstLog_ = false;

          if (logger === null && SessionStorage.get('logging_enabled') === true) {
            enableLogging(true);
          }
        }

        if (logger) {
          var message = buildLogMessage_.apply(null, varArgs);
          logger(message);
        }
      };
      /**
       * @param {!string} prefix
       * @return {function(...[*])}
       */


      var logWrapper = function logWrapper(prefix) {
        return function () {
          var varArgs = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            varArgs[_i] = arguments[_i];
          }

          log.apply(void 0, tslib.__spread([prefix], varArgs));
        };
      };
      /**
       * @param {...string} varArgs
       */


      var error = function error() {
        var varArgs = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          varArgs[_i] = arguments[_i];
        }

        var message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.error(message);
      };
      /**
       * @param {...string} varArgs
       */


      var fatal = function fatal() {
        var varArgs = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          varArgs[_i] = arguments[_i];
        }

        var message = "FIREBASE FATAL ERROR: " + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.error(message);
        throw new Error(message);
      };
      /**
       * @param {...*} varArgs
       */


      var warn = function warn() {
        var varArgs = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          varArgs[_i] = arguments[_i];
        }

        var message = 'FIREBASE WARNING: ' + buildLogMessage_.apply(void 0, tslib.__spread(varArgs));
        logClient.warn(message);
      };
      /**
       * Logs a warning if the containing page uses https. Called when a call to new Firebase
       * does not use https.
       */


      var warnIfPageIsSecure = function warnIfPageIsSecure() {
        // Be very careful accessing browser globals. Who knows what may or may not exist.
        if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https:') !== -1) {
          warn('Insecure Firebase access from a secure page. ' + 'Please use https in calls to new Firebase().');
        }
      };
      /**
       * Returns true if data is NaN, or +/- Infinity.
       * @param {*} data
       * @return {boolean}
       */


      var isInvalidJSONNumber = function isInvalidJSONNumber(data) {
        return typeof data === 'number' && (data !== data || // NaN
        data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
      };
      /**
       * @param {function()} fn
       */


      var executeWhenDOMReady = function executeWhenDOMReady(fn) {
        if (util.isNodeSdk() || document.readyState === 'complete') {
          fn();
        } else {
          // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
          // fire before onload), but fall back to onload.
          var called_1 = false;

          var wrappedFn_1 = function wrappedFn_1() {
            if (!document.body) {
              setTimeout(wrappedFn_1, Math.floor(10));
              return;
            }

            if (!called_1) {
              called_1 = true;
              fn();
            }
          };

          if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', wrappedFn_1, false); // fallback to onload.

            window.addEventListener('load', wrappedFn_1, false); // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } else if (document.attachEvent) {
            // IE.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            document.attachEvent('onreadystatechange', function () {
              if (document.readyState === 'complete') {
                wrappedFn_1();
              }
            }); // fallback to onload.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any

            window.attachEvent('onload', wrappedFn_1); // jQuery has an extra hack for IE that we could employ (based on
            // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
            // I'm hoping we don't need it.
          }
        }
      };
      /**
       * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
       * @type {!string}
       */


      var MIN_NAME = '[MIN_NAME]';
      /**
       * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
       * @type {!string}
       */

      var MAX_NAME = '[MAX_NAME]';
      /**
       * Compares valid Firebase key names, plus min and max name
       * @param {!string} a
       * @param {!string} b
       * @return {!number}
       */

      var nameCompare = function nameCompare(a, b) {
        if (a === b) {
          return 0;
        } else if (a === MIN_NAME || b === MAX_NAME) {
          return -1;
        } else if (b === MIN_NAME || a === MAX_NAME) {
          return 1;
        } else {
          var aAsInt = tryParseInt(a),
              bAsInt = tryParseInt(b);

          if (aAsInt !== null) {
            if (bAsInt !== null) {
              return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
            } else {
              return -1;
            }
          } else if (bAsInt !== null) {
            return 1;
          } else {
            return a < b ? -1 : 1;
          }
        }
      };
      /**
       * @param {!string} a
       * @param {!string} b
       * @return {!number} comparison result.
       */


      var stringCompare = function stringCompare(a, b) {
        if (a === b) {
          return 0;
        } else if (a < b) {
          return -1;
        } else {
          return 1;
        }
      };
      /**
       * @param {string} key
       * @param {Object} obj
       * @return {*}
       */


      var requireKey = function requireKey(key, obj) {
        if (obj && key in obj) {
          return obj[key];
        } else {
          throw new Error('Missing required key (' + key + ') in object: ' + util.stringify(obj));
        }
      };
      /**
       * @param {*} obj
       * @return {string}
       */


      var ObjectToUniqueKey = function ObjectToUniqueKey(obj) {
        if (typeof obj !== 'object' || obj === null) {
          return util.stringify(obj);
        }

        var keys = []; // eslint-disable-next-line guard-for-in

        for (var k in obj) {
          keys.push(k);
        } // Export as json, but with the keys sorted.


        keys.sort();
        var key = '{';

        for (var i = 0; i < keys.length; i++) {
          if (i !== 0) {
            key += ',';
          }

          key += util.stringify(keys[i]);
          key += ':';
          key += ObjectToUniqueKey(obj[keys[i]]);
        }

        key += '}';
        return key;
      };
      /**
       * Splits a string into a number of smaller segments of maximum size
       * @param {!string} str The string
       * @param {!number} segsize The maximum number of chars in the string.
       * @return {Array.<string>} The string, split into appropriately-sized chunks
       */


      var splitStringBySize = function splitStringBySize(str, segsize) {
        var len = str.length;

        if (len <= segsize) {
          return [str];
        }

        var dataSegs = [];

        for (var c = 0; c < len; c += segsize) {
          if (c + segsize > len) {
            dataSegs.push(str.substring(c, len));
          } else {
            dataSegs.push(str.substring(c, c + segsize));
          }
        }

        return dataSegs;
      };
      /**
       * Apply a function to each (key, value) pair in an object or
       * apply a function to each (index, value) pair in an array
       * @param obj The object or array to iterate over
       * @param fn The function to apply
       */


      function each(obj, fn) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            fn(key, obj[key]);
          }
        }
      }
      /**
       * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
       * I made one modification at the end and removed the NaN / Infinity
       * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
       * @param {!number} v A double
       * @return {string}
       */


      var doubleToIEEE754String = function doubleToIEEE754String(v) {
        util.assert(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL

        var ebits = 11,
            fbits = 52;
        var bias = (1 << ebits - 1) - 1;
        var s, e, f, ln, i; // Compute sign, exponent, fraction
        // Skip NaN / Infinity handling --MJL.

        if (v === 0) {
          e = 0;
          f = 0;
          s = 1 / v === -Infinity ? 1 : 0;
        } else {
          s = v < 0;
          v = Math.abs(v);

          if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
          } else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
          }
        } // Pack sign, exponent, fraction


        var bits = [];

        for (i = fbits; i; i -= 1) {
          bits.push(f % 2 ? 1 : 0);
          f = Math.floor(f / 2);
        }

        for (i = ebits; i; i -= 1) {
          bits.push(e % 2 ? 1 : 0);
          e = Math.floor(e / 2);
        }

        bits.push(s ? 1 : 0);
        bits.reverse();
        var str = bits.join(''); // Return the data as a hex string. --MJL

        var hexByteString = '';

        for (i = 0; i < 64; i += 8) {
          var hexByte = parseInt(str.substr(i, 8), 2).toString(16);

          if (hexByte.length === 1) {
            hexByte = '0' + hexByte;
          }

          hexByteString = hexByteString + hexByte;
        }

        return hexByteString.toLowerCase();
      };
      /**
       * Used to detect if we're in a Chrome content script (which executes in an
       * isolated environment where long-polling doesn't work).
       * @return {boolean}
       */


      var isChromeExtensionContentScript = function isChromeExtensionContentScript() {
        return !!(typeof window === 'object' && window['chrome'] && window['chrome']['extension'] && !/^chrome/.test(window.location.href));
      };
      /**
       * Used to detect if we're in a Windows 8 Store app.
       * @return {boolean}
       */


      var isWindowsStoreApp = function isWindowsStoreApp() {
        // Check for the presence of a couple WinRT globals
        return typeof Windows === 'object' && typeof Windows.UI === 'object';
      };
      /**
       * Converts a server error code to a Javascript Error
       * @param {!string} code
       * @param {!Query} query
       * @return {Error}
       */


      var errorForServerCode = function errorForServerCode(code, query) {
        var reason = 'Unknown Error';

        if (code === 'too_big') {
          reason = 'The data requested exceeds the maximum size ' + 'that can be accessed with a single request.';
        } else if (code === 'permission_denied') {
          reason = "Client doesn't have permission to access the desired data.";
        } else if (code === 'unavailable') {
          reason = 'The service is unavailable';
        }

        var error = new Error(code + ' at ' + query.path.toString() + ': ' + reason); // eslint-disable-next-line @typescript-eslint/no-explicit-any

        error.code = code.toUpperCase();
        return error;
      };
      /**
       * Used to test for integer-looking strings
       * @type {RegExp}
       * @private
       */


      var INTEGER_REGEXP_ = new RegExp('^-?(0*)\\d{1,10}$');
      /**
       * If the string contains a 32-bit integer, return it.  Else return null.
       * @param {!string} str
       * @return {?number}
       */

      var tryParseInt = function tryParseInt(str) {
        if (INTEGER_REGEXP_.test(str)) {
          var intVal = Number(str);

          if (intVal >= -2147483648 && intVal <= 2147483647) {
            return intVal;
          }
        }

        return null;
      };
      /**
       * Helper to run some code but catch any exceptions and re-throw them later.
       * Useful for preventing user callbacks from breaking internal code.
       *
       * Re-throwing the exception from a setTimeout is a little evil, but it's very
       * convenient (we don't have to try to figure out when is a safe point to
       * re-throw it), and the behavior seems reasonable:
       *
       * * If you aren't pausing on exceptions, you get an error in the console with
       *   the correct stack trace.
       * * If you're pausing on all exceptions, the debugger will pause on your
       *   exception and then again when we rethrow it.
       * * If you're only pausing on uncaught exceptions, the debugger will only pause
       *   on us re-throwing it.
       *
       * @param {!function()} fn The code to guard.
       */


      var exceptionGuard = function exceptionGuard(fn) {
        try {
          fn();
        } catch (e) {
          // Re-throw exception when it's safe.
          setTimeout(function () {
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            var stack = e.stack || '';
            warn('Exception was thrown by user callback.', stack);
            throw e;
          }, Math.floor(0));
        }
      };
      /**
       * @return {boolean} true if we think we're currently being crawled.
       */


      var beingCrawled = function beingCrawled() {
        var userAgent = typeof window === 'object' && window['navigator'] && window['navigator']['userAgent'] || ''; // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
        // believe to support JavaScript/AJAX rendering.
        // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
        // would have seen the page" is flaky if we don't treat it as a crawler.

        return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
      };
      /**
       * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
       *
       * It is removed with clearTimeout() as normal.
       *
       * @param {Function} fn Function to run.
       * @param {number} time Milliseconds to wait before running.
       * @return {number|Object} The setTimeout() return value.
       */


      var setTimeoutNonBlocking = function setTimeoutNonBlocking(fn, time) {
        var timeout = setTimeout(fn, time); // eslint-disable-next-line @typescript-eslint/no-explicit-any

        if (typeof timeout === 'object' && timeout['unref']) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          timeout['unref']();
        }

        return timeout;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An immutable object representing a parsed path.  It's immutable so that you
       * can pass them around to other functions without worrying about them changing
       * it.
       */


      var Path =
      /** @class */
      function () {
        /**
         * @param {string|Array.<string>} pathOrString Path string to parse,
         *      or another path, or the raw tokens array
         * @param {number=} pieceNum
         */
        function Path(pathOrString, pieceNum) {
          if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split('/'); // Remove empty pieces.

            var copyTo = 0;

            for (var i = 0; i < this.pieces_.length; i++) {
              if (this.pieces_[i].length > 0) {
                this.pieces_[copyTo] = this.pieces_[i];
                copyTo++;
              }
            }

            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
          } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
          }
        }

        Object.defineProperty(Path, "Empty", {
          /**
           * Singleton to represent an empty path
           *
           * @const
           */
          get: function get() {
            return new Path('');
          },
          enumerable: false,
          configurable: true
        });

        Path.prototype.getFront = function () {
          if (this.pieceNum_ >= this.pieces_.length) {
            return null;
          }

          return this.pieces_[this.pieceNum_];
        };
        /**
         * @return {number} The number of segments in this path
         */


        Path.prototype.getLength = function () {
          return this.pieces_.length - this.pieceNum_;
        };
        /**
         * @return {!Path}
         */


        Path.prototype.popFront = function () {
          var pieceNum = this.pieceNum_;

          if (pieceNum < this.pieces_.length) {
            pieceNum++;
          }

          return new Path(this.pieces_, pieceNum);
        };
        /**
         * @return {?string}
         */


        Path.prototype.getBack = function () {
          if (this.pieceNum_ < this.pieces_.length) {
            return this.pieces_[this.pieces_.length - 1];
          }

          return null;
        };

        Path.prototype.toString = function () {
          var pathString = '';

          for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '') {
              pathString += '/' + this.pieces_[i];
            }
          }

          return pathString || '/';
        };

        Path.prototype.toUrlEncodedString = function () {
          var pathString = '';

          for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '') {
              pathString += '/' + encodeURIComponent(String(this.pieces_[i]));
            }
          }

          return pathString || '/';
        };
        /**
         * Shallow copy of the parts of the path.
         *
         * @param {number=} begin
         * @return {!Array<string>}
         */


        Path.prototype.slice = function (begin) {
          if (begin === void 0) {
            begin = 0;
          }

          return this.pieces_.slice(this.pieceNum_ + begin);
        };
        /**
         * @return {?Path}
         */


        Path.prototype.parent = function () {
          if (this.pieceNum_ >= this.pieces_.length) {
            return null;
          }

          var pieces = [];

          for (var i = this.pieceNum_; i < this.pieces_.length - 1; i++) {
            pieces.push(this.pieces_[i]);
          }

          return new Path(pieces, 0);
        };
        /**
         * @param {string|!Path} childPathObj
         * @return {!Path}
         */


        Path.prototype.child = function (childPathObj) {
          var pieces = [];

          for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            pieces.push(this.pieces_[i]);
          }

          if (childPathObj instanceof Path) {
            for (var i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
              pieces.push(childPathObj.pieces_[i]);
            }
          } else {
            var childPieces = childPathObj.split('/');

            for (var i = 0; i < childPieces.length; i++) {
              if (childPieces[i].length > 0) {
                pieces.push(childPieces[i]);
              }
            }
          }

          return new Path(pieces, 0);
        };
        /**
         * @return {boolean} True if there are no segments in this path
         */


        Path.prototype.isEmpty = function () {
          return this.pieceNum_ >= this.pieces_.length;
        };
        /**
         * @param {!Path} outerPath
         * @param {!Path} innerPath
         * @return {!Path} The path from outerPath to innerPath
         */


        Path.relativePath = function (outerPath, innerPath) {
          var outer = outerPath.getFront(),
              inner = innerPath.getFront();

          if (outer === null) {
            return innerPath;
          } else if (outer === inner) {
            return Path.relativePath(outerPath.popFront(), innerPath.popFront());
          } else {
            throw new Error('INTERNAL ERROR: innerPath (' + innerPath + ') is not within ' + 'outerPath (' + outerPath + ')');
          }
        };
        /**
         * @param {!Path} left
         * @param {!Path} right
         * @return {number} -1, 0, 1 if left is less, equal, or greater than the right.
         */


        Path.comparePaths = function (left, right) {
          var leftKeys = left.slice();
          var rightKeys = right.slice();

          for (var i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
            var cmp = nameCompare(leftKeys[i], rightKeys[i]);

            if (cmp !== 0) {
              return cmp;
            }
          }

          if (leftKeys.length === rightKeys.length) {
            return 0;
          }

          return leftKeys.length < rightKeys.length ? -1 : 1;
        };
        /**
         *
         * @param {Path} other
         * @return {boolean} true if paths are the same.
         */


        Path.prototype.equals = function (other) {
          if (this.getLength() !== other.getLength()) {
            return false;
          }

          for (var i = this.pieceNum_, j = other.pieceNum_; i <= this.pieces_.length; i++, j++) {
            if (this.pieces_[i] !== other.pieces_[j]) {
              return false;
            }
          }

          return true;
        };
        /**
         *
         * @param {!Path} other
         * @return {boolean} True if this path is a parent (or the same as) other
         */


        Path.prototype.contains = function (other) {
          var i = this.pieceNum_;
          var j = other.pieceNum_;

          if (this.getLength() > other.getLength()) {
            return false;
          }

          while (i < this.pieces_.length) {
            if (this.pieces_[i] !== other.pieces_[j]) {
              return false;
            }

            ++i;
            ++j;
          }

          return true;
        };

        return Path;
      }(); // end Path

      /**
       * Dynamic (mutable) path used to count path lengths.
       *
       * This class is used to efficiently check paths for valid
       * length (in UTF8 bytes) and depth (used in path validation).
       *
       * Throws Error exception if path is ever invalid.
       *
       * The definition of a path always begins with '/'.
       */


      var ValidationPath =
      /** @class */
      function () {
        /**
         * @param {!Path} path Initial Path.
         * @param {string} errorPrefix_ Prefix for any error messages.
         */
        function ValidationPath(path, errorPrefix_) {
          this.errorPrefix_ = errorPrefix_;
          /** @type {!Array<string>} */

          this.parts_ = path.slice();
          /** @type {number} Initialize to number of '/' chars needed in path. */

          this.byteLength_ = Math.max(1, this.parts_.length);

          for (var i = 0; i < this.parts_.length; i++) {
            this.byteLength_ += util.stringLength(this.parts_[i]);
          }

          this.checkValid_();
        }

        Object.defineProperty(ValidationPath, "MAX_PATH_DEPTH", {
          /** @const {number} Maximum key depth. */
          get: function get() {
            return 32;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ValidationPath, "MAX_PATH_LENGTH_BYTES", {
          /** @const {number} Maximum number of (UTF8) bytes in a Firebase path. */
          get: function get() {
            return 768;
          },
          enumerable: false,
          configurable: true
        });
        /** @param {string} child */

        ValidationPath.prototype.push = function (child) {
          // Count the needed '/'
          if (this.parts_.length > 0) {
            this.byteLength_ += 1;
          }

          this.parts_.push(child);
          this.byteLength_ += util.stringLength(child);
          this.checkValid_();
        };

        ValidationPath.prototype.pop = function () {
          var last = this.parts_.pop();
          this.byteLength_ -= util.stringLength(last); // Un-count the previous '/'

          if (this.parts_.length > 0) {
            this.byteLength_ -= 1;
          }
        };

        ValidationPath.prototype.checkValid_ = function () {
          if (this.byteLength_ > ValidationPath.MAX_PATH_LENGTH_BYTES) {
            throw new Error(this.errorPrefix_ + 'has a key path longer than ' + ValidationPath.MAX_PATH_LENGTH_BYTES + ' bytes (' + this.byteLength_ + ').');
          }

          if (this.parts_.length > ValidationPath.MAX_PATH_DEPTH) {
            throw new Error(this.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + ValidationPath.MAX_PATH_DEPTH + ') or object contains a cycle ' + this.toErrorString());
          }
        };
        /**
         * String for use in error messages - uses '.' notation for path.
         *
         * @return {string}
         */


        ValidationPath.prototype.toErrorString = function () {
          if (this.parts_.length === 0) {
            return '';
          }

          return "in property '" + this.parts_.join('.') + "'";
        };

        return ValidationPath;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var PROTOCOL_VERSION = '5';
      var VERSION_PARAM = 'v';
      var TRANSPORT_SESSION_PARAM = 's';
      var REFERER_PARAM = 'r';
      var FORGE_REF = 'f';
      var FORGE_DOMAIN = 'firebaseio.com';
      var LAST_SESSION_PARAM = 'ls';
      var APPLICATION_ID_PARAM = 'p';
      var WEBSOCKET = 'websocket';
      var LONG_POLLING = 'long_polling';
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A class that holds metadata about a Repo object
       *
       * @constructor
       */

      var RepoInfo =
      /** @class */
      function () {
        /**
         * @param {string} host Hostname portion of the url for the repo
         * @param {boolean} secure Whether or not this repo is accessed over ssl
         * @param {string} namespace The namespace represented by the repo
         * @param {boolean} webSocketOnly Whether to prefer websockets over all other transports (used by Nest).
         * @param {string=} persistenceKey Override the default session persistence storage key
         */
        function RepoInfo(host, secure, namespace, webSocketOnly, persistenceKey, includeNamespaceInQueryParams) {
          if (persistenceKey === void 0) {
            persistenceKey = '';
          }

          if (includeNamespaceInQueryParams === void 0) {
            includeNamespaceInQueryParams = false;
          }

          this.secure = secure;
          this.namespace = namespace;
          this.webSocketOnly = webSocketOnly;
          this.persistenceKey = persistenceKey;
          this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
          this.host = host.toLowerCase();
          this.domain = this.host.substr(this.host.indexOf('.') + 1);
          this.internalHost = PersistentStorage.get('host:' + host) || this.host;
        }

        RepoInfo.prototype.needsQueryParam = function () {
          return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams;
        };

        RepoInfo.prototype.isCacheableHost = function () {
          return this.internalHost.substr(0, 2) === 's-';
        };

        RepoInfo.prototype.isDemoHost = function () {
          return this.domain === 'firebaseio-demo.com';
        };

        RepoInfo.prototype.isCustomHost = function () {
          return this.domain !== 'firebaseio.com' && this.domain !== 'firebaseio-demo.com';
        };

        RepoInfo.prototype.updateHost = function (newHost) {
          if (newHost !== this.internalHost) {
            this.internalHost = newHost;

            if (this.isCacheableHost()) {
              PersistentStorage.set('host:' + this.host, this.internalHost);
            }
          }
        };
        /**
         * Returns the websocket URL for this repo
         * @param {string} type of connection
         * @param {Object} params list
         * @return {string} The URL for this repo
         */


        RepoInfo.prototype.connectionURL = function (type, params) {
          util.assert(typeof type === 'string', 'typeof type must == string');
          util.assert(typeof params === 'object', 'typeof params must == object');
          var connURL;

          if (type === WEBSOCKET) {
            connURL = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
          } else if (type === LONG_POLLING) {
            connURL = (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
          } else {
            throw new Error('Unknown connection type: ' + type);
          }

          if (this.needsQueryParam()) {
            params['ns'] = this.namespace;
          }

          var pairs = [];
          each(params, function (key, value) {
            pairs.push(key + '=' + value);
          });
          return connURL + pairs.join('&');
        };
        /** @return {string} */


        RepoInfo.prototype.toString = function () {
          var str = this.toURLString();

          if (this.persistenceKey) {
            str += '<' + this.persistenceKey + '>';
          }

          return str;
        };
        /** @return {string} */


        RepoInfo.prototype.toURLString = function () {
          return (this.secure ? 'https://' : 'http://') + this.host;
        };

        return RepoInfo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param {!string} pathString
       * @return {string}
       */


      function decodePath(pathString) {
        var pathStringDecoded = '';
        var pieces = pathString.split('/');

        for (var i = 0; i < pieces.length; i++) {
          if (pieces[i].length > 0) {
            var piece = pieces[i];

            try {
              piece = decodeURIComponent(piece.replace(/\+/g, ' '));
            } catch (e) {}

            pathStringDecoded += '/' + piece;
          }
        }

        return pathStringDecoded;
      }
      /**
       * @param {!string} queryString
       * @return {!{[key:string]:string}} key value hash
       */


      function decodeQuery(queryString) {
        var e_1, _a;

        var results = {};

        if (queryString.charAt(0) === '?') {
          queryString = queryString.substring(1);
        }

        try {
          for (var _b = tslib.__values(queryString.split('&')), _c = _b.next(); !_c.done; _c = _b.next()) {
            var segment = _c.value;

            if (segment.length === 0) {
              continue;
            }

            var kv = segment.split('=');

            if (kv.length === 2) {
              results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
            } else {
              warn("Invalid query segment '" + segment + "' in query '" + queryString + "'");
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return results;
      }
      /**
       *
       * @param {!string} dataURL
       * @return {{repoInfo: !RepoInfo, path: !Path}}
       */


      var parseRepoInfo = function parseRepoInfo(dataURL) {
        var parsedUrl = parseDatabaseURL(dataURL),
            namespace = parsedUrl.namespace;

        if (parsedUrl.domain === 'firebase.com') {
          fatal(parsedUrl.host + ' is no longer supported. ' + 'Please use <YOUR FIREBASE>.firebaseio.com instead');
        } // Catch common error of uninitialized namespace value.


        if ((!namespace || namespace === 'undefined') && parsedUrl.domain !== 'localhost') {
          fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
        }

        if (!parsedUrl.secure) {
          warnIfPageIsSecure();
        }

        var webSocketOnly = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
        return {
          repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, webSocketOnly,
          /*persistenceKey=*/
          '',
          /*includeNamespaceInQueryParams=*/
          namespace !== parsedUrl.subdomain),
          path: new Path(parsedUrl.pathString)
        };
      };
      /**
       *
       * @param {!string} dataURL
       * @return {{host: string, port: number, domain: string, subdomain: string, secure: boolean, scheme: string, pathString: string, namespace: string}}
       */


      var parseDatabaseURL = function parseDatabaseURL(dataURL) {
        // Default to empty strings in the event of a malformed string.
        var host = '',
            domain = '',
            subdomain = '',
            pathString = '',
            namespace = ''; // Always default to SSL, unless otherwise specified.

        var secure = true,
            scheme = 'https',
            port = 443; // Don't do any validation here. The caller is responsible for validating the result of parsing.

        if (typeof dataURL === 'string') {
          // Parse scheme.
          var colonInd = dataURL.indexOf('//');

          if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
          } // Parse host, path, and query string.


          var slashInd = dataURL.indexOf('/');

          if (slashInd === -1) {
            slashInd = dataURL.length;
          }

          var questionMarkInd = dataURL.indexOf('?');

          if (questionMarkInd === -1) {
            questionMarkInd = dataURL.length;
          }

          host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));

          if (slashInd < questionMarkInd) {
            // For pathString, questionMarkInd will always come after slashInd
            pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
          }

          var queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd))); // If we have a port, use scheme for determining if it's secure.

          colonInd = host.indexOf(':');

          if (colonInd >= 0) {
            secure = scheme === 'https' || scheme === 'wss';
            port = parseInt(host.substring(colonInd + 1), 10);
          } else {
            colonInd = host.length;
          }

          var hostWithoutPort = host.slice(0, colonInd);

          if (hostWithoutPort.toLowerCase() === 'localhost') {
            domain = 'localhost';
          } else if (hostWithoutPort.split('.').length <= 2) {
            domain = hostWithoutPort;
          } else {
            // Interpret the subdomain of a 3 or more component URL as the namespace name.
            var dotInd = host.indexOf('.');
            subdomain = host.substring(0, dotInd).toLowerCase();
            domain = host.substring(dotInd + 1); // Normalize namespaces to lowercase to share storage / connection.

            namespace = subdomain;
          } // Always treat the value of the `ns` as the namespace name if it is present.


          if ('ns' in queryParams) {
            namespace = queryParams['ns'];
          }
        }

        return {
          host: host,
          port: port,
          domain: domain,
          subdomain: subdomain,
          secure: secure,
          scheme: scheme,
          pathString: pathString,
          namespace: namespace
        };
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * True for invalid Firebase keys
       * @type {RegExp}
       * @private
       */


      var INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
      /**
       * True for invalid Firebase paths.
       * Allows '/' in paths.
       * @type {RegExp}
       * @private
       */

      var INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
      /**
       * Maximum number of characters to allow in leaf value
       * @type {number}
       * @private
       */

      var MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
      /**
       * @param {*} key
       * @return {boolean}
       */

      var isValidKey = function isValidKey(key) {
        return typeof key === 'string' && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
      };
      /**
       * @param {string} pathString
       * @return {boolean}
       */


      var isValidPathString = function isValidPathString(pathString) {
        return typeof pathString === 'string' && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
      };
      /**
       * @param {string} pathString
       * @return {boolean}
       */


      var isValidRootPathString = function isValidRootPathString(pathString) {
        if (pathString) {
          // Allow '/.info/' at the beginning.
          pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
        }

        return isValidPathString(pathString);
      };
      /**
       * @param {*} priority
       * @return {boolean}
       */


      var isValidPriority = function isValidPriority(priority) {
        return priority === null || typeof priority === 'string' || typeof priority === 'number' && !isInvalidJSONNumber(priority) || priority && typeof priority === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
        util.contains(priority, '.sv');
      };
      /**
       * Pre-validate a datum passed as an argument to Firebase function.
       *
       * @param {string} fnName
       * @param {number} argumentNumber
       * @param {*} data
       * @param {!Path} path
       * @param {boolean} optional
       */


      var validateFirebaseDataArg = function validateFirebaseDataArg(fnName, argumentNumber, data, path, optional) {
        if (optional && data === undefined) {
          return;
        }

        validateFirebaseData(util.errorPrefix(fnName, argumentNumber, optional), data, path);
      };
      /**
       * Validate a data object client-side before sending to server.
       *
       * @param {string} errorPrefix
       * @param {*} data
       * @param {!Path|!ValidationPath} path_
       */


      var validateFirebaseData = function validateFirebaseData(errorPrefix, data, path_) {
        var path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;

        if (data === undefined) {
          throw new Error(errorPrefix + 'contains undefined ' + path.toErrorString());
        }

        if (typeof data === 'function') {
          throw new Error(errorPrefix + 'contains a function ' + path.toErrorString() + ' with contents = ' + data.toString());
        }

        if (isInvalidJSONNumber(data)) {
          throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + path.toErrorString());
        } // Check max leaf size, but try to avoid the utf8 conversion if we can.


        if (typeof data === 'string' && data.length > MAX_LEAF_SIZE_ / 3 && util.stringLength(data) > MAX_LEAF_SIZE_) {
          throw new Error(errorPrefix + 'contains a string greater than ' + MAX_LEAF_SIZE_ + ' utf8 bytes ' + path.toErrorString() + " ('" + data.substring(0, 50) + "...')");
        } // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
        // to save extra walking of large objects.


        if (data && typeof data === 'object') {
          var hasDotValue_1 = false;
          var hasActualChild_1 = false;
          each(data, function (key, value) {
            if (key === '.value') {
              hasDotValue_1 = true;
            } else if (key !== '.priority' && key !== '.sv') {
              hasActualChild_1 = true;

              if (!isValidKey(key)) {
                throw new Error(errorPrefix + ' contains an invalid key (' + key + ') ' + path.toErrorString() + '.  Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
              }
            }

            path.push(key);
            validateFirebaseData(errorPrefix, value, path);
            path.pop();
          });

          if (hasDotValue_1 && hasActualChild_1) {
            throw new Error(errorPrefix + ' contains ".value" child ' + path.toErrorString() + ' in addition to actual children.');
          }
        }
      };
      /**
       * Pre-validate paths passed in the firebase function.
       *
       * @param {string} errorPrefix
       * @param {Array<!Path>} mergePaths
       */


      var validateFirebaseMergePaths = function validateFirebaseMergePaths(errorPrefix, mergePaths) {
        var i, curPath;

        for (i = 0; i < mergePaths.length; i++) {
          curPath = mergePaths[i];
          var keys = curPath.slice();

          for (var j = 0; j < keys.length; j++) {
            if (keys[j] === '.priority' && j === keys.length - 1) ;else if (!isValidKey(keys[j])) {
              throw new Error(errorPrefix + 'contains an invalid key (' + keys[j] + ') in path ' + curPath.toString() + '. Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
          }
        } // Check that update keys are not descendants of each other.
        // We rely on the property that sorting guarantees that ancestors come
        // right before descendants.


        mergePaths.sort(Path.comparePaths);
        var prevPath = null;

        for (i = 0; i < mergePaths.length; i++) {
          curPath = mergePaths[i];

          if (prevPath !== null && prevPath.contains(curPath)) {
            throw new Error(errorPrefix + 'contains a path ' + prevPath.toString() + ' that is ancestor of another path ' + curPath.toString());
          }

          prevPath = curPath;
        }
      };
      /**
       * pre-validate an object passed as an argument to firebase function (
       * must be an object - e.g. for firebase.update()).
       *
       * @param {string} fnName
       * @param {number} argumentNumber
       * @param {*} data
       * @param {!Path} path
       * @param {boolean} optional
       */


      var validateFirebaseMergeDataArg = function validateFirebaseMergeDataArg(fnName, argumentNumber, data, path, optional) {
        if (optional && data === undefined) {
          return;
        }

        var errorPrefix = util.errorPrefix(fnName, argumentNumber, optional);

        if (!(data && typeof data === 'object') || Array.isArray(data)) {
          throw new Error(errorPrefix + ' must be an object containing the children to replace.');
        }

        var mergePaths = [];
        each(data, function (key, value) {
          var curPath = new Path(key);
          validateFirebaseData(errorPrefix, value, path.child(curPath));

          if (curPath.getBack() === '.priority') {
            if (!isValidPriority(value)) {
              throw new Error(errorPrefix + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + 'Firebase priority (a string, finite number, server value, or null).');
            }
          }

          mergePaths.push(curPath);
        });
        validateFirebaseMergePaths(errorPrefix, mergePaths);
      };

      var validatePriority = function validatePriority(fnName, argumentNumber, priority, optional) {
        if (optional && priority === undefined) {
          return;
        }

        if (isInvalidJSONNumber(priority)) {
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'is ' + priority.toString() + ', but must be a valid Firebase priority (a string, finite number, ' + 'server value, or null).');
        } // Special case to allow importing data with a .sv.


        if (!isValidPriority(priority)) {
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'must be a valid Firebase priority ' + '(a string, finite number, server value, or null).');
        }
      };

      var validateEventType = function validateEventType(fnName, argumentNumber, eventType, optional) {
        if (optional && eventType === undefined) {
          return;
        }

        switch (eventType) {
          case 'value':
          case 'child_added':
          case 'child_removed':
          case 'child_changed':
          case 'child_moved':
            break;

          default:
            throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'must be a valid event type = "value", "child_added", "child_removed", ' + '"child_changed", or "child_moved".');
        }
      };

      var validateKey = function validateKey(fnName, argumentNumber, key, optional) {
        if (optional && key === undefined) {
          return;
        }

        if (!isValidKey(key)) {
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
        }
      };

      var validatePathString = function validatePathString(fnName, argumentNumber, pathString, optional) {
        if (optional && pathString === undefined) {
          return;
        }

        if (!isValidPathString(pathString)) {
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
        }
      };

      var validateRootPathString = function validateRootPathString(fnName, argumentNumber, pathString, optional) {
        if (pathString) {
          // Allow '/.info/' at the beginning.
          pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
        }

        validatePathString(fnName, argumentNumber, pathString, optional);
      };

      var validateWritablePath = function validateWritablePath(fnName, path) {
        if (path.getFront() === '.info') {
          throw new Error(fnName + " failed = Can't modify data under /.info/");
        }
      };

      var validateUrl = function validateUrl(fnName, argumentNumber, parsedUrl) {
        // TODO = Validate server better.
        var pathString = parsedUrl.path.toString();

        if (!(typeof parsedUrl.repoInfo.host === 'string') || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(':')[0] !== 'localhost' || pathString.length !== 0 && !isValidRootPathString(pathString)) {
          throw new Error(util.errorPrefix(fnName, argumentNumber, false) + 'must be a valid firebase URL and ' + 'the path can\'t contain ".", "#", "$", "[", or "]".');
        }
      };

      var validateBoolean = function validateBoolean(fnName, argumentNumber, bool, optional) {
        if (optional && bool === undefined) {
          return;
        }

        if (typeof bool !== 'boolean') {
          throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'must be a boolean.');
        }
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @constructor
       */


      var OnDisconnect =
      /** @class */
      function () {
        /**
         * @param {!Repo} repo_
         * @param {!Path} path_
         */
        function OnDisconnect(repo_, path_) {
          this.repo_ = repo_;
          this.path_ = path_;
        }
        /**
         * @param {function(?Error)=} onComplete
         * @return {!firebase.Promise}
         */


        OnDisconnect.prototype.cancel = function (onComplete) {
          util.validateArgCount('OnDisconnect.cancel', 0, 1, arguments.length);
          util.validateCallback('OnDisconnect.cancel', 1, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectCancel(this.path_, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {function(?Error)=} onComplete
         * @return {!firebase.Promise}
         */


        OnDisconnect.prototype.remove = function (onComplete) {
          util.validateArgCount('OnDisconnect.remove', 0, 1, arguments.length);
          validateWritablePath('OnDisconnect.remove', this.path_);
          util.validateCallback('OnDisconnect.remove', 1, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSet(this.path_, null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {*} value
         * @param {function(?Error)=} onComplete
         * @return {!firebase.Promise}
         */


        OnDisconnect.prototype.set = function (value, onComplete) {
          util.validateArgCount('OnDisconnect.set', 1, 2, arguments.length);
          validateWritablePath('OnDisconnect.set', this.path_);
          validateFirebaseDataArg('OnDisconnect.set', 1, value, this.path_, false);
          util.validateCallback('OnDisconnect.set', 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSet(this.path_, value, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {*} value
         * @param {number|string|null} priority
         * @param {function(?Error)=} onComplete
         * @return {!firebase.Promise}
         */


        OnDisconnect.prototype.setWithPriority = function (value, priority, onComplete) {
          util.validateArgCount('OnDisconnect.setWithPriority', 2, 3, arguments.length);
          validateWritablePath('OnDisconnect.setWithPriority', this.path_);
          validateFirebaseDataArg('OnDisconnect.setWithPriority', 1, value, this.path_, false);
          validatePriority('OnDisconnect.setWithPriority', 2, priority, false);
          util.validateCallback('OnDisconnect.setWithPriority', 3, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {!Object} objectToMerge
         * @param {function(?Error)=} onComplete
         * @return {!firebase.Promise}
         */


        OnDisconnect.prototype.update = function (objectToMerge, onComplete) {
          util.validateArgCount('OnDisconnect.update', 1, 2, arguments.length);
          validateWritablePath('OnDisconnect.update', this.path_);

          if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};

            for (var i = 0; i < objectToMerge.length; ++i) {
              newObjectToMerge['' + i] = objectToMerge[i];
            }

            objectToMerge = newObjectToMerge;
            warn('Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the ' + 'existing data, or an Object with integer keys if you really do want to only update some of the children.');
          }

          validateFirebaseMergeDataArg('OnDisconnect.update', 1, objectToMerge, this.path_, false);
          util.validateCallback('OnDisconnect.update', 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo_.onDisconnectUpdate(this.path_, objectToMerge, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };

        return OnDisconnect;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var TransactionResult =
      /** @class */
      function () {
        /**
         * A type for the resolve value of Firebase.transaction.
         * @constructor
         * @dict
         * @param {boolean} committed
         * @param {DataSnapshot} snapshot
         */
        function TransactionResult(committed, snapshot) {
          this.committed = committed;
          this.snapshot = snapshot;
        } // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
        // for end-users


        TransactionResult.prototype.toJSON = function () {
          util.validateArgCount('TransactionResult.toJSON', 0, 1, arguments.length);
          return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON()
          };
        };

        return TransactionResult;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Fancy ID generator that creates 20-character string identifiers with the
       * following properties:
       *
       * 1. They're based on timestamp so that they sort *after* any existing ids.
       * 2. They contain 72-bits of random data after the timestamp so that IDs won't
       *    collide with other clients' IDs.
       * 3. They sort *lexicographically* (so the timestamp is converted to characters
       *    that will sort properly).
       * 4. They're monotonically increasing. Even if you generate more than one in
       *    the same timestamp, the latter ones will sort after the former ones. We do
       *    this by using the previous random bits but "incrementing" them by 1 (only
       *    in the case of a timestamp collision).
       */


      var nextPushId = function () {
        // Modeled after base64 web-safe chars, but ordered by ASCII.
        var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'; // Timestamp of last push, used to prevent local collisions if you push twice
        // in one ms.

        var lastPushTime = 0; // We generate 72-bits of randomness which get turned into 12 characters and
        // appended to the timestamp to prevent collisions with other clients. We
        // store the last characters we generated because in the event of a collision,
        // we'll use those same characters except "incremented" by one.

        var lastRandChars = [];
        return function (now) {
          var duplicateTime = now === lastPushTime;
          lastPushTime = now;
          var i;
          var timeStampChars = new Array(8);

          for (i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64); // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.

            now = Math.floor(now / 64);
          }

          util.assert(now === 0, 'Cannot push at time == 0');
          var id = timeStampChars.join('');

          if (!duplicateTime) {
            for (i = 0; i < 12; i++) {
              lastRandChars[i] = Math.floor(Math.random() * 64);
            }
          } else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
              lastRandChars[i] = 0;
            }

            lastRandChars[i]++;
          }

          for (i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
          }

          util.assert(id.length === 20, 'nextPushId: Length should be 20.');
          return id;
        };
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       *
       * @param {!string} name
       * @param {!Node} node
       * @constructor
       * @struct
       */


      var NamedNode =
      /** @class */
      function () {
        function NamedNode(name, node) {
          this.name = name;
          this.node = node;
        }
        /**
         *
         * @param {!string} name
         * @param {!Node} node
         * @return {NamedNode}
         */


        NamedNode.Wrap = function (name, node) {
          return new NamedNode(name, node);
        };

        return NamedNode;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       *
       * @constructor
       */


      var Index =
      /** @class */
      function () {
        function Index() {}
        /**
         * @return {function(!NamedNode, !NamedNode):number} A standalone comparison function for
         * this index
         */


        Index.prototype.getCompare = function () {
          return this.compare.bind(this);
        };
        /**
         * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
         * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
         *
         * @param {!Node} oldNode
         * @param {!Node} newNode
         * @return {boolean} True if the portion of the snapshot being indexed changed between oldNode and newNode
         */


        Index.prototype.indexedValueChanged = function (oldNode, newNode) {
          var oldWrapped = new NamedNode(MIN_NAME, oldNode);
          var newWrapped = new NamedNode(MIN_NAME, newNode);
          return this.compare(oldWrapped, newWrapped) !== 0;
        };
        /**
         * @return {!NamedNode} a node wrapper that will sort equal to or less than
         * any other node wrapper, using this index
         */


        Index.prototype.minPost = function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return NamedNode.MIN;
        };

        return Index;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var __EMPTY_NODE;

      var KeyIndex =
      /** @class */
      function (_super) {
        tslib.__extends(KeyIndex, _super);

        function KeyIndex() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Object.defineProperty(KeyIndex, "__EMPTY_NODE", {
          get: function get() {
            return __EMPTY_NODE;
          },
          set: function set(val) {
            __EMPTY_NODE = val;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * @inheritDoc
         */

        KeyIndex.prototype.compare = function (a, b) {
          return nameCompare(a.name, b.name);
        };
        /**
         * @inheritDoc
         */


        KeyIndex.prototype.isDefinedOn = function (node) {
          // We could probably return true here (since every node has a key), but it's never called
          // so just leaving unimplemented for now.
          throw util.assertionError('KeyIndex.isDefinedOn not expected to be called.');
        };
        /**
         * @inheritDoc
         */


        KeyIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
          return false; // The key for a node never changes.
        };
        /**
         * @inheritDoc
         */


        KeyIndex.prototype.minPost = function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return NamedNode.MIN;
        };
        /**
         * @inheritDoc
         */


        KeyIndex.prototype.maxPost = function () {
          // TODO: This should really be created once and cached in a static property, but
          // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
          return new NamedNode(MAX_NAME, __EMPTY_NODE);
        };
        /**
         * @param {*} indexValue
         * @param {string} name
         * @return {!NamedNode}
         */


        KeyIndex.prototype.makePost = function (indexValue, name) {
          util.assert(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.'); // We just use empty node, but it'll never be compared, since our comparator only looks at name.

          return new NamedNode(indexValue, __EMPTY_NODE);
        };
        /**
         * @return {!string} String representation for inclusion in a query spec
         */


        KeyIndex.prototype.toString = function () {
          return '.key';
        };

        return KeyIndex;
      }(Index);

      var KEY_INDEX = new KeyIndex();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var MAX_NODE;

      function setMaxNode(val) {
        MAX_NODE = val;
      }
      /**
       * @param {(!string|!number)} priority
       * @return {!string}
       */


      var priorityHashText = function priorityHashText(priority) {
        if (typeof priority === 'number') {
          return 'number:' + doubleToIEEE754String(priority);
        } else {
          return 'string:' + priority;
        }
      };
      /**
       * Validates that a priority snapshot Node is valid.
       *
       * @param {!Node} priorityNode
       */


      var validatePriorityNode = function validatePriorityNode(priorityNode) {
        if (priorityNode.isLeafNode()) {
          var val = priorityNode.val();
          util.assert(typeof val === 'string' || typeof val === 'number' || typeof val === 'object' && util.contains(val, '.sv'), 'Priority must be a string or number.');
        } else {
          util.assert(priorityNode === MAX_NODE || priorityNode.isEmpty(), 'priority of unexpected type.');
        } // Don't call getPriority() on MAX_NODE to avoid hitting assertion.


        util.assert(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var __childrenNodeConstructor;
      /**
       * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
       * implements Node and stores the value of the node (a string,
       * number, or boolean) accessible via getValue().
       */


      var LeafNode =
      /** @class */
      function () {
        /**
         * @implements {Node}
         * @param {!(string|number|boolean|Object)} value_ The value to store in this leaf node.
         *                                         The object type is possible in the event of a deferred value
         * @param {!Node=} priorityNode_ The priority of this node.
         */
        function LeafNode(value_, priorityNode_) {
          if (priorityNode_ === void 0) {
            priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE;
          }

          this.value_ = value_;
          this.priorityNode_ = priorityNode_;
          this.lazyHash_ = null;
          util.assert(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
          validatePriorityNode(this.priorityNode_);
        }

        Object.defineProperty(LeafNode, "__childrenNodeConstructor", {
          get: function get() {
            return __childrenNodeConstructor;
          },
          set: function set(val) {
            __childrenNodeConstructor = val;
          },
          enumerable: false,
          configurable: true
        });
        /** @inheritDoc */

        LeafNode.prototype.isLeafNode = function () {
          return true;
        };
        /** @inheritDoc */


        LeafNode.prototype.getPriority = function () {
          return this.priorityNode_;
        };
        /** @inheritDoc */


        LeafNode.prototype.updatePriority = function (newPriorityNode) {
          return new LeafNode(this.value_, newPriorityNode);
        };
        /** @inheritDoc */


        LeafNode.prototype.getImmediateChild = function (childName) {
          // Hack to treat priority as a regular child
          if (childName === '.priority') {
            return this.priorityNode_;
          } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
          }
        };
        /** @inheritDoc */


        LeafNode.prototype.getChild = function (path) {
          if (path.isEmpty()) {
            return this;
          } else if (path.getFront() === '.priority') {
            return this.priorityNode_;
          } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
          }
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.hasChild = function () {
          return false;
        };
        /** @inheritDoc */


        LeafNode.prototype.getPredecessorChildName = function (childName, childNode) {
          return null;
        };
        /** @inheritDoc */


        LeafNode.prototype.updateImmediateChild = function (childName, newChildNode) {
          if (childName === '.priority') {
            return this.updatePriority(newChildNode);
          } else if (newChildNode.isEmpty() && childName !== '.priority') {
            return this;
          } else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
          }
        };
        /** @inheritDoc */


        LeafNode.prototype.updateChild = function (path, newChildNode) {
          var front = path.getFront();

          if (front === null) {
            return newChildNode;
          } else if (newChildNode.isEmpty() && front !== '.priority') {
            return this;
          } else {
            util.assert(front !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(path.popFront(), newChildNode));
          }
        };
        /** @inheritDoc */


        LeafNode.prototype.isEmpty = function () {
          return false;
        };
        /** @inheritDoc */


        LeafNode.prototype.numChildren = function () {
          return 0;
        };
        /** @inheritDoc */


        LeafNode.prototype.forEachChild = function (index, action) {
          return false;
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.val = function (exportFormat) {
          if (exportFormat && !this.getPriority().isEmpty()) {
            return {
              '.value': this.getValue(),
              '.priority': this.getPriority().val()
            };
          } else {
            return this.getValue();
          }
        };
        /** @inheritDoc */


        LeafNode.prototype.hash = function () {
          if (this.lazyHash_ === null) {
            var toHash = '';

            if (!this.priorityNode_.isEmpty()) {
              toHash += 'priority:' + priorityHashText(this.priorityNode_.val()) + ':';
            }

            var type = typeof this.value_;
            toHash += type + ':';

            if (type === 'number') {
              toHash += doubleToIEEE754String(this.value_);
            } else {
              toHash += this.value_;
            }

            this.lazyHash_ = sha1(toHash);
          }

          return this.lazyHash_;
        };
        /**
         * Returns the value of the leaf node.
         * @return {Object|string|number|boolean} The value of the node.
         */


        LeafNode.prototype.getValue = function () {
          return this.value_;
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.compareTo = function (other) {
          if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
            return 1;
          } else if (other instanceof LeafNode.__childrenNodeConstructor) {
            return -1;
          } else {
            util.assert(other.isLeafNode(), 'Unknown node type');
            return this.compareToLeafNode_(other);
          }
        };
        /**
         * Comparison specifically for two leaf nodes
         * @param {!LeafNode} otherLeaf
         * @return {!number}
         * @private
         */


        LeafNode.prototype.compareToLeafNode_ = function (otherLeaf) {
          var otherLeafType = typeof otherLeaf.value_;
          var thisLeafType = typeof this.value_;
          var otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
          var thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
          util.assert(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
          util.assert(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);

          if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === 'object') {
              // Deferred value nodes are all equal, but we should also never get to this point...
              return 0;
            } else {
              // Note that this works because true > false, all others are number or string comparisons
              if (this.value_ < otherLeaf.value_) {
                return -1;
              } else if (this.value_ === otherLeaf.value_) {
                return 0;
              } else {
                return 1;
              }
            }
          } else {
            return thisIndex - otherIndex;
          }
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.withIndex = function () {
          return this;
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.isIndexed = function () {
          return true;
        };
        /**
         * @inheritDoc
         */


        LeafNode.prototype.equals = function (other) {
          /**
           * @inheritDoc
           */
          if (other === this) {
            return true;
          } else if (other.isLeafNode()) {
            var otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
          } else {
            return false;
          }
        };
        /**
         * The sort order for comparing leaf nodes of different types. If two leaf nodes have
         * the same type, the comparison falls back to their value
         * @type {Array.<!string>}
         * @const
         */


        LeafNode.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string'];
        return LeafNode;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var nodeFromJSON;
      var MAX_NODE$1;

      function setNodeFromJSON(val) {
        nodeFromJSON = val;
      }

      function setMaxNode$1(val) {
        MAX_NODE$1 = val;
      }
      /**
       * @constructor
       * @extends {Index}
       * @private
       */


      var PriorityIndex =
      /** @class */
      function (_super) {
        tslib.__extends(PriorityIndex, _super);

        function PriorityIndex() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritDoc
         */


        PriorityIndex.prototype.compare = function (a, b) {
          var aPriority = a.node.getPriority();
          var bPriority = b.node.getPriority();
          var indexCmp = aPriority.compareTo(bPriority);

          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        };
        /**
         * @inheritDoc
         */


        PriorityIndex.prototype.isDefinedOn = function (node) {
          return !node.getPriority().isEmpty();
        };
        /**
         * @inheritDoc
         */


        PriorityIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
          return !oldNode.getPriority().equals(newNode.getPriority());
        };
        /**
         * @inheritDoc
         */


        PriorityIndex.prototype.minPost = function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return NamedNode.MIN;
        };
        /**
         * @inheritDoc
         */


        PriorityIndex.prototype.maxPost = function () {
          return new NamedNode(MAX_NAME, new LeafNode('[PRIORITY-POST]', MAX_NODE$1));
        };
        /**
         * @param {*} indexValue
         * @param {string} name
         * @return {!NamedNode}
         */


        PriorityIndex.prototype.makePost = function (indexValue, name) {
          var priorityNode = nodeFromJSON(indexValue);
          return new NamedNode(name, new LeafNode('[PRIORITY-POST]', priorityNode));
        };
        /**
         * @return {!string} String representation for inclusion in a query spec
         */


        PriorityIndex.prototype.toString = function () {
          return '.priority';
        };

        return PriorityIndex;
      }(Index);

      var PRIORITY_INDEX = new PriorityIndex();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An iterator over an LLRBNode.
       */

      var SortedMapIterator =
      /** @class */
      function () {
        /**
         * @template K, V, T
         * @param {LLRBNode|LLRBEmptyNode} node Node to iterate.
         * @param {?K} startKey
         * @param {function(K, K): number} comparator
         * @param {boolean} isReverse_ Whether or not to iterate in reverse
         * @param {(function(K, V):T)=} resultGenerator_
         */
        function SortedMapIterator(node, startKey, comparator, isReverse_, resultGenerator_) {
          if (resultGenerator_ === void 0) {
            resultGenerator_ = null;
          }

          this.isReverse_ = isReverse_;
          this.resultGenerator_ = resultGenerator_;
          /** @private
           * @type {Array.<!LLRBNode>}
           */

          this.nodeStack_ = [];
          var cmp = 1;

          while (!node.isEmpty()) {
            node = node;
            cmp = startKey ? comparator(node.key, startKey) : 1; // flip the comparison if we're going in reverse

            if (isReverse_) {
              cmp *= -1;
            }

            if (cmp < 0) {
              // This node is less than our start key. ignore it
              if (this.isReverse_) {
                node = node.left;
              } else {
                node = node.right;
              }
            } else if (cmp === 0) {
              // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
              this.nodeStack_.push(node);
              break;
            } else {
              // This node is greater than our start key, add it to the stack and move to the next one
              this.nodeStack_.push(node);

              if (this.isReverse_) {
                node = node.right;
              } else {
                node = node.left;
              }
            }
          }
        }

        SortedMapIterator.prototype.getNext = function () {
          if (this.nodeStack_.length === 0) {
            return null;
          }

          var node = this.nodeStack_.pop();
          var result;

          if (this.resultGenerator_) {
            result = this.resultGenerator_(node.key, node.value);
          } else {
            result = {
              key: node.key,
              value: node.value
            };
          }

          if (this.isReverse_) {
            node = node.left;

            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.right;
            }
          } else {
            node = node.right;

            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.left;
            }
          }

          return result;
        };

        SortedMapIterator.prototype.hasNext = function () {
          return this.nodeStack_.length > 0;
        };

        SortedMapIterator.prototype.peek = function () {
          if (this.nodeStack_.length === 0) {
            return null;
          }

          var node = this.nodeStack_[this.nodeStack_.length - 1];

          if (this.resultGenerator_) {
            return this.resultGenerator_(node.key, node.value);
          } else {
            return {
              key: node.key,
              value: node.value
            };
          }
        };

        return SortedMapIterator;
      }();
      /**
       * Represents a node in a Left-leaning Red-Black tree.
       */


      var LLRBNode =
      /** @class */
      function () {
        /**
         * @template K, V
         * @param {!K} key Key associated with this node.
         * @param {!V} value Value associated with this node.
         * @param {?boolean} color Whether this node is red.
         * @param {?(LLRBNode|LLRBEmptyNode)=} left Left child.
         * @param {?(LLRBNode|LLRBEmptyNode)=} right Right child.
         */
        function LLRBNode(key, value, color, left, right) {
          this.key = key;
          this.value = value;
          this.color = color != null ? color : LLRBNode.RED;
          this.left = left != null ? left : SortedMap.EMPTY_NODE;
          this.right = right != null ? right : SortedMap.EMPTY_NODE;
        }
        /**
         * Returns a copy of the current node, optionally replacing pieces of it.
         *
         * @param {?K} key New key for the node, or null.
         * @param {?V} value New value for the node, or null.
         * @param {?boolean} color New color for the node, or null.
         * @param {?LLRBNode|LLRBEmptyNode} left New left child for the node, or null.
         * @param {?LLRBNode|LLRBEmptyNode} right New right child for the node, or null.
         * @return {!LLRBNode} The node copy.
         */


        LLRBNode.prototype.copy = function (key, value, color, left, right) {
          return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
        };
        /**
         * @return {number} The total number of nodes in the tree.
         */


        LLRBNode.prototype.count = function () {
          return this.left.count() + 1 + this.right.count();
        };
        /**
         * @return {boolean} True if the tree is empty.
         */


        LLRBNode.prototype.isEmpty = function () {
          return false;
        };
        /**
         * Traverses the tree in key order and calls the specified action function
         * for each node.
         *
         * @param {function(!K, !V):*} action Callback function to be called for each
         *   node.  If it returns true, traversal is aborted.
         * @return {*} The first truthy value returned by action, or the last falsey
         *   value returned by action
         */


        LLRBNode.prototype.inorderTraversal = function (action) {
          return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
        };
        /**
         * Traverses the tree in reverse key order and calls the specified action function
         * for each node.
         *
         * @param {function(!Object, !Object)} action Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @return {*} True if traversal was aborted.
         */


        LLRBNode.prototype.reverseTraversal = function (action) {
          return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
        };
        /**
         * @return {!Object} The minimum node in the tree.
         * @private
         */


        LLRBNode.prototype.min_ = function () {
          if (this.left.isEmpty()) {
            return this;
          } else {
            return this.left.min_();
          }
        };
        /**
         * @return {!K} The maximum key in the tree.
         */


        LLRBNode.prototype.minKey = function () {
          return this.min_().key;
        };
        /**
         * @return {!K} The maximum key in the tree.
         */


        LLRBNode.prototype.maxKey = function () {
          if (this.right.isEmpty()) {
            return this.key;
          } else {
            return this.right.maxKey();
          }
        };
        /**
         *
         * @param {!Object} key Key to insert.
         * @param {!Object} value Value to insert.
         * @param {Comparator} comparator Comparator.
         * @return {!LLRBNode} New tree, with the key/value added.
         */


        LLRBNode.prototype.insert = function (key, value, comparator) {
          var n = this;
          var cmp = comparator(key, n.key);

          if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
          } else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
          } else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
          }

          return n.fixUp_();
        };
        /**
         * @private
         * @return {!LLRBNode|LLRBEmptyNode} New tree, with the minimum key removed.
         */


        LLRBNode.prototype.removeMin_ = function () {
          if (this.left.isEmpty()) {
            return SortedMap.EMPTY_NODE;
          }

          var n = this;

          if (!n.left.isRed_() && !n.left.left.isRed_()) {
            n = n.moveRedLeft_();
          }

          n = n.copy(null, null, null, n.left.removeMin_(), null);
          return n.fixUp_();
        };
        /**
         * @param {!Object} key The key of the item to remove.
         * @param {Comparator} comparator Comparator.
         * @return {!LLRBNode|LLRBEmptyNode} New tree, with the specified item removed.
         */


        LLRBNode.prototype.remove = function (key, comparator) {
          var n, smallest;
          n = this;

          if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
              n = n.moveRedLeft_();
            }

            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
          } else {
            if (n.left.isRed_()) {
              n = n.rotateRight_();
            }

            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
              n = n.moveRedRight_();
            }

            if (comparator(key, n.key) === 0) {
              if (n.right.isEmpty()) {
                return SortedMap.EMPTY_NODE;
              } else {
                smallest = n.right.min_();
                n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
              }
            }

            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
          }

          return n.fixUp_();
        };
        /**
         * @private
         * @return {boolean} Whether this is a RED node.
         */


        LLRBNode.prototype.isRed_ = function () {
          return this.color;
        };
        /**
         * @private
         * @return {!LLRBNode} New tree after performing any needed rotations.
         */


        LLRBNode.prototype.fixUp_ = function () {
          var n = this;

          if (n.right.isRed_() && !n.left.isRed_()) {
            n = n.rotateLeft_();
          }

          if (n.left.isRed_() && n.left.left.isRed_()) {
            n = n.rotateRight_();
          }

          if (n.left.isRed_() && n.right.isRed_()) {
            n = n.colorFlip_();
          }

          return n;
        };
        /**
         * @private
         * @return {!LLRBNode} New tree, after moveRedLeft.
         */


        LLRBNode.prototype.moveRedLeft_ = function () {
          var n = this.colorFlip_();

          if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
          }

          return n;
        };
        /**
         * @private
         * @return {!LLRBNode} New tree, after moveRedRight.
         */


        LLRBNode.prototype.moveRedRight_ = function () {
          var n = this.colorFlip_();

          if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
          }

          return n;
        };
        /**
         * @private
         * @return {!LLRBNode} New tree, after rotateLeft.
         */


        LLRBNode.prototype.rotateLeft_ = function () {
          var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, nl, null);
        };
        /**
         * @private
         * @return {!LLRBNode} New tree, after rotateRight.
         */


        LLRBNode.prototype.rotateRight_ = function () {
          var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, nr);
        };
        /**
         * @private
         * @return {!LLRBNode} New tree, after colorFlip.
         */


        LLRBNode.prototype.colorFlip_ = function () {
          var left = this.left.copy(null, null, !this.left.color, null, null);
          var right = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, left, right);
        };
        /**
         * For testing.
         *
         * @private
         * @return {boolean} True if all is well.
         */


        LLRBNode.prototype.checkMaxDepth_ = function () {
          var blackDepth = this.check_();
          return Math.pow(2.0, blackDepth) <= this.count() + 1;
        };
        /**
         * @private
         * @return {number} Not sure what this returns exactly. :-).
         */


        LLRBNode.prototype.check_ = function () {
          if (this.isRed_() && this.left.isRed_()) {
            throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
          }

          if (this.right.isRed_()) {
            throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
          }

          var blackDepth = this.left.check_();

          if (blackDepth !== this.right.check_()) {
            throw new Error('Black depths differ');
          } else {
            return blackDepth + (this.isRed_() ? 0 : 1);
          }
        };

        LLRBNode.RED = true;
        LLRBNode.BLACK = false;
        return LLRBNode;
      }();
      /**
       * Represents an empty node (a leaf node in the Red-Black Tree).
       */


      var LLRBEmptyNode =
      /** @class */
      function () {
        function LLRBEmptyNode() {}
        /**
         * Returns a copy of the current node.
         *
         * @return {!LLRBEmptyNode} The node copy.
         */


        LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
          return this;
        };
        /**
         * Returns a copy of the tree, with the specified key/value added.
         *
         * @param {!K} key Key to be added.
         * @param {!V} value Value to be added.
         * @param {Comparator} comparator Comparator.
         * @return {!LLRBNode} New tree, with item added.
         */


        LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
          return new LLRBNode(key, value, null);
        };
        /**
         * Returns a copy of the tree, with the specified key removed.
         *
         * @param {!K} key The key to remove.
         * @param {Comparator} comparator Comparator.
         * @return {!LLRBEmptyNode} New tree, with item removed.
         */


        LLRBEmptyNode.prototype.remove = function (key, comparator) {
          return this;
        };
        /**
         * @return {number} The total number of nodes in the tree.
         */


        LLRBEmptyNode.prototype.count = function () {
          return 0;
        };
        /**
         * @return {boolean} True if the tree is empty.
         */


        LLRBEmptyNode.prototype.isEmpty = function () {
          return true;
        };
        /**
         * Traverses the tree in key order and calls the specified action function
         * for each node.
         *
         * @param {function(!K, !V):*} action Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @return {boolean} True if traversal was aborted.
         */


        LLRBEmptyNode.prototype.inorderTraversal = function (action) {
          return false;
        };
        /**
         * Traverses the tree in reverse key order and calls the specified action function
         * for each node.
         *
         * @param {function(!K, !V)} action Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @return {boolean} True if traversal was aborted.
         */


        LLRBEmptyNode.prototype.reverseTraversal = function (action) {
          return false;
        };
        /**
         * @return {null}
         */


        LLRBEmptyNode.prototype.minKey = function () {
          return null;
        };
        /**
         * @return {null}
         */


        LLRBEmptyNode.prototype.maxKey = function () {
          return null;
        };
        /**
         * @private
         * @return {number} Not sure what this returns exactly. :-).
         */


        LLRBEmptyNode.prototype.check_ = function () {
          return 0;
        };
        /**
         * @private
         * @return {boolean} Whether this node is red.
         */


        LLRBEmptyNode.prototype.isRed_ = function () {
          return false;
        };

        return LLRBEmptyNode;
      }();
      /**
       * An immutable sorted map implementation, based on a Left-leaning Red-Black
       * tree.
       */


      var SortedMap =
      /** @class */
      function () {
        /**
         * @template K, V
         * @param {function(K, K):number} comparator_ Key comparator.
         * @param {LLRBNode=} root_ (Optional) Root node for the map.
         */
        function SortedMap(comparator_, root_) {
          if (root_ === void 0) {
            root_ = SortedMap.EMPTY_NODE;
          }

          this.comparator_ = comparator_;
          this.root_ = root_;
        }
        /**
         * Returns a copy of the map, with the specified key/value added or replaced.
         * (TODO: We should perhaps rename this method to 'put')
         *
         * @param {!K} key Key to be added.
         * @param {!V} value Value to be added.
         * @return {!SortedMap.<K, V>} New map, with item added.
         */


        SortedMap.prototype.insert = function (key, value) {
          return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        };
        /**
         * Returns a copy of the map, with the specified key removed.
         *
         * @param {!K} key The key to remove.
         * @return {!SortedMap.<K, V>} New map, with item removed.
         */


        SortedMap.prototype.remove = function (key) {
          return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        };
        /**
         * Returns the value of the node with the given key, or null.
         *
         * @param {!K} key The key to look up.
         * @return {?V} The value of the node with the given key, or null if the
         * key doesn't exist.
         */


        SortedMap.prototype.get = function (key) {
          var cmp;
          var node = this.root_;

          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);

            if (cmp === 0) {
              return node.value;
            } else if (cmp < 0) {
              node = node.left;
            } else if (cmp > 0) {
              node = node.right;
            }
          }

          return null;
        };
        /**
         * Returns the key of the item *before* the specified key, or null if key is the first item.
         * @param {K} key The key to find the predecessor of
         * @return {?K} The predecessor key.
         */


        SortedMap.prototype.getPredecessorKey = function (key) {
          var cmp,
              node = this.root_,
              rightParent = null;

          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);

            if (cmp === 0) {
              if (!node.left.isEmpty()) {
                node = node.left;

                while (!node.right.isEmpty()) {
                  node = node.right;
                }

                return node.key;
              } else if (rightParent) {
                return rightParent.key;
              } else {
                return null; // first item.
              }
            } else if (cmp < 0) {
              node = node.left;
            } else if (cmp > 0) {
              rightParent = node;
              node = node.right;
            }
          }

          throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
        };
        /**
         * @return {boolean} True if the map is empty.
         */


        SortedMap.prototype.isEmpty = function () {
          return this.root_.isEmpty();
        };
        /**
         * @return {number} The total number of nodes in the map.
         */


        SortedMap.prototype.count = function () {
          return this.root_.count();
        };
        /**
         * @return {?K} The minimum key in the map.
         */


        SortedMap.prototype.minKey = function () {
          return this.root_.minKey();
        };
        /**
         * @return {?K} The maximum key in the map.
         */


        SortedMap.prototype.maxKey = function () {
          return this.root_.maxKey();
        };
        /**
         * Traverses the map in key order and calls the specified action function
         * for each key/value pair.
         *
         * @param {function(!K, !V):*} action Callback function to be called
         * for each key/value pair.  If action returns true, traversal is aborted.
         * @return {*} The first truthy value returned by action, or the last falsey
         *   value returned by action
         */


        SortedMap.prototype.inorderTraversal = function (action) {
          return this.root_.inorderTraversal(action);
        };
        /**
         * Traverses the map in reverse key order and calls the specified action function
         * for each key/value pair.
         *
         * @param {function(!Object, !Object)} action Callback function to be called
         * for each key/value pair.  If action returns true, traversal is aborted.
         * @return {*} True if the traversal was aborted.
         */


        SortedMap.prototype.reverseTraversal = function (action) {
          return this.root_.reverseTraversal(action);
        };
        /**
         * Returns an iterator over the SortedMap.
         * @template T
         * @param {(function(K, V):T)=} resultGenerator
         * @return {SortedMapIterator.<K, V, T>} The iterator.
         */


        SortedMap.prototype.getIterator = function (resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
        };

        SortedMap.prototype.getIteratorFrom = function (key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
        };

        SortedMap.prototype.getReverseIteratorFrom = function (key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
        };

        SortedMap.prototype.getReverseIterator = function (resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
        };
        /**
         * Always use the same empty node, to reduce memory.
         * @const
         */


        SortedMap.EMPTY_NODE = new LLRBEmptyNode();
        return SortedMap;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var LOG_2 = Math.log(2);
      /**
       * @constructor
       */

      var Base12Num =
      /** @class */
      function () {
        /**
         * @param {number} length
         */
        function Base12Num(length) {
          var logBase2 = function logBase2(num) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return parseInt(Math.log(num) / LOG_2, 10);
          };

          var bitMask = function bitMask(bits) {
            return parseInt(Array(bits + 1).join('1'), 2);
          };

          this.count = logBase2(length + 1);
          this.current_ = this.count - 1;
          var mask = bitMask(this.count);
          this.bits_ = length + 1 & mask;
        }
        /**
         * @return {boolean}
         */


        Base12Num.prototype.nextBitIsOne = function () {
          //noinspection JSBitwiseOperatorUsage
          var result = !(this.bits_ & 0x1 << this.current_);
          this.current_--;
          return result;
        };

        return Base12Num;
      }();
      /**
       * Takes a list of child nodes and constructs a SortedSet using the given comparison
       * function
       *
       * Uses the algorithm described in the paper linked here:
       * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
       *
       * @template K, V
       * @param {Array.<!NamedNode>} childList Unsorted list of children
       * @param {function(!NamedNode, !NamedNode):number} cmp The comparison method to be used
       * @param {(function(NamedNode):K)=} keyFn An optional function to extract K from a node wrapper, if K's
       *                                                        type is not NamedNode
       * @param {(function(K, K):number)=} mapSortFn An optional override for comparator used by the generated sorted map
       * @return {SortedMap.<K, V>}
       */


      var buildChildSet = function buildChildSet(childList, cmp, keyFn, mapSortFn) {
        childList.sort(cmp);

        var buildBalancedTree = function buildBalancedTree(low, high) {
          var length = high - low;
          var namedNode;
          var key;

          if (length === 0) {
            return null;
          } else if (length === 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var middle = parseInt(length / 2, 10) + low;
            var left = buildBalancedTree(low, middle);
            var right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
          }
        };

        var buildFrom12Array = function buildFrom12Array(base12) {
          var node = null;
          var root = null;
          var index = childList.length;

          var buildPennant = function buildPennant(chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
          };

          var attachPennant = function attachPennant(pennant) {
            if (node) {
              node.left = pennant;
              node = pennant;
            } else {
              root = pennant;
              node = pennant;
            }
          };

          for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne(); // The number of nodes taken in each slice is 2^(arr.length - (i + 1))

            var chunkSize = Math.pow(2, base12.count - (i + 1));

            if (isOne) {
              buildPennant(chunkSize, LLRBNode.BLACK);
            } else {
              // current == 2
              buildPennant(chunkSize, LLRBNode.BLACK);
              buildPennant(chunkSize, LLRBNode.RED);
            }
          }

          return root;
        };

        var base12 = new Base12Num(childList.length);
        var root = buildFrom12Array(base12); // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return new SortedMap(mapSortFn || cmp, root);
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _defaultIndexMap;

      var fallbackObject = {};

      var IndexMap =
      /** @class */
      function () {
        function IndexMap(indexes_, indexSet_) {
          this.indexes_ = indexes_;
          this.indexSet_ = indexSet_;
        }

        Object.defineProperty(IndexMap, "Default", {
          /**
           * The default IndexMap for nodes without a priority
           */
          get: function get() {
            util.assert(fallbackObject && PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
            _defaultIndexMap = _defaultIndexMap || new IndexMap({
              '.priority': fallbackObject
            }, {
              '.priority': PRIORITY_INDEX
            });
            return _defaultIndexMap;
          },
          enumerable: false,
          configurable: true
        });

        IndexMap.prototype.get = function (indexKey) {
          var sortedMap = util.safeGet(this.indexes_, indexKey);

          if (!sortedMap) {
            throw new Error('No index defined for ' + indexKey);
          }

          if (sortedMap instanceof SortedMap) {
            return sortedMap;
          } else {
            // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
            // regular child map
            return null;
          }
        };

        IndexMap.prototype.hasIndex = function (indexDefinition) {
          return util.contains(this.indexSet_, indexDefinition.toString());
        };

        IndexMap.prototype.addIndex = function (indexDefinition, existingChildren) {
          util.assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
          var childList = [];
          var sawIndexedValue = false;
          var iter = existingChildren.getIterator(NamedNode.Wrap);
          var next = iter.getNext();

          while (next) {
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
          }

          var newIndex;

          if (sawIndexedValue) {
            newIndex = buildChildSet(childList, indexDefinition.getCompare());
          } else {
            newIndex = fallbackObject;
          }

          var indexName = indexDefinition.toString();

          var newIndexSet = tslib.__assign({}, this.indexSet_);

          newIndexSet[indexName] = indexDefinition;

          var newIndexes = tslib.__assign({}, this.indexes_);

          newIndexes[indexName] = newIndex;
          return new IndexMap(newIndexes, newIndexSet);
        };
        /**
         * Ensure that this node is properly tracked in any indexes that we're maintaining
         */


        IndexMap.prototype.addToIndexes = function (namedNode, existingChildren) {
          var _this = this;

          var newIndexes = util.map(this.indexes_, function (indexedChildren, indexName) {
            var index = util.safeGet(_this.indexSet_, indexName);
            util.assert(index, 'Missing index implementation for ' + indexName);

            if (indexedChildren === fallbackObject) {
              // Check to see if we need to index everything
              if (index.isDefinedOn(namedNode.node)) {
                // We need to build this index
                var childList = [];
                var iter = existingChildren.getIterator(NamedNode.Wrap);
                var next = iter.getNext();

                while (next) {
                  if (next.name !== namedNode.name) {
                    childList.push(next);
                  }

                  next = iter.getNext();
                }

                childList.push(namedNode);
                return buildChildSet(childList, index.getCompare());
              } else {
                // No change, this remains a fallback
                return fallbackObject;
              }
            } else {
              var existingSnap = existingChildren.get(namedNode.name);
              var newChildren = indexedChildren;

              if (existingSnap) {
                newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
              }

              return newChildren.insert(namedNode, namedNode.node);
            }
          });
          return new IndexMap(newIndexes, this.indexSet_);
        };
        /**
         * Create a new IndexMap instance with the given value removed
         */


        IndexMap.prototype.removeFromIndexes = function (namedNode, existingChildren) {
          var newIndexes = util.map(this.indexes_, function (indexedChildren) {
            if (indexedChildren === fallbackObject) {
              // This is the fallback. Just return it, nothing to do in this case
              return indexedChildren;
            } else {
              var existingSnap = existingChildren.get(namedNode.name);

              if (existingSnap) {
                return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
              } else {
                // No record of this child
                return indexedChildren;
              }
            }
          });
          return new IndexMap(newIndexes, this.indexSet_);
        };

        return IndexMap;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function NAME_ONLY_COMPARATOR(left, right) {
        return nameCompare(left.name, right.name);
      }

      function NAME_COMPARATOR(left, right) {
        return nameCompare(left, right);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // TODO: For memory savings, don't store priorityNode_ if it's empty.


      var EMPTY_NODE;
      /**
       * ChildrenNode is a class for storing internal nodes in a DataSnapshot
       * (i.e. nodes with children).  It implements Node and stores the
       * list of children in the children property, sorted by child name.
       *
       * @constructor
       * @implements {Node}
       */

      var ChildrenNode =
      /** @class */
      function () {
        /**
         *
         * @param {!SortedMap.<string, !Node>} children_ List of children
         * of this node..
         * @param {?Node} priorityNode_ The priority of this node (as a snapshot node).
         * @param {!IndexMap} indexMap_
         */
        function ChildrenNode(children_, priorityNode_, indexMap_) {
          this.children_ = children_;
          this.priorityNode_ = priorityNode_;
          this.indexMap_ = indexMap_;
          this.lazyHash_ = null;
          /**
           * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
           * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
           * class instead of an empty ChildrenNode.
           */

          if (this.priorityNode_) {
            validatePriorityNode(this.priorityNode_);
          }

          if (this.children_.isEmpty()) {
            util.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
          }
        }

        Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
          get: function get() {
            return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
          },
          enumerable: false,
          configurable: true
        });
        /** @inheritDoc */

        ChildrenNode.prototype.isLeafNode = function () {
          return false;
        };
        /** @inheritDoc */


        ChildrenNode.prototype.getPriority = function () {
          return this.priorityNode_ || EMPTY_NODE;
        };
        /** @inheritDoc */


        ChildrenNode.prototype.updatePriority = function (newPriorityNode) {
          if (this.children_.isEmpty()) {
            // Don't allow priorities on empty nodes
            return this;
          } else {
            return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
          }
        };
        /** @inheritDoc */


        ChildrenNode.prototype.getImmediateChild = function (childName) {
          // Hack to treat priority as a regular child
          if (childName === '.priority') {
            return this.getPriority();
          } else {
            var child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
          }
        };
        /** @inheritDoc */


        ChildrenNode.prototype.getChild = function (path) {
          var front = path.getFront();

          if (front === null) {
            return this;
          }

          return this.getImmediateChild(front).getChild(path.popFront());
        };
        /** @inheritDoc */


        ChildrenNode.prototype.hasChild = function (childName) {
          return this.children_.get(childName) !== null;
        };
        /** @inheritDoc */


        ChildrenNode.prototype.updateImmediateChild = function (childName, newChildNode) {
          util.assert(newChildNode, 'We should always be passing snapshot nodes');

          if (childName === '.priority') {
            return this.updatePriority(newChildNode);
          } else {
            var namedNode = new NamedNode(childName, newChildNode);
            var newChildren = void 0,
                newIndexMap = void 0;

            if (newChildNode.isEmpty()) {
              newChildren = this.children_.remove(childName);
              newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
              newChildren = this.children_.insert(childName, newChildNode);
              newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }

            var newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
          }
        };
        /** @inheritDoc */


        ChildrenNode.prototype.updateChild = function (path, newChildNode) {
          var front = path.getFront();

          if (front === null) {
            return newChildNode;
          } else {
            util.assert(path.getFront() !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
          }
        };
        /** @inheritDoc */


        ChildrenNode.prototype.isEmpty = function () {
          return this.children_.isEmpty();
        };
        /** @inheritDoc */


        ChildrenNode.prototype.numChildren = function () {
          return this.children_.count();
        };
        /** @inheritDoc */


        ChildrenNode.prototype.val = function (exportFormat) {
          if (this.isEmpty()) {
            return null;
          }

          var obj = {};
          var numKeys = 0,
              maxKey = 0,
              allIntegerKeys = true;
          this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
            obj[key] = childNode.val(exportFormat);
            numKeys++;

            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
              maxKey = Math.max(maxKey, Number(key));
            } else {
              allIntegerKeys = false;
            }
          });

          if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            var array = []; // eslint-disable-next-line guard-for-in

            for (var key in obj) {
              array[key] = obj[key];
            }

            return array;
          } else {
            if (exportFormat && !this.getPriority().isEmpty()) {
              obj['.priority'] = this.getPriority().val();
            }

            return obj;
          }
        };
        /** @inheritDoc */


        ChildrenNode.prototype.hash = function () {
          if (this.lazyHash_ === null) {
            var toHash_1 = '';

            if (!this.getPriority().isEmpty()) {
              toHash_1 += 'priority:' + priorityHashText(this.getPriority().val()) + ':';
            }

            this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
              var childHash = childNode.hash();

              if (childHash !== '') {
                toHash_1 += ':' + key + ':' + childHash;
              }
            });
            this.lazyHash_ = toHash_1 === '' ? '' : sha1(toHash_1);
          }

          return this.lazyHash_;
        };
        /** @inheritDoc */


        ChildrenNode.prototype.getPredecessorChildName = function (childName, childNode, index) {
          var idx = this.resolveIndex_(index);

          if (idx) {
            var predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
          } else {
            return this.children_.getPredecessorKey(childName);
          }
        };
        /**
         * @param {!Index} indexDefinition
         * @return {?string}
         */


        ChildrenNode.prototype.getFirstChildName = function (indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);

          if (idx) {
            var minKey = idx.minKey();
            return minKey && minKey.name;
          } else {
            return this.children_.minKey();
          }
        };
        /**
         * @param {!Index} indexDefinition
         * @return {?NamedNode}
         */


        ChildrenNode.prototype.getFirstChild = function (indexDefinition) {
          var minKey = this.getFirstChildName(indexDefinition);

          if (minKey) {
            return new NamedNode(minKey, this.children_.get(minKey));
          } else {
            return null;
          }
        };
        /**
         * Given an index, return the key name of the largest value we have, according to that index
         * @param {!Index} indexDefinition
         * @return {?string}
         */


        ChildrenNode.prototype.getLastChildName = function (indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);

          if (idx) {
            var maxKey = idx.maxKey();
            return maxKey && maxKey.name;
          } else {
            return this.children_.maxKey();
          }
        };
        /**
         * @param {!Index} indexDefinition
         * @return {?NamedNode}
         */


        ChildrenNode.prototype.getLastChild = function (indexDefinition) {
          var maxKey = this.getLastChildName(indexDefinition);

          if (maxKey) {
            return new NamedNode(maxKey, this.children_.get(maxKey));
          } else {
            return null;
          }
        };
        /**
         * @inheritDoc
         */


        ChildrenNode.prototype.forEachChild = function (index, action) {
          var idx = this.resolveIndex_(index);

          if (idx) {
            return idx.inorderTraversal(function (wrappedNode) {
              return action(wrappedNode.name, wrappedNode.node);
            });
          } else {
            return this.children_.inorderTraversal(action);
          }
        };
        /**
         * @param {!Index} indexDefinition
         * @return {SortedMapIterator}
         */


        ChildrenNode.prototype.getIterator = function (indexDefinition) {
          return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
        };
        /**
         *
         * @param {!NamedNode} startPost
         * @param {!Index} indexDefinition
         * @return {!SortedMapIterator}
         */


        ChildrenNode.prototype.getIteratorFrom = function (startPost, indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);

          if (idx) {
            return idx.getIteratorFrom(startPost, function (key) {
              return key;
            });
          } else {
            var iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
            var next = iterator.peek();

            while (next != null && indexDefinition.compare(next, startPost) < 0) {
              iterator.getNext();
              next = iterator.peek();
            }

            return iterator;
          }
        };
        /**
         * @param {!Index} indexDefinition
         * @return {!SortedMapIterator}
         */


        ChildrenNode.prototype.getReverseIterator = function (indexDefinition) {
          return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
        };
        /**
         * @param {!NamedNode} endPost
         * @param {!Index} indexDefinition
         * @return {!SortedMapIterator}
         */


        ChildrenNode.prototype.getReverseIteratorFrom = function (endPost, indexDefinition) {
          var idx = this.resolveIndex_(indexDefinition);

          if (idx) {
            return idx.getReverseIteratorFrom(endPost, function (key) {
              return key;
            });
          } else {
            var iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
            var next = iterator.peek();

            while (next != null && indexDefinition.compare(next, endPost) > 0) {
              iterator.getNext();
              next = iterator.peek();
            }

            return iterator;
          }
        };
        /**
         * @inheritDoc
         */


        ChildrenNode.prototype.compareTo = function (other) {
          if (this.isEmpty()) {
            if (other.isEmpty()) {
              return 0;
            } else {
              return -1;
            }
          } else if (other.isLeafNode() || other.isEmpty()) {
            return 1;
          } else if (other === MAX_NODE$2) {
            return -1;
          } else {
            // Must be another node with children.
            return 0;
          }
        };
        /**
         * @inheritDoc
         */


        ChildrenNode.prototype.withIndex = function (indexDefinition) {
          if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
            return this;
          } else {
            var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
          }
        };
        /**
         * @inheritDoc
         */


        ChildrenNode.prototype.isIndexed = function (index) {
          return index === KEY_INDEX || this.indexMap_.hasIndex(index);
        };
        /**
         * @inheritDoc
         */


        ChildrenNode.prototype.equals = function (other) {
          if (other === this) {
            return true;
          } else if (other.isLeafNode()) {
            return false;
          } else {
            var otherChildrenNode = other;

            if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
              return false;
            } else if (this.children_.count() === otherChildrenNode.children_.count()) {
              var thisIter = this.getIterator(PRIORITY_INDEX);
              var otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
              var thisCurrent = thisIter.getNext();
              var otherCurrent = otherIter.getNext();

              while (thisCurrent && otherCurrent) {
                if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
                  return false;
                }

                thisCurrent = thisIter.getNext();
                otherCurrent = otherIter.getNext();
              }

              return thisCurrent === null && otherCurrent === null;
            } else {
              return false;
            }
          }
        };
        /**
         * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
         * instead.
         *
         * @private
         * @param {!Index} indexDefinition
         * @return {?SortedMap.<NamedNode, Node>}
         */


        ChildrenNode.prototype.resolveIndex_ = function (indexDefinition) {
          if (indexDefinition === KEY_INDEX) {
            return null;
          } else {
            return this.indexMap_.get(indexDefinition.toString());
          }
        };
        /**
         * @private
         * @type {RegExp}
         */


        ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
        return ChildrenNode;
      }();
      /**
       * @constructor
       * @extends {ChildrenNode}
       * @private
       */


      var MaxNode =
      /** @class */
      function (_super) {
        tslib.__extends(MaxNode, _super);

        function MaxNode() {
          return _super.call(this, new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default) || this;
        }

        MaxNode.prototype.compareTo = function (other) {
          if (other === this) {
            return 0;
          } else {
            return 1;
          }
        };

        MaxNode.prototype.equals = function (other) {
          // Not that we every compare it, but MAX_NODE is only ever equal to itself
          return other === this;
        };

        MaxNode.prototype.getPriority = function () {
          return this;
        };

        MaxNode.prototype.getImmediateChild = function (childName) {
          return ChildrenNode.EMPTY_NODE;
        };

        MaxNode.prototype.isEmpty = function () {
          return false;
        };

        return MaxNode;
      }(ChildrenNode);
      /**
       * Marker that will sort higher than any other snapshot.
       * @type {!MAX_NODE}
       * @const
       */


      var MAX_NODE$2 = new MaxNode();
      Object.defineProperties(NamedNode, {
        MIN: {
          value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
        },
        MAX: {
          value: new NamedNode(MAX_NAME, MAX_NODE$2)
        }
      });
      /**
       * Reference Extensions
       */

      KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
      LeafNode.__childrenNodeConstructor = ChildrenNode;
      setMaxNode(MAX_NODE$2);
      setMaxNode$1(MAX_NODE$2);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var USE_HINZE = true;
      /**
       * Constructs a snapshot node representing the passed JSON and returns it.
       * @param {*} json JSON to create a node for.
       * @param {?string|?number=} priority Optional priority to use.  This will be ignored if the
       * passed JSON contains a .priority property.
       * @return {!Node}
       */

      function nodeFromJSON$1(json, priority) {
        if (priority === void 0) {
          priority = null;
        }

        if (json === null) {
          return ChildrenNode.EMPTY_NODE;
        }

        if (typeof json === 'object' && '.priority' in json) {
          priority = json['.priority'];
        }

        util.assert(priority === null || typeof priority === 'string' || typeof priority === 'number' || typeof priority === 'object' && '.sv' in priority, 'Invalid priority type found: ' + typeof priority);

        if (typeof json === 'object' && '.value' in json && json['.value'] !== null) {
          json = json['.value'];
        } // Valid leaf nodes include non-objects or server-value wrapper objects


        if (typeof json !== 'object' || '.sv' in json) {
          var jsonLeaf = json;
          return new LeafNode(jsonLeaf, nodeFromJSON$1(priority));
        }

        if (!(json instanceof Array) && USE_HINZE) {
          var children_1 = [];
          var childrenHavePriority_1 = false;
          var hinzeJsonObj = json;
          each(hinzeJsonObj, function (key, child) {
            if (key.substring(0, 1) !== '.') {
              // Ignore metadata nodes
              var childNode = nodeFromJSON$1(child);

              if (!childNode.isEmpty()) {
                childrenHavePriority_1 = childrenHavePriority_1 || !childNode.getPriority().isEmpty();
                children_1.push(new NamedNode(key, childNode));
              }
            }
          });

          if (children_1.length === 0) {
            return ChildrenNode.EMPTY_NODE;
          }

          var childSet = buildChildSet(children_1, NAME_ONLY_COMPARATOR, function (namedNode) {
            return namedNode.name;
          }, NAME_COMPARATOR);

          if (childrenHavePriority_1) {
            var sortedChildSet = buildChildSet(children_1, PRIORITY_INDEX.getCompare());
            return new ChildrenNode(childSet, nodeFromJSON$1(priority), new IndexMap({
              '.priority': sortedChildSet
            }, {
              '.priority': PRIORITY_INDEX
            }));
          } else {
            return new ChildrenNode(childSet, nodeFromJSON$1(priority), IndexMap.Default);
          }
        } else {
          var node_1 = ChildrenNode.EMPTY_NODE;
          each(json, function (key, childData) {
            if (util.contains(json, key)) {
              if (key.substring(0, 1) !== '.') {
                // ignore metadata nodes.
                var childNode = nodeFromJSON$1(childData);

                if (childNode.isLeafNode() || !childNode.isEmpty()) {
                  node_1 = node_1.updateImmediateChild(key, childNode);
                }
              }
            }
          });
          return node_1.updatePriority(nodeFromJSON$1(priority));
        }
      }

      setNodeFromJSON(nodeFromJSON$1);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @constructor
       * @extends {Index}
       * @private
       */

      var ValueIndex =
      /** @class */
      function (_super) {
        tslib.__extends(ValueIndex, _super);

        function ValueIndex() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritDoc
         */


        ValueIndex.prototype.compare = function (a, b) {
          var indexCmp = a.node.compareTo(b.node);

          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        };
        /**
         * @inheritDoc
         */


        ValueIndex.prototype.isDefinedOn = function (node) {
          return true;
        };
        /**
         * @inheritDoc
         */


        ValueIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
          return !oldNode.equals(newNode);
        };
        /**
         * @inheritDoc
         */


        ValueIndex.prototype.minPost = function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return NamedNode.MIN;
        };
        /**
         * @inheritDoc
         */


        ValueIndex.prototype.maxPost = function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return NamedNode.MAX;
        };
        /**
         * @param {*} indexValue
         * @param {string} name
         * @return {!NamedNode}
         */


        ValueIndex.prototype.makePost = function (indexValue, name) {
          var valueNode = nodeFromJSON$1(indexValue);
          return new NamedNode(name, valueNode);
        };
        /**
         * @return {!string} String representation for inclusion in a query spec
         */


        ValueIndex.prototype.toString = function () {
          return '.value';
        };

        return ValueIndex;
      }(Index);

      var VALUE_INDEX = new ValueIndex();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param {!Path} indexPath
       * @constructor
       * @extends {Index}
       */

      var PathIndex =
      /** @class */
      function (_super) {
        tslib.__extends(PathIndex, _super);

        function PathIndex(indexPath_) {
          var _this = _super.call(this) || this;

          _this.indexPath_ = indexPath_;
          util.assert(!indexPath_.isEmpty() && indexPath_.getFront() !== '.priority', "Can't create PathIndex with empty path or .priority key");
          return _this;
        }
        /**
         * @param {!Node} snap
         * @return {!Node}
         * @protected
         */


        PathIndex.prototype.extractChild = function (snap) {
          return snap.getChild(this.indexPath_);
        };
        /**
         * @inheritDoc
         */


        PathIndex.prototype.isDefinedOn = function (node) {
          return !node.getChild(this.indexPath_).isEmpty();
        };
        /**
         * @inheritDoc
         */


        PathIndex.prototype.compare = function (a, b) {
          var aChild = this.extractChild(a.node);
          var bChild = this.extractChild(b.node);
          var indexCmp = aChild.compareTo(bChild);

          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        };
        /**
         * @inheritDoc
         */


        PathIndex.prototype.makePost = function (indexValue, name) {
          var valueNode = nodeFromJSON$1(indexValue);
          var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
          return new NamedNode(name, node);
        };
        /**
         * @inheritDoc
         */


        PathIndex.prototype.maxPost = function () {
          var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE$2);
          return new NamedNode(MAX_NAME, node);
        };
        /**
         * @inheritDoc
         */


        PathIndex.prototype.toString = function () {
          return this.indexPath_.slice().join('/');
        };

        return PathIndex;
      }(Index);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Class representing a firebase data snapshot.  It wraps a SnapshotNode and
       * surfaces the public methods (val, forEach, etc.) we want to expose.
       */


      var DataSnapshot =
      /** @class */
      function () {
        /**
         * @param {!Node} node_ A SnapshotNode to wrap.
         * @param {!Reference} ref_ The ref of the location this snapshot came from.
         * @param {!Index} index_ The iteration order for this snapshot
         */
        function DataSnapshot(node_, ref_, index_) {
          this.node_ = node_;
          this.ref_ = ref_;
          this.index_ = index_;
        }
        /**
         * Retrieves the snapshot contents as JSON.  Returns null if the snapshot is
         * empty.
         *
         * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
         */


        DataSnapshot.prototype.val = function () {
          util.validateArgCount('DataSnapshot.val', 0, 0, arguments.length);
          return this.node_.val();
        };
        /**
         * Returns the snapshot contents as JSON, including priorities of node.  Suitable for exporting
         * the entire node contents.
         * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
         */


        DataSnapshot.prototype.exportVal = function () {
          util.validateArgCount('DataSnapshot.exportVal', 0, 0, arguments.length);
          return this.node_.val(true);
        }; // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
        // for end-users


        DataSnapshot.prototype.toJSON = function () {
          // Optional spacer argument is unnecessary because we're depending on recursion rather than stringifying the content
          util.validateArgCount('DataSnapshot.toJSON', 0, 1, arguments.length);
          return this.exportVal();
        };
        /**
         * Returns whether the snapshot contains a non-null value.
         *
         * @return {boolean} Whether the snapshot contains a non-null value, or is empty.
         */


        DataSnapshot.prototype.exists = function () {
          util.validateArgCount('DataSnapshot.exists', 0, 0, arguments.length);
          return !this.node_.isEmpty();
        };
        /**
         * Returns a DataSnapshot of the specified child node's contents.
         *
         * @param {!string} childPathString Path to a child.
         * @return {!DataSnapshot} DataSnapshot for child node.
         */


        DataSnapshot.prototype.child = function (childPathString) {
          util.validateArgCount('DataSnapshot.child', 0, 1, arguments.length); // Ensure the childPath is a string (can be a number)

          childPathString = String(childPathString);
          validatePathString('DataSnapshot.child', 1, childPathString, false);
          var childPath = new Path(childPathString);
          var childRef = this.ref_.child(childPath);
          return new DataSnapshot(this.node_.getChild(childPath), childRef, PRIORITY_INDEX);
        };
        /**
         * Returns whether the snapshot contains a child at the specified path.
         *
         * @param {!string} childPathString Path to a child.
         * @return {boolean} Whether the child exists.
         */


        DataSnapshot.prototype.hasChild = function (childPathString) {
          util.validateArgCount('DataSnapshot.hasChild', 1, 1, arguments.length);
          validatePathString('DataSnapshot.hasChild', 1, childPathString, false);
          var childPath = new Path(childPathString);
          return !this.node_.getChild(childPath).isEmpty();
        };
        /**
         * Returns the priority of the object, or null if no priority was set.
         *
         * @return {string|number|null} The priority.
         */


        DataSnapshot.prototype.getPriority = function () {
          util.validateArgCount('DataSnapshot.getPriority', 0, 0, arguments.length); // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)

          return this.node_.getPriority().val();
        };
        /**
         * Iterates through child nodes and calls the specified action for each one.
         *
         * @param {function(!DataSnapshot)} action Callback function to be called
         * for each child.
         * @return {boolean} True if forEach was canceled by action returning true for
         * one of the child nodes.
         */


        DataSnapshot.prototype.forEach = function (action) {
          var _this = this;

          util.validateArgCount('DataSnapshot.forEach', 1, 1, arguments.length);
          util.validateCallback('DataSnapshot.forEach', 1, action, false);

          if (this.node_.isLeafNode()) {
            return false;
          }

          var childrenNode = this.node_; // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...

          return !!childrenNode.forEachChild(this.index_, function (key, node) {
            return action(new DataSnapshot(node, _this.ref_.child(key), PRIORITY_INDEX));
          });
        };
        /**
         * Returns whether this DataSnapshot has children.
         * @return {boolean} True if the DataSnapshot contains 1 or more child nodes.
         */


        DataSnapshot.prototype.hasChildren = function () {
          util.validateArgCount('DataSnapshot.hasChildren', 0, 0, arguments.length);

          if (this.node_.isLeafNode()) {
            return false;
          } else {
            return !this.node_.isEmpty();
          }
        };

        Object.defineProperty(DataSnapshot.prototype, "key", {
          get: function get() {
            return this.ref_.getKey();
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Returns the number of children for this DataSnapshot.
         * @return {number} The number of children that this DataSnapshot contains.
         */

        DataSnapshot.prototype.numChildren = function () {
          util.validateArgCount('DataSnapshot.numChildren', 0, 0, arguments.length);
          return this.node_.numChildren();
        };
        /**
         * @return {Reference} The Firebase reference for the location this snapshot's data came from.
         */


        DataSnapshot.prototype.getRef = function () {
          util.validateArgCount('DataSnapshot.ref', 0, 0, arguments.length);
          return this.ref_;
        };

        Object.defineProperty(DataSnapshot.prototype, "ref", {
          get: function get() {
            return this.getRef();
          },
          enumerable: false,
          configurable: true
        });
        return DataSnapshot;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Encapsulates the data needed to raise an event
       * @implements {Event}
       */


      var DataEvent =
      /** @class */
      function () {
        /**
         * @param {!string} eventType One of: value, child_added, child_changed, child_moved, child_removed
         * @param {!EventRegistration} eventRegistration The function to call to with the event data. User provided
         * @param {!DataSnapshot} snapshot The data backing the event
         * @param {?string=} prevName Optional, the name of the previous child for child_* events.
         */
        function DataEvent(eventType, eventRegistration, snapshot, prevName) {
          this.eventType = eventType;
          this.eventRegistration = eventRegistration;
          this.snapshot = snapshot;
          this.prevName = prevName;
        }
        /**
         * @inheritDoc
         */


        DataEvent.prototype.getPath = function () {
          var ref = this.snapshot.getRef();

          if (this.eventType === 'value') {
            return ref.path;
          } else {
            return ref.getParent().path;
          }
        };
        /**
         * @inheritDoc
         */


        DataEvent.prototype.getEventType = function () {
          return this.eventType;
        };
        /**
         * @inheritDoc
         */


        DataEvent.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        };
        /**
         * @inheritDoc
         */


        DataEvent.prototype.toString = function () {
          return this.getPath().toString() + ':' + this.eventType + ':' + util.stringify(this.snapshot.exportVal());
        };

        return DataEvent;
      }();

      var CancelEvent =
      /** @class */
      function () {
        /**
         * @param {EventRegistration} eventRegistration
         * @param {Error} error
         * @param {!Path} path
         */
        function CancelEvent(eventRegistration, error, path) {
          this.eventRegistration = eventRegistration;
          this.error = error;
          this.path = path;
        }
        /**
         * @inheritDoc
         */


        CancelEvent.prototype.getPath = function () {
          return this.path;
        };
        /**
         * @inheritDoc
         */


        CancelEvent.prototype.getEventType = function () {
          return 'cancel';
        };
        /**
         * @inheritDoc
         */


        CancelEvent.prototype.getEventRunner = function () {
          return this.eventRegistration.getEventRunner(this);
        };
        /**
         * @inheritDoc
         */


        CancelEvent.prototype.toString = function () {
          return this.path.toString() + ':cancel';
        };

        return CancelEvent;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents registration for 'value' events.
       */


      var ValueEventRegistration =
      /** @class */
      function () {
        /**
         * @param {?function(!DataSnapshot)} callback_
         * @param {?function(Error)} cancelCallback_
         * @param {?Object} context_
         */
        function ValueEventRegistration(callback_, cancelCallback_, context_) {
          this.callback_ = callback_;
          this.cancelCallback_ = cancelCallback_;
          this.context_ = context_;
        }
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.respondsTo = function (eventType) {
          return eventType === 'value';
        };
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.createEvent = function (change, query) {
          var index = query.getQueryParams().getIndex();
          return new DataEvent('value', this, new DataSnapshot(change.snapshotNode, query.getRef(), index));
        };
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.getEventRunner = function (eventData) {
          var ctx = this.context_;

          if (eventData.getEventType() === 'cancel') {
            util.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_1 = this.cancelCallback_;
            return function () {
              // We know that error exists, we checked above that this is a cancel event
              cancelCB_1.call(ctx, eventData.error);
            };
          } else {
            var cb_1 = this.callback_;
            return function () {
              cb_1.call(ctx, eventData.snapshot);
            };
          }
        };
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.createCancelEvent = function (error, path) {
          if (this.cancelCallback_) {
            return new CancelEvent(this, error, path);
          } else {
            return null;
          }
        };
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.matches = function (other) {
          if (!(other instanceof ValueEventRegistration)) {
            return false;
          } else if (!other.callback_ || !this.callback_) {
            // If no callback specified, we consider it to match any callback.
            return true;
          } else {
            return other.callback_ === this.callback_ && other.context_ === this.context_;
          }
        };
        /**
         * @inheritDoc
         */


        ValueEventRegistration.prototype.hasAnyCallback = function () {
          return this.callback_ !== null;
        };

        return ValueEventRegistration;
      }();
      /**
       * Represents the registration of 1 or more child_xxx events.
       *
       * Currently, it is always exactly 1 child_xxx event, but the idea is we might let you
       * register a group of callbacks together in the future.
       *
       * @constructor
       * @implements {EventRegistration}
       */


      var ChildEventRegistration =
      /** @class */
      function () {
        /**
         * @param {?Object.<string, function(!DataSnapshot, ?string=)>} callbacks_
         * @param {?function(Error)} cancelCallback_
         * @param {Object=} context_
         */
        function ChildEventRegistration(callbacks_, cancelCallback_, context_) {
          this.callbacks_ = callbacks_;
          this.cancelCallback_ = cancelCallback_;
          this.context_ = context_;
        }
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.respondsTo = function (eventType) {
          var eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
          eventToCheck = eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
          return util.contains(this.callbacks_, eventToCheck);
        };
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.createCancelEvent = function (error, path) {
          if (this.cancelCallback_) {
            return new CancelEvent(this, error, path);
          } else {
            return null;
          }
        };
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.createEvent = function (change, query) {
          util.assert(change.childName != null, 'Child events should have a childName.');
          var ref = query.getRef().child(
          /** @type {!string} */
          change.childName);
          var index = query.getQueryParams().getIndex();
          return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, ref, index), change.prevName);
        };
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.getEventRunner = function (eventData) {
          var ctx = this.context_;

          if (eventData.getEventType() === 'cancel') {
            util.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_2 = this.cancelCallback_;
            return function () {
              // We know that error exists, we checked above that this is a cancel event
              cancelCB_2.call(ctx, eventData.error);
            };
          } else {
            var cb_2 = this.callbacks_[eventData.eventType];
            return function () {
              cb_2.call(ctx, eventData.snapshot, eventData.prevName);
            };
          }
        };
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.matches = function (other) {
          var _this = this;

          if (other instanceof ChildEventRegistration) {
            if (!this.callbacks_ || !other.callbacks_) {
              return true;
            } else if (this.context_ === other.context_) {
              var otherKeys = Object.keys(other.callbacks_);
              var thisKeys = Object.keys(this.callbacks_);
              var otherCount = otherKeys.length;
              var thisCount = thisKeys.length;

              if (otherCount === thisCount) {
                // If count is 1, do an exact match on eventType, if either is defined but null, it's a match.
                // If event types don't match, not a match
                // If count is not 1, exact match across all
                if (otherCount === 1) {
                  var otherKey = otherKeys[0];
                  var thisKey = thisKeys[0];
                  return thisKey === otherKey && (!other.callbacks_[otherKey] || !this.callbacks_[thisKey] || other.callbacks_[otherKey] === this.callbacks_[thisKey]);
                } else {
                  // Exact match on each key.
                  return thisKeys.every(function (eventType) {
                    return other.callbacks_[eventType] === _this.callbacks_[eventType];
                  });
                }
              }
            }
          }

          return false;
        };
        /**
         * @inheritDoc
         */


        ChildEventRegistration.prototype.hasAnyCallback = function () {
          return this.callbacks_ !== null;
        };

        return ChildEventRegistration;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var __referenceConstructor;
      /**
       * A Query represents a filter to be applied to a firebase location.  This object purely represents the
       * query expression (and exposes our public API to build the query).  The actual query logic is in ViewBase.js.
       *
       * Since every Firebase reference is a query, Firebase inherits from this object.
       */


      var Query =
      /** @class */
      function () {
        function Query(repo, path, queryParams_, orderByCalled_) {
          this.repo = repo;
          this.path = path;
          this.queryParams_ = queryParams_;
          this.orderByCalled_ = orderByCalled_;
        }

        Object.defineProperty(Query, "__referenceConstructor", {
          get: function get() {
            util.assert(__referenceConstructor, 'Reference.ts has not been loaded');
            return __referenceConstructor;
          },
          set: function set(val) {
            __referenceConstructor = val;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Validates start/end values for queries.
         * @param {!QueryParams} params
         * @private
         */

        Query.validateQueryEndpoints_ = function (params) {
          var startNode = null;
          var endNode = null;

          if (params.hasStart()) {
            startNode = params.getIndexStartValue();
          }

          if (params.hasEnd()) {
            endNode = params.getIndexEndValue();
          }

          if (params.getIndex() === KEY_INDEX) {
            var tooManyArgsError = 'Query: When ordering by key, you may only pass one argument to ' + 'startAt(), endAt(), or equalTo().';
            var wrongArgTypeError = 'Query: When ordering by key, the argument passed to startAt(), endAt(),' + 'or equalTo() must be a string.';

            if (params.hasStart()) {
              var startName = params.getIndexStartName();

              if (startName !== MIN_NAME) {
                throw new Error(tooManyArgsError);
              } else if (typeof startNode !== 'string') {
                throw new Error(wrongArgTypeError);
              }
            }

            if (params.hasEnd()) {
              var endName = params.getIndexEndName();

              if (endName !== MAX_NAME) {
                throw new Error(tooManyArgsError);
              } else if (typeof endNode !== 'string') {
                throw new Error(wrongArgTypeError);
              }
            }
          } else if (params.getIndex() === PRIORITY_INDEX) {
            if (startNode != null && !isValidPriority(startNode) || endNode != null && !isValidPriority(endNode)) {
              throw new Error('Query: When ordering by priority, the first argument passed to startAt(), ' + 'endAt(), or equalTo() must be a valid priority value (null, a number, or a string).');
            }
          } else {
            util.assert(params.getIndex() instanceof PathIndex || params.getIndex() === VALUE_INDEX, 'unknown index type.');

            if (startNode != null && typeof startNode === 'object' || endNode != null && typeof endNode === 'object') {
              throw new Error('Query: First argument passed to startAt(), endAt(), or equalTo() cannot be ' + 'an object.');
            }
          }
        };
        /**
         * Validates that limit* has been called with the correct combination of parameters
         * @param {!QueryParams} params
         * @private
         */


        Query.validateLimit_ = function (params) {
          if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) {
            throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
          }
        };
        /**
         * Validates that no other order by call has been made
         * @param {!string} fnName
         * @private
         */


        Query.prototype.validateNoPreviousOrderByCall_ = function (fnName) {
          if (this.orderByCalled_ === true) {
            throw new Error(fnName + ": You can't combine multiple orderBy calls.");
          }
        };
        /**
         * @return {!QueryParams}
         */


        Query.prototype.getQueryParams = function () {
          return this.queryParams_;
        };
        /**
         * @return {!Reference}
         */


        Query.prototype.getRef = function () {
          util.validateArgCount('Query.ref', 0, 0, arguments.length); // This is a slight hack. We cannot goog.require('fb.api.Firebase'), since Firebase requires fb.api.Query.
          // However, we will always export 'Firebase' to the global namespace, so it's guaranteed to exist by the time this
          // method gets called.

          return new Query.__referenceConstructor(this.repo, this.path);
        };
        /**
         * @param {!string} eventType
         * @param {!function(DataSnapshot, string=)} callback
         * @param {(function(Error)|Object)=} cancelCallbackOrContext
         * @param {Object=} context
         * @return {!function(DataSnapshot, string=)}
         */


        Query.prototype.on = function (eventType, callback, cancelCallbackOrContext, context) {
          util.validateArgCount('Query.on', 2, 4, arguments.length);
          validateEventType('Query.on', 1, eventType, false);
          util.validateCallback('Query.on', 2, callback, false);
          var ret = Query.getCancelAndContextArgs_('Query.on', cancelCallbackOrContext, context);

          if (eventType === 'value') {
            this.onValueEvent(callback, ret.cancel, ret.context);
          } else {
            var callbacks = {};
            callbacks[eventType] = callback;
            this.onChildEvent(callbacks, ret.cancel, ret.context);
          }

          return callback;
        };
        /**
         * @param {!function(!DataSnapshot)} callback
         * @param {?function(Error)} cancelCallback
         * @param {?Object} context
         * @protected
         */


        Query.prototype.onValueEvent = function (callback, cancelCallback, context) {
          var container = new ValueEventRegistration(callback, cancelCallback || null, context || null);
          this.repo.addEventCallbackForQuery(this, container);
        };
        /**
         * @param {!Object.<string, !function(!DataSnapshot, ?string)>} callbacks
         * @param {?function(Error)} cancelCallback
         * @param {?Object} context
         * @protected
         */


        Query.prototype.onChildEvent = function (callbacks, cancelCallback, context) {
          var container = new ChildEventRegistration(callbacks, cancelCallback, context);
          this.repo.addEventCallbackForQuery(this, container);
        };
        /**
         * @param {string=} eventType
         * @param {(function(!DataSnapshot, ?string=))=} callback
         * @param {Object=} context
         */


        Query.prototype.off = function (eventType, callback, context) {
          util.validateArgCount('Query.off', 0, 3, arguments.length);
          validateEventType('Query.off', 1, eventType, true);
          util.validateCallback('Query.off', 2, callback, true);
          util.validateContextObject('Query.off', 3, context, true);
          var container = null;
          var callbacks = null;

          if (eventType === 'value') {
            var valueCallback = callback || null;
            container = new ValueEventRegistration(valueCallback, null, context || null);
          } else if (eventType) {
            if (callback) {
              callbacks = {};
              callbacks[eventType] = callback;
            }

            container = new ChildEventRegistration(callbacks, null, context || null);
          }

          this.repo.removeEventCallbackForQuery(this, container);
        };
        /**
         * Attaches a listener, waits for the first event, and then removes the listener
         * @param {!string} eventType
         * @param {!function(!DataSnapshot, string=)} userCallback
         * @param failureCallbackOrContext
         * @param context
         * @return {!firebase.Promise}
         */


        Query.prototype.once = function (eventType, userCallback, failureCallbackOrContext, context) {
          var _this = this;

          util.validateArgCount('Query.once', 1, 4, arguments.length);
          validateEventType('Query.once', 1, eventType, false);
          util.validateCallback('Query.once', 2, userCallback, true);
          var ret = Query.getCancelAndContextArgs_('Query.once', failureCallbackOrContext, context); // TODO: Implement this more efficiently (in particular, use 'get' wire protocol for 'value' event)
          // TODO: consider actually wiring the callbacks into the promise. We cannot do this without a breaking change
          // because the API currently expects callbacks will be called synchronously if the data is cached, but this is
          // against the Promise specification.

          var firstCall = true;
          var deferred = new util.Deferred(); // A dummy error handler in case a user wasn't expecting promises

          deferred.promise["catch"](function () {});

          var onceCallback = function onceCallback(snapshot) {
            // NOTE: Even though we unsubscribe, we may get called multiple times if a single action (e.g. set() with JSON)
            // triggers multiple events (e.g. child_added or child_changed).
            if (firstCall) {
              firstCall = false;

              _this.off(eventType, onceCallback);

              if (userCallback) {
                userCallback.bind(ret.context)(snapshot);
              }

              deferred.resolve(snapshot);
            }
          };

          this.on(eventType, onceCallback,
          /*cancel=*/
          function (err) {
            _this.off(eventType, onceCallback);

            if (ret.cancel) {
              ret.cancel.bind(ret.context)(err);
            }

            deferred.reject(err);
          });
          return deferred.promise;
        };
        /**
         * Set a limit and anchor it to the start of the window.
         * @param {!number} limit
         * @return {!Query}
         */


        Query.prototype.limitToFirst = function (limit) {
          util.validateArgCount('Query.limitToFirst', 1, 1, arguments.length);

          if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
            throw new Error('Query.limitToFirst: First argument must be a positive integer.');
          }

          if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToFirst: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
          }

          return new Query(this.repo, this.path, this.queryParams_.limitToFirst(limit), this.orderByCalled_);
        };
        /**
         * Set a limit and anchor it to the end of the window.
         * @param {!number} limit
         * @return {!Query}
         */


        Query.prototype.limitToLast = function (limit) {
          util.validateArgCount('Query.limitToLast', 1, 1, arguments.length);

          if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) {
            throw new Error('Query.limitToLast: First argument must be a positive integer.');
          }

          if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToLast: Limit was already set (by another call to limit, ' + 'limitToFirst, or limitToLast).');
          }

          return new Query(this.repo, this.path, this.queryParams_.limitToLast(limit), this.orderByCalled_);
        };
        /**
         * Given a child path, return a new query ordered by the specified grandchild path.
         * @param {!string} path
         * @return {!Query}
         */


        Query.prototype.orderByChild = function (path) {
          util.validateArgCount('Query.orderByChild', 1, 1, arguments.length);

          if (path === '$key') {
            throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
          } else if (path === '$priority') {
            throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
          } else if (path === '$value') {
            throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
          }

          validatePathString('Query.orderByChild', 1, path, false);
          this.validateNoPreviousOrderByCall_('Query.orderByChild');
          var parsedPath = new Path(path);

          if (parsedPath.isEmpty()) {
            throw new Error('Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.');
          }

          var index = new PathIndex(parsedPath);
          var newParams = this.queryParams_.orderBy(index);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams,
          /*orderByCalled=*/
          true);
        };
        /**
         * Return a new query ordered by the KeyIndex
         * @return {!Query}
         */


        Query.prototype.orderByKey = function () {
          util.validateArgCount('Query.orderByKey', 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_('Query.orderByKey');
          var newParams = this.queryParams_.orderBy(KEY_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams,
          /*orderByCalled=*/
          true);
        };
        /**
         * Return a new query ordered by the PriorityIndex
         * @return {!Query}
         */


        Query.prototype.orderByPriority = function () {
          util.validateArgCount('Query.orderByPriority', 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_('Query.orderByPriority');
          var newParams = this.queryParams_.orderBy(PRIORITY_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams,
          /*orderByCalled=*/
          true);
        };
        /**
         * Return a new query ordered by the ValueIndex
         * @return {!Query}
         */


        Query.prototype.orderByValue = function () {
          util.validateArgCount('Query.orderByValue', 0, 0, arguments.length);
          this.validateNoPreviousOrderByCall_('Query.orderByValue');
          var newParams = this.queryParams_.orderBy(VALUE_INDEX);
          Query.validateQueryEndpoints_(newParams);
          return new Query(this.repo, this.path, newParams,
          /*orderByCalled=*/
          true);
        };
        /**
         * @param {number|string|boolean|null} value
         * @param {?string=} name
         * @return {!Query}
         */


        Query.prototype.startAt = function (value, name) {
          if (value === void 0) {
            value = null;
          }

          util.validateArgCount('Query.startAt', 0, 2, arguments.length);
          validateFirebaseDataArg('Query.startAt', 1, value, this.path, true);
          validateKey('Query.startAt', 2, name, true);
          var newParams = this.queryParams_.startAt(value, name);
          Query.validateLimit_(newParams);
          Query.validateQueryEndpoints_(newParams);

          if (this.queryParams_.hasStart()) {
            throw new Error('Query.startAt: Starting point was already set (by another call to startAt ' + 'or equalTo).');
          } // Calling with no params tells us to start at the beginning.


          if (value === undefined) {
            value = null;
            name = null;
          }

          return new Query(this.repo, this.path, newParams, this.orderByCalled_);
        };
        /**
         * @param {number|string|boolean|null} value
         * @param {?string=} name
         * @return {!Query}
         */


        Query.prototype.endAt = function (value, name) {
          if (value === void 0) {
            value = null;
          }

          util.validateArgCount('Query.endAt', 0, 2, arguments.length);
          validateFirebaseDataArg('Query.endAt', 1, value, this.path, true);
          validateKey('Query.endAt', 2, name, true);
          var newParams = this.queryParams_.endAt(value, name);
          Query.validateLimit_(newParams);
          Query.validateQueryEndpoints_(newParams);

          if (this.queryParams_.hasEnd()) {
            throw new Error('Query.endAt: Ending point was already set (by another call to endAt or ' + 'equalTo).');
          }

          return new Query(this.repo, this.path, newParams, this.orderByCalled_);
        };
        /**
         * Load the selection of children with exactly the specified value, and, optionally,
         * the specified name.
         * @param {number|string|boolean|null} value
         * @param {string=} name
         * @return {!Query}
         */


        Query.prototype.equalTo = function (value, name) {
          util.validateArgCount('Query.equalTo', 1, 2, arguments.length);
          validateFirebaseDataArg('Query.equalTo', 1, value, this.path, false);
          validateKey('Query.equalTo', 2, name, true);

          if (this.queryParams_.hasStart()) {
            throw new Error('Query.equalTo: Starting point was already set (by another call to startAt or ' + 'equalTo).');
          }

          if (this.queryParams_.hasEnd()) {
            throw new Error('Query.equalTo: Ending point was already set (by another call to endAt or ' + 'equalTo).');
          }

          return this.startAt(value, name).endAt(value, name);
        };
        /**
         * @return {!string} URL for this location.
         */


        Query.prototype.toString = function () {
          util.validateArgCount('Query.toString', 0, 0, arguments.length);
          return this.repo.toString() + this.path.toUrlEncodedString();
        }; // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
        // for end-users.


        Query.prototype.toJSON = function () {
          // An optional spacer argument is unnecessary for a string.
          util.validateArgCount('Query.toJSON', 0, 1, arguments.length);
          return this.toString();
        };
        /**
         * An object representation of the query parameters used by this Query.
         * @return {!Object}
         */


        Query.prototype.queryObject = function () {
          return this.queryParams_.getQueryObject();
        };
        /**
         * @return {!string}
         */


        Query.prototype.queryIdentifier = function () {
          var obj = this.queryObject();
          var id = ObjectToUniqueKey(obj);
          return id === '{}' ? 'default' : id;
        };
        /**
         * Return true if this query and the provided query are equivalent; otherwise, return false.
         * @param {Query} other
         * @return {boolean}
         */


        Query.prototype.isEqual = function (other) {
          util.validateArgCount('Query.isEqual', 1, 1, arguments.length);

          if (!(other instanceof Query)) {
            var error = 'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
            throw new Error(error);
          }

          var sameRepo = this.repo === other.repo;
          var samePath = this.path.equals(other.path);
          var sameQueryIdentifier = this.queryIdentifier() === other.queryIdentifier();
          return sameRepo && samePath && sameQueryIdentifier;
        };
        /**
         * Helper used by .on and .once to extract the context and or cancel arguments.
         * @param {!string} fnName The function name (on or once)
         * @param {(function(Error)|Object)=} cancelOrContext
         * @param {Object=} context
         * @return {{cancel: ?function(Error), context: ?Object}}
         * @private
         */


        Query.getCancelAndContextArgs_ = function (fnName, cancelOrContext, context) {
          var ret = {
            cancel: null,
            context: null
          };

          if (cancelOrContext && context) {
            ret.cancel = cancelOrContext;
            util.validateCallback(fnName, 3, ret.cancel, true);
            ret.context = context;
            util.validateContextObject(fnName, 4, ret.context, true);
          } else if (cancelOrContext) {
            // we have either a cancel callback or a context.
            if (typeof cancelOrContext === 'object' && cancelOrContext !== null) {
              // it's a context!
              ret.context = cancelOrContext;
            } else if (typeof cancelOrContext === 'function') {
              ret.cancel = cancelOrContext;
            } else {
              throw new Error(util.errorPrefix(fnName, 3, true) + ' must either be a cancel callback or a context object.');
            }
          }

          return ret;
        };

        Object.defineProperty(Query.prototype, "ref", {
          get: function get() {
            return this.getRef();
          },
          enumerable: false,
          configurable: true
        });
        return Query;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ExistingValueProvider =
      /** @class */
      function () {
        function ExistingValueProvider(node_) {
          this.node_ = node_;
        }

        ExistingValueProvider.prototype.getImmediateChild = function (childName) {
          var child = this.node_.getImmediateChild(childName);
          return new ExistingValueProvider(child);
        };

        ExistingValueProvider.prototype.node = function () {
          return this.node_;
        };

        return ExistingValueProvider;
      }();

      var DeferredValueProvider =
      /** @class */
      function () {
        function DeferredValueProvider(syncTree, path) {
          this.syncTree_ = syncTree;
          this.path_ = path;
        }

        DeferredValueProvider.prototype.getImmediateChild = function (childName) {
          var childPath = this.path_.child(childName);
          return new DeferredValueProvider(this.syncTree_, childPath);
        };

        DeferredValueProvider.prototype.node = function () {
          return this.syncTree_.calcCompleteEventCache(this.path_);
        };

        return DeferredValueProvider;
      }();
      /**
       * Generate placeholders for deferred values.
       * @param {?Object} values
       * @return {!Object}
       */


      var generateWithValues = function generateWithValues(values) {
        values = values || {};
        values['timestamp'] = values['timestamp'] || new Date().getTime();
        return values;
      };
      /**
       * Value to use when firing local events. When writing server values, fire
       * local events with an approximate value, otherwise return value as-is.
       * @param {(Object|string|number|boolean)} value
       * @param {!Object} serverValues
       * @return {!(string|number|boolean)}
       */


      var resolveDeferredLeafValue = function resolveDeferredLeafValue(value, existingVal, serverValues) {
        if (!value || typeof value !== 'object') {
          return value;
        }

        util.assert('.sv' in value, 'Unexpected leaf node or priority contents');

        if (typeof value['.sv'] === 'string') {
          return resolveScalarDeferredValue(value['.sv'], existingVal, serverValues);
        } else if (typeof value['.sv'] === 'object') {
          return resolveComplexDeferredValue(value['.sv'], existingVal);
        } else {
          util.assert(false, 'Unexpected server value: ' + JSON.stringify(value, null, 2));
        }
      };

      var resolveScalarDeferredValue = function resolveScalarDeferredValue(op, existing, serverValues) {
        switch (op) {
          case 'timestamp':
            return serverValues['timestamp'];

          default:
            util.assert(false, 'Unexpected server value: ' + op);
        }
      };

      var resolveComplexDeferredValue = function resolveComplexDeferredValue(op, existing, unused) {
        if (!op.hasOwnProperty('increment')) {
          util.assert(false, 'Unexpected server value: ' + JSON.stringify(op, null, 2));
        }

        var delta = op['increment'];

        if (typeof delta !== 'number') {
          util.assert(false, 'Unexpected increment value: ' + delta);
        }

        var existingNode = existing.node();
        util.assert(existingNode !== null && typeof existingNode !== 'undefined', 'Expected ChildrenNode.EMPTY_NODE for nulls'); // Incrementing a non-number sets the value to the incremented amount

        if (!existingNode.isLeafNode()) {
          return delta;
        }

        var leaf = existingNode;
        var existingVal = leaf.getValue();

        if (typeof existingVal !== 'number') {
          return delta;
        } // No need to do over/underflow arithmetic here because JS only handles floats under the covers


        return existingVal + delta;
      };
      /**
       * Recursively replace all deferred values and priorities in the tree with the
       * specified generated replacement values.
       * @param {!Path} path path to which write is relative
       * @param {!Node} node new data written at path
       * @param {!SyncTree} syncTree current data
       * @param {!Object} serverValues
       * @return {!SparseSnapshotTree}
       */


      var resolveDeferredValueTree = function resolveDeferredValueTree(path, node, syncTree, serverValues) {
        return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
      };
      /**
       * Recursively replace all deferred values and priorities in the node with the
       * specified generated replacement values.  If there are no server values in the node,
       * it'll be returned as-is.
       * @param {!Node} node
       * @param {!Object} serverValues
       * @return {!Node}
       */


      var resolveDeferredValueSnapshot = function resolveDeferredValueSnapshot(node, existing, serverValues) {
        return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
      };

      function resolveDeferredValue(node, existingVal, serverValues) {
        var rawPri = node.getPriority().val();
        var priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild('.priority'), serverValues);
        var newNode;

        if (node.isLeafNode()) {
          var leafNode = node;
          var value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);

          if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
            return new LeafNode(value, nodeFromJSON$1(priority));
          } else {
            return node;
          }
        } else {
          var childrenNode = node;
          newNode = childrenNode;

          if (priority !== childrenNode.getPriority().val()) {
            newNode = newNode.updatePriority(new LeafNode(priority));
          }

          childrenNode.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
            var newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);

            if (newChildNode !== childNode) {
              newNode = newNode.updateImmediateChild(childName, newChildNode);
            }
          });
          return newNode;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Helper class to store a sparse set of snapshots.
       */


      var SparseSnapshotTree =
      /** @class */
      function () {
        function SparseSnapshotTree() {
          this.value = null;
          this.children = new Map();
        }
        /**
         * Gets the node stored at the given path if one exists.
         *
         * @param path Path to look up snapshot for.
         * @return The retrieved node, or null.
         */


        SparseSnapshotTree.prototype.find = function (path) {
          if (this.value != null) {
            return this.value.getChild(path);
          } else if (!path.isEmpty() && this.children.size > 0) {
            var childKey = path.getFront();
            path = path.popFront();

            if (this.children.has(childKey)) {
              var childTree = this.children.get(childKey);
              return childTree.find(path);
            } else {
              return null;
            }
          } else {
            return null;
          }
        };
        /**
         * Stores the given node at the specified path. If there is already a node
         * at a shallower path, it merges the new data into that snapshot node.
         *
         * @param path Path to look up snapshot for.
         * @param data The new data, or null.
         */


        SparseSnapshotTree.prototype.remember = function (path, data) {
          if (path.isEmpty()) {
            this.value = data;
            this.children.clear();
          } else if (this.value !== null) {
            this.value = this.value.updateChild(path, data);
          } else {
            var childKey = path.getFront();

            if (!this.children.has(childKey)) {
              this.children.set(childKey, new SparseSnapshotTree());
            }

            var child = this.children.get(childKey);
            path = path.popFront();
            child.remember(path, data);
          }
        };
        /**
         * Purge the data at path from the cache.
         *
         * @param path Path to look up snapshot for.
         * @return True if this node should now be removed.
         */


        SparseSnapshotTree.prototype.forget = function (path) {
          if (path.isEmpty()) {
            this.value = null;
            this.children.clear();
            return true;
          } else {
            if (this.value !== null) {
              if (this.value.isLeafNode()) {
                // We're trying to forget a node that doesn't exist
                return false;
              } else {
                var value = this.value;
                this.value = null;
                var self_1 = this;
                value.forEachChild(PRIORITY_INDEX, function (key, tree) {
                  self_1.remember(new Path(key), tree);
                });
                return this.forget(path);
              }
            } else if (this.children.size > 0) {
              var childKey = path.getFront();
              path = path.popFront();

              if (this.children.has(childKey)) {
                var safeToRemove = this.children.get(childKey).forget(path);

                if (safeToRemove) {
                  this.children["delete"](childKey);
                }
              }

              return this.children.size === 0;
            } else {
              return true;
            }
          }
        };
        /**
         * Recursively iterates through all of the stored tree and calls the
         * callback on each one.
         *
         * @param prefixPath Path to look up node for.
         * @param func The function to invoke for each tree.
         */


        SparseSnapshotTree.prototype.forEachTree = function (prefixPath, func) {
          if (this.value !== null) {
            func(prefixPath, this.value);
          } else {
            this.forEachChild(function (key, tree) {
              var path = new Path(prefixPath.toString() + '/' + key);
              tree.forEachTree(path, func);
            });
          }
        };
        /**
         * Iterates through each immediate child and triggers the callback.
         *
         * @param func The function to invoke for each child.
         */


        SparseSnapshotTree.prototype.forEachChild = function (func) {
          this.children.forEach(function (tree, key) {
            func(key, tree);
          });
        };

        return SparseSnapshotTree;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       *
       * @enum
       */


      var OperationType;

      (function (OperationType) {
        OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
        OperationType[OperationType["MERGE"] = 1] = "MERGE";
        OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
        OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
      })(OperationType || (OperationType = {}));
      /**
       * @param {boolean} fromUser
       * @param {boolean} fromServer
       * @param {?string} queryId
       * @param {boolean} tagged
       * @constructor
       */


      var OperationSource =
      /** @class */
      function () {
        function OperationSource(fromUser, fromServer, queryId, tagged) {
          this.fromUser = fromUser;
          this.fromServer = fromServer;
          this.queryId = queryId;
          this.tagged = tagged;
          util.assert(!tagged || fromServer, 'Tagged queries must be from server.');
        }
        /**
         * @const
         * @type {!OperationSource}
         */


        OperationSource.User = new OperationSource(
        /*fromUser=*/
        true, false, null,
        /*tagged=*/
        false);
        /**
         * @const
         * @type {!OperationSource}
         */

        OperationSource.Server = new OperationSource(false,
        /*fromServer=*/
        true, null,
        /*tagged=*/
        false);
        /**
         * @param {string} queryId
         * @return {!OperationSource}
         */

        OperationSource.forServerTaggedQuery = function (queryId) {
          return new OperationSource(false,
          /*fromServer=*/
          true, queryId,
          /*tagged=*/
          true);
        };

        return OperationSource;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var AckUserWrite =
      /** @class */
      function () {
        /**
         *
         * @param {!Path} path
         * @param {!ImmutableTree<!boolean>} affectedTree A tree containing true for each affected path. Affected paths can't overlap.
         * @param {!boolean} revert
         */
        function AckUserWrite(
        /** @inheritDoc */
        path,
        /** @inheritDoc */
        affectedTree,
        /** @inheritDoc */
        revert) {
          this.path = path;
          this.affectedTree = affectedTree;
          this.revert = revert;
          /** @inheritDoc */

          this.type = OperationType.ACK_USER_WRITE;
          /** @inheritDoc */

          this.source = OperationSource.User;
        }
        /**
         * @inheritDoc
         */


        AckUserWrite.prototype.operationForChild = function (childName) {
          if (!this.path.isEmpty()) {
            util.assert(this.path.getFront() === childName, 'operationForChild called for unrelated child.');
            return new AckUserWrite(this.path.popFront(), this.affectedTree, this.revert);
          } else if (this.affectedTree.value != null) {
            util.assert(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.'); // All child locations are affected as well; just return same operation.

            return this;
          } else {
            var childTree = this.affectedTree.subtree(new Path(childName));
            return new AckUserWrite(Path.Empty, childTree, this.revert);
          }
        };

        return AckUserWrite;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var emptyChildrenSingleton;
      /**
       * Singleton empty children collection.
       *
       * @const
       * @type {!SortedMap.<string, !ImmutableTree.<?>>}
       */

      var EmptyChildren = function EmptyChildren() {
        if (!emptyChildrenSingleton) {
          emptyChildrenSingleton = new SortedMap(stringCompare);
        }

        return emptyChildrenSingleton;
      };
      /**
       * A tree with immutable elements.
       */


      var ImmutableTree =
      /** @class */
      function () {
        /**
         * @template T
         * @param {?T} value
         * @param {SortedMap.<string, !ImmutableTree.<T>>=} children
         */
        function ImmutableTree(value, children) {
          if (children === void 0) {
            children = EmptyChildren();
          }

          this.value = value;
          this.children = children;
        }
        /**
         * @template T
         * @param {!Object.<string, !T>} obj
         * @return {!ImmutableTree.<!T>}
         */


        ImmutableTree.fromObject = function (obj) {
          var tree = ImmutableTree.Empty;
          each(obj, function (childPath, childSnap) {
            tree = tree.set(new Path(childPath), childSnap);
          });
          return tree;
        };
        /**
         * True if the value is empty and there are no children
         * @return {boolean}
         */


        ImmutableTree.prototype.isEmpty = function () {
          return this.value === null && this.children.isEmpty();
        };
        /**
         * Given a path and predicate, return the first node and the path to that node
         * where the predicate returns true.
         *
         * TODO Do a perf test -- If we're creating a bunch of {path: value:} objects
         * on the way back out, it may be better to pass down a pathSoFar obj.
         *
         * @param {!Path} relativePath The remainder of the path
         * @param {function(T):boolean} predicate The predicate to satisfy to return a
         *   node
         * @return {?{path:!Path, value:!T}}
         */


        ImmutableTree.prototype.findRootMostMatchingPathAndValue = function (relativePath, predicate) {
          if (this.value != null && predicate(this.value)) {
            return {
              path: Path.Empty,
              value: this.value
            };
          } else {
            if (relativePath.isEmpty()) {
              return null;
            } else {
              var front = relativePath.getFront();
              var child = this.children.get(front);

              if (child !== null) {
                var childExistingPathAndValue = child.findRootMostMatchingPathAndValue(relativePath.popFront(), predicate);

                if (childExistingPathAndValue != null) {
                  var fullPath = new Path(front).child(childExistingPathAndValue.path);
                  return {
                    path: fullPath,
                    value: childExistingPathAndValue.value
                  };
                } else {
                  return null;
                }
              } else {
                return null;
              }
            }
          }
        };
        /**
         * Find, if it exists, the shortest subpath of the given path that points a defined
         * value in the tree
         * @param {!Path} relativePath
         * @return {?{path: !Path, value: !T}}
         */


        ImmutableTree.prototype.findRootMostValueAndPath = function (relativePath) {
          return this.findRootMostMatchingPathAndValue(relativePath, function () {
            return true;
          });
        };
        /**
         * @param {!Path} relativePath
         * @return {!ImmutableTree.<T>} The subtree at the given path
         */


        ImmutableTree.prototype.subtree = function (relativePath) {
          if (relativePath.isEmpty()) {
            return this;
          } else {
            var front = relativePath.getFront();
            var childTree = this.children.get(front);

            if (childTree !== null) {
              return childTree.subtree(relativePath.popFront());
            } else {
              return ImmutableTree.Empty;
            }
          }
        };
        /**
         * Sets a value at the specified path.
         *
         * @param {!Path} relativePath Path to set value at.
         * @param {?T} toSet Value to set.
         * @return {!ImmutableTree.<T>} Resulting tree.
         */


        ImmutableTree.prototype.set = function (relativePath, toSet) {
          if (relativePath.isEmpty()) {
            return new ImmutableTree(toSet, this.children);
          } else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.set(relativePath.popFront(), toSet);
            var newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
          }
        };
        /**
         * Removes the value at the specified path.
         *
         * @param {!Path} relativePath Path to value to remove.
         * @return {!ImmutableTree.<T>} Resulting tree.
         */


        ImmutableTree.prototype.remove = function (relativePath) {
          if (relativePath.isEmpty()) {
            if (this.children.isEmpty()) {
              return ImmutableTree.Empty;
            } else {
              return new ImmutableTree(null, this.children);
            }
          } else {
            var front = relativePath.getFront();
            var child = this.children.get(front);

            if (child) {
              var newChild = child.remove(relativePath.popFront());
              var newChildren = void 0;

              if (newChild.isEmpty()) {
                newChildren = this.children.remove(front);
              } else {
                newChildren = this.children.insert(front, newChild);
              }

              if (this.value === null && newChildren.isEmpty()) {
                return ImmutableTree.Empty;
              } else {
                return new ImmutableTree(this.value, newChildren);
              }
            } else {
              return this;
            }
          }
        };
        /**
         * Gets a value from the tree.
         *
         * @param {!Path} relativePath Path to get value for.
         * @return {?T} Value at path, or null.
         */


        ImmutableTree.prototype.get = function (relativePath) {
          if (relativePath.isEmpty()) {
            return this.value;
          } else {
            var front = relativePath.getFront();
            var child = this.children.get(front);

            if (child) {
              return child.get(relativePath.popFront());
            } else {
              return null;
            }
          }
        };
        /**
         * Replace the subtree at the specified path with the given new tree.
         *
         * @param {!Path} relativePath Path to replace subtree for.
         * @param {!ImmutableTree} newTree New tree.
         * @return {!ImmutableTree} Resulting tree.
         */


        ImmutableTree.prototype.setTree = function (relativePath, newTree) {
          if (relativePath.isEmpty()) {
            return newTree;
          } else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.setTree(relativePath.popFront(), newTree);
            var newChildren = void 0;

            if (newChild.isEmpty()) {
              newChildren = this.children.remove(front);
            } else {
              newChildren = this.children.insert(front, newChild);
            }

            return new ImmutableTree(this.value, newChildren);
          }
        };
        /**
         * Performs a depth first fold on this tree. Transforms a tree into a single
         * value, given a function that operates on the path to a node, an optional
         * current value, and a map of child names to folded subtrees
         * @template V
         * @param {function(Path, ?T, Object.<string, V>):V} fn
         * @return {V}
         */


        ImmutableTree.prototype.fold = function (fn) {
          return this.fold_(Path.Empty, fn);
        };
        /**
         * Recursive helper for public-facing fold() method
         * @template V
         * @param {!Path} pathSoFar
         * @param {function(Path, ?T, Object.<string, V>):V} fn
         * @return {V}
         * @private
         */


        ImmutableTree.prototype.fold_ = function (pathSoFar, fn) {
          var accum = {};
          this.children.inorderTraversal(function (childKey, childTree) {
            accum[childKey] = childTree.fold_(pathSoFar.child(childKey), fn);
          });
          return fn(pathSoFar, this.value, accum);
        };
        /**
         * Find the first matching value on the given path. Return the result of applying f to it.
         * @template V
         * @param {!Path} path
         * @param {!function(!Path, !T):?V} f
         * @return {?V}
         */


        ImmutableTree.prototype.findOnPath = function (path, f) {
          return this.findOnPath_(path, Path.Empty, f);
        };

        ImmutableTree.prototype.findOnPath_ = function (pathToFollow, pathSoFar, f) {
          var result = this.value ? f(pathSoFar, this.value) : false;

          if (result) {
            return result;
          } else {
            if (pathToFollow.isEmpty()) {
              return null;
            } else {
              var front = pathToFollow.getFront();
              var nextChild = this.children.get(front);

              if (nextChild) {
                return nextChild.findOnPath_(pathToFollow.popFront(), pathSoFar.child(front), f);
              } else {
                return null;
              }
            }
          }
        };
        /**
         *
         * @param {!Path} path
         * @param {!function(!Path, !T)} f
         * @returns {!ImmutableTree.<T>}
         */


        ImmutableTree.prototype.foreachOnPath = function (path, f) {
          return this.foreachOnPath_(path, Path.Empty, f);
        };

        ImmutableTree.prototype.foreachOnPath_ = function (pathToFollow, currentRelativePath, f) {
          if (pathToFollow.isEmpty()) {
            return this;
          } else {
            if (this.value) {
              f(currentRelativePath, this.value);
            }

            var front = pathToFollow.getFront();
            var nextChild = this.children.get(front);

            if (nextChild) {
              return nextChild.foreachOnPath_(pathToFollow.popFront(), currentRelativePath.child(front), f);
            } else {
              return ImmutableTree.Empty;
            }
          }
        };
        /**
         * Calls the given function for each node in the tree that has a value.
         *
         * @param {function(!Path, !T)} f A function to be called with
         *   the path from the root of the tree to a node, and the value at that node.
         *   Called in depth-first order.
         */


        ImmutableTree.prototype.foreach = function (f) {
          this.foreach_(Path.Empty, f);
        };

        ImmutableTree.prototype.foreach_ = function (currentRelativePath, f) {
          this.children.inorderTraversal(function (childName, childTree) {
            childTree.foreach_(currentRelativePath.child(childName), f);
          });

          if (this.value) {
            f(currentRelativePath, this.value);
          }
        };
        /**
         *
         * @param {function(string, !T)} f
         */


        ImmutableTree.prototype.foreachChild = function (f) {
          this.children.inorderTraversal(function (childName, childTree) {
            if (childTree.value) {
              f(childName, childTree.value);
            }
          });
        }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


        ImmutableTree.Empty = new ImmutableTree(null);
        return ImmutableTree;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param {!OperationSource} source
       * @param {!Path} path
       * @constructor
       * @implements {Operation}
       */


      var ListenComplete =
      /** @class */
      function () {
        function ListenComplete(source, path) {
          this.source = source;
          this.path = path;
          /** @inheritDoc */

          this.type = OperationType.LISTEN_COMPLETE;
        }

        ListenComplete.prototype.operationForChild = function (childName) {
          if (this.path.isEmpty()) {
            return new ListenComplete(this.source, Path.Empty);
          } else {
            return new ListenComplete(this.source, this.path.popFront());
          }
        };

        return ListenComplete;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param {!OperationSource} source
       * @param {!Path} path
       * @param {!Node} snap
       * @constructor
       * @implements {Operation}
       */


      var Overwrite =
      /** @class */
      function () {
        function Overwrite(source, path, snap) {
          this.source = source;
          this.path = path;
          this.snap = snap;
          /** @inheritDoc */

          this.type = OperationType.OVERWRITE;
        }

        Overwrite.prototype.operationForChild = function (childName) {
          if (this.path.isEmpty()) {
            return new Overwrite(this.source, Path.Empty, this.snap.getImmediateChild(childName));
          } else {
            return new Overwrite(this.source, this.path.popFront(), this.snap);
          }
        };

        return Overwrite;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param {!OperationSource} source
       * @param {!Path} path
       * @param {!ImmutableTree.<!Node>} children
       * @constructor
       * @implements {Operation}
       */


      var Merge =
      /** @class */
      function () {
        function Merge(
        /** @inheritDoc */
        source,
        /** @inheritDoc */
        path,
        /** @inheritDoc */
        children) {
          this.source = source;
          this.path = path;
          this.children = children;
          /** @inheritDoc */

          this.type = OperationType.MERGE;
        }
        /**
         * @inheritDoc
         */


        Merge.prototype.operationForChild = function (childName) {
          if (this.path.isEmpty()) {
            var childTree = this.children.subtree(new Path(childName));

            if (childTree.isEmpty()) {
              // This child is unaffected
              return null;
            } else if (childTree.value) {
              // We have a snapshot for the child in question.  This becomes an overwrite of the child.
              return new Overwrite(this.source, Path.Empty, childTree.value);
            } else {
              // This is a merge at a deeper level
              return new Merge(this.source, Path.Empty, childTree);
            }
          } else {
            util.assert(this.path.getFront() === childName, "Can't get a merge for a child not on the path of the operation");
            return new Merge(this.source, this.path.popFront(), this.children);
          }
        };
        /**
         * @inheritDoc
         */


        Merge.prototype.toString = function () {
          return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
        };

        return Merge;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
       * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
       * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
       * whether a node potentially had children removed due to a filter.
       */


      var CacheNode =
      /** @class */
      function () {
        /**
         * @param {!Node} node_
         * @param {boolean} fullyInitialized_
         * @param {boolean} filtered_
         */
        function CacheNode(node_, fullyInitialized_, filtered_) {
          this.node_ = node_;
          this.fullyInitialized_ = fullyInitialized_;
          this.filtered_ = filtered_;
        }
        /**
         * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
         * @return {boolean}
         */


        CacheNode.prototype.isFullyInitialized = function () {
          return this.fullyInitialized_;
        };
        /**
         * Returns whether this node is potentially missing children due to a filter applied to the node
         * @return {boolean}
         */


        CacheNode.prototype.isFiltered = function () {
          return this.filtered_;
        };
        /**
         * @param {!Path} path
         * @return {boolean}
         */


        CacheNode.prototype.isCompleteForPath = function (path) {
          if (path.isEmpty()) {
            return this.isFullyInitialized() && !this.filtered_;
          }

          var childKey = path.getFront();
          return this.isCompleteForChild(childKey);
        };
        /**
         * @param {!string} key
         * @return {boolean}
         */


        CacheNode.prototype.isCompleteForChild = function (key) {
          return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
        };
        /**
         * @return {!Node}
         */


        CacheNode.prototype.getNode = function () {
          return this.node_;
        };

        return CacheNode;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Stores the data we have cached for a view.
       *
       * serverSnap is the cached server data, eventSnap is the cached event data (server data plus any local writes).
       *
       * @constructor
       */


      var ViewCache =
      /** @class */
      function () {
        /**
         *
         * @param {!CacheNode} eventCache_
         * @param {!CacheNode} serverCache_
         */
        function ViewCache(eventCache_, serverCache_) {
          this.eventCache_ = eventCache_;
          this.serverCache_ = serverCache_;
        }
        /**
         * @param {!Node} eventSnap
         * @param {boolean} complete
         * @param {boolean} filtered
         * @return {!ViewCache}
         */


        ViewCache.prototype.updateEventSnap = function (eventSnap, complete, filtered) {
          return new ViewCache(new CacheNode(eventSnap, complete, filtered), this.serverCache_);
        };
        /**
         * @param {!Node} serverSnap
         * @param {boolean} complete
         * @param {boolean} filtered
         * @return {!ViewCache}
         */


        ViewCache.prototype.updateServerSnap = function (serverSnap, complete, filtered) {
          return new ViewCache(this.eventCache_, new CacheNode(serverSnap, complete, filtered));
        };
        /**
         * @return {!CacheNode}
         */


        ViewCache.prototype.getEventCache = function () {
          return this.eventCache_;
        };
        /**
         * @return {?Node}
         */


        ViewCache.prototype.getCompleteEventSnap = function () {
          return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
        };
        /**
         * @return {!CacheNode}
         */


        ViewCache.prototype.getServerCache = function () {
          return this.serverCache_;
        };
        /**
         * @return {?Node}
         */


        ViewCache.prototype.getCompleteServerSnap = function () {
          return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
        };
        /**
         * @const
         * @type {ViewCache}
         */


        ViewCache.Empty = new ViewCache(new CacheNode(ChildrenNode.EMPTY_NODE,
        /*fullyInitialized=*/
        false,
        /*filtered=*/
        false), new CacheNode(ChildrenNode.EMPTY_NODE,
        /*fullyInitialized=*/
        false,
        /*filtered=*/
        false));
        return ViewCache;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @constructor
       * @struct
       * @param {!string} type The event type
       * @param {!Node} snapshotNode The data
       * @param {string=} childName The name for this child, if it's a child event
       * @param {Node=} oldSnap Used for intermediate processing of child changed events
       * @param {string=} prevName The name for the previous child, if applicable
       */


      var Change =
      /** @class */
      function () {
        function Change(type, snapshotNode, childName, oldSnap, prevName) {
          this.type = type;
          this.snapshotNode = snapshotNode;
          this.childName = childName;
          this.oldSnap = oldSnap;
          this.prevName = prevName;
        }
        /**
         * @param {!Node} snapshot
         * @return {!Change}
         */


        Change.valueChange = function (snapshot) {
          return new Change(Change.VALUE, snapshot);
        };
        /**
         * @param {string} childKey
         * @param {!Node} snapshot
         * @return {!Change}
         */


        Change.childAddedChange = function (childKey, snapshot) {
          return new Change(Change.CHILD_ADDED, snapshot, childKey);
        };
        /**
         * @param {string} childKey
         * @param {!Node} snapshot
         * @return {!Change}
         */


        Change.childRemovedChange = function (childKey, snapshot) {
          return new Change(Change.CHILD_REMOVED, snapshot, childKey);
        };
        /**
         * @param {string} childKey
         * @param {!Node} newSnapshot
         * @param {!Node} oldSnapshot
         * @return {!Change}
         */


        Change.childChangedChange = function (childKey, newSnapshot, oldSnapshot) {
          return new Change(Change.CHILD_CHANGED, newSnapshot, childKey, oldSnapshot);
        };
        /**
         * @param {string} childKey
         * @param {!Node} snapshot
         * @return {!Change}
         */


        Change.childMovedChange = function (childKey, snapshot) {
          return new Change(Change.CHILD_MOVED, snapshot, childKey);
        }; //event types

        /** Event type for a child added */


        Change.CHILD_ADDED = 'child_added';
        /** Event type for a child removed */

        Change.CHILD_REMOVED = 'child_removed';
        /** Event type for a child changed */

        Change.CHILD_CHANGED = 'child_changed';
        /** Event type for a child moved */

        Change.CHILD_MOVED = 'child_moved';
        /** Event type for a value change */

        Change.VALUE = 'value';
        return Change;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
       *
       * @constructor
       * @implements {NodeFilter}
       * @param {!Index} index
       */


      var IndexedFilter =
      /** @class */
      function () {
        function IndexedFilter(index_) {
          this.index_ = index_;
        }

        IndexedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          util.assert(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
          var oldChild = snap.getImmediateChild(key); // Check if anything actually changed.

          if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() === newChild.isEmpty()) {
              // Nothing changed.
              // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
              //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
              return snap;
            }
          }

          if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
              if (snap.hasChild(key)) {
                optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, oldChild));
              } else {
                util.assert(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
              }
            } else if (oldChild.isEmpty()) {
              optChangeAccumulator.trackChildChange(Change.childAddedChange(key, newChild));
            } else {
              optChangeAccumulator.trackChildChange(Change.childChangedChange(key, newChild, oldChild));
            }
          }

          if (snap.isLeafNode() && newChild.isEmpty()) {
            return snap;
          } else {
            // Make sure the node is indexed
            return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
          }
        };
        /**
         * @inheritDoc
         */


        IndexedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
          if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) {
              oldSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                if (!newSnap.hasChild(key)) {
                  optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, childNode));
                }
              });
            }

            if (!newSnap.isLeafNode()) {
              newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                if (oldSnap.hasChild(key)) {
                  var oldChild = oldSnap.getImmediateChild(key);

                  if (!oldChild.equals(childNode)) {
                    optChangeAccumulator.trackChildChange(Change.childChangedChange(key, childNode, oldChild));
                  }
                } else {
                  optChangeAccumulator.trackChildChange(Change.childAddedChange(key, childNode));
                }
              });
            }
          }

          return newSnap.withIndex(this.index_);
        };
        /**
         * @inheritDoc
         */


        IndexedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
          if (oldSnap.isEmpty()) {
            return ChildrenNode.EMPTY_NODE;
          } else {
            return oldSnap.updatePriority(newPriority);
          }
        };
        /**
         * @inheritDoc
         */


        IndexedFilter.prototype.filtersNodes = function () {
          return false;
        };
        /**
         * @inheritDoc
         */


        IndexedFilter.prototype.getIndexedFilter = function () {
          return this;
        };
        /**
         * @inheritDoc
         */


        IndexedFilter.prototype.getIndex = function () {
          return this.index_;
        };

        return IndexedFilter;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ChildChangeAccumulator =
      /** @class */
      function () {
        function ChildChangeAccumulator() {
          this.changeMap = new Map();
        }

        ChildChangeAccumulator.prototype.trackChildChange = function (change) {
          var type = change.type;
          var childKey = change.childName;
          util.assert(type === Change.CHILD_ADDED || type === Change.CHILD_CHANGED || type === Change.CHILD_REMOVED, 'Only child changes supported for tracking');
          util.assert(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
          var oldChange = this.changeMap.get(childKey);

          if (oldChange) {
            var oldType = oldChange.type;

            if (type === Change.CHILD_ADDED && oldType === Change.CHILD_REMOVED) {
              this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.snapshotNode));
            } else if (type === Change.CHILD_REMOVED && oldType === Change.CHILD_ADDED) {
              this.changeMap["delete"](childKey);
            } else if (type === Change.CHILD_REMOVED && oldType === Change.CHILD_CHANGED) {
              this.changeMap.set(childKey, Change.childRemovedChange(childKey, oldChange.oldSnap));
            } else if (type === Change.CHILD_CHANGED && oldType === Change.CHILD_ADDED) {
              this.changeMap.set(childKey, Change.childAddedChange(childKey, change.snapshotNode));
            } else if (type === Change.CHILD_CHANGED && oldType === Change.CHILD_CHANGED) {
              this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.oldSnap));
            } else {
              throw util.assertionError('Illegal combination of changes: ' + change + ' occurred after ' + oldChange);
            }
          } else {
            this.changeMap.set(childKey, change);
          }
        };

        ChildChangeAccumulator.prototype.getChanges = function () {
          return Array.from(this.changeMap.values());
        };

        return ChildChangeAccumulator;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An implementation of CompleteChildSource that never returns any additional children
       *
       * @private
       * @constructor
       * @implements CompleteChildSource
       */
      // eslint-disable-next-line @typescript-eslint/class-name-casing


      var NoCompleteChildSource_ =
      /** @class */
      function () {
        function NoCompleteChildSource_() {}
        /**
         * @inheritDoc
         */


        NoCompleteChildSource_.prototype.getCompleteChild = function (childKey) {
          return null;
        };
        /**
         * @inheritDoc
         */


        NoCompleteChildSource_.prototype.getChildAfterChild = function (index, child, reverse) {
          return null;
        };

        return NoCompleteChildSource_;
      }();
      /**
       * Singleton instance.
       * @const
       * @type {!CompleteChildSource}
       */


      var NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
      /**
       * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
       * old event caches available to calculate complete children.
       *
       *
       * @implements CompleteChildSource
       */

      var WriteTreeCompleteChildSource =
      /** @class */
      function () {
        /**
         * @param {!WriteTreeRef} writes_
         * @param {!ViewCache} viewCache_
         * @param {?Node} optCompleteServerCache_
         */
        function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
          if (optCompleteServerCache_ === void 0) {
            optCompleteServerCache_ = null;
          }

          this.writes_ = writes_;
          this.viewCache_ = viewCache_;
          this.optCompleteServerCache_ = optCompleteServerCache_;
        }
        /**
         * @inheritDoc
         */


        WriteTreeCompleteChildSource.prototype.getCompleteChild = function (childKey) {
          var node = this.viewCache_.getEventCache();

          if (node.isCompleteForChild(childKey)) {
            return node.getNode().getImmediateChild(childKey);
          } else {
            var serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(childKey, serverNode);
          }
        };
        /**
         * @inheritDoc
         */


        WriteTreeCompleteChildSource.prototype.getChildAfterChild = function (index, child, reverse) {
          var completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap();
          var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);

          if (nodes.length === 0) {
            return null;
          } else {
            return nodes[0];
          }
        };

        return WriteTreeCompleteChildSource;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @constructor
       * @struct
       */


      var ProcessorResult =
      /** @class */
      function () {
        /**
         * @param {!ViewCache} viewCache
         * @param {!Array.<!Change>} changes
         */
        function ProcessorResult(viewCache, changes) {
          this.viewCache = viewCache;
          this.changes = changes;
        }

        return ProcessorResult;
      }();
      /**
       * @constructor
       */


      var ViewProcessor =
      /** @class */
      function () {
        /**
         * @param {!NodeFilter} filter_
         */
        function ViewProcessor(filter_) {
          this.filter_ = filter_;
        }
        /**
         * @param {!ViewCache} viewCache
         */


        ViewProcessor.prototype.assertIndexed = function (viewCache) {
          util.assert(viewCache.getEventCache().getNode().isIndexed(this.filter_.getIndex()), 'Event snap not indexed');
          util.assert(viewCache.getServerCache().getNode().isIndexed(this.filter_.getIndex()), 'Server snap not indexed');
        };
        /**
         * @param {!ViewCache} oldViewCache
         * @param {!Operation} operation
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeCache
         * @return {!ProcessorResult}
         */


        ViewProcessor.prototype.applyOperation = function (oldViewCache, operation, writesCache, completeCache) {
          var accumulator = new ChildChangeAccumulator();
          var newViewCache, filterServerNode;

          if (operation.type === OperationType.OVERWRITE) {
            var overwrite = operation;

            if (overwrite.source.fromUser) {
              newViewCache = this.applyUserOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
            } else {
              util.assert(overwrite.source.fromServer, 'Unknown source.'); // We filter the node if it's a tagged update or the node has been previously filtered  and the
              // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
              // again

              filterServerNode = overwrite.source.tagged || oldViewCache.getServerCache().isFiltered() && !overwrite.path.isEmpty();
              newViewCache = this.applyServerOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
            }
          } else if (operation.type === OperationType.MERGE) {
            var merge = operation;

            if (merge.source.fromUser) {
              newViewCache = this.applyUserMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
            } else {
              util.assert(merge.source.fromServer, 'Unknown source.'); // We filter the node if it's a tagged update or the node has been previously filtered

              filterServerNode = merge.source.tagged || oldViewCache.getServerCache().isFiltered();
              newViewCache = this.applyServerMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
            }
          } else if (operation.type === OperationType.ACK_USER_WRITE) {
            var ackUserWrite = operation;

            if (!ackUserWrite.revert) {
              newViewCache = this.ackUserWrite_(oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
            } else {
              newViewCache = this.revertUserWrite_(oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
            }
          } else if (operation.type === OperationType.LISTEN_COMPLETE) {
            newViewCache = this.listenComplete_(oldViewCache, operation.path, writesCache, accumulator);
          } else {
            throw util.assertionError('Unknown operation type: ' + operation.type);
          }

          var changes = accumulator.getChanges();
          ViewProcessor.maybeAddValueEvent_(oldViewCache, newViewCache, changes);
          return new ProcessorResult(newViewCache, changes);
        };
        /**
         * @param {!ViewCache} oldViewCache
         * @param {!ViewCache} newViewCache
         * @param {!Array.<!Change>} accumulator
         * @private
         */


        ViewProcessor.maybeAddValueEvent_ = function (oldViewCache, newViewCache, accumulator) {
          var eventSnap = newViewCache.getEventCache();

          if (eventSnap.isFullyInitialized()) {
            var isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
            var oldCompleteSnap = oldViewCache.getCompleteEventSnap();

            if (accumulator.length > 0 || !oldViewCache.getEventCache().isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(
            /** @type {!Node} */
            oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
              accumulator.push(Change.valueChange(
              /** @type {!Node} */
              newViewCache.getCompleteEventSnap()));
            }
          }
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} changePath
         * @param {!WriteTreeRef} writesCache
         * @param {!CompleteChildSource} source
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.generateEventCacheAfterServerEvent_ = function (viewCache, changePath, writesCache, source, accumulator) {
          var oldEventSnap = viewCache.getEventCache();

          if (writesCache.shadowingWrite(changePath) != null) {
            // we have a shadowing write, ignore changes
            return viewCache;
          } else {
            var newEventCache = void 0,
                serverNode = void 0;

            if (changePath.isEmpty()) {
              // TODO: figure out how this plays with "sliding ack windows"
              util.assert(viewCache.getServerCache().isFullyInitialized(), 'If change path is empty, we must have complete server data');

              if (viewCache.getServerCache().isFiltered()) {
                // We need to special case this, because we need to only apply writes to complete children, or
                // we might end up raising events for incomplete children. If the server data is filtered deep
                // writes cannot be guaranteed to be complete
                var serverCache = viewCache.getCompleteServerSnap();
                var completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
                var completeEventChildren = writesCache.calcCompleteEventChildren(completeChildren);
                newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeEventChildren, accumulator);
              } else {
                var completeNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeNode, accumulator);
              }
            } else {
              var childKey = changePath.getFront();

              if (childKey === '.priority') {
                util.assert(changePath.getLength() === 1, "Can't have a priority with additional path components");
                var oldEventNode = oldEventSnap.getNode();
                serverNode = viewCache.getServerCache().getNode(); // we might have overwrites for this priority

                var updatedPriority = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventNode, serverNode);

                if (updatedPriority != null) {
                  newEventCache = this.filter_.updatePriority(oldEventNode, updatedPriority);
                } else {
                  // priority didn't change, keep old node
                  newEventCache = oldEventSnap.getNode();
                }
              } else {
                var childChangePath = changePath.popFront(); // update child

                var newEventChild = void 0;

                if (oldEventSnap.isCompleteForChild(childKey)) {
                  serverNode = viewCache.getServerCache().getNode();
                  var eventChildUpdate = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventSnap.getNode(), serverNode);

                  if (eventChildUpdate != null) {
                    newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
                  } else {
                    // Nothing changed, just keep the old child
                    newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
                  }
                } else {
                  newEventChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
                }

                if (newEventChild != null) {
                  newEventCache = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
                } else {
                  // no complete child available or no change
                  newEventCache = oldEventSnap.getNode();
                }
              }
            }

            return viewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized() || changePath.isEmpty(), this.filter_.filtersNodes());
          }
        };
        /**
         * @param {!ViewCache} oldViewCache
         * @param {!Path} changePath
         * @param {!Node} changedSnap
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeCache
         * @param {boolean} filterServerNode
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.applyServerOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
          var oldServerSnap = oldViewCache.getServerCache();
          var newServerCache;
          var serverFilter = filterServerNode ? this.filter_ : this.filter_.getIndexedFilter();

          if (changePath.isEmpty()) {
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
          } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
            // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
            var newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
          } else {
            var childKey = changePath.getFront();

            if (!oldServerSnap.isCompleteForPath(changePath) && changePath.getLength() > 1) {
              // We don't update incomplete nodes with updates intended for other listeners
              return oldViewCache;
            }

            var childChangePath = changePath.popFront();
            var childNode = oldServerSnap.getNode().getImmediateChild(childKey);
            var newChildNode = childNode.updateChild(childChangePath, changedSnap);

            if (childKey === '.priority') {
              newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
            } else {
              newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
            }
          }

          var newViewCache = oldViewCache.updateServerSnap(newServerCache, oldServerSnap.isFullyInitialized() || changePath.isEmpty(), serverFilter.filtersNodes());
          var source = new WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
          return this.generateEventCacheAfterServerEvent_(newViewCache, changePath, writesCache, source, accumulator);
        };
        /**
         * @param {!ViewCache} oldViewCache
         * @param {!Path} changePath
         * @param {!Node} changedSnap
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeCache
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.applyUserOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
          var oldEventSnap = oldViewCache.getEventCache();
          var newViewCache, newEventCache;
          var source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);

          if (changePath.isEmpty()) {
            newEventCache = this.filter_.updateFullNode(oldViewCache.getEventCache().getNode(), changedSnap, accumulator);
            newViewCache = oldViewCache.updateEventSnap(newEventCache, true, this.filter_.filtersNodes());
          } else {
            var childKey = changePath.getFront();

            if (childKey === '.priority') {
              newEventCache = this.filter_.updatePriority(oldViewCache.getEventCache().getNode(), changedSnap);
              newViewCache = oldViewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
            } else {
              var childChangePath = changePath.popFront();
              var oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
              var newChild = void 0;

              if (childChangePath.isEmpty()) {
                // Child overwrite, we can replace the child
                newChild = changedSnap;
              } else {
                var childNode = source.getCompleteChild(childKey);

                if (childNode != null) {
                  if (childChangePath.getBack() === '.priority' && childNode.getChild(childChangePath.parent()).isEmpty()) {
                    // This is a priority update on an empty node. If this node exists on the server, the
                    // server will send down the priority in the update, so ignore for now
                    newChild = childNode;
                  } else {
                    newChild = childNode.updateChild(childChangePath, changedSnap);
                  }
                } else {
                  // There is no complete child node available
                  newChild = ChildrenNode.EMPTY_NODE;
                }
              }

              if (!oldChild.equals(newChild)) {
                var newEventSnap = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                newViewCache = oldViewCache.updateEventSnap(newEventSnap, oldEventSnap.isFullyInitialized(), this.filter_.filtersNodes());
              } else {
                newViewCache = oldViewCache;
              }
            }
          }

          return newViewCache;
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {string} childKey
         * @return {boolean}
         * @private
         */


        ViewProcessor.cacheHasChild_ = function (viewCache, childKey) {
          return viewCache.getEventCache().isCompleteForChild(childKey);
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} path
         * @param {ImmutableTree.<!Node>} changedChildren
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} serverCache
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.applyUserMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
          var _this = this; // HACK: In the case of a limit query, there may be some changes that bump things out of the
          // window leaving room for new items.  It's important we process these changes first, so we
          // iterate the changes twice, first processing any that affect items currently in view.
          // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
          // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
          // not the other.


          var curViewCache = viewCache;
          changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);

            if (ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
              curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
          });
          changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);

            if (!ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
              curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
          });
          return curViewCache;
        };
        /**
         * @param {!Node} node
         * @param {ImmutableTree.<!Node>} merge
         * @return {!Node}
         * @private
         */


        ViewProcessor.prototype.applyMerge_ = function (node, merge) {
          merge.foreach(function (relativePath, childNode) {
            node = node.updateChild(relativePath, childNode);
          });
          return node;
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} path
         * @param {!ImmutableTree.<!Node>} changedChildren
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} serverCache
         * @param {boolean} filterServerNode
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.applyServerMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
          var _this = this; // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
          // wait for the complete data update coming soon.


          if (viewCache.getServerCache().getNode().isEmpty() && !viewCache.getServerCache().isFullyInitialized()) {
            return viewCache;
          } // HACK: In the case of a limit query, there may be some changes that bump things out of the
          // window leaving room for new items.  It's important we process these changes first, so we
          // iterate the changes twice, first processing any that affect items currently in view.
          // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
          // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
          // not the other.


          var curViewCache = viewCache;
          var viewMergeTree;

          if (path.isEmpty()) {
            viewMergeTree = changedChildren;
          } else {
            viewMergeTree = ImmutableTree.Empty.setTree(path, changedChildren);
          }

          var serverNode = viewCache.getServerCache().getNode();
          viewMergeTree.children.inorderTraversal(function (childKey, childTree) {
            if (serverNode.hasChild(childKey)) {
              var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);

              var newChild = _this.applyMerge_(serverChild, childTree);

              curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
          });
          viewMergeTree.children.inorderTraversal(function (childKey, childMergeTree) {
            var isUnknownDeepMerge = !viewCache.getServerCache().isCompleteForChild(childKey) && childMergeTree.value == null;

            if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
              var serverChild = viewCache.getServerCache().getNode().getImmediateChild(childKey);

              var newChild = _this.applyMerge_(serverChild, childMergeTree);

              curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
          });
          return curViewCache;
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} ackPath
         * @param {!ImmutableTree<!boolean>} affectedTree
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeCache
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.ackUserWrite_ = function (viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
          if (writesCache.shadowingWrite(ackPath) != null) {
            return viewCache;
          } // Only filter server node if it is currently filtered


          var filterServerNode = viewCache.getServerCache().isFiltered(); // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
          // now that it won't be shadowed.

          var serverCache = viewCache.getServerCache();

          if (affectedTree.value != null) {
            // This is an overwrite.
            if (ackPath.isEmpty() && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
              return this.applyServerOverwrite_(viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
            } else if (ackPath.isEmpty()) {
              // This is a goofy edge case where we are acking data at this location but don't have full data.  We
              // should just re-apply whatever we have in our cache as a merge.
              var changedChildren_1 = ImmutableTree.Empty;
              serverCache.getNode().forEachChild(KEY_INDEX, function (name, node) {
                changedChildren_1 = changedChildren_1.set(new Path(name), node);
              });
              return this.applyServerMerge_(viewCache, ackPath, changedChildren_1, writesCache, completeCache, filterServerNode, accumulator);
            } else {
              return viewCache;
            }
          } else {
            // This is a merge.
            var changedChildren_2 = ImmutableTree.Empty;
            affectedTree.foreach(function (mergePath, value) {
              var serverCachePath = ackPath.child(mergePath);

              if (serverCache.isCompleteForPath(serverCachePath)) {
                changedChildren_2 = changedChildren_2.set(mergePath, serverCache.getNode().getChild(serverCachePath));
              }
            });
            return this.applyServerMerge_(viewCache, ackPath, changedChildren_2, writesCache, completeCache, filterServerNode, accumulator);
          }
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} path
         * @param {!WriteTreeRef} writesCache
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.listenComplete_ = function (viewCache, path, writesCache, accumulator) {
          var oldServerNode = viewCache.getServerCache();
          var newViewCache = viewCache.updateServerSnap(oldServerNode.getNode(), oldServerNode.isFullyInitialized() || path.isEmpty(), oldServerNode.isFiltered());
          return this.generateEventCacheAfterServerEvent_(newViewCache, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
        };
        /**
         * @param {!ViewCache} viewCache
         * @param {!Path} path
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeServerCache
         * @param {!ChildChangeAccumulator} accumulator
         * @return {!ViewCache}
         * @private
         */


        ViewProcessor.prototype.revertUserWrite_ = function (viewCache, path, writesCache, completeServerCache, accumulator) {
          var complete;

          if (writesCache.shadowingWrite(path) != null) {
            return viewCache;
          } else {
            var source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
            var oldEventCache = viewCache.getEventCache().getNode();
            var newEventCache = void 0;

            if (path.isEmpty() || path.getFront() === '.priority') {
              var newNode = void 0;

              if (viewCache.getServerCache().isFullyInitialized()) {
                newNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
              } else {
                var serverChildren = viewCache.getServerCache().getNode();
                util.assert(serverChildren instanceof ChildrenNode, 'serverChildren would be complete if leaf node');
                newNode = writesCache.calcCompleteEventChildren(serverChildren);
              }

              newNode = newNode;
              newEventCache = this.filter_.updateFullNode(oldEventCache, newNode, accumulator);
            } else {
              var childKey = path.getFront();
              var newChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());

              if (newChild == null && viewCache.getServerCache().isCompleteForChild(childKey)) {
                newChild = oldEventCache.getImmediateChild(childKey);
              }

              if (newChild != null) {
                newEventCache = this.filter_.updateChild(oldEventCache, childKey, newChild, path.popFront(), source, accumulator);
              } else if (viewCache.getEventCache().getNode().hasChild(childKey)) {
                // No complete child available, delete the existing one, if any
                newEventCache = this.filter_.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, path.popFront(), source, accumulator);
              } else {
                newEventCache = oldEventCache;
              }

              if (newEventCache.isEmpty() && viewCache.getServerCache().isFullyInitialized()) {
                // We might have reverted all child writes. Maybe the old event was a leaf node
                complete = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());

                if (complete.isLeafNode()) {
                  newEventCache = this.filter_.updateFullNode(newEventCache, complete, accumulator);
                }
              }
            }

            complete = viewCache.getServerCache().isFullyInitialized() || writesCache.shadowingWrite(Path.Empty) != null;
            return viewCache.updateEventSnap(newEventCache, complete, this.filter_.filtersNodes());
          }
        };

        return ViewProcessor;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An EventGenerator is used to convert "raw" changes (Change) as computed by the
       * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
       * for details.
       *
       * @constructor
       */


      var EventGenerator =
      /** @class */
      function () {
        /**
         *
         * @param {!Query} query_
         */
        function EventGenerator(query_) {
          this.query_ = query_;
          /**
           * @private
           * @type {!Index}
           */

          this.index_ = this.query_.getQueryParams().getIndex();
        }
        /**
         * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
         * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
         *
         * Notes:
         *  - child_moved events will be synthesized at this time for any child_changed events that affect
         *    our index.
         *  - prevName will be calculated based on the index ordering.
         *
         * @param {!Array.<!Change>} changes
         * @param {!Node} eventCache
         * @param {!Array.<!EventRegistration>} eventRegistrations
         * @return {!Array.<!Event>}
         */


        EventGenerator.prototype.generateEventsForChanges = function (changes, eventCache, eventRegistrations) {
          var _this = this;

          var events = [];
          var moves = [];
          changes.forEach(function (change) {
            if (change.type === Change.CHILD_CHANGED && _this.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
              moves.push(Change.childMovedChange(change.childName, change.snapshotNode));
            }
          });
          this.generateEventsForType_(events, Change.CHILD_REMOVED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_ADDED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_MOVED, moves, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.CHILD_CHANGED, changes, eventRegistrations, eventCache);
          this.generateEventsForType_(events, Change.VALUE, changes, eventRegistrations, eventCache);
          return events;
        };
        /**
         * Given changes of a single change type, generate the corresponding events.
         *
         * @param {!Array.<!Event>} events
         * @param {!string} eventType
         * @param {!Array.<!Change>} changes
         * @param {!Array.<!EventRegistration>} registrations
         * @param {!Node} eventCache
         * @private
         */


        EventGenerator.prototype.generateEventsForType_ = function (events, eventType, changes, registrations, eventCache) {
          var _this = this;

          var filteredChanges = changes.filter(function (change) {
            return change.type === eventType;
          });
          filteredChanges.sort(this.compareChanges_.bind(this));
          filteredChanges.forEach(function (change) {
            var materializedChange = _this.materializeSingleChange_(change, eventCache);

            registrations.forEach(function (registration) {
              if (registration.respondsTo(change.type)) {
                events.push(registration.createEvent(materializedChange, _this.query_));
              }
            });
          });
        };
        /**
         * @param {!Change} change
         * @param {!Node} eventCache
         * @return {!Change}
         * @private
         */


        EventGenerator.prototype.materializeSingleChange_ = function (change, eventCache) {
          if (change.type === 'value' || change.type === 'child_removed') {
            return change;
          } else {
            change.prevName = eventCache.getPredecessorChildName(
            /** @type {!string} */
            change.childName, change.snapshotNode, this.index_);
            return change;
          }
        };
        /**
         * @param {!Change} a
         * @param {!Change} b
         * @return {number}
         * @private
         */


        EventGenerator.prototype.compareChanges_ = function (a, b) {
          if (a.childName == null || b.childName == null) {
            throw util.assertionError('Should only compare child_ events.');
          }

          var aWrapped = new NamedNode(a.childName, a.snapshotNode);
          var bWrapped = new NamedNode(b.childName, b.snapshotNode);
          return this.index_.compare(aWrapped, bWrapped);
        };

        return EventGenerator;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A view represents a specific location and query that has 1 or more event registrations.
       *
       * It does several things:
       *  - Maintains the list of event registrations for this location/query.
       *  - Maintains a cache of the data visible for this location/query.
       *  - Applies new operations (via applyOperation), updates the cache, and based on the event
       *    registrations returns the set of events to be raised.
       * @constructor
       */


      var View =
      /** @class */
      function () {
        /**
         *
         * @param {!Query} query_
         * @param {!ViewCache} initialViewCache
         */
        function View(query_, initialViewCache) {
          this.query_ = query_;
          this.eventRegistrations_ = [];
          var params = this.query_.getQueryParams();
          var indexFilter = new IndexedFilter(params.getIndex());
          var filter = params.getNodeFilter();
          /**
           * @type {ViewProcessor}
           * @private
           */

          this.processor_ = new ViewProcessor(filter);
          var initialServerCache = initialViewCache.getServerCache();
          var initialEventCache = initialViewCache.getEventCache(); // Don't filter server node with other filter than index, wait for tagged listen

          var serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
          var eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
          var newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
          var newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
          /**
           * @type {!ViewCache}
           * @private
           */

          this.viewCache_ = new ViewCache(newEventCache, newServerCache);
          /**
           * @type {!EventGenerator}
           * @private
           */

          this.eventGenerator_ = new EventGenerator(this.query_);
        }
        /**
         * @return {!Query}
         */


        View.prototype.getQuery = function () {
          return this.query_;
        };
        /**
         * @return {?Node}
         */


        View.prototype.getServerCache = function () {
          return this.viewCache_.getServerCache().getNode();
        };
        /**
         * @param {!Path} path
         * @return {?Node}
         */


        View.prototype.getCompleteServerCache = function (path) {
          var cache = this.viewCache_.getCompleteServerSnap();

          if (cache) {
            // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
            // we need to see if it contains the child we're interested in.
            if (this.query_.getQueryParams().loadsAllData() || !path.isEmpty() && !cache.getImmediateChild(path.getFront()).isEmpty()) {
              return cache.getChild(path);
            }
          }

          return null;
        };
        /**
         * @return {boolean}
         */


        View.prototype.isEmpty = function () {
          return this.eventRegistrations_.length === 0;
        };
        /**
         * @param {!EventRegistration} eventRegistration
         */


        View.prototype.addEventRegistration = function (eventRegistration) {
          this.eventRegistrations_.push(eventRegistration);
        };
        /**
         * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
         * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
         * @return {!Array.<!Event>} Cancel events, if cancelError was provided.
         */


        View.prototype.removeEventRegistration = function (eventRegistration, cancelError) {
          var cancelEvents = [];

          if (cancelError) {
            util.assert(eventRegistration == null, 'A cancel should cancel all event registrations.');
            var path_1 = this.query_.path;
            this.eventRegistrations_.forEach(function (registration) {
              cancelError
              /** @type {!Error} */
              = cancelError;
              var maybeEvent = registration.createCancelEvent(cancelError, path_1);

              if (maybeEvent) {
                cancelEvents.push(maybeEvent);
              }
            });
          }

          if (eventRegistration) {
            var remaining = [];

            for (var i = 0; i < this.eventRegistrations_.length; ++i) {
              var existing = this.eventRegistrations_[i];

              if (!existing.matches(eventRegistration)) {
                remaining.push(existing);
              } else if (eventRegistration.hasAnyCallback()) {
                // We're removing just this one
                remaining = remaining.concat(this.eventRegistrations_.slice(i + 1));
                break;
              }
            }

            this.eventRegistrations_ = remaining;
          } else {
            this.eventRegistrations_ = [];
          }

          return cancelEvents;
        };
        /**
         * Applies the given Operation, updates our cache, and returns the appropriate events.
         *
         * @param {!Operation} operation
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} completeServerCache
         * @return {!Array.<!Event>}
         */


        View.prototype.applyOperation = function (operation, writesCache, completeServerCache) {
          if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
            util.assert(this.viewCache_.getCompleteServerSnap(), 'We should always have a full cache before handling merges');
            util.assert(this.viewCache_.getCompleteEventSnap(), 'Missing event cache, even though we have a server cache');
          }

          var oldViewCache = this.viewCache_;
          var result = this.processor_.applyOperation(oldViewCache, operation, writesCache, completeServerCache);
          this.processor_.assertIndexed(result.viewCache);
          util.assert(result.viewCache.getServerCache().isFullyInitialized() || !oldViewCache.getServerCache().isFullyInitialized(), 'Once a server snap is complete, it should never go back');
          this.viewCache_ = result.viewCache;
          return this.generateEventsForChanges_(result.changes, result.viewCache.getEventCache().getNode(), null);
        };
        /**
         * @param {!EventRegistration} registration
         * @return {!Array.<!Event>}
         */


        View.prototype.getInitialEvents = function (registration) {
          var eventSnap = this.viewCache_.getEventCache();
          var initialChanges = [];

          if (!eventSnap.getNode().isLeafNode()) {
            var eventNode = eventSnap.getNode();
            eventNode.forEachChild(PRIORITY_INDEX, function (key, childNode) {
              initialChanges.push(Change.childAddedChange(key, childNode));
            });
          }

          if (eventSnap.isFullyInitialized()) {
            initialChanges.push(Change.valueChange(eventSnap.getNode()));
          }

          return this.generateEventsForChanges_(initialChanges, eventSnap.getNode(), registration);
        };
        /**
         * @private
         * @param {!Array.<!Change>} changes
         * @param {!Node} eventCache
         * @param {EventRegistration=} eventRegistration
         * @return {!Array.<!Event>}
         */


        View.prototype.generateEventsForChanges_ = function (changes, eventCache, eventRegistration) {
          var registrations = eventRegistration ? [eventRegistration] : this.eventRegistrations_;
          return this.eventGenerator_.generateEventsForChanges(changes, eventCache, registrations);
        };

        return View;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var __referenceConstructor$1;
      /**
       * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
       * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
       * and user writes (set, transaction, update).
       *
       * It's responsible for:
       *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
       *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
       *    applyUserOverwrite, etc.)
       */


      var SyncPoint =
      /** @class */
      function () {
        function SyncPoint() {
          /**
           * The Views being tracked at this location in the tree, stored as a map where the key is a
           * queryId and the value is the View for that query.
           *
           * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
           */
          this.views = new Map();
        }

        Object.defineProperty(SyncPoint, "__referenceConstructor", {
          get: function get() {
            util.assert(__referenceConstructor$1, 'Reference.ts has not been loaded');
            return __referenceConstructor$1;
          },
          set: function set(val) {
            util.assert(!__referenceConstructor$1, '__referenceConstructor has already been defined');
            __referenceConstructor$1 = val;
          },
          enumerable: false,
          configurable: true
        });

        SyncPoint.prototype.isEmpty = function () {
          return this.views.size === 0;
        };

        SyncPoint.prototype.applyOperation = function (operation, writesCache, optCompleteServerCache) {
          var e_1, _a;

          var queryId = operation.source.queryId;

          if (queryId !== null) {
            var view = this.views.get(queryId);
            util.assert(view != null, 'SyncTree gave us an op for an invalid query.');
            return view.applyOperation(operation, writesCache, optCompleteServerCache);
          } else {
            var events = [];

            try {
              for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var view = _c.value;
                events = events.concat(view.applyOperation(operation, writesCache, optCompleteServerCache));
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }

            return events;
          }
        };
        /**
         * Add an event callback for the specified query.
         *
         * @param {!Query} query
         * @param {!EventRegistration} eventRegistration
         * @param {!WriteTreeRef} writesCache
         * @param {?Node} serverCache Complete server cache, if we have it.
         * @param {boolean} serverCacheComplete
         * @return {!Array.<!Event>} Events to raise.
         */


        SyncPoint.prototype.addEventRegistration = function (query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
          var queryId = query.queryIdentifier();
          var view = this.views.get(queryId);

          if (!view) {
            // TODO: make writesCache take flag for complete server node
            var eventCache = writesCache.calcCompleteEventCache(serverCacheComplete ? serverCache : null);
            var eventCacheComplete = false;

            if (eventCache) {
              eventCacheComplete = true;
            } else if (serverCache instanceof ChildrenNode) {
              eventCache = writesCache.calcCompleteEventChildren(serverCache);
              eventCacheComplete = false;
            } else {
              eventCache = ChildrenNode.EMPTY_NODE;
              eventCacheComplete = false;
            }

            var viewCache = new ViewCache(new CacheNode(
            /** @type {!Node} */
            eventCache, eventCacheComplete, false), new CacheNode(
            /** @type {!Node} */
            serverCache, serverCacheComplete, false));
            view = new View(query, viewCache);
            this.views.set(queryId, view);
          } // This is guaranteed to exist now, we just created anything that was missing


          view.addEventRegistration(eventRegistration);
          return view.getInitialEvents(eventRegistration);
        };
        /**
         * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
         *
         * If query is the default query, we'll check all views for the specified eventRegistration.
         * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
         *
         * @param {!Query} query
         * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
         * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
         * @return {{removed:!Array.<!Query>, events:!Array.<!Event>}} removed queries and any cancel events
         */


        SyncPoint.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
          var e_2, _a;

          var queryId = query.queryIdentifier();
          var removed = [];
          var cancelEvents = [];
          var hadCompleteView = this.hasCompleteView();

          if (queryId === 'default') {
            try {
              // When you do ref.off(...), we search all views for the registration to remove.
              for (var _b = tslib.__values(this.views.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2),
                    viewQueryId = _d[0],
                    view = _d[1];

                cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));

                if (view.isEmpty()) {
                  this.views["delete"](viewQueryId); // We'll deal with complete views later.

                  if (!view.getQuery().getQueryParams().loadsAllData()) {
                    removed.push(view.getQuery());
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          } else {
            // remove the callback from the specific view.
            var view = this.views.get(queryId);

            if (view) {
              cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));

              if (view.isEmpty()) {
                this.views["delete"](queryId); // We'll deal with complete views later.

                if (!view.getQuery().getQueryParams().loadsAllData()) {
                  removed.push(view.getQuery());
                }
              }
            }
          }

          if (hadCompleteView && !this.hasCompleteView()) {
            // We removed our last complete view.
            removed.push(new SyncPoint.__referenceConstructor(query.repo, query.path));
          }

          return {
            removed: removed,
            events: cancelEvents
          };
        };

        SyncPoint.prototype.getQueryViews = function () {
          var e_3, _a;

          var result = [];

          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;

              if (!view.getQuery().getQueryParams().loadsAllData()) {
                result.push(view);
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_3) throw e_3.error;
            }
          }

          return result;
        };
        /**
         * @param path The path to the desired complete snapshot
         * @return A complete cache, if it exists
         */


        SyncPoint.prototype.getCompleteServerCache = function (path) {
          var e_4, _a;

          var serverCache = null;

          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;
              serverCache = serverCache || view.getCompleteServerCache(path);
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_4) throw e_4.error;
            }
          }

          return serverCache;
        };

        SyncPoint.prototype.viewForQuery = function (query) {
          var params = query.getQueryParams();

          if (params.loadsAllData()) {
            return this.getCompleteView();
          } else {
            var queryId = query.queryIdentifier();
            return this.views.get(queryId);
          }
        };

        SyncPoint.prototype.viewExistsForQuery = function (query) {
          return this.viewForQuery(query) != null;
        };

        SyncPoint.prototype.hasCompleteView = function () {
          return this.getCompleteView() != null;
        };

        SyncPoint.prototype.getCompleteView = function () {
          var e_5, _a;

          try {
            for (var _b = tslib.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var view = _c.value;

              if (view.getQuery().getQueryParams().loadsAllData()) {
                return view;
              }
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_5) throw e_5.error;
            }
          }

          return null;
        };

        return SyncPoint;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
       * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
       * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
       * to reflect the write added.
       */


      var CompoundWrite =
      /** @class */
      function () {
        function CompoundWrite(writeTree_) {
          this.writeTree_ = writeTree_;
        }

        CompoundWrite.prototype.addWrite = function (path, node) {
          if (path.isEmpty()) {
            return new CompoundWrite(new ImmutableTree(node));
          } else {
            var rootmost = this.writeTree_.findRootMostValueAndPath(path);

            if (rootmost != null) {
              var rootMostPath = rootmost.path;
              var value = rootmost.value;
              var relativePath = Path.relativePath(rootMostPath, path);
              value = value.updateChild(relativePath, node);
              return new CompoundWrite(this.writeTree_.set(rootMostPath, value));
            } else {
              var subtree = new ImmutableTree(node);
              var newWriteTree = this.writeTree_.setTree(path, subtree);
              return new CompoundWrite(newWriteTree);
            }
          }
        };

        CompoundWrite.prototype.addWrites = function (path, updates) {
          var newWrite = this;
          each(updates, function (childKey, node) {
            newWrite = newWrite.addWrite(path.child(childKey), node);
          });
          return newWrite;
        };
        /**
         * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
         * location, which must be removed by calling this method with that path.
         *
         * @param path The path at which a write and all deeper writes should be removed
         * @return {!CompoundWrite} The new CompoundWrite with the removed path
         */


        CompoundWrite.prototype.removeWrite = function (path) {
          if (path.isEmpty()) {
            return CompoundWrite.Empty;
          } else {
            var newWriteTree = this.writeTree_.setTree(path, ImmutableTree.Empty);
            return new CompoundWrite(newWriteTree);
          }
        };
        /**
         * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
         * considered "complete".
         *
         * @param path The path to check for
         * @return Whether there is a complete write at that path
         */


        CompoundWrite.prototype.hasCompleteWrite = function (path) {
          return this.getCompleteNode(path) != null;
        };
        /**
         * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
         * writes from deeper paths, but will return child nodes from a more shallow path.
         *
         * @param path The path to get a complete write
         * @return The node if complete at that path, or null otherwise.
         */


        CompoundWrite.prototype.getCompleteNode = function (path) {
          var rootmost = this.writeTree_.findRootMostValueAndPath(path);

          if (rootmost != null) {
            return this.writeTree_.get(rootmost.path).getChild(Path.relativePath(rootmost.path, path));
          } else {
            return null;
          }
        };
        /**
         * Returns all children that are guaranteed to be a complete overwrite.
         *
         * @return A list of all complete children.
         */


        CompoundWrite.prototype.getCompleteChildren = function () {
          var children = [];
          var node = this.writeTree_.value;

          if (node != null) {
            // If it's a leaf node, it has no children; so nothing to do.
            if (!node.isLeafNode()) {
              node.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
                children.push(new NamedNode(childName, childNode));
              });
            }
          } else {
            this.writeTree_.children.inorderTraversal(function (childName, childTree) {
              if (childTree.value != null) {
                children.push(new NamedNode(childName, childTree.value));
              }
            });
          }

          return children;
        };

        CompoundWrite.prototype.childCompoundWrite = function (path) {
          if (path.isEmpty()) {
            return this;
          } else {
            var shadowingNode = this.getCompleteNode(path);

            if (shadowingNode != null) {
              return new CompoundWrite(new ImmutableTree(shadowingNode));
            } else {
              return new CompoundWrite(this.writeTree_.subtree(path));
            }
          }
        };
        /**
         * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
         * @return Whether this CompoundWrite is empty
         */


        CompoundWrite.prototype.isEmpty = function () {
          return this.writeTree_.isEmpty();
        };
        /**
         * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
         * node
         * @param node The node to apply this CompoundWrite to
         * @return The node with all writes applied
         */


        CompoundWrite.prototype.apply = function (node) {
          return applySubtreeWrite(Path.Empty, this.writeTree_, node);
        };

        CompoundWrite.Empty = new CompoundWrite(new ImmutableTree(null));
        return CompoundWrite;
      }();

      function applySubtreeWrite(relativePath, writeTree, node) {
        if (writeTree.value != null) {
          // Since there a write is always a leaf, we're done here
          return node.updateChild(relativePath, writeTree.value);
        } else {
          var priorityWrite_1 = null;
          writeTree.children.inorderTraversal(function (childKey, childTree) {
            if (childKey === '.priority') {
              // Apply priorities at the end so we don't update priorities for either empty nodes or forget
              // to apply priorities to empty nodes that are later filled
              util.assert(childTree.value !== null, 'Priority writes must always be leaf nodes');
              priorityWrite_1 = childTree.value;
            } else {
              node = applySubtreeWrite(relativePath.child(childKey), childTree, node);
            }
          }); // If there was a priority write, we only apply it if the node is not empty

          if (!node.getChild(relativePath).isEmpty() && priorityWrite_1 !== null) {
            node = node.updateChild(relativePath.child('.priority'), priorityWrite_1);
          }

          return node;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * WriteTree tracks all pending user-initiated writes and has methods to calculate the result of merging them
       * with underlying server data (to create "event cache" data).  Pending writes are added with addOverwrite()
       * and addMerge(), and removed with removeWrite().
       *
       * @constructor
       */


      var WriteTree =
      /** @class */
      function () {
        function WriteTree() {
          /**
           * A tree tracking the result of applying all visible writes.  This does not include transactions with
           * applyLocally=false or writes that are completely shadowed by other writes.
           *
           * @type {!CompoundWrite}
           * @private
           */
          this.visibleWrites_ = CompoundWrite.Empty;
          /**
           * A list of all pending writes, regardless of visibility and shadowed-ness.  Used to calculate arbitrary
           * sets of the changed data, such as hidden writes (from transactions) or changes with certain writes excluded (also
           * used by transactions).
           *
           * @type {!Array.<!WriteRecord>}
           * @private
           */

          this.allWrites_ = [];
          this.lastWriteId_ = -1;
        }
        /**
         * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
         *
         * @param {!Path} path
         * @return {!WriteTreeRef}
         */


        WriteTree.prototype.childWrites = function (path) {
          return new WriteTreeRef(path, this);
        };
        /**
         * Record a new overwrite from user code.
         *
         * @param {!Path} path
         * @param {!Node} snap
         * @param {!number} writeId
         * @param {boolean=} visible This is set to false by some transactions. It should be excluded from event caches
         */


        WriteTree.prototype.addOverwrite = function (path, snap, writeId, visible) {
          util.assert(writeId > this.lastWriteId_, 'Stacking an older write on top of newer ones');

          if (visible === undefined) {
            visible = true;
          }

          this.allWrites_.push({
            path: path,
            snap: snap,
            writeId: writeId,
            visible: visible
          });

          if (visible) {
            this.visibleWrites_ = this.visibleWrites_.addWrite(path, snap);
          }

          this.lastWriteId_ = writeId;
        };
        /**
         * Record a new merge from user code.
         *
         * @param {!Path} path
         * @param {!Object.<string, !Node>} changedChildren
         * @param {!number} writeId
         */


        WriteTree.prototype.addMerge = function (path, changedChildren, writeId) {
          util.assert(writeId > this.lastWriteId_, 'Stacking an older merge on top of newer ones');
          this.allWrites_.push({
            path: path,
            children: changedChildren,
            writeId: writeId,
            visible: true
          });
          this.visibleWrites_ = this.visibleWrites_.addWrites(path, changedChildren);
          this.lastWriteId_ = writeId;
        };
        /**
         * @param {!number} writeId
         * @return {?WriteRecord}
         */


        WriteTree.prototype.getWrite = function (writeId) {
          for (var i = 0; i < this.allWrites_.length; i++) {
            var record = this.allWrites_[i];

            if (record.writeId === writeId) {
              return record;
            }
          }

          return null;
        };
        /**
         * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
         * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
         *
         * @param {!number} writeId
         * @return {boolean} true if the write may have been visible (meaning we'll need to reevaluate / raise
         * events as a result).
         */


        WriteTree.prototype.removeWrite = function (writeId) {
          // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
          // out of order.
          //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
          //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
          var _this = this;

          var idx = this.allWrites_.findIndex(function (s) {
            return s.writeId === writeId;
          });
          util.assert(idx >= 0, 'removeWrite called with nonexistent writeId.');
          var writeToRemove = this.allWrites_[idx];
          this.allWrites_.splice(idx, 1);
          var removedWriteWasVisible = writeToRemove.visible;
          var removedWriteOverlapsWithOtherWrites = false;
          var i = this.allWrites_.length - 1;

          while (removedWriteWasVisible && i >= 0) {
            var currentWrite = this.allWrites_[i];

            if (currentWrite.visible) {
              if (i >= idx && this.recordContainsPath_(currentWrite, writeToRemove.path)) {
                // The removed write was completely shadowed by a subsequent write.
                removedWriteWasVisible = false;
              } else if (writeToRemove.path.contains(currentWrite.path)) {
                // Either we're covering some writes or they're covering part of us (depending on which came first).
                removedWriteOverlapsWithOtherWrites = true;
              }
            }

            i--;
          }

          if (!removedWriteWasVisible) {
            return false;
          } else if (removedWriteOverlapsWithOtherWrites) {
            // There's some shadowing going on. Just rebuild the visible writes from scratch.
            this.resetTree_();
            return true;
          } else {
            // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
            if (writeToRemove.snap) {
              this.visibleWrites_ = this.visibleWrites_.removeWrite(writeToRemove.path);
            } else {
              var children = writeToRemove.children;
              each(children, function (childName) {
                _this.visibleWrites_ = _this.visibleWrites_.removeWrite(writeToRemove.path.child(childName));
              });
            }

            return true;
          }
        };
        /**
         * Return a complete snapshot for the given path if there's visible write data at that path, else null.
         * No server data is considered.
         *
         * @param {!Path} path
         * @return {?Node}
         */


        WriteTree.prototype.getCompleteWriteData = function (path) {
          return this.visibleWrites_.getCompleteNode(path);
        };
        /**
         * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
         * writes), attempt to calculate a complete snapshot for the given path
         *
         * @param {!Path} treePath
         * @param {?Node} completeServerCache
         * @param {Array.<number>=} writeIdsToExclude An optional set to be excluded
         * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
         * @return {?Node}
         */


        WriteTree.prototype.calcCompleteEventCache = function (treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
          if (!writeIdsToExclude && !includeHiddenWrites) {
            var shadowingNode = this.visibleWrites_.getCompleteNode(treePath);

            if (shadowingNode != null) {
              return shadowingNode;
            } else {
              var subMerge = this.visibleWrites_.childCompoundWrite(treePath);

              if (subMerge.isEmpty()) {
                return completeServerCache;
              } else if (completeServerCache == null && !subMerge.hasCompleteWrite(Path.Empty)) {
                // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
                return null;
              } else {
                var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return subMerge.apply(layeredCache);
              }
            }
          } else {
            var merge = this.visibleWrites_.childCompoundWrite(treePath);

            if (!includeHiddenWrites && merge.isEmpty()) {
              return completeServerCache;
            } else {
              // If the server cache is null, and we don't have a complete cache, we need to return null
              if (!includeHiddenWrites && completeServerCache == null && !merge.hasCompleteWrite(Path.Empty)) {
                return null;
              } else {
                var filter = function filter(write) {
                  return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (write.path.contains(treePath) || treePath.contains(write.path));
                };

                var mergeAtPath = WriteTree.layerTree_(this.allWrites_, filter, treePath);
                var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return mergeAtPath.apply(layeredCache);
              }
            }
          }
        };
        /**
         * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
         * Used when creating new views, to pre-fill their complete event children snapshot.
         *
         * @param {!Path} treePath
         * @param {?ChildrenNode} completeServerChildren
         * @return {!ChildrenNode}
         */


        WriteTree.prototype.calcCompleteEventChildren = function (treePath, completeServerChildren) {
          var completeChildren = ChildrenNode.EMPTY_NODE;
          var topLevelSet = this.visibleWrites_.getCompleteNode(treePath);

          if (topLevelSet) {
            if (!topLevelSet.isLeafNode()) {
              // we're shadowing everything. Return the children.
              topLevelSet.forEachChild(PRIORITY_INDEX, function (childName, childSnap) {
                completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
              });
            }

            return completeChildren;
          } else if (completeServerChildren) {
            // Layer any children we have on top of this
            // We know we don't have a top-level set, so just enumerate existing children
            var merge_1 = this.visibleWrites_.childCompoundWrite(treePath);
            completeServerChildren.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
              var node = merge_1.childCompoundWrite(new Path(childName)).apply(childNode);
              completeChildren = completeChildren.updateImmediateChild(childName, node);
            }); // Add any complete children we have from the set

            merge_1.getCompleteChildren().forEach(function (namedNode) {
              completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
          } else {
            // We don't have anything to layer on top of. Layer on any children we have
            // Note that we can return an empty snap if we have a defined delete
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            merge.getCompleteChildren().forEach(function (namedNode) {
              completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
          }
        };
        /**
         * Given that the underlying server data has updated, determine what, if anything, needs to be
         * applied to the event cache.
         *
         * Possibilities:
         *
         * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
         *
         * 2. Some write is completely shadowing. No events to be raised
         *
         * 3. Is partially shadowed. Events
         *
         * Either existingEventSnap or existingServerSnap must exist
         *
         * @param {!Path} treePath
         * @param {!Path} childPath
         * @param {?Node} existingEventSnap
         * @param {?Node} existingServerSnap
         * @return {?Node}
         */


        WriteTree.prototype.calcEventCacheAfterServerOverwrite = function (treePath, childPath, existingEventSnap, existingServerSnap) {
          util.assert(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
          var path = treePath.child(childPath);

          if (this.visibleWrites_.hasCompleteWrite(path)) {
            // At this point we can probably guarantee that we're in case 2, meaning no events
            // May need to check visibility while doing the findRootMostValueAndPath call
            return null;
          } else {
            // No complete shadowing. We're either partially shadowing or not shadowing at all.
            var childMerge = this.visibleWrites_.childCompoundWrite(path);

            if (childMerge.isEmpty()) {
              // We're not shadowing at all. Case 1
              return existingServerSnap.getChild(childPath);
            } else {
              // This could be more efficient if the serverNode + updates doesn't change the eventSnap
              // However this is tricky to find out, since user updates don't necessary change the server
              // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
              // adds nodes, but doesn't change any existing writes. It is therefore not enough to
              // only check if the updates change the serverNode.
              // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
              return childMerge.apply(existingServerSnap.getChild(childPath));
            }
          }
        };
        /**
         * Returns a complete child for a given server snap after applying all user writes or null if there is no
         * complete child for this ChildKey.
         *
         * @param {!Path} treePath
         * @param {!string} childKey
         * @param {!CacheNode} existingServerSnap
         * @return {?Node}
         */


        WriteTree.prototype.calcCompleteChild = function (treePath, childKey, existingServerSnap) {
          var path = treePath.child(childKey);
          var shadowingNode = this.visibleWrites_.getCompleteNode(path);

          if (shadowingNode != null) {
            return shadowingNode;
          } else {
            if (existingServerSnap.isCompleteForChild(childKey)) {
              var childMerge = this.visibleWrites_.childCompoundWrite(path);
              return childMerge.apply(existingServerSnap.getNode().getImmediateChild(childKey));
            } else {
              return null;
            }
          }
        };
        /**
         * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
         * a higher path, this will return the child of that write relative to the write and this path.
         * Returns null if there is no write at this path.
         */


        WriteTree.prototype.shadowingWrite = function (path) {
          return this.visibleWrites_.getCompleteNode(path);
        };
        /**
         * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
         * the window, but may now be in the window.
         */


        WriteTree.prototype.calcIndexedSlice = function (treePath, completeServerData, startPost, count, reverse, index) {
          var toIterate;
          var merge = this.visibleWrites_.childCompoundWrite(treePath);
          var shadowingNode = merge.getCompleteNode(Path.Empty);

          if (shadowingNode != null) {
            toIterate = shadowingNode;
          } else if (completeServerData != null) {
            toIterate = merge.apply(completeServerData);
          } else {
            // no children to iterate on
            return [];
          }

          toIterate = toIterate.withIndex(index);

          if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
            var nodes = [];
            var cmp = index.getCompare();
            var iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
            var next = iter.getNext();

            while (next && nodes.length < count) {
              if (cmp(next, startPost) !== 0) {
                nodes.push(next);
              }

              next = iter.getNext();
            }

            return nodes;
          } else {
            return [];
          }
        };

        WriteTree.prototype.recordContainsPath_ = function (writeRecord, path) {
          if (writeRecord.snap) {
            return writeRecord.path.contains(path);
          } else {
            for (var childName in writeRecord.children) {
              if (writeRecord.children.hasOwnProperty(childName) && writeRecord.path.child(childName).contains(path)) {
                return true;
              }
            }

            return false;
          }
        };
        /**
         * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
         */


        WriteTree.prototype.resetTree_ = function () {
          this.visibleWrites_ = WriteTree.layerTree_(this.allWrites_, WriteTree.DefaultFilter_, Path.Empty);

          if (this.allWrites_.length > 0) {
            this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId;
          } else {
            this.lastWriteId_ = -1;
          }
        };
        /**
         * The default filter used when constructing the tree. Keep everything that's visible.
         */


        WriteTree.DefaultFilter_ = function (write) {
          return write.visible;
        };
        /**
         * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
         * event data at that path.
         */


        WriteTree.layerTree_ = function (writes, filter, treeRoot) {
          var compoundWrite = CompoundWrite.Empty;

          for (var i = 0; i < writes.length; ++i) {
            var write = writes[i]; // Theory, a later set will either:
            // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
            // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction

            if (filter(write)) {
              var writePath = write.path;
              var relativePath = void 0;

              if (write.snap) {
                if (treeRoot.contains(writePath)) {
                  relativePath = Path.relativePath(treeRoot, writePath);
                  compoundWrite = compoundWrite.addWrite(relativePath, write.snap);
                } else if (writePath.contains(treeRoot)) {
                  relativePath = Path.relativePath(writePath, treeRoot);
                  compoundWrite = compoundWrite.addWrite(Path.Empty, write.snap.getChild(relativePath));
                }
              } else if (write.children) {
                if (treeRoot.contains(writePath)) {
                  relativePath = Path.relativePath(treeRoot, writePath);
                  compoundWrite = compoundWrite.addWrites(relativePath, write.children);
                } else if (writePath.contains(treeRoot)) {
                  relativePath = Path.relativePath(writePath, treeRoot);

                  if (relativePath.isEmpty()) {
                    compoundWrite = compoundWrite.addWrites(Path.Empty, write.children);
                  } else {
                    var child = util.safeGet(write.children, relativePath.getFront());

                    if (child) {
                      // There exists a child in this node that matches the root path
                      var deepNode = child.getChild(relativePath.popFront());
                      compoundWrite = compoundWrite.addWrite(Path.Empty, deepNode);
                    }
                  }
                }
              } else {
                throw util.assertionError('WriteRecord should have .snap or .children');
              }
            }
          }

          return compoundWrite;
        };

        return WriteTree;
      }();
      /**
       * A WriteTreeRef wraps a WriteTree and a path, for convenient access to a particular subtree.  All of the methods
       * just proxy to the underlying WriteTree.
       *
       * @constructor
       */


      var WriteTreeRef =
      /** @class */
      function () {
        /**
         * @param {!Path} path
         * @param {!WriteTree} writeTree
         */
        function WriteTreeRef(path, writeTree) {
          this.treePath_ = path;
          this.writeTree_ = writeTree;
        }
        /**
         * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
         * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
         * can lead to a more expensive calculation.
         *
         * @param {?Node} completeServerCache
         * @param {Array.<number>=} writeIdsToExclude Optional writes to exclude.
         * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
         * @return {?Node}
         */


        WriteTreeRef.prototype.calcCompleteEventCache = function (completeServerCache, writeIdsToExclude, includeHiddenWrites) {
          return this.writeTree_.calcCompleteEventCache(this.treePath_, completeServerCache, writeIdsToExclude, includeHiddenWrites);
        };
        /**
         * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
         * mix of the given server data and write data.
         *
         * @param {?ChildrenNode} completeServerChildren
         * @return {!ChildrenNode}
         */


        WriteTreeRef.prototype.calcCompleteEventChildren = function (completeServerChildren) {
          return this.writeTree_.calcCompleteEventChildren(this.treePath_, completeServerChildren);
        };
        /**
         * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
         * if anything, needs to be applied to the event cache.
         *
         * Possibilities:
         *
         * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
         *
         * 2. Some write is completely shadowing. No events to be raised
         *
         * 3. Is partially shadowed. Events should be raised
         *
         * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
         *
         * @param {!Path} path
         * @param {?Node} existingEventSnap
         * @param {?Node} existingServerSnap
         * @return {?Node}
         */


        WriteTreeRef.prototype.calcEventCacheAfterServerOverwrite = function (path, existingEventSnap, existingServerSnap) {
          return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, path, existingEventSnap, existingServerSnap);
        };
        /**
         * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
         * a higher path, this will return the child of that write relative to the write and this path.
         * Returns null if there is no write at this path.
         *
         * @param {!Path} path
         * @return {?Node}
         */


        WriteTreeRef.prototype.shadowingWrite = function (path) {
          return this.writeTree_.shadowingWrite(this.treePath_.child(path));
        };
        /**
         * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
         * the window, but may now be in the window
         *
         * @param {?Node} completeServerData
         * @param {!NamedNode} startPost
         * @param {!number} count
         * @param {boolean} reverse
         * @param {!Index} index
         * @return {!Array.<!NamedNode>}
         */


        WriteTreeRef.prototype.calcIndexedSlice = function (completeServerData, startPost, count, reverse, index) {
          return this.writeTree_.calcIndexedSlice(this.treePath_, completeServerData, startPost, count, reverse, index);
        };
        /**
         * Returns a complete child for a given server snap after applying all user writes or null if there is no
         * complete child for this ChildKey.
         *
         * @param {!string} childKey
         * @param {!CacheNode} existingServerCache
         * @return {?Node}
         */


        WriteTreeRef.prototype.calcCompleteChild = function (childKey, existingServerCache) {
          return this.writeTree_.calcCompleteChild(this.treePath_, childKey, existingServerCache);
        };
        /**
         * Return a WriteTreeRef for a child.
         *
         * @param {string} childName
         * @return {!WriteTreeRef}
         */


        WriteTreeRef.prototype.child = function (childName) {
          return new WriteTreeRef(this.treePath_.child(childName), this.writeTree_);
        };

        return WriteTreeRef;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * SyncTree is the central class for managing event callback registration, data caching, views
       * (query processing), and event generation.  There are typically two SyncTree instances for
       * each Repo, one for the normal Firebase data, and one for the .info data.
       *
       * It has a number of responsibilities, including:
       *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
       *  - Applying and caching data changes for user set(), transaction(), and update() calls
       *    (applyUserOverwrite(), applyUserMerge()).
       *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
       *    applyServerMerge()).
       *  - Generating user-facing events for server and user changes (all of the apply* methods
       *    return the set of events that need to be raised as a result).
       *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
       *    to the correct set of paths and queries to satisfy the current set of user event
       *    callbacks (listens are started/stopped using the provided listenProvider).
       *
       * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
       * events are returned to the caller rather than raised synchronously.
       *
       * @constructor
       */


      var SyncTree =
      /** @class */
      function () {
        /**
         * @param {!ListenProvider} listenProvider_ Used by SyncTree to start / stop listening
         *   to server data.
         */
        function SyncTree(listenProvider_) {
          this.listenProvider_ = listenProvider_;
          /**
           * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
           */

          this.syncPointTree_ = ImmutableTree.Empty;
          /**
           * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
           */

          this.pendingWriteTree_ = new WriteTree();
          this.tagToQueryMap = new Map();
          this.queryToTagMap = new Map();
        }
        /**
         * Apply the data changes for a user-generated set() or transaction() call.
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyUserOverwrite = function (path, newData, writeId, visible) {
          // Record pending write.
          this.pendingWriteTree_.addOverwrite(path, newData, writeId, visible);

          if (!visible) {
            return [];
          } else {
            return this.applyOperationToSyncPoints_(new Overwrite(OperationSource.User, path, newData));
          }
        };
        /**
         * Apply the data from a user-generated update() call
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyUserMerge = function (path, changedChildren, writeId) {
          // Record pending merge.
          this.pendingWriteTree_.addMerge(path, changedChildren, writeId);
          var changeTree = ImmutableTree.fromObject(changedChildren);
          return this.applyOperationToSyncPoints_(new Merge(OperationSource.User, path, changeTree));
        };
        /**
         * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
         *
         * @param revert True if the given write failed and needs to be reverted
         * @return Events to raise.
         */


        SyncTree.prototype.ackUserWrite = function (writeId, revert) {
          if (revert === void 0) {
            revert = false;
          }

          var write = this.pendingWriteTree_.getWrite(writeId);
          var needToReevaluate = this.pendingWriteTree_.removeWrite(writeId);

          if (!needToReevaluate) {
            return [];
          } else {
            var affectedTree_1 = ImmutableTree.Empty;

            if (write.snap != null) {
              // overwrite
              affectedTree_1 = affectedTree_1.set(Path.Empty, true);
            } else {
              each(write.children, function (pathString, node) {
                affectedTree_1 = affectedTree_1.set(new Path(pathString), node);
              });
            }

            return this.applyOperationToSyncPoints_(new AckUserWrite(write.path, affectedTree_1, revert));
          }
        };
        /**
         * Apply new server data for the specified path..
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyServerOverwrite = function (path, newData) {
          return this.applyOperationToSyncPoints_(new Overwrite(OperationSource.Server, path, newData));
        };
        /**
         * Apply new server data to be merged in at the specified path.
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyServerMerge = function (path, changedChildren) {
          var changeTree = ImmutableTree.fromObject(changedChildren);
          return this.applyOperationToSyncPoints_(new Merge(OperationSource.Server, path, changeTree));
        };
        /**
         * Apply a listen complete for a query
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyListenComplete = function (path) {
          return this.applyOperationToSyncPoints_(new ListenComplete(OperationSource.Server, path));
        };
        /**
         * Apply new server data for the specified tagged query.
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyTaggedQueryOverwrite = function (path, snap, tag) {
          var queryKey = this.queryKeyForTag_(tag);

          if (queryKey != null) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new Overwrite(OperationSource.forServerTaggedQuery(queryId), relativePath, snap);
            return this.applyTaggedOperation_(queryPath, op);
          } else {
            // Query must have been removed already
            return [];
          }
        };
        /**
         * Apply server data to be merged in for the specified tagged query.
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyTaggedQueryMerge = function (path, changedChildren, tag) {
          var queryKey = this.queryKeyForTag_(tag);

          if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var changeTree = ImmutableTree.fromObject(changedChildren);
            var op = new Merge(OperationSource.forServerTaggedQuery(queryId), relativePath, changeTree);
            return this.applyTaggedOperation_(queryPath, op);
          } else {
            // We've already removed the query. No big deal, ignore the update
            return [];
          }
        };
        /**
         * Apply a listen complete for a tagged query
         *
         * @return Events to raise.
         */


        SyncTree.prototype.applyTaggedListenComplete = function (path, tag) {
          var queryKey = this.queryKeyForTag_(tag);

          if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path,
                queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new ListenComplete(OperationSource.forServerTaggedQuery(queryId), relativePath);
            return this.applyTaggedOperation_(queryPath, op);
          } else {
            // We've already removed the query. No big deal, ignore the update
            return [];
          }
        };
        /**
         * Add an event callback for the specified query.
         *
         * @return Events to raise.
         */


        SyncTree.prototype.addEventRegistration = function (query, eventRegistration) {
          var path = query.path;
          var serverCache = null;
          var foundAncestorDefaultView = false; // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
          // Consider optimizing this once there's a better understanding of what actual behavior will be.

          this.syncPointTree_.foreachOnPath(path, function (pathToSyncPoint, sp) {
            var relativePath = Path.relativePath(pathToSyncPoint, path);
            serverCache = serverCache || sp.getCompleteServerCache(relativePath);
            foundAncestorDefaultView = foundAncestorDefaultView || sp.hasCompleteView();
          });
          var syncPoint = this.syncPointTree_.get(path);

          if (!syncPoint) {
            syncPoint = new SyncPoint();
            this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
          } else {
            foundAncestorDefaultView = foundAncestorDefaultView || syncPoint.hasCompleteView();
            serverCache = serverCache || syncPoint.getCompleteServerCache(Path.Empty);
          }

          var serverCacheComplete;

          if (serverCache != null) {
            serverCacheComplete = true;
          } else {
            serverCacheComplete = false;
            serverCache = ChildrenNode.EMPTY_NODE;
            var subtree = this.syncPointTree_.subtree(path);
            subtree.foreachChild(function (childName, childSyncPoint) {
              var completeCache = childSyncPoint.getCompleteServerCache(Path.Empty);

              if (completeCache) {
                serverCache = serverCache.updateImmediateChild(childName, completeCache);
              }
            });
          }

          var viewAlreadyExists = syncPoint.viewExistsForQuery(query);

          if (!viewAlreadyExists && !query.getQueryParams().loadsAllData()) {
            // We need to track a tag for this query
            var queryKey = SyncTree.makeQueryKey_(query);
            util.assert(!this.queryToTagMap.has(queryKey), 'View does not exist, but we have a tag');
            var tag = SyncTree.getNextQueryTag_();
            this.queryToTagMap.set(queryKey, tag);
            this.tagToQueryMap.set(tag, queryKey);
          }

          var writesCache = this.pendingWriteTree_.childWrites(path);
          var events = syncPoint.addEventRegistration(query, eventRegistration, writesCache, serverCache, serverCacheComplete);

          if (!viewAlreadyExists && !foundAncestorDefaultView) {
            var view
            /** @type !View */
            = syncPoint.viewForQuery(query);
            events = events.concat(this.setupListener_(query, view));
          }

          return events;
        };
        /**
         * Remove event callback(s).
         *
         * If query is the default query, we'll check all queries for the specified eventRegistration.
         * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
         *
         * @param eventRegistration If null, all callbacks are removed.
         * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
         * @return Cancel events, if cancelError was provided.
         */


        SyncTree.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
          var _this = this; // Find the syncPoint first. Then deal with whether or not it has matching listeners


          var path = query.path;
          var maybeSyncPoint = this.syncPointTree_.get(path);
          var cancelEvents = []; // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
          // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
          // not loadsAllData().

          if (maybeSyncPoint && (query.queryIdentifier() === 'default' || maybeSyncPoint.viewExistsForQuery(query))) {
            /**
             * @type {{removed: !Array.<!Query>, events: !Array.<!Event>}}
             */
            var removedAndEvents = maybeSyncPoint.removeEventRegistration(query, eventRegistration, cancelError);

            if (maybeSyncPoint.isEmpty()) {
              this.syncPointTree_ = this.syncPointTree_.remove(path);
            }

            var removed = removedAndEvents.removed;
            cancelEvents = removedAndEvents.events; // We may have just removed one of many listeners and can short-circuit this whole process
            // We may also not have removed a default listener, in which case all of the descendant listeners should already be
            // properly set up.
            //
            // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
            // queryId === 'default'

            var removingDefault = -1 !== removed.findIndex(function (query) {
              return query.getQueryParams().loadsAllData();
            });
            var covered = this.syncPointTree_.findOnPath(path, function (relativePath, parentSyncPoint) {
              return parentSyncPoint.hasCompleteView();
            });

            if (removingDefault && !covered) {
              var subtree = this.syncPointTree_.subtree(path); // There are potentially child listeners. Determine what if any listens we need to send before executing the
              // removal

              if (!subtree.isEmpty()) {
                // We need to fold over our subtree and collect the listeners to send
                var newViews = this.collectDistinctViewsForSubTree_(subtree); // Ok, we've collected all the listens we need. Set them up.

                for (var i = 0; i < newViews.length; ++i) {
                  var view = newViews[i],
                      newQuery = view.getQuery();
                  var listener = this.createListenerForView_(view);
                  this.listenProvider_.startListening(SyncTree.queryForListening_(newQuery), this.tagForQuery_(newQuery), listener.hashFn, listener.onComplete);
                }
              }
            } // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
            // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
            // Also, note that if we have a cancelError, it's already been removed at the provider level.


            if (!covered && removed.length > 0 && !cancelError) {
              // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
              // default. Otherwise, we need to iterate through and cancel each individual query
              if (removingDefault) {
                // We don't tag default listeners
                var defaultTag = null;
                this.listenProvider_.stopListening(SyncTree.queryForListening_(query), defaultTag);
              } else {
                removed.forEach(function (queryToRemove) {
                  var tagToRemove = _this.queryToTagMap.get(SyncTree.makeQueryKey_(queryToRemove));

                  _this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToRemove), tagToRemove);
                });
              }
            } // Now, clear all of the tags we're tracking for the removed listens


            this.removeTags_(removed);
          }

          return cancelEvents;
        };
        /**
         * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
         * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
         * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
         *     <incremented total> as the write is applied locally and then acknowledged at the server.
         *
         * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
         *
         * @param path The path to the data we want
         * @param writeIdsToExclude A specific set to be excluded
         */


        SyncTree.prototype.calcCompleteEventCache = function (path, writeIdsToExclude) {
          var includeHiddenSets = true;
          var writeTree = this.pendingWriteTree_;
          var serverCache = this.syncPointTree_.findOnPath(path, function (pathSoFar, syncPoint) {
            var relativePath = Path.relativePath(pathSoFar, path);
            var serverCache = syncPoint.getCompleteServerCache(relativePath);

            if (serverCache) {
              return serverCache;
            }
          });
          return writeTree.calcCompleteEventCache(path, serverCache, writeIdsToExclude, includeHiddenSets);
        };
        /**
         * This collapses multiple unfiltered views into a single view, since we only need a single
         * listener for them.
         */


        SyncTree.prototype.collectDistinctViewsForSubTree_ = function (subtree) {
          return subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
            if (maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
              var completeView = maybeChildSyncPoint.getCompleteView();
              return [completeView];
            } else {
              // No complete view here, flatten any deeper listens into an array
              var views_1 = [];

              if (maybeChildSyncPoint) {
                views_1 = maybeChildSyncPoint.getQueryViews();
              }

              each(childMap, function (_key, childViews) {
                views_1 = views_1.concat(childViews);
              });
              return views_1;
            }
          });
        };

        SyncTree.prototype.removeTags_ = function (queries) {
          for (var j = 0; j < queries.length; ++j) {
            var removedQuery = queries[j];

            if (!removedQuery.getQueryParams().loadsAllData()) {
              // We should have a tag for this
              var removedQueryKey = SyncTree.makeQueryKey_(removedQuery);
              var removedQueryTag = this.queryToTagMap.get(removedQueryKey);
              this.queryToTagMap["delete"](removedQueryKey);
              this.tagToQueryMap["delete"](removedQueryTag);
            }
          }
        };
        /**
         * Normalizes a query to a query we send the server for listening
         *
         * @return The normalized query
         */


        SyncTree.queryForListening_ = function (query) {
          if (query.getQueryParams().loadsAllData() && !query.getQueryParams().isDefault()) {
            // We treat queries that load all data as default queries
            // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
            // from Query
            return query.getRef();
          } else {
            return query;
          }
        };
        /**
         * For a given new listen, manage the de-duplication of outstanding subscriptions.
         *
         * @return This method can return events to support synchronous data sources
         */


        SyncTree.prototype.setupListener_ = function (query, view) {
          var path = query.path;
          var tag = this.tagForQuery_(query);
          var listener = this.createListenerForView_(view);
          var events = this.listenProvider_.startListening(SyncTree.queryForListening_(query), tag, listener.hashFn, listener.onComplete);
          var subtree = this.syncPointTree_.subtree(path); // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
          // may need to shadow other listens as well.

          if (tag) {
            util.assert(!subtree.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
          } else {
            // Shadow everything at or below this location, this is a default listener.
            var queriesToStop = subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
              if (!relativePath.isEmpty() && maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
                return [maybeChildSyncPoint.getCompleteView().getQuery()];
              } else {
                // No default listener here, flatten any deeper queries into an array
                var queries_1 = [];

                if (maybeChildSyncPoint) {
                  queries_1 = queries_1.concat(maybeChildSyncPoint.getQueryViews().map(function (view) {
                    return view.getQuery();
                  }));
                }

                each(childMap, function (_key, childQueries) {
                  queries_1 = queries_1.concat(childQueries);
                });
                return queries_1;
              }
            });

            for (var i = 0; i < queriesToStop.length; ++i) {
              var queryToStop = queriesToStop[i];
              this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToStop), this.tagForQuery_(queryToStop));
            }
          }

          return events;
        };

        SyncTree.prototype.createListenerForView_ = function (view) {
          var _this = this;

          var query = view.getQuery();
          var tag = this.tagForQuery_(query);
          return {
            hashFn: function hashFn() {
              var cache = view.getServerCache() || ChildrenNode.EMPTY_NODE;
              return cache.hash();
            },
            onComplete: function onComplete(status) {
              if (status === 'ok') {
                if (tag) {
                  return _this.applyTaggedListenComplete(query.path, tag);
                } else {
                  return _this.applyListenComplete(query.path);
                }
              } else {
                // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                var error = errorForServerCode(status, query);
                return _this.removeEventRegistration(query,
                /*eventRegistration*/
                null, error);
              }
            }
          };
        };
        /**
         * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
         */


        SyncTree.makeQueryKey_ = function (query) {
          return query.path.toString() + '$' + query.queryIdentifier();
        };
        /**
         * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
         */


        SyncTree.parseQueryKey_ = function (queryKey) {
          var splitIndex = queryKey.indexOf('$');
          util.assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
          return {
            queryId: queryKey.substr(splitIndex + 1),
            path: new Path(queryKey.substr(0, splitIndex))
          };
        };
        /**
         * Return the query associated with the given tag, if we have one
         */


        SyncTree.prototype.queryKeyForTag_ = function (tag) {
          return this.tagToQueryMap.get(tag);
        };
        /**
         * Return the tag associated with the given query.
         */


        SyncTree.prototype.tagForQuery_ = function (query) {
          var queryKey = SyncTree.makeQueryKey_(query);
          return this.queryToTagMap.get(queryKey);
        };
        /**
         * Static accessor for query tags.
         */


        SyncTree.getNextQueryTag_ = function () {
          return SyncTree.nextQueryTag_++;
        };
        /**
         * A helper method to apply tagged operations
         */


        SyncTree.prototype.applyTaggedOperation_ = function (queryPath, operation) {
          var syncPoint = this.syncPointTree_.get(queryPath);
          util.assert(syncPoint, "Missing sync point for query tag that we're tracking");
          var writesCache = this.pendingWriteTree_.childWrites(queryPath);
          return syncPoint.applyOperation(operation, writesCache,
          /*serverCache=*/
          null);
        };
        /**
         * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
         *
         * NOTES:
         * - Descendant SyncPoints will be visited first (since we raise events depth-first).
         *
         * - We call applyOperation() on each SyncPoint passing three things:
         *   1. A version of the Operation that has been made relative to the SyncPoint location.
         *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
         *   3. A snapshot Node with cached server data, if we have it.
         *
         * - We concatenate all of the events returned by each SyncPoint and return the result.
         */


        SyncTree.prototype.applyOperationToSyncPoints_ = function (operation) {
          return this.applyOperationHelper_(operation, this.syncPointTree_,
          /*serverCache=*/
          null, this.pendingWriteTree_.childWrites(Path.Empty));
        };
        /**
         * Recursive helper for applyOperationToSyncPoints_
         */


        SyncTree.prototype.applyOperationHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
          if (operation.path.isEmpty()) {
            return this.applyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
          } else {
            var syncPoint = syncPointTree.get(Path.Empty); // If we don't have cached server data, see if we can get it from this SyncPoint.

            if (serverCache == null && syncPoint != null) {
              serverCache = syncPoint.getCompleteServerCache(Path.Empty);
            }

            var events = [];
            var childName = operation.path.getFront();
            var childOperation = operation.operationForChild(childName);
            var childTree = syncPointTree.children.get(childName);

            if (childTree && childOperation) {
              var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
              var childWritesCache = writesCache.child(childName);
              events = events.concat(this.applyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }

            if (syncPoint) {
              events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
            }

            return events;
          }
        };
        /**
         * Recursive helper for applyOperationToSyncPoints_
         */


        SyncTree.prototype.applyOperationDescendantsHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
          var _this = this;

          var syncPoint = syncPointTree.get(Path.Empty); // If we don't have cached server data, see if we can get it from this SyncPoint.

          if (serverCache == null && syncPoint != null) {
            serverCache = syncPoint.getCompleteServerCache(Path.Empty);
          }

          var events = [];
          syncPointTree.children.inorderTraversal(function (childName, childTree) {
            var childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            var childWritesCache = writesCache.child(childName);
            var childOperation = operation.operationForChild(childName);

            if (childOperation) {
              events = events.concat(_this.applyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }
          });

          if (syncPoint) {
            events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
          }

          return events;
        };
        /**
         * Static tracker for next query tag.
         */


        SyncTree.nextQueryTag_ = 1;
        return SyncTree;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
       *
       * @constructor
       */


      var SnapshotHolder =
      /** @class */
      function () {
        function SnapshotHolder() {
          this.rootNode_ = ChildrenNode.EMPTY_NODE;
        }

        SnapshotHolder.prototype.getNode = function (path) {
          return this.rootNode_.getChild(path);
        };

        SnapshotHolder.prototype.updateSnapshot = function (path, newSnapshotNode) {
          this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
        };

        return SnapshotHolder;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Tracks a collection of stats.
       *
       * @constructor
       */


      var StatsCollection =
      /** @class */
      function () {
        function StatsCollection() {
          this.counters_ = {};
        }

        StatsCollection.prototype.incrementCounter = function (name, amount) {
          if (amount === void 0) {
            amount = 1;
          }

          if (!util.contains(this.counters_, name)) {
            this.counters_[name] = 0;
          }

          this.counters_[name] += amount;
        };

        StatsCollection.prototype.get = function () {
          return util.deepCopy(this.counters_);
        };

        return StatsCollection;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var StatsManager =
      /** @class */
      function () {
        function StatsManager() {}

        StatsManager.getCollection = function (repoInfo) {
          var hashString = repoInfo.toString();

          if (!this.collections_[hashString]) {
            this.collections_[hashString] = new StatsCollection();
          }

          return this.collections_[hashString];
        };

        StatsManager.getOrCreateReporter = function (repoInfo, creatorFunction) {
          var hashString = repoInfo.toString();

          if (!this.reporters_[hashString]) {
            this.reporters_[hashString] = creatorFunction();
          }

          return this.reporters_[hashString];
        };

        StatsManager.collections_ = {};
        StatsManager.reporters_ = {};
        return StatsManager;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns the delta from the previous call to get stats.
       *
       * @param collection_ The collection to "listen" to.
       * @constructor
       */


      var StatsListener =
      /** @class */
      function () {
        function StatsListener(collection_) {
          this.collection_ = collection_;
          this.last_ = null;
        }

        StatsListener.prototype.get = function () {
          var newStats = this.collection_.get();

          var delta = tslib.__assign({}, newStats);

          if (this.last_) {
            each(this.last_, function (stat, value) {
              delta[stat] = delta[stat] - value;
            });
          }

          this.last_ = newStats;
          return delta;
        };

        return StatsListener;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
      // happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
      // seconds to try to ensure the Firebase connection is established / settled.


      var FIRST_STATS_MIN_TIME = 10 * 1000;
      var FIRST_STATS_MAX_TIME = 30 * 1000; // We'll continue to report stats on average every 5 minutes.

      var REPORT_STATS_INTERVAL = 5 * 60 * 1000;
      /**
       * @constructor
       */

      var StatsReporter =
      /** @class */
      function () {
        /**
         * @param collection
         * @param server_
         */
        function StatsReporter(collection, server_) {
          this.server_ = server_;
          this.statsToReport_ = {};
          this.statsListener_ = new StatsListener(collection);
          var timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
        }

        StatsReporter.prototype.includeStat = function (stat) {
          this.statsToReport_[stat] = true;
        };

        StatsReporter.prototype.reportStats_ = function () {
          var _this = this;

          var stats = this.statsListener_.get();
          var reportedStats = {};
          var haveStatsToReport = false;
          each(stats, function (stat, value) {
            if (value > 0 && util.contains(_this.statsToReport_, stat)) {
              reportedStats[stat] = value;
              haveStatsToReport = true;
            }
          });

          if (haveStatsToReport) {
            this.server_.reportStats(reportedStats);
          } // queue our next run.


          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
        };

        return StatsReporter;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * The event queue serves a few purposes:
       * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
       *    events being queued.
       * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
       *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
       *    left off, ensuring that the events are still raised synchronously and in order.
       * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
       *    events are raised synchronously.
       *
       * NOTE: This can all go away if/when we move to async events.
       *
       * @constructor
       */


      var EventQueue =
      /** @class */
      function () {
        function EventQueue() {
          /**
           * @private
           * @type {!Array.<EventList>}
           */
          this.eventLists_ = [];
          /**
           * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
           * @private
           * @type {!number}
           */

          this.recursionDepth_ = 0;
        }
        /**
         * @param {!Array.<Event>} eventDataList The new events to queue.
         */


        EventQueue.prototype.queueEvents = function (eventDataList) {
          // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
          var currList = null;

          for (var i = 0; i < eventDataList.length; i++) {
            var eventData = eventDataList[i];
            var eventPath = eventData.getPath();

            if (currList !== null && !eventPath.equals(currList.getPath())) {
              this.eventLists_.push(currList);
              currList = null;
            }

            if (currList === null) {
              currList = new EventList(eventPath);
            }

            currList.add(eventData);
          }

          if (currList) {
            this.eventLists_.push(currList);
          }
        };
        /**
         * Queues the specified events and synchronously raises all events (including previously queued ones)
         * for the specified path.
         *
         * It is assumed that the new events are all for the specified path.
         *
         * @param {!Path} path The path to raise events for.
         * @param {!Array.<Event>} eventDataList The new events to raise.
         */


        EventQueue.prototype.raiseEventsAtPath = function (path, eventDataList) {
          this.queueEvents(eventDataList);
          this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.equals(path);
          });
        };
        /**
         * Queues the specified events and synchronously raises all events (including previously queued ones) for
         * locations related to the specified change path (i.e. all ancestors and descendants).
         *
         * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
         *
         * @param {!Path} changedPath The path to raise events for.
         * @param {!Array.<!Event>} eventDataList The events to raise
         */


        EventQueue.prototype.raiseEventsForChangedPath = function (changedPath, eventDataList) {
          this.queueEvents(eventDataList);
          this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.contains(changedPath) || changedPath.contains(eventPath);
          });
        };
        /**
         * @param {!function(!Path):boolean} predicate
         * @private
         */


        EventQueue.prototype.raiseQueuedEventsMatchingPredicate_ = function (predicate) {
          this.recursionDepth_++;
          var sentAll = true;

          for (var i = 0; i < this.eventLists_.length; i++) {
            var eventList = this.eventLists_[i];

            if (eventList) {
              var eventPath = eventList.getPath();

              if (predicate(eventPath)) {
                this.eventLists_[i].raise();
                this.eventLists_[i] = null;
              } else {
                sentAll = false;
              }
            }
          }

          if (sentAll) {
            this.eventLists_ = [];
          }

          this.recursionDepth_--;
        };

        return EventQueue;
      }();
      /**
       * @param {!Path} path
       * @constructor
       */


      var EventList =
      /** @class */
      function () {
        function EventList(path_) {
          this.path_ = path_;
          /**
           * @type {!Array.<Event>}
           * @private
           */

          this.events_ = [];
        }
        /**
         * @param {!Event} eventData
         */


        EventList.prototype.add = function (eventData) {
          this.events_.push(eventData);
        };
        /**
         * Iterates through the list and raises each event
         */


        EventList.prototype.raise = function () {
          for (var i = 0; i < this.events_.length; i++) {
            var eventData = this.events_[i];

            if (eventData !== null) {
              this.events_[i] = null;
              var eventFn = eventData.getEventRunner();

              if (logger) {
                log('event: ' + eventData.toString());
              }

              exceptionGuard(eventFn);
            }
          }
        };
        /**
         * @return {!Path}
         */


        EventList.prototype.getPath = function () {
          return this.path_;
        };

        return EventList;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Base class to be used if you want to emit events. Call the constructor with
       * the set of allowed event names.
       */


      var EventEmitter =
      /** @class */
      function () {
        /**
         * @param {!Array.<string>} allowedEvents_
         */
        function EventEmitter(allowedEvents_) {
          this.allowedEvents_ = allowedEvents_;
          this.listeners_ = {};
          util.assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
        }
        /**
         * To be called by derived classes to trigger events.
         * @param {!string} eventType
         * @param {...*} varArgs
         */


        EventEmitter.prototype.trigger = function (eventType) {
          var varArgs = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            varArgs[_i - 1] = arguments[_i];
          }

          if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            var listeners = tslib.__spread(this.listeners_[eventType]);

            for (var i = 0; i < listeners.length; i++) {
              listeners[i].callback.apply(listeners[i].context, varArgs);
            }
          }
        };

        EventEmitter.prototype.on = function (eventType, callback, context) {
          this.validateEventType_(eventType);
          this.listeners_[eventType] = this.listeners_[eventType] || [];
          this.listeners_[eventType].push({
            callback: callback,
            context: context
          });
          var eventData = this.getInitialEvent(eventType);

          if (eventData) {
            callback.apply(context, eventData);
          }
        };

        EventEmitter.prototype.off = function (eventType, callback, context) {
          this.validateEventType_(eventType);
          var listeners = this.listeners_[eventType] || [];

          for (var i = 0; i < listeners.length; i++) {
            if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
              listeners.splice(i, 1);
              return;
            }
          }
        };

        EventEmitter.prototype.validateEventType_ = function (eventType) {
          util.assert(this.allowedEvents_.find(function (et) {
            return et === eventType;
          }), 'Unknown event: ' + eventType);
        };

        return EventEmitter;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @extends {EventEmitter}
       */


      var VisibilityMonitor =
      /** @class */
      function (_super) {
        tslib.__extends(VisibilityMonitor, _super);

        function VisibilityMonitor() {
          var _this = _super.call(this, ['visible']) || this;

          var hidden;
          var visibilityChange;

          if (typeof document !== 'undefined' && typeof document.addEventListener !== 'undefined') {
            if (typeof document['hidden'] !== 'undefined') {
              // Opera 12.10 and Firefox 18 and later support
              visibilityChange = 'visibilitychange';
              hidden = 'hidden';
            } else if (typeof document['mozHidden'] !== 'undefined') {
              visibilityChange = 'mozvisibilitychange';
              hidden = 'mozHidden';
            } else if (typeof document['msHidden'] !== 'undefined') {
              visibilityChange = 'msvisibilitychange';
              hidden = 'msHidden';
            } else if (typeof document['webkitHidden'] !== 'undefined') {
              visibilityChange = 'webkitvisibilitychange';
              hidden = 'webkitHidden';
            }
          } // Initially, we always assume we are visible. This ensures that in browsers
          // without page visibility support or in cases where we are never visible
          // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
          // reconnects


          _this.visible_ = true;

          if (visibilityChange) {
            document.addEventListener(visibilityChange, function () {
              var visible = !document[hidden];

              if (visible !== _this.visible_) {
                _this.visible_ = visible;

                _this.trigger('visible', visible);
              }
            }, false);
          }

          return _this;
        }

        VisibilityMonitor.getInstance = function () {
          return new VisibilityMonitor();
        };
        /**
         * @param {!string} eventType
         * @return {Array.<boolean>}
         */


        VisibilityMonitor.prototype.getInitialEvent = function (eventType) {
          util.assert(eventType === 'visible', 'Unknown event type: ' + eventType);
          return [this.visible_];
        };

        return VisibilityMonitor;
      }(EventEmitter);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Monitors online state (as reported by window.online/offline events).
       *
       * The expectation is that this could have many false positives (thinks we are online
       * when we're not), but no false negatives.  So we can safely use it to determine when
       * we definitely cannot reach the internet.
       *
       * @extends {EventEmitter}
       */


      var OnlineMonitor =
      /** @class */
      function (_super) {
        tslib.__extends(OnlineMonitor, _super);

        function OnlineMonitor() {
          var _this = _super.call(this, ['online']) || this;

          _this.online_ = true; // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
          // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
          // It would seem that the 'online' event does not always fire consistently. So we disable it
          // for Cordova.

          if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined' && !util.isMobileCordova()) {
            window.addEventListener('online', function () {
              if (!_this.online_) {
                _this.online_ = true;

                _this.trigger('online', true);
              }
            }, false);
            window.addEventListener('offline', function () {
              if (_this.online_) {
                _this.online_ = false;

                _this.trigger('online', false);
              }
            }, false);
          }

          return _this;
        }

        OnlineMonitor.getInstance = function () {
          return new OnlineMonitor();
        };
        /**
         * @param {!string} eventType
         * @return {Array.<boolean>}
         */


        OnlineMonitor.prototype.getInitialEvent = function (eventType) {
          util.assert(eventType === 'online', 'Unknown event type: ' + eventType);
          return [this.online_];
        };
        /**
         * @return {boolean}
         */


        OnlineMonitor.prototype.currentlyOnline = function () {
          return this.online_;
        };

        return OnlineMonitor;
      }(EventEmitter);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * This class ensures the packets from the server arrive in order
       * This class takes data from the server and ensures it gets passed into the callbacks in order.
       * @constructor
       */


      var PacketReceiver =
      /** @class */
      function () {
        /**
         * @param onMessage_
         */
        function PacketReceiver(onMessage_) {
          this.onMessage_ = onMessage_;
          this.pendingResponses = [];
          this.currentResponseNum = 0;
          this.closeAfterResponse = -1;
          this.onClose = null;
        }

        PacketReceiver.prototype.closeAfter = function (responseNum, callback) {
          this.closeAfterResponse = responseNum;
          this.onClose = callback;

          if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
          }
        };
        /**
         * Each message from the server comes with a response number, and an array of data. The responseNumber
         * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
         * browsers will respond in the same order as the requests we sent
         * @param {number} requestNum
         * @param {Array} data
         */


        PacketReceiver.prototype.handleResponse = function (requestNum, data) {
          var _this = this;

          this.pendingResponses[requestNum] = data;

          var _loop_1 = function _loop_1() {
            var toProcess = this_1.pendingResponses[this_1.currentResponseNum];
            delete this_1.pendingResponses[this_1.currentResponseNum];

            var _loop_2 = function _loop_2(i) {
              if (toProcess[i]) {
                exceptionGuard(function () {
                  _this.onMessage_(toProcess[i]);
                });
              }
            };

            for (var i = 0; i < toProcess.length; ++i) {
              _loop_2(i);
            }

            if (this_1.currentResponseNum === this_1.closeAfterResponse) {
              if (this_1.onClose) {
                this_1.onClose();
                this_1.onClose = null;
              }

              return "break";
            }

            this_1.currentResponseNum++;
          };

          var this_1 = this;

          while (this.pendingResponses[this.currentResponseNum]) {
            var state_1 = _loop_1();

            if (state_1 === "break") break;
          }
        };

        return PacketReceiver;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // URL query parameters associated with longpolling


      var FIREBASE_LONGPOLL_START_PARAM = 'start';
      var FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
      var FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
      var FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
      var FIREBASE_LONGPOLL_ID_PARAM = 'id';
      var FIREBASE_LONGPOLL_PW_PARAM = 'pw';
      var FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
      var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
      var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
      var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
      var FIREBASE_LONGPOLL_DATA_PARAM = 'd';
      var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe'; //Data size constants.
      //TODO: Perf: the maximum length actually differs from browser to browser.
      // We should check what browser we're on and set accordingly.

      var MAX_URL_DATA_SIZE = 1870;
      var SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=

      var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
      /**
       * Keepalive period
       * send a fresh request at minimum every 25 seconds. Opera has a maximum request
       * length of 30 seconds that we can't exceed.
       * @const
       * @type {number}
       */

      var KEEPALIVE_REQUEST_INTERVAL = 25000;
      /**
       * How long to wait before aborting a long-polling connection attempt.
       * @const
       * @type {number}
       */

      var LP_CONNECT_TIMEOUT = 30000;
      /**
       * This class manages a single long-polling connection.
       *
       * @constructor
       * @implements {Transport}
       */

      var BrowserPollConnection =
      /** @class */
      function () {
        /**
         * @param connId An identifier for this connection, used for logging
         * @param repoInfo The info for the endpoint to send data to.
         * @param applicationId The Firebase App ID for this project.
         * @param transportSessionId Optional transportSessionid if we are reconnecting for an existing
         *                                         transport session
         * @param lastSessionId Optional lastSessionId if the PersistentConnection has already created a
         *                                     connection previously
         */
        function BrowserPollConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.repoInfo = repoInfo;
          this.applicationId = applicationId;
          this.transportSessionId = transportSessionId;
          this.lastSessionId = lastSessionId;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.everConnected_ = false;
          this.log_ = logWrapper(connId);
          this.stats_ = StatsManager.getCollection(repoInfo);

          this.urlFn = function (params) {
            return repoInfo.connectionURL(LONG_POLLING, params);
          };
        }
        /**
         *
         * @param {function(Object)} onMessage Callback when messages arrive
         * @param {function()} onDisconnect Callback with connection lost.
         */


        BrowserPollConnection.prototype.open = function (onMessage, onDisconnect) {
          var _this = this;

          this.curSegmentNum = 0;
          this.onDisconnect_ = onDisconnect;
          this.myPacketOrderer = new PacketReceiver(onMessage);
          this.isClosed_ = false;
          this.connectTimeoutTimer_ = setTimeout(function () {
            _this.log_('Timed out trying to connect.'); // Make sure we clear the host cache


            _this.onClosed_();

            _this.connectTimeoutTimer_ = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }, Math.floor(LP_CONNECT_TIMEOUT)); // Ensure we delay the creation of the iframe until the DOM is loaded.

          executeWhenDOMReady(function () {
            if (_this.isClosed_) {
              return;
            } //Set up a callback that gets triggered once a connection is set up.


            _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              var _a = tslib.__read(args, 5),
                  command = _a[0],
                  arg1 = _a[1],
                  arg2 = _a[2],
                  arg3 = _a[3],
                  arg4 = _a[4];

              _this.incrementIncomingBytes_(args);

              if (!_this.scriptTagHolder) {
                return; // we closed the connection.
              }

              if (_this.connectTimeoutTimer_) {
                clearTimeout(_this.connectTimeoutTimer_);
                _this.connectTimeoutTimer_ = null;
              }

              _this.everConnected_ = true;

              if (command === FIREBASE_LONGPOLL_START_PARAM) {
                _this.id = arg1;
                _this.password = arg2;
              } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                // Don't clear the host cache. We got a response from the server, so we know it's reachable
                if (arg1) {
                  // We aren't expecting any more data (other than what the server's already in the process of sending us
                  // through our already open polls), so don't send any more.
                  _this.scriptTagHolder.sendNewPolls = false; // arg1 in this case is the last response number sent by the server. We should try to receive
                  // all of the responses up to this one before closing

                  _this.myPacketOrderer.closeAfter(arg1, function () {
                    _this.onClosed_();
                  });
                } else {
                  _this.onClosed_();
                }
              } else {
                throw new Error('Unrecognized command received: ' + command);
              }
            }, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              var _a = tslib.__read(args, 2),
                  pN = _a[0],
                  data = _a[1];

              _this.incrementIncomingBytes_(args);

              _this.myPacketOrderer.handleResponse(pN, data);
            }, function () {
              _this.onClosed_();
            }, _this.urlFn); //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.

            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);

            if (_this.scriptTagHolder.uniqueCallbackIdentifier) {
              urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier;
            }

            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;

            if (_this.transportSessionId) {
              urlParams[TRANSPORT_SESSION_PARAM] = _this.transportSessionId;
            }

            if (_this.lastSessionId) {
              urlParams[LAST_SESSION_PARAM] = _this.lastSessionId;
            }

            if (_this.applicationId) {
              urlParams[APPLICATION_ID_PARAM] = _this.applicationId;
            }

            if (typeof location !== 'undefined' && location.href && location.href.indexOf(FORGE_DOMAIN) !== -1) {
              urlParams[REFERER_PARAM] = FORGE_REF;
            }

            var connectURL = _this.urlFn(urlParams);

            _this.log_('Connecting via long-poll to ' + connectURL);

            _this.scriptTagHolder.addTag(connectURL, function () {
              /* do nothing */
            });
          });
        };
        /**
         * Call this when a handshake has completed successfully and we want to consider the connection established
         */


        BrowserPollConnection.prototype.start = function () {
          this.scriptTagHolder.startLongPoll(this.id, this.password);
          this.addDisconnectPingFrame(this.id, this.password);
        };
        /**
         * Forces long polling to be considered as a potential transport
         */


        BrowserPollConnection.forceAllow = function () {
          BrowserPollConnection.forceAllow_ = true;
        };
        /**
         * Forces longpolling to not be considered as a potential transport
         */


        BrowserPollConnection.forceDisallow = function () {
          BrowserPollConnection.forceDisallow_ = true;
        }; // Static method, use string literal so it can be accessed in a generic way


        BrowserPollConnection.isAvailable = function () {
          if (util.isNodeSdk()) {
            return false;
          } else if (BrowserPollConnection.forceAllow_) {
            return true;
          } else {
            // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
            // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
            return !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
          }
        };
        /**
         * No-op for polling
         */


        BrowserPollConnection.prototype.markConnectionHealthy = function () {};
        /**
         * Stops polling and cleans up the iframe
         * @private
         */


        BrowserPollConnection.prototype.shutdown_ = function () {
          this.isClosed_ = true;

          if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
          } //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.


          if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
          }

          if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
          }
        };
        /**
         * Triggered when this transport is closed
         * @private
         */


        BrowserPollConnection.prototype.onClosed_ = function () {
          if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();

            if (this.onDisconnect_) {
              this.onDisconnect_(this.everConnected_);
              this.onDisconnect_ = null;
            }
          }
        };
        /**
         * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
         * that we've left.
         */


        BrowserPollConnection.prototype.close = function () {
          if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
          }
        };
        /**
         * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
         * broken into chunks (since URLs have a small maximum length).
         * @param {!Object} data The JSON data to transmit.
         */


        BrowserPollConnection.prototype.send = function (data) {
          var dataStr = util.stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter('bytes_sent', dataStr.length); //first, lets get the base64-encoded data

          var base64data = util.base64Encode(dataStr); //We can only fit a certain amount in each URL, so we need to split this request
          //up into multiple pieces if it doesn't fit in one request.

          var dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE); //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
          //of segments so that we can reassemble the packet on the server.

          for (var i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
          }
        };
        /**
         * This is how we notify the server that we're leaving.
         * We aren't able to send requests with DHTML on a window close event, but we can
         * trigger XHR requests in some browsers (everything but Opera basically).
         * @param {!string} id
         * @param {!string} pw
         */


        BrowserPollConnection.prototype.addDisconnectPingFrame = function (id, pw) {
          if (util.isNodeSdk()) {
            return;
          }

          this.myDisconnFrame = document.createElement('iframe');
          var urlParams = {};
          urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
          urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
          urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
          this.myDisconnFrame.src = this.urlFn(urlParams);
          this.myDisconnFrame.style.display = 'none';
          document.body.appendChild(this.myDisconnFrame);
        };
        /**
         * Used to track the bytes received by this client
         * @param {*} args
         * @private
         */


        BrowserPollConnection.prototype.incrementIncomingBytes_ = function (args) {
          // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
          var bytesReceived = util.stringify(args).length;
          this.bytesReceived += bytesReceived;
          this.stats_.incrementCounter('bytes_received', bytesReceived);
        };

        return BrowserPollConnection;
      }();
      /*********************************************************************************************
       * A wrapper around an iframe that is used as a long-polling script holder.
       * @constructor
       *********************************************************************************************/


      var FirebaseIFrameScriptHolder =
      /** @class */
      function () {
        /**
         * @param commandCB - The callback to be called when control commands are recevied from the server.
         * @param onMessageCB - The callback to be triggered when responses arrive from the server.
         * @param onDisconnect - The callback to be triggered when this tag holder is closed
         * @param urlFn - A function that provides the URL of the endpoint to send data to.
         */
        function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
          this.onDisconnect = onDisconnect;
          this.urlFn = urlFn; //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
          //problems in some browsers.

          this.outstandingRequests = new Set(); //A queue of the pending segments waiting for transmission to the server.

          this.pendingSegs = []; //A serial number. We use this for two things:
          // 1) A way to ensure the browser doesn't cache responses to polls
          // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
          //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
          //    JSONP code in the order it was added to the iframe.

          this.currentSerial = Math.floor(Math.random() * 100000000); // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
          // incoming data from the server that we're waiting for).

          this.sendNewPolls = true;

          if (!util.isNodeSdk()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB; //Create an iframe for us to add script tags to.

            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_(); // Set the iframe's contents.

            var script = ''; // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.

            if (this.myIFrame.src && this.myIFrame.src.substr(0, 'javascript:'.length) === 'javascript:') {
              var currentDomain = document.domain;
              script = '<script>document.domain="' + currentDomain + '";</script>';
            }

            var iframeContents = '<html><body>' + script + '</body></html>';

            try {
              this.myIFrame.doc.open();
              this.myIFrame.doc.write(iframeContents);
              this.myIFrame.doc.close();
            } catch (e) {
              log('frame writing exception');

              if (e.stack) {
                log(e.stack);
              }

              log(e);
            }
          } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
          }
        }
        /**
         * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
         * actually use.
         * @private
         * @return {Element}
         */


        FirebaseIFrameScriptHolder.createIFrame_ = function () {
          var iframe = document.createElement('iframe');
          iframe.style.display = 'none'; // This is necessary in order to initialize the document inside the iframe

          if (document.body) {
            document.body.appendChild(iframe);

            try {
              // If document.domain has been modified in IE, this will throw an error, and we need to set the
              // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
              // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
              var a = iframe.contentWindow.document;

              if (!a) {
                // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                log('No IE domain setting required');
              }
            } catch (e) {
              var domain = document.domain;
              iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
          } else {
            // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
            // never gets hit.
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
          } // Get the document of the iframe in a browser-specific way.


          if (iframe.contentDocument) {
            iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
          } else if (iframe.contentWindow) {
            iframe.doc = iframe.contentWindow.document; // Internet Explorer
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } else if (iframe.document) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            iframe.doc = iframe.document; //others?
          }

          return iframe;
        };
        /**
         * Cancel all outstanding queries and remove the frame.
         */


        FirebaseIFrameScriptHolder.prototype.close = function () {
          var _this = this; //Mark this iframe as dead, so no new requests are sent.


          this.alive = false;

          if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(function () {
              if (_this.myIFrame !== null) {
                document.body.removeChild(_this.myIFrame);
                _this.myIFrame = null;
              }
            }, Math.floor(0));
          } // Protect from being called recursively.


          var onDisconnect = this.onDisconnect;

          if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
          }
        };
        /**
         * Actually start the long-polling session by adding the first script tag(s) to the iframe.
         * @param {!string} id - The ID of this connection
         * @param {!string} pw - The password for this connection
         */


        FirebaseIFrameScriptHolder.prototype.startLongPoll = function (id, pw) {
          this.myID = id;
          this.myPW = pw;
          this.alive = true; //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.

          while (this.newRequest_()) {}
        };
        /**
         * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
         * too many outstanding requests and we are still alive.
         *
         * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
         * needed.
         */


        FirebaseIFrameScriptHolder.prototype.newRequest_ = function () {
          // We keep one outstanding request open all the time to receive data, but if we need to send data
          // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
          // close the old request.
          if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            var theURL = this.urlFn(urlParams); //Now add as much data as we can.

            var curDataString = '';
            var i = 0;

            while (this.pendingSegs.length > 0) {
              //first, lets see if the next segment will fit.
              var nextSeg = this.pendingSegs[0];

              if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                //great, the segment will fit. Lets append it.
                var theSeg = this.pendingSegs.shift();
                curDataString = curDataString + '&' + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
                i++;
              } else {
                break;
              }
            }

            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
          } else {
            return false;
          }
        };
        /**
         * Queue a packet for transmission to the server.
         * @param segnum - A sequential id for this packet segment used for reassembly
         * @param totalsegs - The total number of segments in this packet
         * @param data - The data for this segment.
         */


        FirebaseIFrameScriptHolder.prototype.enqueueSegment = function (segnum, totalsegs, data) {
          //add this to the queue of segments to send.
          this.pendingSegs.push({
            seg: segnum,
            ts: totalsegs,
            d: data
          }); //send the data immediately if there isn't already data being transmitted, unless
          //startLongPoll hasn't been called yet.

          if (this.alive) {
            this.newRequest_();
          }
        };
        /**
         * Add a script tag for a regular long-poll request.
         * @param {!string} url - The URL of the script tag.
         * @param {!number} serial - The serial number of the request.
         * @private
         */


        FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function (url, serial) {
          var _this = this; //remember that we sent this request.


          this.outstandingRequests.add(serial);

          var doNewRequest = function doNewRequest() {
            _this.outstandingRequests["delete"](serial);

            _this.newRequest_();
          }; // If this request doesn't return on its own accord (by the server sending us some data), we'll
          // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.


          var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));

          var readyStateCB = function readyStateCB() {
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout); // Trigger a new request so we can continue receiving data.

            doNewRequest();
          };

          this.addTag(url, readyStateCB);
        };
        /**
         * Add an arbitrary script tag to the iframe.
         * @param {!string} url - The URL for the script tag source.
         * @param {!function()} loadCB - A callback to be triggered once the script has loaded.
         */


        FirebaseIFrameScriptHolder.prototype.addTag = function (url, loadCB) {
          var _this = this;

          if (util.isNodeSdk()) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.doNodeLongPoll(url, loadCB);
          } else {
            setTimeout(function () {
              try {
                // if we're already closed, don't add this poll
                if (!_this.sendNewPolls) {
                  return;
                }

                var newScript_1 = _this.myIFrame.doc.createElement('script');

                newScript_1.type = 'text/javascript';
                newScript_1.async = true;
                newScript_1.src = url; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                newScript_1.onload = newScript_1.onreadystatechange = function () {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  var rstate = newScript_1.readyState;

                  if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    newScript_1.onload = newScript_1.onreadystatechange = null;

                    if (newScript_1.parentNode) {
                      newScript_1.parentNode.removeChild(newScript_1);
                    }

                    loadCB();
                  }
                };

                newScript_1.onerror = function () {
                  log('Long-poll script failed to load: ' + url);
                  _this.sendNewPolls = false;

                  _this.close();
                };

                _this.myIFrame.doc.body.appendChild(newScript_1);
              } catch (e) {// TODO: we should make this error visible somehow
              }
            }, Math.floor(1));
          }
        };

        return FirebaseIFrameScriptHolder;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** The semver (www.semver.org) version of the SDK. */


      var SDK_VERSION = ''; // SDK_VERSION should be set before any database instance is created

      function setSDKVersion(version) {
        SDK_VERSION = version;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var WEBSOCKET_MAX_FRAME_SIZE = 16384;
      var WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
      var WebSocketImpl = null;

      if (typeof MozWebSocket !== 'undefined') {
        WebSocketImpl = MozWebSocket;
      } else if (typeof WebSocket !== 'undefined') {
        WebSocketImpl = WebSocket;
      }
      /**
       * Create a new websocket connection with the given callbacks.
       * @constructor
       * @implements {Transport}
       */


      var WebSocketConnection =
      /** @class */
      function () {
        /**
         * @param connId identifier for this transport
         * @param repoInfo The info for the websocket endpoint.
         * @param applicationId The Firebase App ID for this project.
         * @param transportSessionId Optional transportSessionId if this is connecting to an existing transport
         *                                         session
         * @param lastSessionId Optional lastSessionId if there was a previous connection
         */
        function WebSocketConnection(connId, repoInfo, applicationId, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.applicationId = applicationId;
          this.keepaliveTimer = null;
          this.frames = null;
          this.totalFrames = 0;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.log_ = logWrapper(this.connId);
          this.stats_ = StatsManager.getCollection(repoInfo);
          this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId);
        }
        /**
         * @param {RepoInfo} repoInfo The info for the websocket endpoint.
         * @param {string=} transportSessionId Optional transportSessionId if this is connecting to an existing transport
         *                                         session
         * @param {string=} lastSessionId Optional lastSessionId if there was a previous connection
         * @return {string} connection url
         * @private
         */


        WebSocketConnection.connectionURL_ = function (repoInfo, transportSessionId, lastSessionId) {
          var urlParams = {};
          urlParams[VERSION_PARAM] = PROTOCOL_VERSION;

          if (!util.isNodeSdk() && typeof location !== 'undefined' && location.href && location.href.indexOf(FORGE_DOMAIN) !== -1) {
            urlParams[REFERER_PARAM] = FORGE_REF;
          }

          if (transportSessionId) {
            urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
          }

          if (lastSessionId) {
            urlParams[LAST_SESSION_PARAM] = lastSessionId;
          }

          return repoInfo.connectionURL(WEBSOCKET, urlParams);
        };
        /**
         *
         * @param onMessage Callback when messages arrive
         * @param onDisconnect Callback with connection lost.
         */


        WebSocketConnection.prototype.open = function (onMessage, onDisconnect) {
          var _this = this;

          this.onDisconnect = onDisconnect;
          this.onMessage = onMessage;
          this.log_('Websocket connecting to ' + this.connURL);
          this.everConnected_ = false; // Assume failure until proven otherwise.

          PersistentStorage.set('previous_websocket_failure', true);

          try {
            if (util.isNodeSdk()) {
              var device = util.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node'; // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>

              var options = {
                headers: {
                  'User-Agent': "Firebase/" + PROTOCOL_VERSION + "/" + SDK_VERSION + "/" + process.platform + "/" + device,
                  'X-Firebase-GMPID': this.applicationId || ''
                }
              }; // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.

              var env = process['env'];
              var proxy = this.connURL.indexOf('wss://') === 0 ? env['HTTPS_PROXY'] || env['https_proxy'] : env['HTTP_PROXY'] || env['http_proxy'];

              if (proxy) {
                options['proxy'] = {
                  origin: proxy
                };
              }

              this.mySock = new WebSocketImpl(this.connURL, [], options);
            } else {
              var options = {
                headers: {
                  'X-Firebase-GMPID': this.applicationId || ''
                }
              };
              this.mySock = new WebSocketImpl(this.connURL, [], options);
            }
          } catch (e) {
            this.log_('Error instantiating WebSocket.');
            var error = e.message || e.data;

            if (error) {
              this.log_(error);
            }

            this.onClosed_();
            return;
          }

          this.mySock.onopen = function () {
            _this.log_('Websocket connected.');

            _this.everConnected_ = true;
          };

          this.mySock.onclose = function () {
            _this.log_('Websocket connection was disconnected.');

            _this.mySock = null;

            _this.onClosed_();
          };

          this.mySock.onmessage = function (m) {
            _this.handleIncomingFrame(m);
          };

          this.mySock.onerror = function (e) {
            _this.log_('WebSocket error.  Closing connection.'); // eslint-disable-next-line @typescript-eslint/no-explicit-any


            var error = e.message || e.data;

            if (error) {
              _this.log_(error);
            }

            _this.onClosed_();
          };
        };
        /**
         * No-op for websockets, we don't need to do anything once the connection is confirmed as open
         */


        WebSocketConnection.prototype.start = function () {};

        WebSocketConnection.forceDisallow = function () {
          WebSocketConnection.forceDisallow_ = true;
        };

        WebSocketConnection.isAvailable = function () {
          var isOldAndroid = false;

          if (typeof navigator !== 'undefined' && navigator.userAgent) {
            var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);

            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
              if (parseFloat(oldAndroidMatch[1]) < 4.4) {
                isOldAndroid = true;
              }
            }
          }

          return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
        };
        /**
         * Returns true if we previously failed to connect with this transport.
         * @return {boolean}
         */


        WebSocketConnection.previouslyFailed = function () {
          // If our persistent storage is actually only in-memory storage,
          // we default to assuming that it previously failed to be safe.
          return PersistentStorage.isInMemoryStorage || PersistentStorage.get('previous_websocket_failure') === true;
        };

        WebSocketConnection.prototype.markConnectionHealthy = function () {
          PersistentStorage.remove('previous_websocket_failure');
        };

        WebSocketConnection.prototype.appendFrame_ = function (data) {
          this.frames.push(data);

          if (this.frames.length === this.totalFrames) {
            var fullMess = this.frames.join('');
            this.frames = null;
            var jsonMess = util.jsonEval(fullMess); //handle the message

            this.onMessage(jsonMess);
          }
        };
        /**
         * @param {number} frameCount The number of frames we are expecting from the server
         * @private
         */


        WebSocketConnection.prototype.handleNewFrameCount_ = function (frameCount) {
          this.totalFrames = frameCount;
          this.frames = [];
        };
        /**
         * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
         * @param {!String} data
         * @return {?String} Any remaining data to be process, or null if there is none
         * @private
         */


        WebSocketConnection.prototype.extractFrameCount_ = function (data) {
          util.assert(this.frames === null, 'We already have a frame buffer'); // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
          // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508

          if (data.length <= 6) {
            var frameCount = Number(data);

            if (!isNaN(frameCount)) {
              this.handleNewFrameCount_(frameCount);
              return null;
            }
          }

          this.handleNewFrameCount_(1);
          return data;
        };
        /**
         * Process a websocket frame that has arrived from the server.
         * @param mess The frame data
         */


        WebSocketConnection.prototype.handleIncomingFrame = function (mess) {
          if (this.mySock === null) {
            return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
          }

          var data = mess['data'];
          this.bytesReceived += data.length;
          this.stats_.incrementCounter('bytes_received', data.length);
          this.resetKeepAlive();

          if (this.frames !== null) {
            // we're buffering
            this.appendFrame_(data);
          } else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            var remainingData = this.extractFrameCount_(data);

            if (remainingData !== null) {
              this.appendFrame_(remainingData);
            }
          }
        };
        /**
         * Send a message to the server
         * @param {Object} data The JSON object to transmit
         */


        WebSocketConnection.prototype.send = function (data) {
          this.resetKeepAlive();
          var dataStr = util.stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter('bytes_sent', dataStr.length); //We can only fit a certain amount in each websocket frame, so we need to split this request
          //up into multiple pieces if it doesn't fit in one request.

          var dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE); //Send the length header

          if (dataSegs.length > 1) {
            this.sendString_(String(dataSegs.length));
          } //Send the actual data in segments.


          for (var i = 0; i < dataSegs.length; i++) {
            this.sendString_(dataSegs[i]);
          }
        };

        WebSocketConnection.prototype.shutdown_ = function () {
          this.isClosed_ = true;

          if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
          }

          if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
          }
        };

        WebSocketConnection.prototype.onClosed_ = function () {
          if (!this.isClosed_) {
            this.log_('WebSocket is closing itself');
            this.shutdown_(); // since this is an internal close, trigger the close listener

            if (this.onDisconnect) {
              this.onDisconnect(this.everConnected_);
              this.onDisconnect = null;
            }
          }
        };
        /**
         * External-facing close handler.
         * Close the websocket and kill the connection.
         */


        WebSocketConnection.prototype.close = function () {
          if (!this.isClosed_) {
            this.log_('WebSocket is being closed');
            this.shutdown_();
          }
        };
        /**
         * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
         * the last activity.
         */


        WebSocketConnection.prototype.resetKeepAlive = function () {
          var _this = this;

          clearInterval(this.keepaliveTimer);
          this.keepaliveTimer = setInterval(function () {
            //If there has been no websocket activity for a while, send a no-op
            if (_this.mySock) {
              _this.sendString_('0');
            }

            _this.resetKeepAlive(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
        };
        /**
         * Send a string over the websocket.
         *
         * @param {string} str String to send.
         * @private
         */


        WebSocketConnection.prototype.sendString_ = function (str) {
          // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
          // calls for some unknown reason.  We treat these as an error and disconnect.
          // See https://app.asana.com/0/58926111402292/68021340250410
          try {
            this.mySock.send(str);
          } catch (e) {
            this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
            setTimeout(this.onClosed_.bind(this), 0);
          }
        };
        /**
         * Number of response before we consider the connection "healthy."
         * @type {number}
         */


        WebSocketConnection.responsesRequiredToBeHealthy = 2;
        /**
         * Time to wait for the connection te become healthy before giving up.
         * @type {number}
         */

        WebSocketConnection.healthyTimeout = 30000;
        return WebSocketConnection;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Currently simplistic, this class manages what transport a Connection should use at various stages of its
       * lifecycle.
       *
       * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
       * they are available.
       * @constructor
       */


      var TransportManager =
      /** @class */
      function () {
        /**
         * @param {!RepoInfo} repoInfo Metadata around the namespace we're connecting to
         */
        function TransportManager(repoInfo) {
          this.initTransports_(repoInfo);
        }

        Object.defineProperty(TransportManager, "ALL_TRANSPORTS", {
          /**
           * @const
           * @type {!Array.<function(new:Transport, string, RepoInfo, string=)>}
           */
          get: function get() {
            return [BrowserPollConnection, WebSocketConnection];
          },
          enumerable: false,
          configurable: true
        });
        /**
         * @param {!RepoInfo} repoInfo
         * @private
         */

        TransportManager.prototype.initTransports_ = function (repoInfo) {
          var e_1, _a;

          var isWebSocketsAvailable = WebSocketConnection && WebSocketConnection['isAvailable']();
          var isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();

          if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) {
              warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            }

            isSkipPollConnection = true;
          }

          if (isSkipPollConnection) {
            this.transports_ = [WebSocketConnection];
          } else {
            var transports = this.transports_ = [];

            try {
              for (var _b = tslib.__values(TransportManager.ALL_TRANSPORTS), _c = _b.next(); !_c.done; _c = _b.next()) {
                var transport = _c.value;

                if (transport && transport['isAvailable']()) {
                  transports.push(transport);
                }
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          }
        };
        /**
         * @return {function(new:Transport, !string, !RepoInfo, string=, string=)} The constructor for the
         * initial transport to use
         */


        TransportManager.prototype.initialTransport = function () {
          if (this.transports_.length > 0) {
            return this.transports_[0];
          } else {
            throw new Error('No transports available');
          }
        };
        /**
         * @return {?function(new:Transport, function(),function(), string=)} The constructor for the next
         * transport, or null
         */


        TransportManager.prototype.upgradeTransport = function () {
          if (this.transports_.length > 1) {
            return this.transports_[1];
          } else {
            return null;
          }
        };

        return TransportManager;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Abort upgrade attempt if it takes longer than 60s.


      var UPGRADE_TIMEOUT = 60000; // For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
      // If we haven't sent enough requests within 5s, we'll start sending noop ping requests.

      var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000; // If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
      // then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
      // but we've sent/received enough bytes, we don't cancel the connection.

      var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
      var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
      var MESSAGE_TYPE = 't';
      var MESSAGE_DATA = 'd';
      var CONTROL_SHUTDOWN = 's';
      var CONTROL_RESET = 'r';
      var CONTROL_ERROR = 'e';
      var CONTROL_PONG = 'o';
      var SWITCH_ACK = 'a';
      var END_TRANSMISSION = 'n';
      var PING = 'p';
      var SERVER_HELLO = 'h';
      /**
       * Creates a new real-time connection to the server using whichever method works
       * best in the current browser.
       *
       * @constructor
       */

      var Connection =
      /** @class */
      function () {
        /**
         * @param id - an id for this connection
         * @param repoInfo_ - the info for the endpoint to connect to
         * @param applicationId_ - the Firebase App ID for this project
         * @param onMessage_ - the callback to be triggered when a server-push message arrives
         * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
         * @param onDisconnect_ - the callback to be triggered when a connection was lost
         * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
         * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
         */
        function Connection(id, repoInfo_, applicationId_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
          this.id = id;
          this.repoInfo_ = repoInfo_;
          this.applicationId_ = applicationId_;
          this.onMessage_ = onMessage_;
          this.onReady_ = onReady_;
          this.onDisconnect_ = onDisconnect_;
          this.onKill_ = onKill_;
          this.lastSessionId = lastSessionId;
          this.connectionCount = 0;
          this.pendingDataMessages = [];
          this.state_ = 0
          /* CONNECTING */
          ;
          this.log_ = logWrapper('c:' + this.id + ':');
          this.transportManager_ = new TransportManager(repoInfo_);
          this.log_('Connection created');
          this.start_();
        }
        /**
         * Starts a connection attempt
         * @private
         */


        Connection.prototype.start_ = function () {
          var _this = this;

          var conn = this.transportManager_.initialTransport();
          this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, undefined, this.lastSessionId); // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
          // can consider the transport healthy.

          this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
          var onMessageReceived = this.connReceiver_(this.conn_);
          var onConnectionLost = this.disconnReceiver_(this.conn_);
          this.tx_ = this.conn_;
          this.rx_ = this.conn_;
          this.secondaryConn_ = null;
          this.isHealthy_ = false;
          /*
           * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
           * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
           * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
           * still have the context of your originating frame.
           */

          setTimeout(function () {
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            _this.conn_ && _this.conn_.open(onMessageReceived, onConnectionLost);
          }, Math.floor(0));
          var healthyTimeoutMS = conn['healthyTimeout'] || 0;

          if (healthyTimeoutMS > 0) {
            this.healthyTimeout_ = setTimeoutNonBlocking(function () {
              _this.healthyTimeout_ = null;

              if (!_this.isHealthy_) {
                if (_this.conn_ && _this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                  _this.log_('Connection exceeded healthy timeout but has received ' + _this.conn_.bytesReceived + ' bytes.  Marking connection healthy.');

                  _this.isHealthy_ = true;

                  _this.conn_.markConnectionHealthy();
                } else if (_this.conn_ && _this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
                  _this.log_('Connection exceeded healthy timeout but has sent ' + _this.conn_.bytesSent + ' bytes.  Leaving connection alive.'); // NOTE: We don't want to mark it healthy, since we have no guarantee that the bytes have made it to
                  // the server.

                } else {
                  _this.log_('Closing unhealthy connection after timeout.');

                  _this.close();
                }
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, Math.floor(healthyTimeoutMS));
          }
        };
        /**
         * @return {!string}
         * @private
         */


        Connection.prototype.nextTransportId_ = function () {
          return 'c:' + this.id + ':' + this.connectionCount++;
        };

        Connection.prototype.disconnReceiver_ = function (conn) {
          var _this = this;

          return function (everConnected) {
            if (conn === _this.conn_) {
              _this.onConnectionLost_(everConnected);
            } else if (conn === _this.secondaryConn_) {
              _this.log_('Secondary connection lost.');

              _this.onSecondaryConnectionLost_();
            } else {
              _this.log_('closing an old connection');
            }
          };
        };

        Connection.prototype.connReceiver_ = function (conn) {
          var _this = this;

          return function (message) {
            if (_this.state_ !== 2
            /* DISCONNECTED */
            ) {
                if (conn === _this.rx_) {
                  _this.onPrimaryMessageReceived_(message);
                } else if (conn === _this.secondaryConn_) {
                  _this.onSecondaryMessageReceived_(message);
                } else {
                  _this.log_('message on old connection');
                }
              }
          };
        };
        /**
         *
         * @param {Object} dataMsg An arbitrary data message to be sent to the server
         */


        Connection.prototype.sendRequest = function (dataMsg) {
          // wrap in a data message envelope and send it on
          var msg = {
            t: 'd',
            d: dataMsg
          };
          this.sendData_(msg);
        };

        Connection.prototype.tryCleanupConnection = function () {
          if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null; // the server will shutdown the old connection
          }
        };

        Connection.prototype.onSecondaryControl_ = function (controlData) {
          if (MESSAGE_TYPE in controlData) {
            var cmd = controlData[MESSAGE_TYPE];

            if (cmd === SWITCH_ACK) {
              this.upgradeIfSecondaryHealthy_();
            } else if (cmd === CONTROL_RESET) {
              // Most likely the session wasn't valid. Abandon the switch attempt
              this.log_('Got a reset on secondary, closing it');
              this.secondaryConn_.close(); // If we were already using this connection for something, than we need to fully close

              if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
                this.close();
              }
            } else if (cmd === CONTROL_PONG) {
              this.log_('got pong on secondary.');
              this.secondaryResponsesRequired_--;
              this.upgradeIfSecondaryHealthy_();
            }
          }
        };

        Connection.prototype.onSecondaryMessageReceived_ = function (parsedData) {
          var layer = requireKey('t', parsedData);
          var data = requireKey('d', parsedData);

          if (layer === 'c') {
            this.onSecondaryControl_(data);
          } else if (layer === 'd') {
            // got a data message, but we're still second connection. Need to buffer it up
            this.pendingDataMessages.push(data);
          } else {
            throw new Error('Unknown protocol layer: ' + layer);
          }
        };

        Connection.prototype.upgradeIfSecondaryHealthy_ = function () {
          if (this.secondaryResponsesRequired_ <= 0) {
            this.log_('Secondary connection is healthy.');
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
          } else {
            // Send a ping to make sure the connection is healthy.
            this.log_('sending ping on secondary.');
            this.secondaryConn_.send({
              t: 'c',
              d: {
                t: PING,
                d: {}
              }
            });
          }
        };

        Connection.prototype.proceedWithUpgrade_ = function () {
          // tell this connection to consider itself open
          this.secondaryConn_.start(); // send ack

          this.log_('sending client ack on secondary');
          this.secondaryConn_.send({
            t: 'c',
            d: {
              t: SWITCH_ACK,
              d: {}
            }
          }); // send end packet on primary transport, switch to sending on this one
          // can receive on this one, buffer responses until end received on primary transport

          this.log_('Ending transmission on primary');
          this.conn_.send({
            t: 'c',
            d: {
              t: END_TRANSMISSION,
              d: {}
            }
          });
          this.tx_ = this.secondaryConn_;
          this.tryCleanupConnection();
        };

        Connection.prototype.onPrimaryMessageReceived_ = function (parsedData) {
          // Must refer to parsedData properties in quotes, so closure doesn't touch them.
          var layer = requireKey('t', parsedData);
          var data = requireKey('d', parsedData);

          if (layer === 'c') {
            this.onControl_(data);
          } else if (layer === 'd') {
            this.onDataMessage_(data);
          }
        };

        Connection.prototype.onDataMessage_ = function (message) {
          this.onPrimaryResponse_(); // We don't do anything with data messages, just kick them up a level

          this.onMessage_(message);
        };

        Connection.prototype.onPrimaryResponse_ = function () {
          if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;

            if (this.primaryResponsesRequired_ <= 0) {
              this.log_('Primary connection is healthy.');
              this.isHealthy_ = true;
              this.conn_.markConnectionHealthy();
            }
          }
        };

        Connection.prototype.onControl_ = function (controlData) {
          var cmd = requireKey(MESSAGE_TYPE, controlData);

          if (MESSAGE_DATA in controlData) {
            var payload = controlData[MESSAGE_DATA];

            if (cmd === SERVER_HELLO) {
              this.onHandshake_(payload);
            } else if (cmd === END_TRANSMISSION) {
              this.log_('recvd end transmission on primary');
              this.rx_ = this.secondaryConn_;

              for (var i = 0; i < this.pendingDataMessages.length; ++i) {
                this.onDataMessage_(this.pendingDataMessages[i]);
              }

              this.pendingDataMessages = [];
              this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) {
              // This was previously the 'onKill' callback passed to the lower-level connection
              // payload in this case is the reason for the shutdown. Generally a human-readable error
              this.onConnectionShutdown_(payload);
            } else if (cmd === CONTROL_RESET) {
              // payload in this case is the host we should contact
              this.onReset_(payload);
            } else if (cmd === CONTROL_ERROR) {
              error('Server Error: ' + payload);
            } else if (cmd === CONTROL_PONG) {
              this.log_('got pong on primary.');
              this.onPrimaryResponse_();
              this.sendPingOnPrimaryIfNecessary_();
            } else {
              error('Unknown control packet command: ' + cmd);
            }
          }
        };
        /**
         *
         * @param {Object} handshake The handshake data returned from the server
         * @private
         */


        Connection.prototype.onHandshake_ = function (handshake) {
          var timestamp = handshake.ts;
          var version = handshake.v;
          var host = handshake.h;
          this.sessionId = handshake.s;
          this.repoInfo_.updateHost(host); // if we've already closed the connection, then don't bother trying to progress further

          if (this.state_ === 0
          /* CONNECTING */
          ) {
              this.conn_.start();
              this.onConnectionEstablished_(this.conn_, timestamp);

              if (PROTOCOL_VERSION !== version) {
                warn('Protocol version mismatch detected');
              } // TODO: do we want to upgrade? when? maybe a delay?


              this.tryStartUpgrade_();
            }
        };

        Connection.prototype.tryStartUpgrade_ = function () {
          var conn = this.transportManager_.upgradeTransport();

          if (conn) {
            this.startUpgrade_(conn);
          }
        };

        Connection.prototype.startUpgrade_ = function (conn) {
          var _this = this;

          this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.sessionId); // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
          // can consider the transport healthy.

          this.secondaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
          var onMessage = this.connReceiver_(this.secondaryConn_);
          var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(onMessage, onDisconnect); // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.

          setTimeoutNonBlocking(function () {
            if (_this.secondaryConn_) {
              _this.log_('Timed out trying to upgrade.');

              _this.secondaryConn_.close();
            }
          }, Math.floor(UPGRADE_TIMEOUT));
        };

        Connection.prototype.onReset_ = function (host) {
          this.log_('Reset packet received.  New host: ' + host);
          this.repoInfo_.updateHost(host); // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
          // We don't currently support resets after the connection has already been established

          if (this.state_ === 1
          /* CONNECTED */
          ) {
              this.close();
            } else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
          }
        };

        Connection.prototype.onConnectionEstablished_ = function (conn, timestamp) {
          var _this = this;

          this.log_('Realtime connection established.');
          this.conn_ = conn;
          this.state_ = 1
          /* CONNECTED */
          ;

          if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
          } // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
          // send some pings.


          if (this.primaryResponsesRequired_ === 0) {
            this.log_('Primary connection is healthy.');
            this.isHealthy_ = true;
          } else {
            setTimeoutNonBlocking(function () {
              _this.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
          }
        };

        Connection.prototype.sendPingOnPrimaryIfNecessary_ = function () {
          // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
          if (!this.isHealthy_ && this.state_ === 1
          /* CONNECTED */
          ) {
              this.log_('sending ping on primary.');
              this.sendData_({
                t: 'c',
                d: {
                  t: PING,
                  d: {}
                }
              });
            }
        };

        Connection.prototype.onSecondaryConnectionLost_ = function () {
          var conn = this.secondaryConn_;
          this.secondaryConn_ = null;

          if (this.tx_ === conn || this.rx_ === conn) {
            // we are relying on this connection already in some capacity. Therefore, a failure is real
            this.close();
          }
        };
        /**
         *
         * @param {boolean} everConnected Whether or not the connection ever reached a server. Used to determine if
         * we should flush the host cache
         * @private
         */


        Connection.prototype.onConnectionLost_ = function (everConnected) {
          this.conn_ = null; // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
          // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.

          if (!everConnected && this.state_ === 0
          /* CONNECTING */
          ) {
              this.log_('Realtime connection failed.'); // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away

              if (this.repoInfo_.isCacheableHost()) {
                PersistentStorage.remove('host:' + this.repoInfo_.host); // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com

                this.repoInfo_.internalHost = this.repoInfo_.host;
              }
            } else if (this.state_ === 1
          /* CONNECTED */
          ) {
              this.log_('Realtime connection lost.');
            }

          this.close();
        };
        /**
         *
         * @param {string} reason
         * @private
         */


        Connection.prototype.onConnectionShutdown_ = function (reason) {
          this.log_('Connection shutdown command received. Shutting down...');

          if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
          } // We intentionally don't want to fire onDisconnect (kill is a different case),
          // so clear the callback.


          this.onDisconnect_ = null;
          this.close();
        };

        Connection.prototype.sendData_ = function (data) {
          if (this.state_ !== 1
          /* CONNECTED */
          ) {
              throw 'Connection is not connected';
            } else {
            this.tx_.send(data);
          }
        };
        /**
         * Cleans up this connection, calling the appropriate callbacks
         */


        Connection.prototype.close = function () {
          if (this.state_ !== 2
          /* DISCONNECTED */
          ) {
              this.log_('Closing realtime connection.');
              this.state_ = 2
              /* DISCONNECTED */
              ;
              this.closeConnections_();

              if (this.onDisconnect_) {
                this.onDisconnect_();
                this.onDisconnect_ = null;
              }
            }
        };
        /**
         *
         * @private
         */


        Connection.prototype.closeConnections_ = function () {
          this.log_('Shutting down all connections');

          if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
          }

          if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
          }

          if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
          }
        };

        return Connection;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Interface defining the set of actions that can be performed against the Firebase server
       * (basically corresponds to our wire protocol).
       *
       * @interface
       */


      var ServerActions =
      /** @class */
      function () {
        function ServerActions() {}
        /**
         * @param {string} pathString
         * @param {*} data
         * @param {function(string, string)=} onComplete
         * @param {string=} hash
         */


        ServerActions.prototype.put = function (pathString, data, onComplete, hash) {};
        /**
         * @param {string} pathString
         * @param {*} data
         * @param {function(string, ?string)} onComplete
         * @param {string=} hash
         */


        ServerActions.prototype.merge = function (pathString, data, onComplete, hash) {};
        /**
         * Refreshes the auth token for the current connection.
         * @param {string} token The authentication token
         */


        ServerActions.prototype.refreshAuthToken = function (token) {};
        /**
         * @param {string} pathString
         * @param {*} data
         * @param {function(string, string)=} onComplete
         */


        ServerActions.prototype.onDisconnectPut = function (pathString, data, onComplete) {};
        /**
         * @param {string} pathString
         * @param {*} data
         * @param {function(string, string)=} onComplete
         */


        ServerActions.prototype.onDisconnectMerge = function (pathString, data, onComplete) {};
        /**
         * @param {string} pathString
         * @param {function(string, string)=} onComplete
         */


        ServerActions.prototype.onDisconnectCancel = function (pathString, onComplete) {};
        /**
         * @param {Object.<string, *>} stats
         */


        ServerActions.prototype.reportStats = function (stats) {};

        return ServerActions;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var RECONNECT_MIN_DELAY = 1000;
      var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1000; // 5 minutes in milliseconds (Case: 1858)

      var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1000; // 30 seconds for admin clients (likely to be a backend server)

      var RECONNECT_DELAY_MULTIPLIER = 1.3;
      var RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.

      var SERVER_KILL_INTERRUPT_REASON = 'server_kill'; // If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.

      var INVALID_AUTH_TOKEN_THRESHOLD = 3;
      /**
       * Firebase connection.  Abstracts wire protocol and handles reconnecting.
       *
       * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
       * in quotes to make sure the closure compiler does not minify them.
       */

      var PersistentConnection =
      /** @class */
      function (_super) {
        tslib.__extends(PersistentConnection, _super);
        /**
         * @implements {ServerActions}
         * @param repoInfo_ Data about the namespace we are connecting to
         * @param applicationId_ The Firebase App ID for this project
         * @param onDataUpdate_ A callback for new data from the server
         */


        function PersistentConnection(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, authOverride_) {
          var _this = _super.call(this) || this;

          _this.repoInfo_ = repoInfo_;
          _this.applicationId_ = applicationId_;
          _this.onDataUpdate_ = onDataUpdate_;
          _this.onConnectStatus_ = onConnectStatus_;
          _this.onServerInfoUpdate_ = onServerInfoUpdate_;
          _this.authTokenProvider_ = authTokenProvider_;
          _this.authOverride_ = authOverride_; // Used for diagnostic logging.

          _this.id = PersistentConnection.nextPersistentConnectionId_++;
          _this.log_ = logWrapper('p:' + _this.id + ':');
          _this.interruptReasons_ = {};
          /** Map<path, Map<queryId, ListenSpec>> */

          _this.listens = new Map();
          _this.outstandingPuts_ = [];
          _this.outstandingPutCount_ = 0;
          _this.onDisconnectRequestQueue_ = [];
          _this.connected_ = false;
          _this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          _this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
          _this.securityDebugCallback_ = null;
          _this.lastSessionId = null;
          _this.establishConnectionTimer_ = null;
          _this.visible_ = false; // Before we get connected, we keep a queue of pending messages to send.

          _this.requestCBHash_ = {};
          _this.requestNumber_ = 0;
          _this.realtime_ = null;
          _this.authToken_ = null;
          _this.forceTokenRefresh_ = false;
          _this.invalidAuthTokenCount_ = 0;
          _this.firstConnection_ = true;
          _this.lastConnectionAttemptTime_ = null;
          _this.lastConnectionEstablishedTime_ = null;

          if (authOverride_ && !util.isNodeSdk()) {
            throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
          }

          _this.scheduleConnect_(0);

          VisibilityMonitor.getInstance().on('visible', _this.onVisible_, _this);

          if (repoInfo_.host.indexOf('fblocal') === -1) {
            OnlineMonitor.getInstance().on('online', _this.onOnline_, _this);
          }

          return _this;
        }

        PersistentConnection.prototype.sendRequest = function (action, body, onResponse) {
          var curReqNum = ++this.requestNumber_;
          var msg = {
            r: curReqNum,
            a: action,
            b: body
          };
          this.log_(util.stringify(msg));
          util.assert(this.connected_, "sendRequest call when we're not connected not allowed.");
          this.realtime_.sendRequest(msg);

          if (onResponse) {
            this.requestCBHash_[curReqNum] = onResponse;
          }
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.listen = function (query, currentHashFn, tag, onComplete) {
          var queryId = query.queryIdentifier();
          var pathString = query.path.toString();
          this.log_('Listen called for ' + pathString + ' ' + queryId);

          if (!this.listens.has(pathString)) {
            this.listens.set(pathString, new Map());
          }

          util.assert(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'listen() called for non-default but complete query');
          util.assert(!this.listens.get(pathString).has(queryId), 'listen() called twice for same path/queryId.');
          var listenSpec = {
            onComplete: onComplete,
            hashFn: currentHashFn,
            query: query,
            tag: tag
          };
          this.listens.get(pathString).set(queryId, listenSpec);

          if (this.connected_) {
            this.sendListen_(listenSpec);
          }
        };

        PersistentConnection.prototype.sendListen_ = function (listenSpec) {
          var _this = this;

          var query = listenSpec.query;
          var pathString = query.path.toString();
          var queryId = query.queryIdentifier();
          this.log_('Listen on ' + pathString + ' for ' + queryId);
          var req = {
            /*path*/
            p: pathString
          };
          var action = 'q'; // Only bother to send query if it's non-default.

          if (listenSpec.tag) {
            req['q'] = query.queryObject();
            req['t'] = listenSpec.tag;
          }

          req[
          /*hash*/
          'h'] = listenSpec.hashFn();
          this.sendRequest(action, req, function (message) {
            var payload = message[
            /*data*/
            'd'];
            var status = message[
            /*status*/
            's']; // print warnings in any case...

            PersistentConnection.warnOnListenWarnings_(payload, query);

            var currentListenSpec = _this.listens.get(pathString) && _this.listens.get(pathString).get(queryId); // only trigger actions if the listen hasn't been removed and readded


            if (currentListenSpec === listenSpec) {
              _this.log_('listen response', message);

              if (status !== 'ok') {
                _this.removeListen_(pathString, queryId);
              }

              if (listenSpec.onComplete) {
                listenSpec.onComplete(status, payload);
              }
            }
          });
        };

        PersistentConnection.warnOnListenWarnings_ = function (payload, query) {
          if (payload && typeof payload === 'object' && util.contains(payload, 'w')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var warnings = util.safeGet(payload, 'w');

            if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
              var indexSpec = '".indexOn": "' + query.getQueryParams().getIndex().toString() + '"';
              var indexPath = query.path.toString();
              warn("Using an unspecified index. Your data will be downloaded and " + ("filtered on the client. Consider adding " + indexSpec + " at ") + (indexPath + " to your security rules for better performance."));
            }
          }
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.refreshAuthToken = function (token) {
          this.authToken_ = token;
          this.log_('Auth token refreshed');

          if (this.authToken_) {
            this.tryAuth();
          } else {
            //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
            //the credential so we dont become authenticated next time we connect.
            if (this.connected_) {
              this.sendRequest('unauth', {}, function () {});
            }
          }

          this.reduceReconnectDelayIfAdminCredential_(token);
        };

        PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function (credential) {
          // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
          // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
          var isFirebaseSecret = credential && credential.length === 40;

          if (isFirebaseSecret || util.isAdmin(credential)) {
            this.log_('Admin auth credential detected.  Reducing max reconnect time.');
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
          }
        };
        /**
         * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
         * a auth revoked (the connection is closed).
         */


        PersistentConnection.prototype.tryAuth = function () {
          var _this = this;

          if (this.connected_ && this.authToken_) {
            var token_1 = this.authToken_;
            var authMethod = util.isValidFormat(token_1) ? 'auth' : 'gauth';
            var requestData = {
              cred: token_1
            };

            if (this.authOverride_ === null) {
              requestData['noauth'] = true;
            } else if (typeof this.authOverride_ === 'object') {
              requestData['authvar'] = this.authOverride_;
            }

            this.sendRequest(authMethod, requestData, function (res) {
              var status = res[
              /*status*/
              's'];
              var data = res[
              /*data*/
              'd'] || 'error';

              if (_this.authToken_ === token_1) {
                if (status === 'ok') {
                  _this.invalidAuthTokenCount_ = 0;
                } else {
                  // Triggers reconnect and force refresh for auth token
                  _this.onAuthRevoked_(status, data);
                }
              }
            });
          }
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.unlisten = function (query, tag) {
          var pathString = query.path.toString();
          var queryId = query.queryIdentifier();
          this.log_('Unlisten called for ' + pathString + ' ' + queryId);
          util.assert(query.getQueryParams().isDefault() || !query.getQueryParams().loadsAllData(), 'unlisten() called for non-default but complete query');
          var listen = this.removeListen_(pathString, queryId);

          if (listen && this.connected_) {
            this.sendUnlisten_(pathString, queryId, query.queryObject(), tag);
          }
        };

        PersistentConnection.prototype.sendUnlisten_ = function (pathString, queryId, queryObj, tag) {
          this.log_('Unlisten on ' + pathString + ' for ' + queryId);
          var req = {
            /*path*/
            p: pathString
          };
          var action = 'n'; // Only bother sending queryId if it's non-default.

          if (tag) {
            req['q'] = queryObj;
            req['t'] = tag;
          }

          this.sendRequest(action, req);
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.onDisconnectPut = function (pathString, data, onComplete) {
          if (this.connected_) {
            this.sendOnDisconnect_('o', pathString, data, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString: pathString,
              action: 'o',
              data: data,
              onComplete: onComplete
            });
          }
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.onDisconnectMerge = function (pathString, data, onComplete) {
          if (this.connected_) {
            this.sendOnDisconnect_('om', pathString, data, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString: pathString,
              action: 'om',
              data: data,
              onComplete: onComplete
            });
          }
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.onDisconnectCancel = function (pathString, onComplete) {
          if (this.connected_) {
            this.sendOnDisconnect_('oc', pathString, null, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString: pathString,
              action: 'oc',
              data: null,
              onComplete: onComplete
            });
          }
        };

        PersistentConnection.prototype.sendOnDisconnect_ = function (action, pathString, data, onComplete) {
          var request = {
            /*path*/
            p: pathString,

            /*data*/
            d: data
          };
          this.log_('onDisconnect ' + action, request);
          this.sendRequest(action, request, function (response) {
            if (onComplete) {
              setTimeout(function () {
                onComplete(response[
                /*status*/
                's'], response[
                /* data */
                'd']);
              }, Math.floor(0));
            }
          });
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
          this.putInternal('p', pathString, data, onComplete, hash);
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.merge = function (pathString, data, onComplete, hash) {
          this.putInternal('m', pathString, data, onComplete, hash);
        };

        PersistentConnection.prototype.putInternal = function (action, pathString, data, onComplete, hash) {
          var request = {
            /*path*/
            p: pathString,

            /*data*/
            d: data
          };

          if (hash !== undefined) {
            request[
            /*hash*/
            'h'] = hash;
          } // TODO: Only keep track of the most recent put for a given path?


          this.outstandingPuts_.push({
            action: action,
            request: request,
            onComplete: onComplete
          });
          this.outstandingPutCount_++;
          var index = this.outstandingPuts_.length - 1;

          if (this.connected_) {
            this.sendPut_(index);
          } else {
            this.log_('Buffering put: ' + pathString);
          }
        };

        PersistentConnection.prototype.sendPut_ = function (index) {
          var _this = this;

          var action = this.outstandingPuts_[index].action;
          var request = this.outstandingPuts_[index].request;
          var onComplete = this.outstandingPuts_[index].onComplete;
          this.outstandingPuts_[index].queued = this.connected_;
          this.sendRequest(action, request, function (message) {
            _this.log_(action + ' response', message);

            delete _this.outstandingPuts_[index];
            _this.outstandingPutCount_--; // Clean up array occasionally.

            if (_this.outstandingPutCount_ === 0) {
              _this.outstandingPuts_ = [];
            }

            if (onComplete) {
              onComplete(message[
              /*status*/
              's'], message[
              /* data */
              'd']);
            }
          });
        };
        /**
         * @inheritDoc
         */


        PersistentConnection.prototype.reportStats = function (stats) {
          var _this = this; // If we're not connected, we just drop the stats.


          if (this.connected_) {
            var request = {
              /*counters*/
              c: stats
            };
            this.log_('reportStats', request);
            this.sendRequest(
            /*stats*/
            's', request, function (result) {
              var status = result[
              /*status*/
              's'];

              if (status !== 'ok') {
                var errorReason = result[
                /* data */
                'd'];

                _this.log_('reportStats', 'Error sending stats: ' + errorReason);
              }
            });
          }
        };

        PersistentConnection.prototype.onDataMessage_ = function (message) {
          if ('r' in message) {
            // this is a response
            this.log_('from server: ' + util.stringify(message));
            var reqNum = message['r'];
            var onResponse = this.requestCBHash_[reqNum];

            if (onResponse) {
              delete this.requestCBHash_[reqNum];
              onResponse(message[
              /*body*/
              'b']);
            }
          } else if ('error' in message) {
            throw 'A server-side error has occurred: ' + message['error'];
          } else if ('a' in message) {
            // a and b are action and body, respectively
            this.onDataPush_(message['a'], message['b']);
          }
        };

        PersistentConnection.prototype.onDataPush_ = function (action, body) {
          this.log_('handleServerMessage', action, body);

          if (action === 'd') {
            this.onDataUpdate_(body[
            /*path*/
            'p'], body[
            /*data*/
            'd'],
            /*isMerge*/
            false, body['t']);
          } else if (action === 'm') {
            this.onDataUpdate_(body[
            /*path*/
            'p'], body[
            /*data*/
            'd'],
            /*isMerge=*/
            true, body['t']);
          } else if (action === 'c') {
            this.onListenRevoked_(body[
            /*path*/
            'p'], body[
            /*query*/
            'q']);
          } else if (action === 'ac') {
            this.onAuthRevoked_(body[
            /*status code*/
            's'], body[
            /* explanation */
            'd']);
          } else if (action === 'sd') {
            this.onSecurityDebugPacket_(body);
          } else {
            error('Unrecognized action received from server: ' + util.stringify(action) + '\nAre you using the latest client?');
          }
        };

        PersistentConnection.prototype.onReady_ = function (timestamp, sessionId) {
          this.log_('connection ready');
          this.connected_ = true;
          this.lastConnectionEstablishedTime_ = new Date().getTime();
          this.handleTimestamp_(timestamp);
          this.lastSessionId = sessionId;

          if (this.firstConnection_) {
            this.sendConnectStats_();
          }

          this.restoreState_();
          this.firstConnection_ = false;
          this.onConnectStatus_(true);
        };

        PersistentConnection.prototype.scheduleConnect_ = function (timeout) {
          var _this = this;

          util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");

          if (this.establishConnectionTimer_) {
            clearTimeout(this.establishConnectionTimer_);
          } // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
          // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).


          this.establishConnectionTimer_ = setTimeout(function () {
            _this.establishConnectionTimer_ = null;

            _this.establishConnection_(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          }, Math.floor(timeout));
        };

        PersistentConnection.prototype.onVisible_ = function (visible) {
          // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
          if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_('Window became visible.  Reducing delay.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;

            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          }

          this.visible_ = visible;
        };

        PersistentConnection.prototype.onOnline_ = function (online) {
          if (online) {
            this.log_('Browser went online.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;

            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          } else {
            this.log_('Browser went offline.  Killing connection.');

            if (this.realtime_) {
              this.realtime_.close();
            }
          }
        };

        PersistentConnection.prototype.onRealtimeDisconnect_ = function () {
          this.log_('data client disconnected');
          this.connected_ = false;
          this.realtime_ = null; // Since we don't know if our sent transactions succeeded or not, we need to cancel them.

          this.cancelSentTransactions_(); // Clear out the pending requests.

          this.requestCBHash_ = {};

          if (this.shouldReconnect_()) {
            if (!this.visible_) {
              this.log_("Window isn't visible.  Delaying reconnect.");
              this.reconnectDelay_ = this.maxReconnectDelay_;
              this.lastConnectionAttemptTime_ = new Date().getTime();
            } else if (this.lastConnectionEstablishedTime_) {
              // If we've been connected long enough, reset reconnect delay to minimum.
              var timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;

              if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
                this.reconnectDelay_ = RECONNECT_MIN_DELAY;
              }

              this.lastConnectionEstablishedTime_ = null;
            }

            var timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
            this.scheduleConnect_(reconnectDelay); // Adjust reconnect delay for next time.

            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
          }

          this.onConnectStatus_(false);
        };

        PersistentConnection.prototype.establishConnection_ = function () {
          if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt');
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            var onDataMessage_1 = this.onDataMessage_.bind(this);
            var onReady_1 = this.onReady_.bind(this);
            var onDisconnect_1 = this.onRealtimeDisconnect_.bind(this);
            var connId_1 = this.id + ':' + PersistentConnection.nextConnectionId_++;
            var self_1 = this;
            var lastSessionId_1 = this.lastSessionId;
            var canceled_1 = false;
            var connection_1 = null;

            var closeFn_1 = function closeFn_1() {
              if (connection_1) {
                connection_1.close();
              } else {
                canceled_1 = true;
                onDisconnect_1();
              }
            };

            var sendRequestFn = function sendRequestFn(msg) {
              util.assert(connection_1, "sendRequest call when we're not connected not allowed.");
              connection_1.sendRequest(msg);
            };

            this.realtime_ = {
              close: closeFn_1,
              sendRequest: sendRequestFn
            };
            var forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false; // First fetch auth token, and establish connection after fetching the token was successful

            this.authTokenProvider_.getToken(forceRefresh).then(function (result) {
              if (!canceled_1) {
                log('getToken() completed. Creating connection.');
                self_1.authToken_ = result && result.accessToken;
                connection_1 = new Connection(connId_1, self_1.repoInfo_, self_1.applicationId_, onDataMessage_1, onReady_1, onDisconnect_1,
                /* onKill= */
                function (reason) {
                  warn(reason + ' (' + self_1.repoInfo_.toString() + ')');
                  self_1.interrupt(SERVER_KILL_INTERRUPT_REASON);
                }, lastSessionId_1);
              } else {
                log('getToken() completed but was canceled');
              }
            }).then(null, function (error) {
              self_1.log_('Failed to get token: ' + error);

              if (!canceled_1) {
                if (util.CONSTANTS.NODE_ADMIN) {
                  // This may be a critical error for the Admin Node.js SDK, so log a warning.
                  // But getToken() may also just have temporarily failed, so we still want to
                  // continue retrying.
                  warn(error);
                }

                closeFn_1();
              }
            });
          }
        };

        PersistentConnection.prototype.interrupt = function (reason) {
          log('Interrupting connection for reason: ' + reason);
          this.interruptReasons_[reason] = true;

          if (this.realtime_) {
            this.realtime_.close();
          } else {
            if (this.establishConnectionTimer_) {
              clearTimeout(this.establishConnectionTimer_);
              this.establishConnectionTimer_ = null;
            }

            if (this.connected_) {
              this.onRealtimeDisconnect_();
            }
          }
        };

        PersistentConnection.prototype.resume = function (reason) {
          log('Resuming connection for reason: ' + reason);
          delete this.interruptReasons_[reason];

          if (util.isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;

            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          }
        };

        PersistentConnection.prototype.handleTimestamp_ = function (timestamp) {
          var delta = timestamp - new Date().getTime();
          this.onServerInfoUpdate_({
            serverTimeOffset: delta
          });
        };

        PersistentConnection.prototype.cancelSentTransactions_ = function () {
          for (var i = 0; i < this.outstandingPuts_.length; i++) {
            var put = this.outstandingPuts_[i];

            if (put &&
            /*hash*/
            'h' in put.request && put.queued) {
              if (put.onComplete) {
                put.onComplete('disconnect');
              }

              delete this.outstandingPuts_[i];
              this.outstandingPutCount_--;
            }
          } // Clean up array occasionally.


          if (this.outstandingPutCount_ === 0) {
            this.outstandingPuts_ = [];
          }
        };

        PersistentConnection.prototype.onListenRevoked_ = function (pathString, query) {
          // Remove the listen and manufacture a "permission_denied" error for the failed listen.
          var queryId;

          if (!query) {
            queryId = 'default';
          } else {
            queryId = query.map(function (q) {
              return ObjectToUniqueKey(q);
            }).join('$');
          }

          var listen = this.removeListen_(pathString, queryId);

          if (listen && listen.onComplete) {
            listen.onComplete('permission_denied');
          }
        };

        PersistentConnection.prototype.removeListen_ = function (pathString, queryId) {
          var normalizedPathString = new Path(pathString).toString(); // normalize path.

          var listen;

          if (this.listens.has(normalizedPathString)) {
            var map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map["delete"](queryId);

            if (map.size === 0) {
              this.listens["delete"](normalizedPathString);
            }
          } else {
            // all listens for this path has already been removed
            listen = undefined;
          }

          return listen;
        };

        PersistentConnection.prototype.onAuthRevoked_ = function (statusCode, explanation) {
          log('Auth token revoked: ' + statusCode + '/' + explanation);
          this.authToken_ = null;
          this.forceTokenRefresh_ = true;
          this.realtime_.close();

          if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;

            if (this.invalidAuthTokenCount_ >= INVALID_AUTH_TOKEN_THRESHOLD) {
              // Set a long reconnect delay because recovery is unlikely
              this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS; // Notify the auth token provider that the token is invalid, which will log
              // a warning

              this.authTokenProvider_.notifyForInvalidToken();
            }
          }
        };

        PersistentConnection.prototype.onSecurityDebugPacket_ = function (body) {
          if (this.securityDebugCallback_) {
            this.securityDebugCallback_(body);
          } else {
            if ('msg' in body) {
              console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
            }
          }
        };

        PersistentConnection.prototype.restoreState_ = function () {
          var e_1, _a, e_2, _b; //Re-authenticate ourselves if we have a credential stored.


          this.tryAuth();

          try {
            // Puts depend on having received the corresponding data update from the server before they complete, so we must
            // make sure to send listens before puts.
            for (var _c = tslib.__values(this.listens.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
              var queries = _d.value;

              try {
                for (var _e = (e_2 = void 0, tslib.__values(queries.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var listenSpec = _f.value;
                  this.sendListen_(listenSpec);
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          for (var i = 0; i < this.outstandingPuts_.length; i++) {
            if (this.outstandingPuts_[i]) {
              this.sendPut_(i);
            }
          }

          while (this.onDisconnectRequestQueue_.length) {
            var request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
          }
        };
        /**
         * Sends client stats for first connection
         */


        PersistentConnection.prototype.sendConnectStats_ = function () {
          var stats = {};
          var clientName = 'js';

          if (util.CONSTANTS.NODE_ADMIN) {
            clientName = 'admin_node';
          } else if (util.CONSTANTS.NODE_CLIENT) {
            clientName = 'node';
          }

          stats['sdk.' + clientName + '.' + SDK_VERSION.replace(/\./g, '-')] = 1;

          if (util.isMobileCordova()) {
            stats['framework.cordova'] = 1;
          } else if (util.isReactNative()) {
            stats['framework.reactnative'] = 1;
          }

          this.reportStats(stats);
        };

        PersistentConnection.prototype.shouldReconnect_ = function () {
          var online = OnlineMonitor.getInstance().currentlyOnline();
          return util.isEmpty(this.interruptReasons_) && online;
        };

        PersistentConnection.nextPersistentConnectionId_ = 0;
        /**
         * Counter for number of connections created. Mainly used for tagging in the logs
         */

        PersistentConnection.nextConnectionId_ = 0;
        return PersistentConnection;
      }(ServerActions);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An implementation of ServerActions that communicates with the server via REST requests.
       * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
       * persistent connection (using WebSockets or long-polling)
       */


      var ReadonlyRestClient =
      /** @class */
      function (_super) {
        tslib.__extends(ReadonlyRestClient, _super);
        /**
         * @param {!RepoInfo} repoInfo_ Data about the namespace we are connecting to
         * @param {function(string, *, boolean, ?number)} onDataUpdate_ A callback for new data from the server
         * @param {AuthTokenProvider} authTokenProvider_
         * @implements {ServerActions}
         */


        function ReadonlyRestClient(repoInfo_, onDataUpdate_, authTokenProvider_) {
          var _this = _super.call(this) || this;

          _this.repoInfo_ = repoInfo_;
          _this.onDataUpdate_ = onDataUpdate_;
          _this.authTokenProvider_ = authTokenProvider_;
          /** @private {function(...[*])} */

          _this.log_ = logWrapper('p:rest:');
          /**
           * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
           * that's been removed. :-/
           *
           * @private {!Object.<string, !Object>}
           */

          _this.listens_ = {};
          return _this;
        }

        ReadonlyRestClient.prototype.reportStats = function (stats) {
          throw new Error('Method not implemented.');
        };
        /**
         * @param {!Query} query
         * @param {?number=} tag
         * @return {string}
         * @private
         */


        ReadonlyRestClient.getListenId_ = function (query, tag) {
          if (tag !== undefined) {
            return 'tag$' + tag;
          } else {
            util.assert(query.getQueryParams().isDefault(), "should have a tag if it's not a default query.");
            return query.path.toString();
          }
        };
        /** @inheritDoc */


        ReadonlyRestClient.prototype.listen = function (query, currentHashFn, tag, onComplete) {
          var _this = this;

          var pathString = query.path.toString();
          this.log_('Listen called for ' + pathString + ' ' + query.queryIdentifier()); // Mark this listener so we can tell if it's removed.

          var listenId = ReadonlyRestClient.getListenId_(query, tag);
          var thisListen = {};
          this.listens_[listenId] = thisListen;
          var queryStringParameters = query.getQueryParams().toRestQueryStringParameters();
          this.restRequest_(pathString + '.json', queryStringParameters, function (error, result) {
            var data = result;

            if (error === 404) {
              data = null;
              error = null;
            }

            if (error === null) {
              _this.onDataUpdate_(pathString, data,
              /*isMerge=*/
              false, tag);
            }

            if (util.safeGet(_this.listens_, listenId) === thisListen) {
              var status_1;

              if (!error) {
                status_1 = 'ok';
              } else if (error === 401) {
                status_1 = 'permission_denied';
              } else {
                status_1 = 'rest_error:' + error;
              }

              onComplete(status_1, null);
            }
          });
        };
        /** @inheritDoc */


        ReadonlyRestClient.prototype.unlisten = function (query, tag) {
          var listenId = ReadonlyRestClient.getListenId_(query, tag);
          delete this.listens_[listenId];
        };
        /** @inheritDoc */


        ReadonlyRestClient.prototype.refreshAuthToken = function (token) {// no-op since we just always call getToken.
        };
        /**
         * Performs a REST request to the given path, with the provided query string parameters,
         * and any auth credentials we have.
         *
         * @param {!string} pathString
         * @param {!Object.<string, *>} queryStringParameters
         * @param {?function(?number, *=)} callback
         * @private
         */


        ReadonlyRestClient.prototype.restRequest_ = function (pathString, queryStringParameters, callback) {
          var _this = this;

          if (queryStringParameters === void 0) {
            queryStringParameters = {};
          }

          queryStringParameters['format'] = 'export';
          this.authTokenProvider_.getToken(
          /*forceRefresh=*/
          false).then(function (authTokenData) {
            var authToken = authTokenData && authTokenData.accessToken;

            if (authToken) {
              queryStringParameters['auth'] = authToken;
            }

            var url = (_this.repoInfo_.secure ? 'https://' : 'http://') + _this.repoInfo_.host + pathString + '?' + 'ns=' + _this.repoInfo_.namespace + util.querystring(queryStringParameters);

            _this.log_('Sending REST request for ' + url);

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (callback && xhr.readyState === 4) {
                _this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);

                var res = null;

                if (xhr.status >= 200 && xhr.status < 300) {
                  try {
                    res = util.jsonEval(xhr.responseText);
                  } catch (e) {
                    warn('Failed to parse JSON response for ' + url + ': ' + xhr.responseText);
                  }

                  callback(null, res);
                } else {
                  // 401 and 404 are expected.
                  if (xhr.status !== 401 && xhr.status !== 404) {
                    warn('Got unsuccessful REST response for ' + url + ' Status: ' + xhr.status);
                  }

                  callback(xhr.status);
                }

                callback = null;
              }
            };

            xhr.open('GET', url,
            /*asynchronous=*/
            true);
            xhr.send();
          });
        };

        return ReadonlyRestClient;
      }(ServerActions);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var INTERRUPT_REASON = 'repo_interrupt';
      /**
       * A connection to a single data repository.
       */

      var Repo =
      /** @class */
      function () {
        function Repo(repoInfo_, forceRestClient, app, authTokenProvider) {
          var _this = this;

          this.repoInfo_ = repoInfo_;
          this.app = app;
          this.dataUpdateCount = 0;
          this.statsListener_ = null;
          this.eventQueue_ = new EventQueue();
          this.nextWriteId_ = 1;
          this.interceptServerDataCallback_ = null;
          /** A list of data pieces and paths to be set when this client disconnects. */

          this.onDisconnect_ = new SparseSnapshotTree(); // TODO: This should be @private but it's used by test_access.js and internal.js

          this.persistentConnection_ = null;
          this.stats_ = StatsManager.getCollection(repoInfo_);

          if (forceRestClient || beingCrawled()) {
            this.server_ = new ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), authTokenProvider); // Minor hack: Fire onConnect immediately, since there's no actual connection.

            setTimeout(this.onConnectStatus_.bind(this, true), 0);
          } else {
            var authOverride = app.options['databaseAuthVariableOverride']; // Validate authOverride

            if (typeof authOverride !== 'undefined' && authOverride !== null) {
              if (typeof authOverride !== 'object') {
                throw new Error('Only objects are supported for option databaseAuthVariableOverride');
              }

              try {
                util.stringify(authOverride);
              } catch (e) {
                throw new Error('Invalid authOverride provided: ' + e);
              }
            }

            this.persistentConnection_ = new PersistentConnection(this.repoInfo_, app.options.appId, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), authTokenProvider, authOverride);
            this.server_ = this.persistentConnection_;
          }

          authTokenProvider.addTokenChangeListener(function (token) {
            _this.server_.refreshAuthToken(token);
          }); // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
          // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.

          this.statsReporter_ = StatsManager.getOrCreateReporter(repoInfo_, function () {
            return new StatsReporter(_this.stats_, _this.server_);
          });
          this.transactionsInit_(); // Used for .info.

          this.infoData_ = new SnapshotHolder();
          this.infoSyncTree_ = new SyncTree({
            startListening: function startListening(query, tag, currentHashFn, onComplete) {
              var infoEvents = [];

              var node = _this.infoData_.getNode(query.path); // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
              // on initial data...


              if (!node.isEmpty()) {
                infoEvents = _this.infoSyncTree_.applyServerOverwrite(query.path, node);
                setTimeout(function () {
                  onComplete('ok');
                }, 0);
              }

              return infoEvents;
            },
            stopListening: function stopListening() {}
          });
          this.updateInfo_('connected', false);
          this.serverSyncTree_ = new SyncTree({
            startListening: function startListening(query, tag, currentHashFn, onComplete) {
              _this.server_.listen(query, currentHashFn, tag, function (status, data) {
                var events = onComplete(status, data);

                _this.eventQueue_.raiseEventsForChangedPath(query.path, events);
              }); // No synchronous events for network-backed sync trees


              return [];
            },
            stopListening: function stopListening(query, tag) {
              _this.server_.unlisten(query, tag);
            }
          });
        }
        /**
         * @return The URL corresponding to the root of this Firebase.
         */


        Repo.prototype.toString = function () {
          return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
        };
        /**
         * @return The namespace represented by the repo.
         */


        Repo.prototype.name = function () {
          return this.repoInfo_.namespace;
        };
        /**
         * @return The time in milliseconds, taking the server offset into account if we have one.
         */


        Repo.prototype.serverTime = function () {
          var offsetNode = this.infoData_.getNode(new Path('.info/serverTimeOffset'));
          var offset = offsetNode.val() || 0;
          return new Date().getTime() + offset;
        };
        /**
         * Generate ServerValues using some variables from the repo object.
         */


        Repo.prototype.generateServerValues = function () {
          return generateWithValues({
            timestamp: this.serverTime()
          });
        };
        /**
         * Called by realtime when we get new messages from the server.
         */


        Repo.prototype.onDataUpdate_ = function (pathString, data, isMerge, tag) {
          // For testing.
          this.dataUpdateCount++;
          var path = new Path(pathString);
          data = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(pathString, data) : data;
          var events = [];

          if (tag) {
            if (isMerge) {
              var taggedChildren = util.map(data, function (raw) {
                return nodeFromJSON$1(raw);
              });
              events = this.serverSyncTree_.applyTaggedQueryMerge(path, taggedChildren, tag);
            } else {
              var taggedSnap = nodeFromJSON$1(data);
              events = this.serverSyncTree_.applyTaggedQueryOverwrite(path, taggedSnap, tag);
            }
          } else if (isMerge) {
            var changedChildren = util.map(data, function (raw) {
              return nodeFromJSON$1(raw);
            });
            events = this.serverSyncTree_.applyServerMerge(path, changedChildren);
          } else {
            var snap = nodeFromJSON$1(data);
            events = this.serverSyncTree_.applyServerOverwrite(path, snap);
          }

          var affectedPath = path;

          if (events.length > 0) {
            // Since we have a listener outstanding for each transaction, receiving any events
            // is a proxy for some change having occurred.
            affectedPath = this.rerunTransactions_(path);
          }

          this.eventQueue_.raiseEventsForChangedPath(affectedPath, events);
        }; // TODO: This should be @private but it's used by test_access.js and internal.js


        Repo.prototype.interceptServerData_ = function (callback) {
          this.interceptServerDataCallback_ = callback;
        };

        Repo.prototype.onConnectStatus_ = function (connectStatus) {
          this.updateInfo_('connected', connectStatus);

          if (connectStatus === false) {
            this.runOnDisconnectEvents_();
          }
        };

        Repo.prototype.onServerInfoUpdate_ = function (updates) {
          var _this = this;

          each(updates, function (key, value) {
            _this.updateInfo_(key, value);
          });
        };

        Repo.prototype.updateInfo_ = function (pathString, value) {
          var path = new Path('/.info/' + pathString);
          var newNode = nodeFromJSON$1(value);
          this.infoData_.updateSnapshot(path, newNode);
          var events = this.infoSyncTree_.applyServerOverwrite(path, newNode);
          this.eventQueue_.raiseEventsForChangedPath(path, events);
        };

        Repo.prototype.getNextWriteId_ = function () {
          return this.nextWriteId_++;
        };

        Repo.prototype.setWithPriority = function (path, newVal, newPriority, onComplete) {
          var _this = this;

          this.log_('set', {
            path: path.toString(),
            value: newVal,
            priority: newPriority
          }); // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
          // (b) store unresolved paths on JSON parse

          var serverValues = this.generateServerValues();
          var newNodeUnresolved = nodeFromJSON$1(newVal, newPriority);
          var existing = this.serverSyncTree_.calcCompleteEventCache(path);
          var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
          var writeId = this.getNextWriteId_();
          var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, writeId, true);
          this.eventQueue_.queueEvents(events);
          this.server_.put(path.toString(), newNodeUnresolved.val(
          /*export=*/
          true), function (status, errorReason) {
            var success = status === 'ok';

            if (!success) {
              warn('set at ' + path + ' failed: ' + status);
            }

            var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId, !success);

            _this.eventQueue_.raiseEventsForChangedPath(path, clearEvents);

            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
          var affectedPath = this.abortTransactions_(path);
          this.rerunTransactions_(affectedPath); // We queued the events above, so just flush the queue here

          this.eventQueue_.raiseEventsForChangedPath(affectedPath, []);
        };

        Repo.prototype.update = function (path, childrenToMerge, onComplete) {
          var _this = this;

          this.log_('update', {
            path: path.toString(),
            value: childrenToMerge
          }); // Start with our existing data and merge each child into it.

          var empty = true;
          var serverValues = this.generateServerValues();
          var changedChildren = {};
          each(childrenToMerge, function (changedKey, changedValue) {
            empty = false;
            changedChildren[changedKey] = resolveDeferredValueTree(path.child(changedKey), nodeFromJSON$1(changedValue), _this.serverSyncTree_, serverValues);
          });

          if (!empty) {
            var writeId_1 = this.getNextWriteId_();
            var events = this.serverSyncTree_.applyUserMerge(path, changedChildren, writeId_1);
            this.eventQueue_.queueEvents(events);
            this.server_.merge(path.toString(), childrenToMerge, function (status, errorReason) {
              var success = status === 'ok';

              if (!success) {
                warn('update at ' + path + ' failed: ' + status);
              }

              var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId_1, !success);

              var affectedPath = clearEvents.length > 0 ? _this.rerunTransactions_(path) : path;

              _this.eventQueue_.raiseEventsForChangedPath(affectedPath, clearEvents);

              _this.callOnCompleteCallback(onComplete, status, errorReason);
            });
            each(childrenToMerge, function (changedPath) {
              var affectedPath = _this.abortTransactions_(path.child(changedPath));

              _this.rerunTransactions_(affectedPath);
            }); // We queued the events above, so just flush the queue here

            this.eventQueue_.raiseEventsForChangedPath(path, []);
          } else {
            log("update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
          }
        };
        /**
         * Applies all of the changes stored up in the onDisconnect_ tree.
         */


        Repo.prototype.runOnDisconnectEvents_ = function () {
          var _this = this;

          this.log_('onDisconnectEvents');
          var serverValues = this.generateServerValues();
          var resolvedOnDisconnectTree = new SparseSnapshotTree();
          this.onDisconnect_.forEachTree(Path.Empty, function (path, node) {
            var resolved = resolveDeferredValueTree(path, node, _this.serverSyncTree_, serverValues);
            resolvedOnDisconnectTree.remember(path, resolved);
          });
          var events = [];
          resolvedOnDisconnectTree.forEachTree(Path.Empty, function (path, snap) {
            events = events.concat(_this.serverSyncTree_.applyServerOverwrite(path, snap));

            var affectedPath = _this.abortTransactions_(path);

            _this.rerunTransactions_(affectedPath);
          });
          this.onDisconnect_ = new SparseSnapshotTree();
          this.eventQueue_.raiseEventsForChangedPath(Path.Empty, events);
        };

        Repo.prototype.onDisconnectCancel = function (path, onComplete) {
          var _this = this;

          this.server_.onDisconnectCancel(path.toString(), function (status, errorReason) {
            if (status === 'ok') {
              _this.onDisconnect_.forget(path);
            }

            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };

        Repo.prototype.onDisconnectSet = function (path, value, onComplete) {
          var _this = this;

          var newNode = nodeFromJSON$1(value);
          this.server_.onDisconnectPut(path.toString(), newNode.val(
          /*export=*/
          true), function (status, errorReason) {
            if (status === 'ok') {
              _this.onDisconnect_.remember(path, newNode);
            }

            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };

        Repo.prototype.onDisconnectSetWithPriority = function (path, value, priority, onComplete) {
          var _this = this;

          var newNode = nodeFromJSON$1(value, priority);
          this.server_.onDisconnectPut(path.toString(), newNode.val(
          /*export=*/
          true), function (status, errorReason) {
            if (status === 'ok') {
              _this.onDisconnect_.remember(path, newNode);
            }

            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };

        Repo.prototype.onDisconnectUpdate = function (path, childrenToMerge, onComplete) {
          var _this = this;

          if (util.isEmpty(childrenToMerge)) {
            log("onDisconnect().update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
            return;
          }

          this.server_.onDisconnectMerge(path.toString(), childrenToMerge, function (status, errorReason) {
            if (status === 'ok') {
              each(childrenToMerge, function (childName, childNode) {
                var newChildNode = nodeFromJSON$1(childNode);

                _this.onDisconnect_.remember(path.child(childName), newChildNode);
              });
            }

            _this.callOnCompleteCallback(onComplete, status, errorReason);
          });
        };

        Repo.prototype.addEventCallbackForQuery = function (query, eventRegistration) {
          var events;

          if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.addEventRegistration(query, eventRegistration);
          } else {
            events = this.serverSyncTree_.addEventRegistration(query, eventRegistration);
          }

          this.eventQueue_.raiseEventsAtPath(query.path, events);
        };

        Repo.prototype.removeEventCallbackForQuery = function (query, eventRegistration) {
          // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
          // a little bit by handling the return values anyways.
          var events;

          if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.removeEventRegistration(query, eventRegistration);
          } else {
            events = this.serverSyncTree_.removeEventRegistration(query, eventRegistration);
          }

          this.eventQueue_.raiseEventsAtPath(query.path, events);
        };

        Repo.prototype.interrupt = function () {
          if (this.persistentConnection_) {
            this.persistentConnection_.interrupt(INTERRUPT_REASON);
          }
        };

        Repo.prototype.resume = function () {
          if (this.persistentConnection_) {
            this.persistentConnection_.resume(INTERRUPT_REASON);
          }
        };

        Repo.prototype.stats = function (showDelta) {
          if (showDelta === void 0) {
            showDelta = false;
          }

          if (typeof console === 'undefined') {
            return;
          }

          var stats;

          if (showDelta) {
            if (!this.statsListener_) {
              this.statsListener_ = new StatsListener(this.stats_);
            }

            stats = this.statsListener_.get();
          } else {
            stats = this.stats_.get();
          }

          var longestName = Object.keys(stats).reduce(function (previousValue, currentValue) {
            return Math.max(currentValue.length, previousValue);
          }, 0);
          each(stats, function (stat, value) {
            var paddedStat = stat; // pad stat names to be the same length (plus 2 extra spaces).

            for (var i = stat.length; i < longestName + 2; i++) {
              paddedStat += ' ';
            }

            console.log(paddedStat + value);
          });
        };

        Repo.prototype.statsIncrementCounter = function (metric) {
          this.stats_.incrementCounter(metric);
          this.statsReporter_.includeStat(metric);
        };

        Repo.prototype.log_ = function () {
          var varArgs = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            varArgs[_i] = arguments[_i];
          }

          var prefix = '';

          if (this.persistentConnection_) {
            prefix = this.persistentConnection_.id + ':';
          }

          log.apply(void 0, tslib.__spread([prefix], varArgs));
        };

        Repo.prototype.callOnCompleteCallback = function (callback, status, errorReason) {
          if (callback) {
            exceptionGuard(function () {
              if (status === 'ok') {
                callback(null);
              } else {
                var code = (status || 'error').toUpperCase();
                var message = code;

                if (errorReason) {
                  message += ': ' + errorReason;
                }

                var error = new Error(message); // eslint-disable-next-line @typescript-eslint/no-explicit-any

                error.code = code;
                callback(error);
              }
            });
          }
        };

        Object.defineProperty(Repo.prototype, "database", {
          get: function get() {
            return this.__database || (this.__database = new Database(this));
          },
          enumerable: false,
          configurable: true
        });
        return Repo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
       *
       * @constructor
       * @implements {NodeFilter}
       */


      var RangedFilter =
      /** @class */
      function () {
        /**
         * @param {!QueryParams} params
         */
        function RangedFilter(params) {
          this.indexedFilter_ = new IndexedFilter(params.getIndex());
          this.index_ = params.getIndex();
          this.startPost_ = RangedFilter.getStartPost_(params);
          this.endPost_ = RangedFilter.getEndPost_(params);
        }
        /**
         * @return {!NamedNode}
         */


        RangedFilter.prototype.getStartPost = function () {
          return this.startPost_;
        };
        /**
         * @return {!NamedNode}
         */


        RangedFilter.prototype.getEndPost = function () {
          return this.endPost_;
        };
        /**
         * @param {!NamedNode} node
         * @return {boolean}
         */


        RangedFilter.prototype.matches = function (node) {
          return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          if (!this.matches(new NamedNode(key, newChild))) {
            newChild = ChildrenNode.EMPTY_NODE;
          }

          return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
          if (newSnap.isLeafNode()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            newSnap = ChildrenNode.EMPTY_NODE;
          }

          var filtered = newSnap.withIndex(this.index_); // Don't support priorities on queries

          filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
          var self = this;
          newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
            if (!self.matches(new NamedNode(key, childNode))) {
              filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
            }
          });
          return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
          // Don't support priorities on queries
          return oldSnap;
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.filtersNodes = function () {
          return true;
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.getIndexedFilter = function () {
          return this.indexedFilter_;
        };
        /**
         * @inheritDoc
         */


        RangedFilter.prototype.getIndex = function () {
          return this.index_;
        };
        /**
         * @param {!QueryParams} params
         * @return {!NamedNode}
         * @private
         */


        RangedFilter.getStartPost_ = function (params) {
          if (params.hasStart()) {
            var startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
          } else {
            return params.getIndex().minPost();
          }
        };
        /**
         * @param {!QueryParams} params
         * @return {!NamedNode}
         * @private
         */


        RangedFilter.getEndPost_ = function (params) {
          if (params.hasEnd()) {
            var endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
          } else {
            return params.getIndex().maxPost();
          }
        };

        return RangedFilter;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
       *
       * @constructor
       * @implements {NodeFilter}
       */


      var LimitedFilter =
      /** @class */
      function () {
        /**
         * @param {!QueryParams} params
         */
        function LimitedFilter(params) {
          this.rangedFilter_ = new RangedFilter(params);
          this.index_ = params.getIndex();
          this.limit_ = params.getLimit();
          this.reverse_ = !params.isViewFromLeft();
        }
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
          if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) {
            newChild = ChildrenNode.EMPTY_NODE;
          }

          if (snap.getImmediateChild(key).equals(newChild)) {
            // No change
            return snap;
          } else if (snap.numChildren() < this.limit_) {
            return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
          } else {
            return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
          }
        };
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
          var filtered;

          if (newSnap.isLeafNode() || newSnap.isEmpty()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
          } else {
            if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
              // Easier to build up a snapshot, since what we're given has more than twice the elements we want
              filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_); // anchor to the startPost, endPost, or last element as appropriate

              var iterator = void 0;

              if (this.reverse_) {
                iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
              } else {
                iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
              }

              var count = 0;

              while (iterator.hasNext() && count < this.limit_) {
                var next = iterator.getNext();
                var inRange = void 0;

                if (this.reverse_) {
                  inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
                } else {
                  inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
                }

                if (inRange) {
                  filtered = filtered.updateImmediateChild(next.name, next.node);
                  count++;
                } else {
                  // if we have reached the end post, we cannot keep adding elemments
                  break;
                }
              }
            } else {
              // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
              filtered = newSnap.withIndex(this.index_); // Don't support priorities on queries

              filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
              var startPost = void 0;
              var endPost = void 0;
              var cmp = void 0;
              var iterator = void 0;

              if (this.reverse_) {
                iterator = filtered.getReverseIterator(this.index_);
                startPost = this.rangedFilter_.getEndPost();
                endPost = this.rangedFilter_.getStartPost();
                var indexCompare_1 = this.index_.getCompare();

                cmp = function cmp(a, b) {
                  return indexCompare_1(b, a);
                };
              } else {
                iterator = filtered.getIterator(this.index_);
                startPost = this.rangedFilter_.getStartPost();
                endPost = this.rangedFilter_.getEndPost();
                cmp = this.index_.getCompare();
              }

              var count = 0;
              var foundStartPost = false;

              while (iterator.hasNext()) {
                var next = iterator.getNext();

                if (!foundStartPost && cmp(startPost, next) <= 0) {
                  // start adding
                  foundStartPost = true;
                }

                var inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;

                if (inRange) {
                  count++;
                } else {
                  filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
                }
              }
            }
          }

          return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
        };
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
          // Don't support priorities on queries
          return oldSnap;
        };
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.filtersNodes = function () {
          return true;
        };
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.getIndexedFilter = function () {
          return this.rangedFilter_.getIndexedFilter();
        };
        /**
         * @inheritDoc
         */


        LimitedFilter.prototype.getIndex = function () {
          return this.index_;
        };
        /**
         * @param {!Node} snap
         * @param {string} childKey
         * @param {!Node} childSnap
         * @param {!CompleteChildSource} source
         * @param {?ChildChangeAccumulator} changeAccumulator
         * @return {!Node}
         * @private
         */


        LimitedFilter.prototype.fullLimitUpdateChild_ = function (snap, childKey, childSnap, source, changeAccumulator) {
          // TODO: rename all cache stuff etc to general snap terminology
          var cmp;

          if (this.reverse_) {
            var indexCmp_1 = this.index_.getCompare();

            cmp = function cmp(a, b) {
              return indexCmp_1(b, a);
            };
          } else {
            cmp = this.index_.getCompare();
          }

          var oldEventCache = snap;
          util.assert(oldEventCache.numChildren() === this.limit_, '');
          var newChildNamedNode = new NamedNode(childKey, childSnap);
          var windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
          var inRange = this.rangedFilter_.matches(newChildNamedNode);

          if (oldEventCache.hasChild(childKey)) {
            var oldChildSnap = oldEventCache.getImmediateChild(childKey);
            var nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);

            while (nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) {
              // There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
              // been applied to the limited filter yet. Ignore this next child which will be updated later in
              // the limited filter...
              nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            }

            var compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
            var remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;

            if (remainsInWindow) {
              if (changeAccumulator != null) {
                changeAccumulator.trackChildChange(Change.childChangedChange(childKey, childSnap, oldChildSnap));
              }

              return oldEventCache.updateImmediateChild(childKey, childSnap);
            } else {
              if (changeAccumulator != null) {
                changeAccumulator.trackChildChange(Change.childRemovedChange(childKey, oldChildSnap));
              }

              var newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
              var nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);

              if (nextChildInRange) {
                if (changeAccumulator != null) {
                  changeAccumulator.trackChildChange(Change.childAddedChange(nextChild.name, nextChild.node));
                }

                return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
              } else {
                return newEventCache;
              }
            }
          } else if (childSnap.isEmpty()) {
            // we're deleting a node, but it was not in the window, so ignore it
            return snap;
          } else if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
              if (changeAccumulator != null) {
                changeAccumulator.trackChildChange(Change.childRemovedChange(windowBoundary.name, windowBoundary.node));
                changeAccumulator.trackChildChange(Change.childAddedChange(childKey, childSnap));
              }

              return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
            } else {
              return snap;
            }
          } else {
            return snap;
          }
        };

        return LimitedFilter;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
       * range to be returned for a particular location. It is assumed that validation of parameters is done at the
       * user-facing API level, so it is not done here.
       * @constructor
       */


      var QueryParams =
      /** @class */
      function () {
        function QueryParams() {
          this.limitSet_ = false;
          this.startSet_ = false;
          this.startNameSet_ = false;
          this.endSet_ = false;
          this.endNameSet_ = false;
          this.limit_ = 0;
          this.viewFrom_ = '';
          this.indexStartValue_ = null;
          this.indexStartName_ = '';
          this.indexEndValue_ = null;
          this.indexEndName_ = '';
          this.index_ = PRIORITY_INDEX;
        }
        /**
         * @return {boolean}
         */


        QueryParams.prototype.hasStart = function () {
          return this.startSet_;
        };
        /**
         * @return {boolean} True if it would return from left.
         */


        QueryParams.prototype.isViewFromLeft = function () {
          if (this.viewFrom_ === '') {
            // limit(), rather than limitToFirst or limitToLast was called.
            // This means that only one of startSet_ and endSet_ is true. Use them
            // to calculate which side of the view to anchor to. If neither is set,
            // anchor to the end.
            return this.startSet_;
          } else {
            return this.viewFrom_ === QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
          }
        };
        /**
         * Only valid to call if hasStart() returns true
         * @return {*}
         */


        QueryParams.prototype.getIndexStartValue = function () {
          util.assert(this.startSet_, 'Only valid if start has been set');
          return this.indexStartValue_;
        };
        /**
         * Only valid to call if hasStart() returns true.
         * Returns the starting key name for the range defined by these query parameters
         * @return {!string}
         */


        QueryParams.prototype.getIndexStartName = function () {
          util.assert(this.startSet_, 'Only valid if start has been set');

          if (this.startNameSet_) {
            return this.indexStartName_;
          } else {
            return MIN_NAME;
          }
        };
        /**
         * @return {boolean}
         */


        QueryParams.prototype.hasEnd = function () {
          return this.endSet_;
        };
        /**
         * Only valid to call if hasEnd() returns true.
         * @return {*}
         */


        QueryParams.prototype.getIndexEndValue = function () {
          util.assert(this.endSet_, 'Only valid if end has been set');
          return this.indexEndValue_;
        };
        /**
         * Only valid to call if hasEnd() returns true.
         * Returns the end key name for the range defined by these query parameters
         * @return {!string}
         */


        QueryParams.prototype.getIndexEndName = function () {
          util.assert(this.endSet_, 'Only valid if end has been set');

          if (this.endNameSet_) {
            return this.indexEndName_;
          } else {
            return MAX_NAME;
          }
        };
        /**
         * @return {boolean}
         */


        QueryParams.prototype.hasLimit = function () {
          return this.limitSet_;
        };
        /**
         * @return {boolean} True if a limit has been set and it has been explicitly anchored
         */


        QueryParams.prototype.hasAnchoredLimit = function () {
          return this.limitSet_ && this.viewFrom_ !== '';
        };
        /**
         * Only valid to call if hasLimit() returns true
         * @return {!number}
         */


        QueryParams.prototype.getLimit = function () {
          util.assert(this.limitSet_, 'Only valid if limit has been set');
          return this.limit_;
        };
        /**
         * @return {!Index}
         */


        QueryParams.prototype.getIndex = function () {
          return this.index_;
        };
        /**
         * @return {!QueryParams}
         * @private
         */


        QueryParams.prototype.copy_ = function () {
          var copy = new QueryParams();
          copy.limitSet_ = this.limitSet_;
          copy.limit_ = this.limit_;
          copy.startSet_ = this.startSet_;
          copy.indexStartValue_ = this.indexStartValue_;
          copy.startNameSet_ = this.startNameSet_;
          copy.indexStartName_ = this.indexStartName_;
          copy.endSet_ = this.endSet_;
          copy.indexEndValue_ = this.indexEndValue_;
          copy.endNameSet_ = this.endNameSet_;
          copy.indexEndName_ = this.indexEndName_;
          copy.index_ = this.index_;
          copy.viewFrom_ = this.viewFrom_;
          return copy;
        };
        /**
         * @param {!number} newLimit
         * @return {!QueryParams}
         */


        QueryParams.prototype.limit = function (newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = '';
          return newParams;
        };
        /**
         * @param {!number} newLimit
         * @return {!QueryParams}
         */


        QueryParams.prototype.limitToFirst = function (newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
          return newParams;
        };
        /**
         * @param {!number} newLimit
         * @return {!QueryParams}
         */


        QueryParams.prototype.limitToLast = function (newLimit) {
          var newParams = this.copy_();
          newParams.limitSet_ = true;
          newParams.limit_ = newLimit;
          newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT;
          return newParams;
        };
        /**
         * @param {*} indexValue
         * @param {?string=} key
         * @return {!QueryParams}
         */


        QueryParams.prototype.startAt = function (indexValue, key) {
          var newParams = this.copy_();
          newParams.startSet_ = true;

          if (indexValue === undefined) {
            indexValue = null;
          }

          newParams.indexStartValue_ = indexValue;

          if (key != null) {
            newParams.startNameSet_ = true;
            newParams.indexStartName_ = key;
          } else {
            newParams.startNameSet_ = false;
            newParams.indexStartName_ = '';
          }

          return newParams;
        };
        /**
         * @param {*} indexValue
         * @param {?string=} key
         * @return {!QueryParams}
         */


        QueryParams.prototype.endAt = function (indexValue, key) {
          var newParams = this.copy_();
          newParams.endSet_ = true;

          if (indexValue === undefined) {
            indexValue = null;
          }

          newParams.indexEndValue_ = indexValue;

          if (key !== undefined) {
            newParams.endNameSet_ = true;
            newParams.indexEndName_ = key;
          } else {
            newParams.endNameSet_ = false;
            newParams.indexEndName_ = '';
          }

          return newParams;
        };
        /**
         * @param {!Index} index
         * @return {!QueryParams}
         */


        QueryParams.prototype.orderBy = function (index) {
          var newParams = this.copy_();
          newParams.index_ = index;
          return newParams;
        };
        /**
         * @return {!Object}
         */


        QueryParams.prototype.getQueryObject = function () {
          var WIRE_PROTOCOL_CONSTANTS = QueryParams.WIRE_PROTOCOL_CONSTANTS_;
          var obj = {};

          if (this.startSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE] = this.indexStartValue_;

            if (this.startNameSet_) {
              obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME] = this.indexStartName_;
            }
          }

          if (this.endSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE] = this.indexEndValue_;

            if (this.endNameSet_) {
              obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME] = this.indexEndName_;
            }
          }

          if (this.limitSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.LIMIT] = this.limit_;
            var viewFrom = this.viewFrom_;

            if (viewFrom === '') {
              if (this.isViewFromLeft()) {
                viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT;
              } else {
                viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT;
              }
            }

            obj[WIRE_PROTOCOL_CONSTANTS.VIEW_FROM] = viewFrom;
          } // For now, priority index is the default, so we only specify if it's some other index


          if (this.index_ !== PRIORITY_INDEX) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX] = this.index_.toString();
          }

          return obj;
        };
        /**
         * @return {boolean}
         */


        QueryParams.prototype.loadsAllData = function () {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        };
        /**
         * @return {boolean}
         */


        QueryParams.prototype.isDefault = function () {
          return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
        };
        /**
         * @return {!NodeFilter}
         */


        QueryParams.prototype.getNodeFilter = function () {
          if (this.loadsAllData()) {
            return new IndexedFilter(this.getIndex());
          } else if (this.hasLimit()) {
            return new LimitedFilter(this);
          } else {
            return new RangedFilter(this);
          }
        };
        /**
         * Returns a set of REST query string parameters representing this query.
         *
         * @return {!Object.<string,*>} query string parameters
         */


        QueryParams.prototype.toRestQueryStringParameters = function () {
          var REST_CONSTANTS = QueryParams.REST_QUERY_CONSTANTS_;
          var qs = {};

          if (this.isDefault()) {
            return qs;
          }

          var orderBy;

          if (this.index_ === PRIORITY_INDEX) {
            orderBy = REST_CONSTANTS.PRIORITY_INDEX;
          } else if (this.index_ === VALUE_INDEX) {
            orderBy = REST_CONSTANTS.VALUE_INDEX;
          } else if (this.index_ === KEY_INDEX) {
            orderBy = REST_CONSTANTS.KEY_INDEX;
          } else {
            util.assert(this.index_ instanceof PathIndex, 'Unrecognized index type!');
            orderBy = this.index_.toString();
          }

          qs[REST_CONSTANTS.ORDER_BY] = util.stringify(orderBy);

          if (this.startSet_) {
            qs[REST_CONSTANTS.START_AT] = util.stringify(this.indexStartValue_);

            if (this.startNameSet_) {
              qs[REST_CONSTANTS.START_AT] += ',' + util.stringify(this.indexStartName_);
            }
          }

          if (this.endSet_) {
            qs[REST_CONSTANTS.END_AT] = util.stringify(this.indexEndValue_);

            if (this.endNameSet_) {
              qs[REST_CONSTANTS.END_AT] += ',' + util.stringify(this.indexEndName_);
            }
          }

          if (this.limitSet_) {
            if (this.isViewFromLeft()) {
              qs[REST_CONSTANTS.LIMIT_TO_FIRST] = this.limit_;
            } else {
              qs[REST_CONSTANTS.LIMIT_TO_LAST] = this.limit_;
            }
          }

          return qs;
        };
        /**
         * Wire Protocol Constants
         * @const
         * @enum {string}
         * @private
         */


        QueryParams.WIRE_PROTOCOL_CONSTANTS_ = {
          INDEX_START_VALUE: 'sp',
          INDEX_START_NAME: 'sn',
          INDEX_END_VALUE: 'ep',
          INDEX_END_NAME: 'en',
          LIMIT: 'l',
          VIEW_FROM: 'vf',
          VIEW_FROM_LEFT: 'l',
          VIEW_FROM_RIGHT: 'r',
          INDEX: 'i'
        };
        /**
         * REST Query Constants
         * @const
         * @enum {string}
         * @private
         */

        QueryParams.REST_QUERY_CONSTANTS_ = {
          ORDER_BY: 'orderBy',
          PRIORITY_INDEX: '$priority',
          VALUE_INDEX: '$value',
          KEY_INDEX: '$key',
          START_AT: 'startAt',
          END_AT: 'endAt',
          LIMIT_TO_FIRST: 'limitToFirst',
          LIMIT_TO_LAST: 'limitToLast'
        };
        /**
         * Default, empty query parameters
         * @type {!QueryParams}
         * @const
         */

        QueryParams.DEFAULT = new QueryParams();
        return QueryParams;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Reference =
      /** @class */
      function (_super) {
        tslib.__extends(Reference, _super);
        /**
         * Call options:
         *   new Reference(Repo, Path) or
         *   new Reference(url: string, string|RepoManager)
         *
         * Externally - this is the firebase.database.Reference type.
         *
         * @param {!Repo} repo
         * @param {(!Path)} path
         * @extends {Query}
         */


        function Reference(repo, path) {
          var _this = this;

          if (!(repo instanceof Repo)) {
            throw new Error('new Reference() no longer supported - use app.database().');
          } // call Query's constructor, passing in the repo and path.


          _this = _super.call(this, repo, path, QueryParams.DEFAULT, false) || this;
          return _this;
        }
        /** @return {?string} */


        Reference.prototype.getKey = function () {
          util.validateArgCount('Reference.key', 0, 0, arguments.length);

          if (this.path.isEmpty()) {
            return null;
          } else {
            return this.path.getBack();
          }
        };
        /**
         * @param {!(string|Path)} pathString
         * @return {!Reference}
         */


        Reference.prototype.child = function (pathString) {
          util.validateArgCount('Reference.child', 1, 1, arguments.length);

          if (typeof pathString === 'number') {
            pathString = String(pathString);
          } else if (!(pathString instanceof Path)) {
            if (this.path.getFront() === null) {
              validateRootPathString('Reference.child', 1, pathString, false);
            } else {
              validatePathString('Reference.child', 1, pathString, false);
            }
          }

          return new Reference(this.repo, this.path.child(pathString));
        };
        /** @return {?Reference} */


        Reference.prototype.getParent = function () {
          util.validateArgCount('Reference.parent', 0, 0, arguments.length);
          var parentPath = this.path.parent();
          return parentPath === null ? null : new Reference(this.repo, parentPath);
        };
        /** @return {!Reference} */


        Reference.prototype.getRoot = function () {
          util.validateArgCount('Reference.root', 0, 0, arguments.length);
          var ref = this;

          while (ref.getParent() !== null) {
            ref = ref.getParent();
          }

          return ref;
        };
        /** @return {!Database} */


        Reference.prototype.databaseProp = function () {
          return this.repo.database;
        };
        /**
         * @param {*} newVal
         * @param {function(?Error)=} onComplete
         * @return {!Promise}
         */


        Reference.prototype.set = function (newVal, onComplete) {
          util.validateArgCount('Reference.set', 1, 2, arguments.length);
          validateWritablePath('Reference.set', this.path);
          validateFirebaseDataArg('Reference.set', 1, newVal, this.path, false);
          util.validateCallback('Reference.set', 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path, newVal,
          /*priority=*/
          null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {!Object} objectToMerge
         * @param {function(?Error)=} onComplete
         * @return {!Promise}
         */


        Reference.prototype.update = function (objectToMerge, onComplete) {
          util.validateArgCount('Reference.update', 1, 2, arguments.length);
          validateWritablePath('Reference.update', this.path);

          if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};

            for (var i = 0; i < objectToMerge.length; ++i) {
              newObjectToMerge['' + i] = objectToMerge[i];
            }

            objectToMerge = newObjectToMerge;
            warn('Passing an Array to Firebase.update() is deprecated. ' + 'Use set() if you want to overwrite the existing data, or ' + 'an Object with integer keys if you really do want to ' + 'only update some of the children.');
          }

          validateFirebaseMergeDataArg('Reference.update', 1, objectToMerge, this.path, false);
          util.validateCallback('Reference.update', 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.update(this.path, objectToMerge, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {*} newVal
         * @param {string|number|null} newPriority
         * @param {function(?Error)=} onComplete
         * @return {!Promise}
         */


        Reference.prototype.setWithPriority = function (newVal, newPriority, onComplete) {
          util.validateArgCount('Reference.setWithPriority', 2, 3, arguments.length);
          validateWritablePath('Reference.setWithPriority', this.path);
          validateFirebaseDataArg('Reference.setWithPriority', 1, newVal, this.path, false);
          validatePriority('Reference.setWithPriority', 2, newPriority, false);
          util.validateCallback('Reference.setWithPriority', 3, onComplete, true);

          if (this.getKey() === '.length' || this.getKey() === '.keys') {
            throw 'Reference.setWithPriority failed: ' + this.getKey() + ' is a read-only object.';
          }

          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path, newVal, newPriority, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {function(?Error)=} onComplete
         * @return {!Promise}
         */


        Reference.prototype.remove = function (onComplete) {
          util.validateArgCount('Reference.remove', 0, 1, arguments.length);
          validateWritablePath('Reference.remove', this.path);
          util.validateCallback('Reference.remove', 1, onComplete, true);
          return this.set(null, onComplete);
        };
        /**
         * @param {function(*):*} transactionUpdate
         * @param {(function(?Error, boolean, ?DataSnapshot))=} onComplete
         * @param {boolean=} applyLocally
         * @return {!Promise}
         */


        Reference.prototype.transaction = function (transactionUpdate, onComplete, applyLocally) {
          util.validateArgCount('Reference.transaction', 1, 3, arguments.length);
          validateWritablePath('Reference.transaction', this.path);
          util.validateCallback('Reference.transaction', 1, transactionUpdate, false);
          util.validateCallback('Reference.transaction', 2, onComplete, true); // NOTE: applyLocally is an internal-only option for now.  We need to decide if we want to keep it and how
          // to expose it.

          validateBoolean('Reference.transaction', 3, applyLocally, true);

          if (this.getKey() === '.length' || this.getKey() === '.keys') {
            throw 'Reference.transaction failed: ' + this.getKey() + ' is a read-only object.';
          }

          if (applyLocally === undefined) {
            applyLocally = true;
          }

          var deferred = new util.Deferred();

          if (typeof onComplete === 'function') {
            deferred.promise["catch"](function () {});
          }

          var promiseComplete = function promiseComplete(error, committed, snapshot) {
            if (error) {
              deferred.reject(error);
            } else {
              deferred.resolve(new TransactionResult(committed, snapshot));
            }

            if (typeof onComplete === 'function') {
              onComplete(error, committed, snapshot);
            }
          };

          this.repo.startTransaction(this.path, transactionUpdate, promiseComplete, applyLocally);
          return deferred.promise;
        };
        /**
         * @param {string|number|null} priority
         * @param {function(?Error)=} onComplete
         * @return {!Promise}
         */


        Reference.prototype.setPriority = function (priority, onComplete) {
          util.validateArgCount('Reference.setPriority', 1, 2, arguments.length);
          validateWritablePath('Reference.setPriority', this.path);
          validatePriority('Reference.setPriority', 1, priority, false);
          util.validateCallback('Reference.setPriority', 2, onComplete, true);
          var deferred = new util.Deferred();
          this.repo.setWithPriority(this.path.child('.priority'), priority, null, deferred.wrapCallback(onComplete));
          return deferred.promise;
        };
        /**
         * @param {*=} value
         * @param {function(?Error)=} onComplete
         * @return {!Reference}
         */


        Reference.prototype.push = function (value, onComplete) {
          util.validateArgCount('Reference.push', 0, 2, arguments.length);
          validateWritablePath('Reference.push', this.path);
          validateFirebaseDataArg('Reference.push', 1, value, this.path, true);
          util.validateCallback('Reference.push', 2, onComplete, true);
          var now = this.repo.serverTime();
          var name = nextPushId(now); // push() returns a ThennableReference whose promise is fulfilled with a regular Reference.
          // We use child() to create handles to two different references. The first is turned into a
          // ThennableReference below by adding then() and catch() methods and is used as the
          // return value of push(). The second remains a regular Reference and is used as the fulfilled
          // value of the first ThennableReference.

          var thennablePushRef = this.child(name);
          var pushRef = this.child(name);
          var promise;

          if (value != null) {
            promise = thennablePushRef.set(value, onComplete).then(function () {
              return pushRef;
            });
          } else {
            promise = Promise.resolve(pushRef);
          }

          thennablePushRef.then = promise.then.bind(promise);
          thennablePushRef["catch"] = promise.then.bind(promise, undefined);

          if (typeof onComplete === 'function') {
            promise["catch"](function () {});
          }

          return thennablePushRef;
        };
        /**
         * @return {!OnDisconnect}
         */


        Reference.prototype.onDisconnect = function () {
          validateWritablePath('Reference.onDisconnect', this.path);
          return new OnDisconnect(this.repo, this.path);
        };

        Object.defineProperty(Reference.prototype, "database", {
          get: function get() {
            return this.databaseProp();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "key", {
          get: function get() {
            return this.getKey();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "parent", {
          get: function get() {
            return this.getParent();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "root", {
          get: function get() {
            return this.getRoot();
          },
          enumerable: false,
          configurable: true
        });
        return Reference;
      }(Query);
      /**
       * Define reference constructor in various modules
       *
       * We are doing this here to avoid several circular
       * dependency issues
       */


      Query.__referenceConstructor = Reference;
      SyncPoint.__referenceConstructor = Reference;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Node in a Tree.
       */

      var TreeNode =
      /** @class */
      function () {
        function TreeNode() {
          // TODO: Consider making accessors that create children and value lazily or
          // separate Internal / Leaf 'types'.
          this.children = {};
          this.childCount = 0;
          this.value = null;
        }

        return TreeNode;
      }();
      /**
       * A light-weight tree, traversable by path.  Nodes can have both values and children.
       * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
       * children.
       */


      var Tree =
      /** @class */
      function () {
        /**
         * @template T
         * @param {string=} name_ Optional name of the node.
         * @param {Tree=} parent_ Optional parent node.
         * @param {TreeNode=} node_ Optional node to wrap.
         */
        function Tree(name_, parent_, node_) {
          if (name_ === void 0) {
            name_ = '';
          }

          if (parent_ === void 0) {
            parent_ = null;
          }

          if (node_ === void 0) {
            node_ = new TreeNode();
          }

          this.name_ = name_;
          this.parent_ = parent_;
          this.node_ = node_;
        }
        /**
         * Returns a sub-Tree for the given path.
         *
         * @param {!(string|Path)} pathObj Path to look up.
         * @return {!Tree.<T>} Tree for path.
         */


        Tree.prototype.subTree = function (pathObj) {
          // TODO: Require pathObj to be Path?
          var path = pathObj instanceof Path ? pathObj : new Path(pathObj);
          var child = this,
              next = path.getFront();

          while (next !== null) {
            var childNode = util.safeGet(child.node_.children, next) || new TreeNode();
            child = new Tree(next, child, childNode);
            path = path.popFront();
            next = path.getFront();
          }

          return child;
        };
        /**
         * Returns the data associated with this tree node.
         *
         * @return {?T} The data or null if no data exists.
         */


        Tree.prototype.getValue = function () {
          return this.node_.value;
        };
        /**
         * Sets data to this tree node.
         *
         * @param {!T} value Value to set.
         */


        Tree.prototype.setValue = function (value) {
          util.assert(typeof value !== 'undefined', 'Cannot set value to undefined');
          this.node_.value = value;
          this.updateParents_();
        };
        /**
         * Clears the contents of the tree node (its value and all children).
         */


        Tree.prototype.clear = function () {
          this.node_.value = null;
          this.node_.children = {};
          this.node_.childCount = 0;
          this.updateParents_();
        };
        /**
         * @return {boolean} Whether the tree has any children.
         */


        Tree.prototype.hasChildren = function () {
          return this.node_.childCount > 0;
        };
        /**
         * @return {boolean} Whether the tree is empty (no value or children).
         */


        Tree.prototype.isEmpty = function () {
          return this.getValue() === null && !this.hasChildren();
        };
        /**
         * Calls action for each child of this tree node.
         *
         * @param {function(!Tree.<T>)} action Action to be called for each child.
         */


        Tree.prototype.forEachChild = function (action) {
          var _this = this;

          each(this.node_.children, function (child, childTree) {
            action(new Tree(child, _this, childTree));
          });
        };
        /**
         * Does a depth-first traversal of this node's descendants, calling action for each one.
         *
         * @param {function(!Tree.<T>)} action Action to be called for each child.
         * @param {boolean=} includeSelf Whether to call action on this node as well. Defaults to
         *   false.
         * @param {boolean=} childrenFirst Whether to call action on children before calling it on
         *   parent.
         */


        Tree.prototype.forEachDescendant = function (action, includeSelf, childrenFirst) {
          if (includeSelf && !childrenFirst) {
            action(this);
          }

          this.forEachChild(function (child) {
            child.forEachDescendant(action,
            /*includeSelf=*/
            true, childrenFirst);
          });

          if (includeSelf && childrenFirst) {
            action(this);
          }
        };
        /**
         * Calls action on each ancestor node.
         *
         * @param {function(!Tree.<T>)} action Action to be called on each parent; return
         *   true to abort.
         * @param {boolean=} includeSelf Whether to call action on this node as well.
         * @return {boolean} true if the action callback returned true.
         */


        Tree.prototype.forEachAncestor = function (action, includeSelf) {
          var node = includeSelf ? this : this.parent();

          while (node !== null) {
            if (action(node)) {
              return true;
            }

            node = node.parent();
          }

          return false;
        };
        /**
         * Does a depth-first traversal of this node's descendants.  When a descendant with a value
         * is found, action is called on it and traversal does not continue inside the node.
         * Action is *not* called on this node.
         *
         * @param {function(!Tree.<T>)} action Action to be called for each child.
         */


        Tree.prototype.forEachImmediateDescendantWithValue = function (action) {
          this.forEachChild(function (child) {
            if (child.getValue() !== null) {
              action(child);
            } else {
              child.forEachImmediateDescendantWithValue(action);
            }
          });
        };
        /**
         * @return {!Path} The path of this tree node, as a Path.
         */


        Tree.prototype.path = function () {
          return new Path(this.parent_ === null ? this.name_ : this.parent_.path() + '/' + this.name_);
        };
        /**
         * @return {string} The name of the tree node.
         */


        Tree.prototype.name = function () {
          return this.name_;
        };
        /**
         * @return {?Tree} The parent tree node, or null if this is the root of the tree.
         */


        Tree.prototype.parent = function () {
          return this.parent_;
        };
        /**
         * Adds or removes this child from its parent based on whether it's empty or not.
         *
         * @private
         */


        Tree.prototype.updateParents_ = function () {
          if (this.parent_ !== null) {
            this.parent_.updateChild_(this.name_, this);
          }
        };
        /**
         * Adds or removes the passed child to this tree node, depending on whether it's empty.
         *
         * @param {string} childName The name of the child to update.
         * @param {!Tree.<T>} child The child to update.
         * @private
         */


        Tree.prototype.updateChild_ = function (childName, child) {
          var childEmpty = child.isEmpty();
          var childExists = util.contains(this.node_.children, childName);

          if (childEmpty && childExists) {
            delete this.node_.children[childName];
            this.node_.childCount--;
            this.updateParents_();
          } else if (!childEmpty && !childExists) {
            this.node_.children[childName] = child.node_;
            this.node_.childCount++;
            this.updateParents_();
          }
        };

        return Tree;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // TODO: This is pretty messy.  Ideally, a lot of this would move into FirebaseData, or a transaction-specific
      // component used by FirebaseData, but it has ties to user callbacks (transaction update and onComplete) as well
      // as the realtime connection (to send transactions to the server).  So that all needs to be decoupled first.
      // For now it's part of Repo, but in its own file.

      /**
       * @enum {number}
       */


      var TransactionStatus;

      (function (TransactionStatus) {
        // We've run the transaction and updated transactionResultData_ with the result, but it isn't currently sent to the
        // server. A transaction will go from RUN -> SENT -> RUN if it comes back from the server as rejected due to
        // mismatched hash.
        TransactionStatus[TransactionStatus["RUN"] = 0] = "RUN"; // We've run the transaction and sent it to the server and it's currently outstanding (hasn't come back as accepted
        // or rejected yet).

        TransactionStatus[TransactionStatus["SENT"] = 1] = "SENT"; // Temporary state used to mark completed transactions (whether successful or aborted).  The transaction will be
        // removed when we get a chance to prune completed ones.

        TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED"; // Used when an already-sent transaction needs to be aborted (e.g. due to a conflicting set() call that was made).
        // If it comes back as unsuccessful, we'll abort it.

        TransactionStatus[TransactionStatus["SENT_NEEDS_ABORT"] = 3] = "SENT_NEEDS_ABORT"; // Temporary state used to mark transactions that need to be aborted.

        TransactionStatus[TransactionStatus["NEEDS_ABORT"] = 4] = "NEEDS_ABORT";
      })(TransactionStatus || (TransactionStatus = {}));
      /**
       * If a transaction does not succeed after 25 retries, we abort it.  Among other things this ensure that if there's
       * ever a bug causing a mismatch between client / server hashes for some data, we won't retry indefinitely.
       * @type {number}
       * @const
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.MAX_TRANSACTION_RETRIES_ = 25;
      /**
       * Setup the transaction data structures
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      Repo.prototype.transactionsInit_ = function () {
        /**
         * Stores queues of outstanding transactions for Firebase locations.
         *
         * @type {!Tree.<Array.<!Transaction>>}
         * @private
         */
        this.transactionQueueTree_ = new Tree();
      };
      /**
       * Creates a new transaction, adds it to the transactions we're tracking, and sends it to the server if possible.
       *
       * @param {!Path} path Path at which to do transaction.
       * @param {function(*):*} transactionUpdate Update callback.
       * @param {?function(?Error, boolean, ?DataSnapshot)} onComplete Completion callback.
       * @param {boolean} applyLocally Whether or not to make intermediate results visible
       */


      Repo.prototype.startTransaction = function (path, transactionUpdate, onComplete, applyLocally) {
        this.log_('transaction on ' + path); // Add a watch to make sure we get server updates.

        var valueCallback = function valueCallback() {};

        var watchRef = new Reference(this, path);
        watchRef.on('value', valueCallback);

        var unwatcher = function unwatcher() {
          watchRef.off('value', valueCallback);
        }; // Initialize transaction.


        var transaction = {
          path: path,
          update: transactionUpdate,
          onComplete: onComplete,
          // One of TransactionStatus enums.
          status: null,
          // Used when combining transactions at different locations to figure out which one goes first.
          order: LUIDGenerator(),
          // Whether to raise local events for this transaction.
          applyLocally: applyLocally,
          // Count of how many times we've retried the transaction.
          retryCount: 0,
          // Function to call to clean up our .on() listener.
          unwatcher: unwatcher,
          // Stores why a transaction was aborted.
          abortReason: null,
          currentWriteId: null,
          currentInputSnapshot: null,
          currentOutputSnapshotRaw: null,
          currentOutputSnapshotResolved: null
        }; // Run transaction initially.

        var currentState = this.getLatestState_(path);
        transaction.currentInputSnapshot = currentState;
        var newVal = transaction.update(currentState.val());

        if (newVal === undefined) {
          // Abort transaction.
          transaction.unwatcher();
          transaction.currentOutputSnapshotRaw = null;
          transaction.currentOutputSnapshotResolved = null;

          if (transaction.onComplete) {
            // We just set the input snapshot, so this cast should be safe
            var snapshot = new DataSnapshot(transaction.currentInputSnapshot, new Reference(this, transaction.path), PRIORITY_INDEX);
            transaction.onComplete(null, false, snapshot);
          }
        } else {
          validateFirebaseData('transaction failed: Data returned ', newVal, transaction.path); // Mark as run and add to our queue.

          transaction.status = TransactionStatus.RUN;
          var queueNode = this.transactionQueueTree_.subTree(path);
          var nodeQueue = queueNode.getValue() || [];
          nodeQueue.push(transaction);
          queueNode.setValue(nodeQueue); // Update visibleData and raise events
          // Note: We intentionally raise events after updating all of our transaction state, since the user could
          // start new transactions from the event callbacks.

          var priorityForNode = void 0;

          if (typeof newVal === 'object' && newVal !== null && util.contains(newVal, '.priority')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            priorityForNode = util.safeGet(newVal, '.priority');
            util.assert(isValidPriority(priorityForNode), 'Invalid priority returned by transaction. ' + 'Priority must be a valid string, finite number, server value, or null.');
          } else {
            var currentNode = this.serverSyncTree_.calcCompleteEventCache(path) || ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
          }

          priorityForNode
          /** @type {null|number|string} */
          = priorityForNode;
          var serverValues = this.generateServerValues();
          var newNodeUnresolved = nodeFromJSON$1(newVal, priorityForNode);
          var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
          transaction.currentOutputSnapshotRaw = newNodeUnresolved;
          transaction.currentOutputSnapshotResolved = newNode;
          transaction.currentWriteId = this.getNextWriteId_();
          var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, transaction.currentWriteId, transaction.applyLocally);
          this.eventQueue_.raiseEventsForChangedPath(path, events);
          this.sendReadyTransactions_();
        }
      };
      /**
       * @param {!Path} path
       * @param {Array.<number>=} excludeSets A specific set to exclude
       * @return {Node}
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.getLatestState_ = function (path, excludeSets) {
        return this.serverSyncTree_.calcCompleteEventCache(path, excludeSets) || ChildrenNode.EMPTY_NODE;
      };
      /**
       * Sends any already-run transactions that aren't waiting for outstanding transactions to
       * complete.
       *
       * Externally it's called with no arguments, but it calls itself recursively with a particular
       * transactionQueueTree node to recurse through the tree.
       *
       * @param {Tree.<Array.<Transaction>>=} node  transactionQueueTree node to start at.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.sendReadyTransactions_ = function (node) {
        var _this = this;

        if (node === void 0) {
          node = this.transactionQueueTree_;
        } // Before recursing, make sure any completed transactions are removed.


        if (!node) {
          this.pruneCompletedTransactionsBelowNode_(node);
        }

        if (node.getValue() !== null) {
          var queue = this.buildTransactionQueue_(node);
          util.assert(queue.length > 0, 'Sending zero length transaction queue');
          var allRun = queue.every(function (transaction) {
            return transaction.status === TransactionStatus.RUN;
          }); // If they're all run (and not sent), we can send them.  Else, we must wait.

          if (allRun) {
            this.sendTransactionQueue_(node.path(), queue);
          }
        } else if (node.hasChildren()) {
          node.forEachChild(function (childNode) {
            _this.sendReadyTransactions_(childNode);
          });
        }
      };
      /**
       * Given a list of run transactions, send them to the server and then handle the result (success or failure).
       *
       * @param {!Path} path The location of the queue.
       * @param {!Array.<Transaction>} queue Queue of transactions under the specified location.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.sendTransactionQueue_ = function (path, queue) {
        var _this = this; // Mark transactions as sent and increment retry count!


        var setsToIgnore = queue.map(function (txn) {
          return txn.currentWriteId;
        });
        var latestState = this.getLatestState_(path, setsToIgnore);
        var snapToSend = latestState;
        var latestHash = latestState.hash();

        for (var i = 0; i < queue.length; i++) {
          var txn = queue[i];
          util.assert(txn.status === TransactionStatus.RUN, 'tryToSendTransactionQueue_: items in queue should all be run.');
          txn.status = TransactionStatus.SENT;
          txn.retryCount++;
          var relativePath = Path.relativePath(path, txn.path); // If we've gotten to this point, the output snapshot must be defined.

          snapToSend = snapToSend.updateChild(relativePath
          /** @type {!Node} */
          , txn.currentOutputSnapshotRaw);
        }

        var dataToSend = snapToSend.val(true);
        var pathToSend = path; // Send the put.

        this.server_.put(pathToSend.toString(), dataToSend, function (status) {
          _this.log_('transaction put response', {
            path: pathToSend.toString(),
            status: status
          });

          var events = [];

          if (status === 'ok') {
            // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
            // the callback could trigger more transactions or sets.
            var callbacks = [];

            for (var i = 0; i < queue.length; i++) {
              queue[i].status = TransactionStatus.COMPLETED;
              events = events.concat(_this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId));

              if (queue[i].onComplete) {
                // We never unset the output snapshot, and given that this transaction is complete, it should be set
                var node = queue[i].currentOutputSnapshotResolved;
                var ref = new Reference(_this, queue[i].path);
                var snapshot = new DataSnapshot(node, ref, PRIORITY_INDEX);
                callbacks.push(queue[i].onComplete.bind(null, null, true, snapshot));
              }

              queue[i].unwatcher();
            } // Now remove the completed transactions.


            _this.pruneCompletedTransactionsBelowNode_(_this.transactionQueueTree_.subTree(path)); // There may be pending transactions that we can now send.


            _this.sendReadyTransactions_();

            _this.eventQueue_.raiseEventsForChangedPath(path, events); // Finally, trigger onComplete callbacks.


            for (var i = 0; i < callbacks.length; i++) {
              exceptionGuard(callbacks[i]);
            }
          } else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === 'datastale') {
              for (var i = 0; i < queue.length; i++) {
                if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) {
                  queue[i].status = TransactionStatus.NEEDS_ABORT;
                } else {
                  queue[i].status = TransactionStatus.RUN;
                }
              }
            } else {
              warn('transaction at ' + pathToSend.toString() + ' failed: ' + status);

              for (var i = 0; i < queue.length; i++) {
                queue[i].status = TransactionStatus.NEEDS_ABORT;
                queue[i].abortReason = status;
              }
            }

            _this.rerunTransactions_(path);
          }
        }, latestHash);
      };
      /**
       * Finds all transactions dependent on the data at changedPath and reruns them.
       *
       * Should be called any time cached data changes.
       *
       * Return the highest path that was affected by rerunning transactions.  This is the path at which events need to
       * be raised for.
       *
       * @param {!Path} changedPath The path in mergedData that changed.
       * @return {!Path} The rootmost path that was affected by rerunning transactions.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.rerunTransactions_ = function (changedPath) {
        var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
        var path = rootMostTransactionNode.path();
        var queue = this.buildTransactionQueue_(rootMostTransactionNode);
        this.rerunTransactionQueue_(queue, path);
        return path;
      };
      /**
       * Does all the work of rerunning transactions (as well as cleans up aborted transactions and whatnot).
       *
       * @param {Array.<Transaction>} queue The queue of transactions to run.
       * @param {!Path} path The path the queue is for.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.rerunTransactionQueue_ = function (queue, path) {
        if (queue.length === 0) {
          return; // Nothing to do!
        } // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
        // the callback could trigger more transactions or sets.


        var callbacks = [];
        var events = []; // Ignore all of the sets we're going to re-run.

        var txnsToRerun = queue.filter(function (q) {
          return q.status === TransactionStatus.RUN;
        });
        var setsToIgnore = txnsToRerun.map(function (q) {
          return q.currentWriteId;
        });

        for (var i = 0; i < queue.length; i++) {
          var transaction = queue[i];
          var relativePath = Path.relativePath(path, transaction.path);
          var abortTransaction = false,
              abortReason = void 0;
          util.assert(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');

          if (transaction.status === TransactionStatus.NEEDS_ABORT) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
          } else if (transaction.status === TransactionStatus.RUN) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (transaction.retryCount >= Repo.MAX_TRANSACTION_RETRIES_) {
              abortTransaction = true;
              abortReason = 'maxretry';
              events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
            } else {
              // This code reruns a transaction
              var currentNode = this.getLatestState_(transaction.path, setsToIgnore);
              transaction.currentInputSnapshot = currentNode;
              var newData = queue[i].update(currentNode.val());

              if (newData !== undefined) {
                validateFirebaseData('transaction failed: Data returned ', newData, transaction.path);
                var newDataNode = nodeFromJSON$1(newData);
                var hasExplicitPriority = typeof newData === 'object' && newData != null && util.contains(newData, '.priority');

                if (!hasExplicitPriority) {
                  // Keep the old priority if there wasn't a priority explicitly specified.
                  newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                }

                var oldWriteId = transaction.currentWriteId;
                var serverValues = this.generateServerValues();
                var newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
                transaction.currentOutputSnapshotRaw = newDataNode;
                transaction.currentOutputSnapshotResolved = newNodeResolved;
                transaction.currentWriteId = this.getNextWriteId_(); // Mutates setsToIgnore in place

                setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                events = events.concat(this.serverSyncTree_.applyUserOverwrite(transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                events = events.concat(this.serverSyncTree_.ackUserWrite(oldWriteId, true));
              } else {
                abortTransaction = true;
                abortReason = 'nodata';
                events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
              }
            }
          }

          this.eventQueue_.raiseEventsForChangedPath(path, events);
          events = [];

          if (abortTransaction) {
            // Abort.
            queue[i].status = TransactionStatus.COMPLETED; // Removing a listener can trigger pruning which can muck with mergedData/visibleData (as it prunes data).
            // So defer the unwatcher until we're done.

            (function (unwatcher) {
              setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);

            if (queue[i].onComplete) {
              if (abortReason === 'nodata') {
                var ref = new Reference(this, queue[i].path); // We set this field immediately, so it's safe to cast to an actual snapshot

                var lastInput
                /** @type {!Node} */
                = queue[i].currentInputSnapshot;
                var snapshot = new DataSnapshot(lastInput, ref, PRIORITY_INDEX);
                callbacks.push(queue[i].onComplete.bind(null, null, false, snapshot));
              } else {
                callbacks.push(queue[i].onComplete.bind(null, new Error(abortReason), false, null));
              }
            }
          }
        } // Clean up completed transactions.


        this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_); // Now fire callbacks, now that we're in a good, known state.

        for (var i = 0; i < callbacks.length; i++) {
          exceptionGuard(callbacks[i]);
        } // Try to send the transaction result to the server.


        this.sendReadyTransactions_();
      };
      /**
       * Returns the rootmost ancestor node of the specified path that has a pending transaction on it, or just returns
       * the node for the given path if there are no pending transactions on any ancestor.
       *
       * @param {!Path} path The location to start at.
       * @return {!Tree.<Array.<!Transaction>>} The rootmost node with a transaction.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.getAncestorTransactionNode_ = function (path) {
        var front; // Start at the root and walk deeper into the tree towards path until we find a node with pending transactions.

        var transactionNode = this.transactionQueueTree_;
        front = path.getFront();

        while (front !== null && transactionNode.getValue() === null) {
          transactionNode = transactionNode.subTree(front);
          path = path.popFront();
          front = path.getFront();
        }

        return transactionNode;
      };
      /**
       * Builds the queue of all transactions at or below the specified transactionNode.
       *
       * @param {!Tree.<Array.<Transaction>>} transactionNode
       * @return {Array.<Transaction>} The generated queue.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.buildTransactionQueue_ = function (transactionNode) {
        // Walk any child transaction queues and aggregate them into a single queue.
        var transactionQueue = [];
        this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue); // Sort them by the order the transactions were created.

        transactionQueue.sort(function (a, b) {
          return a.order - b.order;
        });
        return transactionQueue;
      };
      /**
       * @param {!Tree.<Array.<Transaction>>} node
       * @param {Array.<Transaction>} queue
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.aggregateTransactionQueuesForNode_ = function (node, queue) {
        var _this = this;

        var nodeQueue = node.getValue();

        if (nodeQueue !== null) {
          for (var i = 0; i < nodeQueue.length; i++) {
            queue.push(nodeQueue[i]);
          }
        }

        node.forEachChild(function (child) {
          _this.aggregateTransactionQueuesForNode_(child, queue);
        });
      };
      /**
       * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
       *
       * @param {!Tree.<Array.<!Transaction>>} node
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.pruneCompletedTransactionsBelowNode_ = function (node) {
        var _this = this;

        var queue = node.getValue();

        if (queue) {
          var to = 0;

          for (var from = 0; from < queue.length; from++) {
            if (queue[from].status !== TransactionStatus.COMPLETED) {
              queue[to] = queue[from];
              to++;
            }
          }

          queue.length = to;
          node.setValue(queue.length > 0 ? queue : null);
        }

        node.forEachChild(function (childNode) {
          _this.pruneCompletedTransactionsBelowNode_(childNode);
        });
      };
      /**
       * Aborts all transactions on ancestors or descendants of the specified path.  Called when doing a set() or update()
       * since we consider them incompatible with transactions.
       *
       * @param {!Path} path Path for which we want to abort related transactions.
       * @return {!Path}
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.abortTransactions_ = function (path) {
        var _this = this;

        var affectedPath = this.getAncestorTransactionNode_(path).path();
        var transactionNode = this.transactionQueueTree_.subTree(path);
        transactionNode.forEachAncestor(function (node) {
          _this.abortTransactionsOnNode_(node);
        });
        this.abortTransactionsOnNode_(transactionNode);
        transactionNode.forEachDescendant(function (node) {
          _this.abortTransactionsOnNode_(node);
        });
        return affectedPath;
      };
      /**
       * Abort transactions stored in this transaction queue node.
       *
       * @param {!Tree.<Array.<Transaction>>} node Node to abort transactions for.
       * @private
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      Repo.prototype.abortTransactionsOnNode_ = function (node) {
        var queue = node.getValue();

        if (queue !== null) {
          // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
          // the callback could trigger more transactions or sets.
          var callbacks = []; // Go through queue.  Any already-sent transactions must be marked for abort, while the unsent ones
          // can be immediately aborted and removed.

          var events = [];
          var lastSent = -1;

          for (var i = 0; i < queue.length; i++) {
            if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) ;else if (queue[i].status === TransactionStatus.SENT) {
              util.assert(lastSent === i - 1, 'All SENT items should be at beginning of queue.');
              lastSent = i; // Mark transaction for abort when it comes back.

              queue[i].status = TransactionStatus.SENT_NEEDS_ABORT;
              queue[i].abortReason = 'set';
            } else {
              util.assert(queue[i].status === TransactionStatus.RUN, 'Unexpected transaction status in abort'); // We can abort it immediately.

              queue[i].unwatcher();
              events = events.concat(this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId, true));

              if (queue[i].onComplete) {
                var snapshot = null;
                callbacks.push(queue[i].onComplete.bind(null, new Error('set'), false, snapshot));
              }
            }
          }

          if (lastSent === -1) {
            // We're not waiting for any sent transactions.  We can clear the queue.
            node.setValue(null);
          } else {
            // Remove the transactions we aborted.
            queue.length = lastSent + 1;
          } // Now fire the callbacks.


          this.eventQueue_.raiseEventsForChangedPath(node.path(), events);

          for (var i = 0; i < callbacks.length; i++) {
            exceptionGuard(callbacks[i]);
          }
        }
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Abstraction around FirebaseApp's token fetching capabilities.
       */


      var FirebaseAuthTokenProvider =
      /** @class */
      function () {
        function FirebaseAuthTokenProvider(app_, authProvider_) {
          var _this = this;

          this.app_ = app_;
          this.authProvider_ = authProvider_;
          this.auth_ = null;
          this.auth_ = authProvider_.getImmediate({
            optional: true
          });

          if (!this.auth_) {
            authProvider_.get().then(function (auth) {
              return _this.auth_ = auth;
            });
          }
        }
        /**
         * @param {boolean} forceRefresh
         * @return {!Promise<FirebaseAuthTokenData>}
         */


        FirebaseAuthTokenProvider.prototype.getToken = function (forceRefresh) {
          if (!this.auth_) {
            return Promise.resolve(null);
          }

          return this.auth_.getToken(forceRefresh)["catch"](function (error) {
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error && error.code === 'auth/token-not-initialized') {
              log('Got auth/token-not-initialized error.  Treating as null token.');
              return null;
            } else {
              return Promise.reject(error);
            }
          });
        };

        FirebaseAuthTokenProvider.prototype.addTokenChangeListener = function (listener) {
          // TODO: We might want to wrap the listener and call it with no args to
          // avoid a leaky abstraction, but that makes removing the listener harder.
          if (this.auth_) {
            this.auth_.addAuthTokenListener(listener);
          } else {
            setTimeout(function () {
              return listener(null);
            }, 0);
            this.authProvider_.get().then(function (auth) {
              return auth.addAuthTokenListener(listener);
            });
          }
        };

        FirebaseAuthTokenProvider.prototype.removeTokenChangeListener = function (listener) {
          this.authProvider_.get().then(function (auth) {
            return auth.removeAuthTokenListener(listener);
          });
        };

        FirebaseAuthTokenProvider.prototype.notifyForInvalidToken = function () {
          var errorMessage = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not ' + 'initialized correctly. ';

          if ('credential' in this.app_.options) {
            errorMessage += 'Make sure the "credential" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
          } else if ('serviceAccount' in this.app_.options) {
            errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() ' + 'is authorized to access the specified "databaseURL" and is from the correct ' + 'project.';
          } else {
            errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to ' + 'initializeApp() match the values provided for your app at ' + 'https://console.firebase.google.com/.';
          }

          warn(errorMessage);
        };

        return FirebaseAuthTokenProvider;
      }();
      /* Auth token provider that the Admin SDK uses to connect to the Emulator. */


      var EmulatorAdminTokenProvider =
      /** @class */
      function () {
        function EmulatorAdminTokenProvider() {}

        EmulatorAdminTokenProvider.prototype.getToken = function (forceRefresh) {
          return Promise.resolve({
            accessToken: EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN
          });
        };

        EmulatorAdminTokenProvider.prototype.addTokenChangeListener = function (listener) {
          // Invoke the listener immediately to match the behavior in Firebase Auth
          // (see packages/auth/src/auth.js#L1807)
          listener(EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN);
        };

        EmulatorAdminTokenProvider.prototype.removeTokenChangeListener = function (listener) {};

        EmulatorAdminTokenProvider.prototype.notifyForInvalidToken = function () {};

        EmulatorAdminTokenProvider.EMULATOR_AUTH_TOKEN = 'owner';
        return EmulatorAdminTokenProvider;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** @const {string} */


      var DATABASE_URL_OPTION = 'databaseURL';
      /**
       * This variable is also defined in the firebase node.js admin SDK. Before
       * modifying this definition, consult the definition in:
       *
       * https://github.com/firebase/firebase-admin-node
       *
       * and make sure the two are consistent.
       */

      var FIREBASE_DATABASE_EMULATOR_HOST_VAR = 'FIREBASE_DATABASE_EMULATOR_HOST';

      var _staticInstance;
      /**
       * Creates and caches Repo instances.
       */


      var RepoManager =
      /** @class */
      function () {
        function RepoManager() {
          /**
           * @private {!Object.<string, Object<string, !fb.core.Repo>>}
           */
          this.repos_ = {};
          /**
           * If true, new Repos will be created to use ReadonlyRestClient (for testing purposes).
           * @private {boolean}
           */

          this.useRestClient_ = false;
        }

        RepoManager.getInstance = function () {
          if (!_staticInstance) {
            _staticInstance = new RepoManager();
          }

          return _staticInstance;
        }; // TODO(koss): Remove these functions unless used in tests?


        RepoManager.prototype.interrupt = function () {
          var e_1, _a, e_2, _b;

          try {
            for (var _c = tslib.__values(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var appName = _d.value;

              try {
                for (var _e = (e_2 = void 0, tslib.__values(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var dbUrl = _f.value;
                  this.repos_[appName][dbUrl].interrupt();
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };

        RepoManager.prototype.resume = function () {
          var e_3, _a, e_4, _b;

          try {
            for (var _c = tslib.__values(Object.keys(this.repos_)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var appName = _d.value;

              try {
                for (var _e = (e_4 = void 0, tslib.__values(Object.keys(this.repos_[appName]))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var dbUrl = _f.value;
                  this.repos_[appName][dbUrl].resume();
                }
              } catch (e_4_1) {
                e_4 = {
                  error: e_4_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                } finally {
                  if (e_4) throw e_4.error;
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        };
        /**
         * This function should only ever be called to CREATE a new database instance.
         *
         * @param {!FirebaseApp} app
         * @return {!Database}
         */


        RepoManager.prototype.databaseFromApp = function (app, authProvider, url) {
          var dbUrl = url || app.options[DATABASE_URL_OPTION];

          if (dbUrl === undefined) {
            fatal("Can't determine Firebase Database URL.  Be sure to include " + DATABASE_URL_OPTION + ' option when calling firebase.initializeApp().');
          }

          var parsedUrl = parseRepoInfo(dbUrl);
          var repoInfo = parsedUrl.repoInfo;
          var isEmulator;
          var dbEmulatorHost = undefined;

          if (typeof process !== 'undefined') {
            dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
          }

          if (dbEmulatorHost) {
            isEmulator = true;
            dbUrl = "http://" + dbEmulatorHost + "?ns=" + repoInfo.namespace;
            parsedUrl = parseRepoInfo(dbUrl);
            repoInfo = parsedUrl.repoInfo;
          } else {
            isEmulator = !parsedUrl.repoInfo.secure;
          }

          var authTokenProvider = util.CONSTANTS.NODE_ADMIN && isEmulator ? new EmulatorAdminTokenProvider() : new FirebaseAuthTokenProvider(app, authProvider);
          validateUrl('Invalid Firebase Database URL', 1, parsedUrl);

          if (!parsedUrl.path.isEmpty()) {
            fatal('Database URL must point to the root of a Firebase Database ' + '(not including a child path).');
          }

          var repo = this.createRepo(repoInfo, app, authTokenProvider);
          return repo.database;
        };
        /**
         * Remove the repo and make sure it is disconnected.
         *
         * @param {!Repo} repo
         */


        RepoManager.prototype.deleteRepo = function (repo) {
          var appRepos = util.safeGet(this.repos_, repo.app.name); // This should never happen...

          if (!appRepos || util.safeGet(appRepos, repo.repoInfo_.toURLString()) !== repo) {
            fatal("Database " + repo.app.name + "(" + repo.repoInfo_ + ") has already been deleted.");
          }

          repo.interrupt();
          delete appRepos[repo.repoInfo_.toURLString()];
        };
        /**
         * Ensures a repo doesn't already exist and then creates one using the
         * provided app.
         *
         * @param {!RepoInfo} repoInfo The metadata about the Repo
         * @param {!FirebaseApp} app
         * @return {!Repo} The Repo object for the specified server / repoName.
         */


        RepoManager.prototype.createRepo = function (repoInfo, app, authTokenProvider) {
          var appRepos = util.safeGet(this.repos_, app.name);

          if (!appRepos) {
            appRepos = {};
            this.repos_[app.name] = appRepos;
          }

          var repo = util.safeGet(appRepos, repoInfo.toURLString());

          if (repo) {
            fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
          }

          repo = new Repo(repoInfo, this.useRestClient_, app, authTokenProvider);
          appRepos[repoInfo.toURLString()] = repo;
          return repo;
        };
        /**
         * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
         * @param {boolean} forceRestClient
         */


        RepoManager.prototype.forceRestClient = function (forceRestClient) {
          this.useRestClient_ = forceRestClient;
        };

        return RepoManager;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Class representing a firebase database.
       * @implements {FirebaseService}
       */


      var Database =
      /** @class */
      function () {
        /**
         * The constructor should not be called by users of our public API.
         * @param {!Repo} repo_
         */
        function Database(repo_) {
          this.repo_ = repo_;

          if (!(repo_ instanceof Repo)) {
            fatal("Don't call new Database() directly - please use firebase.database().");
          }
          /** @type {Reference} */


          this.root_ = new Reference(repo_, Path.Empty);
          this.INTERNAL = new DatabaseInternals(this);
        }

        Object.defineProperty(Database.prototype, "app", {
          get: function get() {
            return this.repo_.app;
          },
          enumerable: false,
          configurable: true
        });

        Database.prototype.ref = function (path) {
          this.checkDeleted_('ref');
          util.validateArgCount('database.ref', 0, 1, arguments.length);

          if (path instanceof Reference) {
            return this.refFromURL(path.toString());
          }

          return path !== undefined ? this.root_.child(path) : this.root_;
        };
        /**
         * Returns a reference to the root or the path specified in url.
         * We throw a exception if the url is not in the same domain as the
         * current repo.
         * @param {string} url
         * @return {!Reference} Firebase reference.
         */


        Database.prototype.refFromURL = function (url) {
          /** @const {string} */
          var apiName = 'database.refFromURL';
          this.checkDeleted_(apiName);
          util.validateArgCount(apiName, 1, 1, arguments.length);
          var parsedURL = parseRepoInfo(url);
          validateUrl(apiName, 1, parsedURL);
          var repoInfo = parsedURL.repoInfo;

          if (repoInfo.host !== this.repo_.repoInfo_.host) {
            fatal(apiName + ': Host name does not match the current database: ' + '(found ' + repoInfo.host + ' but expected ' + this.repo_.repoInfo_.host + ')');
          }

          return this.ref(parsedURL.path.toString());
        };
        /**
         * @param {string} apiName
         */


        Database.prototype.checkDeleted_ = function (apiName) {
          if (this.repo_ === null) {
            fatal('Cannot call ' + apiName + ' on a deleted database.');
          }
        }; // Make individual repo go offline.


        Database.prototype.goOffline = function () {
          util.validateArgCount('database.goOffline', 0, 0, arguments.length);
          this.checkDeleted_('goOffline');
          this.repo_.interrupt();
        };

        Database.prototype.goOnline = function () {
          util.validateArgCount('database.goOnline', 0, 0, arguments.length);
          this.checkDeleted_('goOnline');
          this.repo_.resume();
        };

        Database.ServerValue = {
          TIMESTAMP: {
            '.sv': 'timestamp'
          },
          increment: function increment(delta) {
            return {
              '.sv': {
                'increment': delta
              }
            };
          }
        };
        return Database;
      }();

      var DatabaseInternals =
      /** @class */
      function () {
        /** @param {!Database} database */
        function DatabaseInternals(database) {
          this.database = database;
        }
        /** @return {Promise<void>} */


        DatabaseInternals.prototype["delete"] = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              this.database.checkDeleted_('delete'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

              RepoManager.getInstance().deleteRepo(this.database.repo_); // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.database.repo_ = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.database.root_ = null;
              this.database.INTERNAL = null;
              this.database = null;
              return [2
              /*return*/
              ];
            });
          });
        };

        return DatabaseInternals;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * INTERNAL methods for internal-use only (tests, etc.).
       *
       * Customers shouldn't use these or else should be aware that they could break at any time.
       *
       * @const
       */


      var forceLongPolling = function forceLongPolling() {
        WebSocketConnection.forceDisallow();
        BrowserPollConnection.forceAllow();
      };

      var forceWebSockets = function forceWebSockets() {
        BrowserPollConnection.forceDisallow();
      };
      /* Used by App Manager */


      var isWebSocketsAvailable = function isWebSocketsAvailable() {
        return WebSocketConnection['isAvailable']();
      };

      var setSecurityDebugCallback = function setSecurityDebugCallback(ref, callback) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref.repo.persistentConnection_.securityDebugCallback_ = callback;
      };

      var stats = function stats(ref, showDelta) {
        ref.repo.stats(showDelta);
      };

      var statsIncrementCounter = function statsIncrementCounter(ref, metric) {
        ref.repo.statsIncrementCounter(metric);
      };

      var dataUpdateCount = function dataUpdateCount(ref) {
        return ref.repo.dataUpdateCount;
      };

      var interceptServerData = function interceptServerData(ref, callback) {
        return ref.repo.interceptServerData_(callback);
      };

      var INTERNAL = /*#__PURE__*/Object.freeze({
        __proto__: null,
        forceLongPolling: forceLongPolling,
        forceWebSockets: forceWebSockets,
        isWebSocketsAvailable: isWebSocketsAvailable,
        setSecurityDebugCallback: setSecurityDebugCallback,
        stats: stats,
        statsIncrementCounter: statsIncrementCounter,
        dataUpdateCount: dataUpdateCount,
        interceptServerData: interceptServerData
      });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var DataConnection = PersistentConnection;
      /**
       * @param {!string} pathString
       * @param {function(*)} onComplete
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      PersistentConnection.prototype.simpleListen = function (pathString, onComplete) {
        this.sendRequest('q', {
          p: pathString
        }, onComplete);
      };
      /**
       * @param {*} data
       * @param {function(*)} onEcho
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      PersistentConnection.prototype.echo = function (data, onEcho) {
        this.sendRequest('echo', {
          d: data
        }, onEcho);
      }; // RealTimeConnection properties that we use in tests.


      var RealTimeConnection = Connection;
      /**
       * @param {function(): string} newHash
       * @return {function()}
       */

      var hijackHash = function hijackHash(newHash) {
        var oldPut = PersistentConnection.prototype.put;

        PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
          if (hash !== undefined) {
            hash = newHash();
          }

          oldPut.call(this, pathString, data, onComplete, hash);
        };

        return function () {
          PersistentConnection.prototype.put = oldPut;
        };
      };
      /**
       * @type {function(new:RepoInfo, !string, boolean, !string, boolean): undefined}
       */


      var ConnectionTarget = RepoInfo;
      /**
       * @param {!Query} query
       * @return {!string}
       */

      var queryIdentifier = function queryIdentifier(query) {
        return query.queryIdentifier();
      };
      /**
       * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
       *
       * @param {boolean} forceRestClient
       */


      var forceRestClient = function forceRestClient(_forceRestClient) {
        RepoManager.getInstance().forceRestClient(_forceRestClient);
      };

      var TEST_ACCESS = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DataConnection: DataConnection,
        RealTimeConnection: RealTimeConnection,
        hijackHash: hijackHash,
        ConnectionTarget: ConnectionTarget,
        queryIdentifier: queryIdentifier,
        forceRestClient: forceRestClient
      });
      var name = "@firebase/database";
      var version = "0.6.10";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var ServerValue = Database.ServerValue;

      function registerDatabase(instance) {
        // set SDK_VERSION
        setSDKVersion(instance.SDK_VERSION); // Register the Database Service with the 'firebase' namespace.

        var namespace = instance.INTERNAL.registerComponent(new component.Component('database', function (container, url) {
          /* Dependencies */
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate();
          var authProvider = container.getProvider('auth-internal');
          return RepoManager.getInstance().databaseFromApp(app, authProvider, url);
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps( // firebase.database namespace properties
        {
          Reference: Reference,
          Query: Query,
          Database: Database,
          DataSnapshot: DataSnapshot,
          enableLogging: enableLogging,
          INTERNAL: INTERNAL,
          ServerValue: ServerValue,
          TEST_ACCESS: TEST_ACCESS
        }).setMultipleInstances(true));
        instance.registerVersion(name, version);

        if (util.isNodeSdk()) {
          module.exports = namespace;
        }
      }

      registerDatabase(firebase);
      exports.DataSnapshot = DataSnapshot;
      exports.Database = Database;
      exports.OnDisconnect = OnDisconnect;
      exports.Query = Query;
      exports.Reference = Reference;
      exports.ServerValue = ServerValue;
      exports.enableLogging = enableLogging;
      exports.registerDatabase = registerDatabase; //# sourceMappingURL=index.cjs.js.map

      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../../process/browser.js */
    "./node_modules/process/browser.js"));
    /***/
  },

  /***/
  "./node_modules/@firebase/logger/dist/index.esm.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
    \*********************************************************/

  /*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */

  /***/
  function node_modulesFirebaseLoggerDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogLevel", function () {
      return LogLevel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLogLevel", function () {
      return setLogLevel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function () {
      return setUserLogHandler;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */


    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var _a;
    /**
     * A container for all of the Logger instances
     */


    var instances = [];
    /**
     * The JS SDK supports 5 log levels and also allows a user the ability to
     * silence the logs altogether.
     *
     * The order is a follows:
     * DEBUG < VERBOSE < INFO < WARN < ERROR
     *
     * All of the log types above the current log level will be captured (i.e. if
     * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
     * `VERBOSE` logs will not)
     */

    var LogLevel;

    (function (LogLevel) {
      LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
      LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
      LogLevel[LogLevel["INFO"] = 2] = "INFO";
      LogLevel[LogLevel["WARN"] = 3] = "WARN";
      LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
      LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
    })(LogLevel || (LogLevel = {}));

    var levelStringToEnum = {
      'debug': LogLevel.DEBUG,
      'verbose': LogLevel.VERBOSE,
      'info': LogLevel.INFO,
      'warn': LogLevel.WARN,
      'error': LogLevel.ERROR,
      'silent': LogLevel.SILENT
    };
    /**
     * The default log level
     */

    var defaultLogLevel = LogLevel.INFO;
    /**
     * By default, `console.debug` is not displayed in the developer console (in
     * chrome). To avoid forcing users to have to opt-in to these logs twice
     * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
     * logs to the `console.log` function.
     */

    var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
    /**
     * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
     * messages on to their corresponding console counterparts (if the log method
     * is supported by the current log level)
     */

    var defaultLogHandler = function defaultLogHandler(instance, logType) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      if (logType < instance.logLevel) {
        return;
      }

      var now = new Date().toISOString();
      var method = ConsoleMethod[logType];

      if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
      } else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
      }
    };

    var Logger =
    /** @class */
    function () {
      /**
       * Gives you an instance of a Logger to capture messages according to
       * Firebase's logging scheme.
       *
       * @param name The name that the logs will be associated with
       */
      function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */

        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */

        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */

        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */

        instances.push(this);
      }

      Object.defineProperty(Logger.prototype, "logLevel", {
        get: function get() {
          return this._logLevel;
        },
        set: function set(val) {
          if (!(val in LogLevel)) {
            throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
          }

          this._logLevel = val;
        },
        enumerable: false,
        configurable: true
      }); // Workaround for setter/getter having to be the same type.

      Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
      };

      Object.defineProperty(Logger.prototype, "logHandler", {
        get: function get() {
          return this._logHandler;
        },
        set: function set(val) {
          if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
          }

          this._logHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function get() {
          return this._userLogHandler;
        },
        set: function set(val) {
          this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
      });
      /**
       * The functions below are all based on the `console` interface
       */

      Logger.prototype.debug = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
      };

      Logger.prototype.log = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
      };

      Logger.prototype.info = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
      };

      Logger.prototype.warn = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
      };

      Logger.prototype.error = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
      };

      return Logger;
    }();

    function setLogLevel(level) {
      instances.forEach(function (inst) {
        inst.setLogLevel(level);
      });
    }

    function setUserLogHandler(logCallback, options) {
      var _loop_1 = function _loop_1(instance) {
        var customLogLevel = null;

        if (options && options.level) {
          customLogLevel = levelStringToEnum[options.level];
        }

        if (logCallback === null) {
          instance.userLogHandler = null;
        } else {
          instance.userLogHandler = function (instance, level) {
            var args = [];

            for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
            }

            var message = args.map(function (arg) {
              if (arg == null) {
                return null;
              } else if (typeof arg === 'string') {
                return arg;
              } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                return arg.toString();
              } else if (arg instanceof Error) {
                return arg.message;
              } else {
                try {
                  return JSON.stringify(arg);
                } catch (ignored) {
                  return null;
                }
              }
            }).filter(function (arg) {
              return arg;
            }).join(' ');

            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
              logCallback({
                level: LogLevel[level].toLowerCase(),
                message: message,
                args: args,
                type: instance.name
              });
            }
          };
        }
      };

      for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];

        _loop_1(instance);
      }
    } //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/@firebase/storage/dist/index.esm.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
    \**********************************************************/

  /*! exports provided: registerStorage */

  /***/
  function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerStorage", function () {
      return registerStorage;
    });
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Constants used in the Firebase Storage library.
     */

    /**
     * Domain name for firebase storage.
     */


    var DEFAULT_HOST = 'firebasestorage.googleapis.com';
    /**
     * The key in Firebase config json for the storage bucket.
     */

    var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
    /**
     * 2 minutes
     *
     * The timeout for all operations except upload.
     */

    var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
    /**
     * 10 minutes
     *
     * The timeout for upload.
     */

    var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var FirebaseStorageError =
    /** @class */
    function () {
      function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
      }

      FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
      };

      FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
      };

      FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
      };

      FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
      };

      Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function get() {
          return this.name_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function get() {
          return this.code_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function get() {
          if (this.serverResponse_) {
            return this.message_ + '\n' + this.serverResponse_;
          } else {
            return this.message_;
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function get() {
          return this.serverResponse_;
        },
        enumerable: false,
        configurable: true
      });
      return FirebaseStorageError;
    }();

    var Code = {
      // Shared between all platforms
      UNKNOWN: 'unknown',
      OBJECT_NOT_FOUND: 'object-not-found',
      BUCKET_NOT_FOUND: 'bucket-not-found',
      PROJECT_NOT_FOUND: 'project-not-found',
      QUOTA_EXCEEDED: 'quota-exceeded',
      UNAUTHENTICATED: 'unauthenticated',
      UNAUTHORIZED: 'unauthorized',
      RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
      INVALID_CHECKSUM: 'invalid-checksum',
      CANCELED: 'canceled',
      // JS specific
      INVALID_EVENT_NAME: 'invalid-event-name',
      INVALID_URL: 'invalid-url',
      INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
      NO_DEFAULT_BUCKET: 'no-default-bucket',
      CANNOT_SLICE_BLOB: 'cannot-slice-blob',
      SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
      NO_DOWNLOAD_URL: 'no-download-url',
      INVALID_ARGUMENT: 'invalid-argument',
      INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
      APP_DELETED: 'app-deleted',
      INVALID_ROOT_OPERATION: 'invalid-root-operation',
      INVALID_FORMAT: 'invalid-format',
      INTERNAL_ERROR: 'internal-error'
    };

    function prependCode(code) {
      return 'storage/' + code;
    }

    function unknown() {
      var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
      return new FirebaseStorageError(Code.UNKNOWN, message);
    }

    function objectNotFound(path) {
      return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
    }

    function quotaExceeded(bucket) {
      return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
    }

    function unauthenticated() {
      var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
      return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
    }

    function unauthorized(path) {
      return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
    }

    function retryLimitExceeded() {
      return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
    }

    function canceled() {
      return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
    }

    function invalidUrl(url) {
      return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
    }

    function invalidDefaultBucket(bucket) {
      return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
    }

    function cannotSliceBlob() {
      return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
    }

    function serverFileWrongSize() {
      return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
    }

    function noDownloadURL() {
      return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
    }

    function invalidArgument(index, fnName, message) {
      return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
    }

    function invalidArgumentCount(argMin, argMax, fnName, real) {
      var countPart;
      var plural;

      if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
      } else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
      }

      return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
    }

    function appDeleted() {
      return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
    }
    /**
     * @param name The name of the operation that was invalid.
     */


    function invalidRootOperation(name) {
      return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
    }
    /**
     * @param format The format that was not valid.
     * @param message A message describing the format violation.
     */


    function invalidFormat(format, message) {
      return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
    }
    /**
     * @param message A message describing the internal error.
     */


    function internalError(message) {
      throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var StringFormat = {
      RAW: 'raw',
      BASE64: 'base64',
      BASE64URL: 'base64url',
      DATA_URL: 'data_url'
    };

    function formatValidator(stringFormat) {
      switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
          return;

        default:
          throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
      }
    }
    /**
     * @struct
     */


    var StringData =
    /** @class */
    function () {
      function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
      }

      return StringData;
    }();

    function dataFromString(format, stringData) {
      switch (format) {
        case StringFormat.RAW:
          return new StringData(utf8Bytes_(stringData));

        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
          return new StringData(base64Bytes_(format, stringData));

        case StringFormat.DATA_URL:
          return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
      } // assert(false);


      throw unknown();
    }

    function utf8Bytes_(value) {
      var b = [];

      for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);

        if (c <= 127) {
          b.push(c);
        } else {
          if (c <= 2047) {
            b.push(192 | c >> 6, 128 | c & 63);
          } else {
            if ((c & 64512) === 55296) {
              // The start of a surrogate pair.
              var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

              if (!valid) {
                // The second surrogate wasn't there.
                b.push(239, 191, 189);
              } else {
                var hi = c;
                var lo = value.charCodeAt(++i);
                c = 65536 | (hi & 1023) << 10 | lo & 1023;
                b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
              }
            } else {
              if ((c & 64512) === 56320) {
                // Invalid low surrogate.
                b.push(239, 191, 189);
              } else {
                b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
              }
            }
          }
        }
      }

      return new Uint8Array(b);
    }

    function percentEncodedBytes_(value) {
      var decoded;

      try {
        decoded = decodeURIComponent(value);
      } catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
      }

      return utf8Bytes_(decoded);
    }

    function base64Bytes_(format, value) {
      switch (format) {
        case StringFormat.BASE64:
          {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;

            if (hasMinus || hasUnder) {
              var invalidChar = hasMinus ? '-' : '_';
              throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
            }

            break;
          }

        case StringFormat.BASE64URL:
          {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;

            if (hasPlus || hasSlash) {
              var invalidChar = hasPlus ? '+' : '/';
              throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }

            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
          }
        // do nothing
      }

      var bytes;

      try {
        bytes = atob(value);
      } catch (e) {
        throw invalidFormat(format, 'Invalid character found');
      }

      var array = new Uint8Array(bytes.length);

      for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
      }

      return array;
    }
    /**
     * @struct
     */


    var DataURLParts =
    /** @class */
    function () {
      function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);

        if (matches === null) {
          throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }

        var middle = matches[1] || null;

        if (middle != null) {
          this.base64 = endsWith(middle, ';base64');
          this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
        }

        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
      }

      return DataURLParts;
    }();

    function dataURLBytes_(dataUrl) {
      var parts = new DataURLParts(dataUrl);

      if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
      } else {
        return percentEncodedBytes_(parts.rest);
      }
    }

    function dataURLContentType_(dataUrl) {
      var parts = new DataURLParts(dataUrl);
      return parts.contentType;
    }

    function endsWith(s, end) {
      var longEnough = s.length >= end.length;

      if (!longEnough) {
        return false;
      }

      return s.substring(s.length - end.length) === end;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var TaskEvent = {
      /** Triggered whenever the task changes or progress is updated. */
      STATE_CHANGED: 'state_changed'
    };
    var InternalTaskState = {
      RUNNING: 'running',
      PAUSING: 'pausing',
      PAUSED: 'paused',
      SUCCESS: 'success',
      CANCELING: 'canceling',
      CANCELED: 'canceled',
      ERROR: 'error'
    };
    var TaskState = {
      /** The task is currently transferring data. */
      RUNNING: 'running',

      /** The task was paused by the user. */
      PAUSED: 'paused',

      /** The task completed successfully. */
      SUCCESS: 'success',

      /** The task was canceled. */
      CANCELED: 'canceled',

      /** The task failed with an error. */
      ERROR: 'error'
    };

    function taskStateFromInternalTaskState(state) {
      switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
          return TaskState.RUNNING;

        case InternalTaskState.PAUSED:
          return TaskState.PAUSED;

        case InternalTaskState.SUCCESS:
          return TaskState.SUCCESS;

        case InternalTaskState.CANCELED:
          return TaskState.CANCELED;

        case InternalTaskState.ERROR:
          return TaskState.ERROR;

        default:
          // TODO(andysoto): assert(false);
          return TaskState.ERROR;
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @return False if the object is undefined or null, true otherwise.
     */


    function isDef(p) {
      return p != null;
    }

    function isJustDef(p) {
      return p !== void 0;
    }

    function isFunction(p) {
      return typeof p === 'function';
    }

    function isObject(p) {
      return typeof p === 'object';
    }

    function isNonNullObject(p) {
      return isObject(p) && p !== null;
    }

    function isNonArrayObject(p) {
      return isObject(p) && !Array.isArray(p);
    }

    function isString(p) {
      return typeof p === 'string' || p instanceof String;
    }

    function isInteger(p) {
      return isNumber(p) && Number.isInteger(p);
    }

    function isNumber(p) {
      return typeof p === 'number' || p instanceof Number;
    }

    function isNativeBlob(p) {
      return isNativeBlobDefined() && p instanceof Blob;
    }

    function isNativeBlobDefined() {
      return typeof Blob !== 'undefined';
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @enum{number}
     */


    var ErrorCode;

    (function (ErrorCode) {
      ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
      ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
      ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
    })(ErrorCode || (ErrorCode = {}));
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
     * doesn't work in React Native on Android.
     */


    var NetworkXhrIo =
    /** @class */
    function () {
      function NetworkXhrIo() {
        var _this = this;

        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
          _this.xhr_.addEventListener('abort', function () {
            _this.errorCode_ = ErrorCode.ABORT;
            resolve(_this);
          });

          _this.xhr_.addEventListener('error', function () {
            _this.errorCode_ = ErrorCode.NETWORK_ERROR;
            resolve(_this);
          });

          _this.xhr_.addEventListener('load', function () {
            resolve(_this);
          });
        });
      }
      /**
       * @override
       */


      NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
          throw internalError('cannot .send() more than once');
        }

        this.sent_ = true;
        this.xhr_.open(method, url, true);

        if (isDef(headers)) {
          for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
              this.xhr_.setRequestHeader(key, headers[key].toString());
            }
          }
        }

        if (isDef(body)) {
          this.xhr_.send(body);
        } else {
          this.xhr_.send();
        }

        return this.sendPromise_;
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
          throw internalError('cannot .getErrorCode() before sending');
        }

        return this.errorCode_;
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
          throw internalError('cannot .getStatus() before sending');
        }

        try {
          return this.xhr_.status;
        } catch (e) {
          return -1;
        }
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
          throw internalError('cannot .getResponseText() before sending');
        }

        return this.xhr_.responseText;
      };
      /**
       * Aborts the request.
       * @override
       */


      NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
          this.xhr_.upload.addEventListener('progress', listener);
        }
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
          this.xhr_.upload.removeEventListener('progress', listener);
        }
      };

      return NetworkXhrIo;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Factory-like class for creating XhrIo instances.
     */


    var XhrIoPool =
    /** @class */
    function () {
      function XhrIoPool() {}

      XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
      };

      return XhrIoPool;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function getBlobBuilder() {
      if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
      } else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
      } else {
        return undefined;
      }
    }
    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param args The values that will make up the resulting blob.
     * @return The blob.
     */


    function getBlob() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var BlobBuilder = getBlobBuilder();

      if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();

        for (var i = 0; i < args.length; i++) {
          bb.append(args[i]);
        }

        return bb.getBlob();
      } else {
        if (isNativeBlobDefined()) {
          return new Blob(args);
        } else {
          throw Error("This browser doesn't seem to support creating Blobs");
        }
      }
    }
    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
     *
     * @param blob The blob to be sliced.
     * @param start Index of the starting byte.
     * @param end Index of the ending byte.
     * @return The blob slice or null if not supported.
     */


    function sliceBlob(blob, start, end) {
      if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
      } else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
      } else if (blob.slice) {
        return blob.slice(start, end);
      }

      return null;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param opt_elideCopy If true, doesn't copy mutable input data
     *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
     *     modified after this blob's construction.
     */


    var FbsBlob =
    /** @class */
    function () {
      function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';

        if (isNativeBlob(data)) {
          this.data_ = data;
          size = data.size;
          blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
          if (elideCopy) {
            this.data_ = new Uint8Array(data);
          } else {
            this.data_ = new Uint8Array(data.byteLength);
            this.data_.set(new Uint8Array(data));
          }

          size = this.data_.length;
        } else if (data instanceof Uint8Array) {
          if (elideCopy) {
            this.data_ = data;
          } else {
            this.data_ = new Uint8Array(data.length);
            this.data_.set(data);
          }

          size = data.length;
        }

        this.size_ = size;
        this.type_ = blobType;
      }

      FbsBlob.prototype.size = function () {
        return this.size_;
      };

      FbsBlob.prototype.type = function () {
        return this.type_;
      };

      FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
          var realBlob = this.data_;
          var sliced = sliceBlob(realBlob, startByte, endByte);

          if (sliced === null) {
            return null;
          }

          return new FbsBlob(sliced);
        } else {
          var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
          return new FbsBlob(slice, true);
        }
      };

      FbsBlob.getBlob = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (isNativeBlobDefined()) {
          var blobby = args.map(function (val) {
            if (val instanceof FbsBlob) {
              return val.data_;
            } else {
              return val;
            }
          });
          return new FbsBlob(getBlob.apply(null, blobby));
        } else {
          var uint8Arrays = args.map(function (val) {
            if (isString(val)) {
              return dataFromString(StringFormat.RAW, val).data;
            } else {
              // Blobs don't exist, so this has to be a Uint8Array.
              return val.data_;
            }
          });
          var finalLength_1 = 0;
          uint8Arrays.forEach(function (array) {
            finalLength_1 += array.byteLength;
          });
          var merged_1 = new Uint8Array(finalLength_1);
          var index_1 = 0;
          uint8Arrays.forEach(function (array) {
            for (var i = 0; i < array.length; i++) {
              merged_1[index_1++] = array[i];
            }
          });
          return new FbsBlob(merged_1, true);
        }
      };

      FbsBlob.prototype.uploadData = function () {
        return this.data_;
      };

      return FbsBlob;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     */


    var Location =
    /** @class */
    function () {
      function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
      }

      Object.defineProperty(Location.prototype, "path", {
        get: function get() {
          return this.path_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Location.prototype, "isRoot", {
        get: function get() {
          return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
      });

      Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
      };

      Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
      };

      Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;

        try {
          bucketLocation = Location.makeFromUrl(bucketString);
        } catch (e) {
          // Not valid URL, use as-is. This lets you put bare bucket names in
          // config.
          return new Location(bucketString, '');
        }

        if (bucketLocation.path === '') {
          return bucketLocation;
        } else {
          throw invalidDefaultBucket(bucketString);
        }
      };

      Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';

        function gsModify(loc) {
          if (loc.path.charAt(loc.path.length - 1) === '/') {
            loc.path_ = loc.path_.slice(0, -1);
          }
        }

        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = {
          bucket: 1,
          path: 3
        };

        function httpModify(loc) {
          loc.path_ = decodeURIComponent(loc.path);
        }

        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = {
          bucket: 1,
          path: 3
        };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = {
          bucket: 1,
          path: 2
        };
        var groups = [{
          regex: gsRegex,
          indices: gsIndices,
          postModify: gsModify
        }, {
          regex: firebaseStorageRegExp,
          indices: firebaseStorageIndices,
          postModify: httpModify
        }, {
          regex: cloudStorageRegExp,
          indices: cloudStorageIndices,
          postModify: httpModify
        }];

        for (var i = 0; i < groups.length; i++) {
          var group = groups[i];
          var captures = group.regex.exec(url);

          if (captures) {
            var bucketValue = captures[group.indices.bucket];
            var pathValue = captures[group.indices.path];

            if (!pathValue) {
              pathValue = '';
            }

            location = new Location(bucketValue, pathValue);
            group.postModify(location);
            break;
          }
        }

        if (location == null) {
          throw invalidUrl(url);
        }

        return location;
      };

      return Location;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns the Object resulting from parsing the given JSON, or null if the
     * given string does not represent a JSON object.
     */


    function jsonObjectOrNull(s) {
      var obj;

      try {
        obj = JSON.parse(s);
      } catch (e) {
        return null;
      }

      if (isNonArrayObject(obj)) {
        return obj;
      } else {
        return null;
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Contains helper methods for manipulating paths.
     */

    /**
     * @return Null if the path is already at the root.
     */


    function parent(path) {
      if (path.length === 0) {
        return null;
      }

      var index = path.lastIndexOf('/');

      if (index === -1) {
        return '';
      }

      var newPath = path.slice(0, index);
      return newPath;
    }

    function child(path, childPath) {
      var canonicalChildPath = childPath.split('/').filter(function (component) {
        return component.length > 0;
      }).join('/');

      if (path.length === 0) {
        return canonicalChildPath;
      } else {
        return path + '/' + canonicalChildPath;
      }
    }
    /**
     * Returns the last component of a path.
     * '/foo/bar' -> 'bar'
     * '/foo/bar/baz/' -> 'baz/'
     * '/a' -> 'a'
     */


    function lastComponent(path) {
      var index = path.lastIndexOf('/', path.length - 2);

      if (index === -1) {
        return path;
      } else {
        return path.slice(index + 1);
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function makeUrl(urlPart) {
      return "https://" + DEFAULT_HOST + "/v0" + urlPart;
    }

    function makeQueryString(params) {
      var encode = encodeURIComponent;
      var queryPart = '?';

      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
          var nextPart = encode(key) + '=' + encode(params[key]);
          queryPart = queryPart + nextPart + '&';
        }
      } // Chop off the extra '&' or '?' on the end


      queryPart = queryPart.slice(0, -1);
      return queryPart;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function noXform_(metadata, value) {
      return value;
    }
    /**
     * @struct
     */


    var Mapping =
    /** @class */
    function () {
      function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
      }

      return Mapping;
    }();

    var mappings_ = null;

    function xformPath(fullPath) {
      if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
      } else {
        return lastComponent(fullPath);
      }
    }

    function getMappings() {
      if (mappings_) {
        return mappings_;
      }

      var mappings = [];
      mappings.push(new Mapping('bucket'));
      mappings.push(new Mapping('generation'));
      mappings.push(new Mapping('metageneration'));
      mappings.push(new Mapping('name', 'fullPath', true));

      function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
      }

      var nameMapping = new Mapping('name');
      nameMapping.xform = mappingsXformPath;
      mappings.push(nameMapping);
      /**
       * Coerces the second param to a number, if it is defined.
       */

      function xformSize(_metadata, size) {
        if (isDef(size)) {
          return Number(size);
        } else {
          return size;
        }
      }

      var sizeMapping = new Mapping('size');
      sizeMapping.xform = xformSize;
      mappings.push(sizeMapping);
      mappings.push(new Mapping('timeCreated'));
      mappings.push(new Mapping('updated'));
      mappings.push(new Mapping('md5Hash', null, true));
      mappings.push(new Mapping('cacheControl', null, true));
      mappings.push(new Mapping('contentDisposition', null, true));
      mappings.push(new Mapping('contentEncoding', null, true));
      mappings.push(new Mapping('contentLanguage', null, true));
      mappings.push(new Mapping('contentType', null, true));
      mappings.push(new Mapping('metadata', 'customMetadata', true));
      mappings_ = mappings;
      return mappings_;
    }

    function addRef(metadata, service) {
      function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return service.makeStorageReference(loc);
      }

      Object.defineProperty(metadata, 'ref', {
        get: generateRef
      });
    }

    function fromResource(service, resource, mappings) {
      var metadata = {};
      metadata['type'] = 'file';
      var len = mappings.length;

      for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
      }

      addRef(metadata, service);
      return metadata;
    }

    function fromResourceString(service, resourceString, mappings) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      var resource = obj;
      return fromResource(service, resource, mappings);
    }

    function downloadUrlFromResourceString(metadata, resourceString) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
      }

      var tokens = obj['downloadTokens'];

      if (tokens.length === 0) {
        return null;
      }

      var encode = encodeURIComponent;
      var tokensList = tokens.split(',');
      var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
          alt: 'media',
          token: token
        });
        return base + queryString;
      });
      return urls[0];
    }

    function toResourceString(metadata, mappings) {
      var resource = {};
      var len = mappings.length;

      for (var i = 0; i < len; i++) {
        var mapping = mappings[i];

        if (mapping.writable) {
          resource[mapping.server] = metadata[mapping.local];
        }
      }

      return JSON.stringify(resource);
    }

    function metadataValidator(p) {
      if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
      }

      for (var key in p) {
        if (p.hasOwnProperty(key)) {
          var val = p[key];

          if (key === 'customMetadata') {
            if (!isObject(val)) {
              throw 'Expected object for \'customMetadata\' mapping.';
            }
          } else {
            if (isNonNullObject(val)) {
              throw "Mapping for '" + key + "' cannot be an object.";
            }
          }
        }
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var MAX_RESULTS_KEY = 'maxResults';
    var MAX_MAX_RESULTS = 1000;
    var PAGE_TOKEN_KEY = 'pageToken';
    var PREFIXES_KEY = 'prefixes';
    var ITEMS_KEY = 'items';

    function fromBackendResponse(service, bucket, resource) {
      var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
      };

      if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
          var path = _a[_i];
          var pathWithoutTrailingSlash = path.replace(/\/$/, '');
          var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
          listResult.prefixes.push(reference);
        }
      }

      if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
          var item = _c[_b];
          var reference = service.makeStorageReference(new Location(bucket, item['name']));
          listResult.items.push(reference);
        }
      }

      return listResult;
    }

    function fromResponseString(service, bucket, resourceString) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      var resource = obj;
      return fromBackendResponse(service, bucket, resource);
    }

    function listOptionsValidator(p) {
      if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
      }

      for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
          if (!isInteger(p[MAX_RESULTS_KEY]) || p[MAX_RESULTS_KEY] <= 0) {
            throw 'Expected maxResults to be a positive number.';
          }

          if (p[MAX_RESULTS_KEY] > 1000) {
            throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
          }
        } else if (key === PAGE_TOKEN_KEY) {
          if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
            throw 'Expected pageToken to be string.';
          }
        } else {
          throw 'Unknown option: ' + key;
        }
      }
    }

    var RequestInfo =
    /** @class */
    function () {
      function RequestInfo(url, method,
      /**
       * Returns the value with which to resolve the request's promise. Only called
       * if the request is successful. Throw from this function to reject the
       * returned Request's promise with the thrown error.
       * Note: The XhrIo passed to this function may be reused after this callback
       * returns. Do not keep a reference to it in any way.
       */
      handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */

        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
      }

      return RequestInfo;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Throws the UNKNOWN FirebaseStorageError if cndn is false.
     */


    function handlerCheck(cndn) {
      if (!cndn) {
        throw unknown();
      }
    }

    function metadataHandler(service, mappings) {
      function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
      }

      return handler;
    }

    function listHandler(service, bucket) {
      function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
      }

      return handler;
    }

    function downloadUrlHandler(service, mappings) {
      function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
      }

      return handler;
    }

    function sharedErrorHandler(location) {
      function errorHandler(xhr, err) {
        var newErr;

        if (xhr.getStatus() === 401) {
          newErr = unauthenticated();
        } else {
          if (xhr.getStatus() === 402) {
            newErr = quotaExceeded(location.bucket);
          } else {
            if (xhr.getStatus() === 403) {
              newErr = unauthorized(location.path);
            } else {
              newErr = err;
            }
          }
        }

        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
      }

      return errorHandler;
    }

    function objectErrorHandler(location) {
      var shared = sharedErrorHandler(location);

      function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);

        if (xhr.getStatus() === 404) {
          newErr = objectNotFound(location.path);
        }

        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
      }

      return errorHandler;
    }

    function getMetadata(service, location, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = service.maxOperationRetryTime;
      var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function list(service, location, delimiter, pageToken, maxResults) {
      var urlParams = {};

      if (location.isRoot) {
        urlParams['prefix'] = '';
      } else {
        urlParams['prefix'] = location.path + '/';
      }

      if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
      }

      if (pageToken) {
        urlParams['pageToken'] = pageToken;
      }

      if (maxResults) {
        urlParams['maxResults'] = maxResults;
      }

      var urlPart = location.bucketOnlyServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = service.maxOperationRetryTime;
      var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }

    function getDownloadUrl(service, location, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = service.maxOperationRetryTime;
      var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function updateMetadata(service, location, metadata, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'PATCH';
      var body = toResourceString(metadata, mappings);
      var headers = {
        'Content-Type': 'application/json; charset=utf-8'
      };
      var timeout = service.maxOperationRetryTime;
      var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
      requestInfo.headers = headers;
      requestInfo.body = body;
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function deleteObject(service, location) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'DELETE';
      var timeout = service.maxOperationRetryTime;

      function handler(_xhr, _text) {}

      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.successCodes = [200, 204];
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function determineContentType_(metadata, blob) {
      return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
    }

    function metadataForUpload_(location, blob, metadata) {
      var metadataClone = Object.assign({}, metadata);
      metadataClone['fullPath'] = location.path;
      metadataClone['size'] = blob.size();

      if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
      }

      return metadataClone;
    }

    function multipartUpload(service, location, mappings, blob, metadata) {
      var urlPart = location.bucketOnlyServerUrl();
      var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
      };

      function genBoundary() {
        var str = '';

        for (var i = 0; i < 2; i++) {
          str = str + Math.random().toString().slice(2);
        }

        return str;
      }

      var boundary = genBoundary();
      headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
      var metadata_ = metadataForUpload_(location, blob, metadata);
      var metadataString = toResourceString(metadata_, mappings);
      var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
      var postBlobPart = '\r\n--' + boundary + '--';
      var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

      if (body === null) {
        throw cannotSliceBlob();
      }

      var urlParams = {
        name: metadata_['fullPath']
      };
      var url = makeUrl(urlPart);
      var method = 'POST';
      var timeout = service.maxUploadRetryTime;
      var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.headers = headers;
      requestInfo.body = body.uploadData();
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @param current The number of bytes that have been uploaded so far.
     * @param total The total number of bytes in the upload.
     * @param opt_finalized True if the server has finished the upload.
     * @param opt_metadata The upload metadata, should
     *     only be passed if opt_finalized is true.
     * @struct
     */


    var ResumableUploadStatus =
    /** @class */
    function () {
      function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
      }

      return ResumableUploadStatus;
    }();

    function checkResumeHeader_(xhr, allowed) {
      var status = null;

      try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
      } catch (e) {
        handlerCheck(false);
      }

      var allowedStatus = allowed || ['active'];
      handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
      return status;
    }

    function createResumableUpload(service, location, mappings, blob, metadata) {
      var urlPart = location.bucketOnlyServerUrl();
      var metadataForUpload = metadataForUpload_(location, blob, metadata);
      var urlParams = {
        name: metadataForUpload['fullPath']
      };
      var url = makeUrl(urlPart);
      var method = 'POST';
      var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
      };
      var body = toResourceString(metadataForUpload, mappings);
      var timeout = service.maxUploadRetryTime;

      function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;

        try {
          url = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
          handlerCheck(false);
        }

        handlerCheck(isString(url));
        return url;
      }

      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.headers = headers;
      requestInfo.body = body;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     */


    function getResumableUploadStatus(service, location, url, blob) {
      var headers = {
        'X-Goog-Upload-Command': 'query'
      };

      function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;

        try {
          sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
          handlerCheck(false);
        }

        if (!sizeString) {
          // null or empty string
          handlerCheck(false);
        }

        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
      }

      var method = 'POST';
      var timeout = service.maxUploadRetryTime;
      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.headers = headers;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * Any uploads via the resumable upload API must transfer a number of bytes
     * that is a multiple of this number.
     */


    var resumableUploadChunkSize = 256 * 1024;
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     * @param chunkSize Number of bytes to upload.
     * @param status The previous status.
     *     If not passed or null, we start from the beginning.
     * @throws fbs.Error If the upload is already complete, the passed in status
     *     has a final size inconsistent with the blob, or the blob cannot be sliced
     *     for upload.
     */

    function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
      // TODO(andysoto): standardize on internal asserts
      // assert(!(opt_status && opt_status.finalized));
      var status_ = new ResumableUploadStatus(0, 0);

      if (status) {
        status_.current = status.current;
        status_.total = status.total;
      } else {
        status_.current = 0;
        status_.total = blob.size();
      }

      if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
      }

      var bytesLeft = status_.total - status_.current;
      var bytesToUpload = bytesLeft;

      if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
      }

      var startByte = status_.current;
      var endByte = startByte + bytesToUpload;
      var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
      var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
      };
      var body = blob.slice(startByte, endByte);

      if (body === null) {
        throw cannotSliceBlob();
      }

      function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;

        if (uploadStatus === 'final') {
          metadata = metadataHandler(service, mappings)(xhr, text);
        } else {
          metadata = null;
        }

        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
      }

      var method = 'POST';
      var timeout = service.maxUploadRetryTime;
      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.headers = headers;
      requestInfo.body = body.uploadData();
      requestInfo.progressCallback = progressCallback || null;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     */


    var Observer =
    /** @class */
    function () {
      function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) || isDef(error) || isDef(complete);

        if (asFunctions) {
          this.next = nextOrObserver;
          this.error = error || null;
          this.complete = complete || null;
        } else {
          var observer = nextOrObserver;
          this.next = observer.next || null;
          this.error = observer.error || null;
          this.complete = observer.complete || null;
        }
      }

      return Observer;
    }();

    var UploadTaskSnapshot =
    /** @class */
    function () {
      function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
      }

      return UploadTaskSnapshot;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param name Name of the function.
     * @param specs Argument specs.
     * @param passed The actual arguments passed to the function.
     * @throws {fbs.Error} If the arguments are invalid.
     */


    function validate(name, specs, passed) {
      var minArgs = specs.length;
      var maxArgs = specs.length;

      for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
          minArgs = i;
          break;
        }
      }

      var validLength = minArgs <= passed.length && passed.length <= maxArgs;

      if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
      }

      for (var i = 0; i < passed.length; i++) {
        try {
          specs[i].validator(passed[i]);
        } catch (e) {
          if (e instanceof Error) {
            throw invalidArgument(i, name, e.message);
          } else {
            throw invalidArgument(i, name, e);
          }
        }
      }
    }
    /**
     * @struct
     */


    var ArgSpec =
    /** @class */
    function () {
      function ArgSpec(validator, optional) {
        var self = this;

        this.validator = function (p) {
          if (self.optional && !isJustDef(p)) {
            return;
          }

          validator(p);
        };

        this.optional = !!optional;
      }

      return ArgSpec;
    }();

    function and_(v1, v2) {
      return function (p) {
        v1(p);
        v2(p);
      };
    }

    function stringSpec(validator, optional) {
      function stringValidator(p) {
        if (!isString(p)) {
          throw 'Expected string.';
        }
      }

      var chainedValidator;

      if (validator) {
        chainedValidator = and_(stringValidator, validator);
      } else {
        chainedValidator = stringValidator;
      }

      return new ArgSpec(chainedValidator, optional);
    }

    function uploadDataSpec() {
      function validator(p) {
        var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || isNativeBlobDefined() && p instanceof Blob;

        if (!valid) {
          throw 'Expected Blob or File.';
        }
      }

      return new ArgSpec(validator);
    }

    function metadataSpec(optional) {
      return new ArgSpec(metadataValidator, optional);
    }

    function listOptionSpec(optional) {
      return new ArgSpec(listOptionsValidator, optional);
    }

    function nonNegativeNumberSpec() {
      function validator(p) {
        var valid = isNumber(p) && p >= 0;

        if (!valid) {
          throw 'Expected a number 0 or greater.';
        }
      }

      return new ArgSpec(validator);
    }

    function looseObjectSpec(validator, optional) {
      function isLooseObjectValidator(p) {
        var isLooseObject = p === null || isDef(p) && p instanceof Object;

        if (!isLooseObject) {
          throw 'Expected an Object.';
        }

        if (validator !== undefined && validator !== null) {
          validator(p);
        }
      }

      return new ArgSpec(isLooseObjectValidator, optional);
    }

    function nullFunctionSpec(optional) {
      function validator(p) {
        var valid = p === null || isFunction(p);

        if (!valid) {
          throw 'Expected a Function.';
        }
      }

      return new ArgSpec(validator, optional);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns a function that invokes f with its arguments asynchronously as a
     * microtask, i.e. as soon as possible after the current script returns back
     * into browser code.
     */


    function async(f) {
      return function () {
        var argsToForward = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          argsToForward[_i] = arguments[_i];
        } // eslint-disable-next-line @typescript-eslint/no-floating-promises


        Promise.resolve().then(function () {
          return f.apply(void 0, argsToForward);
        });
      };
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents a blob being uploaded. Can be used to pause/resume/cancel the
     * upload and manage callbacks for various events.
     */


    var UploadTask =
    /** @class */
    function () {
      /**
       * @param ref The firebaseStorage.Reference object this task came
       *     from, untyped to avoid cyclic dependencies.
       * @param blob The blob to upload.
       */
      function UploadTask(ref, service, location, mappings, blob, metadata) {
        var _this = this;

        if (metadata === void 0) {
          metadata = null;
        }

        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.service_ = service;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;

        this.errorHandler_ = function (error) {
          _this.request_ = null;
          _this.chunkMultiplier_ = 1;

          if (error.codeEquals(Code.CANCELED)) {
            _this.needToFetchStatus_ = true;

            _this.completeTransitions_();
          } else {
            _this.error_ = error;

            _this.transition_(InternalTaskState.ERROR);
          }
        };

        this.metadataErrorHandler_ = function (error) {
          _this.request_ = null;

          if (error.codeEquals(Code.CANCELED)) {
            _this.completeTransitions_();
          } else {
            _this.error_ = error;

            _this.transition_(InternalTaskState.ERROR);
          }
        };

        this.promise_ = new Promise(function (resolve, reject) {
          _this.resolve_ = resolve;
          _this.reject_ = reject;

          _this.start_();
        }); // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.

        this.promise_.then(null, function () {});
      }

      UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;

        var sizeBefore = this.transferred_;
        return function (loaded) {
          return _this.updateProgress_(sizeBefore + loaded);
        };
      };

      UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
      };

      UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
          // This can happen if someone pauses us in a resume callback, for example.
          return;
        }

        if (this.request_ !== null) {
          return;
        }

        if (this.resumable_) {
          if (this.uploadUrl_ === null) {
            this.createResumable_();
          } else {
            if (this.needToFetchStatus_) {
              this.fetchStatus_();
            } else {
              if (this.needToFetchMetadata_) {
                // Happens if we miss the metadata on upload completion.
                this.fetchMetadata_();
              } else {
                this.continueUpload_();
              }
            }
          }
        } else {
          this.oneShotUpload_();
        }
      };

      UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


        this.service_.getAuthToken().then(function (authToken) {
          switch (_this.state_) {
            case InternalTaskState.RUNNING:
              callback(authToken);
              break;

            case InternalTaskState.CANCELING:
              _this.transition_(InternalTaskState.CANCELED);

              break;

            case InternalTaskState.PAUSING:
              _this.transition_(InternalTaskState.PAUSED);

              break;
          }
        });
      }; // TODO(andysoto): assert false


      UploadTask.prototype.createResumable_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

          var createRequest = _this.service_.makeRequest(requestInfo, authToken);

          _this.request_ = createRequest;
          createRequest.getPromise().then(function (url) {
            _this.request_ = null;
            _this.uploadUrl_ = url;
            _this.needToFetchStatus_ = false;

            _this.completeTransitions_();
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.fetchStatus_ = function () {
        var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
          var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);

          var statusRequest = _this.service_.makeRequest(requestInfo, authToken);

          _this.request_ = statusRequest;
          statusRequest.getPromise().then(function (status) {
            status = status;
            _this.request_ = null;

            _this.updateProgress_(status.current);

            _this.needToFetchStatus_ = false;

            if (status.finalized) {
              _this.needToFetchMetadata_ = true;
            }

            _this.completeTransitions_();
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.continueUpload_ = function () {
        var _this = this;

        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
          var requestInfo;

          try {
            requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
          } catch (e) {
            _this.error_ = e;

            _this.transition_(InternalTaskState.ERROR);

            return;
          }

          var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);

          _this.request_ = uploadRequest;
          uploadRequest.getPromise().then(function (newStatus) {
            _this.increaseMultiplier_();

            _this.request_ = null;

            _this.updateProgress_(newStatus.current);

            if (newStatus.finalized) {
              _this.metadata_ = newStatus.metadata;

              _this.transition_(InternalTaskState.SUCCESS);
            } else {
              _this.completeTransitions_();
            }
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_; // Max chunk size is 32M.

        if (currentSize < 32 * 1024 * 1024) {
          this.chunkMultiplier_ *= 2;
        }
      };

      UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);

          var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);

          _this.request_ = metadataRequest;
          metadataRequest.getPromise().then(function (metadata) {
            _this.request_ = null;
            _this.metadata_ = metadata;

            _this.transition_(InternalTaskState.SUCCESS);
          }, _this.metadataErrorHandler_);
        });
      };

      UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

          var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);

          _this.request_ = multipartRequest;
          multipartRequest.getPromise().then(function (metadata) {
            _this.request_ = null;
            _this.metadata_ = metadata;

            _this.updateProgress_(_this.blob_.size());

            _this.transition_(InternalTaskState.SUCCESS);
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred; // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).

        if (this.transferred_ !== old) {
          this.notifyObservers_();
        }
      };

      UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
          return;
        }

        switch (state) {
          case InternalTaskState.CANCELING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING);
            this.state_ = state;

            if (this.request_ !== null) {
              this.request_.cancel();
            }

            break;

          case InternalTaskState.PAUSING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING);
            this.state_ = state;

            if (this.request_ !== null) {
              this.request_.cancel();
            }

            break;

          case InternalTaskState.RUNNING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSED ||
            //        this.state_ === InternalTaskState.PAUSING);
            var wasPaused = this.state_ === InternalTaskState.PAUSED;
            this.state_ = state;

            if (wasPaused) {
              this.notifyObservers_();
              this.start_();
            }

            break;

          case InternalTaskState.PAUSED:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSING);
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.CANCELED:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSED ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.error_ = canceled();
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.ERROR:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.SUCCESS:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.state_ = state;
            this.notifyObservers_();
            break;
        }
      };

      UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
          case InternalTaskState.PAUSING:
            this.transition_(InternalTaskState.PAUSED);
            break;

          case InternalTaskState.CANCELING:
            this.transition_(InternalTaskState.CANCELED);
            break;

          case InternalTaskState.RUNNING:
            this.start_();
            break;
        }
      };

      Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function get() {
          var externalState = taskStateFromInternalTaskState(this.state_);
          return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Adds a callback for an event.
       * @param type The type of event to listen for.
       */

      UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
          if (type !== TaskEvent.STATE_CHANGED) {
            throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
          }
        }

        var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        function nextOrObserverValidator(p) {
          try {
            nextValidator(p);
            return;
          } catch (e) {}

          try {
            observerValidator(p);
            var anyDefined = isJustDef(p['next']) || isJustDef(p['error']) || isJustDef(p['complete']);

            if (!anyDefined) {
              throw '';
            }

            return;
          } catch (e) {
            throw nextOrObserverMessage;
          }
        }

        var specs = [stringSpec(typeValidator), looseObjectSpec(nextOrObserverValidator, true), nullFunctionSpec(true), nullFunctionSpec(true)];
        validate('on', specs, arguments);
        var self = this;

        function makeBinder(specs) {
          function binder(nextOrObserver, error, complete) {
            if (specs !== null) {
              validate('on', specs, arguments);
            }

            var observer = new Observer(nextOrObserver, error, completed);
            self.addObserver_(observer);
            return function () {
              self.removeObserver_(observer);
            };
          }

          return binder;
        }

        function binderNextOrObserverValidator(p) {
          if (p === null) {
            throw nextOrObserverMessage;
          }

          nextOrObserverValidator(p);
        }

        var binderSpecs = [looseObjectSpec(binderNextOrObserverValidator), nullFunctionSpec(true), nullFunctionSpec(true)];
        var typeOnly = !(isJustDef(nextOrObserver) || isJustDef(error) || isJustDef(completed));

        if (typeOnly) {
          return makeBinder(binderSpecs);
        } else {
          return makeBinder(null)(nextOrObserver, error, completed);
        }
      };
      /**
       * This object behaves like a Promise, and resolves with its snapshot data
       * when the upload completes.
       * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
       * @param onRejected The rejection callback.
       */


      UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
      };
      /**
       * Equivalent to calling `then(null, onRejected)`.
       */


      UploadTask.prototype["catch"] = function (onRejected) {
        return this.then(null, onRejected);
      };
      /**
       * Adds the given observer.
       */


      UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
      };
      /**
       * Removes the given observer.
       */


      UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);

        if (i !== -1) {
          this.observers_.splice(i, 1);
        }
      };

      UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;

        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
          _this.notifyObserver_(observer);
        });
      };

      UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
          var triggered = true;

          switch (taskStateFromInternalTaskState(this.state_)) {
            case TaskState.SUCCESS:
              async(this.resolve_.bind(null, this.snapshot))();
              break;

            case TaskState.CANCELED:
            case TaskState.ERROR:
              var toCall = this.reject_;
              async(toCall.bind(null, this.error_))();
              break;

            default:
              triggered = false;
              break;
          }

          if (triggered) {
            this.resolve_ = null;
            this.reject_ = null;
          }
        }
      };

      UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);

        switch (externalState) {
          case TaskState.RUNNING:
          case TaskState.PAUSED:
            if (observer.next) {
              async(observer.next.bind(observer, this.snapshot))();
            }

            break;

          case TaskState.SUCCESS:
            if (observer.complete) {
              async(observer.complete.bind(observer))();
            }

            break;

          case TaskState.CANCELED:
          case TaskState.ERROR:
            if (observer.error) {
              async(observer.error.bind(observer, this.error_))();
            }

            break;

          default:
            // TODO(andysoto): assert(false);
            if (observer.error) {
              async(observer.error.bind(observer, this.error_))();
            }

        }
      };
      /**
       * Resumes a paused task. Has no effect on a currently running or failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED || this.state_ === InternalTaskState.PAUSING;

        if (valid) {
          this.transition_(InternalTaskState.RUNNING);
        }

        return valid;
      };
      /**
       * Pauses a currently running task. Has no effect on a paused or failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;

        if (valid) {
          this.transition_(InternalTaskState.PAUSING);
        }

        return valid;
      };
      /**
       * Cancels a currently running or paused task. Has no effect on a complete or
       * failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING || this.state_ === InternalTaskState.PAUSING;

        if (valid) {
          this.transition_(InternalTaskState.CANCELING);
        }

        return valid;
      };

      return UploadTask;
    }();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides methods to interact with a bucket in the Firebase Storage service.
     * @param location An fbs.location, or the URL at
     *     which to base this object, in one of the following forms:
     *         gs://<bucket>/<object-path>
     *         http[s]://firebasestorage.googleapis.com/
     *                     <api-version>/b/<bucket>/o/<object-path>
     *     Any query or fragment strings will be ignored in the http[s]
     *     format. If no value is passed, the storage object will use a URL based on
     *     the project ID of the base firebase.App instance.
     */


    var Reference =
    /** @class */
    function () {
      function Reference(service, location) {
        this.service = service;

        if (location instanceof Location) {
          this.location = location;
        } else {
          this.location = Location.makeFromUrl(location);
        }
      }
      /**
       * @return The URL for the bucket and path this object references,
       *     in the form gs://<bucket>/<object-path>
       * @override
       */


      Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
      };

      Reference.prototype.newRef = function (service, location) {
        return new Reference(service, location);
      };

      Reference.prototype.mappings = function () {
        return getMappings();
      };
      /**
       * @return A reference to the object obtained by
       *     appending childPath, removing any duplicate, beginning, or trailing
       *     slashes.
       */


      Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.service, location);
      };

      Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function get() {
          var newPath = parent(this.location.path);

          if (newPath === null) {
            return null;
          }

          var location = new Location(this.location.bucket, newPath);
          return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function get() {
          var location = new Location(this.location.bucket, '');
          return this.newRef(this.service, location);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "bucket", {
        get: function get() {
          return this.location.bucket;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "fullPath", {
        get: function get() {
          return this.location.path;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "name", {
        get: function get() {
          return lastComponent(this.location.path);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "storage", {
        get: function get() {
          return this.service;
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Uploads a blob to this object's location.
       * @param data The blob to upload.
       * @return An UploadTask that lets you control and
       *     observe the upload.
       */

      Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) {
          metadata = null;
        }

        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
      };
      /**
       * Uploads a string to this object's location.
       * @param value The string to upload.
       * @param format The format of the string to upload.
       * @return An UploadTask that lets you control and
       *     observe the upload.
       */


      Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) {
          format = StringFormat.RAW;
        }

        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);

        if (!isDef(metadataClone['contentType']) && isDef(data.contentType)) {
          metadataClone['contentType'] = data.contentType;
        }

        return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
      };
      /**
       * Deletes the object at this location.
       * @return A promise that resolves if the deletion succeeds.
       */


      Reference.prototype["delete"] = function () {
        var _this = this;

        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.service.getAuthToken().then(function (authToken) {
          var requestInfo = deleteObject(_this.service, _this.location);
          return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * List all items (files) and prefixes (folders) under this storage reference.
       *
       * This is a helper method for calling list() repeatedly until there are
       * no more results. The default pagination size is 1000.
       *
       * Note: The results may not be consistent if objects are changed while this
       * operation is running.
       *
       * Warning: listAll may potentially consume too many resources if there are
       * too many results.
       *
       * @return A Promise that resolves with all the items and prefixes under
       *      the current storage reference. `prefixes` contains references to
       *      sub-directories and `items` contains references to objects in this
       *      folder. `nextPageToken` is never returned.
       */


      Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
          prefixes: [],
          items: []
        };
        return this.listAllHelper(accumulator).then(function () {
          return accumulator;
        });
      };

      Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var opt, nextPage;

          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                opt = {
                  // maxResults is 1000 by default.
                  pageToken: pageToken
                };
                return [4
                /*yield*/
                , this.list(opt)];

              case 1:
                nextPage = _c.sent();

                (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

                (_b = accumulator.items).push.apply(_b, nextPage.items);

                if (!(nextPage.nextPageToken != null)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.listAllHelper(accumulator, nextPage.nextPageToken)];

              case 2:
                _c.sent();

                _c.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      };
      /**
       * List items (files) and prefixes (folders) under this storage reference.
       *
       * List API is only available for Firebase Rules Version 2.
       *
       * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
       * delimited folder structure.
       * Refer to GCS's List API if you want to learn more.
       *
       * To adhere to Firebase Rules's Semantics, Firebase Storage does not
       * support objects whose paths end with "/" or contain two consecutive
       * "/"s. Firebase Storage List API will filter these unsupported objects.
       * list() may fail if there are too many unsupported objects in the bucket.
       *
       * @param options See ListOptions for details.
       * @return A Promise that resolves with the items and prefixes.
       *      `prefixes` contains references to sub-folders and `items`
       *      contains references to objects in this folder. `nextPageToken`
       *      can be used to get the rest of the results.
       */


      Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.service.getAuthToken().then(function (authToken) {
          var op = options || {};
          var requestInfo = list(self.service, self.location,
          /*delimiter= */
          '/', op.pageToken, op.maxResults);
          return self.service.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       *     A promise that resolves with the metadata for this object. If this
       *     object doesn't exist or metadata cannot be retreived, the promise is
       *     rejected.
       */


      Reference.prototype.getMetadata = function () {
        var _this = this;

        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.service.getAuthToken().then(function (authToken) {
          var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
          return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * Updates the metadata for this object.
       * @param metadata The new metadata for the object.
       *     Only values that have been explicitly set will be changed. Explicitly
       *     setting a value to null will remove the metadata.
       * @return A promise that resolves
       *     with the new metadata for this object.
       *     @see firebaseStorage.Reference.prototype.getMetadata
       */


      Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;

        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.service.getAuthToken().then(function (authToken) {
          var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
          return _this.service.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * @return A promise that resolves with the download
       *     URL for this object.
       */


      Reference.prototype.getDownloadURL = function () {
        var _this = this;

        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.service.getAuthToken().then(function (authToken) {
          var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
          return _this.service.makeRequest(requestInfo, authToken).getPromise().then(function (url) {
            if (url === null) {
              throw noDownloadURL();
            }

            return url;
          });
        });
      };

      Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
          throw invalidRootOperation(name);
        }
      };

      return Reference;
    }();
    /**
     * A request whose promise always fails.
     * @struct
     * @template T
     */


    var FailRequest =
    /** @class */
    function () {
      function FailRequest(error) {
        this.promise_ = Promise.reject(error);
      }
      /** @inheritDoc */


      FailRequest.prototype.getPromise = function () {
        return this.promise_;
      };
      /** @inheritDoc */


      FailRequest.prototype.cancel = function (_appDelete) {};

      return FailRequest;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param f May be invoked
     *     before the function returns.
     * @param callback Get all the arguments passed to the function
     *     passed to f, including the initial boolean.
     */


    function start(f, callback, timeout) {
      // TODO(andysoto): make this code cleaner (probably refactor into an actual
      // type instead of a bunch of functions with state shared in the closure)
      var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ??\_(???)_/??
      // TODO: find a way to exclude Node type definition for storage because storage only works in browser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var timeoutId = null;
      var hitTimeout = false;
      var cancelState = 0;

      function canceled() {
        return cancelState === 2;
      }

      var triggeredCallback = false; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      function triggerCallback() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (!triggeredCallback) {
          triggeredCallback = true;
          callback.apply(null, args);
        }
      }

      function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
          timeoutId = null;
          f(handler, canceled());
        }, millis);
      } // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      function handler(success) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        if (triggeredCallback) {
          return;
        }

        if (success) {
          triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
          return;
        }

        var mustStop = canceled() || hitTimeout;

        if (mustStop) {
          triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
          return;
        }

        if (waitSeconds < 64) {
          /* TODO(andysoto): don't back off so quickly if we know we're offline. */
          waitSeconds *= 2;
        }

        var waitMillis;

        if (cancelState === 1) {
          cancelState = 2;
          waitMillis = 0;
        } else {
          waitMillis = (waitSeconds + Math.random()) * 1000;
        }

        callWithDelay(waitMillis);
      }

      var stopped = false;

      function stop(wasTimeout) {
        if (stopped) {
          return;
        }

        stopped = true;

        if (triggeredCallback) {
          return;
        }

        if (timeoutId !== null) {
          if (!wasTimeout) {
            cancelState = 2;
          }

          clearTimeout(timeoutId);
          callWithDelay(0);
        } else {
          if (!wasTimeout) {
            cancelState = 1;
          }
        }
      }

      callWithDelay(0);
      setTimeout(function () {
        hitTimeout = true;
        stop(true);
      }, timeout);
      return stop;
    }
    /**
     * Stops the retry loop from repeating.
     * If the function is currently "in between" retries, it is invoked immediately
     * with the second parameter as "true". Otherwise, it will be invoked once more
     * after the current invocation finishes iff the current invocation would have
     * triggered another retry.
     */


    function stop(id) {
      id(false);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     * @template T
     */


    var NetworkRequest =
    /** @class */
    function () {
      function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;

        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
          _this.resolve_ = resolve;
          _this.reject_ = reject;

          _this.start_();
        });
      }
      /**
       * Actually starts the retry loop.
       */


      NetworkRequest.prototype.start_ = function () {
        var self = this;

        function doTheRequest(backoffCallback, canceled) {
          if (canceled) {
            backoffCallback(false, new RequestEndStatus(false, null, true));
            return;
          }

          var xhr = self.pool_.createXhrIo();
          self.pendingXhr_ = xhr;

          function progressListener(progressEvent) {
            var loaded = progressEvent.loaded;
            var total = progressEvent.lengthComputable ? progressEvent.total : -1;

            if (self.progressCallback_ !== null) {
              self.progressCallback_(loaded, total);
            }
          }

          if (self.progressCallback_ !== null) {
            xhr.addUploadProgressListener(progressListener);
          } // eslint-disable-next-line @typescript-eslint/no-floating-promises


          xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
            if (self.progressCallback_ !== null) {
              xhr.removeUploadProgressListener(progressListener);
            }

            self.pendingXhr_ = null;
            xhr = xhr;
            var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
            var status = xhr.getStatus();

            if (!hitServer || self.isRetryStatusCode_(status)) {
              var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
              backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
              return;
            }

            var successCode = self.successCodes_.indexOf(status) !== -1;
            backoffCallback(true, new RequestEndStatus(successCode, xhr));
          });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */


        function backoffDone(requestWentThrough, status) {
          var resolve = self.resolve_;
          var reject = self.reject_;
          var xhr = status.xhr;

          if (status.wasSuccessCode) {
            try {
              var result = self.callback_(xhr, xhr.getResponseText());

              if (isJustDef(result)) {
                resolve(result);
              } else {
                resolve();
              }
            } catch (e) {
              reject(e);
            }
          } else {
            if (xhr !== null) {
              var err = unknown();
              err.setServerResponseProp(xhr.getResponseText());

              if (self.errorCallback_) {
                reject(self.errorCallback_(xhr, err));
              } else {
                reject(err);
              }
            } else {
              if (status.canceled) {
                var err = self.appDelete_ ? appDeleted() : canceled();
                reject(err);
              } else {
                var err = retryLimitExceeded();
                reject(err);
              }
            }
          }
        }

        if (this.canceled_) {
          backoffDone(false, new RequestEndStatus(false, null, true));
        } else {
          this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
      };
      /** @inheritDoc */


      NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
      };
      /** @inheritDoc */


      NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;

        if (this.backoffId_ !== null) {
          stop(this.backoffId_);
        }

        if (this.pendingXhr_ !== null) {
          this.pendingXhr_.abort();
        }
      };

      NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
        408, // Too Many Requests: you're getting rate-limited, basically.
        429];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
      };

      return NetworkRequest;
    }();
    /**
     * A collection of information about the result of a network request.
     * @param opt_canceled Defaults to false.
     * @struct
     */


    var RequestEndStatus =
    /** @class */
    function () {
      function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
      }

      return RequestEndStatus;
    }();

    function addAuthHeader_(headers, authToken) {
      if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
      }
    }

    function addVersionHeader_(headers) {
      var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
      headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
    }

    function addGmpidHeader_(headers, appId) {
      if (appId) {
        headers['X-Firebase-GMPID'] = appId;
      }
    }
    /**
     * @template T
     */


    function makeRequest(requestInfo, appId, authToken, pool) {
      var queryPart = makeQueryString(requestInfo.urlParams);
      var url = requestInfo.url + queryPart;
      var headers = Object.assign({}, requestInfo.headers);
      addGmpidHeader_(headers, appId);
      addAuthHeader_(headers, authToken);
      addVersionHeader_(headers);
      return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A service that provides firebaseStorage.Reference instances.
     * @param opt_url gs:// url to a custom Storage Bucket
     *
     * @struct
     */


    var StorageService =
    /** @class */
    function () {
      function StorageService(app, authProvider, pool, url) {
        var _a;

        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;
        this.authProvider_ = authProvider;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requests_ = new Set();
        this.pool_ = pool;

        if (url != null) {
          this.bucket_ = Location.makeFromBucketSpec(url);
        } else {
          this.bucket_ = StorageService.extractBucket_((_a = this.app_) === null || _a === void 0 ? void 0 : _a.options);
        }

        this.internals_ = new ServiceInternals(this);
      }

      StorageService.extractBucket_ = function (config) {
        var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

        if (bucketString == null) {
          return null;
        }

        return Location.makeFromBucketSpec(bucketString);
      };

      StorageService.prototype.getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var auth, tokenData;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                auth = this.authProvider_.getImmediate({
                  optional: true
                });
                if (!auth) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , auth.getToken()];

              case 1:
                tokenData = _a.sent();

                if (tokenData !== null) {
                  return [2
                  /*return*/
                  , tokenData.accessToken];
                }

                _a.label = 2;

              case 2:
                return [2
                /*return*/
                , null];
            }
          });
        });
      };
      /**
       * Stop running requests and prevent more from being created.
       */


      StorageService.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requests_.forEach(function (request) {
          return request.cancel();
        });
        this.requests_.clear();
      };
      /**
       * Returns a new firebaseStorage.Reference object referencing this StorageService
       * at the given Location.
       * @param loc The Location.
       * @return A firebaseStorage.Reference.
       */


      StorageService.prototype.makeStorageReference = function (loc) {
        return new Reference(this, loc);
      };

      StorageService.prototype.makeRequest = function (requestInfo, authToken) {
        var _this = this;

        if (!this.deleted_) {
          var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
          this.requests_.add(request_1); // Request removes itself from set when complete.

          request_1.getPromise().then(function () {
            return _this.requests_["delete"](request_1);
          }, function () {
            return _this.requests_["delete"](request_1);
          });
          return request_1;
        } else {
          return new FailRequest(appDeleted());
        }
      };
      /**
       * Returns a firebaseStorage.Reference for the given path in the default
       * bucket.
       */


      StorageService.prototype.ref = function (path) {
        function validator(path) {
          if (typeof path !== 'string') {
            throw 'Path is not a string.';
          }

          if (/^[A-Za-z]+:\/\//.test(path)) {
            throw 'Expected child path but got a URL, use refFromURL instead.';
          }
        }

        validate('ref', [stringSpec(validator, true)], arguments);

        if (this.bucket_ == null) {
          throw new Error('No Storage Bucket defined in Firebase Options.');
        }

        var ref = new Reference(this, this.bucket_);

        if (path != null) {
          return ref.child(path);
        } else {
          return ref;
        }
      };
      /**
       * Returns a firebaseStorage.Reference object for the given absolute URL,
       * which must be a gs:// or http[s]:// URL.
       */


      StorageService.prototype.refFromURL = function (url) {
        function validator(p) {
          if (typeof p !== 'string') {
            throw 'Path is not a string.';
          }

          if (!/^[A-Za-z]+:\/\//.test(p)) {
            throw 'Expected full URL but got a child path, use ref instead.';
          }

          try {
            Location.makeFromUrl(p);
          } catch (e) {
            throw 'Expected valid full URL but got an invalid one.';
          }
        }

        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this, url);
      };

      Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
        get: function get() {
          return this.maxUploadRetryTime_;
        },
        enumerable: false,
        configurable: true
      });

      StorageService.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxUploadRetryTime_ = time;
      };

      Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
        get: function get() {
          return this.maxOperationRetryTime_;
        },
        enumerable: false,
        configurable: true
      });

      StorageService.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.maxOperationRetryTime_ = time;
      };

      Object.defineProperty(StorageService.prototype, "app", {
        get: function get() {
          return this.app_;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StorageService.prototype, "INTERNAL", {
        get: function get() {
          return this.internals_;
        },
        enumerable: false,
        configurable: true
      });
      return StorageService;
    }();
    /**
     * @struct
     */


    var ServiceInternals =
    /** @class */
    function () {
      function ServiceInternals(service) {
        this.service_ = service;
      }
      /**
       * Called when the associated app is deleted.
       */


      ServiceInternals.prototype["delete"] = function () {
        this.service_.deleteApp();
        return Promise.resolve();
      };

      return ServiceInternals;
    }();

    var name = "@firebase/storage";
    var version = "0.3.41";
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Type constant for Firebase Storage.
     */

    var STORAGE_TYPE = 'storage';

    function factory(container, url) {
      // Dependencies
      var app = container.getProvider('app').getImmediate();
      var authProvider = container.getProvider('auth-internal');
      return new StorageService(app, authProvider, new XhrIoPool(), url);
    }

    function registerStorage(instance) {
      var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: Reference
      };
      instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps(namespaceExports).setMultipleInstances(true));
      instance.registerVersion(name, version);
    }

    registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/util/dist/index.cjs.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseUtilDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */

    (function (global) {
      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var tslib = __webpack_require__(
      /*! tslib */
      "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
       */


      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,

        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,

        /**
         * Firebase SDK Version
         */
        SDK_VERSION: '${JSCORE_VERSION}'
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws an error if the provided assertion is falsy
       */

      var assert = function assert(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      /**
       * Returns an Error object suitable for throwing.
       */


      var assertionError = function assertionError(message) {
        return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var stringToByteArray = function stringToByteArray(str) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Turns an array of numbers into the string given by the concatenation of the
       * characters to which the numbers correspond.
       * @param bytes Array of numbers representing characters.
       * @return Stringification of the array.
       */


      var byteArrayToString = function byteArrayToString(bytes) {
        // TODO(user): Use native implementations if/when available
        var out = [];
        var pos = 0,
            c = 0;

        while (pos < bytes.length) {
          var c1 = bytes[pos++];

          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }

        return out.join('');
      }; // We define it as an object literal instead of a class because a class compiled down to es5 can't
      // be treeshaked. https://github.com/rollup/rollup/issues/1691
      // Static lookup maps, lazily populated by init_()


      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,

        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,

        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,

        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,

        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
        },

        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
        },

        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === 'function',

        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray: function encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
          }

          this.init_();
          var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          var output = [];

          for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            var outByte4 = byte3 & 0x3f;

            if (!haveByte3) {
              outByte4 = 64;

              if (!haveByte2) {
                outByte3 = 64;
              }
            }

            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }

          return output.join('');
        },

        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString: function encodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }

          return this.encodeByteArray(stringToByteArray(input), webSafe);
        },

        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString: function decodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }

          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },

        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
          this.init_();
          var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          var output = [];

          for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;

            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw Error();
            }

            var outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);

            if (byte3 !== 64) {
              var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
              output.push(outByte2);

              if (byte4 !== 64) {
                var outByte3 = byte3 << 6 & 0xc0 | byte4;
                output.push(outByte3);
              }
            }
          }

          return output;
        },

        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_: function init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      /**
       * URL-safe base64 encoding
       */

      var base64Encode = function base64Encode(str) {
        var utf8Bytes = stringToByteArray(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      /**
       * URL-safe base64 decoding
       *
       * NOTE: DO NOT use the global atob() function - it does NOT support the
       * base64Url variant encoding.
       *
       * @param str To be decoded
       * @return Decoded result, if possible
       */


      var base64Decode = function base64Decode(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error('base64Decode failed: ', e);
        }

        return null;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Do a deep-copy of basic JavaScript Objects or Arrays.
       */


      function deepCopy(value) {
        return deepExtend(undefined, value);
      }
      /**
       * Copy properties from source to target (recursively allows extension
       * of Objects and Arrays).  Scalar values in the target are over-written.
       * If target is undefined, an object of the appropriate type will be created
       * (and returned).
       *
       * We recursively copy all child properties of plain Objects in the source- so
       * that namespace- like dictionaries are merged.
       *
       * Note that the target can be a function, in which case the properties in
       * the source Object are copied onto it as static properties of the Function.
       */


      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }

        switch (source.constructor) {
          case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());

          case Object:
            if (target === undefined) {
              target = {};
            }

            break;

          case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;

          default:
            // Not a plain Object - treat it as a scalar.
            return source;
        }

        for (var prop in source) {
          if (!source.hasOwnProperty(prop)) {
            continue;
          }

          target[prop] = deepExtend(target[prop], source[prop]);
        }

        return target;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Deferred =
      /** @class */
      function () {
        function Deferred() {
          var _this = this;

          this.reject = function () {};

          this.resolve = function () {};

          this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */


        Deferred.prototype.wrapCallback = function (callback) {
          var _this = this;

          return function (error, value) {
            if (error) {
              _this.reject(error);
            } else {
              _this.resolve(value);
            }

            if (typeof callback === 'function') {
              // Attaching noop handler just in case developer wasn't expecting
              // promises
              _this.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
              // assert that the parameter length is 1


              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        };

        return Deferred;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns navigator.userAgent string or '' if it's not defined.
       * @return user agent string
       */


      function getUA() {
        if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
          return navigator['userAgent'];
        } else {
          return '';
        }
      }
      /**
       * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
       *
       * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
       * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
       * wait for a callback.
       */


      function isMobileCordova() {
        return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      /**
       * Detect Node.js.
       *
       * @return true if Node.js environment is detected.
       */
      // Node detection logic from: https://github.com/iliakan/detect-node/


      function isNode() {
        try {
          return Object.prototype.toString.call(global.process) === '[object process]';
        } catch (e) {
          return false;
        }
      }
      /**
       * Detect Browser Environment
       */


      function isBrowser() {
        return typeof self === 'object' && self.self === self;
      }

      function isBrowserExtension() {
        var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
      }
      /**
       * Detect React Native.
       *
       * @return true if ReactNative environment is detected.
       */


      function isReactNative() {
        return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
      }
      /** Detects Electron apps. */


      function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
      }
      /** Detects Internet Explorer. */


      function isIE() {
        var ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      }
      /** Detects Universal Windows Platform apps. */


      function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
      }
      /**
       * Detect whether the current SDK build is the Node version.
       *
       * @return true if it's the Node SDK build.
       */


      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      /** Returns true if we are running in Safari. */


      function isSafari() {
        return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }
      /**
       * This method checks if indexedDB is supported by current browser
       * @return true if indexedDB is supported by current browser
       */


      function isIndexedDBAvailable() {
        if (!('indexedDB' in window) || indexedDB === null) {
          return false;
        }

        return true;
      }
      /**
       * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
       * if errors occur during the database open operation.
       */


      function validateIndexedDBOpenable() {
        return new Promise(function (resolve, reject) {
          try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);

            request_1.onsuccess = function () {
              request_1.result.close(); // delete database only when it doesn't pre-exist

              if (!preExist_1) {
                window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
              }

              resolve(true);
            };

            request_1.onupgradeneeded = function () {
              preExist_1 = false;
            };

            request_1.onerror = function () {
              var _a;

              reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      /**
       *
       * This method checks whether cookie is enabled within current browser
       * @return true if cookie is enabled within current browser
       */


      function areCookiesEnabled() {
        if (!navigator || !navigator.cookieEnabled) {
          return false;
        }

        return true;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ERROR_NAME = 'FirebaseError'; // Based on code from:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

      var FirebaseError =
      /** @class */
      function (_super) {
        tslib.__extends(FirebaseError, _super);

        function FirebaseError(code, message) {
          var _this = _super.call(this, message) || this;

          _this.code = code;
          _this.name = ERROR_NAME; // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

          Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.

          if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
          }

          return _this;
        }

        return FirebaseError;
      }(Error);

      var ErrorFactory =
      /** @class */
      function () {
        function ErrorFactory(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }

        ErrorFactory.prototype.create = function (code) {
          var data = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
          }

          var customData = data[0] || {};
          var fullCode = this.service + "/" + code;
          var template = this.errors[code];
          var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

          var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
          var error = new FirebaseError(fullCode, fullMessage); // Keys with an underscore at the end of their name are not included in
          // error.data for some reason.
          // TODO: Replace with Object.entries when lib is updated to es2017.

          for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];

            if (key.slice(-1) !== '_') {
              if (key in error) {
                console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
              }

              error[key] = customData[key];
            }
          }

          return error;
        };

        return ErrorFactory;
      }();

      function replaceTemplate(template, data) {
        return template.replace(PATTERN, function (_, key) {
          var value = data[key];
          return value != null ? String(value) : "<" + key + "?>";
        });
      }

      var PATTERN = /\{\$([^}]+)}/g;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Evaluates a JSON string into a javascript object.
       *
       * @param {string} str A string containing JSON.
       * @return {*} The javascript object representing the specified JSON.
       */

      function jsonEval(str) {
        return JSON.parse(str);
      }
      /**
       * Returns JSON representing a javascript object.
       * @param {*} data Javascript object to be stringified.
       * @return {string} The JSON contents of the object.
       */


      function stringify(data) {
        return JSON.stringify(data);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Decodes a Firebase auth. token into constituent parts.
       *
       * Notes:
       * - May return with invalid / incomplete claims if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var decode = function decode(token) {
        var header = {},
            claims = {},
            data = {},
            signature = '';

        try {
          var parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
        } catch (e) {}

        return {
          header: header,
          claims: claims,
          data: data,
          signature: signature
        };
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
       * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidTimestamp = function isValidTimestamp(token) {
        var claims = decode(token).claims;
        var now = Math.floor(new Date().getTime() / 1000);
        var validSince = 0,
            validUntil = 0;

        if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
          } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
          }

          if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
          } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
          }
        }

        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      /**
       * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
       *
       * Notes:
       * - May return null if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var issuedAtTime = function issuedAtTime(token) {
        var claims = decode(token).claims;

        if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
        }

        return null;
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isValidFormat = function isValidFormat(token) {
        var decoded = decode(token),
            claims = decoded.claims;
        return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
      };
      /**
       * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */


      var isAdmin = function isAdmin(token) {
        var claims = decode(token).claims;
        return typeof claims === 'object' && claims['admin'] === true;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return undefined;
        }
      }

      function isEmpty(obj) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }

        return true;
      }

      function map(obj, fn, contextObj) {
        var res = {};

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }

        return res;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
       * params object (e.g. {arg: 'val', arg2: 'val2'})
       * Note: You must prepend it with ? when adding it to a URL.
       */


      function querystring(querystringParams) {
        var params = [];

        var _loop_1 = function _loop_1(key, value) {
          if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
              params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        };

        for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
          var _b = _a[_i],
              key = _b[0],
              value = _b[1];

          _loop_1(key, value);
        }

        return params.length ? '&' + params.join('&') : '';
      }
      /**
       * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
       * (e.g. {arg: 'val', arg2: 'val2'})
       */


      function querystringDecode(querystring) {
        var obj = {};
        var tokens = querystring.replace(/^\?/, '').split('&');
        tokens.forEach(function (token) {
          if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
          }
        });
        return obj;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview SHA-1 cryptographic hash.
       * Variable names follow the notation in FIPS PUB 180-3:
       * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
       *
       * Usage:
       *   var sha1 = new sha1();
       *   sha1.update(bytes);
       *   var hash = sha1.digest();
       *
       * Performance:
       *   Chrome 23:   ~400 Mbit/s
       *   Firefox 16:  ~250 Mbit/s
       *
       */

      /**
       * SHA-1 cryptographic hash constructor.
       *
       * The properties declared here are discussed in the above algorithm document.
       * @constructor
       * @final
       * @struct
       */


      var Sha1 =
      /** @class */
      function () {
        function Sha1() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */

          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */

          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */

          this.pad_ = [];
          /**
           * @private {number}
           */

          this.inbuf_ = 0;
          /**
           * @private {number}
           */

          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;

          for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }

          this.reset();
        }

        Sha1.prototype.reset = function () {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
        };
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */


        Sha1.prototype.compress_ = function (buf, offset) {
          if (!offset) {
            offset = 0;
          }

          var W = this.W_; // get 16 big endian words

          if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
              // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
              // have a bug that turns the post-increment ++ operator into pre-increment
              // during JIT compilation.  We have code that depends heavily on SHA-1 for
              // correctness and which is affected by this bug, so I've removed all uses
              // of post-increment ++ in which the result value is used.  We can revert
              // this change once the Safari bug
              // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
              // most clients have been updated.
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (var i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          } // expand to 80 words


          for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
          }

          var a = this.chain_[0];
          var b = this.chain_[1];
          var c = this.chain_[2];
          var d = this.chain_[3];
          var e = this.chain_[4];
          var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

          for (var i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 0x5a827999;
              } else {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
            }

            var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
          }

          this.chain_[0] = this.chain_[0] + a & 0xffffffff;
          this.chain_[1] = this.chain_[1] + b & 0xffffffff;
          this.chain_[2] = this.chain_[2] + c & 0xffffffff;
          this.chain_[3] = this.chain_[3] + d & 0xffffffff;
          this.chain_[4] = this.chain_[4] + e & 0xffffffff;
        };

        Sha1.prototype.update = function (bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
            return;
          }

          if (length === undefined) {
            length = bytes.length;
          }

          var lengthMinusBlock = length - this.blockSize;
          var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

          var buf = this.buf_;
          var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

          while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }

            if (typeof bytes === 'string') {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;

                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

                  break;
                }
              }
            }
          }

          this.inbuf_ = inbuf;
          this.total_ += length;
        };
        /** @override */


        Sha1.prototype.digest = function () {
          var digest = [];
          var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          } // Add # bits.


          for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
          }

          this.compress_(this.buf_);
          var n = 0;

          for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }

          return digest;
        };

        return Sha1;
      }();
      /**
       * Helper to make a Subscribe function (just like Promise helps make a
       * Thenable).
       *
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */


      function createSubscribe(executor, onNoObservers) {
        var proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      /**
       * Implement fan-out for any number of Observers attached via a subscribe
       * function.
       */


      var ObserverProxy =
      /** @class */
      function () {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        function ObserverProxy(executor, onNoObservers) {
          var _this = this;

          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0; // Micro-task scheduling by calling task.then().

          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.

          this.task.then(function () {
            executor(_this);
          })["catch"](function (e) {
            _this.error(e);
          });
        }

        ObserverProxy.prototype.next = function (value) {
          this.forEachObserver(function (observer) {
            observer.next(value);
          });
        };

        ObserverProxy.prototype.error = function (error) {
          this.forEachObserver(function (observer) {
            observer.error(error);
          });
          this.close(error);
        };

        ObserverProxy.prototype.complete = function () {
          this.forEachObserver(function (observer) {
            observer.complete();
          });
          this.close();
        };
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */


        ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
          var _this = this;

          var observer;

          if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
          } // Assemble an Observer object when passed as callback functions.


          if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error: error,
              complete: complete
            };
          }

          if (observer.next === undefined) {
            observer.next = noop;
          }

          if (observer.error === undefined) {
            observer.error = noop;
          }

          if (observer.complete === undefined) {
            observer.complete = noop;
          }

          var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.

          if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
              try {
                if (_this.finalError) {
                  observer.error(_this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {// nothing
              }

              return;
            });
          }

          this.observers.push(observer);
          return unsub;
        }; // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.


        ObserverProxy.prototype.unsubscribeOne = function (i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
            return;
          }

          delete this.observers[i];
          this.observerCount -= 1;

          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        };

        ObserverProxy.prototype.forEachObserver = function (fn) {
          if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
          } // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.


          for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }; // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.


        ObserverProxy.prototype.sendOne = function (i, fn) {
          var _this = this; // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
              try {
                fn(_this.observers[i]);
              } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) {
                  console.error(e);
                }
              }
            }
          });
        };

        ObserverProxy.prototype.close = function (err) {
          var _this = this;

          if (this.finalized) {
            return;
          }

          this.finalized = true;

          if (err !== undefined) {
            this.finalError = err;
          } // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
          });
        };

        return ObserverProxy;
      }();
      /** Turn synchronous function into one called asynchronously. */


      function async(fn, onError) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          Promise.resolve(true).then(function () {
            fn.apply(void 0, args);
          })["catch"](function (error) {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      /**
       * Return true if the object passed in implements any of the named methods.
       */


      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
          return false;
        }

        for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
          var method = methods_1[_i];

          if (method in obj && typeof obj[method] === 'function') {
            return true;
          }
        }

        return false;
      }

      function noop() {// do nothing
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Check to make sure the appropriate number of arguments are provided for a public function.
       * Throws an error if it fails.
       *
       * @param fnName The function name
       * @param minCount The minimum number of arguments to allow for the function call
       * @param maxCount The maximum number of argument to allow for the function call
       * @param argCount The actual number of arguments provided.
       */


      var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
        var argError;

        if (argCount < minCount) {
          argError = 'at least ' + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
        }

        if (argError) {
          var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
          throw new Error(error);
        }
      };
      /**
       * Generates a string to prefix an error message about failed argument validation
       *
       * @param fnName The function name
       * @param argumentNumber The index of the argument
       * @param optional Whether or not the argument is optional
       * @return The prefix to add to the error thrown for validation.
       */


      function errorPrefix(fnName, argumentNumber, optional) {
        var argName = '';

        switch (argumentNumber) {
          case 1:
            argName = optional ? 'first' : 'First';
            break;

          case 2:
            argName = optional ? 'second' : 'Second';
            break;

          case 3:
            argName = optional ? 'third' : 'Third';
            break;

          case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;

          default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }

        var error = fnName + ' failed: ';
        error += argName + ' argument ';
        return error;
      }
      /**
       * @param fnName
       * @param argumentNumber
       * @param namespace
       * @param optional
       */


      function validateNamespace(fnName, argumentNumber, namespace, optional) {
        if (optional && !namespace) {
          return;
        }

        if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
        }
      }

      function validateCallback(fnName, argumentNumber, callback, optional) {
        if (optional && !callback) {
          return;
        }

        if (typeof callback !== 'function') {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
        }
      }

      function validateContextObject(fnName, argumentNumber, context, optional) {
        if (optional && !context) {
          return;
        }

        if (typeof context !== 'object' || context === null) {
          throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
      // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
      // so it's been modified.
      // Note that not all Unicode characters appear as single characters in JavaScript strings.
      // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
      // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
      // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
      // pair).
      // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

      /**
       * @param {string} str
       * @return {Array}
       */


      var stringToByteArray$1 = function stringToByteArray$1(str) {
        var out = [];
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

          if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.

            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

            c = 0x10000 + (high << 10) + low;
          }

          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }

        return out;
      };
      /**
       * Calculate length without actually converting; useful for doing cheaper validation.
       * @param {string} str
       * @return {number}
       */


      var stringLength = function stringLength(str) {
        var p = 0;

        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);

          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
          } else {
            p += 3;
          }
        }

        return p;
      };

      exports.CONSTANTS = CONSTANTS;
      exports.Deferred = Deferred;
      exports.ErrorFactory = ErrorFactory;
      exports.FirebaseError = FirebaseError;
      exports.Sha1 = Sha1;
      exports.areCookiesEnabled = areCookiesEnabled;
      exports.assert = assert;
      exports.assertionError = assertionError;
      exports.async = async;
      exports.base64 = base64;
      exports.base64Decode = base64Decode;
      exports.base64Encode = base64Encode;
      exports.contains = contains;
      exports.createSubscribe = createSubscribe;
      exports.decode = decode;
      exports.deepCopy = deepCopy;
      exports.deepExtend = deepExtend;
      exports.errorPrefix = errorPrefix;
      exports.getUA = getUA;
      exports.isAdmin = isAdmin;
      exports.isBrowser = isBrowser;
      exports.isBrowserExtension = isBrowserExtension;
      exports.isElectron = isElectron;
      exports.isEmpty = isEmpty;
      exports.isIE = isIE;
      exports.isIndexedDBAvailable = isIndexedDBAvailable;
      exports.isMobileCordova = isMobileCordova;
      exports.isNode = isNode;
      exports.isNodeSdk = isNodeSdk;
      exports.isReactNative = isReactNative;
      exports.isSafari = isSafari;
      exports.isUWP = isUWP;
      exports.isValidFormat = isValidFormat;
      exports.isValidTimestamp = isValidTimestamp;
      exports.issuedAtTime = issuedAtTime;
      exports.jsonEval = jsonEval;
      exports.map = map;
      exports.querystring = querystring;
      exports.querystringDecode = querystringDecode;
      exports.safeGet = safeGet;
      exports.stringLength = stringLength;
      exports.stringToByteArray = stringToByteArray$1;
      exports.stringify = stringify;
      exports.validateArgCount = validateArgCount;
      exports.validateCallback = validateCallback;
      exports.validateContextObject = validateContextObject;
      exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
      exports.validateNamespace = validateNamespace; //# sourceMappingURL=index.cjs.js.map

      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
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
  "./node_modules/firebase/app/dist/index.cjs.js":
  /*!*****************************************************!*\
    !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseAppDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));

    var name = "firebase";
    var version = "7.17.2";
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    firebase.registerVersion(name, version, 'app');
    module.exports = firebase; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/database/dist/index.esm.js":
  /*!**********************************************************!*\
    !*** ./node_modules/firebase/database/dist/index.esm.js ***!
    \**********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseDatabaseDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/database */
    "./node_modules/@firebase/database/dist/index.cjs.js");
    /* harmony import */


    var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/firebase/storage/dist/index.esm.js":
  /*!*********************************************************!*\
    !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
    \*********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/storage */
    "./node_modules/@firebase/storage/dist/index.esm.js"); //# sourceMappingURL=index.esm.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~admin-workers-edit-worker-edit-worker-module~admin-workers-workers-module~client-settings-co~131bcc2e-es5.js.map