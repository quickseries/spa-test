import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = '/api/temperature-logs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureLogService {

  constructor(private http: HttpClient) { }

  getAllTemperatureData() {
    return this.http
    .get(API_URL);
  }
}
