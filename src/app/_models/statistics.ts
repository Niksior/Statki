export class Statistics {

  constructor() {
    this._fired = 0;
    this._missed = 0;
    this._hits = 0;
  }

  // tslint:disable:variable-name
  private _fired: number;

  get fired(): number {
    return this._fired;
  }

  set fired(value: number) {
    this._fired = value;
  }

  private _missed: number;

  get missed(): number {
    return this._missed;
  }

  set missed(value: number) {
    this._missed = value;
  }

  private _hits: number;

  get hits(): number {
    return this._hits;
  }

  set hits(value: number) {
    this._hits = value;
  }
}
