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

  public getConditions() : Observable<any>  {

    console.log('http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/CA/San_Francisco.json');

    return this.http.get('http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/CA/San_Francisco.json')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) : Observable<any> {
    console.log(error); // log this somewhere and format the message well for devs
    return Observable.throw(error); // our opportunity customize this error
  }

}
