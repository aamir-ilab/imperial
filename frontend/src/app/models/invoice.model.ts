import { formatDate } from '@angular/common';

export class Invoice {
    _id: string;
    id:number;
    invoiceId:string;
    timesheetId:any;
    timesheetId_id:any;
    invoiceDate:Date;
    invoiceDateStr:string;
    invoiceDueDate:Date;
    invoiceDueDateStr:string;
    clientName:string;
    JobId_Id: any;
    workerId: any;
    workerName:string;
    hours:number;
    chargeRate:number;
    net:number;
    totalNet:number;
    totalVet:number;
    constructor(client) {
        this._id = client._id;
        this.id = client.id;
        this.invoiceId = client.invoiceId;
        this.timesheetId = client.timesheetId;
        this.invoiceDate = client.invoiceDate;
        this.invoiceDateStr = formatDate(client.invoiceDate, 'yyyy-MM-dd', 'en').toString();
        this.invoiceDueDate= client.invoiceDueDate;
        this.invoiceDueDateStr= formatDate(client.invoiceDueDate, 'yyyy-MM-dd', 'en').toString();
        if(this.timesheetId_id)
        this.clientName = this.timesheetId_id['JobId_Id']['client'];
        else
        this.clientName = '';

        this.JobId_Id = client.JobId_Id;
        this.workerId= client.workerId;
        this.workerName= client.workerName;
        this.hours= client.hours;
        this.chargeRate= client.chargeRate;
        this.net= client.net;
        this.totalNet= client.totalNet;
        this.totalVet= client.totalVet;
    }
}