import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureLogService, TemperatureLog, DeletionMessage,
  TemperatureFormData } from '@app/temperature-log/services/temperature-log.service';

interface Statistics {
  average: number;
  lowest: number;
  highest: number;
  median: number;
}

@Component({
  selector: 'app-temperature-log',
  templateUrl: './temperature-log.component.html',
  styleUrls: ['./temperature-log.component.scss']
})
export class TemperatureLogComponent implements OnInit {
  public temperatureLogs: Array<TemperatureLog> = [];
  public registerForm: FormGroup;
  public submitted = false;
  public statistics: Statistics = {
    average: 0,
    lowest: 0,
    highest: 0,
    median: 0
  };

  constructor(private formBuilder: FormBuilder, private temperatureLogService: TemperatureLogService) { }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          temperature: ['', Validators.required],
      });
      this.getAllTemperatureLogs();
  }

  onSubmit() {
      if (this.registerForm.valid) {
        const formData: TemperatureFormData = this.registerForm.value;
        this.temperatureLogService.submitTemperatureData(formData).subscribe(() => {
          this.registerForm.reset(formData);
          this.submitted = true;
          this.getAllTemperatureLogs();
        });
      }
  }

  getAllTemperatureLogs() {
    this.temperatureLogService.getAllTemperatureData().subscribe((logs: Array<TemperatureLog>) => {
      this.temperatureLogs = logs;
      this.calculateStatistics();
    });
  }

  deleteTemperatureLog(log: TemperatureLog ) {
    this.temperatureLogService.deleteTemperatureData(log).subscribe((response: DeletionMessage) => {
      const removeIndex = this.temperatureLogs.map((item: TemperatureLog) => item.id ).indexOf(log.id);
      this.temperatureLogs.splice(removeIndex, 1);
      this.calculateStatistics();
    });
  }

  calculateStatistics() {
    const temperatures: number[] = this.temperatureLogs.map((log: TemperatureLog) => log.temperature);
    const totalTemperature: number = temperatures.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const median = (elements: number[]) => {
      const middle: number = Math.floor(elements.length / 2);
      const numbers: number[] = [...elements].sort((a, b) => a - b);
      return elements.length % 2 !== 0 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
    };
    this.statistics.lowest = Math.min(...temperatures);
    this.statistics.highest = Math.max(...temperatures);
    this.statistics.average = Math.round((totalTemperature / temperatures.length) * 100) / 100;
    this.statistics.median = median(temperatures);
  }
}
