var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    id: {type:Number},
    company:{type:String},
    phoneNumber:{type:String},
     message:{type:String},
    emailAddress:{type:String},
    enquiryType:{type:String},
    nameContact:{type:String},
    createdDate:{type:Date},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    department: {type:String},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('Message', MessageSchema);