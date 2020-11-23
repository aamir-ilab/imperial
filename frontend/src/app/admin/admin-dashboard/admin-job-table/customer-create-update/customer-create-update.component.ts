import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
import { AuthService } from 'src/app/services/auth.service';
import { CountryState } from 'src/app/client/settings/companydetails/companydetails.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import { Router } from '@angular/router';

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
  AllClients: any[];
  selectedClient = '';

  stateCtrl: FormControl;
  filteredStates$: Observable<CountryState[]>;
  states: CountryState[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  icArrowDropDown = icArrowDropDown;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CustomerCreateUpdateComponent>,
              private fb: FormBuilder,
              private route: Router,
              private authService: AuthService) {
  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  async ngOnInit() {
    console.log('customer create update');
    console.log('1');
    if (!this.authService.AllUser) {
      await this.authService.getAllUserAuth();
    }
    this.stateCtrl = new FormControl();
    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
    console.log('2');
    this.AllClients = this.authService.AllUser;
    console.log('3');
    this.AllClients = this.AllClients.filter((obj) => obj.accountType === 'Client');
    console.log(this.AllClients);
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
      department: [this.defaults.department || ''],
      role: [this.defaults.role || this.selectedRole],
      shiftDate: [this.defaults.shiftDate || new Date()],
      startTime: [this.defaults.startTime || ''],
      endTime: [this.defaults.endTime || ''],
      locationShift: [this.defaults.locationShift || ''],
      purchaseOrderNo: [this.defaults.purchaseOrderNo || ''],
      additionalInformation: [this.defaults.additionalInformation || ''],
      status: [this.defaults.status || statusTableLabels[2]],
      stateCtrl: [this.stateCtrl.value || '']
    });
    this.selectedClient = this.defaults.client;
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
    const tempUser = this.AllClients.filter(obj => {
      const tempName = obj.firstName + ' ' + obj.lastName;
      if (tempName === customer.client) {
        return obj;
      }
    });
    customer.clientId  = tempUser[0]._id;
    // if (!customer.imageSrc) {
    //   customer.imageSrc = 'assets/img/avatars/1.jpg';
    // }

    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    const tempUser = this.AllClients.filter(obj => {
      const tempName = obj.firstName + ' ' + obj.lastName;
      if (tempName === customer.client) {
        return obj;
      }
    });
    customer.clientId  = tempUser[0]._id;
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
  changeClient(ev){
    this.selectedClient = ev.value();
  }
  openJobs(){
    console.log('-----openjobs--------');
    console.log(this.defaults.client);
    console.log('------------------');
    const event: any = this.defaults;
    event.title = event.client;
    this.authService.currentScrumboard = [{
      id: event.id,
      title: event.client,
      children: [
        // { id:1, label:'Unassigned Shifts', children:[] },
        // { id:2, label:'Assigned', children:[] },
        { id: 1, label: 'In Progress', children: [] },
        { id: 2, label: 'Submitted', children: [] },
        { id: 3, label: 'Completed', children: [] },
      ]
    }];
    this.authService.currentJob = event;
    console.log('///////////////');
    console.log(this.authService.currentJob);
    console.log('///////////////');
    const arrLabel = ['In Progress', 'Submitted', 'Completed'];
    console.log('&&&&');
    console.log(event);
    console.log('&&&&');
    arrLabel.forEach((ele, index) => {
      if (ele === event.statusStr) {
        this.authService.currentScrumboard[0].children[index].children.push({
            id: event.id,
            title: event.client,
            client: event.client,
            department: event.department,
            role: event.role,
            shiftDate: event.shiftDate,
            startTime: event.startTime,
            endTime: event.endTime,
            locationShift: event.locationShift,
            purchaseOrderNo: event.purchaseOrderNo,
            additionalInformation: event.additionalInformation,
            statusStr: event.statusStr,
            fulfilled: event.fulfilled,
            total: event.total,
            totalStaff: event.totalStaff,
            clientId: event.clientId,
            timesheetId: event.timesheetId
          });
      }
    });
    this.authService.setCurrentScrumboardLocal(this.authService.currentScrumboard);
    this.route.navigate(['/admin/jobs/scrumboard', event.id]);
    this.dialogRef.close();
  }
}
