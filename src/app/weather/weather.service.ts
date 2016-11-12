import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {

  private apiKey: string = environment.weatherApiKey;

  constructor(private http: Http) {
  }

  public getConditions(): Observable<any>  {

    const url: string = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/CA/San_Francisco.json';

    return this.http.get(url)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  public getHourlyForecast(): Observable<any> {
    const url: string = 'http://api.wunderground.com/api/'+this.apiKey+'/hourly/q/CA/San_Francisco.json';

    return this.http.get(url)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

}
