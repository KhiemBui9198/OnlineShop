import { MyProfileComponent } from "./components/my-profile.component";
import { UserInforComponent } from "./components/user-infor.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MyProfileComponent,
    UserInforComponent

  ]
})
export class MyProfiledModule { }
