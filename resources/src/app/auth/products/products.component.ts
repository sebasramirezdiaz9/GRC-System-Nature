import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
export interface Item { name: string; }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument;
  form: any;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  products: Observable<any[]>;
  constructor(private formBuilder: FormBuilder, public firestore: AngularFirestore) { 
    this.products = firestore.collection('productos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
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

  deleteProduct(id)
  {
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
        this.itemDoc = this.firestore.doc<Item>("productos/"+id);
        this.itemDoc.delete();
        Swal.fire(
          'Borrado!',
          'El documento ha sido eliminado',
          'success'
        )
      }
    })
    
  }

  editProduct(id, nombre, activo, presentacion, precio)
  {
    this.itemDoc = this.firestore.doc<Item>("productos/"+id); 
    let item = {nombre: nombre, activo: activo, presentacion: presentacion, precio: precio};
    this.itemDoc.update(item);
    Swal.fire(
      'Exito!',
      'El producto ha sido actualizado',
      'success'
    );
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
