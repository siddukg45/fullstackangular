import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { Igettodo } from '../../interfaces/igetdo';

@Injectable({
  providedIn: 'root',
})
export class Deletesuccess {

  constructor(private http: HttpClient){}

  delsucc(todo:Igettodo)
  {
    return this.http.delete<Igettodo>(`https://localhost:7070/Practise/DeleteTodo/${todo.id}`)
  }
}
