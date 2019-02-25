import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipient-page',
  templateUrl: './recipient-page.component.html',
  styleUrls: ['./recipient-page.component.css']
})
export class RecipientPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.recipientService.getRecipients()
      .subscribe( data => {
        this.recipient = data;
console.log(this.recipientAccountNo);
      });
  };

}
