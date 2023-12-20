import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ResetPasswordComponent } from 'src/app/features/base/reset-password/reset-password.component';
import { SignupComponent } from 'src/app/features/base/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'base/login',
    pathMatch: 'full'
  },
  {
    path: 'base/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'base/login',
    component: LoginComponent
  },
  {
    path: 'base/signup',
    component: SignupComponent
  },

  {
    path: 'base/reset',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
