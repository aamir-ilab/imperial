import { statusTableData, statusTableLabels } from 'src/static-data/status-table-data';
import { formatDate } from '@angular/common';
export class Job {
  _id:string;
  id: number;
  JobId:string;
  client: string;
  department: string;
  role: string;
  shiftDate: Date;
  shiftDateStr:string;
  startTime: number;
  endTime: number;
  locationShift: string;
  purchaseOrderNo: string; //optional
  additionalInformation:string;
  status:any;
  statusStr:string;
  fulfilled: number;
  total:number;
  totalStaff:string;
  clientId:any;
  timesheetId:any;
  // workerId:any;
  constructor(job) {
    this._id = job._id;
    this.id = job.id;
    this.JobId = job.JobId;
    this.client = job.client;
    this.department = job.department;
    this.role = job.role;
    this.shiftDate = job.shiftDate;
    this.shiftDateStr = formatDate(job.shiftDate, 'yyyy-MM-dd','en').toString();
    this.startTime = job.startTime;
    this.endTime = job.endTime;
    this.locationShift = job.locationShift;
    this.purchaseOrderNo = job.purchaseOrderNo;
    this.additionalInformation = job.additionalInformation;
    this.statusStr = job.statusStr;
    this.clientId = job.clientId;
    this.timesheetId = job.timesheetId;
    if(job.statusStr){
      if(job.statusStr == 'Completed')
      this.status = statusTableLabels[4];
    else  if(job.statusStr == 'Submitted')
      this.status = statusTableLabels[0];
    else  if(job.statusStr == 'Pending')
      this.status = statusTableLabels[1];
    else  if(job.statusStr == 'Cancelled')
      this.status = statusTableLabels[3];
    else 
       this.status = statusTableLabels[2];
    }else{
      this.status = statusTableLabels[1];
      
    }
    
    if(job.total)
       this.total = job.total;
      else
        this.total = 1;
       if(job.fulfilled)
         this.fulfilled = job.fulfilled;
      else
        this.fulfilled = 0;
       this.statusStr = job.statusStr;
       this.setTotalStaff();
  }
  setTotalStaff(){
    this.totalStaff = this.fulfilled + ' / ' + this.total;
  }
  setStatus(status){
    this.statusStr = status;
      if(this.statusStr == 'Completed')
      this.status = statusTableLabels[4];
    else  if(this.statusStr == 'Submitted')
      this.status = statusTableLabels[0];
    else  if(this.statusStr == 'Pending')
      this.status = statusTableLabels[1];
    else  if(this.statusStr == 'Cancelled')
      this.status = statusTableLabels[3];
    else 
       this.status = statusTableLabels[2];
  }
}
