import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
   
  }
  async onLogin(){
    const{email, password} = this.loginForm.value;
    console.log(email);
    try{
      const user = this.authSvc.login(email, password);
    }
    catch(error)
    {
      
    }
  }

}
