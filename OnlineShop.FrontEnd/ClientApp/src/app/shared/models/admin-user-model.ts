import { Base } from "./base";

export class AdminUserModel extends Base  {
        Id: string;
        FirstName:string;
        LastName: number ;
        UserName: boolean;
        PhoneNumber: string;
        Email: string;
        constructor (item: any = null){
          super(item)
          if(item){
            this.Id = item.id || item.Id;
            this.FirstName = item.firstName || item.FirstName;
            this.LastName = item.lastName || item.LastName;
            this.UserName = item.userName || item.UserName;
            this.PhoneNumber = item.phoneNumber || item.PhoneNumber;
            this.Email = item.email || item.Email
          }
        }
}