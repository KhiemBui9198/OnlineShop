
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import { NewsComponent } from './components/news.component';
import { NewsListComponent } from './components/news-list.component';
import { ShopListComponent } from './components/shop-list.component';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { EditShopDialogComponent } from './components/shop-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
    EditShopDialogComponent,
    ShopListComponent
  ]

})
export class NewsModule { }
