import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {MasterComponent} from "./component/master/master.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {UserListComponent} from "./component/users/user-list/user-list.component";
import {UserAddComponent} from "./component/users/user-add/user-add.component";
import {UserEditComponent} from "./component/users/user-edit/user-edit.component";
import {AuthGuardGuard} from "./auth-guard.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./component/users/users.module').then(m => m.UsersModule)
      },

    ],
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
