import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureLogService, TemperatureLog } from '@app/temperature-log/services/temperature-log.service';

@Component({
  selector: 'app-temperature-log',
  templateUrl: './temperature-log.component.html',
  styleUrls: ['./temperature-log.component.scss']
})
export class TemperatureLogComponent implements OnInit {
  public temperatureLogs: Array<TemperatureLog>;
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private temperatureLogService: TemperatureLogService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          temperature: ['', Validators.required],
      });
      this.temperatureLogService.getAllTemperatureData().subscribe((logs: Array<TemperatureLog>) => {
        this.temperatureLogs = logs;
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // If form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

}
