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
    this._shoots = 0;
    this._missed = 0;
    this._liveShips = this._oneMastShips + this._twoMastShips + this._threeMastShips + this._fourMastShips;
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

  private _shoots: number;

  get shoots(): number {
    return this._shoots;
  }

  set shoots(value: number) {
    this._shoots = value;
  }

  private _missed: number;

  get missed(): number {
    return this._missed;
  }

  set missed(value: number) {
    this._missed = value;
  }

  private _liveShips: number;

  get liveShips(): number {
    return this._liveShips;
  }

  set liveShips(value: number) {
    this._liveShips = value;
  }

  private generateFields() {
    for (let i = 0; i < this._size; i++) {
      for (let j = 0; j < this._size; j++) {
        const field = new Field(j, i);
        this._fields.push(field);
      }
    }
  }
}
