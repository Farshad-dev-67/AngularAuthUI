import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CheckValidationForm from 'src/app/helpers/checkFormValidataion';

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
  constructor(private fb: FormBuilder) {
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
  onLogin(){
    if (this.loginFrm.valid) {
      // valid form
    } else {
      // unvalid form
      CheckValidationForm.validationForm(this.loginFrm);
    }
  }
}
