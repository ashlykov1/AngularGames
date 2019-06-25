import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './Lib';

@Injectable()
export class WeatherServiceService {

  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.baseUrl = 'https://localhost:5001/';
  }

  public createData(w: WeatherForecast) { }

  public save(w: WeatherForecast[]) {
    return this.http.post(this.baseUrl + 'api/SampleData/Save', w);
  }

  public deleteData(w: WeatherForecast) { }

  public getDataById(w: WeatherForecast) { }

  public getData() {
    return this.http.get<WeatherForecast[]>(this.baseUrl + 'api/SampleData/WeatherForecasts');
  }
}
