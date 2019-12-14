import {Component} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: string[];

  constructor() {
    this.ships = [];
    for (let i = 0; i < 100; i++) {
      this.ships.push('a');
    }
  }


}
