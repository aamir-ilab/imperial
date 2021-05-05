var client = require("../controllers/Job.Controller");
var {VerifyToken, authRole} = require('./middleware.js');
const {ROLE} = require("../config/roles");
module.exports = (app) => {
  app.post("/job/register", VerifyToken, client.register);
  app.post("/updatejob", VerifyToken, client.updateJob);
  app.post("/getAllTimesheets",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.getAllTimesheets);
  app.post("/job/getAll", VerifyToken, client.getAll);
  app.post("/job/getAllJob",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.getAllJob);
  app.post("/job/getAllType",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.getAllJobs);
  app.post("/job/current",VerifyToken, client.getCurrentJob);
  app.post('/setJobWorkers',VerifyToken,client.setJobWorkers);
  app.post('/setTimesheetDraft',VerifyToken,client.setTimesheetDraft);
  app.post('/updateTimesheet',VerifyToken,client.updateTimesheet);
  app.post("/getClientTimesheets",VerifyToken, client.getClientTimesheets);
  app.post("/updateInvoicsInfo", VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]), client.updateInvoicsInfo);
  app.get("/invoiceInfo", VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]), client.invoiceInfo);
  app.post('/getExportTimesheets',VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]), client.getExportTimesheets);
  app.post('/customRatesUpdation',VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]), client.customRatesUpdation);
  app.post('/workerRatesUpdation',VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]), client.workerRatesUpdation);
  app.post('/getAllPayroll',VerifyToken,
  authRole([ROLE.ADMIN,ROLE.TEAM]),client.getAllPayroll);
  app.post("/job/getPayslips", VerifyToken, authRole(ROLE.WORKER), client.getPayslips);
  app.post('/updateStatus',VerifyToken,client.updateStatus);
  app.post("/removeJob", VerifyToken,authRole([ROLE.ADMIN,ROLE.TEAM]), client.removeJob);
  app.post("/getWorkerJob", VerifyToken, authRole(ROLE.WORKER), client.getWorkerJob);
  app.post("/getClientJob", VerifyToken, authRole(ROLE.CLIENT), client.getClientJob);
  app.post("/getAllInvoices",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.getAllInvoices);
  app.post("/getSelectedInvoices",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.getSelectedInvoices);
  app.post("/getClientInvoices",VerifyToken, authRole(ROLE.CLIENT), client.getClientInvoices);
  app.post("/getFindTimesheets",VerifyToken,authRole([ROLE.ADMIN,ROLE.TEAM,ROLE.CLIENT]) ,client.getFindTimesheets);
  app.post("/client/shiftDetail/email",VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.emailshiftDetail);
  app.post('/setStatusJob',VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM,ROLE.CLIENT]), client.setStatusJob);
  app.post('/getImportPayroll',VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]),client.getImportPayroll);
  app.post('/getGenerateWorkerID',VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]),client.getGenerateWorkerID);
  app.get("/defaultRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.defaultRates);
  app.post("/defaultRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.setDefaultRates);
  app.post("/customRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.customRates);
  app.post("/setcustomRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.setCustomRates);
  app.post("/workerRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.workerRates);
  app.post("/setworkerRates", VerifyToken, authRole([ROLE.ADMIN,ROLE.TEAM]), client.setWorkerRates);


  ////////// Not in use by Muzz dev //////////
  // app.post("/client/hash", client.updateHash);

};