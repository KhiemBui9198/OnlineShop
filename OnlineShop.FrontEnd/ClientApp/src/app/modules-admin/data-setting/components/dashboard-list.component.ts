import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { EditProductDialogComponent } from './product-dialog.component';
import { CategoryModel } from 'src/app/shared/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/shared/models/product-model';

@Component({
  selector: 'app-dashboard-list-component',
  templateUrl: '../pages/dashboard-list.component.html',
  styleUrls: ['../pages/dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  category: CategoryModel[] = [];
  productList:ProductModel[] = [];
   constructor(
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    public modalService: NgbModal,
    public categoryService: CategoryService
  ) { }
  ngOnInit() {
    this.initData();
  }
  initData(){
    this.productService.getAllProduct().subscribe(
      (res:any) => {this.productList = res}
    )
  }
  editProduct() {
    const modalRef = this.modalService.open(EditProductDialogComponent);
    modalRef.componentInstance.model = {
      Title: "Product"
    };
    modalRef.result.then((res) => {
      if (res) {
        console.log(res);
      }
    }).catch(() => { });
  }
}
