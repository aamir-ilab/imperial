import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../interfaces/customer.model';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import { Job } from 'src/app/client/clients-dashboard/client-job-table/interfaces/job.model';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { Timesheet } from 'src/app/models/timesheet.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vex-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss']
})
export class AddTimesheetComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  timesheets:any[];
  user:any;
  workerId:any;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<AddTimesheetComponent>,
              private fb: FormBuilder,
              private authService:AuthService) {
  }

  ngOnInit() {
    console.log('000000')
    console.log(this.defaults);
      this.timesheets = this.defaults.timesheetId;

    if(!this.authService.AllUser)
      this.authService.setAllUser();
    console.log('<><><><><><><><><><><<><><><><><><><><>')
    console.log(this.authService.AllUser)
    var tempArr = this.authService.AllUser;
    this.workerId = [];
    tempArr.forEach(obj =>{
      if(obj.accountType == 'Worker')
        this.workerId.push({profilePhoto:obj.profilePhoto, workerId:obj.workerId, id:obj._id});
    });
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Job;
    }

    this.form = this.fb.group({
      id: [AddTimesheetComponent.id++],
      // imageSrc: this.defaults.imageSrc,
      workerId:'',
      // firstName: [this.defaults.firstName || ''],
      // lastName: [this.defaults.lastName || ''],
      // street: this.defaults.street || '',
      // city: this.defaults.city || '',
      // zipcode: this.defaults.zipcode || '',
      // phoneNumber: this.defaults.phoneNumber || '',
      // notes: this.defaults.notes || ''
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = this.form.value;

    if (!customer.imageSrc) {
      customer.imageSrc = 'assets/img/avatars/1.jpg';
    }

    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  createRange(number){
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
  }
  setSubmit(){
    this.authService.setStatusJob(this.defaults.id, 'Submitted').subscribe((res)=>{
      console.log(res);
      this.authService.openSnackbar('Submitted Successfully!');
    })
    this.dialogRef.close(this.defaults);
  }
}
