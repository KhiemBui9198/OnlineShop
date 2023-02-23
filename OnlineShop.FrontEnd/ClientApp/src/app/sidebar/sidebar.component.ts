import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  navLinks: any[] =[];
  constructor() { }

  ngOnInit(): void {
    this.navLinks = [
      {
        label: "Dashboard",
        link: `/signed/dashboard`,
        index: 0,
        isDisabled: false,
        isActive: true,
        icon:'bi-pie-chart'
      },
      {
        label: "Product",
        link: `/signed/product`,
        index: 1,
        isDisabled: false,
        isActive: true,
        icon:'bi-cart3'
      },
      {
        label: "New",
        link: `/signed/news`,
        index: 2,
        isDisabled: false,
        isActive: true,
        icon:'bi-globe'
      },
      {
        label: "Customer list",
        link: `/signed/customer`,
        index: 3,
        isDisabled: false,
        isActive: true,
        icon:'bi-people'
      },
      {
        label: "Admin list",
        link: `/signed/admin`,
        index: 4,
        isDisabled: false,
        isActive: true,
        icon:'bi-hdd-stack'
      },
      {
        label: "Role & Permisison",
        link: `/signed/rolepermission`,
        index: 5,
        isDisabled: false,
        isActive: true,
        icon:'bi bi-person-lines-fill'
      },
    ]
  }

}
