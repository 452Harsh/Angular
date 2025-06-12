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
  task ="";
  taskList: {id:number,task:string}[] = [];
  addTask(){
    this.taskList.push({id:this.taskList.length + 1, task : this.task})
    this.task = "";
    console.log(this.taskList);
  }
  deleteTask(id:number){
   this.taskList = this.taskList.filter((item)=> item.id != id);
  }

}
