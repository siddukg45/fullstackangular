import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igettodo } from '../../interfaces/igetdo';
import { EditTodo } from '../../interfaces/edittodo';

@Injectable({
  providedIn: 'root',
})
export class Edit {

  constructor(private http : HttpClient){}

  loadedit(id : number)
  {
   return this.http.get<EditTodo>( `https://localhost:7070/Practise/EditTodo/${id}`)
  }
}
