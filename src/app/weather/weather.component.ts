import { Component, OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";
import { HourlyForecast } from "./hourly-forecast/HourlyForecast";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  // private conditions: any;
  public hourlyForecasts: HourlyForecast[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  public getHourlyForecast() {
    this.weatherService.getHourlyForecast().subscribe((data) => {
      this.hourlyForecasts = data.hourly_forecast.map(function (forecast) {
        const hourlyForecast: HourlyForecast = { time: forecast.FCTTIME.civil, temperature: forecast.temp.english};
        return hourlyForecast;
      });

    }, (err) => {
      console.error('weather api returned an error');
    });
  }


}
