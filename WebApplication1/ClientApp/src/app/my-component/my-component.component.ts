import { Component , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WeatherForecast } from '../lib/Lib'
import { WeatherServiceService } from '../lib/weather-service.service'
@Component({
  selector: 'my-component-home',
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  public weather : WeatherForecast[];
  service: WeatherServiceService;
  public current: WeatherForecast;
  constructor(service:WeatherServiceService)
  {
    this.service = service;
    this.getData();
  }

  public delete(datum: WeatherForecast) {
    if (datum === this.current)
    {
      this.current = null;
    }
    let i = this.weather.findIndex(item => { return item == datum });
    let begin = this.weather.slice(0, i);
    let end = this.weather.slice(i + 1, this.weather.length);
    this.weather = begin.concat(end);
  }

  public add() {
    let n: WeatherForecast =
    { dateFormatted: "1/1/2010",
      temperatureF: 1,
      temperatureC: -1,
      summary :"New"
    };
    this.weather.push(n);
  }

  public edit(datum: WeatherForecast) {
    this.current = datum;
  }
  public getData() {
    this.service.getData().subscribe(
      data => this.weather = data);
  }
}
