import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
export interface Item { total: string; }
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument;

  constructor(public firestore: AngularFirestore) {
    this.getSales();
   }

   getSales() {
    this.sales = this.firestore.collection('sales').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      })));
   }

  ngOnInit(): void {
  }

  deleteSale(id:string) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras recuperar el registro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.itemDoc = this.firestore.doc<Item>("sales/"+id);
        this.itemDoc.delete();
        Swal.fire(
          'Borrado!',
          'El documento ha sido eliminado',
          'success'
        )
      }
    });
  }
}
