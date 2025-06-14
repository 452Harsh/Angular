import { Component, Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,CurrencyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  amount:number = 100;

}
