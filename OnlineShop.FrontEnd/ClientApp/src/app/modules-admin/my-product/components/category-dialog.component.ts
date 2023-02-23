import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/shared/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoaderService } from 'src/app/core/services/loader.service';


@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: '../pages/category-dialog.component.html',
  styleUrls: ['../pages/category-dialog.component.scss']
})
export class EditCategoryDialogComponent implements OnInit {
  @Input() categoryId: number; 
  category:CategoryModel;
  categoryForm: FormGroup;
  constructor(
    private loaderService: LoaderService,
    protected notificationService: NotificationService,
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private categoryService: CategoryService

  ) { 
    this.initForm();
  }
  ngOnInit():void {
    this.initData(); 
  }
  initForm(){
    this.categoryForm = new FormGroup({
      name: new FormControl(this.category?.Name,[]),
      sortOrder: new FormControl(this.category?.SortOrder,[]),
      isShowOnHome: new FormControl(this.category?.IsShowOnHome || false,[])
    });
  }
  initData(){
    if (this.categoryId > 0){
      this.categoryService.getCategory(this.categoryId).subscribe({
        next:(res:any)=>{
          this.category = res;
          console.log(this.category);
          this.initForm();
        }
      })
    }
    else{
      this.initForm();
    }
    
  }

  onCancel() {
    this.activeModal.close();
  }
  onSubmitForm() {
    this.loaderService.startLoading('Submitting...');
    var request = new CategoryModel(this.categoryForm.value);
    if (this.categoryId > 0) {
      this.categoryService.updateCategory(this.category.Id, request).subscribe({
        next:(res: any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
          this.loaderService.finishLoading();
        },
        error: (error: any) => {
          this.activeModal.close();
          this.notificationService.error('Error','Submit form unsuccessfully!',5000);
          this.loaderService.finishLoading();
        }
    })
    }
    else {
      this.loaderService.startLoading('Submitting...');
      this.categoryService.createCategory(request).subscribe({
      next:(res:any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
          this.loaderService.finishLoading();
        },
       error: (err:any) => {
          this.activeModal.close();
          this.notificationService.error('Error','Submit form unsuccessfully!',5000);
          this.loaderService.finishLoading();
        }
      })
    }
  }
}
