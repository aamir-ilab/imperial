import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Worker } from 'src/app/models/worker.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'vex-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.scss']
})
export class CustomerCreateUpdateComponent implements OnInit {
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  progress: number;
  infoMessage: any;
  isUploading: boolean = false;
  file: File;
  fileToReturn: File;
  workerForm: FormGroup;
  imageUrl: string | ArrayBuffer =
  "https://bulma.io/images/placeholders/480x480.png";
  fileName: string = "No file selected";
  imageChangedEvent: any = '';
  croppedImage: any = 'https://bulma.io/images/placeholders/480x480.png';
  static id = 100;
  public sortMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public exDateMask = [/[0-1]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  mode: 'create' | 'update' = 'create';


  icClose = icClose;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  inputType = 'password';
  visible = false;
  selectedType = 'Worker';
  selDepartment = '';
  step = 0;
  birthDateVal:Date = new Date(Date.now());
  currentDrivingVal = false;
  restrictionEmploymentVal = false;
  _studentloan = false;
  _leaveStudiesBefore6 = false;
  _payingStudentLoanDirctly = false;
  _postloan = false;
  _leavePostStudiesBefore6 = false;
  _criminalRecord = false;
  acceptCheckVal = false;
  qualification;
  selectedDepartment;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
              private cd: ChangeDetectorRef,
              private storage:AngularFireStorage,
              public snackBar: MatSnackBar,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.step = 0;
    this.selectedDepartment = 'Housekeeping';
    this.selectedType = 'Worker';
    this.defaults = {} as Worker;

    this.workerForm = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      _id:[this.defaults._id],
      createdDate:[this.defaults.createdDate ||  new Date()],
      accountType:['Worker'],
      ///////////////////////Page1 starts/////////////////////////////
      department:['', Validators.required],
      title: ['', Validators.required],
      forename: ['', Validators.required],
      surename: ['', Validators.required],
      gender:['Male'],
      addressLine1:['', Validators.required],
      addressLine2:[''],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      mobileNumber:['', Validators.required],
      homeNumber:[''],
      dateBirth:['', Validators.required],
      ///////////////////////Page1 ends/////////////////////////////
      /////////////////////Page2 starts////////////////////////////
      nationalInsuranceNumber: [''],
      currentDrivingLicense:[''],
      currentDrivingLicenseExpiryDate:[''],
      detailsEndorsements:[''],
      restrictionEmployment:[false],
      restrictionEmploymentDetail:[''],
      bankName:['', Validators.required],
      bankBranch:['', Validators.required],
      accountNameHolder:[''],
      bankAccountNumber:[''],
      bankBranchSortCode:[''],
      buildingSocietyReference:[''],
      /////////////////////Page2 ends////////////////////////////
      /////////////////////Page3 starts/////////////////////////
      emergencyRelationship:['', Validators.required],
      relationship:['', Validators.required],
      nextKinAddress:['', Validators.required],
      nextKinPhoneNumberMobile:['', Validators.required],
      nextKinPhoneNumberHome:[''],
      employeeStatement:[''],
      /////////////////////Page3 ends////////////////////////////
      /////////////////////Page4 starts/////////////////////////
      studentLoan:[false],
      studentloanPlan:[''],
      leaveStudiesBefore6:[false],
      payingStudentLoanDirctly:[false],
      /////////////////////Page4 ends////////////////////////////
      /////////////////////Page5 starts/////////////////////////
      postgraduateLoan:[false],
      leavePostStudiesBefore6:[false],
      payingPostLoanDirctly:[false],
      /////////////////////Page5 ends////////////////////////////
      /////////////////////Page6 starts/////////////////////////
      qualificationName:[''],
      qualificationYear:[''],
      /////////////////////Page6 ends////////////////////////////
      /////////////////////Page7 starts/////////////////////////
      employmentHistroyFrom:[''] ,
      employmentHistroyTo:[''],
      employmentHistroyName:[''],
      employmentHistroyAddressEmployer: [''],
      employmentHistroyJobTitle:[''],
      employmentHistroyDuties:[''],
      employmentHistroyRatePay:[''],
      employmentHistroyReasonLeaving:[''],
      employmentHistroyNoticeRequiredCurrentPosition: [''],
      /////////////////////Page7 ends////////////////////////////
      /////////////////////Page8 starts/////////////////////////
      otherEmploymentJobTitle:[''],
      otherEmploymentAddressEmployer:[''],
      otherEmploymentName:[''],
      /////////////////////Page8 ends////////////////////////////
      /////////////////////Page9 starts/////////////////////////
      referenceCompanyName:[''],
      referenceAddress:[''],
      referenceEmail:[''],
      referenceContactPerson:[''],
      /////////////////////Page9 ends////////////////////////////
      /////////////////////Page10 starts/////////////////////////
      criminalRecords:[false],
      criminalRecordDetail:[''],
      /////////////////////Page10 ends////////////////////////////
      /////////////////////Page11 starts/////////////////////////
      profilePhoto:['assets/img/0.jpg'],
      /////////////////////Page11 ends////////////////////////////
      /////////////////////Page12 starts/////////////////////////
      specialArrangementImpairment: [''],
      specialArrangementAttendInterview: [''],
      listAnyDiseases:[''],
      medicineDrugsTreatment: [''],
      allAbsencesWordPast12Month: [''],
      /////////////////////Page12 ends////////////////////////////
      /////////////////////Page13 starts/////////////////////////
      eSignature:[''],
      agreementDate:[''],
      emailAddress: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
      hash: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      /////////////////////Page13 ends////////////////////////////
    });
  }

  save() {
    const controls = this.workerForm.controls;
    if(controls.emailAddress.value == '' && controls.hash.value == '' && controls.passwordConfirm.value == ''){
      this.showSnackBar('Please complete all the required fields');
      return;
    }
    if(this.checkPassword(controls.passwordConfirm.value , controls.hash.value) == false)
    {
      this.showSnackBar('Password and password confirm are different');
      return;
    }
    else{
      console.log('========  save   ===')
      console.log(this.workerForm.value)
      this.createCustomer();
    }
  }

  createCustomer() {
    const customer = this.workerForm.value;
    // if (!customer.profilePhoto) {
    //   customer.profilePhoto = 'assets/img/0.jpg';
    // }
    this.dialogRef.close(customer);
  }

  changeDepartment(ev){
    this.selectedDepartment = ev.value;
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
  changeAccountType(ev){
    this.selectedType = ev.value;
  }
  ChangeStep(i){
    const controls = this.workerForm.controls;
    if(i == 1){
      if(this.step == 0){
        if(controls.department.value == '' || controls.title.value == '' || controls.forename.value == '' || controls.surename.value == '' || controls.addressLine1.value == '' || controls.city.value == '' || controls.postcode.value == '' || controls.mobileNumber.value == '')
        {
          this.showSnackBar('Please complete all the required fields');
          return;
        }
      }else if(this.step == 1){
        if((this.restrictionEmploymentVal == true && controls.restrictionEmploymentDetail.value == '') ||  controls.bankName.value == '' || controls.bankBranch.value == '')
        {
          this.showSnackBar('Please complete all the required fields');
          return;
        }
      }else if(this.step == 2){
        if(controls.emergencyRelationship.value == '' || controls.relationship.value == '' || controls.nextKinAddress.value == '' || controls.nextKinPhoneNumberMobile.value == '')
          {
            this.showSnackBar('Please complete all the required fields');
            return;
          }
      }else if (this.step == 9){
        if(this._criminalRecord == true && controls.criminalRecordDetail.value == ''){
          this.showSnackBar('Please complete all the required fields');
          return;
        }
      }else if(this.step == 11){
        if(controls.specialArrangementAttendInterview.value == '' || controls.specialArrangementImpairment .value == '' || controls.listAnyDiseases.value == '' || controls.medicineDrugsTreatment.value == '' || controls.allAbsencesWordPast12Month.value == '')
        {
          this.showSnackBar('Please complete all the required fields');
          return;
        }
      }
    }
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
  onChange(event: any) {
    this.file = event.fileInput.files[0]
    if (this.file) {
      this.fileName = this.file.name;
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }
  onUpload() {
    console.log('--upload function called--')
    this.isUploading = true;

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
        this.showSnackBar('Image Uploaded Successfully');
        this.isUploading = true;
      })
    })).subscribe();
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log('imageChangedEvent', this.imageChangedEvent)
    this.file = event.target.files[0]
    if (this.file) {
      this.fileName = this.file.name;
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imageCropped', event)
    this.croppedImage = event.base64;
  }
  imageLoaded(image: HTMLImageElement) {
    console.log('imageLoaded', image)
      // show cropper
  }
  cropperReady() {
    console.log('cropperReady')
      // cropper ready
  }
  loadImageFailed() {
    console.log('loadImageFailed')
    // show message
  }

  checkPassword(pass, confirmPass){
    if(pass == confirmPass)
      return true;
    return false;
  }

  checkAccept(ev){
    if(this.acceptCheckVal == false)
      this.acceptCheckVal = true;
    else
      this.acceptCheckVal = false;
  }
  isControlHasError(controlName: string, validationType: string): boolean
  {
      const control = this.workerForm.controls[controlName];
      if (!control) {
        return false;
      }
      const result = control.hasError(validationType) && (control.dirty || control.touched);
      return result;
  }

  showSnackBar(message: string){
    let config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    config.duration = 3000;
    this.snackBar.open(message, 'Cancel', config);
  }
}
