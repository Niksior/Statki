import {Component} from '@angular/core';
import {Settings} from '../_models/Settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  title = 'Statki';
  setting: Settings;

  constructor() {
    this.setting = new Settings();
  }

}
