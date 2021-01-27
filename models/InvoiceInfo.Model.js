var mongoose = require('mongoose');
var InvoiceinfoSchema = new mongoose.Schema({
    id:{type:Number, default:1},
    dueDate:{type:Number, default:28},
    vat:{type:Number},
    payrateU25:{type:Number},
    payrateO25:{type:Number},
    hk_chargerateU25:{type:Number},
    hk_chargerateO25: {type:Number},
    fab_chargerateU25:{type:Number},
    fab_chargerateO25: {type:Number},
    boh_chargerateU25:{type:Number},
    boh_chargerateO25: {type:Number},
    logo:{type: String},
    footer:{type:String},
}, { toJSON: { getters: true } });
module.exports = mongoose.model('InvoiceInfo', InvoiceinfoSchema);