import {Ship} from '../_interfaces/ship';
import {ShipType} from '../_enums/ship-type.enum';

export class ThreeMastShip implements Ship {

  id: number;
  shipType: ShipType;
  hp: number;

  constructor(id: number) {
    this.shipType = ShipType.ThreeMast;
    this.hp = ShipType.ThreeMast;
    this.id = id;
  }

  shoot() {
    this.hp -= 1;
  }
}
