import { formatDate } from '@angular/common';

export class Worker {
    _id: string;
    id: number;
    workerId: string;
    clientStatus: string;
    // page1 starts //
    title: string;
    forename: string;
    surename: string;
    department: string;
    gender: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    mobileNumber: string; // UKONLY
    homeNumber: string;
    dateBirth: Date;
    // page1 ends //
    // page2 starts //
    nationalInsuranceNumber: string; // Optional
    currentDrivingLicense: string; // YES/NO
    currentDrivingLicenseExpiryDate: string;
    detailsEndorsements: string;
    restrictionEmployment: boolean; // Yes / No
    restrictionEmploymentDetail: string; // above - Yes
    bankName: string;
    bankBranch: string;
    accountNameHolder: string;
    bankAccountNumber: number;
    bankBranchSortCode: string;
    buildingSocietyReference: number; // optional
    // page2 ends //
    // page3 starts //
    relationship: string; // optional
    emergencyRelationship: string;
    nextKinAddress: string;
    nextKinPhoneNumberMobile: string;
    nextKinPhoneNumberHome: string; // optional
    employeeStatement: string;
    // page3 ends //
    // page4 starts //
    studentLoan: boolean;
    studentloanPlan: string;
    leaveStudiesBefore6: boolean;
    payingStudentLoanDirctly: boolean;
    // page4 ends //
    // page5 starts //
    postgraduateLoan: boolean;
    leavePostStudiesBefore6: boolean;
    payingPostLoanDirctly: boolean;
    // page5 ends //
    // page6 starts //
    qualificationName: string;
    qualificationYear: number;
    // page6 ends //
    // page7 starts //
    employmentHistroyFrom: number;
    employmentHistroyTo: number;
    employmentHistroyName: string;
    employmentHistroyAddressEmployer: string;
    employmentHistroyJobTitle: string;
    employmentHistroyDuties: string;
    employmentHistroyRatePay: number;
    employmentHistroyReasonLeaving: string;
    employmentHistroyNoticeRequiredCurrentPosition: string;
    // page7 ends //
    // page8 starts //
    otherEmploymentName: string;
    otherEmploymentAddressEmployer: string;
    otherEmploymentJobTitle: string;
    // page8 ends //
    // page9 starts //
    referenceCompanyName: string;
    referenceAddress: string;
    referenceEmail: string;
    referenceContactPerson: string;
    // page9 ends //
    // page10 starts //
    criminalRecords: boolean;
    criminalRecordDetail: string;
    // page10 ends //
    // page11 starts //
    profilePhoto: string;
    // page11 ends //
    // page12 starts //
    specialArrangementImpairment: string;
    specialArrangementAttendInterview: string;
    listAnyDiseases: string;
    medicineDrugsTreatment: string;
    allAbsencesWordPast12Month: string;
    // page12 ends //
    // page13 starts //
    eSignature: string;
    agreementDate: string;
    emailAddress: string;
    hash: string;
    Password: string;
    // page13 ends //
    // doPhysicalMentalImpairment: boolean;
    workerdocuments: [
      {
        url: {type:String},
        title: {type:String},
        dateUpload: {type:Date},
        fileType: {type:String}
      }
    ];
    createdDate: Date;
    createdDateStr: string;
    salt: string;
    accessToken: string;
    refreshToken: string;
    clear(): void{
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
    }
    constructor(worker){
      this._id = worker._id;
      this.id = worker.id;
      this.workerId = worker.workerId;
      this.clientStatus = worker.clientStatus;
      this.createdDate = worker.createdDate;
      // page1 starts //
      this.department = worker.department;
      this.title = worker.title;
      this.forename = worker.forename;
      this.surename = worker.surename;
      this.gender = worker.gender;
      this.addressLine1 = worker.addressLine1;
      this.addressLine2 = worker.addressLine2;
      this.city = worker.city;
      this.postcode = worker.postcode;
      this.mobileNumber = worker.mobileNumber;
      this.homeNumber = worker.homeNumber;
      this.dateBirth = worker.dateBirth;
      // page1 ends //
      // page2 starts //
      this.nationalInsuranceNumber = worker.nationalInsuranceNumber;
      this.currentDrivingLicense = worker.currentDrivingLicense;
      this.currentDrivingLicenseExpiryDate = worker.currentDrivingLicenseExpiryDate;
      this.detailsEndorsements = worker.detailsEndorsements;
      this.restrictionEmployment = worker.restrictionEmployment;
      this.restrictionEmploymentDetail = worker.restrictionEmploymentDetail;
      this.bankName = worker.bankName;
      this.bankBranch = worker.bankBranch;
      this.accountNameHolder = worker.accountNameHolder;
      this.bankAccountNumber = worker.bankAccountNumber;
      this.bankBranchSortCode = worker.bankBranchSortCode;
      this.buildingSocietyReference = worker.buildingSocietyReference;
      // page2 ends //
      // page3 starts //
      this.relationship = worker.relationship;
      this.emergencyRelationship = worker.emergencyRelationship;
      this.nextKinAddress = worker.nextKinAddress;
      this.nextKinPhoneNumberMobile = worker.nextKinPhoneNumberMobile;
      this.nextKinPhoneNumberHome = worker.nextKinPhoneNumberHome;
      this.employeeStatement = worker.employeeStatement;
      // page3 ends //
      // page4 starts //
      this.studentLoan = worker.studentLoan;
      this.studentloanPlan = worker.studentloanPlan;
      this.leaveStudiesBefore6 = worker.leaveStudiesBefore6;
      this.payingStudentLoanDirctly = worker.payingStudentLoanDirctly;
      // page4 ends //
      // page5 starts //
      this.postgraduateLoan = worker.postgraduateLoan;
      this.leavePostStudiesBefore6 = worker.leavePostStudiesBefore6;
      this.payingPostLoanDirctly = worker.payingPostLoanDirctly;
      // page5 ends //
      // page6 starts //
      this.qualificationName = worker.qualificationName;
      this.qualificationYear = worker.qualificationYear;
      // page6 ends //
      // page7 starts //
      this.employmentHistroyFrom = worker.employmentHistroyFrom;
      this.employmentHistroyTo = worker.employmentHistroyTo;
      this.employmentHistroyName = worker.employmentHistroyName;
      this.employmentHistroyAddressEmployer = worker.employmentHistroyAddressEmployer;
      this.employmentHistroyJobTitle = worker.employmentHistroyJobTitle;
      this.employmentHistroyDuties = worker.employmentHistroyDuties;
      this.employmentHistroyRatePay = worker.employmentHistroyRatePay;
      this.employmentHistroyReasonLeaving = worker.employmentHistroyReasonLeaving;
      this.employmentHistroyNoticeRequiredCurrentPosition = worker.employmentHistroyNoticeRequiredCurrentPosition;
      // page7 ends //
      // page8 starts //
      this.otherEmploymentName = worker.otherEmploymentName;
      this.otherEmploymentAddressEmployer = worker.otherEmploymentAddressEmployer;
      this.otherEmploymentJobTitle = worker.otherEmploymentJobTitle;
      // page8 ends //
      // page9 starts //
      this.referenceCompanyName = worker.referenceCompanyName;
      this.referenceAddress = worker.referenceAddress;
      this.referenceEmail = worker.referenceEmail;
      this.referenceContactPerson = worker.referenceContactPerson;
      // page9 ends //
      // page10 starts //
      this.criminalRecords = worker.criminalRecords;
      this.criminalRecordDetail = worker.criminalRecordDetail;
      // page10 ends //
      // page11 starts //
      this.profilePhoto = worker.profilePhoto;
      // page11 ends //
      // page12 starts //
      this.specialArrangementImpairment = worker.specialArrangementImpairment;
      this.specialArrangementAttendInterview = worker.specialArrangementAttendInterview;
      this.listAnyDiseases = worker.listAnyDiseases;
      this.medicineDrugsTreatment = worker.medicineDrugsTreatment;
      this.allAbsencesWordPast12Month = worker.allAbsencesWordPast12Month;
      // page12 ends //
      // page13 starts //
      this.eSignature = worker.eSignature;
      this.agreementDate = worker.agreementDate;
      this.emailAddress = worker.emailAddress;
      // page13 ends //
      this.workerdocuments = worker.workerdocuments;
    }
    get name() {
        let name = '';

        if (this.surename && this.forename) {
          name = this.forename + ' ' + this.surename;
        } else if (this.forename) {
          name = this.forename;
        } else if (this.surename) {
          name = this.surename;
        }

        return name;
      }
    set name(value) {
    }
}
