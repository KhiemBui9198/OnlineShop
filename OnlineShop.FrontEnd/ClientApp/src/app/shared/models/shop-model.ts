import { Base } from "./base"

export class ShopModel extends Base  {
        Id: number;
        Name: string;
        Address: string;
        Phone: number;
        Email: string;
        Description: string;
        OpenTime: string;
        constructor (item: any = null){
          super(item);
          if(item){
            this.Id = item.id || item.Id;
            this.Name = item.name || item.Name;
            this.Address = item.address || item.Address;
            this.Phone = item. phone || item.Phone;
            this.Email = item.email || item.Email;
            this.Description = item.description || item.Description;
            this.OpenTime = item.openTime || item.OpenTime
          }
        }
}