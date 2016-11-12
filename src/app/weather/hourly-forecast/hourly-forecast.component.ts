import { Component, OnInit, Input } from '@angular/core';
import {HourlyForecast} from "./HourlyForecast";

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent implements OnInit {

  @Input() forecast: HourlyForecast;

  constructor() { }

  ngOnInit() {
  }

}
