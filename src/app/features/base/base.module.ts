import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from 'src/app/features/base/reset-password/reset-password.component';
import { SendLinkEmailComponent } from 'src/app/features/base/send-link-email/send-link-email.component';
import { SignupComponent } from 'src/app/features/base/signup/signup.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    SendLinkEmailComponent
  ],
  exports: [
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    SendLinkEmailComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BaseModule { }
