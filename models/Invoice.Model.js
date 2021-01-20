var mongoose = require('mongoose');
var InvoiceSchema = new mongoose.Schema({
    timesheetId:{type:String},
    timesheetId_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Timesheet'},
    id:{type:Number},
    invoiceId:{type:String},
    invoiceDate:{type:Date , default: new Date()},
    invoiceDueDate:{type:Date, default: new Date()},
    client_Id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    workers:[
      {
        workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        hours:{type:Number},
        chargeRate:{type:Number},
        net:{type:Number}
      }
    ],
    totalNet:{type:Number, default:0},
    totalVet:{type:Number, default:0},
    status:{type:String, default:'Pending'},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Invoice', InvoiceSchema);