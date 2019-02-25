import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

private user: User[];
  constructor(private http:HttpClient) { }

   public getUsers() {
    return this.http.get<User[]>('http://localhost:9000/login/getUsers');
  }

public addUser(user:User)
{
    return this.http.post<User[]>('http://localhost:9000/register/addUser');
}

}

