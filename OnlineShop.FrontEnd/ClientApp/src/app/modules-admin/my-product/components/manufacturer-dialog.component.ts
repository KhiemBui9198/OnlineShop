import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ManufacturerService } from 'src/app/core/services/manufacturer.service';
import { MatufacturerModel } from 'src/app/shared/models/manufacturer-model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoaderService } from 'src/app/core/services/loader.service';


@Component({
  selector: 'app-edit-manufacturer-dialog',
  templateUrl: '../pages/manufacturer-dialog.component.html',
  styleUrls: ['../pages/manufacturer-dialog.component.scss']
})
export class EditManufacturerDialogComponent implements OnInit {
  @Input() manufacturerId: number; 
  manufacturer:MatufacturerModel;
  manufacturerForm: FormGroup;
  constructor(
    private loaderService: LoaderService,
    protected notificationService: NotificationService,
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    private manufacturerService: ManufacturerService

  ) { this.initForm();
  }
  ngOnInit() {
    this.initData();
  }
  initForm(){
    this.manufacturerForm = this.formbuilder.group({
      Name: new FormControl(this.manufacturer?.Name,[]),
      Description: new FormControl(this.manufacturer?.Description,[])
    });
  }
  initData(){
    if (this.manufacturerId > 0){
      this.manufacturerService.getManufacturer(this.manufacturerId).subscribe({
        next:(res:any)=>{
          this.manufacturer = res;
            this.initForm();
        },
        error: (error: any) => {
        }
      })
    }
    else{
      this.initForm();
    }
  }

  onCancel() {
    this.activeModal.close();
  }
  onSubmitForm() {
    this.loaderService.startLoading('Submitting...');
    var request = new MatufacturerModel(this.manufacturerForm.value);
    if (this.manufacturerId > 0) {
      this.manufacturerService.updateManufacturer(this.manufacturer.Id, request).subscribe({
        next:(res: any) => {
          this.activeModal.close(true);
          this.notificationService.success('Successfully','Submit form successfully!',5000);
          this.loaderService.finishLoading();
        },
        error: (error: any) => {
          this.activeModal.close();
          this.notificationService.error('Error','Submit form unsuccessfully!',5000);
          this.loaderService.finishLoading();
        }
    })
    }
    else {
      this.loaderService.startLoading('Submitting...');
      this.manufacturerService.createManufacturer(request).subscribe({
      next:(res:any) => {
          this.activeModal.close(true);
          this.loaderService.finishLoading();
        },
       error: (err) => {
          this.activeModal.close();
          this.loaderService.finishLoading();
        }
      })
    }
  }
}
