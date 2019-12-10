import set = Reflect.set;
import {Settings} from "./Settings"; - Settings

export class Map {
  height: number;
  width: number;
  maxShipNum: number;
  oneMastShips: number;
  twoMastShips: number;
  threeMastShips: number;
  fourMastShips: number;
  shoots: number;
  missed: number;
  liveShips: number;
  manualDeployment: boolean;

  constructor( Settings ) {
    this.height = Settings.height;
    this.width = Settings.width;
    this.oneMastShips = Settings.oneMastShips;
    this.twoMastShips = Settings.twoMastShips;
    this.threeMastShips = Settings.threeMastShips;
    this.fourMastShips = Settings.fourMastShips;
    this.manualDeployment = Settings.autoDeploy
  };

  countMaxShipNum() {
    this.maxShipNum = (this.height * this.width) - (this.oneMastShips * 8 - this.twoMastShips * 10 - this.threeMastShips * 12 - this.fourMastShips * 14);
  }
}
