import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import {ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { formatDate } from '@angular/common';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { finalize } from 'rxjs/operators';
import { Worker } from 'src/app/models/worker.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'vex-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss']
})
export class EditWorkerComponent implements OnInit {
  @ViewChild('cropper') private cropper: ElementRef;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  progress: number;
  imageChangedEvent: any = '';
  infoMessage: any;
  isUploading: boolean = false;
  file: File;
  workerForm: FormGroup;
  imageUrl: string | ArrayBuffer =
  "https://bulma.io/images/placeholders/480x480.png";
  croppedImage: any = 'assets/img/0.jpg';
  fileName: string = "";
  static id = 100;
  public sortMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public exDateMask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  picRemove = false;
  btnTxt : string = "";
  mode: 'update';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  editCustomer:Worker;
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  inputType = 'password';
  visible = false;
  selectedType = 'Worker';
  selDepartment = '';
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  step = 0;
  birthDateVal:Date = new Date(Date.now());
  currentDrivingVal = false;
  restrictionEmploymentVal: boolean;
  _studentloan: boolean;
  _leaveStudiesBefore6: boolean;
  _payingStudentLoanDirctly: boolean;
  _postloan: boolean;
  _leavePostStudiesBefore6: boolean;
  _criminalRecord: boolean;
  acceptCheckVal = false;
  qualification;
  selectedDepartment;
  selectedStatus;
  defaults;
  constructor(
    private cd: ChangeDetectorRef,
    private storage:AngularFireStorage,
    private router:Router,
    public auth:AuthService,
    private fb: FormBuilder) {}
  ngOnInit() {
    this.step = 0;

    this.editCustomer = JSON.parse(localStorage.getItem('editCustomer'));
    this.selectedDepartment = this.editCustomer.department;
    this.selectedStatus = this.editCustomer.clientStatus;
    this.selectedType = 'Worker';
    this.defaults = this.editCustomer as Worker;
    this.workerForm = this.fb.group({
      id: [0],
      _id:[this.defaults._id],
      createdDate:[this.defaults.createdDate ||  new Date()],
      accountType:['Worker'],
      ///////////////////////Page1 starts/////////////////////////////
      profilePhoto:[this.defaults.profilePhoto || 'assets/img/0.jpg'],
      department:[this.defaults.department || ''],
      clientStatus:[this.defaults.clientStatus || ''],
      title: [this.defaults.title || ''],
      forename: [this.defaults.forename || ''],
      surename: [this.defaults.surename || ''],
      emailAddress: [this.defaults.emailAddress || ''],
      hash: [this.defaults.hash || ''],
      passwordConfirm: [this.defaults.passwordConfirm || ''],
      gender:[this.defaults.gender || 'Male'],
      dateBirth:[this.defaults.dateBirth|| ''],
      mobileNumber:[this.defaults.mobileNumber ||  ''],
      homeNumber:[this.defaults.homeNumber ||  ''],
      addressLine1:[this.defaults.addressLine1 || ''],
      addressLine2:[this.defaults.addressLine2 || ''],
      city: [this.defaults.city || ''],
      postcode: [this.defaults.postcode || ''],
      bankName:[this.defaults.bankName || ''],
      bankBranch:[this.defaults.bankBranch ||  ''],
      accountNameHolder:[this.defaults.accountNameHolder ||  ''],
      bankAccountNumber:[this.defaults.bankAccountNumber || ''],
      bankBranchSortCode:[this.defaults.bankBranchSortCode || ''],
      buildingSocietyReference:[this.defaults.buildingSocietyReference || ''],
      nationalInsuranceNumber:[this.defaults.nationalInsuranceNumber || ''],
      currentDrivingLicense:[this.defaults.currentDrivingLicense || ''],
      currentDrivingLicenseExpiryDate:[this.defaults.currentDrivingLicenseExpiryDate || ''],
      detailsEndorsements:[this.defaults.detailsEndorsements ||  ''],
      emergencyRelationship:[this.defaults.emergencyRelationship || ''],
      relationship:[this.defaults.relationship || ''],
      nextKinAddress:[this.defaults.nextKinAddress || ''],
      nextKinPhoneNumberMobile:[this.defaults.nextKinPhoneNumberMobile || ''],
      nextKinPhoneNumberHome:[this.defaults.nextKinPhoneNumberHome || ''],
      ///////////////////////Page1 ends/////////////////////////////
      ///////////////////////Page2 starts/////////////////////////////
      restrictionEmployment:[this.defaults.restrictionEmployment || false],
      restrictionEmploymentDetail:[this.defaults.restrictionEmploymentDetail || ''],
      employeeStatement:[this.defaults.employeeStatement || ''],
      studentLoan:[this.defaults.studentLoan || false],
      studentloanPlan:[this.defaults.studentloanPlan || ''],
      leaveStudiesBefore6:[this.defaults.leaveStudiesBefore6 || false],
      payingStudentLoanDirctly:[this.defaults.payingStudentLoanDirctly || false],
      postgraduateLoan:[this.defaults.postgraduateLoan || false],
      leavePostStudiesBefore6:[this.defaults.leavePostStudiesBefore6 || false],
      payingPostLoanDirctly:[this.defaults.payingPostLoanDirctly || false],
      qualificationName:[this.defaults.qualificationName || ''],
      qualificationYear:[this.defaults.qualificationYear || ''],
      ///////////////////////Page2 ends/////////////////////////////
      ///////////////////////Page3 starts/////////////////////////////
      employmentHistroyFrom:[this.defaults.employmentHistroyFrom || ''] ,
      employmentHistroyTo:[this.defaults.employmentHistroyTo || ''],
      employmentHistroyName:[this.defaults.employmentHistroyName || ''],
      employmentHistroyAddressEmployer: [this.defaults.employmentHistroyAddressEmployer || ''],
      employmentHistroyJobTitle:[this.defaults.employmentHistroyJobTitle || ''],
      employmentHistroyDuties:[this.defaults.employmentHistroyDuties || ''],
      employmentHistroyRatePay:[this.defaults.employmentHistroyRatePay || ''],
      employmentHistroyReasonLeaving:[this.defaults.employmentHistroyReasonLeaving || ''],
      employmentHistroyNoticeRequiredCurrentPosition: [this.defaults.employmentHistroyNoticeRequiredCurrentPosition || ''],
      otherEmploymentName:[this.defaults.otherEmploymentName || ''],
      otherEmploymentAddressEmployer:[this.defaults.otherEmploymentAddressEmployer || ''],
      otherEmploymentJobTitle:[this.defaults.otherEmploymentJobTitle || ''],
      referenceCompanyName:[this.defaults.referenceCompanyName || ''],
      referenceAddress:[this.defaults.referenceAddress || ''],
      referenceEmail:[this.defaults.referenceEmail || ''],
      referenceContactPerson:[this.defaults.referenceContactPerson || ''],
      ///////////////////////Page3 ends/////////////////////////////
      ///////////////////////Page4 starts/////////////////////////////
      criminalRecords:[this.defaults.criminalRecords || false],
      criminalRecordDetail:[this.defaults.criminalRecordDetail || ''],
      specialArrangementImpairment: [this.defaults.specialArrangementImpairment || ''],
      specialArrangementAttendInterview: [this.defaults.specialArrangementAttendInterview || ''],
      listAnyDiseases:[this.defaults.listAnyDiseases || ''],
      medicineDrugsTreatment: [this.defaults.medicineDrugsTreatment || ''],
      allAbsencesWordPast12Month: [this.defaults.allAbsencesWordPast12Month || ''],
      // missing
      agreementDate:[this.defaults.agreementDate || ''],
      // missing
      eSignature:[this.defaults.eSignature || ''],
      ///////////////////////Page4 ends/////////////////////////////
    });
    this.btnTxt = this.defaults.profilePhoto == 'assets/img/0.jpg' ?  'Choose a file...' : 'Edit';
    this.picRemove = this.defaults.profilePhoto == 'assets/img/0.jpg' ?  false : true;
    this.croppedImage = this.defaults.profilePhoto;
    console.log('==edit workr==', this.workerForm);
    this.restrictionEmploymentVal = this.defaults.restrictionEmployment || false;
    console.log('restrictionEmploymentVal', this.restrictionEmploymentVal);
    this._studentloan = this.defaults.studentLoan || false;
    console.log('studentloan', this._studentloan);
    this._leaveStudiesBefore6 = this.defaults.leaveStudiesBefore6 || false;
    console.log('leaveStudiesBefore6', this._leaveStudiesBefore6);
    this._payingStudentLoanDirctly = this.defaults.payingStudentLoanDirctly || false;
    console.log('payingStudentLoanDirctly', this._payingStudentLoanDirctly);
    this._postloan = this.defaults.postgraduateLoan || false;
    console.log('postgraduateLoan', this._postloan);
    this._leavePostStudiesBefore6 = this.defaults.leavePostStudiesBefore6 || false;
    console.log('leavePostStudiesBefore6', this._leavePostStudiesBefore6);
    this._criminalRecord = this.defaults.criminalRecords || false;
    console.log('criminalRecords', this._criminalRecord);
  }
  save() {
    console.log('save', this.workerForm.value)
    const customer = this.workerForm.value;
    customer.id = this.defaults.id;
    this.auth.updateUser(this.workerForm.value).subscribe((res =>{
      if(res){
        this.auth.openSnackbar('Updated Successfully!')
        if(localStorage.getItem('loggedIn') === 'Admin')
          this.router.navigate(['/admin/workers']);
        else
          this.router.navigate(['/team/workers']);
      }
      else{
        console.log('res', res)
      }
    }));
  }
  changeDepartment(ev){
    this.selectedDepartment = ev.value;
  }
  changeStatus(ev){
    this.selectedStatus = ev.value;
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
  ChangeStep(i){
    const controls = this.workerForm.controls;
    if(i == 1){
      if(this.step == 0){
        if(controls.department.value == '' || controls.title.value == '' || controls.forename.value == '' || controls.surename.value == '' || controls.addressLine1.value == '' || controls.addressLine2.value == '' || controls.city.value == '' || controls.postcode.value == '' || controls.mobileNumber.value == '' || controls.homeNumber.value == '')
        {
          alert('Please complete all the required fields');
          // alert(controls.dateBirth.value)
          // alert(formatDate(this.birthDateVal, 'yyyy-MM-dd', 'en').toString())
          return;
        }
      }else if(this.step == 1){
        if((controls.currentDrivingLicenseExpiryDate.value == '') || (this.restrictionEmploymentVal == true && controls.restrictionEmploymentDetail.value == '') ||  controls.bankName.value == '' || controls.bankBranch.value == ''|| controls.detailsEndorsements.value == '')
        {
          alert('Please complete all the required fields');
          return;
        }
      }else if(this.step == 2){
        if(controls.emergencyRelationship.value == '' || controls.relationship.value == '' || controls.nextKinAddress.value == '' || controls.nextKinPhoneNumberMobile.value == '')
          {
            alert('Please complete all the required fields');
            return;
          }
      }else if(this.step == 6){

      }else if(this.step == 7){

      }else if(this.step == 8){

      }else if (this.step == 9){
        if(controls.criminalRecords.value == ''){
          alert('Please complete all the required fields');
          return;
        }
      }else if(this.step == 10){
        // alert('123')
      }
      else if(this.step == 11){
        if(controls.specialArrangementAttendInterview.value == '' || controls.specialArrangementImpairment .value == '' || controls.listAnyDiseases.value == '' || controls.medicineDrugsTreatment.value == '' || controls.allAbsencesWordPast12Month.value == '')
        {
          alert('Please complete all the required fields');
          return;
        }
      }else if(this.step ==12){
        if(controls.emailAddress.value == ''){
          alert('Please complete all the required fields');
          return;
        }
        if(this.checkPassword(controls.passwordConfirm.value , controls.hash.value) == false)
        {
        alert('Please Input Password & Password Confirm Correctly !');
        return ;
        }
      }else if(this.step == 13){
      }
    }else{}
    this.step += i;
  }
  checkrestrictionEmployment(ev){
    this.restrictionEmploymentVal = !this.restrictionEmploymentVal;
  }
  checkStudentLoan(ev, i){
    console.log('checkStudentLoan ev', ev)
    if(i == 1){
      this._studentloan = ev.value;
    }
    if(i == 2){
      this._leaveStudiesBefore6 = ev.value;
    }
    if(i == 3){
      this._payingStudentLoanDirctly = ev.value;
    }
  }
  checkPostgraduate(ev, i){
    if(i == 1){
      this._postloan = ev.value;
    }
    if(i == 2){
      this._leavePostStudiesBefore6 = ev.value;
    }
  }
  checkCriminalRecords(ev){
    this._criminalRecord = ev.value;
  }
  addQualifacation(){
    // this.qualificationNames.push(new FormControl(''));
    // this.qualificationYears.push(new FormControl(1900))
  //   this.qualifications.push({qualificationName:'', qualificationYear:2020});
  //   // this.push(this._formBuilder.control(false));
  }
  checkPassword(pass, confirmPass){
    if(pass == confirmPass)
      return true;
    return false;
  }
  cancelBtn(){
    if(localStorage.getItem('loggedIn') === 'Admin')
      this.router.navigate(['/admin/workers']);
    else
      this.router.navigate(['/team/workers']);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log('imageChangedEvent', this.imageChangedEvent)
    this.file = event.target.files[0]
    if (this.file) {
      this.fileName = this.file.name;
    }
    this.isUploading = true;
  }
  onUpload() {
    console.log('--upload function called--', this.cropper)
    // this.cropper.nativeElement.remove();
    this.isUploading = true;
    this.removePicture('edit');
    var fileName = this.file.name.split('.').slice(0,-1).join('.') + '_' + new Date().getTime();
    var filePath = `Profile/${fileName}`;
    const fileRef = this.storage.ref(filePath);
   console.log('upload-a');
   let File = base64ToFile(this.croppedImage);
    this.storage.upload(filePath, File).snapshotChanges().pipe(finalize(()=>{
      console.log('upload-b');
      fileRef.getDownloadURL().subscribe((url)=>{
        console.log('upload-c', url);
        this.workerForm.controls.profilePhoto.setValue(url);
        // this.showSnackBar('Image Uploaded Successfully');
        this.isUploading = true;
      })
    })).subscribe();
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imageCropped', event)
    this.croppedImage = event.base64;
  }
  removePicture(type){
    let picUrl = this.defaults.profilePhoto;
    if(type === 'remove'){
      if(picUrl != 'assets/img/0.jpg'){
        console.log('Remove profile picture');
        this.croppedImage = 'assets/img/0.jpg';
        this.workerForm.controls.profilePhoto.setValue(this.croppedImage);
        return this.storage.storage.refFromURL(picUrl).delete();
      }
    }
    else{
      if(picUrl != 'assets/img/0.jpg'){
        return this.storage.storage.refFromURL(picUrl).delete();
      }
    }

  }
}
