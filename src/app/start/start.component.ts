import {Component} from '@angular/core';
import {Settings} from '../_models/Settings';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  setting: Settings | null;

  height: string;
  width: string;
  shipNum: string;
  shipNum2: string;
  shipNum3: string;
  shipNum4: string;
  autoDeployment: boolean;

  constructor() {
    this.setting = null;
    this.height = '';
    this.width = '';
    this.shipNum = '';
    this.shipNum2 = '';
    this.shipNum3 = '';
    this.shipNum4 = '';
    this.autoDeployment = false;
  }

  onClick() {
    const settings = new Settings();
    settings.height = parseInt((document.getElementById('height') as HTMLInputElement).value);
    settings.width = parseInt((document.getElementById('width') as HTMLInputElement).value);
    settings.oneMastShips = parseInt((document.getElementById('shipNum') as HTMLInputElement).value);
    settings.twoMastShips = parseInt((document.getElementById('shipNum2') as HTMLInputElement).value);
    settings.threeMastShips = parseInt((document.getElementById('shipNum3') as HTMLInputElement).value);
    settings.fourMastShips = parseInt((document.getElementById('shipNum4') as HTMLInputElement).value);
    settings.autoDeploy = (document.getElementById('autoDeployment') as HTMLInputElement).checked;
    settings.started = true;

    console.log('TEST: settings: ' + JSON.stringify(settings));
    this.setting = settings;

    // const map = new Map (settings);
    // console.log('TEST: settings: ' + JSON.stringify( map ));
  }

}
