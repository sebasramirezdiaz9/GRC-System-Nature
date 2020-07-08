import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
export interface Item { name: string; }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  form: any;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  products: Observable<any[]>;
  constructor(private formBuilder: FormBuilder, firestore: AngularFirestore) { 
    this.products = firestore.collection('productos').valueChanges();
    this.itemsCollection = firestore.collection<Item>('productos');
    this.form = formBuilder.group({
      nombre: ['', [Validators.required]],
      activo: ['', Validators.required],
      presentacion: ['', Validators.required],
      precio: ['', Validators.required],

    });
  }

  ngOnInit(): void {
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  async addProduct()
  {
    var validate = true;
    const item = this.form.value;
    Object.keys(this.form.controls).forEach(key => {
      if(this.form.controls[key].status == 'INVALID')
      {
         validate = false;
      }
    });
    if(validate)
    {
      this.addItem(item);
    }
    else{
      Swal.fire(
        'Revisa los campos',
        'Vuelve a intentarlo de nuevo',
        'error'
      )
    }
    
  }
}
