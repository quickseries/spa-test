import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = '/api/temperature-logs';

export interface TemperatureLog {
  temperature: number;
  createdAt: string;
}

export interface DeletionMessage {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TemperatureLogService {

  constructor(private http: HttpClient) { }

  getAllTemperatureData(): Observable<Array<TemperatureLog>> {
    return this.http
    .get<Array<TemperatureLog>>(API_URL);
  }

  submitTemperatureData(temperature: number): Observable<TemperatureLog> {
    return this.http.post<TemperatureLog>(API_URL, { temperature });
  }

  deleteTemperatureData(id: number): Observable<DeletionMessage> {
    return this.http.delete<DeletionMessage>(`${API_URL}/${id}`);
  }
}
