import {Component} from '@angular/core';
import {Settings} from '../_models/Settings';
import {Map} from '../_models/Map';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  setting: Settings | null;

  settingsForm = this.fb.group({
    size: [10, Validators.required],
    shipNum: [0],
    shipNum2: [0],
    shipNum3: [0],
    shipNum4: [0],
    autoDeployment: [false]
  });

  height: string;
  shipNum: string;
  shipNum2: string;
  shipNum3: string;
  shipNum4: string;
  autoDeployment: boolean;

  constructor(private fb: FormBuilder) {
    this.setting = null;
    this.height = '';
    this.shipNum = '';
    this.shipNum2 = '';
    this.shipNum3 = '';
    this.shipNum4 = '';
    this.autoDeployment = false;
  }

  onClick() {
    console.log(this.height);
    const settings = new Settings();
    settings.height = Number(this.height);
    settings.oneMastShips = +this.shipNum;
    settings.twoMastShips = +this.shipNum2;
    settings.threeMastShips = +this.shipNum3;
    settings.fourMastShips = +this.shipNum4;
    settings.autoDeploy = this.autoDeployment;
    settings.started = true;

    console.log('TEST: settings: ' + JSON.stringify(settings));
    this.setting = settings;

    const map = new Map(settings);
    console.log('TEST: settings: ' + JSON.stringify(map));
    localStorage.setItem('settingsData', JSON.stringify(this.setting));
    console.log('local storage: ' + localStorage.getItem('settingsData'));
  }

}
