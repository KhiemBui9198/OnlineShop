import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { ShopModel } from 'src/app/shared/models/shop-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-detail',
  templateUrl: '../pages/admin-account-detail.component.html',
  styleUrls: ['../pages/admin-account-detail.component.scss']
})
export class AdminAccountDetailComponent implements OnInit {
  navLinks: any[] = [];
  private subParams: any;
  userId: String | null;
  constructor(
    private route: ActivatedRoute, private router: Router
  ) {
  }
  ngOnInit(): void {
    this.subParams = this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
    this.navLinks = [
      {
        label: "Overview",
        link: `/signed/admin/detail/${this.userId}/overview`,
        index: 0,
        isDisabled: false,
        isActive: true,
        icon: 'bi-pie-chart'
      },
      {
        label: "Permission",
        link: `/signed/admin/detail/${this.userId}/permission`,
        index: 1,
        isDisabled: false,
        isActive: true,
        icon: 'bi-cart3'
      }
    ]

  }

  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
