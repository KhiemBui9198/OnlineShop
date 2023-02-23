import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Subscription } from "rxjs";
import { NotificationService } from 'src/app/core/services/notification.service';
import { Notification, NotificationType } from '../models/notification';
import { LoaderModel } from '../models/loader';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public isLoading = false;
  public title:string;
  public message:string;
  public loaderModel:LoaderModel;
  private loadingSubscription = new Subscription();

  constructor(private readonly loaderService: LoaderService) {
    this.loadingSubscription = this.loaderService.isLoading$.subscribe(
      loaderModel => {
        this.isLoading = loaderModel.IsLoading;
        this.title = loaderModel.Title;
        this.message= loaderModel.Message;
      }
    );
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
