import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  form: any;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  products: Observable<any[]>;
  constructor(private formBuilder: FormBuilder, firestore: AngularFirestore) { 
    this.products = firestore.collection('productos').valueChanges();
    this.form = formBuilder.group({
      nombre: ['', [Validators.required]],
      activo: ['', Validators.required],
      presentacion: ['', Validators.required],
      precio: ['', Validators.required],

    });
  }

  ngOnInit(): void {
  }

}
