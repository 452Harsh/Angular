import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "";
  displayName = "";
  email = "";
  getname(event:Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
  showName() {
   this.displayName = this.name ;
  }
  setName() {
    this.name = "John Doe";
  }
  getEmail(val : string) {
    console.log(val);
    this.email = val;
  }
  setEmail() {
    this.email = "default";
  }
}
