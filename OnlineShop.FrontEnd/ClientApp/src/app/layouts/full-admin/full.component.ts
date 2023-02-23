import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-full-admin',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullAdminComponent implements OnInit, OnDestroy {

  private subParams: any;
  sidebarExpanded = true;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
}
