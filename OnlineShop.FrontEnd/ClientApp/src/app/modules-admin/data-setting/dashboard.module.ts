import { DashboardComponent } from "./components/dashboard.component";
import { DashboardListComponent } from "./components/dashboard-list.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import { NewsComponent } from "src/app/news/news.component";
import { ShopListComponent } from "../news/components/shop-list.component";
import { FormsModule,ReactiveFormsModule,FormBuilder  } from "@angular/forms";
import { EditProductDialogComponent } from "./components/product-dialog.component";
import { SummaryComponent } from "./components/summary.component";
import { OrderListComponent } from "./components/order-list.component";
import { MessageDashboardListComponent } from "./components/message-dashboard-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardListComponent,
    ProductItemComponent,
    NewsComponent,
    EditProductDialogComponent,
    SummaryComponent,
    OrderListComponent,
    MessageDashboardListComponent
  ]
})
export class DashboardModule { }
