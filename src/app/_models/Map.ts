import {Settings} from './Settings';

export class Map {
  constructor(settings: Settings) {
    this._height = settings.height;
    this._width = settings.width;
    this._oneMastShips = settings.oneMastShips;
    this._twoMastShips = settings.twoMastShips;
    this._threeMastShips = settings.threeMastShips;
    this._fourMastShips = settings.fourMastShips;
    this._manualDeployment = settings.autoDeploy;
    this._shoots = 0;
    this._missed = 0;
    this._liveShips = 0;
    this._maxShipNum = 0;
  }

  // tslint:disable:variable-name
  private _height: number;

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  private _width: number;

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  private _maxShipNum: number;

  get maxShipNum(): number {
    return this._maxShipNum;
  }

  set maxShipNum(value: number) {
    this._maxShipNum = value;
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

  private _manualDeployment: boolean;

  get manualDeployment(): boolean {
    return this._manualDeployment;
  }

  set manualDeployment(value: boolean) {
    this._manualDeployment = value;
  }

  countMaxShipNum() {
    this._maxShipNum = (this._height * this._width) - (this._oneMastShips * 8 - this._twoMastShips * 10 - this._threeMastShips * 12 - this._fourMastShips * 14);
  }
}
