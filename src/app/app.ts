import { Component, Input} from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from "./user/user";
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "harsh";
  onUserChange(user: string) {
    this.name = user;
  }
  users = ['John', 'Jane', 'Doe'];

}
