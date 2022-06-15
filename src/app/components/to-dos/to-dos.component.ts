import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from "./../../model/Todo";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  // Now we can use this icon as variable anywhere.
  faTrashAlt = faTrashAlt;
  //Pay attention on this line.
  todos: Todo[] = [];

  // We have marked this private so outside this class it will nt be accessible to anyone
  // We are passing this in constructor of this class so now it will be accessible in this component
  constructor(private todoService: TodoService) { }
 
  //It automatically fires up when this component loads
  ngOnInit(): void {
    //Here todos was observable that is imagine todos are coming from a database so we have applied subscribe here
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

 deleteTodo(todo: Todo){
  this.todoService.deleteToDo(todo);
 }


}
