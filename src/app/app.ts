import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router : Router) {}
  goToProfilePage(){
     this.router.navigate(['profile'],{queryParams: {name: 'John Doe'}}); 
  }

}
