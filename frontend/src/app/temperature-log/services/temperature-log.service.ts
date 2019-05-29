import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = '/api';

export interface TemperatureLog {
  id: number;
  temperature: number;
  createdAt: string;
}

export interface DeletionMessage {
  message: string;
}

export interface TemperatureFormData {
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class TemperatureLogService {

  constructor(private http: HttpClient) { }

  getAllTemperatureData(): Observable<Array<TemperatureLog>> {
    return this.http
    .get<Array<TemperatureLog>>(`${API_URL}/temperature-logs`);
  }

  submitTemperatureData(formData: TemperatureFormData): Observable<TemperatureLog> {
    return this.http.post<TemperatureLog>(`${API_URL}/temperature-log`, formData);
  }

  deleteTemperatureData(log: TemperatureLog): Observable<DeletionMessage> {
    return this.http.delete<DeletionMessage>(`${API_URL}/temperature-log/${log.id}`);
  }
}
