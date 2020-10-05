function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-calendar-admin-calendar-module~admin-admin-calendar-admin-job-admin-job-module~a~e21558e8"], {
  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var USERS_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authURL;

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, snackBar) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.snackBar = snackBar;
        this.progressSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
      }

      _createClass(AuthService, [{
        key: "setCurrentUser",
        value: function setCurrentUser() {
          this.currenctUser = JSON.parse(localStorage.getItem('userInfo'));
        }
      }, {
        key: "setCurrentUserLocal",
        value: function setCurrentUserLocal(res) {
          localStorage.setItem('userInfo', JSON.stringify(res));
          this.setCurrentUser();
        }
      }, {
        key: "setAllUser",
        value: function setAllUser() {
          this.AllUser = JSON.parse(localStorage.getItem('allUserInfo'));
        }
      }, {
        key: "setAllUsersLocal",
        value: function setAllUsersLocal(res) {
          localStorage.setItem('allUserInfo', JSON.stringify(res));
          this.setAllUser();
        }
      }, {
        key: "setAllJob",
        value: function setAllJob() {
          this.AllJob = JSON.parse(localStorage.getItem('allJobInfo'));
        }
      }, {
        key: "setAllJobsLocal",
        value: function setAllJobsLocal(res) {
          localStorage.setItem('allJobInfo', JSON.stringify(res));
          this.setAllJob();
        }
      }, {
        key: "setCurrentScrumboard",
        value: function setCurrentScrumboard() {
          this.currentScrumboard = JSON.parse(localStorage.getItem('scrumboardInfo'));
        }
      }, {
        key: "setCurrentScrumboardLocal",
        value: function setCurrentScrumboardLocal(res) {
          localStorage.setItem('scrumboardInfo', JSON.stringify(res));
          this.setCurrentScrumboard();
        }
      }, {
        key: "setClientJob",
        value: function setClientJob() {
          this.clientJob = JSON.parse(localStorage.getItem('clientJobInfo'));
        }
      }, {
        key: "setClientJobLocal",
        value: function setClientJobLocal(res) {
          localStorage.setItem('clientJobInfo', JSON.stringify(res));
          this.setClientJob();
        }
      }, {
        key: "setCurrentParent",
        value: function setCurrentParent() {
          this.currentParent = JSON.parse(localStorage.getItem('parentInfo'));
        }
      }, {
        key: "setCurrentParentLocal",
        value: function setCurrentParentLocal(res) {
          localStorage.setItem('parentInfo', JSON.stringify(res));
          this.setCurrentParent();
        }
      }, {
        key: "setCurrentWorkerJob",
        value: function setCurrentWorkerJob() {
          this.workerJobInfo = JSON.parse(localStorage.getItem('WorkerJobInfo'));
        }
      }, {
        key: "setCurrentWorkerJobLocal",
        value: function setCurrentWorkerJobLocal(res) {
          localStorage.setItem('WorkerJobInfo', JSON.stringify(res));
          this.setCurrentWorkerJob();
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return this.http.post("".concat(USERS_URL, "login"), {
            'emailAddress': email,
            'hash': password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return null;
          }));
        } // public uploadProfile(formData){
        //   return this.http.post<any>(USERS_URL, formData, {
        //     reportProgress:true,
        //     observe:'events'
        //   });
        // }

      }, {
        key: "addJob",
        value: function addJob(user, str) {
          // if(type != 'other')
          //   user['accountType'] = type;
          // const httpHeaders = new HttpHeaders();
          // httpHeaders.set('Content-Type', 'application/json');
          user['clientId'] = str;
          return this.http.post("".concat(USERS_URL, "job/register"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return null;
          }));
        }
      }, {
        key: "getExpertTimesheets",
        value: function getExpertTimesheets() {
          return this.http.post("".concat(USERS_URL, "getExpertTimesheets"), {});
        }
      }, {
        key: "getImportPayroll",
        value: function getImportPayroll(linesR) {
          return this.http.post("".concat(USERS_URL, "getImportPayroll"), {
            linesR: linesR
          });
        }
      }, {
        key: "getAllPayroll",
        value: function getAllPayroll() {
          return this.http.post("".concat(USERS_URL, "getAllPayroll"), {});
        }
      }, {
        key: "getGenerateWorkerID",
        value: function getGenerateWorkerID() {
          return this.http.post("".concat(USERS_URL, "getGenerateWorkerID"), {});
        }
      }, {
        key: "getUserByToken",
        value: function getUserByToken() {
          var userToken = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey);

          if (!userToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          } // return this.getAllUsers().pipe(
          //   map((result:User[])=>{
          //     if(result.length <= 0){
          //       return null;
          //     }
          //     const user = find(result, (item:User) =>{
          //       return (item.accessToken === userToken.toString());
          //     });
          //     if(!user){
          //       return null;
          //     }
          //     user.hash = undefined;
          //     return user;
          //   })
          // )

        }
      }, {
        key: "register",
        value: function register(user) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'other';
          if (type != 'other') user['accountType'] = type; // const httpHeaders = new HttpHeaders();
          // httpHeaders.set('Content-Type', 'application/json');

          return this.http.post("".concat(USERS_URL, "register"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return null;
          }));
        }
      }, {
        key: "requestPassword",
        value: function requestPassword(email) {
          return this.http.post("".concat(USERS_URL) + 'forgot/' + email, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('forgot-password', [])));
        } // getAllUsers():Observable<User[]>{
        //   return this.http.post<User[]>(`${USERS_URL}getAll`,{});
        // }

      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.http.post("".concat(USERS_URL, "getAll"), {}).toPromise();

                  case 3:
                    response = _context.sent;
                    return _context.abrupt("return", response);

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    _context.next = 11;
                    return this.handleError(_context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 7]]);
          }));
        }
      }, {
        key: "getAllUserAuth",
        value: function getAllUserAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getAllUsers();

                  case 2:
                    this.AllUser = _context2.sent;
                    console.log(this.AllUser);
                    console.log('3232323');

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getAllJobAuth",
        value: function getAllJobAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getAllJobs();

                  case 2:
                    this.AllJob = _context3.sent;
                    console.log(this.AllJob);
                    console.log('3232321212');

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getAllJobs",
        value: function getAllJobs() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.http.post("".concat(USERS_URL, "job/getAllJob"), {}).toPromise();

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getAllJobsSync",
        value: function getAllJobsSync() {
          return this.http.post("".concat(USERS_URL, "job/getAllJob"), {});
        }
      }, {
        key: "getParent",
        value: function getParent(id) {
          return this.http.post("".concat(USERS_URL, "getParent"), {
            _id: id
          });
        }
      }, {
        key: "getWorkerJob",
        value: function getWorkerJob(id) {
          return this.http.post("".concat(USERS_URL, "getWorkerJob"), {
            _id: id
          });
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
          };
        }
      }, {
        key: "getTypeJobs",
        value: function getTypeJobs() {
          return this.http.post("".concat(USERS_URL, "job/getAllType"), {});
        }
      }, {
        key: "getAllInvoices",
        value: function getAllInvoices() {
          return this.http.post("".concat(USERS_URL, "getAllInvoices"), {});
        }
      }, {
        key: "getSelectedJobs",
        value: function getSelectedJobs() {
          return this.http.post("".concat(USERS_URL, "job/getAll"), {});
        }
      }, {
        key: "getTypeUsers",
        value: function getTypeUsers(type) {
          return this.http.post("".concat(USERS_URL, "getAllType"), {
            accountType: type
          });
        }
      }, {
        key: "getTimesheets",
        value: function getTimesheets(type) {
          return this.http.post("".concat(USERS_URL, "getFindTimesheets"), {
            status: type
          });
        }
      }, {
        key: "getTypeSubUsers",
        value: function getTypeSubUsers(id) {
          return this.http.post("".concat(USERS_URL, "getAllSubType"), {
            clientId: id
          });
        }
      }, {
        key: "getClientJob",
        value: function getClientJob(id) {
          return this.http.post("".concat(USERS_URL, "getClientJob"), {
            _id: id
          });
        }
      }, {
        key: "upload",
        value: function upload(file) {
          var _this = this;

          var formData = new FormData();
          formData.append("avatar", file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]("POST", "http://localhost:5000/upload", formData, {
            reportProgress: true
          });
          return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            return _this.getEventMessage(event, file);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (envelope) {
            return _this.processProgress(envelope);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])());
        }
      }, {
        key: "processProgress",
        value: function processProgress(envelope) {
          if (typeof envelope === "number") {
            this.progressSource.next(envelope);
          }
        }
      }, {
        key: "getEventMessage",
        value: function getEventMessage(event, file) {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
              return "Uploading file \"".concat(file.name, "\" of size ").concat(file.size, ".");

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
              return Math.round(100 * event.loaded / event.total);

            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
              return "File \"".concat(file.name, "\" was completely uploaded!");

            default:
              return "File \"".concat(file.name, "\" surprising upload event: ").concat(event.type, ".");
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser(_user) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          httpHeaders.set('Content-Type', 'application/json'); //   return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });

          console.log('... auth update user ..');
          console.log(_user);
          console.log('----------------');
          return this.http.post("".concat(USERS_URL, "profile"), _user, {
            headers: httpHeaders
          });
        }
      }, {
        key: "updateJob",
        value: function updateJob(_job) {
          console.log('... auth update user ..');
          console.log(_job);
          console.log('----------------');
          return this.http.post("".concat(USERS_URL, "updatejob"), _job);
        }
      }, {
        key: "openSnackbar",
        value: function openSnackbar(str) {
          this.snackBar.open(str, 'CLOSE', {
            duration: 3000,
            horizontalPosition: 'center'
          });
        }
      }, {
        key: "setWorkerJob",
        value: function setWorkerJob(id, tId, wId, img, name, flag) {
          return this.http.post("".concat(USERS_URL, "addWorkerJob"), {
            id: id,
            tId: tId,
            wId: wId,
            img: img,
            name: name,
            flag: flag
          });
        }
      }, {
        key: "setStatusJob",
        value: function setStatusJob(id, status) {
          return this.http.post("".concat(USERS_URL, "setStatusJob"), {
            id: id,
            status: status
          });
        }
      }, {
        key: "setStatusTimesheet",
        value: function setStatusTimesheet(id, status) {
          return this.http.post("".concat(USERS_URL, "setStatusTimesheet"), {
            id: id,
            status: status
          });
        }
      }, {
        key: "setJobWorkers",
        value: function setJobWorkers(str, id) {
          return this.http.post("".concat(USERS_URL, "setJobWorkers"), {
            str: str,
            id: id
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(obj, type) {
          obj['accountType'] = type;
          return this.http.post("".concat(USERS_URL, "removeUser"), obj);
        }
      }, {
        key: "deleteJob",
        value: function deleteJob(obj) {
          return this.http.post("".concat(USERS_URL, "removeJob"), obj);
        }
      }, {
        key: "cancelJob",
        value: function cancelJob(obj, str) {
          return this.http.post("".concat(USERS_URL, "canceljob"), {
            id: obj.id,
            str: str
          });
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(obj) {
          return this.http.post("".concat(USERS_URL, "sendmsg"), obj);
        }
      }, {
        key: "addInvoice",
        value: function addInvoice(obj) {
          return this.http.post("".concat(USERS_URL, "invoiceregister"), obj);
        }
      }, {
        key: "updateInvoice",
        value: function updateInvoice(obj) {
          return this.http.post("".concat(USERS_URL, "invoice/profile"), obj);
        }
      }, {
        key: "removeTimesheetsJob",
        value: function removeTimesheetsJob(obj) {
          return this.http.post("".concat(USERS_URL, "removeTimesheetsJob"), {
            arr: obj
          });
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(obj) {
          return this.http.post("".concat(USERS_URL, "client/verify/email"), obj);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(obj) {
          return this.http.post("".concat(USERS_URL, "resetpassword"), obj);
        }
      }, {
        key: "emailVerify",
        value: function emailVerify(token) {
          return this.http.post("".concat(USERS_URL, "setVerify"), token);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~admin-admin-calendar-admin-calendar-module~admin-admin-calendar-admin-job-admin-job-module~a~e21558e8-es5.js.map