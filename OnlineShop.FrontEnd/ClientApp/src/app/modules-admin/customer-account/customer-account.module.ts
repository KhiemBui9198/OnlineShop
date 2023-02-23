
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerAccountComponent } from './components/customer-account.component';
import { CustomerAccountlistComponent } from './components/customer-account-list.component';
import { CustomerAccountDetailComponent } from './components/customer-account-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CustomerAccountComponent,
    CustomerAccountlistComponent,
    CustomerAccountDetailComponent
  ]
})
export class CustomerAccountModule { }
