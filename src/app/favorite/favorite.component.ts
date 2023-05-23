import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('pink') pink?: boolean;
  @Output()change = new EventEmitter();

  constructor(){}

  onClick(){
    this.pink = !this.pink;
    this.change.emit();
  }

}
