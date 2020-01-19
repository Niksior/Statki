import {Ship} from './ship';
import {ShipType} from '../_enums/ship-type.enum';

describe('Ship', () => {
  it('should create an instance', () => {
    expect(new Ship(0, ShipType.OneMast)).toBeTruthy();
  });
});
