import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ProductService } from 'src/app/core/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/shared/models/product-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/shared/models/category-model';
import { ManufacturerService } from 'src/app/core/services/manufacturer.service';
import { MatufacturerModel } from 'src/app/shared/models/manufacturer-model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: '../pages/my-product-dialog.component.html',
  styleUrls: ['../pages/my-product-dialog.component.scss']
})
export class EditMyProductDialogComponent implements OnInit {
  @Input() productId: number;
  @Input()  model:any;
  product:ProductModel;
  categoryList: CategoryModel[]=[];
  manufacturerList: MatufacturerModel[] = [];
  productForm: FormGroup;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  name = new FormControl('');
  constructor(
    private loaderService:LoaderService,
    protected notificationService: NotificationService,
    private categoryService:CategoryService,
    private productService: ProductService,
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private manufacturerService: ManufacturerService
  ) { }
  ngOnInit() {
    this.initData();
  }
  initForm(){
    this.productForm = this.formbuilder.group({
      Name: new FormControl(this.product?.Name,[]),
      Price: new FormControl(this.product?.Price,[]),
      OriginalPrice: new FormControl(this.product?.OriginalPrice,[]),
      Stock: new FormControl(this.product?.Stock,[]),
      SerialNumber: new FormControl(this.product?.SerialNumber,[]),
      CategoryId: new FormControl(this.product?.CategoryId,[]),
      ManufacturerId: new FormControl(this.product?.ManufacturerId,[])
    });
  }
  initData(){
    this.categoryService.getAllCategory().subscribe(
      (res) =>{this.categoryList = res;  
      this.manufacturerService.getAllManufacturer().subscribe(
    (res) => {this.manufacturerList = res;
      if (this.productId > 0){
      this.productService.getProduct(this.productId).subscribe({
        next:(res:any)=>{
          this.product = res;
            this.initForm();
        }
      })
    }
    else{
      this.initForm();
    }
    }
  );
      }
  );

  
    
  }

  onCancel() {
    this.activeModal.close();
  }
  onSubmitForm() {
    this.loaderService.startLoading('Submitting...');
    var request = new  ProductModel(this.productForm.value);
    if (this.productId > 0) {
      this.productService.updateProduct(this.product.Id, request).subscribe({
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
      this.productService.createProduct(request).subscribe({
      next:(res:any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
          this.loaderService.finishLoading();
        },
       error: (err) => {
          this.activeModal.close();
          this.notificationService.error('Error','Submit form unsuccessfully!',5000);
          this.loaderService.finishLoading();
        }
      })
    }
  }
}
