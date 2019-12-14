import {Component} from '@angular/core';
import {Ship} from "../_models/Ship";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: Ship[];
  mapSize : number;

  constructor() {
    var settingData = localStorage.getItem('settingsData');
    var data;
    this.ships = [];
    this.mapSize = 10;

    if (settingData != null) {
      data = JSON.parse(settingData);
      console.log('data: ' + settingData);

      var oneMast = data.oneMastShips;
      var twoMast = data.twoMastShips;
      var threeMast = data.threeMastShips;
      var fourMast = data.fourMastShips;
      this.mapSize = data.height;

      for (let i = 0; i < oneMast; i++) {
        var ship = new Ship('1mast');
        this.ships.push(ship);
      }
      for (let i = 0; i < twoMast; i++) {
        var ship = new Ship('2mast');
        this.ships.push(ship);
      }
      for (let i = 0; i < threeMast; i++) {
        var ship = new Ship('3mast');
        this.ships.push(ship);
      }
      for (let i = 0; i < fourMast; i++) {
        var ship = new Ship('4mast');
        this.ships.push(ship);
      }
    }
  }

  shoot(ship: Ship) {
    console.log('on click card' + JSON.stringify(ship));
    ship.shoot();
    if (ship.shoots == ship.getLifeNum) {
      alert('trafiony-zatopiony!');
    } else if (ship.shoots < ship.getLifeNum) {
      alert('trafiony!');
    }

  }

}
