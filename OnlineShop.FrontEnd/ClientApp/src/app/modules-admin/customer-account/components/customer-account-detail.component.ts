import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-account-detail',
  templateUrl: '../pages/customer-account-detail.component.html',
  styleUrls: ['../pages/customer-account-detail.component.scss']
})
export class CustomerAccountDetailComponent implements OnInit {
  navLinks: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.navLinks = [
      {
        label: "Overview",
        link: `/signed/customer/detail/overview`,
        index: 0,
        isDisabled: false,
        isActive: true,
        icon:'bi-pie-chart'
      },
      {
        label: "Order",
        link: `/signed/customer/detail/order`,
        index: 1,
        isDisabled: false,
        isActive: true,
        icon:'bi-cart3'
      }
    ]

  }

  ngOnDestroy(): void {

  }
}
