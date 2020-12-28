var client = require("../controllers/Job.Controller");
var {VerifyToken, authRole} = require('./middleware.js');
const {ROLE} = require("../config/roles");
module.exports = (app) => {
    app.post("/job/register", VerifyToken, client.register);
    app.post("/updatejob", VerifyToken, client.updateJob);
    app.post("/getAllTimesheets",VerifyToken, authRole(ROLE.ADMIN), client.getAllTimesheets);
    app.post("/job/getAll", VerifyToken, client.getAll);
    app.post("/job/getAllJob",VerifyToken, authRole(ROLE.ADMIN), client.getAllJob);
    app.post("/job/getAllType",VerifyToken, authRole(ROLE.ADMIN), client.getAllJobs);
    app.post('/setJobWorkers',VerifyToken,client.setJobWorkers);
    app.post('/setTimesheetDraft',VerifyToken,client.setTimesheetDraft);
    app.post('/updateTimesheet',VerifyToken,client.updateTimesheet);


    app.post("/invoiceregister", VerifyToken, client.invoiceregister);
    app.post("/removeJob", VerifyToken, client.removeJob);
    app.post("/job/profile", VerifyToken, client.updateProfile);
    app.post('/delinvoice',VerifyToken, client.delInvoice);
    app.post("/invoice/profile", client.invoiceupdate);
    app.post("/client/hash", client.updateHash);
    app.delete("/auth/client/:id", client.delete);
    app.post("/getWorkerJob", client.getWorkerJob);
    app.post("/getClientJob", VerifyToken, client.getClientJob);
    app.post("/getAllInvoices",VerifyToken, client.getAllInvoices);
    app.post("/getFindTimesheets",VerifyToken, client.getFindTimesheets);
    app.post("/client/shiftDetail/email",VerifyToken, client.emailshiftDetail);
    app.post("/client/verify/setEmail", client.setEmail);
    app.post("/addWorkerJob",VerifyToken, client.addWorkerJob);
    app.post('/setStatusJob',VerifyToken,client.setStatusJob);
    app.post('/updateStatus',VerifyToken,client.updateStatus);
    app.post('/removeTimesheetsJob',VerifyToken,client.removeTimesheetsJob);
    app.post('/getExpertTimesheets',VerifyToken,client.getExpertTimesheets);
    app.post('/getImportPayroll',client.getImportPayroll);
    app.post('/getAllPayroll',client.getAllPayroll);
    app.post('/getGenerateWorkerID',client.getGenerateWorkerID);

};