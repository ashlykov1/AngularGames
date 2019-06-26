import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecast} from '../lib/Lib'
@Component({
  selector: 'app-currentforcast',
  templateUrl: './currentforcast.component.html',
  styleUrls: ['./currentforcast.component.css']
})
export class CurrentforcastComponent implements OnInit {

  @Input() current: WeatherForecast

  constructor() { }

  ngOnInit() {
  }

}
