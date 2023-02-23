import { Base } from "./base"

export class MatufacturerModel extends Base  {
        Id: number;
        Name: string;
        Description: string;
        constructor (item: any = null){
          super(item);
          if(item){
            this.Id = item.id ||item.Id ;
            this.Name = item.name || item.Name;
            this.Description = item.description || item.Description
          }
        }
}