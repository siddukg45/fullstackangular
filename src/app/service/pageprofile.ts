import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../../interfaces/profile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) {}

  getProfile(id:number) : Observable<Info>
  {
      return this.http.get<Info>(
      `https://localhost:7070/Practise/Profile/${id}`
      );
  }
}