import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink} from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet ,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = [
    { id : 1, name: 'John Doe',age : 30},
    { id : 2, name: 'Jane Smith', age : 25},
    { id : 3, name: 'Alice Johnson', age : 28},
    { id : 4, name: 'Bob Brown', age : 35},
    { id : 5, name: 'Charlie White', age : 22}    
  ]

}
