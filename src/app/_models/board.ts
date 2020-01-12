import {Settings} from './settings';
import {Field} from './field';

export class Board extends Settings {

  constructor(settings: Settings) {
    super();
    this._autoDeploy = settings.autoDeploy;
    this._oneMastShips = settings.oneMastShips;
    this._twoMastShips = settings.twoMastShips;
    this._threeMastShips = settings.threeMastShips;
    this._fourMastShips = settings.fourMastShips;
    this._size = settings.size;
    this._fields = [];
    this.generateFields();
  }

  // tslint:disable:variable-name

  private _fields: Field[];

  get fields(): Field[] {
    return this._fields;
  }

  set fields(value: Field[]) {
    this._fields = value;
  }

  private generateFields() {
    for (let row = 0; row < this._size; row++) {
      for (let column = 0; column < this._size; column++) {
        this._fields.push(new Field(column, row));
      }
    }
  }
}
