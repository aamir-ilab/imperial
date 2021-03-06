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
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import { Invoice } from 'src/app/models/invoice.model';
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
  tempInvoice ;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Invoice;
    }
    console.log('>>>>>>>')
    console.log(this.defaults)
    var tempdate = new Date();
    this.tempInvoice = 'INVOICE' + tempdate.getMilliseconds() + tempdate.getFullYear()  + tempdate.getMinutes()  + tempdate.getSeconds();
    this.form = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      invoiceId: [this.defaults.invoiceId || this.tempInvoice],
      timesheetId: [this.defaults.timesheetId || ''],
      invoiceDate:  [this.defaults.invoiceDate|| null],
      invoiceDueDate: [this.defaults.invoiceDueDate || null],
      clientName: [this.defaults.clientName || ''],
      JobId_Id: [this.defaults.JobId_Id || ''],
      workerId: [this.defaults.workerId || ''],
      workerName: [this.defaults.workerName || ''],
      hours: [this.defaults.hours || ''],
      chargeRate: [this.defaults.chargeRate || ''],
      net: [this.defaults.net || ''],
      totalNet: [this.defaults.totalNet || ''],
      _id:[this.defaults._id]
    });
    console.log(this.form)
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
}
