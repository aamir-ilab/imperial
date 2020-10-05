var mongoose = require('mongoose');
var InvoiceSchema = new mongoose.Schema({
    timesheetId:{type:String},
    timesheetId_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Timesheet'},
    id:{type:Number},
    invoiceId:{type:String},
    invoiceDate:{type:Date},
    clientName:{type:String},
    invoiceDueDate:{type:Date},
    JobId_Id:{type:String},
    JobId_Id_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
    workerId:{type:String},
    workerId_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    workerName:{type:String},
    hours:{type:Number},
    chargeRate:{type:Number},
    net:{type:Number},
    totalNet:{type:Number},
    totalVet:{type:Number}
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Invoice', InvoiceSchema);