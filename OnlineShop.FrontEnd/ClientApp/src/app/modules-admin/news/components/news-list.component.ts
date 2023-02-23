import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-news-list-component',
  templateUrl: '../pages/news-list.component.html',
  styleUrls: ['../pages/news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  constructor(    
    private router: Router,
    private route: ActivatedRoute,    public modalService: NgbModal) { }

  ngOnInit() {
  }
}
