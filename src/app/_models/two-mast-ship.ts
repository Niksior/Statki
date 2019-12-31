import {Ship} from '../_interfaces/ship';
import {ShipType} from '../_enums/ship-type.enum';

export class TwoMastShip implements Ship {

  id: number;
  shipType: ShipType;
  hp: number;

  constructor(id: number) {
    this.shipType = ShipType.TwoMast;
    this.hp = ShipType.TwoMast;
    this.id = id;
  }

  hit(): void {
    this.hp > 0 ? this.hp-- : this.hp = 0;
  }

}
