import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
users = ['Alice', 'Bob', 'Charlie','David', 'Eve'];
name = "";
name2 = "";

changeName(event: Event) {
  const input = event.target as HTMLInputElement;
  this.name2 = input.value;  }

}
