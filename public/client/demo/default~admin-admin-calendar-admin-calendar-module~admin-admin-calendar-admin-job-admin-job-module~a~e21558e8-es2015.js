(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-calendar-admin-calendar-module~admin-admin-calendar-admin-job-admin-job-module~a~e21558e8"],{

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");









const USERS_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authURL;
class AuthService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.progressSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
    }
    setCurrentUser() {
        this.currenctUser = JSON.parse(localStorage.getItem('userInfo'));
    }
    setCurrentUserLocal(res) {
        localStorage.setItem('userInfo', JSON.stringify(res));
        this.setCurrentUser();
    }
    setAllUser() {
        this.AllUser = JSON.parse(localStorage.getItem('allUserInfo'));
    }
    setAllUsersLocal(res) {
        localStorage.setItem('allUserInfo', JSON.stringify(res));
        this.setAllUser();
    }
    setAllJob() {
        this.AllJob = JSON.parse(localStorage.getItem('allJobInfo'));
    }
    setAllJobsLocal(res) {
        localStorage.setItem('allJobInfo', JSON.stringify(res));
        this.setAllJob();
    }
    setCurrentScrumboard() {
        this.currentScrumboard = JSON.parse(localStorage.getItem('scrumboardInfo'));
    }
    setCurrentScrumboardLocal(res) {
        localStorage.setItem('scrumboardInfo', JSON.stringify(res));
        this.setCurrentScrumboard();
    }
    setClientJob() {
        this.clientJob = JSON.parse(localStorage.getItem('clientJobInfo'));
    }
    setClientJobLocal(res) {
        localStorage.setItem('clientJobInfo', JSON.stringify(res));
        this.setClientJob();
    }
    setCurrentParent() {
        this.currentParent = JSON.parse(localStorage.getItem('parentInfo'));
    }
    setCurrentParentLocal(res) {
        localStorage.setItem('parentInfo', JSON.stringify(res));
        this.setCurrentParent();
    }
    setCurrentWorkerJob() {
        this.workerJobInfo = JSON.parse(localStorage.getItem('WorkerJobInfo'));
    }
    setCurrentWorkerJobLocal(res) {
        localStorage.setItem('WorkerJobInfo', JSON.stringify(res));
        this.setCurrentWorkerJob();
    }
    login(email, password) {
        return this.http.post(`${USERS_URL}login`, { 'emailAddress': email, 'hash': password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            return null;
        }));
    }
    // public uploadProfile(formData){
    //   return this.http.post<any>(USERS_URL, formData, {
    //     reportProgress:true,
    //     observe:'events'
    //   });
    // }
    addJob(user, str) {
        // if(type != 'other')
        //   user['accountType'] = type;
        // const httpHeaders = new HttpHeaders();
        // httpHeaders.set('Content-Type', 'application/json');
        user['clientId'] = str;
        return this.http.post(`${USERS_URL}job/register`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            return null;
        }));
    }
    getExpertTimesheets() {
        return this.http.post(`${USERS_URL}getExpertTimesheets`, {});
    }
    getImportPayroll(linesR) {
        return this.http.post(`${USERS_URL}getImportPayroll`, { linesR: linesR });
    }
    getAllPayroll() {
        return this.http.post(`${USERS_URL}getAllPayroll`, {});
    }
    getGenerateWorkerID() {
        return this.http.post(`${USERS_URL}getGenerateWorkerID`, {});
    }
    getUserByToken() {
        const userToken = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authTokenKey);
        if (!userToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
        // return this.getAllUsers().pipe(
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
    register(user, type = 'other') {
        if (type != 'other')
            user['accountType'] = type;
        // const httpHeaders = new HttpHeaders();
        // httpHeaders.set('Content-Type', 'application/json');
        return this.http.post(`${USERS_URL}register`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            return null;
        }));
    }
    requestPassword(email) {
        return this.http.post(`${USERS_URL}` + 'forgot/' + email, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('forgot-password', [])));
    }
    // getAllUsers():Observable<User[]>{
    //   return this.http.post<User[]>(`${USERS_URL}getAll`,{});
    // }
    getAllUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let response = yield this.http
                    .post(`${USERS_URL}getAll`, {})
                    .toPromise();
                return response;
            }
            catch (error) {
                yield this.handleError(error);
            }
        });
    }
    getAllUserAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.getAllUsers().subscribe((res)=>{
            //   this.AllUser = res;
            //   this.setAllUsersLocal(this.AllUser);
            //   console.log(res)
            // })
            this.AllUser = yield this.getAllUsers();
            console.log(this.AllUser);
            console.log('3232323');
        });
    }
    getAllJobAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.getAllJobs().subscribe((res)=>{
            //   this.AllJob = res;
            //   this.setAllJobsLocal(this.AllJob);
            //   console.log(res)
            // })
            this.AllJob = yield this.getAllJobs();
            console.log(this.AllJob);
            console.log('3232321212');
        });
    }
    getAllJobs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.post(`${USERS_URL}job/getAllJob`, {}).toPromise();
        });
    }
    getAllJobsSync() {
        return this.http.post(`${USERS_URL}job/getAllJob`, {});
    }
    getParent(id) {
        return this.http.post(`${USERS_URL}getParent`, { _id: id });
    }
    getWorkerJob(id) {
        return this.http.post(`${USERS_URL}getWorkerJob`, { _id: id });
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    getTypeJobs() {
        return this.http.post(`${USERS_URL}job/getAllType`, {});
    }
    getAllInvoices() {
        return this.http.post(`${USERS_URL}getAllInvoices`, {});
    }
    getSelectedJobs() {
        return this.http.post(`${USERS_URL}job/getAll`, {});
    }
    getTypeUsers(type) {
        return this.http.post(`${USERS_URL}getAllType`, { accountType: type });
    }
    getTimesheets(type) {
        return this.http.post(`${USERS_URL}getFindTimesheets`, { status: type });
    }
    getTypeSubUsers(id) {
        return this.http.post(`${USERS_URL}getAllSubType`, { clientId: id });
    }
    getClientJob(id) {
        return this.http.post(`${USERS_URL}getClientJob`, { _id: id });
    }
    upload(file) {
        let formData = new FormData();
        formData.append("avatar", file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]("POST", "http://localhost:5000/upload", formData, {
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(event => this.getEventMessage(event, file)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((envelope) => this.processProgress(envelope)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["last"])());
    }
    processProgress(envelope) {
        if (typeof envelope === "number") {
            this.progressSource.next(envelope);
        }
    }
    getEventMessage(event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                return Math.round((100 * event.loaded) / event.total);
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                return `File "${file.name}" was completely uploaded!`;
            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }
    updateUser(_user) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        httpHeaders.set('Content-Type', 'application/json');
        //   return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
        console.log('... auth update user ..');
        console.log(_user);
        console.log('----------------');
        return this.http.post(`${USERS_URL}profile`, _user, { headers: httpHeaders });
    }
    updateJob(_job) {
        console.log('... auth update user ..');
        console.log(_job);
        console.log('----------------');
        return this.http.post(`${USERS_URL}updatejob`, _job);
    }
    openSnackbar(str) {
        this.snackBar.open(str, 'CLOSE', {
            duration: 3000,
            horizontalPosition: 'center'
        });
    }
    setWorkerJob(id, tId, wId, img, name, flag) {
        return this.http.post(`${USERS_URL}addWorkerJob`, { id: id, tId: tId, wId: wId, img: img, name: name, flag: flag });
    }
    setStatusJob(id, status) {
        return this.http.post(`${USERS_URL}setStatusJob`, { id: id, status: status });
    }
    setStatusTimesheet(id, status) {
        return this.http.post(`${USERS_URL}setStatusTimesheet`, { id: id, status: status });
    }
    setJobWorkers(str, id) {
        return this.http.post(`${USERS_URL}setJobWorkers`, { str: str, id: id });
    }
    deleteUser(obj, type) {
        obj['accountType'] = type;
        return this.http.post(`${USERS_URL}removeUser`, obj);
    }
    deleteJob(obj) {
        return this.http.post(`${USERS_URL}removeJob`, obj);
    }
    cancelJob(obj, str) {
        return this.http.post(`${USERS_URL}canceljob`, { id: obj.id, str: str });
    }
    sendMsg(obj) {
        return this.http.post(`${USERS_URL}sendmsg`, obj);
    }
    addInvoice(obj) {
        return this.http.post(`${USERS_URL}invoiceregister`, obj);
    }
    updateInvoice(obj) {
        return this.http.post(`${USERS_URL}invoice/profile`, obj);
    }
    removeTimesheetsJob(obj) {
        return this.http.post(`${USERS_URL}removeTimesheetsJob`, { arr: obj });
    }
    sendEmail(obj) {
        return this.http.post(`${USERS_URL}client/verify/email`, obj);
    }
    resetPassword(obj) {
        return this.http.post(`${USERS_URL}resetpassword`, obj);
    }
    emailVerify(token) {
        return this.http.post(`${USERS_URL}setVerify`, token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~admin-admin-calendar-admin-calendar-module~admin-admin-calendar-admin-job-admin-job-module~a~e21558e8-es2015.js.map