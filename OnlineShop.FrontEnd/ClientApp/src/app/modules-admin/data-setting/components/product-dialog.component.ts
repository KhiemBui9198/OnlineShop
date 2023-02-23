import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ProductService } from 'src/app/core/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/shared/models/product-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryModel } from 'src/app/shared/models/category-model';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: '../pages/product-dialog.component.html',
  styleUrls: ['../pages/product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {
  @Input() productId: number;
  @Input()  model:any;
  product:ProductModel;
  categoryList: CategoryModel[]=[];
  productForm: FormGroup;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  name = new FormControl('');
  constructor(
    private categoryService:CategoryService,
    private productService: ProductService,
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
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
      //ManufacturerId: new FormControl(this.product?.ManufacturerId,[])
    });
  }
  initData(){
    this.categoryService.getAllCategory().subscribe(
      (res) =>{this.categoryList = res;
      }
  );


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

  onCancel() {
    this.activeModal.close();
  }
  onSubmitForm() {
    var request = new  ProductModel(this.productForm.value);
    if (this.productId > 0) {
      this.productService.updateProduct(this.product.Id, request).subscribe({
        next:(res: any) => {
          this.activeModal.close(true);
        },
        error: (error: any) => {
          this.activeModal.close();
        }
    })
    }
    else {
      this.productService.createProduct(request).subscribe({
      next:(res:any) => {
          this.activeModal.close(true);
        },
       error: (err) => {
          this.activeModal.close();
        }
      })
    }
  }
}
