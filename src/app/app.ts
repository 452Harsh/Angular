import { Component, Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from "./user/user";
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users :undefined|string[];
  handleUsers (users : string[]){
    console.log(users);
    this.users = users;
  }  

}
