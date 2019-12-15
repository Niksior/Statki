import {Component} from '@angular/core';
import {Ship} from "../_models/Ship";
import {Mapa} from "../_models/Mapa";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: Ship[];
  mapSize: number;
  map: Mapa | null;

  constructor() {
    let settingData = localStorage.getItem('settingsData');
    this.ships = [];
    this.mapSize = 10;

    if (settingData == null) {
      this.map = null;
      return;
    }

    let data = JSON.parse(settingData);
    console.log('data: ' + settingData);
    this.map = new Mapa(data);

    let oneMast = data.oneMastShips;
    let twoMast = data.twoMastShips;
    let threeMast = data.threeMastShips;
    let fourMast = data.fourMastShips;
    this.mapSize = data.size;

    for (let i = 0; i < oneMast; i++) {
      let ship = new Ship('1mast');
      this.ships.push(ship);
    }
    for (let i = 0; i < twoMast; i++) {
      let ship = new Ship('2mast');
      this.ships.push(ship);
    }
    for (let i = 0; i < threeMast; i++) {
      let ship = new Ship('3mast');
      this.ships.push(ship);
    }
    for (let i = 0; i < fourMast; i++) {
      let ship = new Ship('4mast');
      this.ships.push(ship);
    }
  }

  shoot(ship: Ship) {
    console.log('on click card' + JSON.stringify(ship));
    if (this.map != null) {
      this.map.shoots += 1;
      if (ship == null) {
        this.map.missed += 1;
        alert('pudło');

        return;
      }

      ship.shoot();
      if (ship.shoots == ship.getLifeNum) {
        alert('trafiony-zatopiony!');
      } else if (ship.shoots < ship.getLifeNum) {
        alert('trafiony!');
      }
    }
  }
}
