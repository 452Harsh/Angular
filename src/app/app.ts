import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterLink, Header,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 

}
