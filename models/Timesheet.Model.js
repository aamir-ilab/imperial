var mongoose = require('mongoose');
const { strategies } = require('passport/lib');

var TimesheetSchema = new mongoose.Schema({
    id: {type:Number},
    timesheetId:{type:String},
    invoiceId:{type:String},
    JobId:{type:String},
    department: {type:String},
    JobId_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    invoiceId_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
    role: {type:String},
    shiftDate: {type:Date},
    startTime: {type:Number},
    endTime: {type:Number},
    workerId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    statusStr:{type:String, default:'Pending'},
    profilePhoto:{type:String},
    workerIdName:{type:String},
    // fulfilled: {type:Number, default: 0},
    // total:{type:Number, default: 1},
    totalStaff:{type:String},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Timesheet', TimesheetSchema);