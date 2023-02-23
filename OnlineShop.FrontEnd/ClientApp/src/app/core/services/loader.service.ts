import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2
} from "@angular/core";
import { Subject } from "rxjs";
import { LoaderModel } from "src/app/shared/models/loader";
import { Input } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class LoaderService {
  @Input() title: string; 
  private loadingEvent$ = new Subject<LoaderModel>();
  public isLoading$ = this.loadingEvent$.asObservable();


  constructor() { }

  public startLoading(title:string, message?:string ) {
    this.loadingEvent$.next({
      IsLoading: true,
      Title: title || '',
      Message: message ||''
    });
  }

  public finishLoading() {
    this.loadingEvent$.next({
      IsLoading: false,
      Title:"",
      Message:""
    });
  }
}
