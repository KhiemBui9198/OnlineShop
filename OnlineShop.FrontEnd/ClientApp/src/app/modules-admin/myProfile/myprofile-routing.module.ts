import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './components/my-profile.component';
import { UserInforComponent } from './components/user-infor.component';
import { UserProfileOverviewComponent } from './components/user-profile-overview.component';
import { UserProfileSettingsComponent } from './components/user-profile-settings.component';
import { UserProfileBillingComponent } from './components/user-profile-billing.component';

export const MyProfileRoutes: Routes = [
  {

    path: '',
    component: MyProfileComponent,
    data: {
      Title: "Dashboard"
    },
    children: [
      {
        path: '',
        component: UserInforComponent,
        children: [
          {
            path: '',
            component: UserProfileOverviewComponent
          },
          {
            path: 'overview',
            component: UserProfileOverviewComponent
          },
          {
            path: 'settings',
            component: UserProfileSettingsComponent
          },
          {
            path: 'billing',
            component: UserProfileBillingComponent
          },
        ]
      }
    ]
  }
];