import { Component, OnInit } from '@angular/core';
import {Settings} from "../Settings";
import {parse} from "ts-node";
import {Map} from "../Map";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent  {
  setting : Settings;

  constructor() { }

  onClick ()
  {
    let settings = new Settings();
    settings.height =  parseInt((<HTMLInputElement>document.getElementById("height")).value);
    settings.width =  parseInt((<HTMLInputElement>document.getElementById("width")).value);
    settings.oneMastShips =  parseInt((<HTMLInputElement>document.getElementById("shipNum")).value);
    settings.twoMastShips =  parseInt((<HTMLInputElement>document.getElementById("shipNum2")).value);
    settings.threeMastShips =  parseInt((<HTMLInputElement>document.getElementById("shipNum3")).value);
    settings.fourMastShips =  parseInt((<HTMLInputElement>document.getElementById("shipNum4")).value);
    settings.autoDeploy = (<HTMLInputElement> document.getElementById("autoDeployment")).checked;
    settings.started = true;

    console.log("TEST: settings: " + JSON.stringify( settings ));
    this.setting = settings;

    let map = new Map (settings);
    console.log("TEST: settings: " + JSON.stringify( map ));
  }

}
