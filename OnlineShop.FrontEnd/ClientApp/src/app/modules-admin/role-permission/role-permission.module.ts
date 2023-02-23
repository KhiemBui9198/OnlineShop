
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolePermissionComponent } from './components/role-permission.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RolePermissionComponent
  ]
})
export class RolePermissionModule { }
