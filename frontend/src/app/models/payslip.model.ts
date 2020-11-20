import { formatDate } from '@angular/common';

export class Payslip {
    _id: string;
    id:number;
    tax:number;
    NI_EES:number;
    GROSS_TO_DATE:number;
    TAX_TO_DATE:number;
    NI_TO_DATE:number;
    TOTAL_DEDUCTIONS:number;
    NET_PAY:number;
    NI_CODE:string;
    PAY_DATE:Date;
    WEEK_NO:number;
    TAX_CODE:string;
    WK1M1:string;
    NI_NUMBER:string;
    STUDENT_LOAN:number;
    PENSION:number;
    constructor(client) {
        this._id = client._id;
        this.id = client.id;
        
      }
}