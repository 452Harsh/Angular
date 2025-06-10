import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;
  handleCount(val : string){
    if(val === 'increment') {
      this.count++;
    } else if(val === 'decrement' && this.count>0) {
      this.count--;
    }else if(val === 'reset') {
      this.count = 0;
    }
  }
}
