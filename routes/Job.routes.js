var client = require("../controllers/Job.Controller");
var VerifyToken = require('./middleware.js');
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
    app.post("/job/getAll", client.getAll);
    app.post("/job/getAllType", client.getAllType);
    app.post("/getWorkerJob", client.getWorkerJob);
    app.post("/getClientJob", client.getClientJob);
    app.post("/job/getAllJob", client.getAllJob);
    app.post("/getAllInvoices", client.getAllInvoices);
    app.post("/getFindTimesheets", client.getFindTimesheets);
    app.post("/client/verify/email", client.emailverify);
    app.post("/client/verify/setEmail", client.setEmail);
    app.post("/addWorkerJob", client.addWorkerJob);
    app.post('/setStatusJob',client.setStatusJob);
    app.post('/setJobWorkers',client.setJobWorkers);
    app.post('/setStatusTimesheet',client.setStatusTimesheet);
    app.post('/canceljob',client.canceljob);
    app.post('/removeTimesheetsJob',client.removeTimesheetsJob);

    app.post('/getExpertTimesheets',client.getExpertTimesheets);
    app.post('/getImportPayroll',client.getImportPayroll);
    app.post('/getAllPayroll',client.getAllPayroll);
    app.post('/getGenerateWorkerID',client.getGenerateWorkerID);

};