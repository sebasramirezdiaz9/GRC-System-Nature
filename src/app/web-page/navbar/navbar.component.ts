import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
 public isLogged= false;
 public user: any
  
  constructor(private authSvc: AuthService) { }

  async ngOnInit(): Promise<void> {
    console.log('Navbar');
    this.user = await this.authSvc.getCurrenUser();
    if (this.user){
      this.isLogged = true;
      console.log(this.user);
    }

    
  }

  
  

}
