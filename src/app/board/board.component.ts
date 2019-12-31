import {Component} from '@angular/core';
import {Board} from '../_models/board';
import {Settings} from '../_models/settings';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Ship} from '../_interfaces/ship';
import {OneMastShip} from '../_models/one-mast-ship';
import {TwoMastShip} from '../_models/two-mast-ship';
import {ThreeMastShip} from '../_models/three-mast-ship';
import {FourMastShip} from '../_models/four-mast-ship';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: Ship[];
  board: Board;
  settings: Settings;

  constructor(private router: Router,
              private snackBar: MatSnackBar) {

    const settingData = localStorage.getItem('settingsData');
    this.settings = new Settings();
    this.ships = [];

    settingData ? this.settings.loadFromStorage(JSON.parse(settingData)) : this.router.navigate(['/']);
    this.board = new Board(this.settings);

    this.generateShips();

  }

  shoot(ship: Ship) {
    this.board.shoots++;
    if (ship == null) {
      this.board.missed++;
      this.snackBar.open('Missed');
      return;
    }

    ship.shoot();
    if (ship.shoots === ship.lifeNum) {
      this.snackBar.open('Zatopiony');
    } else if (ship.shoots < ship.lifeNum) {
      this.snackBar.open('Trafiony');
    }
  }

  private generateShips(): void {
    const numberOfOneMastShips = this.board.oneMastShips;
    for (let i = 0; i < numberOfOneMastShips; i++) {
      const ship = new OneMastShip(Math.floor(Math.random() * 100 % 100));
      this.ships.push(ship);
    }

    const numberOfTwoMastShips = this.board.twoMastShips;
    for (let i = 0; i < numberOfTwoMastShips; i++) {
      const ship = new TwoMastShip(Math.floor(Math.random() * 100 % 100));
      this.ships.push(ship);
    }

    const numberOfThreeMastShips = this.board.threeMastShips;
    for (let i = 0; i < numberOfThreeMastShips; i++) {
      const ship = new ThreeMastShip(Math.floor(Math.random() * 100 % 100));
      this.ships.push(ship);
    }

    const numberOfFourMastShips = this.board.fourMastShips;
    for (let i = 0; i < numberOfFourMastShips; i++) {
      const ship = new FourMastShip(Math.floor(Math.random() * 100 % 100));
      this.ships.push(ship);
    }
  }
}
