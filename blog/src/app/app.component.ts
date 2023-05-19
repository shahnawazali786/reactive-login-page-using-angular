import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Login Form  ';
  loginForms = new FormGroup
    ({
      users: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])

    })
  loginUser() {
    console.warn(this.loginForms.value)
  }


  get user() {
    return this.loginForms.get('user')
  }


  get password() {
    return this.loginForms.get('password')
  }



}
