import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
data : WritableSignal<number | string> = signal(1);
count : Signal<number> = signal(0); // it value cannot be changed
counter = signal(0);
x= signal(10);
y = signal(20);
z = computed(() => this.x() + this.y()); // computed signal that depends on x and y
// computed signal that will update when x or y changes
constructor() {
  // Initialize the counter signal
  effect(() => {
    console.log('Counter value:', this.counter());
  });
}
updatevalue() {
  this.counter.update(value => value + 1);
  console.log(this.counter());
}
updateSignal() {
  this.data.set("hello"); // where as update signal will not work because it work only on single value
}
showValue() {
  console.log(this.z()); // This will log the sum of x and y
  this.y.set(80) ;  
  console.log(this.z()); // This will log the updated sum of x and y
}
}
