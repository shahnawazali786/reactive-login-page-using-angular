import { Component } from '@angular/core';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';
  loginForms = new FormGroup
    ({
      users: new FormControl(''),
      password: new FormControl('')

    })
  loginUser() {
    console.warn(this.loginForms.value)
  }

}
