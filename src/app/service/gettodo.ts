import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToDo } from '../../interfaces/Itodo';
import { Igettodo } from '../../interfaces/igetdo';

@Injectable({
  providedIn: 'root',
})
export class Gettodo {
  constructor(private http : HttpClient){}

  gettodo(id : number)
  {
   return this.http.get<Igettodo[]>(`https://localhost:7070/Practise/GetTodo/${id}`);
  }
}
