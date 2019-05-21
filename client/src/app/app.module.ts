import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {TemperatureLogContainer} from './container/temperature-log-container';
import { AppComponent } from './app.component';
import {TemperatureDataService} from './service/temperature-data-service.service'
@NgModule({
  declarations: [
    AppComponent,
    TemperatureLogContainer
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TemperatureDataService],
  bootstrap: [AppComponent,TemperatureLogContainer]
})
export class AppModule { }
