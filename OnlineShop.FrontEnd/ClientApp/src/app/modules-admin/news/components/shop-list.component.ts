import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { EditShopDialogComponent } from './shop-dialog.component';
import { ShopService } from 'src/app/core/services/shop.service';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-shop-list-component',
  templateUrl: '../pages/shop-list.component.html',
  styleUrls: ['../pages/shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  shopData: ShopModel[] = []
  constructor(
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.initData();
  }
  initData() {
    this.loaderService.startLoading('Loading...');
    this.shopService.getAllShop().subscribe(
      (res: any) => {
        this.shopData = res;
       this.loaderService.finishLoading();
      }
    )
  }
  onAddShop() {
    const modalRef = this.modalService.open(EditShopDialogComponent, { size: 'xl', backdrop: 'static' });
    modalRef.componentInstance.shopId = 0;
    modalRef.result.then((res) => {
      if (res == true) {
        this.initData();
      }
    });
  }
  onEditShop(data:number) {
    const modalRef = this.modalService.open(EditShopDialogComponent);
    modalRef.componentInstance.shopId = data;
    modalRef.result.then((res) => {
      if (res== true) {
        this.initData();
      }
    });
  }
  onDeleteShop(data:number) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.model = {
      Title: "Shop",
      Content: "Are you sure want to delete this item ?",
      txtNo: "Cancel",
      txtYes: "OK"
    };
    modalRef.result.then((res) => {
      if (res == true) {
        this.shopService.deleteShop(data).subscribe(
          (res) => {
            this.initData();
          }
        )
      }
    }).catch(() => { });
  }
}
