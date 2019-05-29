import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemperatureLog } from '@app/home/temperature-log/interfaces/temperature-log';
import { TemperatureFormData } from '@app/home/temperature-log/interfaces/temperature-form-data';
import { DeletionMessage } from '@app/home/temperature-log/interfaces/deletion-message';

@Injectable({
  providedIn: 'root'
})
export class TemperatureLogService {

  constructor(private http: HttpClient) { }

  getAllTemperatureData(): Observable<Array<TemperatureLog>> {
    return this.http
    .get<Array<TemperatureLog>>('temperature-logs');
  }

  submitTemperatureData(formData: TemperatureFormData): Observable<TemperatureLog> {
    return this.http.post<TemperatureLog>('temperature-log', formData);
  }

  deleteTemperatureData(log: TemperatureLog): Observable<DeletionMessage> {
    return this.http.delete<DeletionMessage>(`temperature-log/${log.id}`);
  }
}
