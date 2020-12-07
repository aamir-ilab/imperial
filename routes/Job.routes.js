var client = require("../controllers/Job.Controller");
var {VerifyToken, authRole} = require('./middleware.js');
const {ROLE} = require("../config/roles");
module.exports = (app) => {
    app.post("/job/register", client.register);
    app.post("/invoiceregister", client.invoiceregister);
    app.post("/removeJob", client.removeJob);
    app.post("/job/profile", client.updateProfile);
    app.post("/updatejob",client.updateJob);
    app.post('/delinvoice',client.delInvoice);
    app.post("/invoice/profile", client.invoiceupdate);
    app.post("/client/hash", client.updateHash);
    app.delete("/auth/client/:id", client.delete);
    app.post("/job/getAll", VerifyToken, client.getAll);
    app.post("/job/getAllType",VerifyToken, authRole(ROLE.ADMIN), client.getAllType);
    app.post("/getWorkerJob", client.getWorkerJob);
    app.post("/getClientJob", client.getClientJob);
    app.post("/job/getAllJob",VerifyToken, authRole(ROLE.ADMIN), client.getAllJob);
    app.post("/getAllInvoices",VerifyToken, client.getAllInvoices);
    app.post("/getFindTimesheets",VerifyToken, client.getFindTimesheets);
    app.post("/client/verify/email", client.emailverify);
    app.post("/client/verify/setEmail", client.setEmail);
    app.post("/addWorkerJob",VerifyToken, client.addWorkerJob);
    app.post('/setStatusJob',VerifyToken,client.setStatusJob);
    app.post('/setJobWorkers',VerifyToken,client.setJobWorkers);
    app.post('/setStatusTimesheet',VerifyToken,client.setStatusTimesheet);
    app.post('/updateStatus',VerifyToken,client.updateStatus);
    app.post('/removeTimesheetsJob',VerifyToken,client.removeTimesheetsJob);

    app.post('/getExpertTimesheets',VerifyToken,client.getExpertTimesheets);
    app.post('/getImportPayroll',client.getImportPayroll);
    app.post('/getAllPayroll',client.getAllPayroll);
    app.post('/getGenerateWorkerID',client.getGenerateWorkerID);

};