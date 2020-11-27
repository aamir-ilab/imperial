var mongoose = require('mongoose');
jwt = require('jsonwebtoken'),
    crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    id:{type:Number},
    workerId:{type:String, default:''},
    accountType: { type: String },
    title: { type: String },
    forename: { type: String },
    surename: { type: String },
    department: { type: String },
    gender: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    postcode: { type: String },
    // country:{ type: String,default:''},
    mobileNumber: { type: String }, // UKONLY
    homeNumber: { type: String },
    emailAddress: { type: String },
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
    bankBranchSortCode: { type: Number },
    buildingSocietyReference: { type: Number }, //optional
    // emergencyContactNextKin: {
        relationship: { type: String }, //optional
        emergencyRelationship:{type:String},
        nextKinAddress: { type: String },
        nextKinPhoneNumberMobile: { type: String },
        nextKinPhoneNumberHome: { type: String }, //optional
    // },
    employeeStatement: { type: String },
    studentLoan: { type: String },
    postgraduateLoan: { type: Boolean },
    // educationHistory: [{
        qualificationName: { type: String },
        qualificationYear: { type: Number },
    // }],
    // employmentHistroy: [{
        employmentHistroyFrom: { type: Number },
        employmentHistroyTo: { type: Number },
        employmentHistroyName: { type: String },
        employmentHistroyAddressEmployer: { type: String },
        employmentHistroyJobTitle: { type: String },
        employmentHistroyDuties: { type: String },
        employmentHistroyRatePay: { type: Number },
        employmentHistroyReasonLeaving: { type: String },
        employmentHistroyNoticeRequiredCurrentPosition: { type: String },
    // }],
    // otherEmployment: [{
        otherEmploymentName: { type: String },
        otherEmploymentAddressEmployer: { type: String },
        otherEmploymentJobTitle: { type: String },
    // }],
    // references: [{
        referenceCompanyName: { type: String },
        referenceAddress: { type: String },
        referenceEmail: { type: String },
        referenceContactPerson: { type: String },
    // }],
    criminalRecords: { type: String },
    // healthDetails: {
        doPhysicalMentalImpairment: { type: Boolean },
        specialArrangementImpairment: { type: String },
        specialArrangementAttendInterview: { type: String },
        listAnyDiseases: { type: String },
        medicineDrugsTreatment: { type: String },
        allAbsencesWordPast12Month: { type: String },
    // },
    // agreement: {
        agreementDate: { type: String }, //non-editable, pre-fille
        eSignature: { type: String },
    // },
    profilePhoto: { type: String , default:'assets/img/0.jpg'},
    Password: { type: String },
    phoneNumber: { type: String },
    companyName: { type: String },
    companyAddress: { type: String },
    companyPhoneNumber: { type: String },
    emailAddressAccountsTeam: { type: String },
    VATNumber: { type: String }, //optional
    companyRegNumber: { type: String },
    companyUrl:{type:String},// optional
    tradingName:{type:String},//optional
    position: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    // subaccount
    // subaccount: [{
    //     subId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sub', required: true }
    // }],
    hash: { type: String },
    salt: { type: String },
    createdDate:{type:Date},
    accessToken:{ type: String },
    companyLogo:{type:String},
    clientType:{type:String, default:'Master Admin'},
    parentId:{type:String, default:''},
    clientStatus:{type:String, default:'Active'},


// admin-setting
    fromEmailAddress: { type: String },
    SMTPHost: { type: String },
    SMTPPassword: { type: String },
    SMPTPort: { type: String },
    Encryption: { type: String },
    generalTemplates: {
        workerEmailVerification:{type:String},
        workerWelcomeEmail:{type:String},
        workerChangeEmailVerificaion:{type:String},
        workerResetPassword:{type:String},
        workerPayslipEmail:{type:String},
        workerShiftDetails:{type:String},
        workerShiftAmended:{type:String},
        workerShiftCancelled:{type:String},
        clientWelcomeEmail:{type:String},
        clientSubAccountInvitationEmail:{type:String},
        clientNewInvoice:{type:String},
        clientNewTimesheet:{type:String},
        adminPayslipsSent:{type:String},
        adminNewJobApplicant:{type:String},
        adminNewClientRegistered:{type:String},
        adminPossibleAWRNotification:{type:String}
    },
    verify:{type:Boolean, default:false}
    // id:{ type: Number,required: true,},
    // accountType : { type: String,default:'Individual Account'},
    // companyDirector :{ type: String,default:''},
    // natureBusiness : { type: String,default:''},
    // nameCompany : { type: String,default:''},
    // accessToken: { type: String},
    // refreshToken: { type: String},
    // firstName: { type: String,default:''},
    // lastName: { type: String,default:''},
    // firstNameTwo: { type: String,default:''},
    // lastNameTwo: { type: String,default:''},
    // emailAddress: { type: String, required: true },
    // phoneNumber: { type: String, required: true },
    // providerUserID: { type: String, default: 'xxx' },
    // countryCitizenship:{type:String},
    // countryResidence:{type:String},
    // uploadFiles:{type:String},
    // addFileds:[{type:String}],
    // addField1:{type:String},
    // addField2:{type:String},
    // addField3:{type:String},
    // addField4:{type:String},
    // password: {
    //     type: String,default:'123456'
    // },
    // logtype: {
    //     type: Number,
    //     default: 0
    // },

    // // verifyStatus: {
    // //     phoneVerify: { type: Boolean, default: false },
    // //     emailVerify: { type: Boolean, default: false },
    // //     addressVerify: { type: Boolean, default: false },
    // // },
    // userType:{type:Number, default:0},
    // roles:[{type:Number, default:2}],
    // totalEquity:{type:Number, default:0},
    // userStatus:{type:String, default:'Unverified'},
    // date:{type:Date,default:new Date()},
    // modifyDate:{type:String},

    // employmentStatus:{type:String, default:'Other'},
    // nameEmployer:{type:String,default:''},
    // nameCompanyEm:{type:String, default:''},
    // investmentKnowledge:{type:String, default:'Beginner'},
    // netWorth:{type:String, default:'£25,000 - £50,000'}
}, { toJSON: { getters: true } });

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


UserSchema.methods.ValidPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
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