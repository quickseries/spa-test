import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Statistics } from '@app/home/temperature-log/interfaces/statistics';
import { TemperatureLog } from '@app/home/temperature-log/interfaces/temperature-log';
import { TemperatureLogService } from '@app/home/temperature-log/services/temperature-log.service';
import { TemperatureFormData } from '@app/home/temperature-log/interfaces/temperature-form-data';
import { DeletionMessage } from '@app/home/temperature-log/interfaces/deletion-message';

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

  constructor(
    private formBuilder: FormBuilder,
    private temperatureLogService: TemperatureLogService,
    private toastr: ToastrManager) {

  }

  /**
   * Getter for form controls.
   */
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          temperature: ['', Validators.required],
      });
      this.getAllTemperatureLogs();
  }

  /**
   * Function called on submit.
   */
  onSubmit() {
      if (this.registerForm.valid) {
        const formData: TemperatureFormData = this.registerForm.value;
        this.temperatureLogService.submitTemperatureData(formData).subscribe((log: TemperatureLog) => {
          this.toastr.successToastr('Temperature added successfully!');
          this.submitted = true;
          this.temperatureLogs.push(log);
          this.calculateStatistics();
        });
      }
  }

  /**
   * Function to get all temperature logs.
   */
  getAllTemperatureLogs() {
    this.temperatureLogService.getAllTemperatureData().subscribe((logs: Array<TemperatureLog>) => {
      this.temperatureLogs = logs;
      this.calculateStatistics();
    });
  }

  /**
   * Function to delete temperature log.
   * @param log [TemperatureLog] param
   */
  deleteTemperatureLog(log: TemperatureLog ) {
    this.temperatureLogService.deleteTemperatureData(log).subscribe((response: DeletionMessage) => {
      this.toastr.successToastr(response.message);
      const removeIndex = this.temperatureLogs.map((item: TemperatureLog) => item.id ).indexOf(log.id);
      this.temperatureLogs.splice(removeIndex, 1);
      this.calculateStatistics();
    }, (error: DeletionMessage) => {
      this.toastr.errorToastr(error.message);
    });
  }

  /**
   * Function to calculate the statistics
   */
  calculateStatistics() {
    const temperatures: number[] = this.temperatureLogs.map((log: TemperatureLog) => log.temperature);

    const totalTemperature: number = temperatures.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const median = (elements: number[]) => {
      const middle: number = Math.floor(elements.length / 2);
      const numbers: number[] = [...elements].sort((a, b) => a - b);
      const result: number = elements.length % 2 !== 0 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
      return isNaN(Math.round(result * 100) / 100) ? 0 : Math.round(result * 100) / 100;
    };

    const lowest = Math.min(...temperatures);
    this.statistics.lowest = isFinite(lowest) ? lowest : 0;

    const highest = Math.max(...temperatures);
    this.statistics.highest = isFinite(highest) ? highest : 0;

    const average = Math.round((totalTemperature / temperatures.length) * 100) / 100;
    this.statistics.average = isNaN(average) ? 0 : average ;

    this.statistics.median = median(temperatures);
  }
}
