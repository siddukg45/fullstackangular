import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../../interfaces/Itodo';
import { Igettodo } from '../../interfaces/igetdo';

@Injectable({
  providedIn: 'root',
})
export class Delete {

  constructor(private http:HttpClient){}

  deletetodo(id : number)
  {
     return this.http.get<Igettodo>(`https://localhost:7070/Practise/Getdelete/${id}`);
  }
}
