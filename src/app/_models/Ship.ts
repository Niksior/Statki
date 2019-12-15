export class Ship {
  constructor(type: string) {
    this._type = type;
    if (type === '4mast') {
      this._lifeNum = 4;
    } else if (type === '3mast') {
      this._lifeNum = 3;
    } else if (type === '2mast') {
      this._lifeNum = 2;

    } else {
      this._lifeNum = 1;
    }
    this._id = Math.random();
    this._shoots = 0;
  }

  // tslint:disable:variable-name
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _lifeNum: number;

  get lifeNum(): number {
    return this._lifeNum;
  }

  set lifeNum(value: number) {
    this._lifeNum = value;
  }

  private _shoots: number;

  get shoots(): number {
    return this._shoots;
  }

  set shoots(value: number) {
    this._shoots = value;
  }

  public shoot() {
    this._shoots = this._shoots + 1;
  }


}
