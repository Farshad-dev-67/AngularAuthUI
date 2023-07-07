import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CheckValidationForm from 'src/app/helpers/checkFormValidataion';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = 'password';
  eyeIcon: string = 'fa-eye-slash';
  isText: boolean = false;
  signupFrm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupFrm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  onSignup(){
    if (this.signupFrm.valid) {
      // valid form
    } else {
      // unvalid form
      CheckValidationForm.validationForm(this.signupFrm);
    }
  }
}
