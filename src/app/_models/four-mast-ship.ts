import {Ship} from '../_interfaces/ship';
import {ShipType} from '../_enums/ship-type.enum';

export class FourMastShip implements Ship {

  id: number;
  shipType: ShipType;
  hp: number;

  constructor(id: number) {
    this.shipType = ShipType.OneMast;
    this.hp = ShipType.OneMast;
    this.id = id;
  }

  shoot() {
    this.hp -= 1;
  }


}
