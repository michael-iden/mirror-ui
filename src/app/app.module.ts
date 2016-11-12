import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from "./weather/weather.service";
import { HourlyForecastComponent } from './weather/hourly-forecast/hourly-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HourlyForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
