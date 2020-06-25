import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';

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

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
   
  }
  onLogin(){
    const{email, password} = this.loginForm.value;
    try{
      const user = this.authSvc.login(email, password);
      if(user)
      {
        console.log("ya estas adentro");
      }
    }
    catch(error)
    {
      
    }
  }

}
