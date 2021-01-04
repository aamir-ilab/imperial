var mongoose = require('mongoose');
const { strategies } = require('passport/lib');

var TimesheetSchema = new mongoose.Schema({
    id: {type:Number},
    timesheetId:{type:String},
    invoiceId:{type:String},
    JobId:{type:String},
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    JobId_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    invoiceId_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
    departments: {type:String},
    shiftDate: {type:Date},
    workers:[
      {
        role: {type:String},
        startTime: {type:String},
        endTime: {type:String},
        hours: {type:String},
        break: {type:Number, default: 0},
        status: {type:String, default: 'amend'},
        workerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        show: {type:Boolean, default: true}
      }
    ],
    statusStr:{type:String, default:'In Progress'},
    totalStaff:{type:Number},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Timesheet', TimesheetSchema);