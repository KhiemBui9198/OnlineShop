import { Component, OnInit } from '@angular/core';
import { AdminAccountDetailComponent } from './admin-account-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AdminUserModel } from 'src/app/shared/models/admin-user-model';
import { AdminUserService } from 'src/app/core/services/admin-user.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Subscription } from "rxjs";
import { of } from "rxjs";
import { delay, finalize } from "rxjs/operators";


@Component({
  selector: 'app-admin-account-list',
  templateUrl: '../pages/admin-account-list.component.html',
  styleUrls: ['../pages/admin-account-list.component.scss']
})
export class AdminAccountlistComponent implements OnInit {
  userList:AdminUserModel[] = [];
  public isLoading = false;
  name: string;
  private loadingSubscription = new Subscription();
  constructor(
    private loaderService: LoaderService,
    protected _notificationSvc: NotificationService,
    private adminUserService:AdminUserService,
    private router: Router,
    private route: ActivatedRoute,
    public modalService: NgbModal) { }

  ngOnInit(): void {
    this.initData();
  } 

  initData(){
    this.loaderService.startLoading('Loading...'
    );
    this.adminUserService.getAllUser().subscribe(
      (res) =>{this.userList = res;
        this.loaderService.finishLoading();
      }
  )
  };
  addNewUser() {
    this.router.navigate([`/signed/admin/detail/${'0'}/editinfor`]);
  }

  onActive(id: string){
      this.router.navigateByUrl(`/signed/admin/detail/${id}/overview`);
  }
}
