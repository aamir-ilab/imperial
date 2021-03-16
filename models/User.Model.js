var mongoose = require('mongoose');
jwt = require('jsonwebtoken'),
    crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    id:{type:Number},
    accountType: { type: String },
    emailAddress: { type: String },
    Password: { type: String },
    hash: { type: String },
    salt: { type: String },
    createdDate:{type:Date},
    accessToken:{ type: String },
    refreshToken:{ type: String },
    // worker specific feilds starts
    workerId:{type:String, default:''},
    title: { type: String },
    forename: { type: String },
    surename: { type: String },
    department: { type: String },
    gender: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    postcode: { type: String },
    mobileNumber: { type: String }, // UKONLY
    homeNumber: { type: String },
    dateBirth: { type: Date },
    nationalInsuranceNumber: { type: String }, //Optional
    currentDrivingLicense: { type: String }, // YES/NO
    currentDrivingLicenseExpiryDate: { type: String },
    detailsEndorsements: { type: String },
    restrictionEmployment: { type: Boolean }, //Yes / No
    restrictionEmploymentDetail: { type: String }, // above - Yes
    bankName: { type: String },
    bankBranch: { type: String },
    accountNameHolder: { type: String },
    bankAccountNumber: { type: Number },
    bankBranchSortCode: { type: String },
    buildingSocietyReference: { type: Number }, //optional
    emergencyRelationship:{type:String},
    relationship: { type: String }, //optional
    nextKinAddress: { type: String },
    nextKinPhoneNumberMobile: { type: String },
    nextKinPhoneNumberHome: { type: String }, //optional
    employeeStatement: { type: String },
    // ==educationHistory== //
    studentLoan: { type: Boolean },
    studentloanPlan: { type: String },
    leaveStudiesBefore6: { type: Boolean },
    payingStudentLoanDirctly: { type: Boolean },
    postgraduateLoan: { type: Boolean },
    leavePostStudiesBefore6: { type: Boolean },
    payingPostLoanDirctly: { type: Boolean },
    qualificationName: { type: String },
    qualificationYear: { type: Number },
    // ==employmentHistroy== //
    employmentHistroyFrom: { type: Number },
    employmentHistroyTo: { type: Number },
    employmentHistroyName: { type: String },
    employmentHistroyAddressEmployer: { type: String },
    employmentHistroyJobTitle: { type: String },
    employmentHistroyDuties: { type: String },
    employmentHistroyRatePay: { type: Number },
    employmentHistroyReasonLeaving: { type: String },
    employmentHistroyNoticeRequiredCurrentPosition: { type: String },
    // ==otherEmployment== //
    otherEmploymentName: { type: String },
    otherEmploymentAddressEmployer: { type: String },
    otherEmploymentJobTitle: { type: String },
    // ==references== //
    referenceCompanyName: { type: String },
    referenceAddress: { type: String },
    referenceEmail: { type: String },
    referenceContactPerson: { type: String },
    criminalRecords: { type: Boolean },
    criminalRecordDetail: { type: String },
    profilePhoto: { type: String , default:'assets/img/0.jpg'},
    // ==healthDetails== //
    specialArrangementImpairment: { type: String },
    doPhysicalMentalImpairment: { type: Boolean },
    specialArrangementAttendInterview: { type: String },
    listAnyDiseases: { type: String },
    medicineDrugsTreatment: { type: String },
    allAbsencesWordPast12Month: { type: String },
    // ==agreement== //
    agreementDate: { type: String }, //non-editable, pre-fille
    eSignature: { type: String },
    // worker specific feilds ends
    // client specific feilds starts
    firstName: { type: String },
    lastName: { type: String },
    companyName: { type: String },
    companyAddress: { type: String },
    companyPhoneNumber: { type: String },
    phoneNumber: { type: String },
    emailAddressAccountsTeam: { type: String },
    VATNumber: { type: String }, //optional
    companyRegNumber: { type: String },
    position: { type: String },
    clientStatus:{type:String, default:'Pending'},
    companyLogo:{type:String},
    companyUrl:{type:String}, // optional
    tradingName:{type:String}, //optional
    hk_chargerateU25:{type:Number, default:0},
    hk_chargerateO25: {type:Number, default:0},
    fab_chargerateU25:{type:Number, default:0},
    fab_chargerateO25: {type:Number, default:0},
    boh_chargerateU25:{type:Number, default:0},
    boh_chargerateO25: {type:Number, default:0},
    parentId:{type:String, default:''},
    // client specific feilds ends
    // admin specific feilds starts
    fromEmailAddress: { type: String },
    SMTPHost: { type: String },
    SMTPUser: { type: String },
    SMTPPassword: { type: String },
    SMPTPort: { type: String },
    Encryption: { type: String },
    verify:{type:Boolean, default:false}
    // admin specific feilds ends
}, { toJSON: { getters: true } });

UserSchema.methods.setPassword = function(password) {
    console.log('setPassword req', password);
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log('setPassword', this.hash)
};


UserSchema.methods.ValidPassword = function(password) {
    console.log('ValidPassword req', password);
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log('ValidPassword', this.hash , hash, this.hash === hash)
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    return jwt.sign({
            _id: this._id,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, // 1 Hour
        process.env.JWT_SECRET);
};

module.exports = mongoose.model('User', UserSchema);