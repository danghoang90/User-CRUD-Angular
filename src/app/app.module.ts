import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessageComponent } from './component/share/message/message.component';
import { MasterComponent } from './component/master/master.component';
import { NavbarComponent } from './component/core/navbar/navbar.component';
import { SidebarComponent } from './component/core/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './component/users/user-list/user-list.component';
import { UserAddComponent } from './component/users/user-add/user-add.component';
import { UserEditComponent } from './component/users/user-edit/user-edit.component';
import {UserService} from "./service/user.service";
import {UsersModule} from "./component/users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
