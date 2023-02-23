import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { AdminAccountComponent } from './components/admin-account.component';
import { AdminAccountlistComponent } from './components/admin-account-list.component';
import { AdminAccountDetailComponent } from './components/admin-account-detail.component';
import { AdminAccountOverviewComponent } from './components/admin-account-overview.component';
import { AdminAccountPermissionComponent } from './components/admin-account-permission.component';
import { AdminAccountEditInforComponent } from './components/admin-account-edit-infor.component';

export const AdminAccountRoutes: Routes = [
  {

    path: '',
    component: AdminAccountComponent,
    data: {
      Title: "Customer account"
    },
    children: [
      {
        path: '',
        redirectTo: '/signed/admin/userlist',
        pathMatch: 'full',
      },
      {
        path: "userlist",
        component: AdminAccountlistComponent,
        data: {
          Title: "Admin Account List"
        }
      },
      {
        path: 'detail/:userId',
        component: AdminAccountDetailComponent,
        data: {
          Title: "Account detail"
        },
        children:[
          {
            path: 'overview',
            component: AdminAccountOverviewComponent,
            data: {
              Title: "Account overview"
            }
          },
          {
            path: 'editinfor',
            component: AdminAccountEditInforComponent,
            data: {
              Title: "Edit infor"
            }
          },
          {
            path: 'permission',
            component: AdminAccountPermissionComponent,
            data: {
              Title: "Account permission"
            }
          }

        ]
      }
    ]
  }
];