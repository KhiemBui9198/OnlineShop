import { RouterModule, Routes } from '@angular/router';
import { FullAdminComponent } from './layouts/full-admin/full.component';
import { NgModule } from '@angular/core';
import { DashboardRoutes } from "./modules-admin/data-setting/dashboard-routing.module";
import { MyProfileRoutes } from './modules-admin/myProfile/myprofile-routing.module';
import { SettingRoutes } from './modules-admin/setting/setting-routing.module';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { SignInComponent } from './layouts/signin/signin.component';
import { FullUserComponent } from './layouts/full-user/full-user.component';
import { MyProductRoutes } from './modules-admin/my-product/my-product-routing.module';
import { NewsRoutes } from './modules-admin/news/news-routing.module';
import { CustomerAccountRoutes } from './modules-admin/customer-account/customer-account-routing.module';
import { AdminAccountRoutes } from './modules-admin/admin-account/admin-account-routing.module';
import { RolePermissionRoute } from './modules-admin/role-permission/role-permission-routing.module';
 export const AppRoutes: Routes = [
  {
    path: '',
    component: AppBlankComponent,
    children: [
    {
        path: '',
        component:SignInComponent,
        pathMatch: 'full'
    },
      {
        path: 'signed',
        component:FullAdminComponent,
        children:[
          {
            path: '',
            redirectTo: '/signed/dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            children: [...DashboardRoutes],
            data: {
              breadcrumb: {
                label: 'Dashboard',
              }
            }
          },
          {
            path: 'product',
            children: [...MyProductRoutes],
            data: {
              breadcrumb: {
                label: 'Product',
              }
            }
          },
          {
            path: 'customer',
            children: [...CustomerAccountRoutes],
            data: {
              breadcrumb: {
                label: 'My profile',
              }
            }
          },
          {
            path: 'admin',
            children: [...AdminAccountRoutes],
            data: {
              breadcrumb: {
                label: 'Admin',
              }
            }
          },
          {
            path: 'news',
            children: [...NewsRoutes],
            data: {
              breadcrumb: {
                label: 'News',
              }
            }
          },
          {
            path: 'rolepermission',
            children: [...RolePermissionRoute],
            data: {
              breadcrumb: {
                label: 'Role Permission',
              }
            }
          }

        ]

      }
     
    ]
  }
];