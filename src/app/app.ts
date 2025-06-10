import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleEvent(event : Event) {
    // Handle the mouse event here
    console.log( event);
    console.log("value" , (event.target as HTMLInputElement).value);
  }
}
