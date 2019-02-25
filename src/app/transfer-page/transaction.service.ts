import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Transaction } from './transaction.model';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }



   public getTransactions() {
    return this.http.get<Transaction[]>('http://localhost:9000/transaction/details');
  }

}

