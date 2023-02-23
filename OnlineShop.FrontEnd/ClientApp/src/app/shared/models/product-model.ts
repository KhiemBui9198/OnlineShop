import { Base } from "./base";
import { CategoryModel } from "./category-model";
import { MatufacturerModel } from "./manufacturer-model";

export class ProductModel extends Base  {
        Id: number;
        Name: string;
        Price: number ;
        ViewCount:Number;
        Stock: number;
        SerialNumber: string;
        Category: CategoryModel;
        CategoryId : number;
        OriginalPrice: number;
        ProductStatus: number;
        Manufacturer : MatufacturerModel;
        ManufacturerId: number;
        constructor (item: any = null){
          super(item);
          if(item){
            this.Id =  item.id || item.Id;
            this.Name =  item.name ||item.Name;
            this.Price =  item.price || item.Price;
            this.OriginalPrice =  item.originalPrice || item.OriginalPrice ;
            this.ViewCount = item.viewCount || item.ViewCount;
            this.Stock =  item.stock || item.Stock;
            this.SerialNumber =  item.serialNumber || item.SerialNumber;
            this.Category = item.category || item.Category;
            this.CategoryId = item.categoryId || item.CategoryId;
            this.ProductStatus = item.productStatus || item.ProductStatus;
            this.Manufacturer = item.manufacturer || item.Manufacturer;
            this.ManufacturerId = item.manufacturerId || item.ManufacturerId;
          }
        }
} 