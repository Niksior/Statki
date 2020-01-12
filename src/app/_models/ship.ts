import {ShipInterface} from '../_interfaces/ship-interface';
import {ShipType} from '../_enums/ship-type.enum';

export class Ship implements ShipInterface {


  id: number;
  shipType: ShipType;
  hitPoints: number;

  constructor(id: number, type: ShipType) {
    this.shipType = type;
    this.hitPoints = type;
    this.id = id;
  }

  hit(): void {
    this.hitPoints > 0 ? this.hitPoints-- : this.hitPoints = 0;
  }

}
