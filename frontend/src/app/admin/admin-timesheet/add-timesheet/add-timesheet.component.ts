import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'vex-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss']
})
export class AddTimesheetComponent implements OnInit {

  workers = [];
  break_times  = [
    {value: '0', viewValue: '0m'},
    {value: '10', viewValue: '10m'},
    {value: '15', viewValue: '15m'},
    {value: '20', viewValue: '20m'},
    {value: '25', viewValue: '25m'},
    {value: '30', viewValue: '30m'},
    {value: '40', viewValue: '40m'},
    {value: '45', viewValue: '45m'},
    {value: '50', viewValue: '50m'},
    {value: '55', viewValue: '55m'},
    {value: '60', viewValue: '60m'},
  ];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  displayedColumns: string[] = ['workerId.workerId','workerId.forename','role', 'startTime', 'break', 'endTime', 'noShow','hours','status'];

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
  timesheets: any[];
  user: any;
  workerId: any;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddTimesheetComponent>,
    private fb: FormBuilder,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.timesheets = this.defaults;
    console.log('timesheet', this.timesheets['shifts']);
    this.timesheets['shifts'].forEach(element => {
      element['workers'].forEach(ele => {
        console.log('ele', ele);
        this.workers.push(ele)
      });
    });
    console.log('workers', this.workers);

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Job;
    }

    this.form = this.fb.group({
      id: [AddTimesheetComponent.id++],
      // imageSrc: this.defaults.imageSrc,
      workerId: '',
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

  break(event: MatSelectChange, element) {
    console.log(' break event ', event);
    console.log(' break element ', element);
  }

  amend(element){
    console.log(' amend element ', element);
  }

  confirm(element){
    console.log(' confirm element ', element);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
  createRange(number){
  const items: number[] = [];
  for (let i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
  }
  setSubmit(){
    this.authService.setStatusJob(this.defaults.id, 'Submitted').subscribe((res) => {
      console.log(res);
      this.authService.openSnackbar('Submitted Successfully!');
    });
    this.dialogRef.close(this.defaults);
  }
}
