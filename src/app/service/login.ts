import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../interfaces/logindto';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(private http : HttpClient){}

  loginUser(check : UserLogin){
    return this.http.post('https://localhost:7070/Practise/Loginss',check)
  }
}
