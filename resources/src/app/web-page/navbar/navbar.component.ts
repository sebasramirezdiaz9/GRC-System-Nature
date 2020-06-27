import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/service/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent  {
 public isLogged= false;
 public user: any;

  
 public user$: Observable<any> =  this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService,private router:Router) { }

  
  async logout()
  {
    try{
      this.authSvc.logout();
      this.router.navigate(['/home']);
    }
    catch(error)
    {
      console.log(error);
    }
    
  }


  
  

}
