var mongoose = require('mongoose');
const { strategies } = require('passport/lib');

var JobSchema = new mongoose.Schema({
    id: {type:Number},
    JobId:{type:String, default:''},
    client: {type:String},
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // timesheetId:{ type: [mongoose.Schema.Types.ObjectId], ref: 'Timesheet' },
    timesheetId:[{type:mongoose.Schema.Types.ObjectId, ref:'Timesheet'}],
    // workerId:[{id:{type:String }, profilePhoto:{type:String}, workerId:{type:String}}],
    department: {type:String},
    role: {type:String},
    shiftDate: {type:Date},
    startTime: {type:Number},
    endTime: {type:Number},
    locationShift: {type:String},
    purchaseOrderNo: {type:String}, //optional
    additionalInformation:{type:String},
    statusStr:{type:String, default:'Pending'},
    fulfilled: {type:Number, default: 0},
    total:{type:Number, default: 1},
    totalStaff:{type:String},
    createdAt: {
      type: Date,
      default: Date.now
    }
}, { toJSON: { getters: true }});
module.exports = mongoose.model('Job', JobSchema);