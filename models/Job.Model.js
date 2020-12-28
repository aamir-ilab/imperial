var mongoose = require('mongoose');
const { strategies } = require('passport/lib');

var JobSchema = new mongoose.Schema({
    id: {type:Number},
    JobId:{type:String, default:''},
    client: {type:String},
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timesheetId:{type:mongoose.Schema.Types.ObjectId, ref:'Timesheet'},
    shiftDate: {type:Date},
    shifts: [
      {
        department: {type:String},
        role: {type:String},
        startTime: {type:String},
        endTime: {type:String},
        total:{type:Number, default: 1},
        workers:[
          {
            role: {type:String},
            startTime: {type:String},
            endTime: {type:String},
            workerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
          }
        ],
      }
    ],
    locationShift: {type:String},
    purchaseOrderNo: {type:String}, //optional
    additionalInformation:{type:String},
    statusStr:{type:String, default:'In Progress'},
    fulfilled: {type:Number, default: 0},
    totalStaff:{type:Number},
    createdAt: {
      type: Date,
      default: Date.now
    }
}, { toJSON: { getters: true }});
module.exports = mongoose.model('Job', JobSchema);