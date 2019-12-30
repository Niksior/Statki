import {ShipType} from '../_enums/ship-type.enum';

export interface Ship {
  shipType: ShipType;
  id: number;
  hp: number;
}
