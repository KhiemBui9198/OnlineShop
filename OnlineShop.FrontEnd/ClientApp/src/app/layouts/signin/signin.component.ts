import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(    
    private router: Router,
    private route: ActivatedRoute,    
    public modalService: NgbModal) { }

  ngOnInit() {
  }
  onSignInByUser(){
    this.router.navigateByUrl(``);
  }
  onSignIn(){
    this.router.navigateByUrl(`/signed`);
  }
  onDeleteCategory(){
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.model = {
      Title: "Category"
    };
    modalRef.result.then((res) =>{
      if (res) {
        console.log(res);
      }
    });
  }
}
