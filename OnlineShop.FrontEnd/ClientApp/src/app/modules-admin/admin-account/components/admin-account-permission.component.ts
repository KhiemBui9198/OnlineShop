import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'handlebars';
import { ShopService } from 'src/app/core/services/shop.service';

@Component({
  selector: 'app-admin-account-permission',
  templateUrl: '../pages/admin-account-permission.component.html',
  styleUrls: ['../pages/admin-account-permission.component.scss']
})
export class AdminAccountPermissionComponent implements OnInit {
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
