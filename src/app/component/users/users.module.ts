import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {MessageComponent} from "../share/message/message.component";
import {LoginComponent} from "../../pages/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardGuard} from "../../auth-guard.guard";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },

  ]

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    MessageComponent,

  ],
  exports: [
    MessageComponent
  ],
  imports: [
     RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class UsersModule { }
