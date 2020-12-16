import { formatDate } from '@angular/common';
import { statusTableData, statusTableLabels } from 'src/static-data/status-table-data';

export class Timesheet {
    _id: string;
    id:number;
    timesheetId:string;
    JobId_Id: any;
    shiftDate:Date;
    shiftDateStr;string;
    statusStr:string;
    totalStaff:string;
    status: any;
    clientId: any;
    shifts: [
      {
        department: {type: string},
        role: {type: string},
        startTime: {type: number},
        endTime: {type: number},
        total: {type: number, default: 1},
        workers:[
          {
            role: {type:String},
            startTime: {type:Number},
            endTime: {type:Number},
            workerId: {type: any},
            break: {type:Number},
            status: {type:String, default: 'amend'},
          }
        ]
      }
    ];
    clear():void{

    }
    constructor(client) {
      this._id = client._id;
      this.id = client.id;
      this.timesheetId = client.timesheetId;
      this.JobId_Id= client.JobId_Id;
      this.clientId = client.clientId;
      this.shiftDate= client.shiftDate;
      this.shiftDateStr= formatDate(client.shiftDate, 'yy-MM-dd','en').toString();
      this.shifts = client.shifts;
      this.statusStr= client.statusStr;
      if (client.statusStr){
        if (client.statusStr === 'Completed') {
        this.status = statusTableLabels[4];
        }
        else  if (client.statusStr === 'Submitted') {
          this.status = statusTableLabels[0];
        }
        else  if (client.statusStr === 'Pending') {
          this.status = statusTableLabels[1];
        }
        else  if (client.statusStr === 'Cancelled') {
          this.status = statusTableLabels[3];
        }
        else {
          this.status = statusTableLabels[2];
        }
      }else{
        this.status = statusTableLabels[1];
      }
      if(client.totalStaff)
        this.totalStaff= client.totalStaff;
      else{
        this.totalStaff = '' + client.fulfilled + ' / ' + client.total;
      }
    }

    setStatus(status){
      this.statusStr = status;
      if (this.statusStr === 'Completed') {
        this.status = statusTableLabels[4];
        }
      else  if (this.statusStr === 'Submitted') {
        this.status = statusTableLabels[0];
      }
      else  if (this.statusStr === 'Pending') {
        this.status = statusTableLabels[1];
      }
      else  if (this.statusStr === 'Cancelled') {
        this.status = statusTableLabels[3];
      }
      else {
         this.status = statusTableLabels[2];
      }
    }
}