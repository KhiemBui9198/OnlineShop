import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'handlebars';
import { ShopService } from 'src/app/core/services/shop.service';
import { AdminUserService } from 'src/app/core/services/admin-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserModel } from 'src/app/shared/models/admin-user-model';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-admin-account-overview',
  templateUrl: '../pages/admin-account-overview.component.html',
  styleUrls: ['../pages/admin-account-overview.component.scss']
})
export class AdminAccountOverviewComponent implements OnInit {
  userId: string;
  shop: ShopModel;
  private subParams: any;
  userInfor: AdminUserModel;
  constructor(
    private loaderService:LoaderService,
    private adminUserService:AdminUserService,
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loaderService.startLoading('Loading...');
  this.subParams =this.route.parent?.params.subscribe(
    (params) => {this.userId =(params['userId']);
      this.initData(this.userId)
  }
  )   
  }

  initData(id: string) {
    if(id != null){
      this.adminUserService.getUserId(id).subscribe({
        next:(res:any)=>{
          this.userInfor = res;
          this.loaderService.finishLoading();
        }
      })

    }
    else{
      this.userInfor
    }
  }
  onEditProfile(){
    this.router.navigateByUrl(`/signed/admin/detail/${this.userInfor.Id}/editinfor`);
  }
  onCancel() {
  }
  ngOnDestroy(): void {
this.subParams.unsubscribe();
  }
}
