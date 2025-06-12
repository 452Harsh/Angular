import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  display = true;
  toggle = true;
  hide(){
    this.display = !this.display;
  }
  twotoggle(){
    this.toggle = !this.toggle;
  }
}
