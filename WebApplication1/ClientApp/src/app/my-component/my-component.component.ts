import { Component , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WeatherForecast } from '../lib/Lib'
@Component({
  selector: 'my-component-home',
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  public weather : WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.weather= result;
    }, error => console.error(error));
  }
}
