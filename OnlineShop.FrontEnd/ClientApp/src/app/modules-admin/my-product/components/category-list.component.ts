import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import {EditCategoryDialogComponent} from './category-dialog.component';
import {EditProductDialogComponent} from '../../data-setting/components/product-dialog.component';
import { CategoryModel } from 'src/app/shared/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-category-list-component',
  templateUrl: '../pages/category-list.component.html',
  styleUrls: ['../pages/category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  category:CategoryModel[] = [];
  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    public categoryService: CategoryService,
    public modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.initData();
  }
  addnewCategory() {
    const modalRef = this.modalService.open(EditCategoryDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.categoryId = 0;
    modalRef.result.then((res) =>{
      if (res == true) {
        this.initData();
      }
    }).catch(() => {});;
  }
  initData(){
    this.categoryService.getAllCategory().subscribe(
        (res) =>{this.category = res;
        }
    )
  }
  onDeleteCategory(data:number){
    const modalRef = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.model = {
      Title: "Category",
      Content:"Are you sure want to delete this item ?",
      txtNo:"Cancel",
      txtYes:"OK"
    };
    modalRef.result.then((res) =>{
      if (res == true) {
        this.categoryService.deleteCategory(data).subscribe(
          (res) =>{
            this. initData();
          }
      )
        console.log(data)
      }
    }).catch(() => {});
  }
  onEditCategory(data:number){
    const modalRef = this.modalService.open(EditCategoryDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.categoryId = data;
    modalRef.result.then((res) =>{
      if (res == true) {
        this.initData();
      }
    }).catch(() => {});;
  }

}
