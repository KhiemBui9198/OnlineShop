import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-full-User',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.scss']
})
export class FullUserComponent implements OnInit, OnDestroy {

  private subParams: any;
  sidebarExpanded = true;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
}
