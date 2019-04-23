import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

import { Weather } from '../interfaces/weather.interface'
import { WeatherSummary } from '../interfaces/weatherSummary.interface'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  temperatureAdded = new Subject<boolean>()
  constructor(private apiService: ApiService) { }

  getTemperatures(): Observable<Weather[]> {
    return this.apiService.get('/weather').pipe(map((resp: any) => resp as Weather[]))
  }

  removeTemperature(id: string): Observable<Weather> {
    return this.apiService.delete(`/weather/${id}`).pipe(map((resp: any) => resp as Weather))
  }

  addTemperature(temperature: number): Observable<Weather> {
    return this.apiService.post('/weather', { temperature }).pipe(map((resp: any) => resp as Weather))
  }

  weatheSummary(temperatures: Array<Weather>) {
    const summary = {} as WeatherSummary
    const temp = [...temperatures]
    if (!temp.length) {
      return summary
    }
    temp.sort((a, b) => a.temperature - b.temperature)
    summary.average = 0
    temp.forEach(el => {
      summary.average += el.temperature
    })

    summary.average /= temp.length
    summary.lowest = temp[0].temperature
    summary.highest = temp[temp.length - 1].temperature
    // Get Median
    const mid = Math.floor(temp.length / 2)
    if (temp.length % 2) {
      summary.median = temp[mid].temperature
    } else {
      summary.median = (temp[mid - 1].temperature + temp[mid].temperature) / 2.0
    }
    return summary
  }
}
