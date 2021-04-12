export class DefaultRates {
  _id: string;
  department: string;
  role: string;
  payrateU25:number;
  chargerateU25:number;
  payrateO25:number;
  chargerateO25:number;
  constructor(defaultRates) {
    this._id = defaultRates._id;
    this.department = defaultRates.department;
    this.role = defaultRates.role;
    this.payrateU25 = defaultRates.payrateU25;
    this.chargerateU25 = defaultRates.chargerateU25;
    this.payrateO25 = defaultRates.payrateO25;
    this.chargerateO25 = defaultRates.chargerateO25;
  }
}