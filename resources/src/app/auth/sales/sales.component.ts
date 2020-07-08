import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:any[] = [];

  constructor(public firestore: AngularFirestore) {
    firestore.collection('sales').valueChanges().subscribe(res => {
      this.sales = res;
    });
   }

  ngOnInit(): void {
  }

}
