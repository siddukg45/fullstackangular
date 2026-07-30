import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Register {

  constructor(private http : HttpClient){}
  
  saveUser(user : regdto)
  {
    return this.http.post('https://localhost:7070/Practise',user)
  }
}
