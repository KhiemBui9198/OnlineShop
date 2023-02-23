import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './components/setting.component';
import { UserSettingComponent } from './components/user-setting.component';
export const SettingRoutes: Routes = [
  {

    path: '',
    component: SettingComponent,
    data: {
      Title: "Setting"
    },
    children: [
      {
        path: '',
        component: UserSettingComponent
      }
    ]



  }

];