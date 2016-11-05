import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import { environment } from "../../environments/environment";
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  private apiKey: string = environment.weatherApiKey;

  constructor(private http: Http) {
  }

  public getConditions()  {
    this.http.get('http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/CA/San_Francisco.json').map(this.extractData).catch(this.handleError);;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
