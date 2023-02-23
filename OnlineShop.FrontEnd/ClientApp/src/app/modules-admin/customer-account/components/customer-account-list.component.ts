import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-customer-account-list',
  templateUrl: '../pages/customer-account-list.component.html',
  styleUrls: ['../pages/customer-account-list.component.scss']
})
export class CustomerAccountlistComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
  editUser() {
    this.router.navigateByUrl(`/signed/customer/detail`);
  }

}
