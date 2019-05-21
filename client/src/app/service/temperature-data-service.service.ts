import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { environment } from '../../environments/environment';

import { map } from "rxjs/operators";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TemperatureDataService {

  constructor(private _http:Http) { }

  getTempData(){
    return this._http
    .get(API_URL + '/api/log/all')
    .pipe(map(res => res.json()));
  }

  saveTemperatureLog(newTemperature){
    const headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.post(API_URL + '/api/log/temperature',newTemperature,{headers:headers})
               .pipe(map(res => res.json()));
   }

}
