import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { UserlistComponent } from './main/userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate : [AuthGuard],
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'userList',
    component: LayoutComponent,
    canActivate : [AuthGuard],
    children: [
      { path: '', component: UserlistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
