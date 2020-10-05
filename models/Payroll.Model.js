var mongoose = require('mongoose');
var PayrollSchema = new mongoose.Schema({
    logID:{type:String},
    timesheetId_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Timesheet'},
    firstName:{type:String},
    lastName:{type:String},
    timestamp:{type:Date},
    timestampStr:{type:String},
    type:{type:String},
    response:{type:String},
    periodStart:{type:Date},
    periodEnd:{type:Date},
    id:{type:Number},
    JobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    payslipId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Payslip'},
    WR_UNITS:{type:Number},
    WR_TRNCDE:{type:String},
    WR_RATE:{type:Number},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Payroll', PayrollSchema);