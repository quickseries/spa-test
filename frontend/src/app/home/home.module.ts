import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureLogComponent } from './temperature-log/component/temperature-log.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, TemperatureLogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
