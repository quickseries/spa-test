import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

import { Weather } from '../../interfaces/weather.interface'
import { WeatherService } from '../../services/weather.service'
import { WeatherSummary } from '../../interfaces/weatherSummary.interface'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.scss']
})
export class WeatherHistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  columnsToDisplay = ['date', 'temperature', 'delete']
  dataSource = new MatTableDataSource<Weather>()
  summary = {} as WeatherSummary
  private temperatureSubscription: Subscription

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.loadData()
    this.temperatureSubscription = this.weatherService.temperatureAdded.subscribe(res => {
      this.loadData()
    }
    )
  }

  ngOnDestroy() {
    if (this.temperatureSubscription) {
      this.temperatureSubscription.unsubscribe()
    }
  }

  loadData() {
    this.weatherService.getTemperatures().subscribe(res => {
      this.dataSource.data = res
      this.summary = this.weatherService.weatheSummary(res)
    }, err => {
      console.log('load temperature error', err)
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  delete(id: string) {
    this.weatherService.removeTemperature(id).subscribe(res => {
      console.log(id)
      this.loadData()
    }, err => {
      console.log('delete error', err)
    })
  }

}
