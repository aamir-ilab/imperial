var mongoose = require('mongoose');
jwt = require('jsonwebtoken'),
    crypto = require('crypto');

var SubSchema = new mongoose.Schema({
    role: { type: Number },
    title: { type: String },
    forename: { type: String },
    surename: { type: String },
    employeeStatement: { type: String },
    studentLoan: { type: String },
    postgraduateLoan: { type: Boolean },
    profilePhoto: { type: String },
    Password: { type: String },
    companyName: { type: String },
    companyAddress: { type: String },
    companyPhoneNumber: { type: String },
    emailAddressAccountsTeam: { type: String },
    VATNumber: { type: String }, //optional
    companyRegNumber: { type: String },
    position: { type: String },
    hash: { type: String },
    salt: { type: String }
}, { toJSON: { getters: true } });

SubSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


SubSchema.methods.ValidPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

SubSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    return jwt.sign({
            _id: this._id,
            firstName: this.firstName,
            logtype: this.logtype,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, // 1 Hour
        process.env.JWT_SECRET);
};

module.exports = mongoose.model('Sub', SubSchema);