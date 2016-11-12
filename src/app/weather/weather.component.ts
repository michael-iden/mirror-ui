import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  private conditions: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.conditions = this.weatherService.getConditions().subscribe((data) => {
        this.conditions = data;
        console.log(data);
      },
      (err) => {
        console.error('weather api returned an error');
      });
  }


}
