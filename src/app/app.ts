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
  bgColor ="red";
  fs = "40px";
  headingSizeBig = "80px";
  headingSizeSmall = "40px";
  zoom = !true;
  updateHeadingSize() {
    this.zoom = !this.zoom;
  }
}
