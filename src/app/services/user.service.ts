import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}
    options = {  
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
