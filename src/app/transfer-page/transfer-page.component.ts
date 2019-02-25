import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.transactionService.getTransactions()
      .subscribe( data => {
        this.transaction = data;
console.log(this.transaction);
      });
  };



}
