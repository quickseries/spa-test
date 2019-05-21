import { Component,OnInit} from '@angular/core';
import {TemperatureDataService} from '../service/temperature-data-service.service'
import {TempLog} from '../components/temp-log';
import * as _ from 'lodash';

const errorMessage = {
    "NaN":"Please enter only numbers"
}

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
    this.temperatureLogs =[];
    this._tempDataService
        .getTempData()
        .subscribe(temperatureData=>{
          this.temperatureLogs = temperatureData
          this.setStats()
        })
  }

  setStats(){
    let result = []
    _.each(this.temperatureLogs,(temperature)=>{
      result.push(temperature.temperature)
   })
   this.highest = (result.length!=0)?_.max(result):0
   this.lowest = (result.length!=0)?_.min(result):0
   this.average = (result.length!=0)? (_.sum(result) /result.length ):0

   const mid = Math.floor(result.length / 2),
   nums = [...result].sort((a, b) => a - b);
   this.median= result.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  addTemperature(event,temperatureText){
    if(isNaN(temperatureText.value)
      || temperatureText.value === null
      || temperatureText.value.replace(/\s/g,'') === "") window.alert(errorMessage.NaN);
  }
}
