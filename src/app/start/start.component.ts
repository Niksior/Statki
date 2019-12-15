import {Component} from '@angular/core';
import {Settings} from '../_models/Settings';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  settingsForm = this.fb.group({
    size: [10, Validators.required],
    shipNum: [0],
    shipNum2: [0],
    shipNum3: [0],
    shipNum4: [0],
    autoDeployment: [false]
  });

  constructor(private fb: FormBuilder) {
    const settings = this.loadData();

  }

  onSubmit() {
    const settings = new Settings();
    settings.size = this.settingsForm.value.size;
    settings.oneMastShips = this.settingsForm.value.shipNum;
    settings.twoMastShips = this.settingsForm.value.shipNum2;
    settings.threeMastShips = this.settingsForm.value.shipNum3;
    settings.fourMastShips = this.settingsForm.value.shipNum4;
    settings.autoDeploy = this.settingsForm.value.autoDeployment;
    settings.started = true;
    localStorage.setItem('settingsData', JSON.stringify(settings));
  }

  private loadData() {
    const savedSettings = localStorage.getItem('settingsData');
    return savedSettings ? JSON.parse(savedSettings) : null;
  }

  private loadSettings(settings: Settings) {
    if (settings) {
      this.settingsForm.value.size = settings.size;
      this.settingsForm.value.shipNum = settings.oneMastShips;
      this.settingsForm.value.shipNum2 = settings.twoMastShips;
      this.settingsForm.value.shipNum3 = settings.threeMastShips;
      this.settingsForm.value.shipNum4 = settings.fourMastShips;
      this.settingsForm.value.autoDeployment = settings.autoDeploy;
    }

  }

}
