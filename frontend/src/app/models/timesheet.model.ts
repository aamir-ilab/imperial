import { formatDate } from '@angular/common';

export class Timesheet {
    _id: string;
    id:number;
    JobId:string;
    department:string;
    JobId_Id: any;
    workerId: any;
    role:string;
    shiftDate:Date;
    shiftDateStr;string;
    startTime: number;
    endTime: number;
    statusStr:string;
    fulfilled:string;
    total:string;
    totalStaff:string;
    clear():void{

    }
    constructor(client) {
        this._id = client._id;
        this.id = client.id;
        this.JobId= client.JobId;
        this.department= client.department;
        this.JobId_Id= client.JobId_Id;
        this.workerId= client.workerId;
        this.role= client.role;
        this.shiftDate= client.shiftDate;
        this.shiftDateStr= formatDate(client.shiftDate, 'yy-MM-dd','en').toString();
        this.startTime= client.startTime;
        this.endTime= client.endTime;
        this.statusStr= client.statusStr;
        this.fulfilled= client.fulfilled;
        this.total= client.total;
        if(client.totalStaff)
          this.totalStaff= client.totalStaff;
        else{
          this.totalStaff = '' + client.fulfilled + ' / ' + client.total;
        }
      }
}