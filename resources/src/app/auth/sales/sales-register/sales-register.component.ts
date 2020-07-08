import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-sales-register',
  templateUrl: './sales-register.component.html',
  styleUrls: ['./sales-register.component.css']
})
export class SalesRegisterComponent implements OnInit {
  productSelect:any = null;
  products:any[];
  quantity:number;
  total:number = 0;
  saleProducts:any[] = [];
  total_final = 0;
  user$:any;
  
  constructor(public firestore: AngularFirestore, 
              private http: HttpClient, private authSvc: AuthService) {
    firestore.collection('productos').valueChanges().subscribe(res => {
      this.products = res;
    });
    this.authSvc.afAuth.user.subscribe( e => {
      this.user$ = e;
    });
   }

  ngOnInit(): void {
  }

  //Select of product
  select(value:any):void {
    if(value != null && typeof value !== 'undefined'){
      this.productSelect = this.products[value];
      if (this.quantity != null && typeof this.productSelect !== 'undefined'){
        this.productSelect.value = value;
        this.total = this.quantity*this.productSelect.precio;
      } 
    } 
  }

  //Set total of product
  setTotal(quantity:number): void {
      this.quantity = quantity;
      if (this.productSelect != null && typeof this.productSelect !== 'undefined')
        this.total = this.quantity*this.productSelect.precio;
  }

  addProduct(): void {
    if (this.quantity != null && this.productSelect != null) {
      this.saleProducts.push({
        product_name: this.productSelect.nombre, 
        product_id: this.productSelect.value, 
        precio_unitario: this.productSelect.precio,
        quantity: this.quantity,
        total: this.total
      });
      this.setTotalFinal();
    } else {
      Swal.fire(
        'Revisa los campos',
        'Vuelve a intentarlo de nuevo',
        'error'
      )
    }
  }

  setTotalFinal(): void {
    this.total_final = 0;
    this.saleProducts.forEach(element => {
      this.total_final += (element.total);
    });
  }

  deleteProduct(index:number) {
    this.saleProducts.splice(index, 1);
    this.setTotalFinal();
  }

  //Create sale
  async createSale() {
    let date = new Date().toLocaleDateString();
    let folio =  Math.floor(Math.random() * (9999 - 1000) + 1000);

    let sale = {
      productos: this.saleProducts,
      fecha: date,
      folio: folio,
      total: this.total_final,
      usuario: this.user$.email
    }

    let headers = new HttpHeaders().set('Content-Type','application/json');
    this.http.post('/api/sales', sale, {headers: headers}).subscribe( e => {
      Swal.fire(
        'Operacion exitosa!',
        'La venta se agrego de forma satisfactoria',
        'success'
      );

      this.quantity = 0;
      this.total = 0;
      this.saleProducts = [];
      this.total_final = 0;

    });
  }
}
