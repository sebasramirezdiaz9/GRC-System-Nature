import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {
  sales:any[];
  commissions:any[] = [];
  usuarios:any[] = [];
  mesActual:any = '';
  meses:any[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  constructor(public firestore: AngularFirestore) {
    this.setMonth();
    this.getSales();
    setTimeout( e=> {
      this.setCommissions();
    }, 700);
  }

  setMonth() {
    let mes = new Date().getMonth();
    this.mesActual = this.meses[mes];
  }

  async getSales() {
    this.firestore.collection('sales').valueChanges().subscribe(res => {this.sales = res} );
   }

  setCommissions() {
    this.sales.forEach( element => {
      if((new Date(element.fecha).getMonth()) == (new Date().getMonth())){

        if(!this.commissions.find(com => com.usuario == element.usuario)){
          this.commissions.push({usuario: element.usuario, monto: (element.total * (.06)), ventas: 1})
        } else {
          this.commissions.find(com => com.usuario == element.usuario).monto += (element.total * (.06));
          this.commissions.find(com => com.usuario == element.usuario).ventas += 1;
        }
      }
    });
  }


  ngOnInit(): void {
    
  }

}
