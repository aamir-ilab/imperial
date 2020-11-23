import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Job } from '../interfaces/job.model';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { statusTableLabels } from 'src/static-data/status-table-data';
import { formatDate } from '@angular/common';

@Component({
  selector: 'vex-customer-create-update',
  templateUrl: './customer-create-update.component.html',
  styleUrls: ['./customer-create-update.component.scss']
})
export class CustomerCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  selectedType = 'Housekeeping';
  selectedRole = 'Linen Porter';
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
  minDate;
  minStart = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.minDate = '2020-08-15';
    this.minDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log('1213123');
    console.log(this.minDate);
    // this.minDate = formatDate(new Date(), 'YYYY-MM-DD').toString();
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Job;
    }

    this.form = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      _id: [this.defaults._id || ''],
      client: [this.defaults.client || ''],
      department: [this.defaults.department || this.selectedType],
      role: [this.defaults.role || this.selectedRole],
      shiftDate: [this.defaults.shiftDate || new Date()],
      startTime: [this.defaults.startTime || 0],
      endTime: [this.defaults.endTime || 1],
      locationShift: [this.defaults.locationShift || ''],
      purchaseOrderNo: [this.defaults.purchaseOrderNo || ''],
      additionalInformation: [this.defaults.additionalInformation || ''],
      total: [this.defaults.total || 1],
      status: [this.defaults.status || statusTableLabels[1]]
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

    // if (!customer.imageSrc) {
    //   customer.imageSrc = 'assets/img/avatars/1.jpg';
    // }

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
  changeAccountType(ev, i){
    if (i === 1) {
    this.selectedType = ev.value();
    }
    else {
    this.selectedRole = ev.value();
    }
  }
}
