import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode= '';
  title = 'Courses';
  post = {
    pink: true
  }
  pinkChanged(){
    console.log('pink is clicked')
  }
}
