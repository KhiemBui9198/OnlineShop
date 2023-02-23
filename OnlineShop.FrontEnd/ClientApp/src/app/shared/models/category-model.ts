import { Base } from "./base";
import { ProductModel } from "./product-model";

export class CategoryModel extends Base  {
        Id: number;
        Name:string;
        SortOrder: number ;
        IsShowOnHome: boolean;
        Products: ProductModel[] =[];
        constructor (item: any = null){
          super(item)
          if(item){
            this.Id = item.id || item.Id;
            this.Name = item.name || item.Name;
            this.SortOrder = item.sortOrder || item.SortOrder;
            this.IsShowOnHome = item.isShowOnHome || item.IsShowOnHome;
          }
        }
}