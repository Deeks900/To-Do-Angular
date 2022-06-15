// Having the entire Bussiness Logic
import { Injectable } from '@angular/core';
import { faLevelDown } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { Todo } from "./../model/Todo";

// Injectables allow you to inject the content at root level.So that everyone can access this content
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  //An array of todo
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn C++",
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: "Learn React",
        isComplete: false,
        date: new Date(),
      },
      {
        id: '333',
        title: "Learn Angular",
        isComplete: true,
        date: new Date(),
      },
    ]
   }

   //Reading Part
   getTodos(){
    // of makes todos observable for other components.Now suppose component gets loaded and service is not available till then, it will handle it.
    return of(this.todos)
   }

   //Writing Part
   addTodo(todo: Todo){
    this.todos.push(todo);
   }

   //Updating Part
   changeStatus(todo: Todo){
    this.todos.map(singleTodo => {
      if(todo.id === singleTodo.id){
        todo.isComplete = (!todo.isComplete);
      }
    })
   }

   //Deleting Part
   deleteToDo(todo: Todo){
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id == todo.id
    )

    this.todos.splice(indexofTodo, 1);
   }

}
