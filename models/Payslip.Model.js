var mongoose = require('mongoose');
var PayslipSchema = new mongoose.Schema({
    id:{type:Number},
    payslipID:{type:String},
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    workerIDStr:{tye:String},
    Names:{tye:String},
    TAX:{type:Number},
    NI_EES:{type:Number},
    GROSS_TO_DATE:{type:Number},
    TAX_TO_DATE:{type:Number},
    NI_TO_DATE:{type:Number},
    TOTAL_DEDUCTIONS:{type:Number},
    NET_PAY_PREV:{type:Number},
    NET_PAY:{type:Number},
    NI_CODE:{type:String},
    PAY_DATE:{type:String},
    WEEK_NO:{type:Number},
    TAX_CODE:{type:String},
    WK1M1:{type:String},
    NI_NUMBER:{type:String},
    STUDENT_LOAN:{type:Number},
    PENSION:{type:Number},
    periodStart:{type:Date},
    periodEnd:{type:Date},
    work:{
      client_Id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      hours:{type:Number},
      chargeRate:{type:Number},
      payRate:{type:Number},
      net:{type:Number}
    }
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Payslip', PayslipSchema);