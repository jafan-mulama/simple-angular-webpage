import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Perform form submission or further actions here
      console.log(this.form.value);
    } else {
      // Handle form validation errors
      // You can display validation errors to the user or perform any other required actions
      console.log('Form is invalid');
    }
  }
}
