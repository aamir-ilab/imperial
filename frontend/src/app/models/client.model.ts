export class Client {
    _id: string;
    id:number;
    emailAddress: string;
    profilePhoto: string;
    Password: string;
    phoneNumber:string;
    companyName: string;
    companyAddress: string;
    companyPhoneNumber: string;
    emailAddressAccountsTeam: string;
    VATNumber: string; //optional
    companyRegNumber: string;
    position: string;
    firstName: string;
    lastName: string;
    accessToken:string;
    refreshToken:string;
    createdDate:Date;
    companyLogo:string;
    clientType:string;
    parentId:string;
    clientStatus:string;
    companyUrl:string;// optional
    tradingName:string;//optional
    clear():void{
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
    }
    constructor(client) {
        this._id = client._id;
        this.id = client.id;
        this.emailAddress = client.emailAddress;
        this.profilePhoto = client.profilePhoto;
        this.Password = client.Password;
        this.phoneNumber = client.phoneNumber;
        this.companyName = client.companyName;
        this.companyAddress = client.companyAddress;
        this.companyPhoneNumber = client.companyPhoneNumber;
        this.emailAddressAccountsTeam = client.emailAddressAccountsTeam;
        this.VATNumber = client.VATNumber; //optional
        this.companyRegNumber = client.companyRegNumber;
        this.position = client.position;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.companyLogo = client.companyLogo;
        this.clientType = client.clientType;
        this.parentId =  client.parentId;
        this.clientStatus =  client.clientStatus;
        this.companyUrl = client.companyUrl;
        this.tradingName =  client.tradingName;
      }

      get name() {
        let name = '';

        if (this.firstName && this.lastName) {
          name = this.firstName + ' ' + this.lastName;
        } else if (this.firstName) {
          name = this.firstName;
        } else if (this.lastName) {
          name = this.lastName;
        }

        return name;
      }

      // set name(value) {
      // }

    //   get address() {
    //     return `${this.street}, ${this.zipcode} ${this.city}`;
    //   }

    //   set address(value) {
    //   }
}