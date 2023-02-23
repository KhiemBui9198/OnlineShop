
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAccountComponent } from './components/admin-account.component';
import { AdminAccountlistComponent } from './components/admin-account-list.component';
import { AdminAccountDetailComponent } from './components/admin-account-detail.component';
import { AdminAccountOverviewComponent } from './components/admin-account-overview.component';
import { AdminAccountPermissionComponent } from './components/admin-account-permission.component';
import { AdminAccountEditInforComponent } from './components/admin-account-edit-infor.component';
import { FormsModule,ReactiveFormsModule,FormBuilder  } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminAccountComponent,
    AdminAccountlistComponent,
    AdminAccountDetailComponent,
    AdminAccountOverviewComponent,
    AdminAccountPermissionComponent,
    AdminAccountEditInforComponent
  ]
})
export class AdminAccountModule { }
