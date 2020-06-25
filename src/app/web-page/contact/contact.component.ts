import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ContactService } from '../../shared/contact.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading = false;
  buttionText = "Enviar";
  form:any;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);



  constructor(private formBuilder: FormBuilder, public contacService:ContactService) {
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
  
    });
    
  }

  ngOnInit(): void {
    

  }

  register() {
    this.loading = true;
    this.buttionText = "Enviando...";
    let user = {
      name: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      message: this.form.value.message
    }
    this.contacService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(data);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Enviar";
      },() => {
        this.loading = false;
        
        this.buttionText = "Enviar";
        Swal.fire(
          'Tu correo ha sido enviado',
          'En breve nos comunicamos contigo',
          'success'
        )
        
      }
    );
  }
  

  


}
