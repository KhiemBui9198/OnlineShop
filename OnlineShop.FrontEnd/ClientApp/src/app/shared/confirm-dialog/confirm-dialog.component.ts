import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() model: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {

  }
  ngOnDestroy(): void {

  }
  onOk() {
    this.passEntry.emit(true);
    this.activeModal.close(true)
  }
  onCancel() {
    this.passEntry.emit(false);
    this.activeModal.close(false);
  }
}
