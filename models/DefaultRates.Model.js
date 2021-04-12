var mongoose = require('mongoose');

var DefaultRatesSchema = new mongoose.Schema({
  id:{type:Number},
  department: { type: String },
  role: {type:String},
  payrateU25:{type:Number, default:0},
  chargerateU25:{type:Number, default:0},
  payrateO25: {type:Number, default:0},
  chargerateO25: {type:Number, default:0},

}, { toJSON: { getters: true } });
module.exports = mongoose.model('DefaultRates', DefaultRatesSchema);