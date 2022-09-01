import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email =  new UntypedFormControl('', [Validators.required, Validators.email]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);

  showAlert = false;
  alertMsg = 'Please wait! we log you into your accont!'
  alertColor = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new UntypedFormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    this.alertColor = 'green';
    this.alertMsg = 'logged in'
    this.showAlert = true;
  }

}
