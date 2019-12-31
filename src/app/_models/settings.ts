export class Settings {
  constructor() {
    this._size = 0;
    this._autoDeploy = false;
    this._oneMastShips = 0;
    this._twoMastShips = 0;
    this._threeMastShips = 0;
    this._fourMastShips = 0;
  }

  // tslint:disable:variable-name
  protected _size: number;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  protected _autoDeploy: boolean;

  get autoDeploy(): boolean {
    return this._autoDeploy;
  }

  set autoDeploy(value: boolean) {
    this._autoDeploy = value;
  }

  protected _oneMastShips: number;

  get oneMastShips(): number {
    return this._oneMastShips;
  }

  set oneMastShips(value: number) {
    this._oneMastShips = value;
  }

  protected _twoMastShips: number;

  get twoMastShips(): number {
    return this._twoMastShips;
  }

  set twoMastShips(value: number) {
    this._twoMastShips = value;
  }

  protected _threeMastShips: number;

  get threeMastShips(): number {
    return this._threeMastShips;
  }

  set threeMastShips(value: number) {
    this._threeMastShips = value;
  }

  protected _fourMastShips: number;

  get fourMastShips(): number {
    return this._fourMastShips;
  }

  set fourMastShips(value: number) {
    this._fourMastShips = value;
  }

  public loadFromStorage(data: any) {
    this._size = data._size;
    this._autoDeploy = data._autoDeploy;
    this._oneMastShips = data._oneMastShips;
    this._twoMastShips = data._twoMastShips;
    this._threeMastShips = data._threeMastShips;
    this._fourMastShips = data._fourMastShips;
  }
}
