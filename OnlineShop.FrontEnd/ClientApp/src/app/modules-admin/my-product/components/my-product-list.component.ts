import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CategoryModel } from 'src/app/shared/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/shared/models/product-model';
import { EditMyProductDialogComponent } from './my-product-dialog.component';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-my-product-list-component',
  templateUrl: '../pages/my-product-list.component.html',
  styleUrls: ['../pages/my-product-list.component.scss']
})
export class MyProductListComponent implements OnInit {
  category: CategoryModel[] = [];
  productList:ProductModel[] = [];
   constructor(
    private loaderService: LoaderService,
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
    this.loaderService.startLoading("Loading...");
    this.productService.getAllProduct().subscribe(
      (res:any) => {this.productList = res
      this.loaderService.finishLoading();
      }
    )
  }

  
  addProduct() {
    const modalRef = this.modalService.open(EditMyProductDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.model = {
      Title: "Product"
    };
    modalRef.result.then((res) => {
      if (res) {
        console.log(res);
      }
    }).catch(() => { });
  }

  editProduct(data:number){
    const modalRef = this.modalService.open(EditMyProductDialogComponent, {backdrop: 'static' });
    modalRef.componentInstance.productId = data;
    modalRef.componentInstance.model = {
      Title: "Product"
    };
    modalRef.result.then((res) =>{
      if (res == true) {
        this.initData();
      }
    }).catch(() => {});;
  }
}
