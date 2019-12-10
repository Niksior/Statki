import {Component, OnInit} from '@angular/core';
import {Settings} from "./Settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Statki';
  setting : Settings;

  ngOnInit(): void {
    this.setting = new Settings();
  }
}
