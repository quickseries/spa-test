import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TemperatureLogContainer} from './container/temperature-log-container';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureLogContainer
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,TemperatureLogContainer]
})
export class AppModule { }
