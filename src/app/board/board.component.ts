import {Component} from '@angular/core';
import {Board} from '../_models/board';
import {Settings} from '../_models/settings';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Ship} from '../_interfaces/ship';
import {ShipType} from "../_enums/ship-type.enum";
import {ThreeMastShip} from "../_models/three-mast-ship";
import {FourMastShip} from "../_models/four-mast-ship";
import {TwoMastShip} from "../_models/two-mast-ship";
import {OneMastShip} from "../_models/one-mast-ship";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: Ship[];
  map: Board | null;
  settings: Settings;

  constructor(private router: Router,
              private snackBar: MatSnackBar) {
    const settingData = localStorage.getItem('settingsData');
    this.settings = new Settings();
    this.ships = [];

    settingData ? this.settings.loadFromStorage(JSON.parse(settingData)) : this.router.navigate(['/']);
    this.map = new Board(this.settings);

    const oneMast = this.map.oneMastShips;
    for (let i = 0; i < oneMast; i++) {
      const ship = new OneMastShip(ShipType.OneMast);
      this.ships.push(ship);
    }

    const twoMast = this.map.twoMastShips;
    for (let i = 0; i < twoMast; i++) {
      const ship = new TwoMastShip(ShipType.TwoMast);
      this.ships.push(ship);
    }

    const threeMast = this.map.threeMastShips;
    for (let i = 0; i < threeMast; i++) {
      const ship = new ThreeMastShip(ShipType.ThreeMast);
      this.ships.push(ship);
    }

    const fourMast = this.map.fourMastShips;
    for (let i = 0; i < fourMast; i++) {
      const ship = new FourMastShip(ShipType.FourMast);
      this.ships.push(ship);
    }
  }

  shoot(ship: Ship) {
    console.log('on click card' + JSON.stringify(ship));
    if (this.map != null) {
      this.map.shoots += 1;
      if (ship == null) {
        this.map.missed += 1;
        this.snackBar.open('Ups');
        return;
      }

      ship.shoot();
      if (ship.hp == 0) {
        this.snackBar.open('Zatopiony');
      } else if (ship.hp > 0) {
        this.snackBar.open('Trafiony');
      }
    }
  }
}
