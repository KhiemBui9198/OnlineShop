import { MyProductComponent } from './components/my-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EditMyProductDialogComponent } from './components/my-product-dialog.component';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { MyProductListComponent } from './components/my-product-list.component';
import { ManufacturerListComponent } from './components/manufacturer-list.component';
import { EditManufacturerDialogComponent } from './components/manufacturer-dialog.component';
import { CategoryListComponent } from './components/category-list.component';
import { EditCategoryDialogComponent } from './components/category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,  
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyProductComponent,
    EditMyProductDialogComponent,
    MyProductListComponent,
    ManufacturerListComponent,
    EditManufacturerDialogComponent,
    CategoryListComponent,
    EditCategoryDialogComponent
  ]
})
export class MyProductComponentModule { }
