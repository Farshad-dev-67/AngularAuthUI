import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ConfirmPasswordValidator } from 'src/app/helpers/confirm-password.validator';
import { ResetPassword } from 'src/app/models/reset-password.model';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword();
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private resetPasswordService: ResetPasswordService,
    private router: Router,
    private toast: NgToastService) {
      this.resetPassForm = this.formBuilder.group({
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required]
      });
      this.resetPassForm.setValidators(ConfirmPasswordValidator('password','confirmPassword'));  
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.emailToReset = param['email'];
      this.emailToken = param['code'].replace(/ /g, '+');
    })
  }
  resetPassword() {
    this.resetPasswordObj.newPassword = this.resetPassForm.value.password;
    this.resetPasswordObj.confirmPassword = this.resetPassForm.value.confirmPassword;
    this.resetPasswordObj.email = this.emailToReset;
    this.resetPasswordObj.emailToken = this.emailToken;
    this.resetPasswordService.resetPassword(this.resetPasswordObj)
    .subscribe({
      next: () => {
        this.toast.success({ detail: "SUCCESS", summary: 'Reset Password Successfully!!', duration: 3000, position: 'topRight' });
        this.router.navigate(['/']);
      },
      error: () => {
        this.toast.error({ detail: "Error", summary: 'Reset Password Error!!', duration: 3000, position: 'topRight' });
      }
    })
  }
}
