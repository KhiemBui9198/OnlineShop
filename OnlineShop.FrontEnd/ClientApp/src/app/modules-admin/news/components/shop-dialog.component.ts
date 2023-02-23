import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'handlebars';
import { ShopService } from 'src/app/core/services/shop.service';
import { NotificationService } from 'src/app/core/services/notification.service';


@Component({
  selector: 'app-edit-shop-dialog',
  templateUrl: '../pages/shop-dialog.component.html',
  styleUrls: ['../pages/shop-dialog.component.scss']
})
export class EditShopDialogComponent implements OnInit {
  @Input() shopId: number;
  shop: ShopModel;
  shopForm: FormGroup;
  constructor(
    protected notificationService:NotificationService,
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private shopService: ShopService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.initData();
  }
  initForm() {
    this.shopForm = this.formbuilder.group({
      Name: new FormControl(this.shop?.Name, []),
      Address: new FormControl(this.shop?.Address, []),
      Phone: new FormControl(this.shop?.Phone, []),
      Email: new FormControl(this.shop?.Email, []),
      Description: new FormControl(this.shop?.Description, []),
      OpenTime: new FormControl(this.shop?.OpenTime, [])
    });
  }
  initData() {
    if (this.shopId > 0) {
      this.shopService.getShopById(this.shopId).subscribe({
        next: (res: any) => {
          this.shop = res;
          this.initForm();
        }
      })
    }
    else {
      this.initForm();
    }

  }

  onCancel() {
    this.activeModal.close();
  }
  onSubmitForm() {
    var request = new ShopModel(this.shopForm.value);
    if (this.shopId > 0) {
      this.shopService.updateShop(this.shop.Id, request).subscribe({
        next: (res: any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
        },
        error: (error: any) => {
          this.activeModal.close();
          this.notificationService.error('Error','Submit form unsuccessfully!',5000);
        }
      })
    }
    else {
      this.shopService.createShop(request).subscribe({
        next: (res: any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
        },
        error: (err) => {
          this.activeModal.close();
           this.notificationService.error('Error','Submit form unsuccessfully!',5000);
        }
      })
    }
  }
  ngOnDestroy(): void {

  }
}
