import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from '../productItem/components/product-item.component';
import { RolePermissionComponent } from './components/role-permission.component';


export const RolePermissionRoute: Routes = [
  {

    path: '',
    component: RolePermissionComponent,
    data: {
      Title: "Role permission"
    },
    children: [
    ]



  }

];