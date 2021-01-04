import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { AuthService } from 'src/app/services/auth.service';
import { MatTable } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'vex-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.scss']
})
export class AddTimesheetComponent implements OnInit  {

  workers = [];
  break_times  = [
    {value: 0, viewValue: 'None'},
    {value: 15, viewValue: '15m'},
    {value: 30, viewValue: '30m'},
    {value: 45, viewValue: '45m'},
    {value: 60, viewValue: '60m'},
  ];

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  displayedColumns: string[] = ['workerId.workerId','workerId.forename','role', 'startTime', 'break', 'endTime', 'show','hours','status'];

  static id = 100;
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
  editdisabled = false;
  constructor(@Inject(MAT_DIALOG_DATA) public jobData: any,
    private dialogRef: MatDialogRef<AddTimesheetComponent>,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.timesheets = [];
    this.workers = [];
    this.timesheets = this.jobData;
    this.timesheets = JSON.parse(JSON.stringify(this.jobData))
    console.log('this.timesheets', this.timesheets)
    this.workers = this.timesheets['workers'];
    this.workers.forEach(element => {
      console.log('hours', element.hours)
      if(element.hours === null || element.hours === undefined){
        var start = new Date("01/01/2021 " + element.startTime).getHours();
        var end = new Date("01/01/2021 " + element.endTime).getHours();
        element.hours = end - start;
      }
    });
    console.log('workers', this.workers);
  }

  break(event: MatSelectChange, element) {
    console.log(' break event ', event);
    console.log(' break element ', element);
    element.break = event.value;
    var start = new Date("01/01/2021 " + element.startTime).getHours();
    var end = new Date("01/01/2021 " + element.endTime).getHours();
    if(event.value !== 0){
      element.hours = end - start;
      element.hours = (end - start) -
      ((event.value + 40) / 100);
    }
    else
      element.hours = end - start;
  }

  amend(element){
    console.log(' amend element ', element);
    element.status = 'amend';
  }

  confirm(element){
    console.log(' confirm element ', element);
    element.status = 'confirm';
  }

  noShow(event: MatCheckboxChange, element){
    console.log('noShow event ', event);
    console.log('noShow element ', element);
    if(event.checked !== false ){
      element.show = false;
      element.break = 0;
      element.startTime = '00:00';
      element.endTime = '00:00';
      element.hours = 0;
    }
    else{
      element.show = true;
    }
  }

  editStartEnd(property: string, event: any, element){
    element[property] = event.target.textContent;
    console.log('element[property]', element[property])
    var start = new Date("01/01/2021 " + element.startTime).getHours();
    var end = new Date("01/01/2021 " + element.endTime).getHours();
    console.log('start', start, 'end', end)
    if(element.break !== 0){
      element.hours = (end - start) -
      ((element.break + 40) / 100)
    }
    else{
      element.hours = end - start;
    }
  }

  setSubmit(){
    this.authService.updateTimesheet(this.jobData._id, this.workers, 'Completed').subscribe((res) => {
      console.log(res);
      this.authService.openSnackbar('Timesheet submitted Successfully!');
    });
    this.dialogRef.close(this.jobData);
  }
  saveDraft(){
    this.authService.setTimesheetDraft(this.jobData._id, this.workers).subscribe((res) => {
      console.log('saveDraft',res);
      this.jobData.workers = res.workers;
      this.authService.openSnackbar('Timesheet draft saved successfully');
    });
    console.log('Save draft', this.workers);
    this.dialogRef.close();
  }

  close(){
    console.log('close workers', this.jobData);
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result => {
      this.workers = [];
    });
  }

}
