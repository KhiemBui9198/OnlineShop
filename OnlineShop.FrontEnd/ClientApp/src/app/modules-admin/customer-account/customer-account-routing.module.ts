import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountComponent } from './components/customer-account.component';
import { CustomerAccountlistComponent } from './components/customer-account-list.component';
import { CustomerAccountOverviewComponent } from './components/customer-account-overview.component';
import { CustomerAccountOrderComponent } from './components/customer-account-order.component';
import { CustomerAccountDetailComponent } from './components/customer-account-detail.component';

export const CustomerAccountRoutes: Routes = [
  {

    path: '',
    component: CustomerAccountComponent,
    data: {
      Title: "Customer account"
    },
    children: [
      {
        path: '',
        redirectTo: '/signed/customer/customerlist',
        pathMatch: 'full',
      },
      {
        path:"customerlist",
        component: CustomerAccountlistComponent,
        data: {
          Title: "Customer Account List"
        }
      },
      {
        path:'detail',
        component: CustomerAccountDetailComponent,
        data: {
          Title: "Customer Account List"
        },
        children:[
          {
            path: '',
            redirectTo: '/signed/customer/detail/overview',
            pathMatch: 'full',
          },
          {
            path: 'overview',
            component: CustomerAccountOverviewComponent,
            data: {
              Title: "Customer overview"
            }
          },
          {
            path: 'order',
            component: CustomerAccountOrderComponent,
            data: {
              Title: "Customer order"
            }
          }

        ]
      }
    ]
  }
];