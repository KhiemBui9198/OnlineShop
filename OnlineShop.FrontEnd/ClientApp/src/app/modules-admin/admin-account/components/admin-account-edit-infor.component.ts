import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'handlebars';
import { ShopService } from 'src/app/core/services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserService } from 'src/app/core/services/admin-user.service';
import { AdminUserModel } from 'src/app/shared/models/admin-user-model';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-admin-account-edit-infor',
  templateUrl: '../pages/admin-account-edit-infor.component.html',
  styleUrls: ['../pages/admin-account-edit-infor.component.scss']
})
export class AdminAccountEditInforComponent implements OnInit {
  userId: string;
  shop: ShopModel;
  userForm: FormGroup;
  private subParams: any;
  userInfor: AdminUserModel;
  isCreateNew:boolean;
  title:String;
  constructor(
    private loaderService:LoaderService,
    private router: Router,
    private adminUserService:AdminUserService,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit():void {
    this.subParams =this.route.parent?.params.subscribe(
      (params) => {this.userId =(params['userId']);
        this.initData(this.userId)
    }
    )  
  }
  initForm() {
    this.userForm = this.formbuilder.group({
      FirstName: new FormControl(this.userInfor?.FirstName, []),
      LastName: new FormControl(this.userInfor?.LastName, []), 
      PhoneNumber: new FormControl(this.userInfor?.PhoneNumber, []),
      Email: new FormControl(this.userInfor?.Email, []),
      UserName: new FormControl(this.userInfor?.UserName, [])
    });
  }
  initData(id: string) {
    if (id  != '0') {
      this.adminUserService.getUserId(id).subscribe({
        next:(res:any)=>{
          this.userInfor = res;
          this.title = "Edit information";
          this.initForm();
          this.isCreateNew = false;
        }
      })
    }
    else {
      this.title = "New user";
      this.initForm();
      this.isCreateNew = true;
    }

  }

  onCancel() {
  }

  ngOnDestroy(): void {
    this.subParams.unsubscribe()
  }

  onSubmit(){
    var request = new  AdminUserModel(this.userForm.value);
    if (this.userId != '0') {
      this.loaderService.startLoading("Submitting...");
      this.adminUserService.updateUser(this.userId, request).subscribe({
        next:(res: any) => {
          this.loaderService.finishLoading();
          this.router.navigateByUrl(`/signed/admin/detail/${this.userId}/overview`);
        },
        error: (error: any) => {
        }
    })
    }
    else {
      this.loaderService.startLoading("Submitting...");
      this.adminUserService.UserSignUp(request).subscribe({
      next:(res:any) => {
        this.loaderService.finishLoading();
        },
       error: (err) => {
        }
      })
    }
  }
}
