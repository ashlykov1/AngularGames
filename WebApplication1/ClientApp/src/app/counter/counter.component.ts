import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    if (this.currentCount < 2) {
      this.currentCount++;
    }
    else {
      this.currentCount = this.currentCount * this.currentCount;
    };
  }
}
