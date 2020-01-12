import {ShipType} from '../_enums/ship-type.enum';

export interface ShipInterface {
  shipType: ShipType;
  id: number;
  hitPoints: number;

  hit(): void;
}
