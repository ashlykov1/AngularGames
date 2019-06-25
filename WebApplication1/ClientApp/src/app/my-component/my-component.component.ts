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
  constructor(service:WeatherServiceService)
  {
    this.service = service;
    this.getData();
  }

  public getData() {
    this.service.getData().subscribe(
      data => this.weather = data);
  }

}
