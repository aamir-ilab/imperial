var mongoose = require('mongoose');
const { strategies } = require('passport/lib');

var JobSchema = new mongoose.Schema({
    id: {type:Number},
    JobId:{type:String, default:''},
    client: {type:String},
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timesheetId:{type:mongoose.Schema.Types.ObjectId, ref:'Timesheet'},
    shifts: [
      {
        shiftDate: {type:Date},
        department: {type:String},
        role: {type:String},
        startTime: {type:Number},
        endTime: {type:Number},
        total:{type:Number, default: 1},
        workerId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      }
    ],
    locationShift: {type:String},
    purchaseOrderNo: {type:String}, //optional
    additionalInformation:{type:String},
    statusStr:{type:String, default:'In Progress'},
    fulfilled: {type:Number, default: 0},
    totalStaff:{type:String},
    createdAt: {
      type: Date,
      default: Date.now
    }
}, { toJSON: { getters: true }});
module.exports = mongoose.model('Job', JobSchema);