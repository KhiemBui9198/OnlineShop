import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'handlebars';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-customer-account-order',
  templateUrl: '../pages/customer-account-order.component.html',
  styleUrls: ['../pages/customer-account-order.component.scss']
})
export class CustomerAccountOrderComponent implements OnInit {
  shop: ShopModel;
  shopForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private shopService: ShopService
  ) {
  }

  ngOnInit() {
  }


  onCancel() {
  }

  ngOnDestroy(): void {

  }
}
