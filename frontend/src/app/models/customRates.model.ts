export class CustomRates {
  _id: string;
  clientId: any;
  department: string;
  role: string;
  payrateU25:number;
  chargerateU25:number;
  payrateO25:number;
  chargerateO25:number;
  constructor(customRates) {
    this._id = customRates._id;
    this.clientId = customRates.clientId;
    this.department = customRates.department;
    this.role = customRates.role;
    this.payrateU25 = customRates.payrateU25;
    this.chargerateU25 = customRates.chargerateU25;
    this.payrateO25 = customRates.payrateO25;
    this.chargerateO25 = customRates.chargerateO25;
  }
}