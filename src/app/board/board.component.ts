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
import {Field} from '../_models/field';

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
    this.addShipsToBoard();
  }

  private static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  shoot(field: Field) {
    this.board.shoots++;
    if (!field.isShot) {
      field.isShot = true;
      if (!field.hasShip) {
        this.board.missed++;
        this.snackBar.open('Pudło');
        return;
      }


      for (const ship of this.ships) {
        if (ship.id === field.shipId) {
          ship.hp--;
          if (ship.hp === 0) {
            this.snackBar.open('Zatopiony');
          } else {
            this.snackBar.open('Trafiony');
          }
          return;
        }
      }
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

  private addShipsToBoard(): void {
    if (this.ships.length <= 0) {
      return;
    }
    for (const ship of this.ships) {
      let yPos = BoardComponent.getRandomInt(0, this.board.size) * this.board.size;
      let xPos = BoardComponent.getRandomInt(0, (this.board.size - ship.shipType));
      while (!this.checkIfFieldsAreFree(xPos, yPos, ship.shipType)) {
        yPos = BoardComponent.getRandomInt(0, this.board.size) * this.board.size;
        xPos = BoardComponent.getRandomInt(0, (this.board.size - ship.shipType));
      }
      this.placeShip(xPos, yPos, ship);
    }
  }

  private placeShip(xPos: number, yPos: number, ship: Ship): void {
    for (let i = 0; i < ship.shipType; i++) {
      this.board.fields[yPos + xPos + i].shipId = ship.id;
    }
  }

  private checkIfFieldsAreFree(x: number, y: number, length: number): boolean {
    for (let i = 0; i < length; i++) {
      if (this.board.fields[y + x].hasShip) {
        return false;
      }
    }
    return true;
  }

}
