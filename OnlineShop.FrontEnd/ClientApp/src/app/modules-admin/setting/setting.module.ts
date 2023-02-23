import { SettingComponent } from './components/setting.component';
import { UserSettingComponent } from './components/user-setting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SettingComponent,
    UserSettingComponent

  ]
})
export class SettingdModule { }
