import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
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
