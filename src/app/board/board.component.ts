import {Component} from '@angular/core';
import {Board} from '../_models/board';
import {Settings} from '../_models/settings';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ShipInterface} from '../_interfaces/ship-interface';
import {Ship} from '../_models/ship';
import {Field} from '../_models/field';
import {Statistics} from '../_models/statistics';
import {ShipType} from '../_enums/ship-type.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  ships: ShipInterface[];
  board: Board;
  settings: Settings;
  stats: Statistics;

  constructor(private router: Router,
              private snackBar: MatSnackBar) {

    const settingData = localStorage.getItem('settingsData');
    this.settings = new Settings();
    this.ships = [];
    this.stats = new Statistics();

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
    this.stats.fired++;
    if (!field.isShot) {
      field.isShot = true;
      if (!field.hasShip) {
        this.stats.missed++;
        this.snackBar.open('Pudło');
        return;
      }

      for (const ship of this.ships) {
        if (ship.id === field.shipId) {
          ship.hitPoints--;
          if (ship.hitPoints === 0) {
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
    const numberOfShips = 0;
    const selectedType = 0;
    // tslint:disable-next-line:forin
    for (const type in ShipType) {
      switch (type) {
        case ShipType.OneMast.toString():
          this.addShips(this.board.oneMastShips, +type);
          break;
        case ShipType.TwoMast.toString():
          this.addShips(this.board.twoMastShips, +type);
          break;
        case ShipType.ThreeMast.toString():
          this.addShips(this.board.threeMastShips, +type);
          break;
        case ShipType.FourMast.toString():
          this.addShips(this.board.fourMastShips, +type);
          break;
      }
    }
  }

  private addShips(numberOfShips: number, type: ShipType) {
    for (let i = 0; i < numberOfShips; i++) {
      const ship = new Ship(Math.floor(Math.random() * 100 % 100), type);
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

  private placeShip(xPos: number, yPos: number, ship: ShipInterface): void {
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
