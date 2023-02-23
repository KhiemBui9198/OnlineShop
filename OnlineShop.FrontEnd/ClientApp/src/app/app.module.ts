import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoaderService } from './core/services/loader.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { FullAdminComponent } from './layouts/full-admin/full.component';
import { RouterModule } from '@angular/router';
import{AppBlankComponent} from './layouts/blank/blank.component';
import { DashboardModule } from './modules-admin/data-setting/dashboard.module';
import { CommonModule } from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarModule } from 'angular-calendar';
import { SettingdModule } from './modules-admin/setting/setting.module';
import { MyProfiledModule } from './modules-admin/myProfile/myprofile.module';
import { HeaderComponent } from './header/header.component';
import { HeaderUserComponent } from './header-user/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDialogComponent } from './modules-admin/myProfile/components/profile-dialog.component';
import { UserProfileOverviewComponent } from './modules-admin/myProfile/components/user-profile-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsModule } from './modules-admin/news/news.module';
import { FullUserComponent } from './layouts/full-user/full-user.component';
import { MyProductComponentModule } from './modules-admin/my-product/my-product.module';
import { CustomerAccountModule } from './modules-admin/customer-account/customer-account.module';
import { AppRoutes } from './app.routing';
import { AdminAccountModule } from './modules-admin/admin-account/admin-account.module';
import { NotificationListComponent } from './shared/notifiaction/notification.component';
import { NotificationService } from './core/services/notification.service';
import { RolePermissionModule } from './modules-admin/role-permission/role-permission.module';


const inappModules = [
  DashboardModule,
  CalendarModule,
  SettingdModule,
  MyProfiledModule,
  NewsModule,
  MyProductComponentModule,
  CustomerAccountModule,
  AdminAccountModule,
  RolePermissionModule
];
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullAdminComponent,
    AppBlankComponent,
    SidebarComponent,
    HeaderComponent,
    HeaderUserComponent,
    FooterComponent,
    ProfileDialogComponent,
    UserProfileOverviewComponent,
    NotificationListComponent,
    FullUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes
    ),
    ...inappModules
  ],
  providers: [NotificationService,
    LoaderService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
