import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = ["alice", "bob", "charlie","bruce","dave","eve","frank","grace"];
  studends = [
    {name: "alice", age: 20},
    {name: "bob", age: 22},
    {name: "charlie", age: 21},
    {name: "bruce", age: 23},
    {name: "dave", age: 24},
    {name: "eve", age: 22},     
  ]
}
