import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-infor',
  templateUrl: '../pages/user-infor.component.html',
  styleUrls: ['../pages/user-infor.component.scss']
})
export class UserInforComponent implements OnInit {
  navLinks: any[] =[];
  constructor(    
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.navigateByUrl(`/myprofile/overview`);
    this.navLinks = [
      {
        label: "Overview",
        link: `/myprofile/overview`,
        index: 0,
        isDisabled: false,
        isActive: true,
        icon:'bi-bar-chart-line-fill'
      },
      {
        label: "Settings",
        link: `/myprofile/settings`,
        index: 1,
        isDisabled: false,
        isActive: true,
        icon:'bi-tools'
      },
      {
        label: "Billing",
        link: `/myprofile/billing`,
        index: 2,
        isDisabled: false,
        isActive: true,
        icon:'bi-calendar-week-fill'
      }
    ]

  }

}
