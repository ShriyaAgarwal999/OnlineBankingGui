import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipient } from './recipient.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  constructor(private http:HttpClient) { }



   public getRecipients() {
    return this.http.get<Recipient[]>('http://localhost:9000/recipient/showRecipients');
  }

}

