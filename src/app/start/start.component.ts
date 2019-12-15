import {Component} from '@angular/core';
import {Settings} from '../_models/Settings';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  settingsForm = this.fb.group({
    size: [null, Validators.required],
    shipNum: [null],
    shipNum2: [null],
    shipNum3: [null],
    shipNum4: [null],
    autoDeployment: [false]
  });

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router) {
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
    this.snackBar.open('Everything saved, redirecting...');
    this.router.navigate(['/board']);
  }

  private loadData() {
    const savedSettings = localStorage.getItem('settingsData');
    return savedSettings ? JSON.parse(savedSettings) : null;
  }

}
