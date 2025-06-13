import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   email = new FormControl('',[Validators.required,Validators.email]);
   password = new FormControl('',[Validators.minLength(5),Validators.required]);
   displayValue(){
    console.log(this.email.value,this.password.value);
   }
   setValues(){
    this.email.setValue('1@gmail.com');
    this.password.setValue('123456');
   }

}
