import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import {EditProductDialogComponent} from '../../data-setting/components/product-dialog.component';
import { MatufacturerModel } from 'src/app/shared/models/manufacturer-model';
import { ManufacturerService } from 'src/app/core/services/manufacturer.service';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EditManufacturerDialogComponent } from './manufacturer-dialog.component';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-manufacturer-list-component',
  templateUrl: '../pages/manufacturer-list.component.html',
  styleUrls: ['../pages/manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {
  manufacturerList:MatufacturerModel[] = [];
  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private loaderService:LoaderService,
    public manufacturerService: ManufacturerService,
    public modalService: NgbModal
    ) { }

  ngOnInit() {
    this.initData();
  }
  addnewCategory() {
    const modalRef = this.modalService.open(EditManufacturerDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.manufacturerId = 0;
    modalRef.result.then((res) =>{
      if (res == true) {
        this.initData();
      }
    }).catch(() => {});;
  }
  initData(){
    this.loaderService.startLoading("Loading...");
    this.manufacturerService.getAllManufacturer().subscribe(
        (res) =>{this.manufacturerList = res;
          this.loaderService.finishLoading();
        }
    )
  }
  onDeleteCategory(data:number){
    const modalRef = this.modalService.open(ConfirmDialogComponent, {  backdrop: 'static' });
    modalRef.componentInstance.model = {
      Title: "Category",
      Content:"Are you sure want to delete this item ?",
      txtNo:"Cancel",
      txtYes:"OK"
    };
    modalRef.result.then((res) =>{
      if (res == true) {
        this.manufacturerService.deleteManufacturer(data).subscribe(
          (res) =>{
            this. initData();
          }
      )
        console.log(data)
      }
    }).catch(() => {});
  }
  onEditCategory(data:number){
    const modalRef = this.modalService.open(EditManufacturerDialogComponent, { backdrop: 'static' });
    modalRef.componentInstance.manufacturerId = data;
    modalRef.result.then((res) =>{
      if (res == true) {
        this.initData();
      }
    }).catch(() => {});;
  }

}
