import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf ,NgFor} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show = false;
  students = ['alice', 'bob', 'charlie'];
  toggleShow() {
    this.show = !this.show;
  }

}
