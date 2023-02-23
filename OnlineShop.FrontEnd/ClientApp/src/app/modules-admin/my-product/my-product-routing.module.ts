import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductComponent } from './components/my-product.component';
import { MyProductListComponent } from './components/my-product-list.component';
export const MyProductRoutes: Routes = [
  {

    path: '',
    component: MyProductComponent,
    data: {
      Title: "My product"
    },
    children: [
      {
        path: 'Product list',
        component: MyProductListComponent
      },
    ]
  }

];