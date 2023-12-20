import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import CheckValidationForm from 'src/app/helpers/checkFormValidataion';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { SendLinkEmailComponent } from '../send-link-email/send-link-email.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  type: string = 'password';
  eyeIcon: string = 'fa-eye-slash';
  isText: boolean = false;
  loginFrm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private toast: NgToastService,
    private dialog: MatDialog,
    private userStore: UserStoreService,
    private router: Router) {
    this.loginFrm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  onLogin() {
    if (this.loginFrm.valid) {
      this.authService.login(this.loginFrm.value).subscribe((res: any) => {
        this.authService.setToken(res.token);
        const payload = this.authService.decodedToken();
        this.userStore.setFullNameFromStore(payload.unique_name);
        this.userStore.setRoleFromStore(payload.role);
        this.toast.success({ detail: "SUCCESS", summary: 'Your Success Message', duration: 5000, position: 'topRight' });
        this.router.navigate(['base/dashboard']);
      },
        (err: any) => {
          alert(err?.error?.message);
        }
      )
    } else {
      // unvalid form
      CheckValidationForm.validationForm(this.loginFrm);
    }
  }

  forgetPassword() {
    const dialog = this.dialog.open(SendLinkEmailComponent);
  }
  goToSignup(){
    this.router.navigate(['base/signup']);
  }
}