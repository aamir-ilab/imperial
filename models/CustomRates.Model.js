var mongoose = require('mongoose');

var CustomRatesSchema = new mongoose.Schema({
  id:{type:Number},
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  department: { type: String },
  role: {type:String},
  payrateU25:{type:Number, default:0},
  chargerateU25:{type:Number, default:0},
  payrateO25: {type:Number, default:0},
  chargerateO25: {type:Number, default:0},

}, { toJSON: { getters: true } });
module.exports = mongoose.model('CustomRates', CustomRatesSchema);