import { NodeWithI18n } from "@angular/compiler";
import { toJSDate } from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";

export class Base {
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  
  constructor(item: any) {
    if (item) {
      this.CreatedAt = item.createdAt ? new Date(item.createdAt) : undefined;
      this.LastUpdatedAt = item.lastUpdatedAt ? new Date(item.lastUpdatedAt) : undefined;
  }}

}