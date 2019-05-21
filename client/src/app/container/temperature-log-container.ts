import { Component,OnInit} from '@angular/core';
import {TemperatureDataService} from '../service/temperature-data-service.service'
import {TempLog} from '../components/temp-log';

@Component({
    selector: 'temperatureLog',
    templateUrl: './temperature-log-container.component.html'
  })
export class TemperatureLogContainer implements OnInit  {
    temperatureLogs: TempLog[];

    average: number;
    lowest: number;
    highest:number;
    median: number;

  constructor(private _tempDataService: TemperatureDataService){
  }

  ngOnInit(){
      console.log(`ngOnInit called`)
  }
}
