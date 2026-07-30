import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igettodo } from '../../interfaces/igetdo';
import { EditTodo } from '../../interfaces/edittodo';

@Injectable({
  providedIn: 'root',
})
export class Updateedit {

  constructor(private http:HttpClient){}

  updateTodo(todo : EditTodo)
  {
    return this.http.put<EditTodo>(`https://localhost:7070/Practise/saveTodo/${todo.id}`,todo);
  }

}
