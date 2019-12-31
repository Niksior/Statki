export class Field {


  constructor(x: number, y: number) {
    this._shipId = null;
    this._x = x;
    this._y = y;
    this._isShot = false;
    this._hasShip = false;
  }

// tslint:disable:variable-name
  private _shipId: number | null;

  get shipId(): number | null {
    return this._shipId;
  }

  set shipId(value: number | null) {
    this._shipId = value;
    this._hasShip = (this._shipId !== null);
  }

  private _x: number;

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  private _y: number;

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  private _isShot: boolean;

  get isShot(): boolean {
    return this._isShot;
  }

  set isShot(value: boolean) {
    this._isShot = value;
  }

  private _hasShip: boolean;

  get hasShip(): boolean {
    return this._hasShip;
  }

  set hasShip(value: boolean) {
    this._hasShip = value;
  }
}
