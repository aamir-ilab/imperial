var mongoose = require('mongoose');
var InvoiceSchema = new mongoose.Schema({
    timesheetId:{type:String},
    timesheetId_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Timesheet'},
    id:{type:Number},
    invoiceId:{type:String},
    invoiceDate:{type:Date , default: new Date()},
    invoiceDueDate:{type:Date},
    workers:[
      {
        client_Id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        hours:{type:Number},
        chargeRate:{type:Number},
        payRate:{type:Number},
        net:{type:Number}
      }
    ],
    totalNet:{type:Number, default:0},
    totalVat:{type:Number, default:0},
    status:{type:String, default:'Pending'},
    client_Id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Invoice', InvoiceSchema);