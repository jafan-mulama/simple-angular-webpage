import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log('Username:', this.user.username);
    console.log('Password:', this.user.password);
  }
}
