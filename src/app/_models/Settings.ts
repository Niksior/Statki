export class Settings {
  constructor() {
    this._size = 0;
    this._autoDeploy = false;
    this._oneMastShips = 0;
    this._twoMastShips = 0;
    this._threeMastShips = 0;
    this._fourMastShips = 0;
    this._started = false;
  }

  // tslint:disable:variable-name
  private _size: number;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  private _autoDeploy: boolean;

  get autoDeploy(): boolean {
    return this._autoDeploy;
  }

  set autoDeploy(value: boolean) {
    this._autoDeploy = value;
  }

  private _oneMastShips: number;

  get oneMastShips(): number {
    return this._oneMastShips;
  }

  set oneMastShips(value: number) {
    this._oneMastShips = value;
  }

  private _twoMastShips: number;

  get twoMastShips(): number {
    return this._twoMastShips;
  }

  set twoMastShips(value: number) {
    this._twoMastShips = value;
  }

  private _threeMastShips: number;

  get threeMastShips(): number {
    return this._threeMastShips;
  }

  set threeMastShips(value: number) {
    this._threeMastShips = value;
  }

  private _fourMastShips: number;

  get fourMastShips(): number {
    return this._fourMastShips;
  }

  set fourMastShips(value: number) {
    this._fourMastShips = value;
  }

  private _started: boolean;

  get started(): boolean {
    return this._started;
  }

  set started(value: boolean) {
    this._started = value;
  }

  public loadFromStorage(data: any) {
    this._size = data._size;
    this._autoDeploy = data._autoDeploy;
    this._oneMastShips = data._oneMastShips;
    this._twoMastShips = data._twoMastShips;
    this._threeMastShips = data._threeMastShips;
    this._fourMastShips = data._fourMastShips;
    this._started = data._started;
  }
}
