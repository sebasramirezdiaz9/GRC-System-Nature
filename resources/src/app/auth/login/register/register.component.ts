import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  form: any;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

 

  constructor(private formBuilder: FormBuilder,private authSvc: AuthService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],

    });
  }




  ngOnInit(): void {}

  async onRegister()
  {
  
   if(this.form.value.password==this.form.value.password2){

    const {email, password} = this.form.value;
    try{
      const user = await this.authSvc.register(email, password);
      if(user)
      {
        Swal.fire({
          icon: 'success',
          title: 'El usuario se ha registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }catch(error)
    {
       
    }
   }else{
    Swal.fire(
      'Las contraseñas no coinciden',
      'Vuelve a intentarlo de nuevo',
      'error'
    )
   }
    
  }

}