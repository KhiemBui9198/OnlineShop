import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news.component';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import {NewsListComponent } from './components/news-list.component';

export const NewsRoutes: Routes = [
  {

    path: '',
    component: NewsComponent,
    data: {
      Title: "Order"
    },
    children: [
    ]



  }

];