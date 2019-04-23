import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup
  isLoading = false
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm = new FormGroup({
      temperature: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }

  onSubmit() {
    if (!this.weatherForm.valid) {
      return
    }
    this.isLoading = true
    this.weatherService.addTemperature(this.weatherForm.value.temperature).subscribe(res => {
      console.log('added', res)
      this.isLoading = false
      this.weatherForm.setValue({ temperature: 0 })

      this.weatherService.temperatureAdded.next(true)
    }, err => {
      this.isLoading = false
      console.log('add temperature error', err)
    })
  }

}
