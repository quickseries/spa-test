import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperatureLogService } from '../service/temperature-log.service';

@Component({
  selector: 'app-temperature-log',
  templateUrl: './temperature-log.component.html',
  styleUrls: ['./temperature-log.component.scss']
})
export class TemperatureLogComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private temperatureLogService: TemperatureLogService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          temperature: ['', Validators.required],
      });
      this.temperatureLogService.getAllTemperatureData().subscribe((data) => {
        console.log(data);
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // If form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
