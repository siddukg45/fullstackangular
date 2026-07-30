import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../../interfaces/Itodo';

@Injectable({
  providedIn: 'root',
})
export class Todo {

  constructor(private http:HttpClient){}

  AddTodo(Addtodo : ToDo)
  {
    return this.http.post<ToDo>('https://localhost:7070/Practise/AddTodo',Addtodo)
  }

}
