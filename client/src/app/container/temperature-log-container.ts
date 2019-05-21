import { Component} from '@angular/core';
import {TempLog} from '../components/temp-log';

@Component({
    selector: 'temperatureLog',
    templateUrl: './temperature-log-container.component.html'
  })
export class TemperatureLogContainer {
    temperatureLogs: TempLog[];
}
