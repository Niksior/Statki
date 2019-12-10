export class Settings {
  constructor() {
    this._width = 0;
    this._height = 0;
    this._autoDeploy = false;
    this._oneMastShips = 0;
    this._twoMastShips = 0;
    this._threeMastShips = 0;
    this._fourMastShips = 0;
    this._started = false;
  }

  // tslint:disable:variable-name
  private _width: number;

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  private _height: number;

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
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
}
